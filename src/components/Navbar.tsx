import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PillNav from '@/components/PillNav';

export default function Navbar() {
  const location = useLocation();
  const [activeHref, setActiveHref] = useState('#work');

  const navItems = [
    { label: 'Portfolio', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Tech', href: '#technologies' },
    { label: 'Certificates', href: '#certificates' },
  ];

  useEffect(() => {
    if (location.pathname === '/certificates') {
      setActiveHref('#certificates');
    } else if (location.hash) {
      setActiveHref(location.hash);
    }
  }, [location]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300 pointer-events-auto">
      <PillNav
        logo={
          <div className="flex items-center gap-1.5 px-1 font-mono font-bold text-white text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
            <span>AM</span>
          </div>
        }
        logoAlt="Awfi Muhammad Logo"
        items={navItems}
        activeHref={activeHref}
        baseColor="#121212"
        pillColor="#1a1a1b"
        pillTextColor="#8e8e93"
        hoveredPillTextColor="#a855f7"
        initialLoadAnimation={true}
      />
    </header>
  );
}
