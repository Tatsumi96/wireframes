import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, Field, ImgPlaceholder, Pill, SectionLabel, Divider } from '../components/Layout';

const ReviewCard: React.FC = () => (
  <div style={{ padding: '20px 0', borderBottom: '1px solid var(--color-border)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
      <ImgPlaceholder style={{ width: '36px', height: '36px', flexShrink: 0 }} />
      <div>
        <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-anthracite)' }}>Sophie M.</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)' }}>★★★★★ · Juillet 2024</p>
      </div>
    </div>
    <p style={{ fontSize: '14px', color: 'var(--color-taupe)', lineHeight: '1.65' }}>Séjour parfait, la propriété correspond exactement aux photos. L'accueil du propriétaire était chaleureux et professionnel.</p>
  </div>
);

export default function PropertyPage() {
  return (
    <div>
      {/* Gallery */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '3px', height: '480px', maxHeight: '55vh', overflow: 'hidden' }}>
        <ImgPlaceholder label="[ Photo principale ]" style={{ gridRow: 'span 2', height: '100%', border: 'none' }} />
        <ImgPlaceholder style={{ height: '100%', border: 'none' }} />
        <ImgPlaceholder style={{ height: '100%', border: 'none' }} />
        <ImgPlaceholder style={{ height: '100%', border: 'none' }} />
        <div style={{ position: 'relative' }}>
          <ImgPlaceholder style={{ height: '100%', border: 'none' }} />
          <button style={{
            position: 'absolute', bottom: '12px', right: '12px',
            background: 'var(--color-ivory)', border: '1px solid var(--color-border)',
            padding: '6px 14px', fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--color-anthracite)', cursor: 'pointer',
          }}>+ 12 photos</button>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px', alignItems: 'start' }}>

          {/* Left: details */}
          <div>
            <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>Bastide provençale avec piscine</h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {['Luberon', 'Villa', '8 pers.', '4 chambres', '★ 4.9 (48 avis)'].map(t => <Pill key={t} label={t} />)}
            </div>

            <Divider />
            <SectionLabel text="Description" />
            <ImgPlaceholder label="[ Texte de description — plusieurs paragraphes ]" style={{ height: '120px', marginBottom: '28px' }} />

            <SectionLabel text="Équipements" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '8px', marginBottom: '28px' }}>
              {['Piscine', 'Jardin', 'Wifi', 'Barbecue', 'Parking', 'Climatisation', 'Lave-linge', 'Cuisine équipée'].map(e => (
                <div key={e} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-taupe)' }}>
                  <div style={{ width: '4px', height: '4px', background: 'var(--color-terracotta)' }} />
                  {e}
                </div>
              ))}
            </div>

            <Divider />
            <SectionLabel text="Calendrier de disponibilité" />
            <ImgPlaceholder label="[ CALENDRIER DOUBLE — sélection de dates ]" style={{ height: '240px', marginBottom: '28px' }} />

            <Divider />
            <SectionLabel text="Localisation" />
            <ImgPlaceholder label="[ CARTE — position approximative ]" style={{ height: '200px', marginBottom: '28px' }} />

            <Divider />
            <SectionLabel text="Avis clients (48)" />
            {[1, 2, 3].map(i => <ReviewCard key={i} />)}
          </div>

          {/* Right: booking widget */}
          <div style={{ position: 'sticky', top: '88px', border: '1px solid var(--color-border)', background: 'var(--color-ivory)' }}>
            <div style={{ padding: '24px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '22px', color: 'var(--color-terracotta)', marginBottom: '4px' }}>350 €<span style={{ fontSize: '14px', color: 'var(--color-border)' }}> / nuit</span></p>
              <Divider />
              <div style={{ border: '1px solid var(--color-border)', marginBottom: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--color-border)' }}>
                  {[['ARRIVÉE', 'jj/mm/aaaa'], ['DÉPART', 'jj/mm/aaaa']].map(([l, p]) => (
                    <div key={l} style={{ padding: '12px 14px', borderRight: l === 'ARRIVÉE' ? '1px solid var(--color-border)' : 'none' }}>
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{l}</p>
                      <input placeholder={p} style={{ background: 'none', border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', width: '100%', color: 'var(--color-anthracite)' }} />
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>VOYAGEURS</p>
                  <input placeholder="X adultes" style={{ background: 'none', border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', width: '100%', color: 'var(--color-anthracite)' }} />
                </div>
              </div>
              <Link to="/booking/1" style={{ display: 'block', background: 'var(--color-anthracite)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, marginBottom: '12px' }}>
                Vérifier disponibilité
              </Link>
              <Divider />
              {[['350 € × 7 nuits', '2 450 €'], ['Frais de ménage', '120 €'], ['Frais de service', '95 €']].map(([l, v]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: 'var(--color-taupe)' }}>{l}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-taupe)' }}>{v}</span>
                </div>
              ))}
              <Divider />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Total TTC</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600, color: 'var(--color-terracotta)' }}>2 665 €</span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-border)', textAlign: 'center', marginTop: '14px' }}>Aucun débit avant confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
