import { root, useState, useEffect, useCallback } from '@lynx-js/react';
import type { ReactNode } from '@lynx-js/react';

// Types matching shared/actionCard.js schema
type CardStatus = 'pending' | 'approved' | 'rejected';

interface CardAction {
  id: string;
  label: string;
  kind?: string;
}

interface ActionCard {
  id: string;
  type: string;
  title: string;
  body: string;
  actions: CardAction[];
  status: CardStatus;
  note?: string;
  respondedBy?: string;
  respondedAt?: string;
}

// Get current LAN IP dynamically - this avoids hardcoding
// In production, this could be an environment variable
const getCurrentIP = (): string => {
  // This will be replaced with the actual IP at build time
  // or could be passed via environment variable
  return (typeof window !== 'undefined' && (window as any).__LAN_IP__) || '172.22.23.209';
};

const SERVER_URL = `http://${getCurrentIP()}:3000`;

const CARD_STATUS = {
  PENDING: 'pending' as const,
  APPROVED: 'approved' as const,
  REJECTED: 'rejected' as const,
};

function App(): ReactNode {
  const [card, setCard] = useState<ActionCard | null>(null);
  const [note, setNote] = useState('');
  const [connectionStatus, setConnectionStatus] = useState<'connecting' | 'connected' | 'error'>('connecting');
  const [isResponding, setIsResponding] = useState(false);

  const fetchState = useCallback(async () => {
    try {
      const response = await fetch(`${SERVER_URL}/state`);
      if (response.ok) {
        const data = await response.json();
        setCard(data.card);
        setConnectionStatus('connected');
      }
    } catch (err) {
      console.error('Failed to fetch state:', err);
      setConnectionStatus('error');
    }
  }, []);

  useEffect(() => {
    fetchState();
    const pollInterval = setInterval(fetchState, 2000);
    return () => clearInterval(pollInterval);
  }, [fetchState]);

  const handleResponse = async (actionId: 'approve' | 'reject') => {
    if (!card || isResponding) return;
    
    setIsResponding(true);
    
    try {
      const response = await fetch(`${SERVER_URL}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          actionId,
          note: note.trim(),
          respondedBy: 'lynx-mobile'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to respond');
      }
    } catch (err) {
      console.error('Failed to respond:', err);
      setConnectionStatus('error');
    } finally {
      setIsResponding(false);
    }
  };

  const styles = {
    container: { padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' } as Record<string, any>,
    card: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', marginBottom: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } as Record<string, any>,
    title: { fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: '#333' } as Record<string, any>,
    body: { fontSize: '14px', color: '#666', marginBottom: '12px', lineHeight: '1.5' } as Record<string, any>,
    statusRow: { flexDirection: 'row', alignItems: 'center', marginTop: '12px' } as Record<string, any>,
    statusLabel: { fontSize: '14px', marginRight: '8px', color: '#666' } as Record<string, any>,
    statusBadge: { fontSize: '12px', padding: '4px 10px', borderRadius: '12px', backgroundColor: '#ffd666', color: '#613400', fontWeight: '600' } as Record<string, any>,
    label: { fontSize: '14px', color: '#666', marginBottom: '6px', marginTop: '16px' } as Record<string, any>,
    input: { width: '100%', minHeight: '72px', borderRadius: '8px', borderWidth: '1px', borderColor: '#ddd', backgroundColor: 'white', color: '#333', padding: '12px', fontSize: '14px' } as Record<string, any>,
    buttonRow: { flexDirection: 'row', gap: '10px', marginTop: '16px' } as Record<string, any>,
    rejectButton: { flex: 1, backgroundColor: '#666', color: 'white', borderRadius: '8px', padding: '14px 12px', fontSize: '16px', fontWeight: '600', borderWidth: '0px' } as Record<string, any>,
    approveButton: { flex: 1, backgroundColor: '#52c41a', color: 'white', borderRadius: '8px', padding: '14px 12px', fontSize: '16px', fontWeight: '600', borderWidth: '0px' } as Record<string, any>,
    emptyState: { padding: '40px', alignItems: 'center' } as Record<string, any>,
    emptyText: { fontSize: '16px', color: '#999', textAlign: 'center' } as Record<string, any>,
    emptySubtext: { fontSize: '12px', color: '#bbb', marginTop: '12px', textAlign: 'center' } as Record<string, any>,
    connectionStatus: { alignItems: 'center', marginTop: '16px' } as Record<string, any>,
    connectingText: { fontSize: '12px', color: '#999' } as Record<string, any>,
    connectedText: { fontSize: '12px', color: '#52c41a' } as Record<string, any>,
    errorText: { fontSize: '12px', color: '#ff4d4f' } as Record<string, any>,
  };

  const renderCard = () => {
    if (!card) {
      return (
        <view style={styles.emptyState}>
          <text style={styles.emptyText}>Waiting for an action card from desktop...</text>
          <text style={styles.emptySubtext}>Go to desktop and click "Emit Deploy Card"</text>
        </view>
      );
    }

    const isPending = card.status === CARD_STATUS.PENDING;

    if (!isPending) {
      const label = card.status === CARD_STATUS.APPROVED ? 'Approved' : 'Rejected';
      const color = card.status === CARD_STATUS.APPROVED ? '#52c41a' : '#ff4d4f';
      
      return (
        <view style={styles.card}>
          <text style={styles.title}>{card.type}</text>
          <text style={{...styles.body, fontWeight: 'bold'}}>{card.title}</text>
          <text style={{...styles.body, color, fontWeight: '600', marginTop: '12px'}}>
            {label}{card.note ? `: "${card.note}"` : ''}
          </text>
          {card.respondedBy && (
            <text style={{...styles.body, marginTop: '8px', fontSize: '12px', color: '#999'}}>
              by {card.respondedBy}
            </text>
          )}
        </view>
      );
    }

    return (
      <view>
        <view style={styles.card}>
          <text style={{...styles.title, fontSize: '12px', color: '#1890ff', textTransform: 'uppercase'}}>{card.type}</text>
          <text style={styles.title}>{card.title}</text>
          <text style={styles.body}>{card.body}</text>
          <view style={styles.statusRow}>
            <text style={styles.statusLabel}>Status:</text>
            <text style={styles.statusBadge}>{card.status}</text>
          </view>
        </view>
        
        <text style={styles.label}>Optional note</text>
        <input
          style={styles.input}
          value={note}
          placeholder="Ship it."
          onChange={(e) => setNote((e.target as any).value)}
        />
        
        <view style={styles.buttonRow}>
          <view 
            style={{...styles.rejectButton, opacity: isResponding ? 0.5 : 1}}
            bindtap={() => !isResponding && handleResponse('reject')}
          >
            <text style={{color: 'white', fontSize: '16px', fontWeight: '600'}}>Reject</text>
          </view>
          <view 
            style={{...styles.approveButton, opacity: isResponding ? 0.5 : 1}}
            bindtap={() => !isResponding && handleResponse('approve')}
          >
            <text style={{color: 'white', fontSize: '16px', fontWeight: '600'}}>Approve</text>
          </view>
        </view>
      </view>
    );
  };

  return (
    <view style={styles.container}>
      <view style={{alignItems: 'center', marginBottom: '20px', paddingTop: '8px'}}>
        <text style={{fontSize: '20px', fontWeight: 'bold', color: '#333'}}>relayTrae</text>
        <text style={{fontSize: '14px', color: '#666', marginTop: '6px'}}>Mobile Action Card (Lynx)</text>
      </view>
      
      <text style={{fontSize: '12px', color: '#999', textAlign: 'center', marginBottom: '16px'}}>Step 8: Lynx mobile surface</text>
      
      {renderCard()}
      
      <view style={styles.connectionStatus}>
        {connectionStatus === 'connecting' && (
          <text style={styles.connectingText}>Connecting...</text>
        )}
        {connectionStatus === 'connected' && (
          <text style={styles.connectedText}>Connected via polling</text>
        )}
        {connectionStatus === 'error' && (
          <text style={styles.errorText}>Connection error</text>
        )}
      </view>
    </view>
  );
}

root.render(<App />);
