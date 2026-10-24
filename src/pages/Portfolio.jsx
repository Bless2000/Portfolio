import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const PROJECTS = [
  {
    name: 'FALCON',
    tag: 'Gaming marketplace',
    badge: 'Gaming Commerce',
    host: 'falcon.freepage.cc',
    url: 'https://falcon.freepage.cc',
    a: '#2a0f5e',
    b: '#8a1650',
    c3: '#ffb703',
    cardDesc:
      'A dedicated gaming trade marketplace where players buy and sell verified game accounts, currency coins, rare skins, and automated boosting services.',
    desc: 'A full-featured gaming commerce platform designed for seamless player-to-player trading. Users can securely buy and sell verified game accounts, digital currency top-ups, weapon skins, gift cards, and boosting services. Engineered with a secure offer-and-order pipeline backed by Laravel and PostgreSQL.',
    tech: ['Laravel', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    highlights: ['P2P Marketplace', 'Order Escrow', 'Digital Top-Ups'],
    renderSvg: () => (
      <svg viewBox="0 0 300 440" preserveAspectRatio="none" className="card-svg">
        <defs>
          <linearGradient id="fal-g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ff5a36" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="fal-r" cx="50%" cy="38%" r="50%">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="160" r="115" fill="url(#fal-r)" />
        <g stroke="var(--c3)" strokeWidth="1.2" opacity="0.32" fill="none">
          <polygon points="150,60 235,125 205,220 95,220 65,125" />
          <polygon points="150,88 212,135 188,205 112,205 88,135" />
          <line x1="150" y1="40" x2="150" y2="245" />
          <line x1="45" y1="155" x2="255" y2="155" />
        </g>
        <path
          d="M150 135 L285 55 L245 160 L290 130 L220 235 L165 170Z"
          fill="url(#fal-g1)"
          opacity="0.9"
        />
        <path
          d="M150 135 L15 55 L55 160 L10 130 L80 235 L135 170Z"
          fill="url(#fal-g1)"
          opacity="0.9"
        />
        <path
          d="M150 100 L185 155 L150 210 L115 155Z"
          fill="var(--c3)"
          opacity="0.85"
        />
        <circle cx="150" cy="155" r="18" fill="#180436" stroke="var(--c3)" strokeWidth="2.5" />
        <polygon points="150,145 158,158 142,158" fill="var(--c3)" />
      </svg>
    ),
  },
  {
    name: 'BLUE SHARK',
    tag: 'Logistics & Courier',
    badge: 'Delivery Hub',
    host: 'bluesharklogistics.org',
    url: 'https://bluesharklogistics.org/',
    a: '#061e3d',
    b: '#0a3c68',
    c3: '#00d2ff',
    cardDesc:
      'A modern logistics and delivery platform offering same-day courier service, real-time parcel tracking, and merchant shipping solutions across Ghana.',
    desc: 'A streamlined logistics and supply chain portal developed for Blue Shark Logistics in Ghana. Features end-to-end parcel tracking, rapid same-day package delivery coordination, merchant order management, Cash-on-Delivery (COD) reconciliation, and instant Mobile Money payment support.',
    tech: ['Web Platform', 'Live GPS Tracking', 'Logistics API', 'Merchant Portal'],
    highlights: ['Same-Day Delivery', 'Real-Time Tracking', 'COD & MoMo'],
    renderSvg: () => (
      <svg viewBox="0 0 300 440" preserveAspectRatio="none" className="card-svg">
        <defs>
          <linearGradient id="bs-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0a3c68" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="bs-radar" cx="50%" cy="38%" r="50%">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.38" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="160" r="120" fill="url(#bs-radar)" />
        <g fill="none" stroke="var(--c3)">
          <circle cx="150" cy="160" r="40" strokeWidth="1.5" opacity="0.6" strokeDasharray="4 4" />
          <circle cx="150" cy="160" r="75" strokeWidth="1.2" opacity="0.4" />
          <circle cx="150" cy="160" r="115" strokeWidth="1" opacity="0.25" strokeDasharray="6 4" />
          <line x1="150" y1="40" x2="150" y2="280" strokeWidth="1" opacity="0.25" />
          <line x1="30" y1="160" x2="270" y2="160" strokeWidth="1" opacity="0.25" />
        </g>
        <path
          d="M150 90 C165 130 185 160 215 175 C185 185 155 180 135 180 C130 150 135 120 150 90 Z"
          fill="url(#bs-g)"
        />
        <path
          d="M150 90 C155 120 155 145 135 180 C110 180 90 170 80 165 C105 150 130 125 150 90 Z"
          fill="var(--c3)"
          opacity="0.3"
        />
        <circle cx="150" cy="160" r="12" fill="#061e3d" stroke="var(--c3)" strokeWidth="2.5" />
        <circle cx="150" cy="160" r="5" fill="var(--c3)" />
        <path d="M0 290 Q75 270 150 290 T300 290 V440 H0 Z" fill="url(#bs-g)" opacity="0.4" />
        <path d="M0 325 Q75 305 150 325 T300 325 V440 H0 Z" fill="#061e3d" opacity="0.75" />
        <path d="M0 360 Q75 340 150 360 T300 360 V440 H0 Z" fill="#030f20" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'FOREVER',
    tag: 'Fashion E-Commerce',
    badge: 'Storefront',
    host: 'ecommerce-project2-forever.netlify.app',
    url: 'https://ecommerce-project2-forever.netlify.app/',
    a: '#3b0a24',
    b: '#631339',
    c3: '#ff4081',
    cardDesc:
      'A modern apparel and fashion storefront featuring multi-category collection filtering, interactive cart state, and a sleek mobile-first checkout flow.',
    desc: 'A contemporary e-commerce fashion storefront built with React and Tailwind CSS. Provides shoppers with instant category filtering across Men, Women, and Kids collections, real-time product search, interactive size selectors, shopping cart persistence, and simulated checkout processing.',
    tech: ['React', 'Tailwind CSS', 'Context API', 'Netlify'],
    highlights: ['Product Filtering', 'Shopping Bag', 'Responsive Design'],
    renderSvg: () => (
      <svg viewBox="0 0 300 440" preserveAspectRatio="none" className="card-svg">
        <defs>
          <linearGradient id="for-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ff758c" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="for-glow" cx="50%" cy="38%" r="48%">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="160" r="115" fill="url(#for-glow)" />
        <g fill="none" stroke="var(--c3)" strokeWidth="1.2" opacity="0.4">
          <rect x="80" y="85" width="140" height="150" rx="20" />
          <rect x="95" y="100" width="110" height="120" rx="14" strokeDasharray="4 4" />
          <path d="M235 90 L240 100 L250 105 L240 110 L235 120 L230 110 L220 105 L230 100 Z" fill="var(--c3)" opacity="0.7" />
          <path d="M65 200 L68 206 L75 209 L68 212 L65 218 L62 212 L55 209 L62 206 Z" fill="var(--c3)" opacity="0.5" />
        </g>
        <path
          d="M110 140 C110 115 190 115 190 140"
          fill="none"
          stroke="var(--c3)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M95 140 L205 140 L195 230 L105 230 Z"
          fill="url(#for-g)"
        />
        <circle cx="150" cy="180" r="22" fill="#3b0a24" stroke="var(--c3)" strokeWidth="2" />
        <path
          d="M144 170 H157 M144 179 H153 M144 170 V192"
          stroke="var(--c3)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M0 300 C60 280 120 320 180 295 S260 280 300 300 V440 H0 Z" fill="url(#for-g)" opacity="0.35" />
        <path d="M0 335 C70 315 130 355 200 330 S270 315 300 330 V440 H0 Z" fill="#240516" opacity="0.8" />
        <path d="M0 370 C70 350 140 385 210 365 S280 350 300 365 V440 H0 Z" fill="#14020c" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'BIWC',
    tag: 'Church & Community',
    badge: 'Live Portal',
    host: 'biwc-website.netlify.app',
    url: 'https://biwc-website.netlify.app/',
    a: '#052b36',
    b: '#0c224a',
    c3: '#37e6d0',
    cardDesc:
      'A responsive web portal for Baptist International Worship Centre in Accra, Ghana, showcasing weekly service schedules, media archives, and outreach.',
    desc: 'A modern, responsive community platform built for Baptist International Worship Centre in Accra, Ghana. Designed to connect congregants with interactive worship schedules, video and sermon media archives, event announcements, and digital ministry outreach.',
    tech: ['React', 'Netlify', 'Responsive UI', 'Modern CSS'],
    highlights: ['Sermon Archives', 'Service Schedules', 'Mobile First'],
    renderSvg: () => (
      <svg viewBox="0 0 300 440" preserveAspectRatio="none" className="card-svg">
        <defs>
          <linearGradient id="biwc-g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#088395" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="biwc-glow" cx="50%" cy="42%" r="50%">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="170" r="125" fill="url(#biwc-glow)" />
        <g fill="none" stroke="var(--c3)">
          <circle cx="150" cy="170" r="38" strokeWidth="2" opacity="0.8" />
          <circle cx="150" cy="170" r="68" strokeWidth="1.6" opacity="0.55" strokeDasharray="6 4" />
          <circle cx="150" cy="170" r="102" strokeWidth="1.4" opacity="0.4" />
          <circle cx="150" cy="170" r="138" strokeWidth="1.2" opacity="0.25" strokeDasharray="8 6" />
          <circle cx="150" cy="170" r="172" strokeWidth="1" opacity="0.15" />
        </g>
        <g stroke="var(--c3)" strokeWidth="2.2" strokeLinecap="round" opacity="0.85">
          <line x1="150" y1="105" x2="150" y2="235" />
          <line x1="118" y1="145" x2="182" y2="145" />
        </g>
        <circle cx="150" cy="145" r="9" fill="var(--c3)" />
        <path
          d="M60 235 Q150 170 240 235"
          fill="none"
          stroke="var(--c3)"
          strokeWidth="2.6"
          opacity="0.55"
        />
        <path
          d="M40 265 Q150 188 260 265"
          fill="none"
          stroke="var(--c3)"
          strokeWidth="1.8"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    name: 'D-SART',
    tag: 'Climate & Conservation',
    badge: 'Eco Initiative',
    host: 'd-sart-website.vercel.app',
    url: 'https://d-sart-website.vercel.app/',
    a: '#043327',
    b: '#092130',
    c3: '#c8f169',
    cardDesc:
      'An environmental non-profit platform advocating mangrove forest restoration, coastal flood protection, and biodiversity conservation across Ghana.',
    desc: 'An environmental non-profit and climate action initiative dedicated to restoring coastal mangrove wetlands in Ghana. Built to advocate ecosystem preservation, defend coastal communities against erosion and sea surges, and coordinate local volunteer afforestation campaigns.',
    tech: ['React', 'Vercel', 'UI/UX Design', 'SVG Graphics'],
    highlights: ['Mangrove Restoration', 'Coastal Defense', 'Ghana Ecosystems'],
    renderSvg: () => (
      <svg viewBox="0 0 300 440" preserveAspectRatio="none" className="card-svg">
        <defs>
          <linearGradient id="dsart-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="dsart-sun" cx="50%" cy="30%" r="45%">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.38" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="120" r="90" fill="url(#dsart-sun)" />
        <circle cx="150" cy="120" r="48" fill="none" stroke="var(--c3)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.65" />
        <circle cx="150" cy="120" r="22" fill="var(--c3)" opacity="0.4" />
        <g stroke="var(--c3)" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.8">
          <path d="M150 220 C150 165 112 145 80 100" />
          <path d="M150 220 C150 165 188 145 220 100" />
          <path d="M150 220 C140 165 150 135 150 82" />
          <path d="M112 142 C92 128 78 138 62 132" />
          <path d="M188 142 C208 128 222 138 238 132" />
          <path d="M150 220 C122 250 102 275 65 295" />
          <path d="M150 220 C136 260 128 285 112 310" />
          <path d="M150 220 C178 250 198 275 235 295" />
          <path d="M150 220 C164 260 172 285 188 310" />
        </g>
        <path
          d="M0 285 C55 260 115 308 175 282 S255 265 300 285 V440 H0Z"
          fill="url(#dsart-g)"
          opacity="0.55"
        />
        <path
          d="M0 320 C65 295 125 342 190 318 S260 302 300 318 V440 H0Z"
          fill="#042f2e"
          opacity="0.8"
        />
        <path
          d="M0 355 C75 330 145 372 220 348 S280 338 300 348 V440 H0Z"
          fill="#021f1e"
          opacity="0.9"
        />
      </svg>
    ),
  },
  {
    name: 'LARAVEL HUB',
    tag: 'Full-Stack Showcase',
    badge: 'Backend Suite',
    host: 'laravel-mini-projects.onrender.com',
    url: 'https://laravel-mini-projects.onrender.com',
    a: '#3b1008',
    b: '#5a180d',
    c3: '#ff4d2e',
    cardDesc:
      'A multi-app suite of full-stack Laravel applications, demonstrating REST APIs, database relationships, authentication, and cloud deployment on Render.',
    desc: 'A showcase platform hosting a collection of production-ready Laravel mini applications. Features hands-on implementations of relational database architectures, robust RESTful APIs, role-based authentication, CRUD workflows, and automated deployment configured on Render with containerized services.',
    tech: ['PHP / Laravel', 'MySQL', 'Blade & REST', 'Render Cloud'],
    highlights: ['Multi-App Suite', 'REST API Architecture', 'Cloud Deployment'],
    renderSvg: () => (
      <svg viewBox="0 0 300 440" preserveAspectRatio="none" className="card-svg">
        <defs>
          <linearGradient id="lar-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ff2d20" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="lar-glow" cx="50%" cy="38%" r="48%">
            <stop offset="0%" stopColor="var(--c3)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="160" r="115" fill="url(#lar-glow)" />
        <g fill="none" stroke="var(--c3)" strokeWidth="1.2" opacity="0.4">
          <line x1="150" y1="70" x2="220" y2="110" />
          <line x1="150" y1="70" x2="80" y2="110" />
          <line x1="80" y1="110" x2="80" y2="190" />
          <line x1="220" y1="110" x2="220" y2="190" />
          <line x1="150" y1="230" x2="80" y2="190" />
          <line x1="150" y1="230" x2="220" y2="190" />
          <circle cx="150" cy="70" r="5" fill="var(--c3)" />
          <circle cx="220" cy="110" r="4" fill="var(--c3)" />
          <circle cx="80" cy="110" r="4" fill="var(--c3)" />
          <circle cx="80" cy="190" r="4" fill="var(--c3)" />
          <circle cx="220" cy="190" r="4" fill="var(--c3)" />
          <circle cx="150" cy="230" r="5" fill="var(--c3)" />
        </g>
        <g transform="translate(150, 150)">
          <polygon points="0,-45 42,-22 0,0 -42,-22" fill="url(#lar-g)" />
          <polygon points="0,0 42,-22 42,32 0,54" fill="var(--c3)" opacity="0.7" />
          <polygon points="0,0 -42,-22 -42,32 0,54" fill="var(--c3)" opacity="0.4" />
          <path d="M-8,-24 L-16,-16 L-8,-8 M8,-24 L16,-16 L8,-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
        </g>
        <path d="M0 300 Q75 280 150 300 T300 300 V440 H0 Z" fill="url(#lar-g)" opacity="0.35" />
        <path d="M0 335 Q75 315 150 335 T300 335 V440 H0 Z" fill="#2d0a04" opacity="0.8" />
        <path d="M0 370 Q75 350 150 370 T300 370 V440 H0 Z" fill="#170402" opacity="0.9" />
      </svg>
    ),
  },
]

export default function Portfolio() {
  const [cur, setCur] = useState(0)
  const n = PROJECTS.length
  const sxRef = useRef(null)
  const movedRef = useRef(false)

  const goTo = useCallback(
    (k) => {
      setCur(((k % n) + n) % n)
    },
    [n]
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goTo(cur - 1)
      if (e.key === 'ArrowRight') goTo(cur + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [cur, goTo])

  const handlePointerDown = (e) => {
    sxRef.current = e.clientX
    movedRef.current = false
  }

  const handlePointerMove = (e) => {
    if (sxRef.current !== null && Math.abs(e.clientX - sxRef.current) > 10) {
      movedRef.current = true
    }
  }

  const handlePointerUp = (e) => {
    if (sxRef.current === null) return
    const dx = e.clientX - sxRef.current
    sxRef.current = null
    if (Math.abs(dx) > 40) {
      goTo(cur + (dx < 0 ? 1 : -1))
    }
    setTimeout(() => {
      movedRef.current = false
    }, 0)
  }

  const handlePointerCancel = () => {
    sxRef.current = null
  }

  const handleCardClick = (k, url) => {
    if (movedRef.current) return
    if (k === cur) {
      // Center card clicked -> open live site in new tab!
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      // Side card clicked -> bring to center
      goTo(k)
    }
  }

  const h = Math.floor(n / 2)
  const activeProj = PROJECTS[cur]

  return (
    <div className="portfolio-page">
      {/* Creative Dynamic Background matching the active card color */}
      <div id="bgs" aria-hidden="true">
        {PROJECTS.map((p, k) => (
          <div
            key={p.name}
            className={`bgl ${k === cur ? 'on' : ''}`}
            style={{
              '--a': p.a,
              '--b': p.b,
              '--c3': p.c3,
            }}
          >
            <div className="bg-watermark">{p.name}</div>
            <div className="bg-orb bg-orb-1" />
            <div className="bg-orb bg-orb-2" />
            <div className="bg-orb bg-orb-3" />
            <div className="bg-grid" />
            <div className="bg-glow" />
          </div>
        ))}
      </div>

      {/* Top Header with Back Navigation */}
      <div className="top">
        <Link to="/" state={{ fromBack: true }} aria-label="Home">
          ←
        </Link>
        <b>WORK</b>
        <span id="count">
          {String(cur + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
        </span>
      </div>

      {/* 3D Interactive Carousel Stage */}
      <div
        id="stage"
        aria-label="Project slider"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {PROJECTS.map((p, k) => {
          const o = (((k - cur + h) % n) + n) % n - h
          const a = Math.abs(o)
          const isCurrent = k === cur
          const style = {
            '--a': p.a,
            '--b': p.b,
            '--c3': p.c3,
            transform: `translateX(${o * 62}%) translateZ(${-a * 120}px) rotateY(${-o * 26}deg) scale(${1 - a * 0.1})`,
            opacity: a > 1 ? 0 : a ? 0.55 : 1,
            zIndex: 10 - a,
            pointerEvents: a > 1 ? 'none' : 'auto',
          }

          return (
            <div
              key={p.name}
              className={`slide ${isCurrent ? 'active' : ''}`}
              style={style}
              onClick={() => handleCardClick(k, p.url)}
              role="button"
              tabIndex={isCurrent ? 0 : -1}
              aria-label={isCurrent ? `Open ${p.name} website` : `View ${p.name}`}
            >
              <div className="poster">
                {/* Visual Graphic with ambient overlay */}
                <div className="card-graphic">
                  {p.renderSvg()}
                  <div className="card-vignette" />
                </div>

                {/* Card Top Browser Bar */}
                <div className="card-top-bar">
                  <div className="browser-dots">
                    <span className="dot dot-r" />
                    <span className="dot dot-y" />
                    <span className="dot dot-g" />
                  </div>
                  <span className="host-pill">{p.host}</span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-visit-badge"
                    style={{ color: p.c3, borderColor: `${p.c3}55` }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open ${p.name} website directly`}
                  >
                    <span>Visit ↗</span>
                  </a>
                </div>

                {/* Card Body with Detailed Description */}
                <div className="card-body">
                  <div className="card-title-group">
                    <small className="card-tag" style={{ color: p.c3 }}>
                      {p.tag}
                    </small>
                    <h3 className="card-title">{p.name}</h3>
                  </div>

                  {/* Informative description on the card */}
                  <p className="card-desc">{p.cardDesc}</p>

                  {/* Feature Highlights Meta Row */}
                  <div className="card-meta">
                    {p.highlights.map((item) => (
                      <span key={item} className="meta-pill">
                        <i style={{ background: p.c3, boxShadow: `0 0 6px ${p.c3}` }} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Click to open hint on active card */}
                  {isCurrent && (
                    <div className="card-open-hint" style={{ color: p.c3 }}>
                      <span>Click card to visit site ↗</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Active Project Full Details Section */}
      <div id="info" aria-live="polite">
        <div key={activeProj.name} className="in">
          <div className="info-header">
            <span
              className="tag-pill"
              style={{
                color: activeProj.c3,
                borderColor: `${activeProj.c3}44`,
              }}
            >
              <span
                className="pulse-dot"
                style={{
                  background: activeProj.c3,
                  boxShadow: `0 0 10px ${activeProj.c3}`,
                }}
              />
              {activeProj.tag}
            </span>
            <a
              href={activeProj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="host-link"
            >
              {activeProj.host} ↗
            </a>
          </div>

          <h2>{activeProj.name}</h2>
          <p className="full-desc">{activeProj.desc}</p>

          <div className="tech-row">
            <span className="tech-label">Technologies:</span>
            <div className="tech">
              {activeProj.tech.map((t) => (
                <i key={t}>{t}</i>
              ))}
            </div>
          </div>

          <a
            className="visit-btn"
            style={{
              background: activeProj.c3,
              boxShadow: `0 10px 28px -6px ${activeProj.c3}66`,
            }}
            href={activeProj.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Explore Live Site</span>
            <svg
              width="16"
              height="16"
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
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="ctrl">
        <button
          type="button"
          id="prev"
          aria-label="Previous project"
          onClick={() => goTo(cur - 1)}
        >
          ‹
        </button>
        <div className="dots" id="dots">
          {PROJECTS.map((p, k) => (
            <i
              key={p.name}
              className={k === cur ? 'on' : ''}
              style={k === cur ? { background: activeProj.c3, boxShadow: `0 0 10px ${activeProj.c3}` } : {}}
              onClick={() => goTo(k)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${k + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          id="next"
          aria-label="Next project"
          onClick={() => goTo(cur + 1)}
        >
          ›
        </button>
      </div>

      <div className="note">CLICK ANY CARD OR BUTTON TO VISIT LIVE SITE</div>
    </div>
  )
}
