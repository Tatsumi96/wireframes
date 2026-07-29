import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { Calendar } from '@/app/components/ui/calendar';
import { format } from 'date-fns';

// ─── Site header ─────────────────────────────────────────────────────────────

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/search', label: 'Destinations' },
    { to: '/about', label: 'À propos' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-ivory)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--color-anthracite)', letterSpacing: '-0.02em' }}>
          Séjours
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 500,
                color: location.pathname === link.to ? 'var(--color-terracotta)' : 'var(--color-taupe)',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ width: '1px', height: '20px', background: 'var(--color-border)' }} />
          <Link
            to="/login"
            className="btn-anim"
            style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-taupe)', border: '1px solid var(--color-border)', padding: '9px 20px', borderRadius: 'var(--btn-radius)' }}
          >
            Connexion
          </Link>
          <Link
            to="/register"
            className="btn-anim"
            style={{
              fontFamily: 'var(--font-body)', fontSize: '14px',
              background: 'var(--color-anthracite)',
              color: '#fff', padding: '9px 20px', borderRadius: 'var(--btn-radius)', fontWeight: 600,
            }}
          >
            S'inscrire
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {menuOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-ivory)', padding: '20px' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', color: 'var(--color-taupe)', borderBottom: '1px solid var(--color-border)', fontSize: '15px' }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/login" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center', border: '1px solid var(--color-border)', padding: '12px', color: 'var(--color-taupe)' }}>Connexion</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center', background: 'var(--color-anthracite)', color: '#fff', padding: '12px' }}>S'inscrire</Link>
          </div>
        </div>
      )}
    </header>
  );
};

// ─── Site footer ─────────────────────────────────────────────────────────────

