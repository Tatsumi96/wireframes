import React from 'react';
import { Link } from 'react-router-dom';
import { Field, ImgPlaceholder, SectionLabel, Divider, StepBar } from '../components/Layout';
import { PROPERTY_IMAGES, CALENDAR_PREVIEW_IMAGE, STRIPE_BADGE_IMAGE } from '../data/images';

const property = PROPERTY_IMAGES[0];

// ─── Step 1: Dates & voyageurs ────────────────────────────────────────────────

export function BookingStep1() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
      <StepBar steps={['1. Dates & voyageurs', '2. Récapitulatif', '3. Paiement']} current={0} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '40px', alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--color-border)', padding: '32px', background: 'var(--color-ivory)' }}>
          <SectionLabel text="Sélection des dates" />
          <div style={{ height: '280px', overflow: 'hidden', border: '1px solid var(--color-border)', marginBottom: '28px', position: 'relative' }}>
            <ImgPlaceholder src={CALENDAR_PREVIEW_IMAGE} alt="Sélection de dates interactives" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <Divider />
          <SectionLabel text="Voyageurs" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
            {['Adultes', 'Enfants'].map(l => (
              <div key={l}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{l}</p>
                <div style={{ border: '1px solid var(--color-border)', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', background: 'var(--color-beige)' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-taupe)', cursor: 'pointer', fontSize: '18px' }}>−</button>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', fontWeight: 600 }}>2</span>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-taupe)', cursor: 'pointer', fontSize: '18px' }}>+</button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/booking/2" style={{ display: 'block', background: 'var(--color-anthracite)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
            Continuer →
          </Link>
        </div>
        <div>
          <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', marginBottom: '16px', background: 'var(--color-ivory)' }}>
            <div style={{ height: '140px', width: '100%', overflow: 'hidden' }}>
              <ImgPlaceholder src={property.src} alt={property.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '14px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>{property.title}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)' }}>★ {property.rating} · Luberon</p>
            </div>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '16px', background: 'var(--color-ivory)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-taupe)', marginBottom: '4px' }}>TARIF ESTIMÉ</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 600, color: 'var(--color-terracotta)' }}>2 450 €</p>
            <p style={{ fontSize: '12px', color: 'var(--color-taupe)' }}>350 € × 7 nuits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 2: Récapitulatif ───────────────────────────────────────────────────

export function BookingStep2() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
      <StepBar steps={['1. Dates & voyageurs', '2. Récapitulatif', '3. Paiement']} current={1} />
      <div style={{ border: '1px solid var(--color-border)', padding: '40px', background: 'var(--color-ivory)', maxWidth: '800px', margin: '0 auto' }}>
        <SectionLabel text="Récapitulatif de la réservation" />
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '28px', marginBottom: '28px' }}>
          <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', height: '140px' }}>
            <ImgPlaceholder src={property.src} alt={property.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>{property.title}</p>
            {['Arrivée : 14/08/2024', 'Départ : 21/08/2024', 'Voyageurs : 4 adultes', 'Durée : 7 nuits'].map(d => (
              <div key={d} style={{ padding: '8px 12px', background: 'var(--color-beige)', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>{d}</div>
            ))}
          </div>
        </div>
        <Divider />
        <SectionLabel text="Détail du prix" />
        {[['350 € × 7 nuits', '2 450 €'], ['Frais de ménage', '120 €'], ['Frais de service', '95 €'], ['Taxes de séjour', '0 €']].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '14px', color: 'var(--color-taupe)' }}>{l}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-taupe)' }}>{v}</span>
          </div>
        ))}
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Total TTC</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 600, color: 'var(--color-terracotta)' }}>2 665 €</span>
        </div>
        <Divider />
        <SectionLabel text="Politique d'annulation" />
        <div style={{ background: 'var(--color-beige)', border: '1px solid var(--color-border)', padding: '16px', marginBottom: '28px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>
          Annulation gratuite jusqu'à 7 jours avant l'arrivée. Après cette date, les frais de la première nuit sont retenus.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
          <Link to="/booking/3" style={{ display: 'block', background: 'var(--color-anthracite)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
            Confirmer et payer →
          </Link>
          <Link to="/booking/1" style={{ display: 'block', textAlign: 'center', padding: '10px', fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-terracotta)', textDecoration: 'underline' }}>
            ← Modifier la sélection
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Paiement ────────────────────────────────────────────────────────

export function BookingStep3() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
      <StepBar steps={['1. Dates & voyageurs', '2. Récapitulatif', '3. Paiement']} current={2} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '40px', alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--color-border)', padding: '32px', background: 'var(--color-ivory)' }}>
          <SectionLabel text="Paiement sécurisé" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ height: '36px', width: '90px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <ImgPlaceholder src={STRIPE_BADGE_IMAGE} alt="Paiement sécurisé Stripe" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>SSL / TLS · Chiffrement 256 bits bancaire</p>
          </div>
          <Divider />
          <SectionLabel text="Informations de paiement" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            <Field label="Titulaire de la carte" placeholder="Jean Dupont" />
            <Field label="Numéro de carte" placeholder="4532 •••• •••• 8892" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Field label="Expiration" placeholder="08 / 27" />
              <Field label="CVV" placeholder="382" />
            </div>
          </div>
          <Divider />
          <SectionLabel text="Coordonnées du voyageur" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Field label="Prénom" placeholder="Jean" />
              <Field label="Nom" placeholder="Dupont" />
            </div>
            <Field label="Email" placeholder="jean.dupont@exemple.fr" type="email" />
            <Field label="Téléphone" placeholder="+33 6 12 34 56 78" />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
            <input type="checkbox" id="terms" defaultChecked style={{ marginTop: '3px', accentColor: 'var(--color-anthracite)' }} />
            <label htmlFor="terms" style={{ fontSize: '14px', color: 'var(--color-taupe)', cursor: 'pointer' }}>
              J'accepte les CGU et la politique d'annulation
            </label>
          </div>
          <button style={{ width: '100%', background: 'var(--color-anthracite)', color: '#fff', padding: '16px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
            Payer 2 665 € — Confirmer la réservation
          </button>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-taupe)', textAlign: 'center', marginTop: '14px' }}>🔒 Paiement 100% sécurisé · Confirmation immédiate par email</p>
        </div>
        <div>
          <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', marginBottom: '16px', background: 'var(--color-ivory)' }}>
            <div style={{ height: '140px', width: '100%', overflow: 'hidden' }}>
              <ImgPlaceholder src={property.src} alt={property.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '14px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>{property.title}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>14/08 → 21/08 · 7 nuits</p>
            </div>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '16px', background: 'var(--color-ivory)' }}>
            {[['Sous-total', '2 450 €'], ['Frais annexes', '215 €']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-taupe)' }}>{l}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>{v}</span>
              </div>
            ))}
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Total</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 600, color: 'var(--color-terracotta)' }}>2 665 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
