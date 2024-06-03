export default function Navigation() {
  //   const router = useRouter();
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
      navLinkElements.push(
        <a className="chanh-nav__links" href={link.href}>
          {link.label}
        </a>
      );
    }
    return navLinkElements;
  }
  return (
    <div className="chanh-nav__links-wrapper">{generateNavLinkElements()}</div>
  );
}