export const Footer: React.FC = () => (
  <footer style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-beige)', marginTop: '80px' }}>
    <div className="container" style={{ padding: '60px 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '16px' }}>Séjours</p>
          <p style={{ fontSize: '14px', color: 'var(--color-taupe)' }}>Location courte durée, sélectionnée avec soin.</p>
        </div>
        {[
          { title: 'Liens utiles', items: ['Accueil', 'Destinations', 'À propos'] },
          { title: 'Légal', items: ['CGU', 'Confidentialité', 'Mentions légales'] },
          { title: 'Support', items: ['Contact', 'FAQ', 'Aide'] },
        ].map(col => (
          <div key={col.title}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>{col.title}</p>
            {col.items.map(item => (
              <a key={item} href="#" style={{ display: 'block', fontSize: '14px', color: 'var(--color-taupe)', marginBottom: '8px', transition: 'color 0.2s' }}>{item}</a>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '24px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>© {new Date().getFullYear()} Séjours · Tous droits réservés</p>
      </div>
    </div>
  </footer>
);

// ─── Portal sidebar ─────────────────────────────────────────────────────────

export const PortalSidebar: React.FC<{ title: string; links: { label: string; to: string }[] }> = ({ title, links }) => {
  const location = useLocation();
  return (
    <aside style={{ width: '220px', flexShrink: 0, borderRight: '1px solid var(--color-border)', background: 'var(--color-beige)', minHeight: 'calc(100vh - 72px)', padding: '32px 0' }}>
      <div style={{ padding: '0 24px 24px', borderBottom: '1px solid var(--color-border)', marginBottom: '16px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</p>
      </div>
      <nav style={{ padding: '0 12px' }}>
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              display: 'block',
              padding: '10px 12px',
              fontSize: '14px',
              color: location.pathname === link.to ? 'var(--color-terracotta)' : 'var(--color-taupe)',
              background: location.pathname === link.to ? 'var(--color-ivory)' : 'transparent',
              borderLeft: location.pathname === link.to ? '2px solid var(--color-terracotta)' : '2px solid transparent',
              transition: 'all 0.15s',
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

// ─── Step progress bar ───────────────────────────────────────────────────────

export const StepBar: React.FC<{ steps: string[]; current: number }> = ({ steps, current }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
    {steps.map((s, i) => (
      <React.Fragment key={s}>
        <div style={{
          padding: '6px 14px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          border: '1px solid ' + (i === current ? 'var(--color-anthracite)' : 'var(--color-border)'),
          background: i === current ? 'var(--color-anthracite)' : 'transparent',
          color: i === current ? '#fff' : (i < current ? 'var(--color-taupe)' : 'var(--color-border)'),
        }}>{s}</div>
        {i < steps.length - 1 && <span style={{ color: 'var(--color-border)', fontSize: '12px' }}>→</span>}
      </React.Fragment>
    ))}
  </div>
);

// ─── Shared UI atoms ─────────────────────────────────────────────────────────

export const Pill: React.FC<{ label: string; accent?: boolean }> = ({ label, accent }) => (
  <span className="pill-anim" style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '4px 10px',
    fontFamily: 'var(--font-mono)', fontSize: '12px',
    border: '1px solid ' + (accent ? 'var(--color-terracotta)' : 'var(--color-border)'),
    color: accent ? 'var(--color-terracotta)' : 'var(--color-taupe)',
    background: 'transparent',
    cursor: 'pointer',
  }}>{label}</span>
);

export const Btn: React.FC<{
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
}> = ({ label, variant = 'primary', onClick, type = 'button', fullWidth }) => {
  const styles: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: '12px 24px',
    fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
    width: fullWidth ? '100%' : undefined,
    ...(variant === 'primary' && { background: 'var(--color-anthracite)', color: '#fff' }),
    ...(variant === 'secondary' && { background: 'transparent', border: '1px solid var(--color-anthracite)', color: 'var(--color-anthracite)' }),
    ...(variant === 'ghost' && { background: 'transparent', color: 'var(--color-terracotta)', padding: '12px 0', textDecoration: 'underline' }),
  };
  return <button type={type} className="btn-anim" style={styles} onClick={onClick}>{label}</button>;
};

export const Field: React.FC<{ label?: string; placeholder: string; type?: string }> = ({ label, placeholder, type = 'text' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    {label && <label style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--color-taupe)' }}>{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: '12px 14px',
        fontFamily: 'var(--font-body)', fontSize: '15px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-ivory)',
        color: 'var(--color-anthracite)',
        outline: 'none',
        width: '100%',
      }}
    />
  </div>
);

export const ImgPlaceholder: React.FC<{ label?: string; style?: React.CSSProperties; src?: string; alt?: string; className?: string }> = ({ label = '[ IMAGE ]', style, src, alt, className }) => {
  const [error, setError] = React.useState(false);

  if (src && !error) {
    return (
      <img
        src={src}
        alt={alt || label.replace(/^\[\s*|\s*\]$/g, '')}
        className={className}
        style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block', ...style }}
        onError={() => setError(true)}
      />
    );
  }

  return (
    <div style={{ background: 'var(--color-beige)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', minHeight: '80px', ...style }} className={className}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', padding: '8px', textAlign: 'center' }}>{label}</span>
    </div>
  );
};

export const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{text}</p>
);

export const Divider: React.FC = () => (
  <div style={{ borderTop: '1px solid var(--color-border)', margin: '28px 0' }} />
);

export const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
  <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border)', ...style }}>
    {children}
  </div>
);

// ─── Search Bar Interactive Fields ─────────────────────────────────────────

export const DateField: React.FC<{ label: string }> = ({ label }) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="search-field-item" style={{ cursor: 'pointer' }}>
          <span className="search-field-label">{label}</span>
          <span className="search-field-input" style={{ color: date ? 'var(--color-anthracite)' : undefined }}>
            {date ? format(date, 'dd/MM/yyyy') : 'jj/mm/aaaa'}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto rounded-none" style={{ background: '#fff', border: '1px solid var(--color-border)', padding: '16px' }}>
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
};

const travelerOptions = [
  { key: 'adultes', label: 'Adultes', desc: '13 ans ou plus' },
  { key: 'enfants', label: 'Enfants', desc: '2–12 ans' },
  { key: 'bebes', label: 'Bébés', desc: 'Moins de 2 ans' },
  { key: 'animaux', label: 'Animaux', desc: 'Animaux domestiques' },
];

export const TravelerField: React.FC = () => {
  const [counts, setCounts] = useState<Record<string, number>>({ adultes: 1, enfants: 0, bebes: 0, animaux: 0 });

  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  const updateCount = (key: string, delta: number) => {
    setCounts(prev => ({ ...prev, [key]: Math.max(0, (prev[key] || 0) + delta) }));
  };

  const btnStyle = (disabled?: boolean): React.CSSProperties => ({
    width: '32px', height: '32px', borderRadius: '50%',
    border: '1px solid var(--color-border)',
    background: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    opacity: disabled ? 0.3 : 1, fontSize: '18px', lineHeight: 1,
    transition: 'all 0.15s',
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="search-field-item" style={{ cursor: 'pointer' }}>
          <span className="search-field-label">Voyageurs</span>
          <span className="search-field-input" style={{ color: total > 0 ? 'var(--color-anthracite)' : undefined }}>
            {total > 0 ? `${total} voyageur${total > 1 ? 's' : ''}` : '1 voyageur'}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[280px] rounded-none" style={{ background: '#fff', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-lg)', padding: '20px 24px' }}>
        {travelerOptions.map(item => (
          <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-anthracite)' }}>{item.label}</p>
              <p style={{ fontSize: '12px', color: 'var(--color-taupe)' }}>{item.desc}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button onClick={() => updateCount(item.key, -1)} disabled={counts[item.key] === 0} style={btnStyle(counts[item.key] === 0)}>−</button>
              <span style={{ fontSize: '14px', fontWeight: 500, minWidth: '20px', textAlign: 'center' }}>{counts[item.key]}</span>
              <button onClick={() => updateCount(item.key, 1)} style={btnStyle()}>+</button>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
