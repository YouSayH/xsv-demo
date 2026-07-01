'use client';

import { useEffect, useState } from 'react';

export default function UserList() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        console.log('[React Component] UserList mounted. Initiating fetch...');
        fetch('http://localhost:8080/api/users')
            .then((res) => res.json())
            .then((data) => {
                console.log('[React Component] UserList fetch success:', data);
                setUsers(data);
            })
            .catch((err) => console.error('[React Component] UserList fetch error:', err));
    }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>User List (GET /api/users)</h2>
            <ul style={{ marginTop: '10px' }}>
                {users.map((user) => (
                    <li key={user.id} style={{ padding: '4px 0' }}>
                        ID {user.id}: <strong>{user.name}</strong> ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}