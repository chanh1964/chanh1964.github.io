/* eslint-disable react/jsx-key */
'use client';

import { Collapse, CollapseProps, Skeleton, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';

import DataSource from '../DataSource';
import { Activities, ActivityEntry, ActivityInfo } from '../types';
import { dateToString } from '../util/Util';

export default function ActivitiessPage() {
  const [data, setData] = useState<Activities>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(DataSource.ACTIVITIES)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const generateActivityEntryDetail = (record: ActivityEntry) => {
    const detail = [];
    if (record.interal_link_id)
      detail.push(
        <a
          title="Click to read more detail"
          target="_blank"
          className="chanh-link"
          href={`${window.location.origin}/updates/#${record.interal_link_id}`}
        >
          <b>{record.title}</b>
        </a>
      );
    else
      detail.push(
        <span className="actitivies-table__detail">
          <b>{record.title}</b>
        </span>
      );
    if (record.institution && record.role)
      detail.push(
        <span className="actitivies-table__detail text-base">
          affiliated with {record.institution}, as <i>{record.role}</i>
        </span>
      );
    else if (record.institution)
      detail.push(
        <span className="actitivies-table__detail text-base">
          affiliated with {record.institution}
        </span>
      );
    else if (record.role)
      detail.push(
        <span className="actitivies-table__detail text-base">
          as <i>{record.role}</i>
        </span>
      );
    if (record.description)
      detail.push(
        <span className="actitivies-table__detail pt-1">
          {record.description}
        </span>
      );
    if (record.external_link)
      detail.push(
        <a target="_blank" className="chanh-link" href={record.external_link}>
          {record.external_link}
        </a>
      );
    return <>{detail}</>;
  };

  const columns: ColumnsType<ActivityEntry> = [
    {
      width: 120,
      align: 'left',
      className: 'align-top',
      render: (record: ActivityEntry) => {
        const _to =
          record.to == -1
            ? null
            : record.to == 0
              ? '- Present'
              : ` - ${dateToString(record.to)}`;
        return (
          <span className="align-top">
            {dateToString(record.from)} <br />
            {_to}
          </span>
        );
      },
    },
    {
      align: 'left',
      render: (record: ActivityEntry) => {
        return (
          <div className="activities-table__entry-wraper">
            {generateActivityEntryDetail(record)}
          </div>
        );
      },
    },
  ];

  const generateTables = (categories?: ActivityInfo[]) => {
    if (!categories) return;
    const tables = [];
    for (const category of categories) {
      tables.push(
        <div className="activities-table__category-wraper">
          <h2 className="activities-table__title">{category.type}</h2>
          <Table
            tableLayout="fixed"
            className="chanh-table activities-table"
            dataSource={category.entries}
            columns={columns}
            loading={isLoading}
            pagination={{
              pageSize: category.entries.length,
              hideOnSinglePage: true,
            }}
          />
        </div>
      );
    }
    return tables;
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h2 className="text-chanh-emphasize">Academic Activities</h2>,
      style: { border: 'none' },
      children: generateTables(data?.academic),
    },
    {
      key: '2',
      label: <h2>International Activities</h2>,
      style: { border: 'none' },
      children: generateTables(data?.international),
    },
    {
      key: '3',
      label: <h2>Volunteer and Community Outreach</h2>,
      style: { border: 'none' },
      children: (
        <Table
          tableLayout="fixed"
          className="chanh-table activities-table"
          dataSource={data?.volunteer}
          columns={columns}
          loading={isLoading}
          pagination={{
            pageSize: data?.volunteer.length,
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
