import React from 'react';
import dynamic from 'next/dynamic'

const PButton = dynamic(() => import('../components/PieButton'), { ssr: false });

export default function Home() {
    return (
        <PButton />
    )
  };
  