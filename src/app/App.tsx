import { useState } from "react";

// ─────────────────────────────────────────────────────────
// NAVIGATION STRUCTURE
// ─────────────────────────────────────────────────────────

const modules = [
  {
    id: "public",
    label: "Site Public",
    badge: "PUBLIC",
    screens: [
      { id: "home", label: "Accueil" },
      { id: "search", label: "Résultats de recherche" },
      { id: "property", label: "Fiche propriété" },
      { id: "booking-1", label: "Réservation — Dates" },
      { id: "booking-2", label: "Réservation — Récap" },
      { id: "booking-3", label: "Réservation — Paiement" },
      { id: "contact", label: "Contact" },
      { id: "about", label: "À propos" },
      { id: "legal", label: "CGU / Confidentialité" },
    ],
  },
  {
    id: "client",
    label: "Portail Client",
    badge: "CLIENT",
    screens: [
      { id: "client-dashboard", label: "Dashboard" },
      { id: "client-booking", label: "Détail réservation" },
      { id: "client-payments", label: "Historique paiements" },
      { id: "client-settings", label: "Paramètres compte" },
    ],
  },
  {
    id: "owner",
    label: "Portail Propriétaire",
    badge: "OWNER",
    screens: [
      { id: "owner-dashboard", label: "Dashboard" },
      { id: "owner-bookings", label: "Historique réservations" },
      { id: "owner-payouts", label: "Suivi versements" },
    ],
  },
  {
    id: "admin",
    label: "Administration",
    badge: "ADMIN",
    screens: [
      { id: "admin-login", label: "Connexion admin" },
      { id: "admin-listings", label: "Gestion annonces" },
      { id: "admin-listing-edit", label: "Ajout / Édition annonce" },
      { id: "admin-bookings", label: "Gestion réservations" },
      { id: "admin-payments", label: "Suivi paiements" },
      { id: "admin-clients", label: "Gestion clients" },
      { id: "admin-owners", label: "Gestion propriétaires" },
      { id: "admin-settings", label: "Paramètres généraux" },
    ],
  },
];


