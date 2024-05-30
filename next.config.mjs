/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true
    }
    // webpack(config) {
    //     config.resolve.alias = {
    //         ...config.resolve.alias,
    //
    //         '@': './src/*',
    //         "@styles": "./src/shared/styles/globals.scss"
    //     }
    // }
};

export default nextConfig;
