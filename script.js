
const SECTIONS = [
    {
        title: "Biography",
        content: `
        <img src="profile.jpeg" class="modalprofile-img" alt="Ajay Dhar Dubey">
        I am a 4th-year (Final Year) B.Tech CSE student at Bundelkhand University. My journey is defined by a deep curiosity for how code creates immersive experiences. I focus on building real-time, decentralized, and highly interactive applications that push the boundaries of modern browsers. Currently seeking opportunities to apply my full-stack skills in professional environments.`,
        color: 0x505050, dist: 22, size: 0.9, speed: 0.012
    },
    {
        title: "Technology Stack",
        content: `
        <div class="tech-grid">
            <div class="tech-category">
                <h3>Frontend</h3>
                <div class="tech-tags">React, JavaScript, HTML5, CSS3, Tailwind, Bootstrap</div>
            </div>
            <div class="tech-category">
                <h3>Backend</h3>
                <div class="tech-tags">Node.js, Express</div>
            </div>
            <div class="tech-category">
                <h3>Databases</h3>
                <div class="tech-tags">MongoDB, MySQL, PostgreSQL</div>
            </div>
            <div class="tech-category">
                <h3>Real-time</h3>
                <div class="tech-tags">WebRTC, Socket.io</div>
            </div>
            <div class="tech-category">
                <h3>Tools</h3>
                <div class="tech-tags">Git, GitHub, npm, VS Code</div>
            </div>
            <div class="tech-category learning-node">
                <h3>Currently Learning</h3>
                <div class="tech-tags">Blockchain (Hyperledger), libp2p, TypeScript, Docker</div>
            </div>
        </div>`,
        color: 0x00f2ff, dist: 35, size: 1.4, speed: 0.008
    },
    {
        title: "Project Nexus",
        content: `
            <p><strong>P2P File Transfer:</strong> A WebRTC-based high-speed direct browser sharing application.</p>
            <p><strong>Decentralized Storage:</strong> A blockchain-inspired system for immutable and secure data handling.</p>
            <p><strong>3D Solar Environment:</strong> The immersive Three.js portfolio system you are currently navigating.</p>
        `,
        color: 0x4477ff, dist: 50, size: 1.6, speed: 0.006
    },
    {
        title: "Academic Path",
        content: `
            <p><strong>B.Tech in Computer Science & Engineering</strong></p>
            <p>Bundelkhand University | Uttar Pradesh, India</p>
            <p>Class of 2026/27 (Final Year Undergrad). Focus on Algorithm design, Database optimization, and Scalable Architectures.</p>
        `,
        color: 0xff6644, dist: 68, size: 1.2, speed: 0.004
    },
    {
        title: "Signal (Contact)",
        content: `
            <p>Interested in collaborating on real-world impactful projects or discussing job opportunities?</p>
            <p>📧 <strong>ajy2bey@gmail.com</strong></p>
            <p>📞 <strong>+91 8188925792</strong></p>
            <p>GitHub: <a href="https://github.com/Xtra-stack" target="_blank" style="color:#00f2ff; text-decoration: none;">github.com/Xtra-stack</a></p>
        `,
        color: 0xccaa88, dist: 85, size: 3.5, speed: 0.002
    },
    {
        title: "Feedback Node",
        content: `
        <p>Your insights help me calibrate my professional orbit. Leave a message below.</p>
        <form class="feedback-form" id="feedback-form">
            <div class="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name" required>
            </div>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="email@example.com" required>
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Your thoughts..." required></textarea>
            </div>
            <button type="submit" class="submit-btn">Transmit Message</button>
        </form>
        `,
        color: 0x9c88ff, dist: 105, size: 2.2, speed: 0.0015, hasRings: true
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

// --- Main Engine ---

function init() {
    // Basic Scene Setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    
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

    camera.position.set(0, 45, 120);
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

        // Feedback listener
        if(data.title === "Feedback Node") {
            setTimeout(() => {
                const form = document.getElementById('feedback-form');
                if(form) {
                    form.onsubmit = (e) => {
                        e.preventDefault();
                        document.getElementById('modal-inner').innerHTML = `
                            <h2 style="color:#00f2ff">Transmission Successful</h2>
                            <p class="body-text">Thank you, Ajay. Signal received.</p>
                            <button onclick="window.location.reload()" class="submit-btn" style="width:100%">Return to Station</button>
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

    gsap.to(camera, { fov: 60, duration: 1.5, ease: "power3.inOut", onUpdate: () => camera.updateProjectionMatrix() });
    gsap.to(camera.position, { x: 0, y: 45, z: 120, duration: 1.6, ease: "power3.inOut" });
}

function setupUI() {
    const dots = document.querySelectorAll('.hud-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.index);
            if (idx === -1) resetView(); else viewNode(idx);
        });
    });
    const closeBtn = document.getElementById('close-btn');
    if(closeBtn) closeBtn.addEventListener('click', resetView);
}

function updateHUD(idx) {
    const dots = document.querySelectorAll('.hud-dot');
    dots.forEach(d => d.classList.toggle('active', parseInt(d.dataset.index) === idx));
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
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
    } else {
        console.error("Critical libraries (Three.js or GSAP) missing. Check index.html script tags.");
    }
};