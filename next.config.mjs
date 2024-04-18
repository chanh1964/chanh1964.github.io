/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/chanh1964.github.io' : '',
  transpilePackages: [
    'antd',
    'rc-util',
    '@babel/runtime',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-pagination',
    'rc-picker',
    'rc-tree',
    'rc-table',
  ],
};

export default nextConfig;
