import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

const PButton = dynamic(() => import('../components/PieButton'), { ssr: false });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <PButton />
            </main>
        </>
    )
};
