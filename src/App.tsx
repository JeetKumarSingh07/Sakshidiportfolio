import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Sakshi Sinha",
  hindiTag: "शब्द-ए-सफ़र",
  tagline: "Journalist · Poet · Storyteller",
  role: "Content Writer & Communication Strategist",
  location: "Bhopal, India",
  email: "sinhasakshi861@gmail.com",
  phone: "+91 6205341597",
  bio: `I am a Gold Medalist in Journalism & Mass Communication, currently pursuing my Master's in Mass Communication. My work lives at the intersection of reporting, poetry, and political storytelling—from the newsroom floor at Dainik Bhaskar to election campaigns across the Seemanchal belt. I write in Hindi and English, review literature (60+ books and counting), host open mics, and believe that every story—whether breaking news or a quiet poem—deserves a careful voice.`,
  intro: `Words have been my compass—through newsrooms, campaign trails, literary festivals and open mics. I report, I write, I anchor, I review, and above all, I listen.`,
};

const SOCIALS = {
  instagram: "https://www.instagram.com/sabd_ae_safar?igsh=MWpzNjRqbmtwaXlncQ==",
  linkedin: "https://www.linkedin.com/in/sakshi-sinha-1ab2b3226?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  youtube: "https://youtube.com/@nayiumang-w8h?si=0HVIsMUDBkbDYKkT",
  facebook: "https://www.facebook.com/share/1ETR7k9rgH/",
  blog: "https://share.google/ShPQRVvb4F27P8KE6",
};

const EXPERIENCE = [
  {
    role: "Content Writer & Assistant, Communication Team",
    org: "Step Ahead India",
    period: "Present",
    current: true,
    desc: "Leading content strategy and communication support across digital platforms—crafting narratives, campaign copy, and organisational storytelling.",
  },
  {
    role: "Content Writer & Anchor",
    org: "Cynctech Digital Marketing",
    period: "",
    desc: "Scripted and anchored digital content; built voice-driven campaigns across social channels.",
  },
  {
    role: "PR Executive—Seemanchal Region",
    org: "Bihar Election Campaign",
    period: "",
    desc: "On-ground political PR and campaign communication during the Bihar elections—media coordination, narrative building, regional outreach.",
  },
  {
    role: "Special Correspondent Trainee",
    org: "Dainik Bhaskar",
    period: "",
    desc: "Reported and filed stories as a newsroom trainee with one of India's largest Hindi dailies.",
  },
  {
    role: "Freelance Content Writer",
    org: "The Kabadiwala · Desi Connect",
    period: "",
    desc: "Long-form writing, brand content and cultural features across independent platforms.",
  },
];

const EDUCATION = [
  {
    degree: "Master's in Mass Communication",
    school: "Currently pursuing",
    badge: "Ongoing",
  },
  {
    degree: "BJMC—Bachelor of Journalism & Mass Communication",
    school: "Gold Medalist",
    badge: "🏅 Gold Medal",
  },
  {
    degree: "NHPC Apprenticeship",
    school: "Qualified",
    badge: "Qualified",
  },
  {
    degree: "ConveGenius Fellowship",
    school: "Qualified",
    badge: "Fellow",
  },
];

const ACHIEVEMENTS = [
  { icon: "🏅", title: "Gold Medalist at LNCT University", note: "Honoured at the 5th Convocation Ceremony for securing top marks in Journalism & Mass Communication." },
  { icon: "🎤", title: "University-Level Debater", note: "Competitive debating across inter-university forums." },
  { icon: "✍️", title: "Nibandh Lekhan Winner", note: "First-prize essays in Hindi literary competitions." },
  { icon: "📜", title: "Poetry Competition Winner", note: "Recognised for original Hindi poetry." },
  { icon: "🎙️", title: "Yuwa Kavi Manch", note: "Poetry recorded and broadcast on the Young Poets' Forum." },
  { icon: "📚", title: "Nalanda Literature Festival", note: "Associated with literary and media discussions." },
  { icon: "🎧", title: "Hosted 'Pratidwani'", note: "Curated and hosted the Pratidwani open-mic event." },
  { icon: "📖", title: "60+ Book Reviews", note: "Active reviewer of Hindi literature and contemporary writing." },
  { icon: "🖋️", title: "5+ Published Poems", note: "Across digital and print literary platforms." },
];

