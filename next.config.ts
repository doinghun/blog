/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