// ─────────────────────────────────────────────────────────
// CHATBOT WIDGET
// ─────────────────────────────────────────────────────────
const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 z-50 font-['Outfit']">
      {isOpen && (
        <div className="bg-white border border-[#eaeaea] shadow-xl rounded-md w-80 mb-4 overflow-hidden flex flex-col transition-all">
          <div className="bg-[#111] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-md bg-green-400"></div>
              <span className="text-sm font-medium">Support Client</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#888] hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
          <div className="h-64 bg-[#fafafa] p-4 flex flex-col gap-3 overflow-y-auto">
            <div className="bg-white border border-[#eaeaea] p-3 rounded-md rounded-tl-sm text-xs text-[#333] self-start max-w-[80%] shadow-sm">
              Bonjour ! Comment puis-je vous aider avec votre réservation ?
            </div>
            <div className="bg-[#111] text-white p-3 rounded-md rounded-tr-sm text-xs self-end max-w-[80%] shadow-sm">
              Je cherche un logement avec vue sur la mer.
            </div>
          </div>
          <div className="p-3 bg-white border-t border-[#eaeaea] flex items-center gap-2">
            <input type="text" placeholder="Écrivez votre message..." className="flex-1 text-xs outline-none bg-[#f5f5f5] px-3 py-2 rounded-md" />
            <button className="bg-[#111] text-white p-2 rounded-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/></svg>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-14 h-14 rounded-md bg-[#111] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        style={{ position: isOpen ? 'absolute' : 'relative', bottom: isOpen ? 0 : 'auto', right: isOpen ? 0 : 'auto' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>
      {isOpen && (
        <button 
          onClick={() => setIsOpen(false)} 
          className="w-14 h-14 rounded-md bg-white border border-[#eaeaea] text-[#111] shadow-lg flex items-center justify-center transition-transform hover:scale-105 absolute bottom-0 right-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// WIREFRAME PRIMITIVES
// ─────────────────────────────────────────────────────────

type FC = { children?: React.ReactNode; className?: string };

const WFBox = ({ label, className = "", h = "h-24", children }: { label?: string; className?: string; h?: string; children?: React.ReactNode }) => (
  <div className={`border border-[#d0d0d0] bg-[#ededed] flex items-center justify-center ${h} ${className}`}>
    {children || <span className="text-[9px] text-[#aaa] font-['JetBrains_Mono'] uppercase tracking-wide px-2 text-center leading-relaxed">{label}</span>}
  </div>
);

const WFImg = ({ label = "[ IMAGE ]", className = "", h = "h-40", src }: { label?: string; className?: string; h?: string; src?: string }) => (
  <div className={`border border-[#d0d0d0] bg-[#dcdcdc] flex items-center justify-center ${h} ${className} relative overflow-hidden`}>
    {src ? (
      <img src={src} alt={label} className="absolute inset-0 w-full h-full object-cover" />
    ) : (
      <>
        <span className="text-[9px] text-[#999] font-['JetBrains_Mono'] relative z-10">{label}</span>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #888 0, #888 1px, transparent 0, transparent 50%)", backgroundSize: "8px 8px" }} />
      </>
    )}
  </div>
);

const WFInput = ({ label }: { label: string }) => (
  <div className="border border-[#d0d0d0] bg-white h-8 flex items-center px-2.5 w-full">
    <span className="text-[10px] text-[#bbb] font-['Outfit']">{label}</span>
  </div>
);

const WFBtn = ({ label, variant = "primary", sm = false }: { label: string; variant?: "primary" | "secondary" | "ghost"; sm?: boolean }) => (
  <div className={`flex items-center justify-center px-3 text-[10px] font-['Outfit'] font-medium select-none whitespace-nowrap ${sm ? "h-7" : "h-8"} ${
    variant === "primary" ? "bg-[#2a2a2a] text-white" :
    variant === "secondary" ? "border border-[#2a2a2a] bg-white text-[#2a2a2a]" :
    "text-[#888] underline"
  }`}>
    {label}
  </div>
);

const WFLabel = ({ text, className = "" }: { text: string; className?: string }) => (
  <span className={`text-[9px] font-['JetBrains_Mono'] text-[#aaa] uppercase tracking-widest ${className}`}>{text}</span>
);

const WFTag = ({ label }: { label: string }) => (
  <div className="border border-[#d0d0d0] bg-white px-2 h-6 flex items-center flex-shrink-0">
    <span className="text-[9px] text-[#888] font-['Outfit']">{label}</span>
  </div>
);

const WFSection = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="w-1.5 h-1.5 border border-[#aaa] bg-[#ddd]" />
    <span className="text-[8px] font-['JetBrains_Mono'] text-[#aaa] uppercase tracking-[0.2em]">{text}</span>
  </div>
);

const WFDivider = ({ className = "" }: { className?: string }) => (
  <div className={`border-t border-[#e5e5e5] my-3 ${className}`} />
);

const WFRow = ({ children, className = "" }: FC) => (
  <div className={`flex gap-2 ${className}`}>{children}</div>
);

const WFCol = ({ children, className = "" }: FC) => (
  <div className={`flex flex-col gap-2 ${className}`}>{children}</div>
);

const WFCheck = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-4 h-4 border border-[#d0d0d0] bg-[#ededed] flex-shrink-0" />
    <span className="text-[9px] text-[#888] font-['Outfit']">{label}</span>
  </div>
);

const WFToggle = ({ label }: { label: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-[9px] text-[#888] font-['Outfit']">{label}</span>
    <div className="w-8 h-4 border border-[#d0d0d0] bg-[#ededed] relative">
      <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-[#aaa]" />
    </div>
  </div>
);

const WFBreadcrumb = ({ path }: { path: string }) => (
  <WFLabel text={path} className="text-[#bbb]" />
);

// ─────────────────────────────────────────────────────────
// SHARED LAYOUT PIECES
// ─────────────────────────────────────────────────────────

const PubHeader = () => (
  <div className="border-b border-[#d0d0d0] bg-white h-12 flex items-center px-5 justify-between flex-shrink-0">
    <WFBox label="LOGO" h="h-7" className="w-20 border-[#d0d0d0]" />
    <div className="flex items-center gap-4">
      {["Destinations", "Catégories", "À propos"].map(n => (
        <WFLabel key={n} text={n} className="text-[#888]" />
      ))}
      <div className="w-px h-4 bg-[#e0e0e0]" />
      <WFBtn label="Connexion" variant="secondary" sm />
      <WFBtn label="S'inscrire" sm />
    </div>
  </div>
);

const PubHeaderMob = () => (
  <div className="border-b border-[#d0d0d0] bg-white h-11 flex items-center px-3 justify-between flex-shrink-0">
    <WFBox label="LOGO" h="h-7" className="w-16" />
    <WFBox label="≡" h="h-7" className="w-7" />
  </div>
);

const PubFooter = () => (
  <div className="border-t border-[#d0d0d0] bg-white px-5 py-5 mt-8">
    <div className="grid grid-cols-4 gap-6 mb-4">
      {["Liens utiles", "Légal", "Support", "Réseaux"].map(col => (
        <WFCol key={col}>
          <WFSection text={col} />
          {[1, 2, 3].map(i => <WFLabel key={i} text={`Lien ${i}`} className="text-[#ccc]" />)}
        </WFCol>
      ))}
    </div>
    <WFDivider />
    <WFLabel text="© 2024 — Mentions légales · CGU · Politique de confidentialité" className="text-[#ccc]" />
  </div>
);

const PortalSidebar = ({ title, items, active = 0 }: { title: string; items: string[]; active?: number }) => (
  <div className="w-44 border-r border-[#d0d0d0] bg-[#f5f5f5] flex-shrink-0 flex flex-col">
    <div className="px-3 py-3 border-b border-[#d0d0d0]">
      <WFBox label="LOGO" h="h-7" className="w-20 mb-2" />
      <WFLabel text={title} className="text-[#999]" />
    </div>
    <div className="px-2 py-3 flex flex-col gap-0.5 flex-1">
      {items.map((item, i) => (
        <div key={i} className={`px-2.5 py-1.5 text-[10px] font-['Outfit'] ${i === active ? "bg-[#2a2a2a] text-white" : "text-[#666]"}`}>
          {item}
        </div>
      ))}
    </div>
    <div className="px-3 py-3 border-t border-[#d0d0d0]">
      <div className="flex items-center gap-2">
        <WFBox label="" h="h-7" className="w-7 flex-shrink-0" />
        <div>
          <div className="text-[9px] font-['Outfit'] text-[#666]">Prénom Nom</div>
          <div className="text-[8px] font-['Outfit'] text-[#aaa]">Déconnexion</div>
        </div>
      </div>
    </div>
  </div>
);

const AdminSidebar = ({ active = 0 }: { active?: number }) => {
  const items = ["Tableau de bord", "Annonces", "Réservations", "Paiements", "Clients", "Propriétaires", "Paramètres"];
  return (
    <div className="w-44 border-r border-[#2a2a2a] bg-[#1a1a1a] flex-shrink-0 flex flex-col">
      <div className="px-3 py-3 border-b border-[#333]">
        <WFBox label="LOGO" h="h-7" className="w-20 bg-[#333] border-[#444]" />
        <div className="mt-1.5 text-[8px] font-['JetBrains_Mono'] text-[#555] uppercase tracking-[0.2em]">Administration</div>
      </div>
      <div className="px-2 py-3 flex flex-col gap-0.5 flex-1">
        {items.map((item, i) => (
          <div key={i} className={`px-2.5 py-1.5 text-[10px] font-['Outfit'] ${i === active ? "bg-[#333] text-white" : "text-[#666]"}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const StepBar = ({ steps, current }: { steps: string[]; current: number }) => (
  <div className="flex items-center gap-2 mb-5">
    {steps.map((s, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className={`px-2.5 h-6 flex items-center text-[9px] font-['JetBrains_Mono'] border ${
          i === current ? "bg-[#2a2a2a] text-white border-[#2a2a2a]" :
          i < current ? "bg-[#e0e0e0] border-[#d0d0d0] text-[#888]" :
          "bg-white border-[#d0d0d0] text-[#bbb]"
        }`}>{s}</div>
        {i < steps.length - 1 && <span className="text-[#ccc] text-xs">→</span>}
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────
// PUBLIC SCREENS
// ─────────────────────────────────────────────────────────

const ScreenHome = ({ mobile }: { mobile: boolean }) => {
  if (mobile) return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col">
      <PubHeaderMob />
      <WFImg label="[ HERO ]" h="h-52" src="https://images.unsplash.com/photo-1542314831-c6a4d27ece08?auto=format&fit=crop&q=80&w=1200" />
      <div className="p-3 space-y-2">
        <WFSection text="Trouvez votre logement" />
        <WFInput label="Destination…" />
        <WFRow>
          <div className="flex-1"><WFInput label="Arrivée" /></div>
          <div className="flex-1"><WFInput label="Départ" /></div>
        </WFRow>
        <WFInput label="Voyageurs" />
        <WFBtn label="Rechercher →" />
      </div>
      <div className="px-3 pb-4 space-y-2">
        <WFSection text="Propriétés en vedette" />
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white border border-[#d0d0d0]">
            <WFImg h="h-32" />
            <div className="p-2.5 space-y-1">
              <WFRow className="justify-between">
                <WFLabel text="Nom propriété" className="text-[#666]" />
                <WFTag label="★ 4.9" />
              </WFRow>
              <WFLabel text="Lieu · Type · N pers." />
              <WFLabel text="XXX € / nuit" className="text-[#555]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <PubHeader />
      <div className="relative">
        <WFImg label="[ HERO IMAGE PLEIN ÉCRAN ]" h="h-[400px]" className="w-full" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-white/20">
          <div className="text-center space-y-1">
            <WFSection text="Titre accrocheur — Sous-titre plateforme" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 w-full max-w-3xl shadow-sm">
            <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-0 divide-x divide-[#e5e5e5]">
              {[["DESTINATION", "Ville, région…"], ["ARRIVÉE", "jj/mm/aaaa"], ["DÉPART", "jj/mm/aaaa"]].map(([lbl, ph]) => (
                <div key={lbl} className="px-3 py-1">
                  <WFLabel text={lbl} className="block mb-1" />
                  <WFInput label={ph} />
                </div>
              ))}
              <div className="pl-3 flex items-end">
                <WFBtn label="Rechercher →" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-4">
          <WFSection text="Propriétés en vedette" />
          <WFBtn label="Voir tout →" sm variant="ghost" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white border border-[#d0d0d0]">
              <WFImg h="h-40" />
              <div className="p-3 space-y-1">
                <WFRow className="justify-between items-start">
                  <WFLabel text="Nom propriété" className="text-[#555]" />
                  <WFTag label="★ 4.9" />
                </WFRow>
                <WFLabel text="Lieu · Type · N chambres" />
                <WFDivider className="my-1" />
                <WFRow className="justify-between items-center">
                  <WFLabel text="XXX € / nuit" className="text-[#555]" />
                  <WFBtn label="Voir" sm variant="secondary" />
                </WFRow>
              </div>
            </div>
          ))}
        </div>

        <WFDivider />
        <WFSection text="Catégories" />
        <WFRow className="flex-wrap gap-2 mb-6">
          {["Villas", "Appartements", "Maisons", "Chalets", "Bord de mer", "Montagne", "Campagne"].map(c => (
            <WFTag key={c} label={c} />
          ))}
        </WFRow>

        <WFDivider />
        <WFBox label="[ SECTION CTA — S'inscrire en tant que propriétaire / Déposer une annonce ]" h="h-28" className="w-full" />
      </div>
      <PubFooter />
    </div>
  );
};

const ScreenSearch = ({ mobile }: { mobile: boolean }) => {
  if (mobile) return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <PubHeaderMob />
      <div className="p-2.5 bg-white border-b border-[#d0d0d0] space-y-2">
        <WFInput label="Destination · Dates · Voyageurs" />
        <WFRow>
          <WFBtn label="Filtres" variant="secondary" sm />
          <WFBtn label="Carte" variant="secondary" sm />
          <WFBtn label="Trier ▾" variant="secondary" sm />
        </WFRow>
      </div>
      <div className="p-3 space-y-2">
        <WFLabel text="XX résultats" className="text-[#888]" />
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="bg-white border border-[#d0d0d0]">
            <WFImg h="h-32" />
            <div className="p-2.5 space-y-1">
              <WFRow className="justify-between">
                <WFLabel text="Nom propriété" className="text-[#555]" />
                <WFTag label="★ 4.8" />
              </WFRow>
              <WFLabel text="Type · Lieu · X pers." />
              <WFLabel text="XXX €/nuit" className="text-[#555]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <PubHeader />
      <div className="bg-white border-b border-[#d0d0d0] px-5 py-2.5">
        <div className="max-w-5xl mx-auto flex gap-2 items-center">
          <div className="flex-1 grid grid-cols-4 gap-2">
            <WFInput label="Destination" />
            <WFInput label="Arrivée" />
            <WFInput label="Départ" />
            <WFInput label="Voyageurs" />
          </div>
          <WFBtn label="Rechercher" />
          <WFBtn label="Modifier" variant="secondary" sm />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-4">
        <div className="flex gap-2 mb-3 flex-wrap items-center">
          <WFLabel text="Filtres :" />
          {["Prix ▾", "Type de bien ▾", "Chambres ▾", "Équipements ▾", "Disponibilité ▾"].map(f => (
            <WFTag key={f} label={f} />
          ))}
          <WFBtn label="Réinitialiser" variant="ghost" sm />
        </div>

        <div className="grid grid-cols-[260px_1fr] gap-5">
          <div className="space-y-3">
            <WFLabel text="XX propriétés trouvées" className="text-[#888]" />
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="bg-white border border-[#d0d0d0]">
                <WFImg h="h-28" />
                <div className="p-2.5 space-y-1">
                  <WFRow className="justify-between items-start">
                    <WFLabel text="Nom propriété" className="text-[#555]" />
                    <WFTag label="★ 4.x" />
                  </WFRow>
                  <WFLabel text="Type · Lieu · N pers." />
                  <WFRow className="justify-between items-center mt-1">
                    <WFLabel text="XXX €/nuit" className="text-[#555]" />
                    <WFBtn label="Voir" sm variant="secondary" />
                  </WFRow>
                </div>
              </div>
            ))}
          </div>
          <WFBox label="[ CARTE INTERACTIVE ]\n\nMarqueurs de propriétés · Zoom/dézoom\nOpenStreetMap ou Mapbox" h="auto" className="min-h-[580px] sticky top-16" />
        </div>
      </div>
      <PubFooter />
    </div>
  );
};

const ScreenProperty = ({ mobile }: { mobile: boolean }) => {
  if (mobile) return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <PubHeaderMob />
      <WFImg label="[ GALERIE — swipe ]" h="h-52" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=600" />
      <div className="p-3 space-y-3">
        <WFLabel text="Nom de la propriété" className="text-[#444] text-xs" />
        <WFRow><WFTag label="Lieu" /><WFTag label="★ 4.9 (XX avis)" /></WFRow>
        <WFDivider />
        <WFSection text="Description" />
        <WFBox label="[ Texte description ]" h="h-20" />
        <WFSection text="Équipements" />
        <div className="grid grid-cols-2 gap-1">{[1,2,3,4,5,6].map(i=><WFTag key={i} label={`Équipement ${i}`} />)}</div>
        <WFSection text="Disponibilité" />
        <WFBox label="[ CALENDRIER ]" h="h-44" />
        <WFSection text="Réservation" />
        <WFInput label="Arrivée" /><WFInput label="Départ" /><WFInput label="Voyageurs" />
        <WFBox label="XXX € × N nuits = XXX €\n+ Ménage + Service" h="h-16" className="bg-white" />
        <WFBtn label="Réserver maintenant" />
        <WFSection text="Avis clients" />
        {[1,2].map(i=>(
          <div key={i} className="bg-white border border-[#d0d0d0] p-2.5">
            <WFRow className="items-center mb-1"><WFBox label="" h="h-7" className="w-7" /><WFLabel text="Prénom N. · ★★★★★" className="text-[#888]" /></WFRow>
            <WFBox label="[ Commentaire ]" h="h-10" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <PubHeader />
      <div className="max-w-5xl mx-auto px-5 py-6">
        <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-1.5 mb-6" style={{ height: 280 }}>
          <WFImg label="[ PHOTO PRINCIPALE ]" h="h-full" className="row-span-2" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800" />
          <WFImg label="[ Photo 2 ]" h="h-full" />
          <WFImg label="[ Photo 3 ]" h="h-full" />
          <WFImg label="[ Photo 4 ]" h="h-full" />
          <div className="relative">
            <WFImg label="[ Photo 5 ]" h="h-full" />
            <div className="absolute bottom-2 right-2 bg-white border border-[#d0d0d0] px-2 h-6 flex items-center">
              <WFLabel text="+ X photos" className="text-[#666]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_300px] gap-7">
          <div className="space-y-5">
            <div>
              <h1 className="text-base font-medium text-[#333] font-['Outfit'] mb-1">Nom de la propriété</h1>
              <WFRow className="flex-wrap gap-1.5">
                <WFTag label="Lieu" /><WFTag label="Type de bien" /><WFTag label="N chambres" /><WFTag label="★ 4.9 (XX avis)" />
              </WFRow>
            </div>
            <WFDivider />
            <WFSection text="Description" />
            <WFBox label="[ Texte de description — plusieurs paragraphes ]" h="h-24" className="bg-white" />
            <WFDivider />
            <WFSection text="Équipements" />
            <div className="grid grid-cols-3 gap-1.5">
              {[1,2,3,4,5,6,7,8,9].map(i=><WFTag key={i} label={`Équipement ${i}`} />)}
            </div>
            <WFDivider />
            <WFSection text="Calendrier de disponibilité" />
            <WFBox label="[ CALENDRIER DOUBLE ]\nDates disponibles / indisponibles / bloquées" h="h-56" className="bg-white" />
            <WFDivider />
            <WFSection text="Localisation" />
            <WFBox label="[ CARTE — Position approximative de la propriété ]" h="h-44" />
            <WFDivider />
            <WFSection text="Avis clients (XX)" />
            <div className="space-y-2.5">
              {[1,2,3].map(i=>(
                <div key={i} className="bg-white border border-[#d0d0d0] p-3.5">
                  <WFRow className="items-center mb-2">
                    <WFBox label="" h="h-8" className="w-8 flex-shrink-0" />
                    <div><WFLabel text="Prénom N." className="text-[#555] block" /><WFLabel text="★★★★★ · Date du séjour" /></div>
                  </WFRow>
                  <WFBox label="[ Texte de l'avis ]" h="h-11" />
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-16">
            <div className="bg-white border border-[#d0d0d0] p-4 space-y-3">
              <WFLabel text="XXX € / nuit" className="text-[#444] text-xs" />
              <WFDivider className="my-2" />
              <div className="border border-[#d0d0d0] divide-y divide-[#e5e5e5]">
                <div className="grid grid-cols-2 divide-x divide-[#e5e5e5]">
                  {[["ARRIVÉE","jj/mm/aaaa"],["DÉPART","jj/mm/aaaa"]].map(([l,p])=>(
                    <div key={l} className="p-2"><WFLabel text={l} className="block mb-1" /><WFInput label={p} /></div>
                  ))}
                </div>
                <div className="p-2"><WFLabel text="VOYAGEURS" className="block mb-1" /><WFInput label="X adultes, X enfants" /></div>
              </div>
              <WFBtn label="Vérifier disponibilité" />
              <WFDivider />
              <WFBox label="XXX € × N nuits\n+ Frais de ménage\n+ Frais de service\n─────────────\nTOTAL : XXX €" h="h-28" className="bg-[#f7f7f7] text-left items-start p-2" />
              <WFBtn label="Réserver →" />
              <WFLabel text="Aucun débit avant confirmation" className="text-[#bbb] text-center block" />
            </div>
          </div>
        </div>
      </div>
      <PubFooter />
    </div>
  );
};

const ScreenBooking1 = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f7f7f7] min-h-screen">
    {mobile ? <PubHeaderMob /> : <PubHeader />}
    <div className="max-w-2xl mx-auto px-5 py-6">
      <StepBar steps={["1. Dates & voyageurs","2. Récapitulatif","3. Paiement"]} current={0} />
      <div className={`grid gap-5 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_220px]"}`}>
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-3">
          <WFSection text="Sélection des dates" />
          <WFBox label="[ CALENDRIER INTERACTIF ]\nSélection d'une plage de dates\nDates bloquées / disponibles" h="h-60" />
          <WFDivider />
          <WFSection text="Voyageurs" />
          <WFRow>
            {["Adultes","Enfants"].map(l=>(
              <div key={l} className="flex-1">
                <WFLabel text={l} className="block mb-1" />
                <WFBox label="[ − 2 + ]" h="h-8" className="bg-[#f7f7f7]" />
              </div>
            ))}
          </WFRow>
          <WFBtn label="Continuer →" />
        </div>
        <WFCol>
          <div className="bg-white border border-[#d0d0d0]">
            <WFImg h="h-24" />
            <div className="p-2.5 space-y-1">
              <WFLabel text="Nom propriété" className="text-[#555]" />
              <WFLabel text="Lieu · ★ 4.9" />
            </div>
          </div>
          <WFBox label="Tarif estimé\nXXX € × N nuits\n= XXX €" h="h-20" className="bg-white" />
        </WFCol>
      </div>
    </div>
  </div>
);

const ScreenBooking2 = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f7f7f7] min-h-screen">
    {mobile ? <PubHeaderMob /> : <PubHeader />}
    <div className="max-w-2xl mx-auto px-5 py-6">
      <StepBar steps={["1. Dates & voyageurs","2. Récapitulatif","3. Paiement"]} current={1} />
      <div className="bg-white border border-[#d0d0d0] p-5 space-y-4">
        <WFSection text="Récapitulatif de la réservation" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <WFImg h="h-24" />
            <WFLabel text="Nom propriété — Lieu" className="text-[#666] block mt-1" />
          </div>
          <WFCol>
            {["Arrivée : jj/mm/aaaa","Départ : jj/mm/aaaa","Voyageurs : X adultes","Durée : N nuits"].map(d=>(
              <WFBox key={d} label={d} h="h-8" className="bg-[#f7f7f7] text-left items-start px-2" />
            ))}
          </WFCol>
        </div>
        <WFDivider />
        <WFSection text="Détail du prix" />
        {["XXX € × N nuits","Frais de ménage","Frais de service","Taxes"].map(l=>(
          <div key={l} className="flex justify-between">
            <WFLabel text={l} className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#888]" />
          </div>
        ))}
        <WFDivider />
        <div className="flex justify-between">
          <WFLabel text="TOTAL TTC" className="text-[#444]" />
          <WFLabel text="XXX €" className="text-[#444]" />
        </div>
        <WFDivider />
        <WFSection text="Politique d'annulation" />
        <WFBox label="[ Texte de la politique d'annulation ]" h="h-12" />
        <WFBtn label="Confirmer et payer →" />
        <WFBtn label="← Modifier la sélection" variant="ghost" />
      </div>
    </div>
  </div>
);

const ScreenBooking3 = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f7f7f7] min-h-screen">
    {mobile ? <PubHeaderMob /> : <PubHeader />}
    <div className="max-w-2xl mx-auto px-5 py-6">
      <StepBar steps={["1. Dates & voyageurs","2. Récapitulatif","3. Paiement"]} current={2} />
      <div className={`grid gap-5 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_200px]"}`}>
        <div className="bg-white border border-[#d0d0d0] p-5 space-y-3">
          <WFSection text="Paiement sécurisé" />
          <WFRow className="items-center gap-3">
            <WFBox label="[ Logo Stripe ]" h="h-7" className="w-16" />
            <WFLabel text="SSL / TLS chiffrement 256 bits" />
          </WFRow>
          <WFDivider />
          <WFSection text="Informations de paiement" />
          <WFInput label="Titulaire de la carte" />
          <WFInput label="Numéro de carte  ···· ···· ···· ····" />
          <WFRow>
            <div className="flex-1"><WFInput label="MM / AA" /></div>
            <div className="flex-1"><WFInput label="CVV" /></div>
          </WFRow>
          <WFDivider />
          <WFSection text="Coordonnées du voyageur" />
          <WFRow>
            <div className="flex-1"><WFInput label="Prénom" /></div>
            <div className="flex-1"><WFInput label="Nom" /></div>
          </WFRow>
          <WFInput label="Email" />
          <WFInput label="Téléphone" />
          <WFDivider />
          <WFCheck label="J'accepte les CGU et la politique d'annulation" />
          <WFBtn label="Payer XXX € — Confirmer la réservation" />
          <WFLabel text="🔒 Paiement sécurisé · Données chiffrées" className="text-[#bbb] text-center block" />
        </div>
        <WFCol>
          <div className="bg-white border border-[#d0d0d0] p-3 space-y-2">
            <WFImg h="h-20" />
            <WFLabel text="Nom propriété" className="text-[#555] block" />
            <WFLabel text="Arrivée — Départ · N nuits" />
          </div>
          <WFBox label="Sous-total : XXX €\nTaxes : XX €\nTotal : XXX €" h="h-20" className="bg-white" />
        </WFCol>
      </div>
    </div>
  </div>
);

const ScreenContact = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f7f7f7] min-h-screen">
    {mobile ? <PubHeaderMob /> : <PubHeader />}
    <div className="max-w-3xl mx-auto px-5 py-8">
      <WFSection text="Contact" />
      <div className={`grid gap-6 mt-3 ${mobile ? "grid-cols-1" : "grid-cols-2"}`}>
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-3">
          <WFSection text="Formulaire de contact" />
          <WFInput label="Nom complet" />
          <WFInput label="Email" />
          <WFInput label="Sujet" />
          <WFBox label="[ Zone de texte — Message ]" h="h-24" className="bg-[#f7f7f7]" />
          <WFBtn label="Envoyer le message" />
        </div>
        <WFCol>
          <WFSection text="Nos coordonnées" />
          <WFBox label="Adresse · Téléphone · Email · Horaires" h="h-24" className="bg-white" />
          <WFBox label="[ CARTE — localisation bureau ]" h="h-44" />
        </WFCol>
      </div>
    </div>
    <PubFooter />
  </div>
);

const ScreenAbout = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f7f7f7] min-h-screen">
    {mobile ? <PubHeaderMob /> : <PubHeader />}
    <WFImg label="[ HERO — À PROPOS ]" h="h-40" className="w-full" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200" />
    <div className="max-w-4xl mx-auto px-5 py-8 space-y-6">
      <WFSection text="Notre histoire" />
      <WFBox label="[ Texte de présentation de la plateforme ]" h="h-24" className="bg-white" />
      <WFSection text="Notre équipe" />
      <div className="grid grid-cols-4 gap-3">
        {[1,2,3,4].map(i=>(
          <div key={i} className="bg-white border border-[#d0d0d0] p-3 text-center space-y-1">
            <WFImg label="PHOTO" h="h-20" />
            <WFLabel text="Prénom Nom" className="text-[#555] block mt-1" />
            <WFLabel text="Rôle / Titre" />
          </div>
        ))}
      </div>
      <WFSection text="Nos valeurs" />
      <div className="grid grid-cols-3 gap-3">
        {[1,2,3].map(i=>(
          <WFBox key={i} label={`[ Valeur ${i} — icône + titre + description ]`} h="h-24" className="bg-white" />
        ))}
      </div>
    </div>
    <PubFooter />
  </div>
);

const ScreenLegal = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f7f7f7] min-h-screen">
    {mobile ? <PubHeaderMob /> : <PubHeader />}
    <div className="max-w-3xl mx-auto px-5 py-8">
      <WFSection text="Documents légaux" />
      <WFRow className="mb-4 gap-1">
        <WFBtn label="CGU" sm />
        <WFBtn label="Politique de confidentialité" sm variant="secondary" />
        <WFBtn label="Mentions légales" sm variant="secondary" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0] p-5 space-y-4">
        {[1,2,3,4,5].map(i=>(
          <div key={i}>
            <WFLabel text={`Article ${i} — Titre de la section`} className="text-[#555] text-xs block mb-1" />
            <WFBox label={`[ Texte de l'article ${i} — plusieurs lignes ]`} h="h-16" />
          </div>
        ))}
      </div>
    </div>
    <PubFooter />
  </div>
);

