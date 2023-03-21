import React, { useState } from 'react';
import Head from 'next/head';
import { createComponent } from '@lit-labs/react';
import { PieButton, BUTTON_SIZE, BUTTON_VARIANT } from '@justeattakeaway/pie-button';

const Button = createComponent({
    tagName: 'pie-button',
    elementClass: PieButton,
    react: React,
    events: { onCustomEvent: 'CustomEvent' },
});

export default function Home () {
    const [count, setCount] = useState(0);
    const [variantIndex, setVariantIndex] = useState(0);

    const toggleVariant = () => setVariantIndex(variantIndex + 1);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const variants = Object.keys(BUTTON_VARIANT);
    const variantKey = variants[variantIndex % variants.length];
    const variantFromCount = BUTTON_VARIANT[variantKey];

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
                        <Button onClick={decrement}>decrement</Button>
                        <div className="padding">
                            Counter: { count }
                        </div>
                        <Button onClick={increment}>decrement</Button>
                    </div>
                </div>
                <h2>Test props</h2>
                <div>
                    <h3>Click the button to switch the variant</h3>
                    <div className="flex-wrapper">
                        <Button variant={variantFromCount} onClick={toggleVariant}>
                            Switch variant
                        </Button>
                        <div className='padding'>Variant: <b>{variantFromCount}</b></div>
                    </div>
                </div>
                <div>
                    <h3>Button sizes</h3>
                    <div>
                        {
                            Object.keys(BUTTON_SIZE)
                                .map((key) => (
                                    <Button size={BUTTON_SIZE[key]} key={key}>{key.toLowerCase()}</Button>
                                ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
