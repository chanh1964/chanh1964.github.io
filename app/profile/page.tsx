'use client';

import { LinkOutlined } from '@ant-design/icons';
import { Skeleton, Timeline } from 'antd';
import { useEffect, useState } from 'react';

import DataSource from '../DataSource';
import { Profile, ProfileInfo } from '../types';
import { dateToString } from '../util/Util';

export default function ProfilePage() {
  const [data, setData] = useState<Profile>();
  const [isLoading, setLoading] = useState(true);

  const generateItems = (entries?: ProfileInfo[], prefixPlace?: string) => {
    if (!entries) return;
    const items = [];
    for (const entry of entries) {
      const _to =
        entry.to == -1
          ? null
          : entry.to == 0
            ? ' - Present'
            : ` - ${dateToString(entry.to)}`;

      const _place = entry.link ? (
        <a
          className="chanh-link"
          href={entry.link}
          target="_blank"
          title="Click to open external link"
        >
          {entry.place} <LinkOutlined className="chanh-anticon-link" />
        </a>
      ) : (
        entry.place
      );

      items.push({
        color: '#0b7f6b',
        children: (
          <div className="chanh-timeline__item-wrapper">
            <span className="chanh-timeline__date">
              {dateToString(entry.from)}
              {_to}
            </span>
            <span className="">
              <h2 className="inline text-chanh-primary">{entry.title}</h2>{' '}
              {entry.subtitle}
            </span>
            <span>
              {prefixPlace} {_place} {entry.country ? `(${entry.country})` : ''}
            </span>
            <span className="pt-1">{entry.description}</span>
          </div>
        ),
      });
    }
    items.push({ color: 'transparent' });
    return items;
  };

  useEffect(() => {
    fetch(DataSource.PROFILE)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  return isLoading ? (
    <Skeleton active />
  ) : (
    <>
      <h1>Experience</h1>
      <Timeline
        className="chanh-timeline"
        items={generateItems(data?.experience, 'at')}
      />
      <h1>Education</h1>
      <Timeline
        className="chanh-timeline"
        items={generateItems(data?.education, 'from')}
      />
      <h1>Awards and Prizes</h1>
      <Timeline
        className="chanh-timeline"
        items={generateItems(data?.awards, 'given by')}
      />
    </>
  );
}
