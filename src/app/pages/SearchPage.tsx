import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, Field, ImgPlaceholder, Pill, SectionLabel, Divider, Card } from '../components/Layout';

const FilterTag: React.FC<{ label: string }> = ({ label }) => (
  <button style={{ padding: '7px 14px', fontFamily: 'var(--font-body)', fontSize: '13px', border: '1px solid var(--color-border)', color: 'var(--color-taupe)', background: 'none', cursor: 'pointer' }}>
    {label} ▾
  </button>
);

const ResultCard: React.FC = () => (
  <Link to="/property" style={{ display: 'flex', gap: '16px', background: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '0', textDecoration: 'none', overflow: 'hidden' }}>
    <ImgPlaceholder style={{ width: '180px', flexShrink: 0, height: '140px' }} />
    <div style={{ flex: 1, padding: '16px 16px 16px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Bastide provençale</h3>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)' }}>★ 4.8</span>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--color-taupe)', marginBottom: '8px' }}>Luberon · Villa · 8 pers. · 4 chambres</p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {['Piscine', 'Jardin', 'Wifi'].map(a => <Pill key={a} label={a} />)}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', color: 'var(--color-terracotta)' }}>350 € <span style={{ fontSize: '12px', color: 'var(--color-border)' }}>/ nuit</span></span>
        <span style={{ fontSize: '13px', color: 'var(--color-taupe)', textDecoration: 'underline' }}>Voir →</span>
      </div>
    </div>
  </Link>
);

export default function SearchPage() {
  return (
    <div>
      {/* Search bar */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-beige)', padding: '16px 0' }}>
        <div className="container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
            <Field placeholder="Destination" />
            <Field placeholder="Arrivée" />
            <Field placeholder="Départ" />
            <Field placeholder="Voyageurs" />
          </div>
          <Btn label="Rechercher" />
        </div>
      </div>

      {/* Filters row */}
      <div style={{ borderBottom: '1px solid var(--color-border)', background: 'var(--color-ivory)' }}>
        <div className="container" style={{ paddingTop: '12px', paddingBottom: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Filtres :</span>
          {['Prix', 'Type de bien', 'Chambres', 'Équipements', 'Disponibilité'].map(f => <FilterTag key={f} label={f} />)}
          <button style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-terracotta)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', marginLeft: '8px' }}>
            Réinitialiser
          </button>
        </div>
      </div>

      {/* Results + map */}
      <div className="container" style={{ paddingTop: '32px', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(480px, 40%)', gap: '32px', alignItems: 'start' }}>
          {/* Results */}
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', marginBottom: '20px' }}>24 propriétés trouvées</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[1, 2, 3, 4, 5].map(i => <ResultCard key={i} />)}
            </div>
          </div>

          {/* Map sticky */}
          <div style={{ position: 'sticky', top: '88px' }}>
            <ImgPlaceholder
              label="[ CARTE INTERACTIVE — OpenStreetMap ]"
              style={{ height: '560px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
