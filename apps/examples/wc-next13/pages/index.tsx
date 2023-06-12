import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { buttonSizes, buttonVariants } from '@justeattakeaway/pie-button';
import type { BUTTON_SIZE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';
import { PieButton } from '@justeattakeaway/pie-button/dist/react';

export default function Home () {
    const variantIndex = useRef(0);
    const [count, setCount] = useState(0);
    const [variantName, setVariantName] = useState('primary');

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const switchVariant = () => {
        variantIndex.current += 1;
        const variantsKeys: string[] = buttonVariants;
        const variant: BUTTON_VARIANT = buttonVariants[variantIndex.current % variantsKeys.length];

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
                        <PieButton variant={variantName} onClick={switchVariant}>
                            Switch variant
                        </PieButton>
                        <div className='padding'>Variant: <b>{variantName}</b></div>
                    </div>
                </div>
                <div>
                    <h3>Button sizes</h3>
                    <div>
                        {
                            buttonSizes
                                .map((key, index) => {
                                    const size: BUTTON_SIZE = buttonSizes[index];

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
