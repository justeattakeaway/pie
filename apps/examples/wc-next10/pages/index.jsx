import React from 'react';
import dynamic from 'next/dynamic'

const Counter = dynamic(() => import('../Counter'), { ssr: false });

export default function Home() {
    return (
        <>
            <main>
                <Counter />
            </main>
        </>
    )
};
