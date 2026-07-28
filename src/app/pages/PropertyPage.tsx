import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, Field, ImgPlaceholder, Pill, SectionLabel, Divider } from '../components/Layout';
import { PROPERTY_IMAGES, MAP_PREVIEW_IMAGE, CALENDAR_PREVIEW_IMAGE, REVIEWER_AVATARS } from '../data/images';

const property = PROPERTY_IMAGES[0];

const reviewsData = [
  {
    name: 'Sophie M.',
    date: 'Juillet 2024',
    rating: '★★★★★',
    avatar: REVIEWER_AVATARS.sophie,
    comment: "Séjour parfait, la propriété correspond exactement aux photos. L'accueil du propriétaire était chaleureux et professionnel.",
  },
  {
    name: 'Thomas L.',
    date: 'Juin 2024',
    rating: '★★★★★',
    avatar: REVIEWER_AVATARS.thomas,
    comment: "Le cadre est tout simplement enchanteur. La piscine chauffée et la terrasse couverte ont rendu notre semaine inoubliable.",
  },
  {
    name: 'Claire D.',
    date: 'Mai 2024',
    rating: '★★★★★',
    avatar: REVIEWER_AVATARS.claire,
    comment: "Maison d'une propreté exemplaire, parfaitement équipée pour 8 personnes. Nous reviendrons sans hésiter !",
  },
];

const ReviewCard: React.FC<{ review: typeof reviewsData[0] }> = ({ review }) => (
  <div style={{ padding: '20px 0', borderBottom: '1px solid var(--color-border)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
      <div style={{ width: '42px', height: '42px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--color-border)', flexShrink: 0 }}>
        <ImgPlaceholder src={review.avatar} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)' }}>{review.name}</p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)' }}>{review.rating} · {review.date}</p>
      </div>
    </div>
    <p style={{ fontSize: '14px', color: 'var(--color-taupe)', lineHeight: '1.65' }}>{review.comment}</p>
  </div>
);

