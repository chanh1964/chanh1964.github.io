'use client';

import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';

import { ChanhUpdatesTable } from '../components';
import DataSource from '../DataSource';
import { Update } from '../types';

export default function UpdatesPage() {
  const [data, setData] = useState<Update[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DataSource.UPDATES)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return isLoading ? <Skeleton active /> : <ChanhUpdatesTable data={data} />;
}
