// import BuilderDevTools from '@builder.io/dev-tools/next';

// DEVTOOLS BUILDER enabled wrap nextConfig
// const nextConfig = BuilderDevTools()({...})

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true
  }
};

export default nextConfig;
