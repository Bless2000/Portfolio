import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="about-page">
      <div className="wrap">
        <nav>
          <Link to="/" state={{ fromBack: true }} aria-label="Home">
            ←
          </Link>
          <button type="button" onClick={handlePrint}>
            Save CV as PDF
          </button>
        </nav>
        <article className="sheet">
          <header className="head">
            <img src="/assets/avatar.webp" alt="Amponsah Blessed" />
            <div>
              <h1>AMPONSAH BLESSED</h1>
              <div className="role">IT SUPPORT | SOFTWARE DEVELOPMENT</div>
              <ul className="contact" style={{ marginTop: '10px' }}>
                <li>Accra, Ghana</li>
                <li>P. O. Box 11495, Accra North</li>
                <li>
                  <a href="tel:0242675385">0242675385</a>
                </li>
                <li>
                  <a href="mailto:blessamponsah8@gmail.com">
                    blessamponsah8@gmail.com
                  </a>
                </li>
                <li>LinkedIn: Blessed Amponsah</li>
              </ul>
            </div>
          </header>

          <section>
            <h2>Personal Profile</h2>
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

          <section>
            <h2>Career Objective</h2>
            <p>
              To contribute technical and problem-solving skills to an
              organization while gaining practical experience, developing
              professionally, and continuing to build expertise across IT support
              and software development.
            </p>
          </section>

          <section>
            <h2>Work Experience</h2>
            <div className="item">
              <h3>National Service — National Insurance Commission, Accra</h3>
              <div className="meta">November 2022 – September 2023</div>
              <ul className="b">
                <li>Educated members of the public on insurance and its benefits.</li>
                <li>
                  Inspected new and relocated branches and offices of insurance
                  companies.
                </li>
                <li>
                  Conducted road inspections relating to motor insurance.
                </li>
                <li>
                  Inspected insurance arrangements for commercial buildings.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Education &amp; Qualifications</h2>
            <div className="item">
              <h3>B.Sc. in Information Technology</h3>
              <div className="meta">
                Knutsford University College, Accra, Ghana | Expected November
                2027
              </div>
            </div>
            <div className="item">
              <h3>Diploma in Software Engineering</h3>
            </div>
            <div className="item">
              <h3>Microsoft Certified Expert</h3>
            </div>
            <div className="item">
              <h3>
                West African Senior School Certificate Examination (WASSCE)
              </h3>
            </div>
            <div className="item">
              <h3>Basic Education Certificate Examination (BECE)</h3>
            </div>
          </section>

          <section>
            <h2>Relevant Skills</h2>
            <div className="row">
              <b>Programming &amp; development</b>
              <div className="chips">
                <i>HTML</i>
                <i>CSS</i>
                <i>JavaScript</i>
                <i>PHP</i>
                <i>Python</i>
                <i>SQL</i>
                <i>React</i>
                <i>React Native</i>
                <i>Node.js</i>
              </div>
            </div>
            <div className="row">
              <b>IT support &amp; troubleshooting</b>
              <span>
                Computer hardware troubleshooting, system maintenance, diagnosis
                and resolution of common technical issues.
              </span>
            </div>
            <div className="row">
              <b>Productivity tools</b>
              <span>Microsoft Office 365.</span>
            </div>
            <div className="row">
              <b>Professional skills</b>
              <span>
                Problem-solving, teamwork, independent working, confidentiality,
                interpersonal communication, attention to detail, adaptability,
                ability to work with minimal supervision.
              </span>
            </div>
          </section>

          <div className="two">
            <section>
              <h2>Languages</h2>
              <div className="chips">
                <i>English</i>
                <i>Twi</i>
              </div>
            </section>
            <section>
              <h2>Interests</h2>
              <div className="chips">
                <i>Watching movies</i>
                <i>Listening to music</i>
                <i>Basketball and football</i>
                <i>Playing video games</i>
              </div>
            </section>
          </div>

          <section>
            <h2>References</h2>
            <div className="two">
              <div className="ref">
                <b>Mr. David K. Afenyo</b>
                <span>
                  Greater Accra Branch Manager, National Insurance Commission
                  <br />
                  Tel: 0245810825
                </span>
              </div>
              <div className="ref">
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
      </div>
    </div>
  )
}
