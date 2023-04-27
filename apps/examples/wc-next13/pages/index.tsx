import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { PButton, BUTTON_SIZE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

export default function Home () {
    const variantIndex = useRef(0);
    const [count, setCount] = useState(0);
    const [variantName, setVariantName] = useState(BUTTON_VARIANT.PRIMARY);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const switchVariant = () => {
        variantIndex.current += 1;
        const variantsKeys:string[] = Object.keys(BUTTON_VARIANT);
        const variantKey:string = variantsKeys[variantIndex.current % variantsKeys.length];
        const variant:BUTTON_VARIANT = BUTTON_VARIANT[variantKey as keyof typeof BUTTON_VARIANT];

        setVariantName(variant);
    };

    const handleCustomEvent = () => console.log('onCustomEvent was triggered');

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
                        <PButton onClick={decrement}>decrement</PButton>
                        <div className="padding">
                            Counter: { count }
                        </div>
                        <PButton onClick={increment}
                            onCustomEvent={handleCustomEvent}>increment</PButton>
                    </div>
                </div>
                <h2>Test props</h2>
                <div>
                    <h3>Click the button to switch the variant</h3>
                    <div className="flex-wrapper">
                        <PButton variant={variantName} onClick={switchVariant}>
                            Switch variant
                        </PButton>
                        <div className='padding'>Variant: <b>{variantName}</b></div>
                    </div>
                </div>
                <div>
                    <h3>Button sizes</h3>
                    <div>
                        {
                            Object.keys(BUTTON_SIZE)
                                .map((key) => {
                                    const size:BUTTON_SIZE = BUTTON_SIZE[key as keyof typeof BUTTON_SIZE];

                                    return (
                                        <PButton size={size} key={key}>{key.toLowerCase()}</PButton>
                                    );
                                })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
