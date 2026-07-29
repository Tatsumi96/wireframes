import React from 'react';
import { Link } from 'react-router-dom';
import { ImgPlaceholder, Pill, DateField, TravelerField } from '../components/Layout';
import { PROPERTY_IMAGES, MAP_PREVIEW_IMAGE } from '../data/images';

const FilterTag: React.FC<{ label: string }> = ({ label }) => (
  <button className="pill-anim" style={{ padding: '7px 14px', fontFamily: 'var(--font-body)', fontSize: '13px', border: '1px solid var(--color-border)', color: 'var(--color-taupe)', background: 'none', cursor: 'pointer' }}>
    {label} ▾
  </button>
);

const ResultCard: React.FC<{ property: typeof PROPERTY_IMAGES[0] }> = ({ property }) => (
  <Link to="/property" style={{ display: 'block', textDecoration: 'none' }}>
    <div className="equal-card" style={{ flexDirection: 'row', minHeight: '150px' }}>
      <div className="card-img-wrapper" style={{ width: '220px', height: '100%', minHeight: '150px' }}>
        <ImgPlaceholder src={property.src} alt={property.title} />
      </div>
      <div className="card-body" style={{ padding: '16px 20px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
            <h3 className="card-title" style={{ fontSize: '16px' }}>{property.title}</h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)', fontWeight: 600, marginLeft: '8px' }}>★ {property.rating}</span>
          </div>
          <p className="card-subtitle" style={{ marginBottom: '10px' }}>{property.location} · {property.specs}</p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['Piscine', 'Jardin', 'Wifi'].map(a => <Pill key={a} label={a} />)}
          </div>
        </div>
        <div className="card-footer" style={{ marginTop: '12px', paddingTop: '10px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--color-terracotta)', fontWeight: 600 }}>{property.price} <span style={{ fontSize: '12px', color: 'var(--color-taupe)', fontWeight: 400 }}>/ nuit</span></span>
          <span style={{ fontSize: '13px', color: 'var(--color-taupe)', textDecoration: 'underline' }}>Voir →</span>
        </div>
      </div>
    </div>
  </Link>
);

export default function SearchPage() {
  return (
    <div className="fade-in">
      {/* Search bar — Airbnb style with calendars & traveler picker */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-beige)', padding: '12px 0' }}>
        <div className="container">
          <div className="hero-search-bar" style={{ boxShadow: 'var(--shadow-sm)' }}>
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
        </div>
      </div>

      {/* Filters row */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-ivory)' }}>
        <div className="container" style={{ paddingTop: '12px', paddingBottom: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Filtres :</span>
          {['Prix', 'Type de bien', 'Chambres', 'Équipements', 'Disponibilité'].map(f => <FilterTag key={f} label={f} />)}
          <button style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-terracotta)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', marginLeft: '8px' }}>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Results + map */}
      <div className="container" style={{ paddingTop: '32px', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(480px, 42%)', gap: '32px', alignItems: 'start' }}>
          {/* Results */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', marginBottom: '20px' }}>24 propriétés trouvées</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {PROPERTY_IMAGES.map((prop, i) => (
                <div key={prop.id} className={`fade-in-up delay-${(i % 4) + 1}`}>
                  <ResultCard property={prop} />
                </div>
              ))}
            </div>
          </div>

          {/* Map sticky */}
          <div style={{ position: 'sticky', top: '88px', border: '1px solid var(--color-border)', overflow: 'hidden', height: '620px' }} className="equal-card">
            <div className="card-img-wrapper" style={{ height: '100%' }}>
              <ImgPlaceholder
                src={MAP_PREVIEW_IMAGE}
                alt="Carte interactive OpenStreetMap des propriétés"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
