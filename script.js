
const SECTIONS = [
    {
        title: "About",
        content: `
        <div class="section-card intro-card">
            <img src="profile.jpeg" class="modal-profile-img" alt="Ajay Dhar Dubey">
            <div>
                <p class="section-kicker">About me</p>
                <p>I’m a final-year Computer Science student and full-stack developer focused on production-grade applications, secure backend systems, real-time communication platforms, and modern responsive interfaces.</p>
                <p class="section-copy">I build with React, Node.js, MongoDB, Socket.io, Docker, and WebRTC, with an emphasis on clarity, maintainability, and recruiter-ready execution.</p>
            </div>
        </div>`,
        color: 0x8b8f98, dist: 22, size: 1.05, speed: 0.012
    },
    {
        title: "Skills",
        content: `
        <div class="skill-grid">
            <div class="skill-card"><h3>Languages</h3><div class="tech-tags">JavaScript, C++, HTML5, CSS3</div></div>
            <div class="skill-card"><h3>Frontend</h3><div class="tech-tags">React 18, Vite, Tailwind CSS, React Router, Axios, Recharts</div></div>
            <div class="skill-card"><h3>Backend</h3><div class="tech-tags">Node.js, Express.js, Socket.io, REST APIs, MVC Architecture, Nodemailer</div></div>
            <div class="skill-card"><h3>Database</h3><div class="tech-tags">MongoDB, MySQL</div></div>
            <div class="skill-card"><h3>Auth & Security</h3><div class="tech-tags">JWT, bcrypt, RBAC, CORS, dotenv</div></div>
            <div class="skill-card"><h3>DevOps & Tools</h3><div class="tech-tags">Docker, Nginx, GitHub Actions CI/CD, Vercel, Render, Git, Postman</div></div>
        </div>`,
        color: 0x00f2ff, dist: 35, size: 1.35, speed: 0.008
    },
    {
        title: "Projects",
        content: `
            <div class="project-grid">
                <article class="project-card">
                    <p class="project-label">Project 01</p>
                    <h3>VIE – Virtual Industry Experience Platform</h3>
                    <p>Role-based SDLC simulation platform with JWT authentication, RBAC, task lifecycle management, Monaco code editor integration, and automated email workflows.</p>
                    <div class="project-tech">React 18 • Node.js • Express • MongoDB • JWT • Docker</div>
                    <div class="project-links"><a href="https://vie-platform.vercel.app" target="_blank" rel="noreferrer">Live Demo</a></div>
                </article>
                <article class="project-card">
                    <p class="project-label">Project 02</p>
                    <h3>P2P File Sharing Web App</h3>
                    <p>Browser-to-browser file transfer application built with WebRTC data channels and no server-side storage for privacy and speed.</p>
                    <div class="project-tech">WebRTC • Node.js • Express.js</div>
                    <div class="project-links"><a href="https://p2p-file-transfer-n03n.onrender.com" target="_blank" rel="noreferrer">Live Demo</a></div>
                </article>
                <article class="project-card">
                    <p class="project-label">Project 03</p>
                    <h3>Real-Time Network Inspector</h3>
                    <p>Full-stack network monitoring system with live packet capture, Socket.io streaming, suspicious traffic detection, REST APIs, and real-time analytics dashboard.</p>
                    <div class="project-tech">C++ • Node.js • React • Socket.io • MongoDB</div>
                    <div class="project-links"><a href="https://github.com/Xtra-stack/real-time-network-inspector" target="_blank" rel="noreferrer">GitHub</a></div>
                </article>
                <article class="project-card">
                    <p class="project-label">Project 04</p>
                    <h3>3D Solar System Portfolio</h3>
                    <p>Interactive 3D solar system portfolio built using Three.js with orbital animations and smooth camera controls.</p>
                    <div class="project-tech">Three.js • JavaScript</div>
                    <div class="project-links"><a href="https://github.com/Xtra-stack/my-portfolio" target="_blank" rel="noreferrer">GitHub</a></div>
                </article>
            </div>`,
        color: 0x4c6fff, dist: 50, size: 1.7, speed: 0.006
    },
    {
        title: "Experience",
        content: `
            <div class="section-card timeline-card">
                <h3>Web Development Intern — Cognifyz Technologies</h3>
                <p class="section-kicker">Jul 2025 – Aug 2025</p>
                <ul>
                    <li>Built responsive UI components.</li>
                    <li>Integrated REST APIs.</li>
                    <li>Worked with Git/GitHub workflows.</li>
                    <li>Improved frontend responsiveness and usability.</li>
                </ul>
            </div>`,
        color: 0xff8b4a, dist: 68, size: 1.25, speed: 0.004
    },
    {
        title: "Open Source",
        content: `
            <div class="section-card">
                <p class="section-kicker">Open source contributions</p>
                <ul>
                    <li>Contributed updatePreferences API with validation and testing.</li>
                    <li>Worked on authentication, cart, wishlist, and middleware systems in CleanerX.</li>
                </ul>
            </div>`,
        color: 0xc9a26b, dist: 85, size: 1.3, speed: 0.003
    },
    {
        title: "Education",
        content: `
            <div class="section-card">
                <p class="section-kicker">Academic background</p>
                <h3>B.Tech – Computer Science & Engineering</h3>
                <p>Bundelkhand University</p>
                <p>CGPA: 6.95/10 | 2026</p>
                <div class="divider-line"></div>
                <h3>10th – UP Board</h3>
                <p>77.83% | 2018</p>
            </div>`,
        color: 0x9b8cff, dist: 102, size: 1.45, speed: 0.0018, hasRings: true
    },
    {
        title: "Contact",
        content: `
            <div class="section-card contact-card">
                <p class="section-kicker">Let’s talk</p>
                <p>Open to software engineering internships and full-stack developer roles.</p>
                <p><strong>Email:</strong> <a href="mailto:ajy2bey@gmail.com">ajy2bey@gmail.com</a></p>
                <p><strong>Phone:</strong> +91 8188925792</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Xtra-stack" target="_blank" rel="noreferrer">github.com/Xtra-stack</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/ajay-dubey-7a8939260" target="_blank" rel="noreferrer">linkedin.com/in/ajay-dubey-7a8939260</a></p>
                <form class="contact-form" id="contact-form">
                    <div class="form-row">
                        <input type="text" placeholder="Your name" required>
                        <input type="email" placeholder="Your email" required>
                    </div>
                    <textarea rows="4" placeholder="Your message" required></textarea>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>`,
        color: 0x6dd6d0, dist: 118, size: 2.0, speed: 0.0014, hasRings: true
    }
];

