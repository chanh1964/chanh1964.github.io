'use client';

import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';

import Update from '../types/Update';
import { dateToString } from '../util/Util';
import { ChanhDetailModal } from './';

type Props = {
  data: Update[] | undefined;
};

const ChanhUpdatesTable = (props: Props) => {
  useEffect(() => {
    document.getElementById(window.location.href.split('#')[1])?.click();
  });
  const columns: ColumnsType<Update> = [
    {
      width: 120,
      align: 'left',
      className: 'align-top',
      key: 'date',
      dataIndex: 'date',
      render: (text) => {
        return <span className="align-top">{dateToString(text)}</span>;
      },
    },
    {
      align: 'left',
      key: 'title',
      render: (record: Update) => {
        if (!record.detail) return <span>{record.title}</span>;
        return <ChanhDetailModal data={record} />;
      },
    },
  ];

  return (
    <Table
      tableLayout="fixed"
      className="chanh-table updates-table"
      dataSource={props.data}
      columns={columns}
      pagination={{
        pageSize: props.data?.length,
        hideOnSinglePage: true,
      }}
    />
  );
};

export default ChanhUpdatesTable;