// ─────────────────────────────────────────────────────────
// CLIENT PORTAL SCREENS
// ─────────────────────────────────────────────────────────

const clientNav = ["Dashboard", "Mes réservations", "Paiements", "Paramètres"];

const ScreenClientDashboard = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Client" items={clientNav} active={0} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-4">
      <WFLabel text="Bonjour, Prénom Nom !" className="text-[#555] text-sm block" />
      <div className="grid grid-cols-3 gap-3">
        {["Réservations totales","Nuits réservées","Montant dépensé"].map(s=>(
          <div key={s} className="bg-white border border-[#d0d0d0] p-3">
            <WFLabel text={s} /><div className="text-lg font-medium text-[#444] font-['Outfit'] mt-1">XX</div>
          </div>
        ))}
      </div>
      <WFSection text="Réservations en cours" />
      <div className="space-y-2">
        {[1,2].map(i=>(
          <div key={i} className="bg-white border border-[#d0d0d0] p-3 flex gap-3 items-start">
            <WFImg h="h-16" className="w-24 flex-shrink-0" />
            <div className="flex-1 space-y-0.5">
              <WFRow className="justify-between"><WFLabel text="Nom propriété — Lieu" className="text-[#555]" /><WFTag label="Confirmée" /></WFRow>
              <WFLabel text="Arrivée : jj/mm — Départ : jj/mm · N nuits" />
              <WFLabel text="XXX € · Réf. #XXXXXX" />
            </div>
            <WFBtn label="Détails" sm variant="secondary" />
          </div>
        ))}
      </div>
      <WFSection text="Réservations passées" />
      <div className="space-y-1.5">
        {[1,2,3].map(i=>(
          <div key={i} className="bg-white border border-[#d0d0d0] p-3 flex justify-between items-center">
            <div className="space-y-0.5">
              <WFLabel text="Nom propriété — Lieu" className="text-[#555]" />
              <WFLabel text="Date séjour · XXX €" />
            </div>
            <WFRow><WFTag label="Terminé" /><WFBtn label="Laisser un avis" sm variant="secondary" /></WFRow>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenClientBooking = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Client" items={clientNav} active={1} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFBreadcrumb path="← Mes réservations" />
      <WFLabel text="Détail de la réservation #XXXXXX" className="text-[#444] text-xs" />
      <div className={`grid gap-4 ${mobile ? "grid-cols-1" : "grid-cols-[1fr_260px]"}`}>
        <WFCol>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-3">
            <WFSection text="Propriété" />
            <div className="flex gap-3">
              <WFImg h="h-20" className="w-32 flex-shrink-0" />
              <div className="space-y-1">
                <WFLabel text="Nom propriété" className="text-[#555]" />
                <WFLabel text="Lieu · Type de bien" />
                <WFLabel text="★ 4.9 · XX avis" />
                <WFBtn label="Voir l'annonce" sm variant="secondary" />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-3">
            <WFSection text="Détails du séjour" />
            <div className="grid grid-cols-2 gap-2">
              {["Arrivée : jj/mm/aaaa","Départ : jj/mm/aaaa","Voyageurs : X adultes","Durée : N nuits"].map(d=>(
                <WFBox key={d} label={d} h="h-9" className="bg-[#f7f7f7] text-left items-start px-2" />
              ))}
            </div>
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Instructions d'accès" />
            <WFBox label="[ Code d'accès / Instructions du propriétaire ]" h="h-20" className="bg-[#f7f7f7]" />
          </div>
        </WFCol>
        <WFCol>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Statut" />
            <WFBox label="CONFIRMÉE" h="h-9" className="bg-[#e0e0e0]" />
            <WFLabel text="Réf. : #XXXXXX" className="text-[#aaa] block" />
            <WFLabel text="Réservé le : jj/mm/aaaa" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-1">
            <WFSection text="Récap financier" />
            {["Loyer","Ménage","Frais de service","Total TTC"].map(l=>(
              <div key={l} className="flex justify-between">
                <WFLabel text={l} className="text-[#888]" />
                <WFLabel text="XXX €" className="text-[#888]" />
              </div>
            ))}
          </div>
          <WFBtn label="Annuler la réservation" variant="secondary" />
          <WFBtn label="Contacter l'hôte" variant="secondary" />
        </WFCol>
      </div>
    </div>
  </div>
);

const ScreenClientPayments = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Client" items={clientNav} active={2} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Historique des paiements" className="text-[#444] text-xs" />
      <WFRow className="flex-wrap gap-1">
        {["Tous","Payé","Remboursé","En attente"].map(s=><WFTag key={s} label={s} />)}
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-5 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["Date","Propriété","Montant","Mode","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6].map(i=>(
          <div key={i} className="grid grid-cols-5 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text="jj/mm/aaaa" className="text-[#888]" />
            <WFLabel text="Nom propriété" className="text-[#555]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFLabel text="···4242" className="text-[#888]" />
            <WFTag label={i%3===0?"Remboursé":"Payé"} />
          </div>
        ))}
      </div>
      <WFBtn label="Télécharger relevé PDF" variant="secondary" sm />
    </div>
  </div>
);

const ScreenClientSettings = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Client" items={clientNav} active={3} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Paramètres du compte" className="text-[#444] text-xs" />
      <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
        <WFSection text="Informations personnelles" />
        <WFRow><div className="flex-1"><WFInput label="Prénom" /></div><div className="flex-1"><WFInput label="Nom" /></div></WFRow>
        <WFInput label="Email" /><WFInput label="Téléphone" /><WFInput label="Adresse" />
        <WFBtn label="Enregistrer" sm />
      </div>
      <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
        <WFSection text="Sécurité" />
        <WFInput label="Mot de passe actuel" />
        <WFInput label="Nouveau mot de passe" />
        <WFInput label="Confirmer" />
        <WFBtn label="Changer le mot de passe" sm />
      </div>
      <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
        <WFSection text="Notifications" />
        {["Confirmations de réservation","Rappels de séjour","Offres spéciales","Newsletter"].map(n=>(
          <WFToggle key={n} label={n} />
        ))}
      </div>
      <div className="bg-white border border-[#d0d0d0] p-4">
        <WFSection text="Zone danger" />
        <WFBtn label="Demander la suppression du compte" variant="secondary" sm />
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// OWNER PORTAL SCREENS
// ─────────────────────────────────────────────────────────

const ownerNav = ["Dashboard","Réservations","Versements"];

const ScreenOwnerDashboard = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Propriétaire" items={ownerNav} active={0} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-4">
      <WFLabel text="Tableau de bord propriétaire" className="text-[#444] text-xs" />
      <div className="grid grid-cols-4 gap-3">
        {["Réservations actives","Taux d'occupation","Revenus du mois","Prochain versement"].map(s=>(
          <div key={s} className="bg-white border border-[#d0d0d0] p-3">
            <WFLabel text={s} /><div className="text-lg font-medium text-[#444] font-['Outfit'] mt-1">XX</div>
          </div>
        ))}
      </div>
      <WFSection text="Mes propriétés" />
      {[1,2].map(i=>(
        <div key={i} className="bg-white border border-[#d0d0d0] p-3 flex gap-3 items-start">
          <WFImg h="h-16" className="w-24 flex-shrink-0" />
          <div className="flex-1 space-y-1">
            <WFLabel text="Nom propriété — Lieu" className="text-[#555]" />
            <WFLabel text="Type · N chambres · XX nuits réservées ce mois" />
            <WFRow><WFTag label="Disponible" /><WFTag label="X réservations à venir" /></WFRow>
          </div>
          <WFBtn label="Voir réservations" sm variant="secondary" />
        </div>
      ))}
      <WFSection text="Réservations à venir" />
      {[1,2,3].map(i=>(
        <div key={i} className="bg-white border border-[#d0d0d0] p-3 flex justify-between items-center">
          <div className="space-y-0.5">
            <WFLabel text="Prénom Nom (voyageur) — Propriété" className="text-[#555]" />
            <WFLabel text="Arrivée — Départ · N nuits · XXX €" />
          </div>
          <WFTag label="Confirmée" />
        </div>
      ))}
    </div>
  </div>
);

