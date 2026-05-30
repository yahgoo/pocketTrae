/** @typedef {'pending' | 'approved' | 'rejected'} CardStatus */

/** @typedef {{ id: string, label: string, kind?: string }} CardAction */

/**
 * @typedef {Object} ActionCard
 * @property {string} id
 * @property {string} type
 * @property {string} title
 * @property {string} body
 * @property {CardAction[]} actions
 * @property {CardStatus} status
 * @property {string} [note]
 * @property {string} [respondedBy]
 * @property {string} [respondedAt]
 */

export const CARD_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
};

/**
 * @param {{ type: string, title: string, body: string, actions: CardAction[], id?: string }} input
 * @returns {ActionCard}
 */
export function makeCard({ type, title, body, actions, id }) {
  return {
    id: id ?? `card-${Date.now()}`,
    type,
    title,
    body,
    actions,
    status: CARD_STATUS.PENDING,
  };
}

/** @returns {ActionCard} */
export function makeDeployApproval() {
  return makeCard({
    id: 'deploy-hotfix-v241',
    type: 'DeployApproval',
    title: 'Hotfix deploy ready. Approve?',
    body: 'Production hotfix v2.4.1 is staged and ready to ship.',
    actions: [
      { id: 'approve', label: 'Approve', kind: 'primary' },
      { id: 'reject', label: 'Reject', kind: 'danger' },
    ],
  });
}

/**
 * @param {ActionCard} card
 * @param {{ actionId: string, note?: string, respondedBy?: string, respondedAt?: string }} response
 * @returns {ActionCard}
 */
export function respondToCard(card, { actionId, note, respondedBy, respondedAt }) {
  const status =
    actionId === 'approve'
      ? CARD_STATUS.APPROVED
      : actionId === 'reject'
        ? CARD_STATUS.REJECTED
        : card.status;

  return {
    ...card,
    status,
    note: note?.trim() || undefined,
    respondedBy: respondedBy ?? 'mobile',
    respondedAt: respondedAt ?? new Date().toISOString(),
  };
}

/** @param {ActionCard | null | undefined} card @returns {string} */
export function getDesktopStatusLine(card) {
  if (!card) return 'No active action card.';
  if (card.status === CARD_STATUS.APPROVED) {
    return 'Deployment triggered via mobile approval.';
  }
  if (card.status === CARD_STATUS.REJECTED) {
    return 'Deployment rejected via mobile.';
  }
  return card.title;
}
