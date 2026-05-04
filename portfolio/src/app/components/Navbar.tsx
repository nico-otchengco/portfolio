import { useState, useEffect } from 'react';
import { person } from '../data';

const NAV_LINKS = ['About', 'Stack', 'Work', 'Contact'];
const SECTION_IDS = ['about', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [lockScroll, setLockScroll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockScroll) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lockScroll]);

  const scrollTo = (id: string) => {
    setActive(id);
    setLockScroll(true);

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      setLockScroll(false);
    }, 800);
  };

  const sectionId = (label: string) => {
    if (label === 'Stack') return 'skills';
    if (label === 'Work') return 'projects';
    return label.toLowerCase();
  };

  return (
    <nav className="navbar">
      <div className="nav-logo"
        onClick={() => window.scrollTo({  top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        ~/
        <span className="nav-logo-accent">{person.nameShort}</span>
        /portfolio
      </div>
      <div className="nav-links">
        {NAV_LINKS.map(label => (
          <button
            key={label}
            className={`nav-link ${active === sectionId(label) ? 'active' : ''}`}
            onClick={() => scrollTo(sectionId(label))}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="nav-status">
        <div className="status-dot" />
        Available for work
      </div>
    </nav>
  );
}
