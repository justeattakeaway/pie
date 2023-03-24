import React, { useState, useRef } from 'react';
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
                        <Button variant={variantName} onClick={switchVariant}>
                            Switch variant
                        </Button>
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
                                        <Button size={size} key={key}>{key.toLowerCase()}</Button>
                                    );
                                })
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
