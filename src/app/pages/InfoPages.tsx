import React from 'react';
import { Btn, Field, ImgPlaceholder, SectionLabel, Divider } from '../components/Layout';

// ─── Contact page ─────────────────────────────────────────────────────────────

export function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <SectionLabel text="Contact" />
      <h1 style={{ fontSize: '40px', marginBottom: '48px', maxWidth: '500px' }}>Une question ? Nous sommes là.</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        <div style={{ border: '1px solid var(--color-border)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <SectionLabel text="Formulaire de contact" />
          <Field label="Nom complet" placeholder="Jean Dupont" />
          <Field label="Email" placeholder="jean@exemple.fr" type="email" />
          <Field label="Sujet" placeholder="Votre demande en quelques mots" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
            <textarea rows={5} placeholder="Décrivez votre demande…" style={{ padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: '15px', border: '1px solid var(--color-border)', background: 'var(--color-ivory)', color: 'var(--color-anthracite)', outline: 'none', resize: 'vertical' }} />
          </div>
          <button style={{ background: 'var(--color-anthracite)', color: '#fff', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
            Envoyer le message
          </button>
        </div>
        <div>
          <SectionLabel text="Nos coordonnées" />
          <div style={{ border: '1px solid var(--color-border)', padding: '24px', marginBottom: '16px' }}>
            {['12 rue des Oliviers, 84000 Avignon', 'contact@sejours.fr', '+33 4 00 00 00 00', 'Lun–Ven, 9h–18h'].map(info => (
              <p key={info} style={{ fontSize: '14px', color: 'var(--color-taupe)', marginBottom: '8px', fontFamily: info.includes('@') ? 'var(--font-mono)' : 'var(--font-body)' }}>{info}</p>
            ))}
          </div>
          <ImgPlaceholder label="[ CARTE — localisation bureau ]" style={{ height: '240px' }} />
        </div>
      </div>
    </div>
  );
}

// ─── About page ───────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <div>
      <ImgPlaceholder label="[ HERO — À propos ]" style={{ height: '340px', width: '100%' }} />
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <SectionLabel text="Notre histoire" />
        <h1 style={{ fontSize: '40px', marginBottom: '24px', maxWidth: '560px' }}>Nous croyons en l'authenticité des lieux.</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
          <p style={{ color: 'var(--color-taupe)', lineHeight: '1.8' }}>Fondée en 2018, notre plateforme sélectionne des propriétés d'exception pour des voyageurs qui cherchent plus qu'un simple hébergement. Nous privilégions l'authenticité, le caractère et la relation directe avec des propriétaires passionnés.</p>
          <p style={{ color: 'var(--color-taupe)', lineHeight: '1.8' }}>Chaque bien est visité et évalué par notre équipe avant d'être référencé. Nous garantissons un niveau de qualité homogène et une expérience irréprochable, de la réservation au départ.</p>
        </div>
        <Divider />
        <SectionLabel text="Notre équipe" />
        <h2 style={{ marginBottom: '32px' }}>Les visages derrière Séjours</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {['Directrice', 'CTO', 'Expérience client', 'Sélection des biens'].map(role => (
            <div key={role} style={{ border: '1px solid var(--color-border)', overflow: 'hidden' }}>
              <ImgPlaceholder label="[ Photo ]" style={{ height: '200px' }} />
              <div style={{ padding: '16px' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>Prénom Nom</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>{role}</p>
              </div>
            </div>
          ))}
        </div>
        <Divider />
        <SectionLabel text="Nos valeurs" />
        <h2 style={{ marginBottom: '32px' }}>Ce qui nous guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {[
            ['Sélection rigoureuse', 'Chaque propriété est visitée et évaluée par notre équipe avant publication.'],
            ['Transparence totale', "Prix clairs, pas de frais cachés, politique d'annulation lisible."],
            ['Service humain', 'Une équipe disponible 7j/7 pour vous accompagner de la recherche au retour.'],
          ].map(([title, desc]) => (
            <div key={title} style={{ border: '1px solid var(--color-border)', padding: '28px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--color-terracotta)', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '10px' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-taupe)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Legal page ───────────────────────────────────────────────────────────────

export function LegalPage() {
  const [tab, setTab] = React.useState('cgu');
  const tabs = [{ id: 'cgu', label: 'CGU' }, { id: 'privacy', label: 'Confidentialité' }, { id: 'legal', label: 'Mentions légales' }];
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '860px' }}>
      <SectionLabel text="Documents légaux" />
      <h1 style={{ fontSize: '36px', marginBottom: '32px' }}>Informations légales</h1>
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--color-border)', marginBottom: '40px' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: '12px 24px', background: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '14px',
              borderBottom: tab === t.id ? '2px solid var(--color-anthracite)' : '2px solid transparent',
              color: tab === t.id ? 'var(--color-anthracite)' : 'var(--color-taupe)',
              border: 'none',
              borderBottom: tab === t.id ? '2px solid var(--color-anthracite)' : '2px solid transparent',
            } as React.CSSProperties}
          >{t.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i}>
            <h3 style={{ marginBottom: '10px' }}>Article {i} — Titre de la section</h3>
            <div style={{ background: 'var(--color-beige)', padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)', lineHeight: '1.8' }}>
              Texte de l'article {i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
