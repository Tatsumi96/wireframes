import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: 'var(--color-anthracite)', letterSpacing: '-0.02em' }}>
          Séjours
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden md:flex">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                fontWeight: 400,
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
            style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-taupe)', border: '1px solid var(--color-border)', padding: '8px 18px' }}
          >
            Connexion
          </Link>
          <Link
            to="/register"
            style={{ fontFamily: 'var(--font-body)', fontSize: '14px', background: 'var(--color-anthracite)', color: '#fff', padding: '8px 18px' }}
          >
            S'inscrire
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-anthracite)' }}
          className="flex md:hidden"
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
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-border)' }}>© 2024 Séjours · Tous droits réservés</p>
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
  <span style={{
    display: 'inline-flex', alignItems: 'center',
    padding: '4px 10px',
    fontFamily: 'var(--font-mono)', fontSize: '12px',
    border: '1px solid ' + (accent ? 'var(--color-terracotta)' : 'var(--color-border)'),
    color: accent ? 'var(--color-terracotta)' : 'var(--color-taupe)',
    background: 'transparent',
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
    transition: 'opacity 0.2s',
    ...(variant === 'primary' && { background: 'var(--color-anthracite)', color: '#fff' }),
    ...(variant === 'secondary' && { background: 'transparent', border: '1px solid var(--color-anthracite)', color: 'var(--color-anthracite)' }),
    ...(variant === 'ghost' && { background: 'transparent', color: 'var(--color-terracotta)', padding: '12px 0', textDecoration: 'underline' }),
  };
  return <button type={type} style={styles} onClick={onClick}>{label}</button>;
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

export const ImgPlaceholder: React.FC<{ label?: string; style?: React.CSSProperties }> = ({ label = '[ IMAGE ]', style }) => (
  <div style={{ background: 'var(--color-beige)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-border)' }}>{label}</span>
  </div>
);

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
