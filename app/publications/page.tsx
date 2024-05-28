'use client';

import { useEffect, useState } from 'react';
import Publications from '../types/Publications';
import { Table, Collapse, CollapseProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import PublicationInfo from '../types/PublicationInfo';

export default function PublicationsPage() {
  const [data, setData] = useState<Publications>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/chanh1964/f92b73b8df77b99ae107dc177a5b789c/raw'
    )
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
              <b>{record.title}</b>
            </em>
            , {record.properties}.{' '}
            {record.link ? (
              <a href={record.link} target="_blank">
                {record.link}
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
      label: <h2>Journal Articles (Peer-Reviewed)</h2>,
      style: { border: 'none' },
      children: (
        <Table
          className="publications-table"
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
      label: <h2>Conference Papers (Peer-Reviewed)</h2>,
      style: { border: 'none' },
      children: (
        <Table
          className="publications-table"
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
      label: <h2>Conference Papers (Non-Reviewed)</h2>,
      style: { border: 'none' },
      children: (
        <Table
          className="publications-table"
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

  return (
    <>
      <Collapse bordered={false} defaultActiveKey={['1']} items={items} />
    </>
  );
}