/**
 * THREE.JS ENGINE LOGIC
 */
let scene, camera, renderer, sun, starField, asteroidBelt;
const planets = [];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let isZoomed = false;
let activeIdx = -1;
let homeCameraState = { fov: 60, position: { x: 0, y: 45, z: 120 } };

// --- Helper Functions (Defined before init) ---

function createNoiseTexture(colorBase) {
    const canvas = document.createElement('canvas');
    canvas.width = 512; canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const color = new THREE.Color(colorBase);
    ctx.fillStyle = `#${color.getHexString()}`;
    ctx.fillRect(0,0,512,512);
    for(let i=0; i<2500; i++) {
        const x = Math.random() * 512;
        const y = Math.random() * 512;
        ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.4})`;
        ctx.beginPath(); ctx.arc(x,y,Math.random()*1.5,0,Math.PI*2); ctx.fill();
    }
    return new THREE.CanvasTexture(canvas);
}

function createGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(64,64,0,64,64,64);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.2, 'rgba(255,240,150,0.6)');
    grad.addColorStop(0.5, 'rgba(255,200,0,0.2)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad; ctx.fillRect(0,0,128,128);
    return new THREE.CanvasTexture(canvas);
}

function getHomeCameraState() {
    if (window.innerWidth <= 480) {
        return { fov: 68, position: { x: 0, y: 40, z: 104 } };
    }

    if (window.innerWidth <= 768) {
        return { fov: 62, position: { x: 0, y: 42, z: 112 } };
    }

    return { fov: 60, position: { x: 0, y: 45, z: 120 } };
}

// --- Main Engine ---

function init() {
    // Basic Scene Setup
    scene = new THREE.Scene();
    homeCameraState = getHomeCameraState();
    camera = new THREE.PerspectiveCamera(homeCameraState.fov, window.innerWidth / window.innerHeight, 0.1, 2000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.body.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.15));
    const sunLight = new THREE.PointLight(0xffffff, 3.5, 400);
    scene.add(sunLight);

    // The Sun
    const sunGeom = new THREE.SphereGeometry(7, 64, 64);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd44 });
    sun = new THREE.Mesh(sunGeom, sunMat);
    scene.add(sun);

    // Sun Glow effect
    for(let i=0; i<3; i++) {
        const spriteMat = new THREE.SpriteMaterial({
            map: createGlowTexture(), color: 0xffaa00, transparent: true, opacity: 0.5 - (i*0.1), blending: THREE.AdditiveBlending
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.scale.set(22 + i*6, 22 + i*6, 1);
        sun.add(sprite);
    }

    // Generate Planets
    SECTIONS.forEach((data, i) => {
        const orbitGeom = new THREE.RingGeometry(data.dist - 0.1, data.dist + 0.1, 128);
        const orbitMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.1, side: THREE.DoubleSide });
        const orbit = new THREE.Mesh(orbitGeom, orbitMat);
        orbit.rotation.x = Math.PI/2;
        scene.add(orbit);

        const pGeom = new THREE.SphereGeometry(data.size, 32, 32);
        const pMat = new THREE.MeshStandardMaterial({ 
            map: createNoiseTexture(data.color),
            roughness: 0.8, metalness: 0.3 
        });
        const mesh = new THREE.Mesh(pGeom, pMat);
        
        // Atmosphere Glow around planets
        const atGeom = new THREE.SphereGeometry(data.size * 1.08, 32, 32);
        const atMat = new THREE.MeshBasicMaterial({ color: data.color, transparent: true, opacity: 0.15, side: THREE.BackSide });
        mesh.add(new THREE.Mesh(atGeom, atMat));

        // Rings (Saturn style)
        if(data.hasRings) {
            const ringGeom = new THREE.RingGeometry(data.size * 1.5, data.size * 2.2, 64);
            const ringMat = new THREE.MeshBasicMaterial({ color: data.color, transparent: true, opacity: 0.3, side: THREE.DoubleSide });
            const ring = new THREE.Mesh(ringGeom, ringMat);
            ring.rotation.x = Math.PI/2.5;
            mesh.add(ring);
        }

        planets.push({ mesh, dist: data.dist, speed: data.speed, angle: Math.random() * Math.PI*2, index: i, size: data.size });
        scene.add(mesh);
    });

    // Background stars
    const starCount = 8000;
    const sGeom = new THREE.BufferGeometry();
    const sPos = new Float32Array(starCount * 3);
    for(let i=0; i<starCount * 3; i++) sPos[i] = (Math.random() - 0.5) * 1500;
    sGeom.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
    starField = new THREE.Points(sGeom, new THREE.PointsMaterial({ size: 0.5, color: 0xffffff, transparent: true, opacity: 0.8 }));
    scene.add(starField);

    // Asteroid belt
    const astCount = 400;
    const astGeom = new THREE.BufferGeometry();
    const astPos = new Float32Array(astCount * 3);
    for(let i=0; i<astCount; i++) {
        const a = Math.random() * Math.PI * 2;
        const d = 55 + Math.random() * 5;
        astPos[i*3] = Math.cos(a) * d;
        astPos[i*3+1] = (Math.random() - 0.5) * 2;
        astPos[i*3+2] = Math.sin(a) * d;
    }
    astGeom.setAttribute('position', new THREE.BufferAttribute(astPos, 3));
    asteroidBelt = new THREE.Points(astGeom, new THREE.PointsMaterial({ size: 0.15, color: 0x888888 }));
    scene.add(asteroidBelt);

    camera.position.set(homeCameraState.position.x, homeCameraState.position.y, homeCameraState.position.z);
    camera.lookAt(0,0,0);

    window.addEventListener('resize', onResize);
    window.addEventListener('click', onPlanetClick);
    window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    setupUI();
    animate();
}

function onPlanetClick() {
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(planets.map(p => p.mesh));
    if(hits.length > 0) {
        const p = planets.find(pl => pl.mesh === hits[0].object);
        viewNode(p.index);
    }
}

/**
 * UPDATED NAVIGATION
 */
function viewNode(idx) {
    gsap.killTweensOf(camera);
    gsap.killTweensOf(camera.position);

    if(idx === -1) { resetView(); return; }

    const p = planets[idx];
    const data = SECTIONS[idx];
    const modal = document.getElementById('content-modal');
    const hero = document.getElementById('hero');

    if (isZoomed) {
        // Already at a planet, switch content first
        gsap.to(modal, { opacity: 0, scale: 0.7, duration: 0.3, onComplete: () => {
            modal.style.display = 'none';
            proceed();
        }});
    } else {
        // Coming from Hero
        hero.classList.add('hidden');
        proceed();
    }

    function proceed() {
        isZoomed = true; 
        activeIdx = idx; 
        updateHUD(idx);

        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-text').innerHTML = data.content;

        // Contact listener
        if(data.title === "Contact") {
            setTimeout(() => {
                const form = document.getElementById('contact-form');
                if(form) {
                    form.onsubmit = (e) => {
                        e.preventDefault();
                        document.getElementById('modal-inner').innerHTML = `
                            <h2 style="color:#00f2ff">Message Received</h2>
                            <p class="body-text">Thanks for reaching out. I’ll respond as soon as possible.</p>
                            <button onclick="window.location.reload()" class="submit-btn" style="width:100%">Return to Portfolio</button>
                        `;
                    };
                }
            }, 100);
        }

        const tl = gsap.timeline();
        // Camera Warp
        tl.to(camera, { fov: 28, duration: 1.5, ease: "power4.inOut", onUpdate: () => camera.updateProjectionMatrix() });
        // Target positioning
        const closeDist = p.size * 2 + 5; 
        tl.to(camera.position, { 
            x: p.mesh.position.x + closeDist, 
            y: p.mesh.position.y + 1.5, 
            z: p.mesh.position.z + closeDist, 
            duration: 1.8, 
            ease: "expo.inOut" 
        }, 0);
        
        // Modal Pop
        tl.set(modal, { display: 'block', opacity: 0, scale: 0.4, x: 100 }, "-=0.2");
        tl.to(modal, { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.4)" });
    }
}

function resetView() {
    gsap.killTweensOf(camera);
    gsap.killTweensOf(camera.position);

    isZoomed = false; activeIdx = -1;
    const modal = document.getElementById('content-modal');
    const hero = document.getElementById('hero');
    updateHUD(-1);

    gsap.to(modal, {
        opacity: 0, scale: 0.8, duration: 0.4,
        onComplete: () => { 
            modal.style.display = 'none'; 
            hero.classList.remove('hidden'); 
        }
    });

    homeCameraState = getHomeCameraState();
    gsap.to(camera, { fov: homeCameraState.fov, duration: 1.5, ease: "power3.inOut", onUpdate: () => camera.updateProjectionMatrix() });
    gsap.to(camera.position, {
        x: homeCameraState.position.x,
        y: homeCameraState.position.y,
        z: homeCameraState.position.z,
        duration: 1.6,
        ease: "power3.inOut"
    });
}

function setupUI() {
    const topLinks = document.querySelectorAll('.top-link');
    topLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.index);
            if (idx === -1) {
                resetView();
            } else {
                viewNode(idx);
            }
        });
    });

    const dots = document.querySelectorAll('.hud-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.index);
            if (idx === -1) resetView(); else viewNode(idx);
        });
    });

    const heroContactBtn = document.getElementById('hero-contact-btn');
    if (heroContactBtn) {
        heroContactBtn.addEventListener('click', () => viewNode(6));
    }

    const closeBtn = document.getElementById('close-btn');
    if(closeBtn) closeBtn.addEventListener('click', resetView);
}

function updateHUD(idx) {
    const dots = document.querySelectorAll('.hud-dot');
    dots.forEach(d => d.classList.toggle('active', parseInt(d.dataset.index) === idx));

    const topLinks = document.querySelectorAll('.top-link');
    topLinks.forEach(link => link.classList.toggle('active', parseInt(link.dataset.index) === idx));
}

function onResize() {
    homeCameraState = getHomeCameraState();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (!isZoomed) {
        camera.fov = homeCameraState.fov;
        camera.position.set(homeCameraState.position.x, homeCameraState.position.y, homeCameraState.position.z);
        camera.lookAt(0,0,0);
    }
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;
    
    planets.forEach(p => {
        if(!isZoomed || activeIdx !== p.index) {
            p.angle += p.speed;
        }
        p.mesh.position.set(Math.cos(p.angle)*p.dist, 0, Math.sin(p.angle)*p.dist);
        p.mesh.rotation.y += 0.008;
    });

    sun.rotation.y += 0.002;
    starField.rotation.y += 0.00005;
    asteroidBelt.rotation.y += 0.0008;

    if(isZoomed && activeIdx !== -1 && planets[activeIdx]) {
        camera.lookAt(planets[activeIdx].mesh.position);
        camera.position.x += Math.sin(time) * 0.003;
        camera.position.y += Math.cos(time * 0.5) * 0.003;
    } else {
        camera.lookAt(0,0,0);
        camera.position.x += (mouse.x * 12 - camera.position.x) * 0.025;
    }
    renderer.render(scene, camera);
}

// Initial Kick-off
window.onload = () => {
    // Double check that THREE and GSAP are loaded
    if(typeof THREE !== 'undefined' && typeof gsap !== 'undefined') {
        init();
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            gsap.to(loadingScreen, {
                opacity: 0,
                duration: 0.45,
                delay: 0.35,
                onComplete: () => {
                    loadingScreen.classList.add('is-hidden');
                }
            });
        }
    } else {
        console.error("Critical libraries (Three.js or GSAP) missing. Check index.html script tags.");
    }
};