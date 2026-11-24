import { Link } from 'react-router-dom'
import './Contact.css'

const CHANNELS = [
  {
    no: '01',
    kind: 'Phone',
    value: '0242675385',
    note: 'Call or leave a voice note · Accra time',
    href: 'tel:0242675385',
    icon: (
      <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
  },
  {
    no: '02',
    kind: 'Email',
    value: 'blessamponsah8@gmail.com',
    note: 'Best for briefs, CVs and detailed requests',
    href: 'mailto:blessamponsah8@gmail.com',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
  },
  {
    no: '03',
    kind: 'WhatsApp',
    value: '0242675385',
    note: 'Fastest route for quick questions',
    href: 'https://wa.me/233242675385',
    external: true,
    wa: true,
    icon: (
      <>
        <path d="M3 21l1.500-4.500A8.500 8.500 0 1 1 8 19.500z" />
        <path d="M9 9c0 3 3 6 6 6l1.500-1.500-2-1-1 .5c-1-.5-2-1.500-2.500-2.500l.5-1-1-2z" />
      </>
    ),
  },
  {
    no: '04',
    kind: 'LinkedIn',
    value: 'Blessed Amponsah',
    note: 'Work history, updates and referrals',
    href: 'https://www.linkedin.com/search/results/people/?keywords=Blessed%20Amponsah',
    external: true,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </>
    ),
  },
]

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="ct-bg" aria-hidden="true">
        <span className="ct-grid" />
        <span className="ct-blob ct-blob-a" />
        <span className="ct-blob ct-blob-b" />
        <span className="ct-ghost">SAY HI</span>
      </div>

      <div className="wrap">
        <nav className="ct-nav">
          <Link to="/" state={{ fromBack: true }} aria-label="Home">
            ←
          </Link>
          <span className="ct-nav-label">Contact</span>
          <span className="ct-status">
            <i />
            Available
          </span>
        </nav>

        <div className="ct-hero">
          <div className="ct-copy">
            <p className="ct-kicker">Open to work · Accra, Ghana</p>
            <h1>
              Let&rsquo;s
              <span className="ct-outline">talk</span>
            </h1>
            <p className="ct-sub">
              A project, a job opportunity, or just a hello — pick whichever
              channel suits you. I read everything and usually reply the same
              day.
            </p>

            <a
              className="ct-primary"
              href="mailto:blessamponsah8@gmail.com?subject=Hello%20Blessed"
            >
              <span>Start an email</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>

            <div className="ct-loc">
              <span className="ct-loc-mark" aria-hidden="true" />
              <span>
                Accra, Ghana · GMT
                <small>Remote-friendly · Available for full-time roles</small>
              </span>
            </div>
          </div>

          <div className="ct-panel">
            <div className="ct-panel-head">
              <span>Direct lines</span>
              <span>04 channels</span>
            </div>

            {CHANNELS.map((c) => (
              <a
                key={c.kind}
                className={`ct-row ${c.wa ? 'wa' : ''}`}
                href={c.href}
                {...(c.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <span className="ct-no">{c.no}</span>
                <span className="ct-ic">
                  <svg viewBox="0 0 24 24">{c.icon}</svg>
                </span>
                <span className="ct-t">
                  <small>{c.kind}</small>
                  <b>{c.value}</b>
                  <em>{c.note}</em>
                </span>
                <span className="ct-go" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <footer className="ct-foot">
          <span>Amponsah Blessed</span>
          <span className="ct-dot" aria-hidden="true" />
          <span>IT Support · Software Development</span>
          <Link to="/portfolio">See the work →</Link>
        </footer>
      </div>
    </div>
  )
}
