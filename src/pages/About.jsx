import { Link } from 'react-router-dom'
import './About.css'

const STATS = [
  { k: '09', l: 'Core technologies' },
  { k: '05', l: 'Qualifications' },
  { k: '02', l: 'Languages spoken' },
  { k: '2027', l: 'B.Sc. completion' },
]

const STACK = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Python',
  'SQL',
  'React',
  'React Native',
  'Node.js',
]

const EDUCATION = [
  {
    title: 'B.Sc. in Information Technology',
    meta: 'Knutsford University College, Accra, Ghana',
    year: 'Expected Nov 2027',
  },
  {
    title: 'Diploma in Software Engineering',
    meta: 'Openlabs Ghana (Formerly NIIT Ghana)',
    year: '2020 – 2022',
  },
  {
    title: 'Microsoft Certified Expert',
    meta: 'Openlabs Ghana (Formerly NIIT Ghana)',
    year: '2020 – 2022',
  },
  {
    title: 'West African Senior School Certificate Examination (WASSCE)',
    meta: 'Bishop Herman College',
    year: '2017 – 2020',
  },
  {
    title: 'Basic Education Certificate Examination (BECE)',
    meta: 'Basic education',
  },
]

export default function About() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="about-page">
      <div className="ab-bg" aria-hidden="true">
        <span className="ab-grid" />
        <span className="ab-blob ab-blob-a" />
        <span className="ab-blob ab-blob-b" />
        <span className="ab-ghost">CV</span>
      </div>

      <div className="wrap">
        <nav className="ab-nav">
          <Link to="/" state={{ fromBack: true }} aria-label="Home">
            ←
          </Link>
          <span className="ab-nav-label">About / Curriculum Vitae</span>
          <button type="button" onClick={handlePrint}>
            Save CV as PDF
          </button>
        </nav>

        <header className="ab-hero">
          <div className="ab-portrait">
            <div className="ab-portrait-frame" aria-hidden="true" />
            <img src="/assets/portrait.webp" alt="Amponsah Blessed" />
            <span className="ab-badge">
              <i />
              Open to work
            </span>
          </div>

          <div className="ab-intro">
            <p className="ab-kicker">
              IT Support <span>·</span> Software Development
            </p>
            <h1>
              <span>Amponsah</span>
              <span className="ab-outline">Blessed</span>
            </h1>
            <p className="ab-lead">
              I keep systems running and build the ones people actually use —
              full-stack web apps, hands-on hardware support, and the quiet
              troubleshooting in between.
            </p>

            <ul className="ab-meta">
              <li>
                <small>Location</small>
                <span>Accra, Ghana</span>
              </li>
              <li>
                <small>Phone</small>
                <a href="tel:0242675385">0242675385</a>
              </li>
              <li>
                <small>Email</small>
                <a href="mailto:blessamponsah8@gmail.com">
                  blessamponsah8@gmail.com
                </a>
              </li>
            </ul>

            <div className="ab-actions">
              <a className="ab-btn" href="mailto:blessamponsah8@gmail.com">
                Let&rsquo;s talk
                <span aria-hidden="true">↗</span>
              </a>
              <Link className="ab-btn ghost" to="/portfolio">
                View work
              </Link>
            </div>
          </div>
        </header>

        <div className="ab-stats">
          {STATS.map((s) => (
            <div className="ab-stat" key={s.l}>
              <b>{s.k}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>

        <article className="ab-sheet">
          <section className="ab-sec">
            <h2>
              <span className="ab-no">01</span>
              Personal Profile
            </h2>
            <p>
              Motivated and adaptable IT professional with a background in
              software engineering and a strong foundation in full-stack
              development, technical support, and problem-solving. Experienced in
              programming, web and mobile application development, computer
              hardware troubleshooting, system maintenance, and diagnosing and
              resolving common technical issues. Proficient in technologies such
              as PHP, JavaScript, Python, and React, with a strong willingness to
              apply technical knowledge, gain practical experience, and
              continuously develop new skills. Demonstrates attention to detail,
              an ability to learn quickly, and the capacity to work effectively
              under pressure, both independently and as part of a team. Committed
              to following instructions carefully, upholding organizational
              safety standards, delivering reliable results, and contributing
              positively to organizational growth and operational efficiency.
            </p>
          </section>

          <section className="ab-sec">
            <h2>
              <span className="ab-no">02</span>
              Career Objective
            </h2>
            <p>
              To contribute technical and problem-solving skills to an
              organization while gaining practical experience, developing
              professionally, and continuing to build expertise across IT support
              and software development.
            </p>
          </section>

          <section className="ab-sec">
            <h2>
              <span className="ab-no">03</span>
              Work Experience
            </h2>
            <ol className="ab-timeline">
              <li>
                <div className="ab-tl-head">
                  <h3>National Service</h3>
                  <span className="ab-when">Nov 2022 — Sep 2023</span>
                </div>
                <div className="ab-where">National Insurance Commission, Accra</div>
                <ul className="ab-bullets">
                  <li>
                    Educated members of the public on insurance and its benefits.
                  </li>
                  <li>
                    Inspected new and relocated branches and offices of insurance
                    companies.
                  </li>
                  <li>Conducted road inspections relating to motor insurance.</li>
                  <li>
                    Inspected insurance arrangements for commercial buildings.
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="ab-sec">
            <h2>
              <span className="ab-no">04</span>
              Education &amp; Qualifications
            </h2>
            <ul className="ab-edu">
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <span className="ab-edu-dot" aria-hidden="true" />
                  <div>
                    <h3>{e.title}</h3>
                    <span className="ab-where">{e.meta}</span>
                  </div>
                  {e.year && <span className="ab-when">{e.year}</span>}
                </li>
              ))}
            </ul>
          </section>

          <section className="ab-sec">
            <h2>
              <span className="ab-no">05</span>
              Relevant Skills
            </h2>
            <div className="ab-skill">
              <b>Programming &amp; development</b>
              <div className="ab-chips">
                {STACK.map((t) => (
                  <i key={t}>{t}</i>
                ))}
              </div>
            </div>
            <div className="ab-skill">
              <b>IT support &amp; troubleshooting</b>
              <span>
                Computer hardware troubleshooting, system maintenance, diagnosis
                and resolution of common technical issues.
              </span>
            </div>
            <div className="ab-skill">
              <b>Productivity tools</b>
              <span>Microsoft Office 365.</span>
            </div>
            <div className="ab-skill">
              <b>Professional skills</b>
              <span>
                Problem-solving, teamwork, independent working, confidentiality,
                interpersonal communication, attention to detail, adaptability,
                ability to work with minimal supervision.
              </span>
            </div>
          </section>

          <div className="ab-two">
            <section className="ab-sec">
              <h2>
                <span className="ab-no">06</span>
                Languages
              </h2>
              <div className="ab-chips">
                <i>English</i>
                <i>Twi</i>
              </div>
            </section>
            <section className="ab-sec">
              <h2>
                <span className="ab-no">07</span>
                Interests
              </h2>
              <div className="ab-chips">
                <i>Watching movies</i>
                <i>Listening to music</i>
                <i>Basketball and football</i>
                <i>Playing video games</i>
              </div>
            </section>
          </div>

          <section className="ab-sec">
            <h2>
              <span className="ab-no">08</span>
              References
            </h2>
            <div className="ab-two ab-refs">
              <div className="ab-ref">
                <b>Mr. David K. Afenyo</b>
                <span>
                  Greater Accra Branch Manager, National Insurance Commission
                  <br />
                  Tel: 0245810825
                </span>
              </div>
              <div className="ab-ref">
                <b>Mr. Kwasi Addai</b>
                <span>
                  Head of Academics, OpenLabs (formerly NIIT)
                  <br />
                  Tel: 0207082327
                </span>
              </div>
            </div>
          </section>
        </article>

        <p className="ab-foot">
          Amponsah Blessed · Accra, Ghana ·{' '}
          <a href="mailto:blessamponsah8@gmail.com">blessamponsah8@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
