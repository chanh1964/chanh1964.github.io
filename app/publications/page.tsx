'use client';

import { Collapse, CollapseProps, Skeleton, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';

import { ExternalLink } from '../components/icons';
import DataSource from '../DataSource';
import { PublicationInfo, Publications } from '../types';

export default function PublicationsPage() {
  const [data, setData] = useState<Publications>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DataSource.PUBLICATIONS)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const columns: ColumnsType<PublicationInfo> = [
    {
      align: 'left',
      render: (record: PublicationInfo) => {
        return (
          <span>
            {`${record.authors}, ${Math.trunc(record.date / 10000)}`},{' '}
            <em>
              <strong>{record.title}</strong>
            </em>
            , {record.properties}.{' '}
            {record.link ? (
              <a href={record.link} target="_blank" className="chanh-link">
                {record.link} <ExternalLink />
              </a>
            ) : (
              '(Accepted for Publication)'
            )}
          </span>
        );
      },
    },
  ];

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h1>Journal Articles (Peer-Reviewed)</h1>,
      style: { border: 'none' },
      children: (
        <Table
          tableLayout="fixed"
          className="chanh-table publications-table"
          dataSource={data?.journal}
          columns={columns}
          loading={isLoading}
          pagination={{
            pageSize: data?.journal.length,
            hideOnSinglePage: true,
          }}
        />
      ),
    },
    {
      key: '2',
      label: <h1>Conference Papers (Peer-Reviewed)</h1>,
      style: { border: 'none' },
      children: (
        <Table
          tableLayout="fixed"
          className="chanh-table publications-table"
          dataSource={data?.conference}
          columns={columns}
          loading={isLoading}
          pagination={{
            pageSize: data?.conference.length,
            hideOnSinglePage: true,
          }}
        />
      ),
    },
    {
      key: '3',
      label: <h1>Conference Papers (Non-Reviewed)</h1>,
      style: { border: 'none' },
      children: (
        <Table
          tableLayout="fixed"
          className="chanh-table publications-table"
          dataSource={data?.conference_nonreview}
          columns={columns}
          loading={isLoading}
          pagination={{
            pageSize: data?.conference_nonreview.length,
            hideOnSinglePage: true,
          }}
        />
      ),
    },
  ];

  return isLoading ? (
    <Skeleton active />
  ) : (
    <>
      <Collapse bordered={false} defaultActiveKey={['1']} items={items} />
    </>
  );
}
