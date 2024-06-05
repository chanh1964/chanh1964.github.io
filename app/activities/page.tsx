/* eslint-disable react/jsx-key */
'use client';

import { Collapse, CollapseProps, Skeleton, Timeline } from 'antd';
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
        <span className="actitivies-table__detail">
          affiliated with {record.institution}, as <i>{record.role}</i>
        </span>
      );
    else if (record.institution)
      detail.push(
        <span className="actitivies-table__detail">
          affiliated with {record.institution}
        </span>
      );
    else if (record.role)
      detail.push(
        <span className="actitivies-table__detail">
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

  const generateTimelineItems = (entries?: ActivityEntry[]) => {
    if (!entries) return;
    const items = [];
    for (const entry of entries) {
      const _to =
        entry.to == -1
          ? null
          : entry.to == 0
            ? ' - Present'
            : ` - ${dateToString(entry.to)}`;
      items.push({
        color: '#0b7f6b',
        children: (
          <div className="chanh-timeline__item-wrapper">
            <span className="chanh-timeline__date">
              {dateToString(entry.from)}
              {_to}
            </span>
            {generateActivityEntryDetail(entry)}
          </div>
        ),
      });
    }
    items.push({ color: 'transparent' });
    return items;
  };

  const generateTimelines = (categories?: ActivityInfo[]) => {
    if (!categories) return;
    const timelines = [];
    for (const category of categories) {
      timelines.push(
        <div className="activities-table__category-wraper">
          <h2 className="activities-table__title">{category.type}</h2>
          <Timeline
            className="chanh-timeline"
            items={generateTimelineItems(category.entries)}
          />
        </div>
      );
    }
    return timelines;
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h1>Academic Activities</h1>,
      style: { border: 'none' },
      children: generateTimelines(data?.academic),
    },
    {
      key: '2',
      label: <h1>International Activities</h1>,
      style: { border: 'none' },
      children: generateTimelines(data?.international),
    },
    {
      key: '3',
      label: <h1>Volunteer and Community Outreach</h1>,
      style: { border: 'none' },
      children: (
        <Timeline
          className="chanh-timeline"
          items={generateTimelineItems(data?.volunteer)}
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
