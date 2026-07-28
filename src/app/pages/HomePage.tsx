import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, ImgPlaceholder, Pill, SectionLabel, Divider } from '../components/Layout';
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

// Hero search bar
const SearchBar: React.FC = () => (
  <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '4px', display: 'flex', alignItems: 'stretch', flexWrap: 'wrap', boxShadow: 'var(--shadow-md)' }}>
    {[['Destination', 'Ville, région…'], ['Arrivée', 'jj / mm / aaaa'], ['Départ', 'jj / mm / aaaa']].map(([label, ph]) => (
      <div key={label} style={{ flex: 1, minWidth: '140px', padding: '12px 16px', borderRight: '1px solid var(--color-border)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', letterSpacing: '0.04em', marginBottom: '4px' }}>{label}</p>
        <input placeholder={ph} style={{ background: 'none', border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-anthracite)', width: '100%' }} />
      </div>
    ))}
    <div style={{ padding: '8px' }}>
      <Link to="/search" className="btn-anim" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-anthracite)', color: '#fff', padding: '12px 24px', fontFamily: 'var(--font-body)', fontSize: '14px', height: '100%', textDecoration: 'none' }}>
        Rechercher
      </Link>
    </div>
  </div>
);

export default function HomePage() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section style={{ position: 'relative', height: '580px', overflow: 'hidden' }}>
        <ImgPlaceholder
          src={HERO_HOME_IMAGE}
          alt="Propriété de luxe avec piscine et vue panoramique"
          style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', border: 'none', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(33,31,28,0.25), rgba(33,31,28,0.65))' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: '60px' }}>
          <div className="fade-in-up">
            <h1 style={{ color: '#fff', marginBottom: '8px', maxWidth: '560px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Vos séjours d'exception</h1>
            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '18px', marginBottom: '32px', maxWidth: '440px' }}>Des propriétés soigneusement sélectionnées pour des expériences mémorables.</p>
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