const ACHIEVEMENT_FEATURES = [
  {
    title: "Gold Medal",
    kicker: "Academic Excellence",
    src: "/images/achievement-gold-medal-portrait.jpg",
    alt: "Sakshi Sinha holding her Gold Medal certificate at LNCT University",
    description:
      "Secured the highest marks in Journalism and Mass Communication and received the Gold Medal at LNCT University's convocation ceremony.",
    meta: "LNCT University · 5th Convocation",
  },
  {
    title: "Governor's Honor",
    kicker: "Official Felicitation",
    src: "/images/achievement-gold-medal-ceremony.jpg",
    alt: "Sakshi Sinha receiving the Gold Medal from Governor Mangubhai Patel at convocation",
    description:
      "Honoured by Governor Mangubhai Patel during the convocation ceremony in Bhopal for academic distinction.",
    meta: "Governor's felicitation · Bhopal",
  },
  {
    title: "Press Coverage",
    kicker: "Media Recognition",
    src: "/images/achievement-news-topper.jpg",
    alt: "Newspaper clipping naming Sakshi Sinha as university topper in journalism",
    secondarySrc: "/images/achievement-news-rajgir.jpg",
    secondaryAlt: "Hindi newspaper clipping about Sakshi Sinha receiving Gold Medal",
    description:
      "Regional Hindi newspapers covered the achievement with stories on the Gold Medal and university topper recognition.",
    meta: "Rajgir & regional press",
  },
];

const RESEARCH = [
  {
    title: "International Research Paper",
    venue: "Nalanda University",
    note: "Presented at an international academic forum on media and communication.",
  },
  {
    title: "International Research Paper",
    venue: "Banaras Hindu University (BHU)",
    note: "Peer-reviewed presentation in the field of mass communication.",
  },
];

const SKILLS = [
  "Content Writing",
  "Political PR & Communication",
  "Anchoring & Public Speaking",
  "Script Writing",
  "Creative Storytelling",
  "Literary Reviewing",
  "Hindi Blogging",
  "Social Media Strategy",
  "Campaign Communication",
  "Digital Storytelling",
];

const PROJECTS = [
  { title: "Bihar Election PR Campaigns", tag: "Political PR", desc: "Regional campaign communication and media outreach across Seemanchal." },
  { title: "Podcast & Campaign Scripts", tag: "Scriptwriting", desc: "Long-form scripting for audio storytelling and brand campaigns." },
  { title: "Social Media Campaigns", tag: "Digital Strategy", desc: "Planned and executed multi-platform social campaigns." },
  { title: "Event Anchoring", tag: "Hosting", desc: "Anchored literary events, open mics and cultural programmes." },
  { title: "Literary Reviewing", tag: "Hindi Literature", desc: "60+ book reviews across contemporary Hindi writing." },
  { title: "Digital Platform Communication", tag: "Content", desc: "Communication support for independent digital platforms." },
];

/* ------------------------------------------------------------------ */
/* Small primitives                                                    */
/* ------------------------------------------------------------------ */

