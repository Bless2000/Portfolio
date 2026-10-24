import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as THREE from 'three'
import './Home.css'

let hasLoadedOnce = false

export default function Home() {
  const location = useLocation()
  const canvasRef = useRef(null)
  const shouldShowLoader = useRef(!hasLoadedOnce && !location.state?.fromBack).current
  const [loaded, setLoaded] = useState(!shouldShowLoader)
  const [progress, setProgress] = useState(shouldShowLoader ? 0 : 100)

  useEffect(() => {
    let animationFrameId
    const canvas = canvasRef.current
    if (!canvas) return

    let W = window.innerWidth
    let H = window.innerHeight
    const ASP = 1024 / 1536

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))

    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 50)
    cam.position.z = 5

    let ready = false
    const t0 = Date.now()

    const mgr = new THREE.LoadingManager(() => {
      ready = true
    })

    const tl = new THREE.TextureLoader(mgr)
    const tChar = tl.load('/assets/char.webp')
    const tBg = tl.load('/assets/bg.webp')
    const tBgW = tl.load('/assets/bgwide.webp')
    const tDepth = tl.load('/assets/depth.png')

    tDepth.generateMipmaps = false
    tDepth.minFilter = THREE.LinearFilter

    const uLook = { value: new THREE.Vector2(0, 0) }
    const bOn = { value: 1 }
    const bFw = { value: 0.05 }
    const cFw = { value: 0.05 }
    const one = { value: 1 }

    const fade =
      'float ed=mix(1.,smoothstep(0.,uFw,vUv.x)*smoothstep(1.,1.-uFw,vUv.x),uOn);'
    const un = 'uniform float uOn;uniform float uFw;'

    const bgMat = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: { uMap: { value: tBg }, uOn: bOn, uFw: bFw },
      vertexShader:
        'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:
        un +
        'uniform sampler2D uMap;varying vec2 vUv;void main(){' +
        fade +
        'vec4 c=texture2D(uMap,vUv);gl_FragColor=vec4(c.rgb,ed);}',
    })

    const chMat = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uMap: { value: tChar },
        uDepth: { value: tDepth },
        uLook: uLook,
        uOn: one,
        uFw: cFw,
      },
      vertexShader:
        'uniform sampler2D uDepth;uniform vec2 uLook;varying vec2 vUv;void main(){vUv=uv;vec3 p=position;float d=texture2D(uDepth,uv).r;' +
        'vec2 q=(uv-vec2(.5,.72))/vec2(.30,.23);float w=1.-smoothstep(.55,1.,length(q));' +
        'p.x+=uLook.x*.014*w;p.y-=uLook.y*.008*w;p.z+=d*.22+w*.03;' +
        'gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}',
      fragmentShader:
        un +
        'uniform sampler2D uMap;uniform vec2 uLook;varying vec2 vUv;void main(){vec2 uv=vUv;vec2 S=vec2(1024.,1536.);' +
        'vec2 eL=vec2(443.,1015.),eR=vec2(571.,1023.);' +
        'vec2 sh=vec2(uLook.x*8.,-uLook.y*6.)/S;' +
        'float kL=1.-smoothstep(15.,29.,length((uv*S)-eL));float kR=1.-smoothstep(15.,29.,length((uv*S)-eR));' +
        'uv-=sh*max(kL,kR);' +
        fade +
        'vec4 c=texture2D(uMap,uv);gl_FragColor=vec4(c.rgb,c.a*ed);}',
    })

    const geo = new THREE.PlaneGeometry(1, 1, 96, 144)
    const bg = new THREE.Mesh(geo, bgMat)
    bg.renderOrder = 0
    scene.add(bg)

    const grp = new THREE.Group()
    scene.add(grp)
    const ch = new THREE.Mesh(geo, chMat)
    ch.renderOrder = 1
    grp.add(ch)

    let tx = 0
    let ty = 0
    let cx = 0
    let cy = 0

    function handleResize() {
      W = window.innerWidth
      H = window.innerHeight
      renderer.setSize(W, H, false)
      cam.aspect = W / H
      cam.updateProjectionMatrix()

      const vis = 2 * 5 * Math.tan(THREE.MathUtils.degToRad(15))
      const land = W / H > 1.15
      if (land) {
        const A = 2048 / 1152
        const bh = Math.max(vis, (vis * cam.aspect) / A) * 1.04
        const ph = vis * 1.34
        bgMat.uniforms.uMap.value = tBgW
        bOn.value = 0
        bg.scale.set(bh * A, bh, 1)
        ch.scale.set(ph * ASP, ph, 1)
        ch.position.y = -vis * 0.04
        cFw.value = 0.12
      } else {
        const p2 = vis * 1.03
        bgMat.uniforms.uMap.value = tBg
        bOn.value = 1
        bg.scale.set(p2 * ASP, p2, 1)
        ch.scale.set(p2 * ASP, p2, 1)
        ch.position.y = 0
        cFw.value = 0.05
      }
    }

    const onPointerMove = (e) => {
      tx = ((e.clientX / W) * 2 - 1) * 1.5
      ty = -((e.clientY / H) * 2 - 1) * 1.5
    }

    const onDeviceOrientation = (e) => {
      if (e.gamma !== null && e.beta !== null) {
        tx = THREE.MathUtils.clamp(e.gamma / 25, -1.5, 1.5)
        ty = THREE.MathUtils.clamp((e.beta - 45) / 25, -1.5, 1.5)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('deviceorientation', onDeviceOrientation)
    handleResize()

    if (location.state?.fromBack) {
      window.history.replaceState({}, '')
    }

    // Loading interval - only runs on first site load
    let progressIv
    if (shouldShowLoader) {
      let curP = 0
      progressIv = setInterval(() => {
        curP = Math.min(curP + Math.random() * 14, ready ? 100 : 85)
        setProgress(Math.round(curP))
        if (ready && curP >= 100 && Date.now() - t0 > 1000) {
          clearInterval(progressIv)
          setLoaded(true)
          hasLoadedOnce = true
        }
      }, 120)
    } else {
      hasLoadedOnce = true
    }

    function loop() {
      animationFrameId = requestAnimationFrame(loop)
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      uLook.value.set(cx, cy)
      renderer.render(scene, cam)
    }
    loop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (progressIv) clearInterval(progressIv)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('deviceorientation', onDeviceOrientation)

      geo.dispose()
      bgMat.dispose()
      chMat.dispose()
      tChar.dispose()
      tBg.dispose()
      tBgW.dispose()
      tDepth.dispose()
      renderer.dispose()
    }
  }, [location.state, shouldShowLoader])

  return (
    <div className="home-container">
      {shouldShowLoader && (
        <div className={`home-loader ${loaded ? 'done' : ''}`}>
          <img src="/assets/logo.webp" alt="BA logo" />
          <div className="bar">
            <i style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
      <main id="hero">
        <div id="fill" />
        <canvas id="c" ref={canvasRef} />
        <div className="top">
          <img src="/assets/logo_s.webp" alt="BA" />
          <span>IT STUDENT · WEB &amp; BACKEND (FOR NOW)</span>
        </div>
        <Link className="node" id="n-about" to="/about">
          <span className="ic">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1-4.5 4-6 8-6s7 1.5 8 6" />
            </svg>
          </span>
          About
        </Link>
        <Link className="node" id="n-work" to="/portfolio">
          <span className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
            </svg>
          </span>
          Portfolio
        </Link>
        <Link className="node" id="n-contact" to="/contact">
          <span className="ic">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>
          Contact
        </Link>
        <div className="hint" id="hint">
          Tap an icon to explore
        </div>
      </main>
    </div>
  )
}
