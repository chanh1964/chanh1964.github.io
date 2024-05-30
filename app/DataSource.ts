/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == 'production';

const DataSource = {
  PUBLICATIONS: isProd
    ? 'https://gist.githubusercontent.com/chanh1964/f92b73b8df77b99ae107dc177a5b789c/raw'
    : '/data/publications.json',
  UPDATES: isProd
    ? 'https://gist.githubusercontent.com/chanh1964/f92b73b8df77b99ae107dc177a5b789c/raw'
    : '/data/updates.json',
};

export default DataSource;
