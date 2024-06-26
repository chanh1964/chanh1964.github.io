'use client';

import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';

import { generatePostContent } from '../components/ChanhDetailModal';
import DataSource from '../DataSource';
import { Update } from '../types';

export default function PostPage() {
  const [data, setData] = useState<Update>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const post_id = window.location.href.split('#')[1];
    if (post_id) {
      fetch(DataSource.UPDATES)
        .then((res) => res.json())
        .then((data) => {
          const _data = data.filter((entry: Update) => entry.id == post_id);
          setData(_data[0]);
          setLoading(false);
        });
    }
  }, []);

  return isLoading ? (
    <Skeleton active />
  ) : (
    <>
      <h2 className="mb-2">{data?.title}</h2>
      {generatePostContent(data)}
    </>
  );
}
