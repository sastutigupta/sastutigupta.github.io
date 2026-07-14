import { useEffect, useMemo, useRef, useState } from 'react';

const Arrow = ({ diagonal = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? 'M7 17 17 7M8 7h9v9' : 'M5 12h14m-6-6 6 6-6 6'} />
  </svg>
);

const Pin = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.3" />
  </svg>
);

const Download = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 20h14" />
  </svg>
);

const Mail = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6" />
  </svg>
);

const LinkedIn = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9v10M6 5.5v.01M10 19V9h4v1.7c.8-1.3 2-2 3.7-2 2.7 0 4.3 1.8 4.3 5V19h-4v-4.5c0-1.6-.5-2.5-1.9-2.5-1.5 0-2.1 1-2.1 2.8V19h-4Z" />
  </svg>
);

const experience = [
  {
    id: '01',
    company: 'Bajaj Finserv',
    role: 'BFSI Apprentice',
    period: 'Oct 2024 — Jan 2025',
    location: 'Kanpur, Uttar Pradesh',
    accent: 'blue',
    headline: 'Learned the systems behind financial service and customer trust.',
    description:
      'Completed a structured apprenticeship in Banking, Finance and Insurance with practical exposure to banking operations, financial products, insurance services and customer relationship management.',
    proof: ['Banking operations', 'Financial products', 'Business communication', 'Customer relationships'],
  },
  {
    id: '02',
    company: 'YoursthatSenior',
    role: 'Human Resources Intern',
    period: 'Nov 2023 — Feb 2024',
    location: 'Kanpur, Uttar Pradesh',
    accent: 'coral',
    headline: 'Supported the hiring journey from first search to interview coordination.',
    description:
      'Worked alongside the HR team on talent acquisition and candidate management, including sourcing, resume screening, interview scheduling, candidate communication and recruitment follow-up.',
    proof: ['Candidate sourcing', 'Resume screening', 'Interview scheduling', 'Team coordination'],
  },
  {
    id: '03',
    company: 'Independent',
    role: 'Academic Tutor',
    period: '1 Year',
    location: 'Kanpur, Uttar Pradesh',
    accent: 'acid',
    headline: 'Turned difficult lessons into simple, confidence-building explanations.',
    description:
      'Taught students of Classes 6 and 7 for one year. Planned lessons, clarified concepts, supported homework and exam preparation, and adapted teaching to each student’s learning pace.',
    proof: ['Classes 6–7', 'Lesson planning', 'Student mentoring', 'Clear communication'],
  },
];

const education = [
  {
    year: '2026',
    title: 'MBA',
    detail: 'Human Resource Management & Operations Management',
    place: 'Dayanand Academy of Management Studies · AKTU',
    period: 'Jun 2024 — Jun 2026',
    score: '8.5',
  },
  {
    year: '2024',
    title: 'B.Com',
    detail: 'Commerce, Accounting, Finance, Taxation & Management',
    place: 'Chhatrapati Shahu Ji Maharaj University, Kanpur',
    period: 'Jul 2021 — May 2024',
    score: '8.1',
  },
  {
    year: '2021',
    title: 'Class 12',
    detail: 'Commerce',
    place: 'CBSE Board',
    period: 'Jul 2020 — Apr 2021',
    score: '8.7',
  },
  {
    year: '2019',
    title: 'Class 10',
    detail: 'Science',
    place: 'CBSE Board',
    period: 'Jul 2018 — Apr 2019',
    score: '8.0',
  },
];

const skills = [
  { name: 'Talent Acquisition', level: 92, group: 'people' },
  { name: 'Candidate Sourcing', level: 90, group: 'people' },
  { name: 'Resume Screening', level: 90, group: 'people' },
  { name: 'Interview Coordination', level: 88, group: 'people' },
  { name: 'Business Communication', level: 88, group: 'business' },
  { name: 'Operations Management', level: 82, group: 'business' },
  { name: 'MS Excel & Google Sheets', level: 82, group: 'tools' },
  { name: 'Documentation & Research', level: 84, group: 'tools' },
];

const certifications = [
  { title: 'Human Resources Management Course', provider: 'Great Learning', date: 'APR 2026', code: 'HR-GL-26' },
  { title: 'Human Resource Internship', provider: 'Cnear', date: 'DEC 2023', code: 'HR-CN-23' },
  { title: 'Business Analysis', provider: 'Simplilearn', date: 'DEC 2021', code: 'BA-SL-21' },
];

