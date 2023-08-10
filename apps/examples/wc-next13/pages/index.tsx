import React, { useState, useRef } from 'react';
import Head from 'next/head';
import {
    PieButton, ButtonProps, sizes, variants,
} from '@justeattakeaway/pie-button/dist/react';
import '@justeattakeaway/pie-css';

export default function Home () {
    const variantIndex = useRef(0);
    const [count, setCount] = useState(0);
    const [variantName, setVariantName] = useState<ButtonProps['variant']>('primary');

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const switchVariant = () => {
        variantIndex.current += 1;
        const variant: ButtonProps['variant'] = variants[variantIndex.current % variants.length];

        setVariantName(variant);
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h2>Test click event</h2>
                <div>
                    <h3>Counter</h3>
                    <div className="flex-wrapper">
                        <PieButton onClick={decrement}>decrement</PieButton>
                        <div className="padding">
                            Counter: { count }
                        </div>
                        <PieButton onClick={increment}>increment</PieButton>
                    </div>
                </div>
                <h2>Test props</h2>
                <div>
                    <h3>Click the button to switch the variant</h3>
                    <div className="flex-wrapper">
                        <PieButton>
                            Switch variant
                        </PieButton>
                        <div className='padding'>Variant: <b>{variantName}</b></div>
                    </div>
                </div>
                <div>
                    <h3>Button sizes</h3>
                    <div>
                        {
                            sizes
                                .map((key, index) => {
                                    const size: ButtonProps['size'] = sizes[index];

                                    return (
                                        <PieButton size={size} key={key}>{key.toLowerCase()}</PieButton>
                                    );
                                })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
