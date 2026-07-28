import React from 'react';
import { Link } from 'react-router-dom';
import { Btn, Field, ImgPlaceholder, SectionLabel, Divider, StepBar } from '../components/Layout';

// ─── Step 1: Dates & voyageurs ────────────────────────────────────────────────

export function BookingStep1() {
  return (
    <div className="container" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
      <StepBar steps={['1. Dates & voyageurs', '2. Récapitulatif', '3. Paiement']} current={0} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '40px', alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--color-border)', padding: '32px' }}>
          <SectionLabel text="Sélection des dates" />
          <ImgPlaceholder label="[ CALENDRIER INTERACTIF ]" style={{ height: '280px', marginBottom: '28px' }} />
          <Divider />
          <SectionLabel text="Voyageurs" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '28px' }}>
            {['Adultes', 'Enfants'].map(l => (
              <div key={l}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{l}</p>
                <div style={{ border: '1px solid var(--color-border)', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-taupe)', cursor: 'pointer', fontSize: '16px' }}>−</button>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px' }}>2</span>
                  <button style={{ background: 'none', border: 'none', color: 'var(--color-taupe)', cursor: 'pointer', fontSize: '16px' }}>+</button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/booking/2" style={{ display: 'block', background: 'var(--color-anthracite)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
            Continuer →
          </Link>
        </div>
        <div>
          <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', marginBottom: '12px' }}>
            <ImgPlaceholder style={{ height: '120px' }} />
            <div style={{ padding: '14px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>Bastide provençale</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-terracotta)' }}>★ 4.9 · Luberon</p>
            </div>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '16px' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', marginBottom: '8px' }}>TARIF ESTIMÉ</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--color-terracotta)' }}>2 450 €</p>
            <p style={{ fontSize: '13px', color: 'var(--color-border)' }}>350 € × 7 nuits</p>
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
      <div style={{ border: '1px solid var(--color-border)', padding: '40px' }}>
        <SectionLabel text="Récapitulatif de la réservation" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '28px' }}>
          <div>
            <ImgPlaceholder style={{ height: '120px', marginBottom: '12px' }} />
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Bastide provençale — Luberon</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Arrivée : 14/08/2024', 'Départ : 21/08/2024', 'Voyageurs : 4 adultes', 'Durée : 7 nuits'].map(d => (
              <div key={d} style={{ padding: '10px 14px', background: 'var(--color-beige)', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>{d}</div>
            ))}
          </div>
        </div>
        <Divider />
        <SectionLabel text="Détail du prix" />
        {[['350 € × 7 nuits', '2 450 €'], ['Frais de ménage', '120 €'], ['Frais de service', '95 €'], ['Taxes', '0 €']].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '14px', color: 'var(--color-taupe)' }}>{l}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--color-taupe)' }}>{v}</span>
          </div>
        ))}
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '28px' }}>
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Total TTC</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--color-terracotta)' }}>2 665 €</span>
        </div>
        <Divider />
        <SectionLabel text="Politique d'annulation" />
        <div style={{ background: 'var(--color-beige)', padding: '16px', marginBottom: '28px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>
          Annulation gratuite jusqu'à 7 jours avant l'arrivée. Après cette date, les frais de la première nuit sont retenus.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
          <Link to="/booking/3" style={{ display: 'block', background: 'var(--color-anthracite)', color: '#fff', textAlign: 'center', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500 }}>
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
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '40px', alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--color-border)', padding: '32px' }}>
          <SectionLabel text="Paiement sécurisé" />
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <ImgPlaceholder label="[ Stripe ]" style={{ width: '80px', height: '32px' }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>SSL / TLS · Chiffrement 256 bits</p>
          </div>
          <Divider />
          <SectionLabel text="Informations de paiement" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            <Field label="Titulaire de la carte" placeholder="Prénom Nom" />
            <Field label="Numéro de carte" placeholder="···· ···· ···· ····" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Field label="Expiration" placeholder="MM / AA" />
              <Field label="CVV" placeholder="···" />
            </div>
          </div>
          <Divider />
          <SectionLabel text="Coordonnées du voyageur" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <Field label="Prénom" placeholder="Jean" />
              <Field label="Nom" placeholder="Dupont" />
            </div>
            <Field label="Email" placeholder="jean@exemple.fr" type="email" />
            <Field label="Téléphone" placeholder="+33 6 00 00 00 00" />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
            <input type="checkbox" id="terms" style={{ marginTop: '3px', accentColor: 'var(--color-anthracite)' }} />
            <label htmlFor="terms" style={{ fontSize: '14px', color: 'var(--color-taupe)', cursor: 'pointer' }}>
              J'accepte les CGU et la politique d'annulation
            </label>
          </div>
          <button style={{ width: '100%', background: 'var(--color-anthracite)', color: '#fff', padding: '16px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
            Payer 2 665 € — Confirmer la réservation
          </button>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-border)', textAlign: 'center', marginTop: '14px' }}>🔒 Paiement sécurisé · Données chiffrées</p>
        </div>
        <div>
          <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', marginBottom: '12px' }}>
            <ImgPlaceholder style={{ height: '100px' }} />
            <div style={{ padding: '14px' }}>
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>Bastide provençale</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>14/08 → 21/08 · 7 nuits</p>
            </div>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '16px' }}>
            {[['Sous-total', '2 450 €'], ['Frais', '215 €']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-taupe)' }}>{l}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>{v}</span>
              </div>
            ))}
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Total</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--color-terracotta)' }}>2 665 €</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
