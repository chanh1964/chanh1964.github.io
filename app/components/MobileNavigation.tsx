'use client';

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { useEffect, useState } from 'react';

export default function MobileNavigation() {
  const [currentPage, setCurrentPage] = useState<string>();
  useEffect(() => {
    setCurrentPage(window.location.pathname.replaceAll('/', ''));
  }, []);

  const pageLabel = {
    '': 'Home',
    updates: 'News & Updates',
    profile: 'Profile',
    activities: 'Activities',
    publications: 'Publications',
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <a className="chanh-mobile-nav__links" href="/">
          Home
        </a>
      ),
      key: '',
    },
    {
      label: (
        <a className="chanh-mobile-nav__links" href="/updates">
          News & Updates
        </a>
      ),
      key: 'updates',
    },
    {
      label: (
        <a className="chanh-mobile-nav__links" href="/profile">
          Profile
        </a>
      ),
      key: 'profile',
    },

    {
      label: (
        <a className="chanh-mobile-nav__links" href="/activities">
          Activities
        </a>
      ),
      key: 'activities',
    },

    {
      label: (
        <a className="chanh-mobile-nav__links" href="/publications">
          Publications
        </a>
      ),
      key: 'publications',
    },
  ];
  return currentPage != undefined ? (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      overlayClassName="chanh-mobile-nav"
    >
      <a className="chanh-nav__links chanh-mobile-nav__dropdown">
        {pageLabel[currentPage as keyof typeof pageLabel]} <DownOutlined />
      </a>
    </Dropdown>
  ) : null;
}
