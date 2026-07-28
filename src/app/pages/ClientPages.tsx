import React from 'react';
import { Link } from 'react-router-dom';
import { PortalSidebar, ImgPlaceholder, SectionLabel, Divider, Btn, Field } from '../components/Layout';

// ─── Client Portal ─────────────────────────────────────────────────────────────

const clientLinks = [
  { label: 'Dashboard', to: '/client' },
  { label: 'Mes réservations', to: '/client/booking' },
  { label: 'Paiements', to: '/client/payments' },
  { label: 'Paramètres', to: '/client/settings' },
];

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div style={{ border: '1px solid var(--color-border)', padding: '20px 24px', background: 'var(--color-ivory)' }}>
    <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-border)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{label}</p>
    <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 600, color: 'var(--color-anthracite)' }}>{value}</p>
  </div>
);

const BookingRow: React.FC<{ past?: boolean }> = ({ past }) => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '16px', border: '1px solid var(--color-border)', background: 'var(--color-ivory)' }}>
    <ImgPlaceholder style={{ width: '90px', height: '70px', flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
        <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-anthracite)' }}>Bastide provençale — Luberon</p>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', padding: '3px 8px', border: '1px solid ' + (past ? 'var(--color-border)' : 'var(--color-terracotta)'), color: past ? 'var(--color-border)' : 'var(--color-terracotta)' }}>
          {past ? 'Terminé' : 'Confirmée'}
        </span>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>14/08 → 21/08 · 7 nuits · 280 € · Réf. #AB1234</p>
    </div>
    <Link to="/client/booking" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-taupe)', textDecoration: 'underline', flexShrink: 0 }}>Détails</Link>
  </div>
);

export function ClientDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <PortalSidebar title="Portail Client" links={clientLinks} />
      <div style={{ flex: 1, background: 'var(--color-beige)', padding: '40px' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 500, color: 'var(--color-anthracite)', marginBottom: '28px' }}>Bonjour, Jean !</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          <StatCard label="Réservations" value="8" />
          <StatCard label="Nuits réservées" value="47" />
          <StatCard label="Dépenses totales" value="6 240 €" />
        </div>
        <SectionLabel text="Réservations en cours" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
          <BookingRow />
          <BookingRow />
        </div>
        <SectionLabel text="Séjours passés" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[1, 2, 3].map(i => <BookingRow key={i} past />)}
        </div>
      </div>
    </div>
  );
}

export function ClientBooking() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <PortalSidebar title="Portail Client" links={clientLinks} />
      <div style={{ flex: 1, background: 'var(--color-beige)', padding: '40px' }}>
        <Link to="/client" style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', textDecoration: 'underline', display: 'block', marginBottom: '24px' }}>← Mes réservations</Link>
        <h2 style={{ marginBottom: '28px' }}>Réservation #AB1234</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '24px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ border: '1px solid var(--color-border)', padding: '24px', background: 'var(--color-ivory)' }}>
              <SectionLabel text="Propriété" />
              <div style={{ display: 'flex', gap: '16px' }}>
                <ImgPlaceholder style={{ width: '120px', height: '80px', flexShrink: 0 }} />
                <div>
                  <p style={{ fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '6px' }}>Bastide provençale</p>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', marginBottom: '8px' }}>Luberon · Villa · ★ 4.9</p>
                  <Link to="/property" style={{ fontSize: '13px', color: 'var(--color-terracotta)', textDecoration: 'underline' }}>Voir l'annonce →</Link>
                </div>
              </div>
            </div>
            <div style={{ border: '1px solid var(--color-border)', padding: '24px', background: 'var(--color-ivory)' }}>
              <SectionLabel text="Détails du séjour" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {['Arrivée : 14/08/2024', 'Départ : 21/08/2024', 'Voyageurs : 4 adultes', 'Durée : 7 nuits'].map(d => (
                  <div key={d} style={{ padding: '10px 14px', background: 'var(--color-beige)', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>{d}</div>
                ))}
              </div>
            </div>
            <div style={{ border: '1px solid var(--color-border)', padding: '24px', background: 'var(--color-ivory)' }}>
              <SectionLabel text="Instructions d'accès" />
              <div style={{ background: 'var(--color-beige)', padding: '16px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>
                Code d'accès : 4821 · Clé boîte à clés gauche de la porte d'entrée.
              </div>
            </div>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '24px', background: 'var(--color-ivory)' }}>
            <SectionLabel text="Statut" />
            <div style={{ padding: '10px 14px', background: 'var(--color-anthracite)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '12px', textAlign: 'center', marginBottom: '14px' }}>CONFIRMÉE</div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', marginBottom: '6px' }}>Réf. : #AB1234</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)', marginBottom: '20px' }}>Réservé le : 02/07/2024</p>
            <Divider />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', color: 'var(--color-terracotta)', marginBottom: '4px' }}>2 665 €</p>
            <p style={{ fontSize: '13px', color: 'var(--color-taupe)' }}>Payé le 02/07/2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientPayments() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <PortalSidebar title="Portail Client" links={clientLinks} />
      <div style={{ flex: 1, background: 'var(--color-beige)', padding: '40px' }}>
        <h2 style={{ marginBottom: '28px' }}>Historique des paiements</h2>
        <div style={{ border: '1px solid var(--color-border)', overflow: 'hidden', background: 'var(--color-ivory)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 120px 100px', gap: '16px', padding: '12px 20px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-beige)' }}>
            {['Propriété', 'Date', 'Montant', 'Statut'].map(h => (
              <p key={h} style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</p>
            ))}
          </div>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 120px 100px', gap: '16px', padding: '14px 20px', borderBottom: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '14px', color: 'var(--color-anthracite)' }}>Bastide provençale</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)' }}>02/07/2024</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-terracotta)' }}>2 665 €</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-taupe)' }}>Prélevé</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ClientSettings() {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 72px)' }}>
      <PortalSidebar title="Portail Client" links={clientLinks} />
      <div style={{ flex: 1, background: 'var(--color-beige)', padding: '40px' }}>
        <h2 style={{ marginBottom: '28px' }}>Paramètres du compte</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ border: '1px solid var(--color-border)', padding: '28px', background: 'var(--color-ivory)' }}>
            <SectionLabel text="Informations personnelles" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <Field label="Prénom" placeholder="Jean" />
              <Field label="Nom" placeholder="Dupont" />
              <Field label="Email" placeholder="jean@exemple.fr" />
              <Field label="Téléphone" placeholder="+33 6 00 00 00 00" />
            </div>
            <button style={{ background: 'var(--color-anthracite)', color: '#fff', padding: '12px 24px', fontFamily: 'var(--font-body)', fontSize: '14px', border: 'none', cursor: 'pointer' }}>Sauvegarder</button>
          </div>
          <div style={{ border: '1px solid var(--color-border)', padding: '28px', background: 'var(--color-ivory)' }}>
            <SectionLabel text="Sécurité" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              <Field label="Mot de passe actuel" placeholder="••••••••" type="password" />
              <Field label="Nouveau mot de passe" placeholder="••••••••" type="password" />
              <Field label="Confirmer" placeholder="••••••••" type="password" />
            </div>
            <button style={{ background: 'var(--color-anthracite)', color: '#fff', padding: '12px 24px', fontFamily: 'var(--font-body)', fontSize: '14px', border: 'none', cursor: 'pointer' }}>Modifier</button>
          </div>
        </div>
      </div>
    </div>
  );
}