function SectionTitle({ kicker, title, center = false }: { kicker: string; title: string; center?: boolean }) {
  return (
    <div className={`mb-8 sm:mb-10 lg:mb-12 ${center ? "text-center" : ""}`}>
      <div className={`ornament ${center ? "justify-center" : ""} mb-3`}>
        <span className="font-hindi text-xs sm:text-sm tracking-[0.3em] text-[color:var(--color-burgundy)]">
          {kicker}
        </span>
      </div>
      <h2 className="font-display text-fluid-section font-semibold tracking-tight text-[color:var(--color-ink)]">
        {title}
      </h2>
    </div>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = "h-4 w-4";
  switch (name) {
    case "instagram":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      );
    case "facebook":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "blog":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "mail":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "phone":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "location":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    default:
      return null;
  }
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#writing", label: "Writing" },
    { href: "#resume", label: "Resume & Cover Letter" },
    { href: "#digital", label: "Digital" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--color-line)] bg-[color:var(--color-paper)]/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="group flex items-center gap-2 sm:gap-3">
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden border border-[color:var(--color-burgundy)] transition-transform group-hover:rotate-[-6deg]">
            <img
              src="/images/IMG-20260515-WA0062.jpg.jpeg"
              alt="Sakshi Sinha"
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (img.dataset.fallback === "true") return;
                img.dataset.fallback = "true";
                img.src = "/images/hero-editorial.jpg";
              }}
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm sm:text-base font-semibold tracking-tight">Sakshi Sinha</span>
            <span className="font-hindi text-[10px] sm:text-[11px] text-[color:var(--color-muted)]">शब्द-ए-सफ़र</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-burgundy)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[color:var(--color-burgundy)] px-4 py-2 text-sm font-medium text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-burgundy-dark)]"
          >
            Get in touch
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line)] lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {open ? <path d="M18 6L6 18M6 6l12 18" strokeLinecap="round" /> : <><path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[color:var(--color-line)] bg-[color:var(--color-paper)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 sm:py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-paper-dark)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-8 pb-14 sm:gap-12 sm:px-6 sm:pt-12 sm:pb-20 md:grid-cols-[1.15fr_1fr] md:pt-16 lg:gap-16 lg:pt-20 xl:pt-24">
        <div className="animate-fade-up">
          <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-3 py-1.5 text-[11px] sm:text-xs tracking-wide text-[color:var(--color-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-burgundy)]" />
            <span className="hidden sm:inline">Available for collaborations · Reporting · PR · Writing</span>
            <span className="sm:hidden">Open for collaborations</span>
          </div>

          <h1 className="font-display text-fluid-hero font-semibold tracking-tight text-[color:var(--color-ink)]">
            Sakshi{" "}
            <span className="italic text-[color:var(--color-burgundy)]">Sinha</span>
            <span className="block mt-2 text-fluid-hero-sub font-normal text-[color:var(--color-ink-soft)]">
              {PROFILE.tagline}
            </span>
          </h1>

          <div className="mt-3 sm:mt-4 font-hindi text-lg sm:text-xl md:text-2xl text-[color:var(--color-muted)]">
            {PROFILE.hindiTag}
          </div>

          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
            {PROFILE.intro}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-medium text-[color:var(--color-paper)] transition-colors hover:bg-[color:var(--color-burgundy)]"
            >
              Write to me
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-ink)]/20 px-4 py-2.5 sm:px-5 sm:py-3 text-sm font-medium text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-paper-dark)]"
            >
              See my work
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-8 sm:mt-12 grid max-w-xl grid-cols-2 gap-4 sm:gap-6 border-t border-[color:var(--color-line)] pt-6 sm:pt-8 xs:grid-cols-4">
            <Stat k="60+" v="Books reviewed" />
            <Stat k="5+" v="Published poems" />
            <Stat k="4.8K" v="YouTube subs" />
            <Stat k="2" v="Intl. papers" />
          </div>
        </div>

        <div className="relative animate-fade-up delay-120">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            {/* Decorative frame */}
            <div className="absolute -inset-2 sm:-inset-4 border border-[color:var(--color-burgundy)]/40" />
            <div className="absolute -inset-4 sm:-inset-8 hidden border border-[color:var(--color-gold)]/30 md:block" />
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 h-4 w-4 sm:h-6 sm:w-6 bg-[color:var(--color-burgundy)]" />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 h-4 w-4 sm:h-6 sm:w-6 bg-[color:var(--color-gold)]" />

            <div className="relative h-full w-full overflow-hidden bg-[color:var(--color-paper-dark)]">
              <img
                src="/images/sakshi-profile.jpg"
                alt="Portrait of Sakshi Sinha"
                className="h-full w-full object-cover object-center"
                loading="eager"
                onError={(event) => {
                  const image = event.currentTarget;
                  if (image.dataset.fallback === "true") return;
                  image.dataset.fallback = "true";
                  image.src = "/images/hero-editorial.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent" />
            </div>

            {/* Floating quote card—hide on very small screens */}
            <div className="hidden sm:block absolute -left-4 -bottom-6 max-w-[240px] rotate-[-3deg] border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-3 sm:p-4 shadow-xl lg:-left-10">
              <div className="font-display text-xl sm:text-2xl leading-none text-[color:var(--color-burgundy)]">"</div>
              <p className="font-display text-xs sm:text-sm italic leading-snug text-[color:var(--color-ink)]">
                Every story—breaking news or a quiet poem—deserves a careful voice.
              </p>
              <div className="mt-2 font-hindi text-[10px] sm:text-xs text-[color:var(--color-muted)]">— शब्द-ए-सफ़र</div>
            </div>

            {/* Badge */}
            <div className="absolute -right-1 sm:-right-2 top-4 sm:top-6 rotate-[6deg] rounded-full bg-[color:var(--color-gold)] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[color:var(--color-paper)] shadow-lg">
              🏅 Gold Medalist
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-fluid-stat font-semibold text-[color:var(--color-burgundy)]">{k}</div>
      <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-[color:var(--color-muted)]">{v}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionTitle kicker="परिचय · About" title="Words as a way of being." />
      <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-display text-fluid-quote italic leading-snug text-[color:var(--color-ink-soft)]">
            "I write in Hindi and English, review literature, host open mics, and believe every
            story deserves a <span className="accent-underline">careful voice</span>."
          </p>
          <div className="mt-6 sm:mt-8 border-l-2 border-[color:var(--color-burgundy)] pl-4 sm:pl-5">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[color:var(--color-muted)]">Based in</div>
            <div className="mt-1 font-display text-base sm:text-lg">Bhopal, India</div>
            <div className="mt-3 sm:mt-4 text-[11px] sm:text-xs uppercase tracking-wider text-[color:var(--color-muted)]">Languages</div>
            <div className="mt-1 font-display text-base sm:text-lg">Hindi · English</div>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] lg:text-base leading-relaxed text-[color:var(--color-ink-soft)]">
          <p>{PROFILE.bio}</p>
          <p>
            My training has been deliberately wide: a newsroom at <span className="font-semibold text-[color:var(--color-ink)]">Dainik Bhaskar</span>,
            an election trail in <span className="font-semibold text-[color:var(--color-ink)]">Seemanchal</span>, literary conversations
            at the <span className="font-semibold text-[color:var(--color-ink)]">Nalanda Literature Festival</span>, and an open mic of my
            own— <span className="italic">Pratidwani</span>. What ties it together is a love for language, and the conviction
            that good communication is, above all, good listening.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
            {SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-2.5 py-1 sm:px-3 text-[11px] sm:text-xs text-[color:var(--color-ink-soft)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

function Experience() {
  return (
    <section id="experience" className="border-y border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/50 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="अनुभव · Experience" title="A newsroom, a campaign trail, a few poems." />
        <div className="relative">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-[color:var(--color-line)] sm:left-4" />
          <ol className="space-y-5 sm:space-y-8">
            {EXPERIENCE.map((e, i) => (
              <li key={i} className="relative pl-9 sm:pl-12 md:pl-14">
                <div className={`absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full sm:h-7 sm:w-7 md:h-8 md:w-8 ${e.current ? "bg-[color:var(--color-burgundy)] ring-4 ring-[color:var(--color-burgundy)]/20" : "border border-[color:var(--color-ink)]/30 bg-[color:var(--color-paper)]"}`}>
                  {e.current ? (
                    <span className="h-2 w-2 rounded-full bg-[color:var(--color-paper)]" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)]/50" />
                  )}
                </div>
                <div className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4 sm:p-5 lg:p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-[color:var(--color-ink)]">
                      {e.role}
                    </h3>
                    {e.current && (
                      <span className="rounded-full bg-[color:var(--color-burgundy)] px-2 py-0.5 sm:px-2.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-paper)]">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm font-medium text-[color:var(--color-burgundy)]">
                    {e.org} {e.period && <span className="text-[color:var(--color-muted)]">· {e.period}</span>}
                  </div>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-[15px] leading-relaxed text-[color:var(--color-ink-soft)]">
                    {e.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionTitle kicker="शिक्षा · Education" title="Where the foundations were laid." />
      <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {EDUCATION.map((e) => (
          <div
            key={e.degree}
            className="group relative overflow-hidden rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4 sm:p-5 lg:p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--color-burgundy)]/40 hover:shadow-lg"
          >
            <div className="absolute right-2 sm:right-3 top-2 sm:top-3 text-[9px] sm:text-[10px] uppercase tracking-wider text-[color:var(--color-muted)]">
              {e.badge}
            </div>
            <div className="mt-4 sm:mt-6 font-display text-3xl sm:text-4xl text-[color:var(--color-burgundy)]">🎓</div>
            <h3 className="mt-2 sm:mt-3 font-display text-base sm:text-lg font-semibold leading-tight text-[color:var(--color-ink)]">
              {e.degree}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[color:var(--color-muted)]">{e.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Writing & Achievements                                              */
/* ------------------------------------------------------------------ */

function AchievementFeatureCard({
  feature,
}: {
  feature: {
    title: string;
    kicker: string;
    src: string;
    alt: string;
    secondarySrc?: string;
    secondaryAlt?: string;
    description: string;
    meta: string;
  };
}) {
  const [missing, setMissing] = useState(false);
  const [secondaryMissing, setSecondaryMissing] = useState(false);

  return (
    <article className="snap-start shrink-0 w-[84vw] max-w-[25rem] overflow-hidden rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-paper)] shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:w-[22rem] md:w-auto md:max-w-none">
      <div className="relative aspect-[16/11] overflow-hidden bg-[color:var(--color-paper-dark)]">
        {!missing ? (
          <img
            src={feature.src}
            alt={feature.alt}
            className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
            loading="lazy"
            onError={() => setMissing(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-5 text-center">
            <div className="font-display text-3xl text-[color:var(--color-burgundy)]">+</div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[color:var(--color-muted)]">
              Add image
            </div>
            <div className="break-all font-mono text-[10px] text-[color:var(--color-muted)]">
              {feature.src.replace("/images/", "public/images/")}
            </div>
          </div>
        )}
        {feature.secondarySrc && !secondaryMissing && (
          <img
            src={feature.secondarySrc}
            alt={feature.secondaryAlt ?? "Additional achievement press clipping"}
            className="absolute bottom-3 right-3 h-20 w-16 rounded-md border-2 border-[color:var(--color-paper)] object-cover shadow-lg sm:h-24 sm:w-20"
            loading="lazy"
            onError={() => setSecondaryMissing(true)}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[color:var(--color-ink)]/70 to-transparent" />
      </div>
      <div className="p-4 sm:p-5">
        <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[color:var(--color-burgundy)]">
          {feature.kicker}
        </div>
        <h4 className="mt-2 font-display text-xl sm:text-2xl font-semibold leading-tight text-[color:var(--color-ink)]">
          {feature.title}
        </h4>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
          {feature.description}
        </p>
        <div className="mt-4 border-t border-[color:var(--color-line)] pt-3 text-[11px] sm:text-xs font-medium text-[color:var(--color-muted)]">
          {feature.meta}
        </div>
      </div>
    </article>
  );
}



function AchievementHighlights() {
  return (
    <div className="mb-10 sm:mb-14 overflow-hidden rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-paper)] shadow-sm">
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-burgundy)]/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[color:var(--color-burgundy)]">
              Gold Medal Achievement
            </div>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-[color:var(--color-ink)]">
              Gold Medal, Governor's Honor & Press Coverage
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[color:var(--color-ink-soft)]">
              A three-part recognition story: academic excellence at LNCT University, official felicitation by the Governor, and regional press coverage celebrating Sakshi's achievement.
            </p>
          </div>
          <p className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/50 p-4 font-hindi text-sm sm:text-base leading-relaxed text-[color:var(--color-ink-soft)] lg:max-w-sm">
            “राजगीर की बेटी को मिला स्वर्ण पदक”—क्षेत्रीय समाचार पत्रों ने इस उपलब्धि को प्रमुखता से प्रकाशित किया।
          </p>
        </div>

        <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {ACHIEVEMENT_FEATURES.map((feature) => (
            <AchievementFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>

        
      </div>
    </div>
  );
}

function Writing() {
  return (
    <section id="writing" className="border-y border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/50 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="लेखन · Writing & Literature" title="Poems, papers, and a long shelf of reviews." />

        <AchievementHighlights />

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {/* Research */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-display text-xl sm:text-2xl text-[color:var(--color-ink)]">
              International Research
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {RESEARCH.map((r) => (
                <li key={r.venue} className="flex gap-3 sm:gap-4 rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4 sm:p-5">
                  <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-burgundy)]/10 font-display text-[color:var(--color-burgundy)] text-sm sm:text-base">
                    📄
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base text-[color:var(--color-ink)]">{r.title}</div>
                    <div className="text-xs sm:text-sm text-[color:var(--color-burgundy)]">{r.venue}</div>
                    <p className="mt-1 text-xs sm:text-sm text-[color:var(--color-ink-soft)]">{r.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="mb-3 sm:mb-4 font-display text-xl sm:text-2xl text-[color:var(--color-ink)]">
              Achievements & Literary Life
            </h3>
            <ul className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
              {ACHIEVEMENTS.map((a) => (
                <li key={a.title} className="rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-3 sm:p-4 transition-colors hover:border-[color:var(--color-burgundy)]/40">
                  <div className="text-xl sm:text-2xl">{a.icon}</div>
                  <div className="mt-2 font-semibold text-sm sm:text-base text-[color:var(--color-ink)]">{a.title}</div>
                  <div className="mt-1 text-[11px] sm:text-xs leading-relaxed text-[color:var(--color-muted)]">{a.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pull-quote */}
        <div className="mx-auto mt-10 sm:mt-16 max-w-3xl border-y border-[color:var(--color-line)] py-8 sm:py-10 px-4 text-center">
          <div className="font-display text-4xl sm:text-5xl leading-none text-[color:var(--color-burgundy)]">"</div>
          <blockquote className="font-display text-fluid-pull italic leading-snug text-[color:var(--color-ink)]">
            खुद में समेटे हज़ारों कहानियां मैं एक उपन्यास हूं।
          </blockquote>
          <p className="mt-4 text-xs sm:text-sm text-[color:var(--color-muted)]">
            I am a novel, holding thousands of stories within myself.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionTitle kicker="परियोजनाएँ · Selected Work" title="Campaigns, scripts, and stories." />
      <div className="grid gap-3 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4 sm:p-5 lg:p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute right-0 top-0 font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[color:var(--color-line)] transition-colors group-hover:text-[color:var(--color-burgundy)]/20">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="relative">
              <span className="inline-block rounded-full bg-[color:var(--color-burgundy)]/10 px-2 py-0.5 sm:px-2.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[color:var(--color-burgundy)]">
                {p.tag}
              </span>
              <h3 className="mt-2 sm:mt-3 font-display text-lg sm:text-xl font-semibold leading-tight text-[color:var(--color-ink)]">
                {p.title}
              </h3>
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Resume & Cover Letter                                               */
/* ------------------------------------------------------------------ */

function ResumeCoverLetter() {
  const [tab, setTab] = useState<"resume" | "cover">("resume");
  const [downloading, setDownloading] = useState<string | null>(null);

  const resumeText = `SAKSHI SINHA
Journalist · Poet · Content Strategist
sinhasakshi861@gmail.com | +91 6205341597 | Bhopal, India
LinkedIn: https://www.linkedin.com/in/sakshi-sinha-1ab2b3226
Blog: https://share.google/ShPQRVvb4F27P8KE6

====================================================================
SUMMARY
====================================================================
Gold Medalist in Journalism & Mass Communication (BJMC) with extensive experience in news reporting, political public relations, digital storytelling, and literary reviewing. Currently pursuing a Master's in Mass Communication. Adept at crafting compelling narratives in both Hindi and English for print, digital media, and election campaigns.

====================================================================
EDUCATION
====================================================================
• Master's in Mass Communication—Currently Pursuing
• BJMC (Bachelor of Journalism and Mass Communication)—Gold Medalist (🏅)
• NHPC Apprenticeship Program—Qualified
• ConveGenius Fellowship—Qualified

====================================================================
PROFESSIONAL EXPERIENCE
====================================================================
• STEP AHEAD INDIA—Content Writer & Assistant in Communication Team (Present)
  Leading content strategy, crafting campaign copy, and managing digital narratives across platforms.

• DAINIK BHASKAR—Special Correspondent Trainee
  Reported, investigated, and filed news stories for one of India's largest Hindi dailies.

• BIHAR ELECTION CAMPAIGN—PR Executive (Seemanchal Region)
  Executed on-ground political PR campaigns, media coordination, and narrative strategy.

• CYNCTECH DIGITAL MARKETING—Content Writer cum Anchor
  Scripted and anchored digital content; built voice-driven campaigns across social channels.

• INDEPENDENT FREELANCE—The Kabadiwala & Desi Connect
  Wrote long-form brand content, cultural features, and digital storytelling pieces.

====================================================================
ACADEMIC & RESEARCH WORK
====================================================================
• Presented International Research Paper at Nalanda University
• Presented International Research Paper at Banaras Hindu University (BHU)
• Active participant in media, literature, and communication-based academic discussions.

====================================================================
ACHIEVEMENTS & LITERARY INVOLVEMENT
====================================================================
• University-level Debater & Winner in Nibandh Lekhan (Essay Writing) competitions
• Winner in Poetry competitions; poetry recorded and broadcast on "Yuwa Kavi Manch"
• More than 5 poems published across digital and print literary platforms
• Hosted open mic event "Pratidwani" & participated in Nalanda Literature Festival
• Active book reviewer with over 60 reviews in Hindi literature and contemporary writing

====================================================================
KEY SKILLS
====================================================================
Content Writing | Political PR & Communication | Anchoring & Public Speaking | Script Writing | Creative Storytelling | Literary Reviewing | Hindi Blogging | Social Media Strategy | Campaign Communication`;

  const coverLetterText = `SAKSHI SINHA
Bhopal, Madhya Pradesh, India
Phone: +91 6205341597 | Email: sinhasakshi861@gmail.com
LinkedIn: https://www.linkedin.com/in/sakshi-sinha-1ab2b3226
Blog: https://share.google/ShPQRVvb4F27P8KE6

To Hiring Manager / Editorial Board,

Subject: Application for Journalism, Media Communication & PR Roles

I am writing to express my strong interest in editorial, public relations, and content strategy roles within your esteemed organisation. As a Gold Medalist in Journalism and Mass Communication (BJMC) currently pursuing my Master’s degree, I bring a robust blend of rigorous academic foundation, on-ground reporting experience, and a deep-seated passion for bilingual storytelling in Hindi and English.

My professional journey has been deliberately versatile. During my tenure as a Special Correspondent Trainee at Dainik Bhaskar, I learned the critical importance of factual precision, quick turnaround, and ethical reporting. Transitioning to the dynamic environment of political communication, I served as a PR Executive during the Bihar Election campaigns in the Seemanchal region. This role honed my ability to strategise media outreach, understand regional pulse, and manage high-stakes public relations campaigns.

Currently working with Step Ahead India as a Content Writer and Assistant in the Communication Team, I continue to refine my skills in digital narrative building and multi-platform campaign management. Furthermore, my active literary life—having reviewed over 60 books in Hindi literature, presented international research papers at Nalanda University and BHU, and hosted cultural open mics—equips me with a unique editorial voice and a profound appreciation for nuanced storytelling.

Whether anchoring a digital broadcast, drafting persuasive PR campaigns, or writing well-researched long-form articles, I approach every project with dedication, empathy, and professional rigour. I am eager to bring my diverse skill set, work ethic, and passion for mass communication to your team.

Thank you for your time and consideration. I look forward to the possibility of discussing how my experience aligns with your organisational goals.

Warm regards,

Sakshi Sinha
Journalist · Poet · Storyteller`;

  const downloadFile = (type: "resume" | "cover") => {
    setDownloading(type);
    const content = type === "resume" ? resumeText : coverLetterText;
    const filename = type === "resume" ? "Sakshi_Sinha_Resume.txt" : "Sakshi_Sinha_Cover_Letter.txt";
    
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloading(null), 1500);
  };

  return (
    <section id="resume" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionTitle kicker="दस्तावेज़ · Credentials" title="Resume & Cover Letter" />
      
      <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[color:var(--color-line)] pb-4 sm:pb-6">
        {/* Tab switchers */}
        <div className="flex bg-[color:var(--color-paper-dark)] p-1 rounded-lg border border-[color:var(--color-line)] self-start sm:self-auto">
          <button
            onClick={() => setTab("resume")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
              tab === "resume"
                ? "bg-[color:var(--color-paper)] text-[color:var(--color-burgundy)] shadow-sm font-semibold"
                : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Curriculum Vitae
          </button>
          <button
            onClick={() => setTab("cover")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
              tab === "cover"
                ? "bg-[color:var(--color-paper)] text-[color:var(--color-burgundy)] shadow-sm font-semibold"
                : "text-[color:var(--color-ink-soft)] hover:text-[color:var(--color-ink)]"
            }`}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Cover Letter
          </button>
        </div>

        {/* Download buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => downloadFile("resume")}
            disabled={downloading === "resume"}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-burgundy)] bg-[color:var(--color-paper)] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[color:var(--color-burgundy)] transition-all hover:bg-[color:var(--color-burgundy)] hover:text-[color:var(--color-paper)] active:scale-95"
          >
            {downloading === "resume" ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Downloading…
              </>
            ) : (
              <>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Resume
              </>
            )}
          </button>
          <button
            onClick={() => downloadFile("cover")}
            disabled={downloading === "cover"}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-burgundy)] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-[color:var(--color-paper)] transition-all hover:bg-[color:var(--color-burgundy-dark)] active:scale-95"
          >
            {downloading === "cover" ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Downloading…
              </>
            ) : (
              <>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download Cover Letter
              </>
            )}
          </button>
        </div>
      </div>

      {/* Document view removed—keep download buttons above */}
      <div className="text-sm text-[color:var(--color-ink-soft)]">Use the buttons above to download the Resume or Cover Letter.</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Digital                                                             */
/* ------------------------------------------------------------------ */

function Digital() {
  const socials: { key: keyof typeof SOCIALS; label: string; handle: string; color: string }[] = [
    { key: "instagram", label: "Instagram", handle: "@sabd_ae_safar", color: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]" },
    { key: "youtube", label: "YouTube", handle: "Nayi Umang · 4.8K+", color: "from-[#FF0000] to-[#C40000]" },
    { key: "linkedin", label: "LinkedIn", handle: "Sakshi Sinha", color: "from-[#0A66C2] to-[#084B8F]" },
    { key: "facebook", label: "Facebook", handle: "Sakshi Sinha", color: "from-[#1877F2] to-[#0E5DBF]" },
    { key: "blog", label: "Blog", handle: "Read my writing", color: "from-[color:var(--color-burgundy)] to-[color:var(--color-burgundy-dark)]" },
  ];

  return (
    <section id="digital" className="border-y border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/50 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle kicker="डिजिटल · Digital Presence" title="Find me across the internet." />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.3fr_1fr]">
          {/* YouTube feature card */}
          <a
            href={SOCIALS.youtube}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-ink)] p-5 sm:p-6 lg:p-8 text-[color:var(--color-paper)] transition-transform hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-[color:var(--color-burgundy)]/40 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-[color:var(--color-gold-soft)]">
                <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-red-500" />
                Featured · YouTube
              </div>
              <h3 className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Nayi Umang
              </h3>
              <p className="mt-2 sm:mt-3 max-w-md text-xs sm:text-sm text-[color:var(--color-paper)]/75">
                A YouTube channel with <span className="font-semibold">4.8K+ subscribers</span>—conversations, storytelling, and the written word brought to voice.
              </p>
              <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[color:var(--color-gold-soft)] group-hover:gap-3 transition-all">
                Watch on YouTube
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </a>

          {/* Social grid */}
          <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
            {socials.map((s) => (
              <a
                key={s.key}
                href={SOCIALS[s.key]}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-3 sm:p-4 lg:p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-10 ${s.color}`} />
                <div className="relative flex items-start gap-2 sm:gap-3">
                  <div className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-gradient-to-br text-[color:var(--color-paper)] ${s.color}`}>
                    <SocialIcon name={s.key} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[color:var(--color-muted)]">{s.label}</div>
                    <div className="mt-0.5 text-sm sm:text-base font-semibold text-[color:var(--color-ink)] truncate">{s.handle}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:py-12">
      <SectionTitle kicker="संपर्क · Contact" title="Let's tell a story together." center />
      <p className="mx-auto mb-8 sm:mb-12 max-w-2xl text-center text-sm sm:text-base text-[color:var(--color-ink-soft)] px-4">
        For collaborations, reporting work, PR & campaign consulting, literary reviews,
        or simply a good conversation about books—the inbox is open.
      </p>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-[0.9fr_1.1fr]">
        {/* Direct info */}
        <div className="space-y-4">
          <ContactRow icon="mail" label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
          <ContactRow icon="phone" label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} />
          <ContactRow icon="location" label="Location" value={PROFILE.location} />

          <div className="mt-6 border-t border-[color:var(--color-line)] pt-6">
            <div className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">Follow the journey</div>
            <div className="mt-3 flex gap-2">
              {(Object.keys(SOCIALS) as (keyof typeof SOCIALS)[]).map((k) => (
                <a
                  key={k}
                  href={SOCIALS[k]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={k}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-soft)] transition-colors hover:border-[color:var(--color-burgundy)] hover:bg-[color:var(--color-burgundy)] hover:text-[color:var(--color-paper)]"
                >
                  <SocialIcon name={k} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/50 p-4">
            <div className="font-hindi text-lg text-[color:var(--color-ink)]">धन्यवाद।</div>
            <div className="mt-1 text-sm text-[color:var(--color-muted)]">
              Thank you for taking the time to read.
            </div>
            <div className="mt-3 text-sm text-[color:var(--color-ink-soft)]">— Sakshi</div>
          </div>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/sinhasakshi861@gmail.com"
          method="POST"
          onSubmit={() => setForm({ name: "", email: "", subject: "", message: "" })}
          className="relative rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4 sm:p-5 lg:p-6 shadow-sm"
        >
          <input type="hidden" name="_subject" value="Portfolio Contact" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="/" />
          <div className="mb-4 sm:mb-6 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-burgundy)]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[color:var(--color-muted)]">Send a message</span>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            <Field
              label="Your name"
              name="name"
              required
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              label="Email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
          </div>
          <div className="mt-3 sm:mt-4">
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={(v) => setForm({ ...form, subject: v })}
              placeholder="Collaboration · Writing · PR · Just saying hello"
            />
          </div>
          <div className="mt-3 sm:mt-4">
            <label className="mb-1.5 block text-[11px] sm:text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your story, your campaign, or the book you can't stop thinking about…"
              className="w-full resize-none rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/40 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-[15px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)]/70 focus:border-[color:var(--color-burgundy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-burgundy)]/15"
            />
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 sm:gap-4">
            <p className="text-[11px] sm:text-xs text-[color:var(--color-muted)]">
              Your message goes directly to Sakshi's inbox.
            </p>
            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[color:var(--color-burgundy)] px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-[color:var(--color-paper)] transition-all hover:bg-[color:var(--color-burgundy-dark)] disabled:opacity-60"
            >
              Send message
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-center gap-4 rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-paper)] p-4 transition-colors hover:border-[color:var(--color-burgundy)]/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-burgundy)]/10 text-[color:var(--color-burgundy)]">
        <SocialIcon name={icon} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">{label}</div>
        <div className="font-medium text-[color:var(--color-ink)]">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block">{Inner}</a>
  ) : (
    Inner
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
        {label}{required && <span className="text-[color:var(--color-burgundy)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-[color:var(--color-line)] bg-[color:var(--color-paper-dark)]/40 px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)]/70 focus:border-[color:var(--color-burgundy)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-burgundy)]/15"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 px-4 sm:px-6 py-10 sm:py-12 grid-cols-1 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[color:var(--color-burgundy)] font-display text-base sm:text-lg font-semibold">
              S
            </span>
            <div>
              <div className="font-display text-base sm:text-lg font-semibold">Sakshi Sinha</div>
              <div className="font-hindi text-[11px] sm:text-xs text-[color:var(--color-paper)]/60">शब्द-ए-सफ़र</div>
            </div>
          </div>
          <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-[color:var(--color-paper)]/70">
            Journalist, poet, and communication strategist. Writing at the crossroads
            of newsrooms, campaign trails, and literary conversations.
          </p>
        </div>
        <div>
          <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[color:var(--color-paper)]/50">Explore</div>
          <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li><a href="#about" className="hover:text-[color:var(--color-gold-soft)]">About</a></li>
            <li><a href="#experience" className="hover:text-[color:var(--color-gold-soft)]">Experience</a></li>
            <li><a href="#writing" className="hover:text-[color:var(--color-gold-soft)]">Writing</a></li>
            <li><a href="#digital" className="hover:text-[color:var(--color-gold-soft)]">Digital</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] sm:text-xs uppercase tracking-wider text-[color:var(--color-paper)]/50">Contact</div>
          <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
            <li><a href={`mailto:${PROFILE.email}`} className="hover:text-[color:var(--color-gold-soft)] break-all">{PROFILE.email}</a></li>
            <li><a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="hover:text-[color:var(--color-gold-soft)]">{PROFILE.phone}</a></li>
            <li className="text-[color:var(--color-paper)]/70">{PROFILE.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-paper)]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:px-6 py-4 sm:py-5 text-[11px] sm:text-xs text-[color:var(--color-paper)]/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Jeet Kumar Singh. Crafted with care.</div>
          <div className="font-hindi text-center sm:text-right">जो लिखा जाए वही रहे · what is written, remains.</div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Writing />
        <Projects />
        <ResumeCoverLetter />
        <Digital />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
