/* Base Reset & Variables */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --bg-color: #0b0f19;
    --card-bg: #121826;
    --card-border: #1e293b;
    --accent-color: #00ff99;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
}

/* Navigation */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(11, 15, 25, 0.85);
    backdrop-filter: blur(10px);
    z-index: 1000;
    border-bottom: 1px solid var(--card-border);
}

.navbar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-main);
    font-family: 'Fira Code', monospace;
}

.logo span {
    color: var(--accent-color);
}

.nav-links {
    display: flex;
    gap: 24px;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--accent-color);
}

/* Sections General */
section {
    padding: 100px 24px 80px;
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    margin-bottom: 40px;
}

.section-title p {
    color: var(--accent-color);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: 'Fira Code', monospace;
    margin-bottom: 8px;
}

.section-title h2 {
    font-size: 2.25rem;
    font-weight: 700;
}

.section-title h2 span {
    color: var(--accent-color);
    text-shadow: 0 0 12px rgba(0, 255, 153, 0.25);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 120px;
}

.hero-content {
    max-width: 700px;
}

.hero .small-title {
    color: var(--accent-color);
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 2px;
    font-family: 'Fira Code', monospace;
    margin-bottom: 16px;
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
}

.hero h1 span {
    color: var(--accent-color);
    text-shadow: 0 0 15px rgba(0, 255, 153, 0.3);
}

.hero .description {
    color: var(--text-muted);
    font-size: 1.15rem;
    margin-bottom: 32px;
}

.buttons {
    display: flex;
    gap: 16px;
}

.btn, .btn-outline {
    padding: 12px 28px;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn {
    background-color: var(--accent-color);
    color: #0b0f19;
    box-shadow: 0 0 15px rgba(0, 255, 153, 0.2);
}

.btn:hover {
    background-color: #00cc7a;
    transform: translateY(-2px);
}

.btn-outline {
    border: 1px solid var(--card-border);
    color: var(--text-main);
    background-color: var(--card-bg);
}

.btn-outline:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-2px);
}

/* Project Section */
.project {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 32px;
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 40px;
}

.project-text h3, .technology h3 {
    font-size: 1.25rem;
    margin-bottom: 16px;
    color: var(--text-main);
}

.project-text p {
    color: var(--text-muted);
    margin-bottom: 16px;
}

.tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.tech span, .skills span {
    background-color: rgba(0, 255, 153, 0.08);
    color: var(--accent-color);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-family: 'Fira Code', monospace;
    border: 1px solid rgba(0, 255, 153, 0.2);
}

/* Demo Section & App Window Mockup */
.demo-description {
    color: var(--text-muted);
    margin-top: -30px;
    margin-bottom: 30px;
}

.app-window {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.window-header {
    background-color: #1a2333;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid var(--card-border);
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red { background-color: #ff5f56; }
.dot.yellow { background-color: #ffbd2e; }
.dot.green { background-color: #27c93f; }

.window-title {
    margin-left: 10px;
    font-size: 0.85rem;
    color: var(--text-muted);
    font-family: 'Fira Code', monospace;
}

.video-container video {
    width: 100%;
    display: block;
    max-height: 500px;
    object-fit: cover;
}

/* Features Section (CSS Grid) */
.feature-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
}

.feature-card {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    padding: 30px;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
}

.feature-card .number {
    font-family: 'Fira Code', monospace;
    color: var(--accent-color);
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 12px;
}

.feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: 10px;
}

.feature-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* Process Section (Grid Layout) */
.process {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
}

.process-card {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 10px;
    padding: 24px;
    position: relative;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.process-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-color);
}

.process-num {
    display: inline-block;
    font-family: 'Fira Code', monospace;
    color: var(--accent-color);
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 12px;
}

.process-card h3 {
    font-size: 1.15rem;
    margin-bottom: 8px;
}

.process-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* About Section */
.about {
    max-width: 1200px;
    margin: 0 auto;
}

.about-content {
    background-color: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    padding: 50px;
}

.about-content h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.about-content h2 span {
    color: var(--accent-color);
}

.about-content > p {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 800px;
    margin-bottom: 30px;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

/* Footer */
footer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px;
    border-top: 1px solid var(--card-border);
    display: flex;
    justify-content: space-between;
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Responsive Media Queries */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 12px;
    }
    .nav-links {
        gap: 16px;
    }
    .hero h1 {
        font-size: 2.5rem;
    }
    .project {
        grid-template-columns: 1fr;
        padding: 24px;
    }
    footer {
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-align: center;
    }
}