const ScreenOwnerBookings = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Propriétaire" items={ownerNav} active={1} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Historique des réservations" className="text-[#444] text-xs" />
      <WFRow className="flex-wrap gap-2">
        <div className="flex-1"><WFInput label="Rechercher…" /></div>
        <WFTag label="Propriété ▾" /><WFTag label="Statut ▾" /><WFTag label="Période ▾" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-6 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["Réf.","Voyageur","Propriété","Dates","Montant","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6,7].map(i=>(
          <div key={i} className="grid grid-cols-6 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text={`#${2000+i}`} className="text-[#bbb]" />
            <WFLabel text="Prénom N." className="text-[#555]" />
            <WFLabel text="Nom propriété" className="text-[#555]" />
            <WFLabel text="jj/mm — jj/mm" className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFTag label={["Confirmée","Terminée","Annulée"][i%3]} />
          </div>
        ))}
      </div>
      <WFBox label="[ Pagination — ← 1 2 3 … → ]" h="h-8" className="bg-white" />
    </div>
  </div>
);

const ScreenOwnerPayouts = ({ mobile }: { mobile: boolean }) => (
  <div className={`flex min-h-screen ${mobile ? "flex-col" : ""}`}>
    {!mobile && <PortalSidebar title="Portail Propriétaire" items={ownerNav} active={2} />}
    {mobile && <div className="bg-white border-b border-[#d0d0d0] px-3 py-2 flex justify-between"><WFBox label="LOGO" h="h-7" className="w-16" /><WFBox label="≡" h="h-7" className="w-7" /></div>}
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Suivi des versements" className="text-[#444] text-xs" />
      <div className="grid grid-cols-3 gap-3">
        {["Total versé (cumul)","Versement à venir","En attente de validation"].map(s=>(
          <div key={s} className="bg-white border border-[#d0d0d0] p-3">
            <WFLabel text={s} /><div className="text-lg font-medium text-[#444] font-['Outfit'] mt-1">XXX €</div>
          </div>
        ))}
      </div>
      <WFBox label="[ GRAPHIQUE — Revenus mensuels (barres) ]" h="h-40" className="bg-white" />
      <WFSection text="Détail des versements" />
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-5 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["Période","Propriété","Réservations","Montant brut","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5].map(i=>(
          <div key={i} className="grid grid-cols-5 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text="Mois AAAA" className="text-[#888]" />
            <WFLabel text="Nom propriété" className="text-[#555]" />
            <WFLabel text="X rés." className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFTag label={i%2===0?"Versé":"À venir"} />
          </div>
        ))}
      </div>
      <WFSection text="Coordonnées bancaires" />
      <div className="bg-white border border-[#d0d0d0] p-3">
        <WFBox label="IBAN : FR76 XXXX XXXX XXXX — Titulaire : Prénom Nom" h="h-9" className="bg-[#f7f7f7]" />
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// ADMIN SCREENS
// ─────────────────────────────────────────────────────────

const ScreenAdminLogin = ({ mobile }: { mobile: boolean }) => (
  <div className="bg-[#f0f0f0] min-h-screen flex items-center justify-center">
    <div className="bg-white border border-[#d0d0d0] p-7 w-72 space-y-4">
      <WFBox label="LOGO" h="h-9" className="w-24 mx-auto" />
      <WFLabel text="Accès Administration sécurisée" className="text-[#888] text-center block" />
      <WFDivider />
      <WFInput label="Identifiant administrateur" />
      <WFInput label="Mot de passe" />
      <WFBox label="[ reCAPTCHA v2 ]" h="h-12" className="bg-[#f5f5f5]" />
      <WFBtn label="Se connecter" />
      <WFLabel text="Connexion sécurisée · SSL/TLS" className="text-[#ccc] text-center block" />
    </div>
  </div>
);

const ScreenAdminListings = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={1} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <div className="flex justify-between items-center">
        <WFLabel text="Gestion des annonces" className="text-[#444] text-xs" />
        <WFBtn label="+ Nouvelle annonce" sm />
      </div>
      <WFRow className="flex-wrap gap-2">
        <div className="flex-1"><WFInput label="Rechercher une annonce…" /></div>
        <WFTag label="Statut ▾" /><WFTag label="Type ▾" /><WFTag label="Propriétaire ▾" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-7 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["ID","Photo","Nom","Propriétaire","Type","Tarif","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6,7,8].map(i=>(
          <div key={i} className="grid grid-cols-7 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text={`#${1000+i}`} className="text-[#bbb]" />
            <WFImg h="h-9" className="w-12" label="" />
            <WFLabel text="Nom propriété" className="text-[#555]" />
            <WFLabel text="Prénom N." className="text-[#888]" />
            <WFLabel text="Villa" className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFTag label={i%3===0?"Inactif":"Actif"} />
          </div>
        ))}
      </div>
      <WFBox label="[ Pagination ]" h="h-8" className="bg-white" />
    </div>
  </div>
);

