import { Table } from 'antd';
import Update from '../types/Update';
import { ColumnsType } from 'antd/es/table';
import { ChanhDetailModal } from './';

type Props = {
  data: Update[] | undefined;
};

const ChanhUpdatesTable = (props: Props) => {
  const columns: ColumnsType<Update> = [
    {
      align: 'left',
      className: 'align-top',
      key: 'date',
      dataIndex: 'date',
      render: (text) => {
        const _text = text.toString();
        return (
          <span className="align-top">{`${_text.slice(0, 4)}.${_text.slice(4, 6)}.${_text.slice(6)}`}</span>
        );
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
