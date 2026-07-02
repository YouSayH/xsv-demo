'use client';

import { useEffect, useState } from 'react';

// Python(FastAPI) 側バックエンドを呼ぶコンポーネント（クロススタック多言語検証用）
export default function ItemListPy() {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        console.log('[React Component] ItemListPy mounted. Initiating fetch...');
        fetch('http://localhost:8001/api/items')
            .then((res) => res.json())
            .then((data) => {
                console.log('[React Component] ItemListPy fetch success:', data);
                setItems(data);
            })
            .catch((err) => console.error('[React Component] ItemListPy fetch error:', err));
    }, []);

    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Item List — Python API (GET :8001/api/items)</h2>
            <ul style={{ marginTop: '10px' }}>
                {items.map((item) => (
                    <li key={item.id} style={{ padding: '4px 0' }}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
