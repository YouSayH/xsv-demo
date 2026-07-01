'use client';

import { useState } from 'react';

export default function UserDetail() {
    const [userId, setUserId] = useState<string>('1');
    const [user, setUser] = useState<any>(null);

    const handleFetchDetail = () => {
        console.log(`[React Component] UserDetail triggering fetch for ID: ${userId}`);
        fetch(`http://localhost:8080/api/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('[React Component] UserDetail fetch success:', data);
                setUser(data);
            })
            .catch((err) => console.error('[React Component] UserDetail fetch error:', err));
    };

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>User Detail (GET /api/users/{"{id}"})</h2>
            <div style={{ marginTop: '10px' }}>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    style={{ border: '1px solid #ccc', padding: '5px', width: '60px', marginRight: '10px' }}
                />
                <button onClick={handleFetchDetail} style={{ padding: '5px 10px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    Fetch Detail
                </button>
            </div>
            {user ? (
                <div style={{ marginTop: '10px', background: '#f5f5f5', padding: '10px' }}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p style={{ marginTop: '10px', color: '#666' }}>No user fetched yet.</p>
            )}
        </div>
    );
}