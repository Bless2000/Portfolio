import { Link } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="wrap">
        <Link className="back" to="/" state={{ fromBack: true }} aria-label="Home">
          ←
        </Link>
        <h1>
          Let’s <em>talk</em>
        </h1>
        <p className="sub">
          Have a project, a job opportunity or just want to say hi? Reach me any
          of these ways.
        </p>
        <div className="list">
          <a className="card" href="tel:0242675385">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
              </svg>
            </span>
            <span className="t">
              <small>Phone</small>
              <b>0242675385</b>
            </span>
            <span className="go">›</span>
          </a>

          <a className="card" href="mailto:blessamponsah8@gmail.com">
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>
            <span className="t">
              <small>Email</small>
              <b>blessamponsah8@gmail.com</b>
            </span>
            <span className="go">›</span>
          </a>

          <a
            className="card wa"
            href="https://wa.me/233242675385"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <path d="M3 21l1.500-4.500A8.500 8.500 0 1 1 8 19.500z" />
                <path d="M9 9c0 3 3 6 6 6l1.500-1.500-2-1-1 .5c-1-.5-2-1.500-2.500-2.500l.5-1-1-2z" />
              </svg>
            </span>
            <span className="t">
              <small>WhatsApp</small>
              <b>0242675385</b>
            </span>
            <span className="go">›</span>
          </a>

          <a
            className="card"
            href="https://www.linkedin.com/search/results/people/?keywords=Blessed%20Amponsah"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ic">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
              </svg>
            </span>
            <span className="t">
              <small>LinkedIn</small>
              <b>Blessed Amponsah</b>
            </span>
            <span className="go">›</span>
          </a>
        </div>
        <p className="foot">Based in Accra, Ghana</p>
      </div>
    </div>
  )
}
