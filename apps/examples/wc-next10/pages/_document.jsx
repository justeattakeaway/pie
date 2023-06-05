/* eslint-disable react/no-danger */
import React from 'react';
import Document, {
    Html, Main, NextScript, Head,
} from 'next/document';

export default class CustomDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <title>Create Next App</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@justeat/pie-design-tokens/dist/jet.css" />
                    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@justeat/pie-design-tokens/dist/jet-hsl-colors.css" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
