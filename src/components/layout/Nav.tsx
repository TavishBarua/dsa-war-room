import { Link, useLocation } from 'react-router-dom';

const DSA_LINKS = [
  { href: '#patterns', label: 'Patterns' },
  { href: '#pattern-dna', label: 'Pattern DNA' },
  { href: '#collections', label: 'Collections' },
  { href: '#plan', label: 'Battle Plan' },
  { href: '#simulator', label: 'Simulator' },
  { href: '#rules', label: 'Rules' },
];

const SD_LINKS = [
  { href: '#sd-patterns', label: 'Patterns' },
  { href: '#sd-problems', label: 'Problems' },
];

const AI_LINKS = [
  { href: '#ai-concepts', label: 'AI Concepts' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const isSD = pathname === '/system-design';
  const isAI = pathname === '/ai';
  const links = isAI ? AI_LINKS : isSD ? SD_LINKS : DSA_LINKS;

  return (
    <nav>
      <Link to="/" className="nav-logo">DSA WAR ROOM</Link>
      <div className="nav-mode-toggle">
        <Link to="/" className={`nav-mode-btn${!isSD && !isAI ? ' active' : ''}`}>DSA</Link>
        <Link to="/system-design" className={`nav-mode-btn${isSD ? ' active' : ''}`}>SYS DESIGN</Link>
        <Link to="/ai" className={`nav-mode-btn${isAI ? ' active' : ''}`}>AI</Link>
      </div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
