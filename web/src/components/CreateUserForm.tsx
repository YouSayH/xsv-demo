'use client';

import { useState } from 'react';

export default function CreateUserForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleCreateUser = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('[React Component] CreateUserForm submitting data:', { name, email });

        fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('[React Component] CreateUserForm post success:', data);
                alert(`User created! ID: ${data.id}`);
                setName('');
                setEmail('');
            })
            .catch((err) => console.error('[React Component] CreateUserForm post error:', err));
    };

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Create User (POST /api/users)</h2>
            <form onSubmit={handleCreateUser} style={{ marginTop: '10px' }}>
                <div style={{ marginBottom: '8px' }}>
                    <label style={{ display: 'block' }}>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required style={{ border: '1px solid #ccc', padding: '5px', width: '200px' }} />
                </div>
                <div style={{ marginBottom: '8px' }}>
                    <label style={{ display: 'block' }}>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ border: '1px solid #ccc', padding: '5px', width: '200px' }} />
                </div>
                <button type="submit" style={{ padding: '6px 12px', background: '#00cc66', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    Submit User
                </button>
            </form>
        </div>
    );
}