const ScreenAdminListingEdit = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={1} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3 overflow-auto">
      <div className="flex justify-between items-center">
        <div>
          <WFBreadcrumb path="← Annonces" />
          <WFLabel text="Édition annonce — Nom de la propriété" className="text-[#444] text-xs block mt-0.5" />
        </div>
        <WFRow><WFBtn label="Enregistrer" sm /><WFBtn label="Aperçu" sm variant="secondary" /></WFRow>
      </div>
      <div className="grid grid-cols-[1fr_240px] gap-4">
        <WFCol>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Informations générales" />
            <WFInput label="Nom de la propriété" />
            <WFInput label="Type de bien (Villa, Appartement…)" />
            <WFInput label="Adresse complète" />
            <WFRow>
              <div className="flex-1"><WFInput label="Ville" /></div>
              <div className="w-24"><WFInput label="CP" /></div>
              <div className="flex-1"><WFInput label="Pays" /></div>
            </WFRow>
            <WFBox label="[ Description — éditeur texte riche WYSIWYG ]" h="h-24" className="bg-[#f7f7f7]" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Galerie photos" />
            <div className="grid grid-cols-4 gap-2">
              {[1,2,3,4,5,6,7].map(i=><WFImg key={i} h="h-16" label={i===7?"+ Photo":""} />)}
            </div>
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Équipements" />
            <div className="grid grid-cols-3 gap-1.5">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(i=>(
                <WFCheck key={i} label={`Équipement ${i}`} />
              ))}
            </div>
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Tarification" />
            <WFRow>
              <div className="flex-1"><WFInput label="Tarif de base / nuit (€)" /></div>
              <div className="flex-1"><WFInput label="Frais de ménage (€)" /></div>
              <div className="flex-1"><WFInput label="Séjour min. (nuits)" /></div>
            </WFRow>
            <WFBox label="[ RÈGLES PAR SAISON — tableau haute saison / basse saison ]" h="h-20" className="bg-[#f7f7f7]" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
            <WFSection text="Disponibilités" />
            <WFBox label="[ CALENDRIER ADMIN — blocage / déblocage de dates ]\nCliquer pour basculer disponible ↔ bloqué" h="h-52" className="bg-[#f7f7f7]" />
          </div>
        </WFCol>
        <WFCol>
          <div className="bg-white border border-[#d0d0d0] p-3 space-y-2">
            <WFSection text="Statut de l'annonce" />
            <WFToggle label="Annonce active" />
            <WFToggle label="Mise en vedette" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-3 space-y-2">
            <WFSection text="Propriétaire" />
            <WFInput label="Sélectionner…" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-3 space-y-2">
            <WFSection text="Capacité" />
            <WFInput label="Nb voyageurs max." />
            <WFInput label="Nb chambres" />
            <WFInput label="Nb salles de bain" />
          </div>
          <div className="bg-white border border-[#d0d0d0] p-3 space-y-2">
            <WFSection text="SEO" />
            <WFInput label="Titre SEO" />
            <WFInput label="Meta description" />
          </div>
        </WFCol>
      </div>
    </div>
  </div>
);