const navItems = [
  ['home', 'Start'],
  ['about', 'Profile'],
  ['experience', 'Field Notes'],
  ['education', 'Learning Map'],
  ['skills', 'Toolkit'],
  ['contact', 'Contact'],
];

function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(100, value + Math.ceil(Math.random() * 10));
      });
    }, 55);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress !== 100) return undefined;
    const timer = setTimeout(onDone, 420);
    return () => clearTimeout(timer);
  }, [progress, onDone]);

  return (
    <div className={`loader ${progress === 100 ? 'loader--complete' : ''}`}>
      <div className="loader__grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} style={{ '--delay': `${index * 35}ms` }} />
        ))}
      </div>
      <div className="loader__content">
        <p>ASSEMBLING PEOPLE SYSTEM</p>
        <strong>{String(progress).padStart(3, '0')}</strong>
        <div className="loader__track"><i style={{ width: `${progress}%` }} /></div>
        <small>STUTI GUPTA · HR / OPERATIONS / LEARNING</small>
      </div>
    </div>
  );
}

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let frame;

    const resolveLabel = (target) => {
      const interactive = target?.closest?.('a, button, input, textarea, select, [role="button"], [data-cursor]');
      if (!interactive) return '';

      const customLabel = interactive.getAttribute('data-cursor');
      if (customLabel) return customLabel.slice(0, 8).toUpperCase();
      if (interactive.matches('input, textarea, select')) return 'TYPE';
      if (interactive.hasAttribute('download')) return 'SAVE';

      const href = interactive.getAttribute('href') || '';
      if (href.startsWith('mailto:')) return 'MAIL';
      if (href.includes('linkedin.com')) return 'LINK';
      if (href.startsWith('#')) return 'VIEW';
      return interactive.tagName === 'BUTTON' ? 'CLICK' : 'OPEN';
    };

    const updateInteraction = (target) => {
      const cursorLabel = resolveLabel(target);
      const isActive = Boolean(cursorLabel);
      ring.current?.classList.toggle('is-active', isActive);
      dot.current?.classList.toggle('is-active', isActive);
      if (label.current) label.current.textContent = cursorLabel;
    };

    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      dot.current?.classList.add('is-visible');
      ring.current?.classList.add('is-visible');
      if (dot.current) dot.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      updateInteraction(event.target);
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };

    const press = () => ring.current?.classList.add('is-pressed');
    const release = () => ring.current?.classList.remove('is-pressed');
    const hide = () => {
      dot.current?.classList.remove('is-visible');
      ring.current?.classList.remove('is-visible');
    };

    const animate = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      if (ring.current) ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerdown', press);
    window.addEventListener('pointerup', release);
    document.documentElement.addEventListener('mouseleave', hide);
    animate();

    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerdown', press);
      window.removeEventListener('pointerup', release);
      document.documentElement.removeEventListener('mouseleave', hide);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span ref={dot} className="cursor cursor--dot" aria-hidden="true" />
      <span ref={ring} className="cursor cursor--ring" aria-hidden="true">
        <span ref={label} className="cursor__label" />
      </span>
    </>
  );
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function MagnetLink({ children, className = '', ...props }) {
  const ref = useRef(null);

  const move = (event) => {
    if (window.matchMedia('(pointer: coarse)').matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };

  return (
    <a ref={ref} onMouseMove={move} onMouseLeave={reset} className={className} {...props}>
      {children}
    </a>
  );
}

function OrbitWords() {
  return (
    <div className="orbit-words" aria-hidden="true">
      <svg viewBox="0 0 400 400">
        <defs>
          <path id="orbitPath" d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0" />
        </defs>
        <text>
          <textPath href="#orbitPath" startOffset="0%">
            PEOPLE · PROCESS · PROGRESS · TALENT · OPERATIONS · LEARNING ·
          </textPath>
        </text>
      </svg>
      <div className="orbit-words__core">
        <span>SG</span>
        <small>HR / 26</small>
      </div>
      <i className="orbit-words__satellite" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__rail">
        <span>PORTFOLIO / 2026</span>
        <span>KANPUR · INDIA</span>
      </div>

      <div className="hero__intro" data-reveal>
        <div className="live-tag"><i /> OPEN TO HR OPPORTUNITIES</div>
        <p>
          HR recruiter and MBA graduate building thoughtful candidate journeys,
          organised processes and clearer communication.
        </p>
        <div className="hero__actions">
          <MagnetLink className="action action--dark" href="#experience">
            Open field notes <Arrow />
          </MagnetLink>
          <MagnetLink className="action action--line" href="./Stuti-Gupta-Resume.pdf" download>
            Resume <Download />
          </MagnetLink>
        </div>
      </div>

      <div className="hero__title" data-reveal>
        <span className="hero__word hero__word--one">STUTI</span>
        <span className="hero__word hero__word--two">GUPTA</span>
        <span className="hero__word hero__word--three">PEOPLE</span>
        <span className="hero__word hero__word--four">SYSTEMS</span>
      </div>

      <div className="hero__orbit" data-reveal>
        <OrbitWords />
      </div>

      <div className="hero__note hero__note--top" data-reveal>
        <span>01</span>
        <p>Talent acquisition</p>
      </div>
      <div className="hero__note hero__note--bottom" data-reveal>
        <span>02</span>
        <p>HR + Operations</p>
      </div>

      <a className="hero__scroll" href="#about">
        <span>SCROLL</span>
        <i />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-kicker" data-reveal>
        <span>01 / PROFILE</span>
        <p>THE HUMAN BEHIND THE SYSTEM</p>
      </div>

      <div className="about__statement" data-reveal>
        <p className="about__lead">
          I work where <em>people</em>, <em>clarity</em> and <em>process</em> meet.
        </p>
        <p className="about__body">
          My background combines recruitment, BFSI exposure, operations thinking and teaching.
          I enjoy making information easier to understand, keeping workflows organised and helping
          people move through a process with confidence.
        </p>
      </div>

      <div className="about__dashboard" data-reveal>
        <article className="dash-card dash-card--profile">
          <div className="dash-card__label">PROFILE SIGNAL</div>
          <div className="profile-signal">
            <div className="profile-signal__face">
              <span>S</span><span>G</span>
            </div>
            <div>
              <h3>Stuti Gupta</h3>
              <p>HR Recruiter · MBA Graduate</p>
              <small><Pin /> Kanpur, Uttar Pradesh</small>
            </div>
          </div>
          <div className="dash-card__footer">
            <span>PEOPLE FIRST</span><span>PROCESS AWARE</span><span>READY TO LEARN</span>
          </div>
        </article>

        <article className="dash-card dash-card--metric dash-card--acid">
          <span className="dash-card__label">MBA SCORE</span>
          <strong>8.5</strong>
          <small>HR + Operations</small>
        </article>

        <article className="dash-card dash-card--metric dash-card--coral">
          <span className="dash-card__label">TEACHING</span>
          <strong>1Y</strong>
          <small>Classes 6–7</small>
        </article>

        <article className="dash-card dash-card--quote">
          <span className="dash-card__label">WORKING PRINCIPLE</span>
          <blockquote>“Clear communication can turn a complicated process into a positive experience.”</blockquote>
          <div className="quote-stamp">SG / NOTE 04</div>
        </article>

        <article className="dash-card dash-card--flow">
          <span className="dash-card__label">RECRUITMENT FLOW</span>
          <div className="mini-flow">
            <span>Source</span><i /><span>Screen</span><i /><span>Schedule</span><i /><span>Support</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  const [active, setActive] = useState(0);
  const item = experience[active];

  return (
    <section className="experience section section--dark" id="experience">
      <div className="section-kicker section-kicker--light" data-reveal>
        <span>02 / FIELD NOTES</span>
        <p>EXPERIENCE, RECORDED AS WORKING OBSERVATIONS</p>
      </div>

      <div className="experience__header" data-reveal>
        <h2>Not job cards.<br />Real-world chapters.</h2>
        <p>Choose a chapter to inspect the role, context and practical skills developed there.</p>
      </div>

      <div className="experience-console" data-reveal>
        <div className="experience-console__tabs" role="tablist" aria-label="Experience chapters">
          {experience.map((entry, index) => (
            <button
              key={entry.id}
              type="button"
              className={active === index ? 'active' : ''}
              onClick={() => setActive(index)}
              role="tab"
              aria-selected={active === index}
            >
              <span>{entry.id}</span>
              <div><strong>{entry.company}</strong><small>{entry.role}</small></div>
              <Arrow diagonal />
            </button>
          ))}
        </div>

        <article className={`experience-console__stage experience-console__stage--${item.accent}`} key={item.id}>
          <div className="stage__meta">
            <span>CASE FILE {item.id}</span>
            <span>{item.period}</span>
          </div>
          <div className="stage__title">
            <small>{item.company}</small>
            <h3>{item.role}</h3>
          </div>
          <p className="stage__headline">{item.headline}</p>
          <p className="stage__description">{item.description}</p>
          <div className="stage__proof">
            {item.proof.map((point, index) => (
              <span key={point}><b>{String(index + 1).padStart(2, '0')}</b>{point}</span>
            ))}
          </div>
          <div className="stage__location"><Pin /> {item.location}</div>
          <div className="stage__index">{item.id}</div>
        </article>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education section" id="education">
      <div className="section-kicker" data-reveal>
        <span>03 / LEARNING MAP</span>
        <p>ACADEMIC ROUTE: COMMERCE → MANAGEMENT → PEOPLE OPERATIONS</p>
      </div>

      <div className="education__intro" data-reveal>
        <h2>A route built through commerce, business and human resources.</h2>
        <p>
          The path is not a stack of degrees; it is a progression from understanding numbers and
          business systems to understanding teams, workflows and people decisions.
        </p>
      </div>

      <div className="route-map" data-reveal>
        <div className="route-map__line"><i /></div>
        {education.map((item, index) => (
          <article className="route-stop" key={item.title} style={{ '--stop': index }}>
            <div className="route-stop__marker"><span>{index + 1}</span></div>
            <div className="route-stop__year">{item.year}</div>
            <div className="route-stop__content">
              <div>
                <span>{item.period}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <small>{item.place}</small>
              </div>
              <strong>{item.score}<em>GPA</em></strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillRadar() {
  return (
    <div className="skill-radar" aria-label="Capability radar illustration">
      <svg viewBox="0 0 420 420" role="img">
        <circle cx="210" cy="210" r="170" />
        <circle cx="210" cy="210" r="125" />
        <circle cx="210" cy="210" r="80" />
        <path d="M210 40v340M40 210h340M90 90l240 240M330 90 90 330" />
        <path className="skill-radar__shape" d="M210 64 323 122 344 236 270 331 143 320 70 218 105 111Z" />
        <circle className="skill-radar__point" cx="210" cy="64" r="7" />
        <circle className="skill-radar__point" cx="323" cy="122" r="7" />
        <circle className="skill-radar__point" cx="344" cy="236" r="7" />
        <circle className="skill-radar__point" cx="270" cy="331" r="7" />
        <circle className="skill-radar__point" cx="143" cy="320" r="7" />
        <circle className="skill-radar__point" cx="70" cy="218" r="7" />
        <circle className="skill-radar__point" cx="105" cy="111" r="7" />
      </svg>
      <span className="radar-label radar-label--one">PEOPLE</span>
      <span className="radar-label radar-label--two">PROCESS</span>
      <span className="radar-label radar-label--three">TOOLS</span>
      <div className="skill-radar__core">SG<small>CAPABILITY<br />MAP</small></div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills section section--blue" id="skills">
      <div className="section-kicker section-kicker--light" data-reveal>
        <span>04 / TOOLKIT</span>
        <p>A PRACTICAL MIX OF PEOPLE, BUSINESS AND DIGITAL SKILLS</p>
      </div>

      <div className="skills__layout">
        <div className="skills__copy" data-reveal>
          <h2>Skills behave like a system—not isolated percentages.</h2>
          <p>
            Recruitment needs communication. Communication needs empathy. Operations need structure.
            Good HR work happens when all of them connect.
          </p>
          <SkillRadar />
        </div>

        <div className="skill-terminal" data-reveal>
          <div className="skill-terminal__head">
            <span>CAPABILITY_TERMINAL.SG</span>
            <div><i /><i /><i /></div>
          </div>
          <div className="skill-terminal__body">
            {skills.map((skill, index) => (
              <div className="terminal-row" key={skill.name}>
                <span className="terminal-row__index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{skill.name}</strong>
                  <div className="terminal-row__track"><i style={{ '--level': `${skill.level}%` }} /></div>
                </div>
                <em>{skill.level}</em>
              </div>
            ))}
          </div>
          <div className="skill-terminal__footer">
            <span>STATUS: READY TO CONTRIBUTE</span>
            <span>LEARNING MODE: ALWAYS ON</span>
          </div>
        </div>
      </div>

      <div className="certification-strip" data-reveal>
        {certifications.map((certificate) => (
          <article className="ticket" key={certificate.code}>
            <div className="ticket__code">{certificate.code}</div>
            <div className="ticket__main">
              <span>CERTIFIED LEARNING</span>
              <h3>{certificate.title}</h3>
              <p>{certificate.provider}</p>
            </div>
            <time>{certificate.date}</time>
            <div className="ticket__cut" />
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__poster" data-reveal>
        <div className="contact__poster-copy">
          <div className="contact__topline">
            <span className="contact__eyebrow">05 / OPEN CHANNEL</span>
            <span className="contact__availability"><i /> AVAILABLE FOR HR OPPORTUNITIES</span>
          </div>

          <h2>Let’s make the next people process clearer, warmer and better organised.</h2>
          <p>
            For recruitment, talent acquisition, HR operations and people-coordination opportunities,
            connect directly through email or LinkedIn.
          </p>

          <div className="contact__channels">
            <a className="contact-channel contact-channel--email" href="mailto:sastutigupta@gmail.com?subject=HR%20Opportunity%20for%20Stuti%20Gupta">
              <Mail />
              <span>
                <small>WRITE AN EMAIL</small>
                <strong>sastutigupta@gmail.com</strong>
                <em>Best for role details, interview requests and formal conversations.</em>
              </span>
              <Arrow diagonal />
            </a>

            <a className="contact-channel contact-channel--linkedin" href="https://www.linkedin.com/in/stutiguptadz/" target="_blank" rel="noreferrer">
              <LinkedIn />
              <span>
                <small>MESSAGE ON LINKEDIN</small>
                <strong>/in/stutiguptadz</strong>
                <em>Best for a quick introduction and professional networking.</em>
              </span>
              <Arrow diagonal />
            </a>
          </div>

          <div className="contact__note">
            <span>RESPONSE ROUTE</span>
            <p>Email is the preferred channel for complete job descriptions and interview details.</p>
          </div>
        </div>
      </div>

      <div className="contact__marquee" aria-hidden="true">
        <div>
          {Array.from({ length: 2 }).map((_, setIndex) => (
            <span key={setIndex}>PEOPLE FIRST · PROCESS CLEAR · COMMUNICATION HUMAN · LET’S CONNECT · </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Navigation({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="site-brand" href="#home" aria-label="Stuti Gupta home">
          <span>SG</span>
          <div><strong>STUTI GUPTA</strong><small>PEOPLE / PROCESS / PROGRESS</small></div>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.slice(1).map(([id, label], index) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>{label}
            </a>
          ))}
        </nav>
        <a className="header-resume" href="./Stuti-Gupta-Resume.pdf" download>
          RESUME <Download />
        </a>
        <button className={`menu-button ${open ? 'open' : ''}`} type="button" onClick={() => setOpen((value) => !value)} aria-label="Open navigation">
          <span /><span />
        </button>
      </header>

      <div className={`menu-overlay ${open ? 'open' : ''}`}>
        <div className="menu-overlay__meta">INDEX / STUTI GUPTA / 2026</div>
        <nav>
          {navItems.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              <span>{String(index).padStart(2, '0')}</span>{label}<Arrow diagonal />
            </a>
          ))}
        </nav>
        <div className="menu-overlay__footer">
          <a href="mailto:sastutigupta@gmail.com">sastutigupta@gmail.com</a>
          <span>KANPUR · INDIA</span>
        </div>
      </div>
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('home');
  const sectionIds = useMemo(() => navItems.map(([id]) => id), []);

  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      document.documentElement.style.setProperty('--scroll', `${Math.min(1, progress) * 100}%`);

      const current = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= 180);
      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty('--parallax-x', `${x}`);
      document.documentElement.style.setProperty('--parallax-y', `${y}`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <div className="app-shell">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <Navigation active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div><strong>STUTI GUPTA</strong><span>HR RECRUITER · MBA GRADUATE</span></div>
        <p>Designed as an experimental people-systems portfolio.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;
