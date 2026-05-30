import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  CARD_STATUS,
  makeCard,
  makeDeployApproval,
  respondToCard,
  getDesktopStatusLine,
} from '../shared/actionCard.js';

describe('actionCard', () => {
  describe('makeCard', () => {
    it('creates a valid pending DeployApproval card', () => {
      const card = makeCard({
        type: 'DeployApproval',
        title: 'Test Title',
        body: 'Test Body',
        actions: [{ id: 'approve', label: 'Approve' }],
      });

      assert.equal(card.type, 'DeployApproval');
      assert.equal(card.title, 'Test Title');
      assert.equal(card.body, 'Test Body');
      assert.equal(card.status, CARD_STATUS.PENDING);
      assert.ok(card.id);
      assert.ok(Array.isArray(card.actions));
    });

    it('generates unique IDs for different cards', async () => {
      const card1 = makeCard({ type: 'Test', title: 'T1', body: 'B1', actions: [] });
      await new Promise(r => setTimeout(r, 10));
      const card2 = makeCard({ type: 'Test', title: 'T2', body: 'B2', actions: [] });
      
      assert.notEqual(card1.id, card2.id);
    });
  });

  describe('makeDeployApproval', () => {
    it('returns a card with correct DeployApproval structure', () => {
      const card = makeDeployApproval();

      assert.equal(card.id, 'deploy-hotfix-v241');
      assert.equal(card.type, 'DeployApproval');
      assert.equal(card.title, 'Hotfix deploy ready. Approve?');
      assert.ok(card.body.includes('v2.4.1'));
      assert.equal(card.status, CARD_STATUS.PENDING);
      assert.equal(card.actions.length, 2);
      assert.ok(card.actions.some(a => a.id === 'approve'));
      assert.ok(card.actions.some(a => a.id === 'reject'));
    });
  });

  describe('respondToCard', () => {
    it('sets approved state correctly', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'approve' });

      assert.equal(responded.status, CARD_STATUS.APPROVED);
      assert.equal(responded.id, card.id);
      assert.equal(responded.type, card.type);
    });

    it('sets rejected state correctly', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'reject' });

      assert.equal(responded.status, CARD_STATUS.REJECTED);
    });

    it('preserves card id, type, title, body', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'approve', note: 'LGTM' });

      assert.equal(responded.id, card.id);
      assert.equal(responded.type, card.type);
      assert.equal(responded.title, card.title);
      assert.equal(responded.body, card.body);
    });

    it('stores note correctly', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'approve', note: 'Ship it!' });

      assert.equal(responded.note, 'Ship it!');
    });

    it('trims empty note to undefined', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'approve', note: '   ' });

      assert.equal(responded.note, undefined);
    });

    it('stores respondedBy correctly', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'approve', respondedBy: 'test-user' });

      assert.equal(responded.respondedBy, 'test-user');
    });

    it('defaults respondedBy to mobile', () => {
      const card = makeDeployApproval();
      const responded = respondToCard(card, { actionId: 'approve' });

      assert.equal(responded.respondedBy, 'mobile');
    });

    it('sets respondedAt timestamp', () => {
      const card = makeDeployApproval();
      const before = Date.now();
      const responded = respondToCard(card, { actionId: 'approve' });
      const after = Date.now();

      const respondedAt = new Date(responded.respondedAt).getTime();
      assert.ok(respondedAt >= before && respondedAt <= after);
    });

    it('does not corrupt state on repeated response', () => {
      const card = makeDeployApproval();
      const first = respondToCard(card, { actionId: 'approve', note: 'First' });
      const second = respondToCard(first, { actionId: 'approve', note: 'Second' });

      assert.equal(second.status, CARD_STATUS.APPROVED);
      assert.equal(second.note, 'Second');
      assert.equal(second.id, card.id);
    });
  });

  describe('getDesktopStatusLine', () => {
    it('returns "No active action card" for null', () => {
      assert.equal(getDesktopStatusLine(null), 'No active action card.');
      assert.equal(getDesktopStatusLine(undefined), 'No active action card.');
    });

    it('returns card title for pending card', () => {
      const card = makeDeployApproval();
      assert.equal(getDesktopStatusLine(card), card.title);
    });

    it('returns "Deployment triggered via mobile approval" for approved card', () => {
      const card = makeDeployApproval();
      const approved = respondToCard(card, { actionId: 'approve', respondedBy: 'mobile' });
      
      assert.equal(getDesktopStatusLine(approved), 'Deployment triggered via mobile approval.');
    });

    it('returns "Deployment rejected via mobile" for rejected card', () => {
      const card = makeDeployApproval();
      const rejected = respondToCard(card, { actionId: 'reject', respondedBy: 'mobile' });
      
      assert.equal(getDesktopStatusLine(rejected), 'Deployment rejected via mobile.');
    });
  });
});