const ScreenAdminBookings = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={2} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Gestion des réservations" className="text-[#444] text-xs" />
      <div className="grid grid-cols-4 gap-3">
        {["Total réservations","En cours","À venir","Annulées"].map(s=>(
          <div key={s} className="bg-white border border-[#d0d0d0] p-3">
            <WFLabel text={s} /><div className="text-lg font-medium text-[#444] font-['Outfit'] mt-1">XX</div>
          </div>
        ))}
      </div>
      <WFRow className="flex-wrap gap-2">
        <div className="flex-1"><WFInput label="Rechercher…" /></div>
        <WFTag label="Statut ▾" /><WFTag label="Propriété ▾" /><WFTag label="Période ▾" /><WFTag label="Client ▾" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-8 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["Réf.","Client","Propriété","Arrivée","Départ","Montant","Statut","Actions"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6,7,8,9,10].map(i=>(
          <div key={i} className="grid grid-cols-8 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text={`#${2000+i}`} className="text-[#bbb]" />
            <WFLabel text="Prénom N." className="text-[#555]" />
            <WFLabel text="Nom prop." className="text-[#555]" />
            <WFLabel text="jj/mm" className="text-[#888]" />
            <WFLabel text="jj/mm" className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFTag label={["Confirmée","En cours","Annulée","Terminée"][i%4]} />
            <WFBtn label="Voir" sm variant="secondary" />
          </div>
        ))}
      </div>
      <WFBox label="[ Pagination ]" h="h-8" className="bg-white" />
    </div>
  </div>
);

