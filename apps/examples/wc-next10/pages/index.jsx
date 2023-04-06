import React, { useState, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

const PButton = dynamic(() => import('../components/PieButton'), { ssr: false });


export default function Home() {
    return (
        typeof window !== 'undefined' &&
        <PButton />
    )
  };
  