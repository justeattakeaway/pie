const withLitSSR = require('@lit-labs/nextjs')();

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = withLitSSR(nextConfig);
