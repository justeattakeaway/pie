import React from 'react';
import dynamic from 'next/dynamic';

const Counter = dynamic(() => import('../Counter'), { ssr: false });
const VariantSwitch = dynamic(() => import('../VariantSwitch'), { ssr: false });
const ButtonSizes = dynamic(() => import('../ButtonSizes'), { ssr: false });

export default function Home() {
    return (
        <>
            <Counter />
            <VariantSwitch />
            <ButtonSizes />
        </>
    );
}
