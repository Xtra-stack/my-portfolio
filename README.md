🌌 Immersive 3D Solar System Portfolio

A high-performance, interactive 3D portfolio built with Three.js and GSAP, featuring a cinematic interplanetary navigation system. This project serves as a digital universe for Ajay Dhar Dubey, a Final Year Computer Science student at Bundelkhand University.

🚀 Key Features

Cinematic Orbital Entry: Advanced camera logic using GSAP to warp the Field of View (FOV) and "enter" a planet's atmosphere upon selection.

Procedural Realism:

Planets use dynamic HTML5 Canvas noise textures to simulate rocky surfaces and craters.

Volumetric Sun effect using layered additive blending sprites.

Procedural starfield with 8,000+ points and an asteroid belt.

Seamless Navigation: Supports forward (Core to Planet), backward (Planet to Core), and interplanetary (Planet to Planet) transitions without animation clashing.

Cyber-Glass UI: A modern glassmorphism overlay using backdrop-filter: blur() for high-contrast readability in a space theme.

Interactive Feedback Node: A dedicated planet with rings featuring a functional transmission (feedback) form.

🛠️ Tech Stack

Graphics: Three.js (WebGL Engine)

Animation: GSAP (GreenSock Animation Platform)

UI/UX: HTML5, CSS3 (Modern Flexbox/Grid, Glassmorphism)

Fonts: Plus Jakarta Sans

📂 Project Structure

├── index.html    # Entry point & UI Structure
├── style.css     # Cyber-glass layouts & Animations
├── script.js    # 3D Engine, Orbital Physics & Camera Logic
└── profile.jpg   # User profile photo (Personal Asset)


💻 Local Installation

To run this project locally without encountering CORS errors or script issues:

Clone the project or download the files.

Setup personal assets:

Place your photo in the project folder and name it profile.jpg.

Run a Local Server:

Recommended: Open the folder in VS Code, install the Live Server extension, right-click index.html and select "Open with Live Server".

Alternatively, using Python: python -m http.server 8000

🎨 Customization

Changing Section Content

All section data (titles, text, colors) is managed in the SECTIONS array at the top of script.js.

Modifying Planet Physics

You can adjust the speed and dist properties in the SECTIONS array to change how fast or far planets orbit the Sun.

📡 Connect

Developer: Ajay Dhar Dubey

GitHub: @Xtra-stack

Email: ajy2bey@gmail.com

Status: Final Year B.Tech (CSE) student looking for opportunities.

Created with passion for 3D Web & Interactive Experiences.
