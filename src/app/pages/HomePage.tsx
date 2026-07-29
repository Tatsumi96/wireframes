import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, ImgPlaceholder, Pill, SectionLabel, Divider, DateField, TravelerField } from '../components/Layout';
import { PROPERTY_IMAGES, HERO_HOME_IMAGE, HOST_OWNER_IMAGE } from '../data/images';

// Property card with strict equal height & smooth modern hover/zoom animations
const PropertyCard: React.FC<{ property: typeof PROPERTY_IMAGES[0] }> = ({ property }) => (
  <Link to="/property" style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
    <div className="equal-card">
      <div className="card-img-wrapper">
        <ImgPlaceholder
          src={property.src}
          alt={property.title}
        />
      </div>
      <div className="card-body">
        <div className="card-content-top">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 className="card-title">{property.title}</h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)', flexShrink: 0, marginLeft: '8px', fontWeight: 600 }}>★ {property.rating}</span>
          </div>
          <p className="card-subtitle">{property.location} · {property.specs}</p>
        </div>
        <div className="card-footer">
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-terracotta)', fontWeight: 600 }}>{property.price} <span style={{ color: 'var(--color-taupe)', fontWeight: 400, fontSize: '12px' }}>/ nuit</span></span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-taupe)', textDecoration: 'underline' }}>Voir →</span>
        </div>
      </div>
    </div>
  </Link>
);

// Hero search bar — Airbnb style with calendars & traveler picker
const SearchBar: React.FC = () => (
  <div className="hero-search-bar">
    <div className="search-field-group">
      <div className="search-field-item">
        <span className="search-field-label">Destination</span>
        <input placeholder="Ville, région…" className="search-field-input" />
      </div>
      <div className="search-field-divider" />
      <DateField label="Arrivée" />
      <div className="search-field-divider" />
      <DateField label="Départ" />
      <div className="search-field-divider" />
      <TravelerField />
    </div>
    <div className="search-btn-wrapper">
      <Link to="/search" className="search-submit-btn btn-anim">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        Rechercher
      </Link>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="hero-section" style={{ overflow: 'hidden' }}>
        <ImgPlaceholder
          src={HERO_HOME_IMAGE}
          alt="Propriété de luxe avec piscine et vue panoramique"
          style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', border: 'none', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(33,31,28,0.25), rgba(33,31,28,0.65))' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '60px' }}>
          <div className="fade-in-up">
            <h1 className="hero-title" style={{ color: '#fff', marginBottom: '8px', maxWidth: '560px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Vos séjours d'exception</h1>
            <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.92)', fontSize: '18px', marginBottom: '32px', maxWidth: '440px' }}>Des propriétés soigneusement sélectionnées pour des expériences mémorables.</p>
            <SearchBar />
          </div>
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
        <div className="card-grid">
          {PROPERTY_IMAGES.map((prop, i) => (
            <div key={prop.id} className={`fade-in-up delay-${(i % 4) + 1}`} style={{ height: '100%' }}>
              <PropertyCard property={prop} />
            </div>
          ))}
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
        <div className="fade-in-up">
          <SectionLabel text="Propriétaires" />
          <h2 style={{ marginBottom: '16px' }}>Vous avez un bien à louer ?</h2>
          <p style={{ marginBottom: '28px', maxWidth: '380px', lineHeight: '1.6', color: 'var(--color-taupe)' }}>Rejoignez notre sélection de propriétaires et donnez à votre bien la visibilité d'exception qu'il mérite.</p>
          <Btn label="Déposer une annonce →" />
        </div>
        <div className="equal-card" style={{ height: '320px', width: '100%' }}>
          <div className="card-img-wrapper" style={{ height: '100%' }}>
            <ImgPlaceholder
              src={HOST_OWNER_IMAGE}
              alt="Propriétaire accueillant devant sa villa"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
