import React from 'react';
import { Field, ImgPlaceholder, SectionLabel, Divider } from '../components/Layout';
import { ABOUT_HERO_IMAGE, CONTACT_MAP_IMAGE, TEAM_MEMBERS } from '../data/images';

// ─── Contact page ─────────────────────────────────────────────────────────────

export function ContactPage() {
  return (
    <div className="container fade-in" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
      <SectionLabel text="Contact" />
      <h1 style={{ fontSize: '40px', marginBottom: '48px', maxWidth: '500px' }}>Une question ? Nous sommes là.</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        <div className="fade-in-up" style={{ border: '1px solid var(--color-border)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--color-ivory)', boxShadow: 'var(--shadow-sm)' }}>
          <SectionLabel text="Formulaire de contact" />
          <Field label="Nom complet" placeholder="Jean Dupont" />
          <Field label="Email" placeholder="jean.dupont@exemple.fr" type="email" />
          <Field label="Sujet" placeholder="Demande d'information réservation" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', fontWeight: 500, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
            <textarea rows={5} placeholder="Décrivez votre demande en quelques détails…" style={{ padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: '15px', border: '1px solid var(--color-border)', background: 'var(--color-ivory)', color: 'var(--color-anthracite)', outline: 'none', resize: 'vertical' }} />
          </div>
          <button className="btn-anim" style={{ background: 'var(--color-anthracite)', color: '#fff', padding: '14px', fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
            Envoyer le message
          </button>
        </div>
        <div className="fade-in-up delay-2">
          <SectionLabel text="Nos coordonnées" />
          <div style={{ border: '1px solid var(--color-border)', padding: '24px', marginBottom: '20px', background: 'var(--color-ivory)' }}>
            {[
              '📍 12 rue des Oliviers, 84000 Avignon',
              '✉️ contact@sejours-exception.fr',
              '📞 +33 4 90 00 12 34',
              '🕒 Du Lundi au Vendredi, 9h – 18h'
            ].map(info => (
              <p key={info} style={{ fontSize: '14px', color: 'var(--color-taupe)', marginBottom: '10px' }}>{info}</p>
            ))}
          </div>
          <div className="equal-card" style={{ height: '260px', width: '100%' }}>
            <div className="card-img-wrapper" style={{ height: '100%' }}>
              <ImgPlaceholder src={CONTACT_MAP_IMAGE} alt="Localisation des bureaux à Avignon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── About page ───────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <div className="fade-in">
      <div style={{ height: '360px', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <ImgPlaceholder src={ABOUT_HERO_IMAGE} alt="Domaine d'exception Séjours" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(33,31,28,0.35)' }} />
      </div>
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '80px' }}>
        <div className="fade-in-up">
          <SectionLabel text="Notre histoire" />
          <h1 style={{ fontSize: '40px', marginBottom: '24px', maxWidth: '560px' }}>Nous croyons en l'authenticité des lieux.</h1>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            <p style={{ color: 'var(--color-taupe)', lineHeight: '1.8', fontSize: '15px' }}>Fondée en 2018, notre plateforme sélectionne des propriétés d'exception pour des voyageurs qui cherchent plus qu'un simple hébergement. Nous privilégions l'authenticité, le caractère et la relation directe avec des propriétaires passionnés.</p>
            <p style={{ color: 'var(--color-taupe)', lineHeight: '1.8', fontSize: '15px' }}>Chaque bien est visité et évalué par notre équipe avant d'être référencé. Nous garantissons un niveau de qualité homogène et une expérience irréprochable, de la réservation au départ.</p>
          </div>
        </div>

        <Divider />

        <SectionLabel text="Notre équipe" />
        <h2 style={{ marginBottom: '32px' }}>Les visages derrière Séjours</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px', marginBottom: '60px', alignItems: 'stretch' }}>
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={member.name} className={`equal-card fade-in-up delay-${idx + 1}`}>
              <div className="card-img-wrapper" style={{ height: '220px' }}>
                <ImgPlaceholder src={member.src} alt={member.name} />
              </div>
              <div className="card-body" style={{ padding: '16px' }}>
                <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-anthracite)', marginBottom: '4px' }}>{member.name}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-taupe)' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        <SectionLabel text="Nos valeurs" />
        <h2 style={{ marginBottom: '32px' }}>Ce qui nous guide</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
          {[
            ['Sélection rigoureuse', 'Chaque propriété est visitée et évaluée par notre équipe avant publication.'],
            ['Transparence totale', "Prix clairs, pas de frais cachés, politique d'annulation lisible."],
            ['Service humain', 'Une équipe disponible 7j/7 pour vous accompagner de la recherche au retour.'],
          ].map(([title, desc], idx) => (
            <div key={title} className={`equal-card fade-in-up delay-${idx + 1}`} style={{ padding: '28px' }}>
              <div style={{ width: '24px', height: '2px', background: 'var(--color-terracotta)', marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '10px', fontSize: '18px' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-taupe)', lineHeight: '1.6' }}>{desc}</p>
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
    <div className="container fade-in" style={{ paddingTop: '60px', paddingBottom: '80px', maxWidth: '860px' }}>
      <SectionLabel text="Documents légaux" />
      <h1 style={{ fontSize: '36px', marginBottom: '32px' }}>Informations légales</h1>
      <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid var(--color-border)', marginBottom: '40px' }}>
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="pill-anim"
            style={{
              padding: '12px 24px', background: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '14px',
              borderBottom: tab === t.id ? '2px solid var(--color-anthracite)' : '2px solid transparent',
              color: tab === t.id ? 'var(--color-anthracite)' : 'var(--color-taupe)',
              border: 'none',
            } as React.CSSProperties}
          >{t.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`fade-in-up delay-${(i % 4) + 1}`}>
            <h3 style={{ marginBottom: '10px' }}>Article {i} — Conditions relatives aux réservations</h3>
            <div style={{ background: 'var(--color-beige)', border: '1px solid var(--color-border)', padding: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--color-taupe)', lineHeight: '1.8' }}>
              Les dispositions du présent article régissent l'accès, l'utilisation et la réservation de logements d'exception sur la plateforme Séjours. Toute réservation implique l'acceptation pleine et entière des conditions générales d'utilisation.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
