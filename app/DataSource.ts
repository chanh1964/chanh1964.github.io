/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == 'production';

const DataSource = {
  PUBLICATIONS: isProd
    ? 'https://gist.githubusercontent.com/chanh1964/f92b73b8df77b99ae107dc177a5b789c/raw'
    : '/data/publications.json',
  UPDATES: isProd
    ? 'https://gist.githubusercontent.com/chanh1964/85429099b18d7c0971ba4b689c38910b/raw'
    : '/data/updates.json',
  UPDATES_LATEST: isProd
    ? 'https://gist.githubusercontent.com/chanh1964/c82d947c80b8d37f373c3bf4c044685a/raw'
    : '/data/updates-latest.json',
};

export default DataSource;