export default function PropertyPage() {
  return (
    <div>
      {/* Gallery grid with high-quality renderings */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '4px', height: '480px', maxHeight: '55vh', overflow: 'hidden', background: 'var(--color-anthracite)' }}>
        <ImgPlaceholder src={property.gallery![0]} alt="Bastide provençale façade et terrasse" style={{ gridRow: 'span 2', height: '100%', border: 'none', objectFit: 'cover' }} />
        <ImgPlaceholder src={property.gallery![1]} alt="Salon d'architecte spacieux" style={{ height: '100%', border: 'none', objectFit: 'cover' }} />
        <ImgPlaceholder src={property.gallery![2]} alt="Cuisine équipée contemporaine" style={{ height: '100%', border: 'none', objectFit: 'cover' }} />
        <ImgPlaceholder src={property.gallery![3]} alt="Chambre principale lumineuse" style={{ height: '100%', border: 'none', objectFit: 'cover' }} />
        <div style={{ position: 'relative', height: '100%' }}>
          <ImgPlaceholder src={property.gallery![4]} alt="Piscine privée et jardin" style={{ height: '100%', width: '100%', border: 'none', objectFit: 'cover' }} />
          <button style={{
            position: 'absolute', bottom: '12px', right: '12px',
            background: 'var(--color-ivory)', border: '1px solid var(--color-border)',
            padding: '6px 14px', fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--color-anthracite)', cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}>+ 12 photos</button>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '60px', alignItems: 'start' }}>

          {/* Left: details */}
          <div>
            <h1 style={{ fontSize: '36px', marginBottom: '12px' }}>{property.title}</h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {['Luberon', 'Villa', '8 pers.', '4 chambres', '★ 4.9 (48 avis)'].map(t => <Pill key={t} label={t} />)}
            </div>

            <Divider />
            <SectionLabel text="Description" />
            <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '24px', marginBottom: '28px', color: 'var(--color-taupe)', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '14px' }}>
                Niché au cœur du Luberon, ce domaine d'exception allie le charme authentique de la pierre provençale au confort contemporain le plus exigeant.
              </p>
              <p>
                D'une superficie de 280 m², la bastide propose de grands espaces de vie baignés de lumière, 4 suites avec salles de bain privatives, une cuisine haut de gamme et un jardin paysager de 5 000 m² bordé de cyprès et d'oliviers séculaires.
              </p>
            </div>

            <SectionLabel text="Équipements" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {['Piscine chauffée', 'Jardin paysager', 'Wifi haut débit', 'Cuisine équipée', 'Parking privé', 'Climatisation', 'Lave-linge', 'Barbecue'].map(e => (
                <div key={e} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--color-taupe)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-terracotta)' }} />
                  {e}
                </div>
              ))}
            </div>

            <Divider />
            <SectionLabel text="Calendrier de disponibilité" />
            <div style={{ height: '260px', overflow: 'hidden', border: '1px solid var(--color-border)', marginBottom: '28px', position: 'relative' }}>
              <ImgPlaceholder src={CALENDAR_PREVIEW_IMAGE} alt="Calendrier interactif des disponibilités" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '16px 24px', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-anthracite)', fontWeight: 600 }}>CALENDRIER DE SÉLECTION</p>
                  <p style={{ fontSize: '12px', color: 'var(--color-taupe)', marginTop: '4px' }}>Sélectionnez vos dates pour vérifier les disponibilités instantanées</p>
                </div>
              </div>
            </div>

            <Divider />
            <SectionLabel text="Localisation" />
            <div style={{ height: '240px', overflow: 'hidden', border: '1px solid var(--color-border)', marginBottom: '28px', position: 'relative' }}>
              <ImgPlaceholder src={MAP_PREVIEW_IMAGE} alt="Localisation géographique de la bastide" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '8px 14px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-anthracite)' }}>
                📍 Luberon · Adresse exacte transmise après réservation
              </div>
            </div>

            <Divider />
            <SectionLabel text="Avis clients (48)" />
            {reviewsData.map(r => <ReviewCard key={r.name} review={r} />)}
          </div>

          {/* Right: booking widget */}
          <div style={{ position: 'sticky', top: '88px', border: '1px solid var(--color-border)', background: 'var(--color-ivory)' }}>
            <div style={{ padding: '24px' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '24px', fontWeight: 600, color: 'var(--color-terracotta)', marginBottom: '4px' }}>350 €<span style={{ fontSize: '14px', color: 'var(--color-taupe)', fontWeight: 400 }}> / nuit</span></p>
              <Divider />
              <div style={{ border: '1px solid var(--color-border)', marginBottom: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--color-border)' }}>
                  {[['ARRIVÉE', '14 / 08 / 2024'], ['DÉPART', '21 / 08 / 2024']].map(([l, p]) => (
                    <div key={l} style={{ padding: '12px 14px', borderRight: l === 'ARRIVÉE' ? '1px solid var(--color-border)' : 'none' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', marginBottom: '4px' }}>{l}</p>
                      <input defaultValue={p} style={{ background: 'none', border: 'none', outline: 'none', fontFamily: 'var(--font-mono)', fontSize: '13px', width: '100%', color: 'var(--color-anthracite)' }} />
                    </div>
                  ))}
                </div>
                <div style={{ padding: '12px 14px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', marginBottom: '4px' }}>Voyageurs</p>
                  <input defaultValue="4 adultes" style={{ background: 'none', border: 'none', outline: 'none', fontFamily: 'var(--font-body)', fontSize: '14px', width: '100%', color: 'var(--color-anthracite)' }} />
                </div>
              </div>
              <Link to="/booking/1" style={{ display: 'block', background: 'var(--color-anthracite)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, marginBottom: '16px', textDecoration: 'none' }}>
                Réserver maintenant →
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
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Total TTC</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600, color: 'var(--color-terracotta)' }}>2 665 €</span>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-taupe)', textAlign: 'center', marginTop: '14px' }}>🔒 Aucune somme prélevée avant validation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
