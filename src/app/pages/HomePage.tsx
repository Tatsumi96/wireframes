import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, Field, ImgPlaceholder, Pill, SectionLabel, Divider } from '../components/Layout';

// Property card used in home + search
const PropertyCard: React.FC<{ to?: string }> = ({ to = '/property' }) => (
  <Link to={to} style={{ display: 'block', textDecoration: 'none' }}>
    <div style={{ overflow: 'hidden', background: 'var(--color-ivory)', border: '1px solid var(--color-border)', transition: 'border-color 0.2s' }}>
      <ImgPlaceholder style={{ height: '220px' }} />
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Maison de caractère</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)' }}>★ 4.9</span>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--color-taupe)', marginBottom: '12px' }}>Luberon · Villa · 6 pers.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-terracotta)' }}>280 € <span style={{ color: 'var(--color-border)' }}>/ nuit</span></span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-taupe)', textDecoration: 'underline' }}>Voir →</span>
        </div>
      </div>
    </div>
  </Link>
);

// Hero search bar
const SearchBar: React.FC = () => (
  <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '4px', display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
    {[['DESTINATION', 'Ville, région…'], ['ARRIVÉE', 'jj/mm/aaaa'], ['DÉPART', 'jj/mm/aaaa']].map(([label, ph]) => (
      <div key={label} style={{ flex: 1, minWidth: '140px', padding: '12px 16px', borderRight: '1px solid var(--color-border)' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{label}</p>
        <input placeholder={ph} style={{ background: 'none', border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-anthracite)', width: '100%' }} />
      </div>
    ))}
    <div style={{ padding: '8px' }}>
      <Link to="/search" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-anthracite)', color: '#fff', padding: '12px 24px', fontFamily: 'var(--font-body)', fontSize: '14px', height: '100%' }}>
        Rechercher
      </Link>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
        <ImgPlaceholder label="[ HERO — Photo grande propriété ]" style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', border: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(33,31,28,0.28)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '60px' }}>
          <h1 style={{ color: '#fff', marginBottom: '8px', maxWidth: '560px' }}>Vos séjours d'exception</h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '18px', marginBottom: '32px', maxWidth: '440px' }}>Des propriétés soigneusement sélectionnées pour des expériences mémorables.</p>
          <SearchBar />
        </div>
      </section>

      {/* Featured properties */}
      <section className="container" style={{ paddingTop: '72px', paddingBottom: '72px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <SectionLabel text="Sélection du moment" />
            <h2>Propriétés en vedette</h2>
          </div>
          <Link to="/search" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-terracotta)', textDecoration: 'underline' }}>Voir tout →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {[1, 2, 3, 4, 5, 6].map(i => <PropertyCard key={i} />)}
        </div>
      </section>

      <Divider />

      {/* Categories */}
      <section className="container" style={{ paddingBottom: '72px' }}>
        <SectionLabel text="Catégories" />
        <h2 style={{ marginBottom: '28px' }}>Trouvez par type de bien</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {['Villas', 'Appartements', 'Maisons', 'Chalets', 'Bord de mer', 'Montagne', 'Campagne', 'Lofts'].map(c => (
            <Pill key={c} label={c} />
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA owner */}
      <section className="container" style={{ paddingBottom: '80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
        <div>
          <SectionLabel text="Propriétaires" />
          <h2 style={{ marginBottom: '16px' }}>Vous avez un bien à louer ?</h2>
          <p style={{ marginBottom: '28px', maxWidth: '380px' }}>Rejoignez notre sélection de propriétaires et donnez à votre bien la visibilité qu'il mérite.</p>
          <Btn label="Déposer une annonce →" />
        </div>
        <ImgPlaceholder label="[ Photo propriétaire ]" style={{ height: '300px' }} />
      </section>
    </div>
  );
}