const ScreenAdminPayments = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={3} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Suivi des paiements" className="text-[#444] text-xs" />
      <div className="grid grid-cols-4 gap-3">
        {["CA total","Encaissé ce mois","Remboursements","En attente"].map(s=>(
          <div key={s} className="bg-white border border-[#d0d0d0] p-3">
            <WFLabel text={s} /><div className="text-lg font-medium text-[#444] font-['Outfit'] mt-1">XXX €</div>
          </div>
        ))}
      </div>
      <WFBox label="[ GRAPHIQUE — Revenus par mois (courbe / barres groupées) ]" h="h-40" className="bg-white" />
      <WFRow className="flex-wrap gap-2">
        <div className="flex-1"><WFInput label="Rechercher…" /></div>
        <WFTag label="Statut ▾" /><WFTag label="Période ▾" />
        <WFBtn label="Exporter CSV" sm variant="secondary" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-7 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["Réf.","Client","Propriété","Date","Montant","Mode","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6,7,8].map(i=>(
          <div key={i} className="grid grid-cols-7 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text={`#${3000+i}`} className="text-[#bbb]" />
            <WFLabel text="Prénom N." className="text-[#555]" />
            <WFLabel text="Nom prop." className="text-[#555]" />
            <WFLabel text="jj/mm/aaaa" className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFLabel text="Stripe" className="text-[#888]" />
            <WFTag label={["Payé","Remboursé","En attente"][i%3]} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenAdminClients = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={4} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <WFLabel text="Gestion des comptes clients" className="text-[#444] text-xs" />
      <WFRow className="gap-2">
        <div className="flex-1"><WFInput label="Rechercher un client…" /></div>
        <WFTag label="Statut ▾" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-7 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["ID","Nom","Email","Tél.","Inscrit le","Rés.","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6,7,8,9,10].map(i=>(
          <div key={i} className="grid grid-cols-7 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text={`CL${1000+i}`} className="text-[#bbb]" />
            <WFLabel text="Prénom Nom" className="text-[#555]" />
            <WFLabel text="email@…" className="text-[#888]" />
            <WFLabel text="+33 6 XX" className="text-[#888]" />
            <WFLabel text="jj/mm/aaaa" className="text-[#888]" />
            <WFLabel text="X" className="text-[#555]" />
            <WFTag label={i%5===0?"Suspendu":"Actif"} />
          </div>
        ))}
      </div>
      <WFBox label="[ Pagination ]" h="h-8" className="bg-white" />
    </div>
  </div>
);

const ScreenAdminOwners = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={5} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3">
      <div className="flex justify-between items-center">
        <WFLabel text="Gestion des comptes propriétaires" className="text-[#444] text-xs" />
        <WFBtn label="+ Ajouter propriétaire" sm />
      </div>
      <WFRow className="gap-2">
        <div className="flex-1"><WFInput label="Rechercher un propriétaire…" /></div>
        <WFTag label="Statut ▾" />
      </WFRow>
      <div className="bg-white border border-[#d0d0d0]">
        <div className="grid grid-cols-7 px-3 py-2 bg-[#f0f0f0] border-b border-[#d0d0d0]">
          {["ID","Nom","Email","Propriétés","Réservations","Revenus","Statut"].map(h=>(
            <WFLabel key={h} text={h} className="text-[#777]" />
          ))}
        </div>
        {[1,2,3,4,5,6,7].map(i=>(
          <div key={i} className="grid grid-cols-7 px-3 py-2 border-b border-[#f0f0f0] items-center">
            <WFLabel text={`PR${200+i}`} className="text-[#bbb]" />
            <WFLabel text="Prénom Nom" className="text-[#555]" />
            <WFLabel text="email@…" className="text-[#888]" />
            <WFLabel text="X biens" className="text-[#555]" />
            <WFLabel text="XX" className="text-[#888]" />
            <WFLabel text="XXX €" className="text-[#555]" />
            <WFTag label={i%4===0?"Suspendu":"Actif"} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenAdminSettings = ({ mobile }: { mobile: boolean }) => (
  <div className="flex min-h-screen">
    <AdminSidebar active={6} />
    <div className="flex-1 bg-[#f7f7f7] p-5 space-y-3 overflow-auto">
      <WFLabel text="Paramètres généraux du site" className="text-[#444] text-xs" />
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
          <WFSection text="Informations générales" />
          <WFInput label="Nom du site" />
          <WFInput label="Email de contact" />
          <WFInput label="Téléphone" />
          <WFInput label="Devise (EUR, USD…)" />
          <WFBtn label="Enregistrer" sm />
        </div>
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
          <WFSection text="Paiement & Commissions" />
          <WFInput label="Clé publique Stripe" />
          <WFInput label="Clé secrète (masquée)" />
          <WFInput label="Commission plateforme (%)" />
          <WFInput label="Délai de versement (jours)" />
          <WFBtn label="Enregistrer" sm />
        </div>
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
          <WFSection text="Emails & Notifications" />
          <WFInput label="SMTP Host" />
          <WFInput label="SMTP Port" />
          <WFInput label="Email expéditeur" />
          <WFBox label="[ Templates d'email — sélecteur ]" h="h-10" className="bg-[#f7f7f7]" />
          <WFBtn label="Tester l'envoi" sm variant="secondary" />
        </div>
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-2">
          <WFSection text="SEO & Analytics" />
          <WFInput label="Google Analytics ID" />
          <WFInput label="Meta titre global" />
          <WFInput label="Meta description globale" />
          <WFBtn label="Enregistrer" sm />
        </div>
        <div className="bg-white border border-[#d0d0d0] p-4 space-y-3 col-span-2">
          <WFSection text="Apparence" />
          <WFRow className="gap-4">
            {["Logo","Favicon"].map(l=>(
              <div key={l} className="flex-1 space-y-1">
                <WFLabel text={l} className="block" />
                <WFImg h="h-14" label={`[ ${l} actuel ]`} />
                <WFBtn label="Remplacer" sm variant="secondary" />
              </div>
            ))}
            <div className="flex-1 space-y-1">
              <WFLabel text="Couleur primaire" className="block" />
              <WFBox label="[ Sélecteur couleur ]" h="h-14" className="bg-[#e5e5e5]" />
            </div>
          </WFRow>
        </div>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────
// SCREEN REGISTRY
// ─────────────────────────────────────────────────────────

const SCREENS: Record<string, React.FC<{ mobile: boolean }>> = {
  home: ScreenHome,
  search: ScreenSearch,
  property: ScreenProperty,
  "booking-1": ScreenBooking1,
  "booking-2": ScreenBooking2,
  "booking-3": ScreenBooking3,
  contact: ScreenContact,
  about: ScreenAbout,
  legal: ScreenLegal,
  "client-dashboard": ScreenClientDashboard,
  "client-booking": ScreenClientBooking,
  "client-payments": ScreenClientPayments,
  "client-settings": ScreenClientSettings,
  "owner-dashboard": ScreenOwnerDashboard,
  "owner-bookings": ScreenOwnerBookings,
  "owner-payouts": ScreenOwnerPayouts,
  "admin-login": ScreenAdminLogin,
  "admin-listings": ScreenAdminListings,
  "admin-listing-edit": ScreenAdminListingEdit,
  "admin-bookings": ScreenAdminBookings,
  "admin-payments": ScreenAdminPayments,
  "admin-clients": ScreenAdminClients,
  "admin-owners": ScreenAdminOwners,
  "admin-settings": ScreenAdminSettings,
};

// ─────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────

export default function App() {
  const [activeModule, setActiveModule] = useState("public");
  const [activeScreen, setActiveScreen] = useState("home");
  const [mobile, setMobile] = useState(false);
  const [navOpen, setNavOpen] = useState(true);

  const currentModule = modules.find(m => m.id === activeModule)!;
  const currentScreenMeta = currentModule.screens.find(s => s.id === activeScreen)
    || modules.flatMap(m => m.screens).find(s => s.id === activeScreen)!;
  const ScreenComp = SCREENS[activeScreen] || ScreenHome;
  const totalScreens = modules.reduce((a, m) => a + m.screens.length, 0);

  return (
    <div className="flex h-screen overflow-hidden bg-[#111] font-['Outfit']" style={{ fontFamily: "Outfit, system-ui, sans-serif" }}>

      {/* ── LEFT META NAVIGATION ── */}
      {navOpen && (
        <div className="w-56 flex-shrink-0 bg-[#111] border-r border-[#222] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-3 py-3 border-b border-[#222]">
            <div className="text-[8px] font-['JetBrains_Mono'] text-[#444] uppercase tracking-[0.25em] mb-1">WIREFRAMES</div>
            <div className="text-[10px] text-[#666] font-['Outfit']">Location courte durée</div>
            <div className="text-[8px] font-['JetBrains_Mono'] text-[#333] mt-0.5">{totalScreens} écrans · 4 modules</div>
          </div>

          {/* Viewport toggle */}
          <div className="px-3 py-2 border-b border-[#1e1e1e] flex gap-1">
            <button
              onClick={() => setMobile(false)}
              className={`flex-1 h-6 text-[9px] font-['JetBrains_Mono'] uppercase tracking-wider border ${!mobile ? "bg-[#333] text-white border-[#444]" : "bg-transparent text-[#444] border-[#222]"}`}
            >
              Desktop
            </button>
            <button
              onClick={() => setMobile(true)}
              className={`flex-1 h-6 text-[9px] font-['JetBrains_Mono'] uppercase tracking-wider border ${mobile ? "bg-[#333] text-white border-[#444]" : "bg-transparent text-[#444] border-[#222]"}`}
            >
              Mobile
            </button>
          </div>

          {/* Module tabs */}
          <div className="flex border-b border-[#1e1e1e]">
            {modules.map(m => (
              <button
                key={m.id}
                onClick={() => { setActiveModule(m.id); setActiveScreen(m.screens[0].id); }}
                className={`flex-1 py-1.5 text-[7px] font-['JetBrains_Mono'] uppercase tracking-wider border-r border-[#1e1e1e] last:border-r-0 ${activeModule === m.id ? "bg-[#222] text-[#aaa]" : "text-[#444] hover:text-[#666]"}`}
              >
                {m.badge}
              </button>
            ))}
          </div>

          {/* Screen list */}
          <div className="flex-1 overflow-y-auto py-1">
            {modules.map(m => (
              <div key={m.id} className={activeModule === m.id ? "block" : "hidden"}>
                {m.screens.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    className={`w-full text-left px-3 py-2 flex items-start gap-2 ${s.id === activeScreen ? "bg-[#1e1e1e] text-white" : "text-[#555] hover:text-[#777]"}`}
                  >
                    <span className="text-[8px] font-['JetBrains_Mono'] text-[#333] flex-shrink-0 mt-[1px] w-4">{idx + 1}</span>
                    <span className="text-[10px] leading-snug">{s.label}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* All modules quick links */}
          <div className="border-t border-[#1e1e1e] px-3 py-2">
            <div className="text-[7px] font-['JetBrains_Mono'] text-[#333] uppercase tracking-wider mb-1">Navigation rapide</div>
            {modules.filter(m => m.id !== activeModule).map(m => (
              <button
                key={m.id}
                onClick={() => { setActiveModule(m.id); setActiveScreen(m.screens[0].id); }}
                className="w-full text-left py-0.5 text-[9px] text-[#444] hover:text-[#666] font-['Outfit']"
              >
                → {m.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── MAIN WIREFRAME AREA ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top bar */}
        <div className="h-9 flex-shrink-0 bg-[#1a1a1a] border-b border-[#222] flex items-center px-3 gap-3">
          <button
            onClick={() => setNavOpen(v => !v)}
            className="text-[#444] hover:text-[#666] text-xs"
          >
            {navOpen ? "◀" : "▶"}
          </button>
          <div className="w-px h-4 bg-[#2a2a2a]" />
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-['JetBrains_Mono'] text-[#333] uppercase">{currentModule.label}</span>
            <span className="text-[#2a2a2a]">·</span>
            <span className="text-[9px] font-['Outfit'] text-[#555]">{currentScreenMeta?.label}</span>
          </div>
          <div className="flex-1" />
          <span className="text-[8px] font-['JetBrains_Mono'] text-[#2a2a2a]">{mobile ? "375px · MOBILE" : "1280px · DESKTOP"}</span>

          {/* Prev / Next */}
          <div className="flex gap-1">
            {(() => {
              const allScreens = modules.flatMap(m => ({ ...m, screen: m.screens })).flatMap(m => m.screens.map(s => ({ moduleId: m.id, screen: s })));
              const flat = modules.flatMap(m => m.screens.map(s => ({ moduleId: m.id, screen: s })));
              const idx = flat.findIndex(x => x.screen.id === activeScreen);
              const prev = flat[idx - 1];
              const next = flat[idx + 1];
              return <>
                <button
                  onClick={() => { if (prev) { setActiveModule(prev.moduleId); setActiveScreen(prev.screen.id); } }}
                  disabled={!prev}
                  className="text-[9px] text-[#444] hover:text-[#666] disabled:opacity-20 px-1"
                >←</button>
                <span className="text-[8px] text-[#333] font-['JetBrains_Mono']">{idx + 1}/{flat.length}</span>
                <button
                  onClick={() => { if (next) { setActiveModule(next.moduleId); setActiveScreen(next.screen.id); } }}
                  disabled={!next}
                  className="text-[9px] text-[#444] hover:text-[#666] disabled:opacity-20 px-1"
                >→</button>
              </>;
            })()}
          </div>
        </div>

        {/* Wireframe canvas */}
        <div className="flex-1 overflow-auto bg-[#161616]">
          {mobile ? (
            <div className="flex items-start justify-center py-8">
              <div className="flex flex-col" style={{ width: 375 }}>
                {/* Phone frame */}
                <div className="border border-[#333] bg-white overflow-hidden shadow-2xl" style={{ width: 375, minHeight: 667 }}>
                  <ScreenComp mobile={true} />
                </div>
                <div className="mt-2 text-center">
                  <span className="text-[8px] font-['JetBrains_Mono'] text-[#333]">375 × 667 · iOS SE</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4" style={{ minWidth: 1200 }}>
              <div className="bg-white overflow-hidden border border-[#2a2a2a] shadow-2xl" style={{ minHeight: 768 }}>
                <ScreenComp mobile={false} />
              </div>
              <div className="mt-2 pl-1">
                <span className="text-[8px] font-['JetBrains_Mono'] text-[#333]">Desktop · 1280px</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
