'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState<string>();
  useEffect(() => {
    setCurrentPage(window.location.pathname.replaceAll('/', ''));
  }, []);
  const navLinks = [
    { href: '/', label: 'Home' },
    {
      href: '/updates',
      label: 'News & Updates',
    },
    {
      href: '/profile',
      label: 'Profile',
    },
    {
      href: '/activities',
      label: 'Activities',
    },
    {
      href: '/publications',
      label: 'Publications',
    },
  ];
  function generateNavLinkElements() {
    const navLinkElements = [];
    for (const link of navLinks) {
      const currentPageClass =
        currentPage === link.href.replaceAll('/', '')
          ? 'chanh-nav__links--current'
          : '';
      navLinkElements.push(
        <a className={`chanh-nav__links ${currentPageClass}`} href={link.href}>
          {link.label}
        </a>
      );
    }
    return navLinkElements;
  }
  return currentPage != undefined ? (
    <div className="chanh-nav__links-wrapper">{generateNavLinkElements()}</div>
  ) : null;
}
