import React from 'react';
import profileImg from '../images/sk.jpeg';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const App = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-left">
          <span className="logo">SA</span>
          <div className="nav-title">
            <h1>Shakib Ahmed</h1>
            <p>Software Engineer • AI Engineer • Entrepreneur</p>
          </div>
        </div>
        <nav className="nav-links">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)}>
              {s.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-text">
            <p className="eyebrow">Managing Director @ BSCL</p>
            <h2>
              Building intelligent systems
              <span> that think, learn, and inspire.</span>
            </h2>
            <p className="hero-subtitle">
              I&apos;m a Software Engineer, AI Engineer, and Entrepreneur, passionate about
              Machine Learning, Deep Learning, NLP, and Computer Vision — turning bold ideas
              into real-world intelligent solutions.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                Let&apos;s collaborate
              </button>
              <button className="btn-secondary" onClick={() => scrollTo('projects')}>
                View projects
              </button>
            </div>
            <div className="hero-tags">
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>NLP</span>
              <span>Computer Vision</span>
            </div>
          </div>

          <aside className="hero-card">
            <div className="hero-avatar-wrapper">
              <img src={profileImg} alt="Portrait of Shakib Ahmed" className="hero-avatar" />
              <div className="hero-avatar-glow" />
            </div>
            <div className="hero-card-body">
              <p className="hero-quote">
                &quot;Inspired by J.A.R.V.I.S., I love building AI that feels less like a tool
                and more like a smart companion.&quot;
              </p>
              <ul className="hero-meta">
                <li>
                  <span>Role</span>
                  <strong>Managing Director, BSCL</strong>
                </li>
                <li>
                  <span>Focus</span>
                  <strong>AI Systems & Intelligent Products</strong>
                </li>
                <li>
                  <span>Location</span>
                  <strong>Bangladesh</strong>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="about" className="section">
          <h3>About</h3>
          <p>
            I&apos;m currently studying Software Engineering at Daffodil International University,
            where I explore how AI can transform industries and everyday life. My journey is
            driven by curiosity, creativity, and a relentless desire to turn science fiction
            into practical, impactful technology.
          </p>
          <p>
            With hands-on experience in AI model development, deployment, and data-driven problem
            solving, I bridge the gap between research and real-world products. I believe great
            technology doesn&apos;t just work — it should feel intuitive, human, and inspiring.
          </p>
        </section>

        <section id="experience" className="section">
          <h3>Experience</h3>
          <div className="card">
            <div className="card-header">
              <h4>Managing Director</h4>
              <span className="badge">Bangladesh Software Company Limited (BSCL)</span>
            </div>
            <p>
              Leading teams to design and deliver AI-powered software solutions, from idea to
              deployment. I balance technical depth with leadership — aligning business goals,
              engineering excellence, and user experience.
            </p>
            <ul className="list">
              <li>Architecting ML/DL pipelines for production environments</li>
              <li>Driving innovation across NLP and Computer Vision projects</li>
              <li>Mentoring engineers and fostering a growth-focused culture</li>
            </ul>
          </div>
        </section>

        <section id="education" className="section">
          <h3>Education</h3>
          <div className="education-cards">
            <div className="card">
              <h4>Daffodil International University</h4>
              <p className="muted">B.Sc. in Software Engineering</p>
              <p>
                Exploring the intersection of software engineering and artificial intelligence —
                from algorithms and systems design to building intelligent applications that solve
                real problems.
              </p>
            </div>
            <div className="card">
              <h4>Dhanbari Govt. College, Tangail, Dhaka</h4>
              <p className="muted">Higher Secondary Certificate (HSC)</p>
              <p>
                <strong>GPA:</strong> 5.00 (out of 5.00) | <strong>Year of Completion:</strong> 2021
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h3>Skills & Tech Stack</h3>
          <div className="grid">
            <div className="card">
              <h4>Technical Skills</h4>
              <ul className="list">
                <li><strong>Machine Learning (ML)</strong> – Model development, evaluation, and deployment</li>
                <li><strong>Deep Learning</strong> – CNNs, LSTMs, RNNs, Transfer Learning, Object Detection (YOLO)</li>
                <li><strong>Natural Language Processing (NLP)</strong> – Custom chatbots, text generation, and LLMs</li>
                <li><strong>Computer Vision</strong> – Gesture recognition, lip reading, image classification</li>
                <li><strong>Programming Languages</strong> – Python (Core), familiarity with CVZone, OpenCV, and more</li>
                <li><strong>Data Analysis</strong> – Data visualization and interpretation for informed decision-making</li>
              </ul>
            </div>
            <div className="card">
              <h4>🚀 Soft Skills</h4>
              <ul className="list">
                <li><strong>Problem Solving</strong> – Tackling real-world challenges with smart tech solutions</li>
                <li><strong>Leadership</strong> – Team lead experience in international and national competitions</li>
                <li><strong>Communication</strong> – Clear, effective, and adaptable across teams and audiences</li>
                <li><strong>Adaptability</strong> – Quick learner, flexible in dynamic environments</li>
                <li><strong>Continuous Learning</strong> – Passionate about staying updated with AI & tech trends</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="leadership" className="section">
          <h3>Leadership & Competitions</h3>
          <div className="card">
            <p>
              I&apos;ve led teams in both national and international competitions, combining
              strong communication, adaptability, and a growth mindset to achieve success. Whether
              it&apos;s a hackathon, AI challenge, or product pitch, I enjoy rallying people
              around ambitious ideas and executing under pressure.
            </p>
            <p>
              I bring a lively, fun-loving energy to every team — because I believe the best AI
              projects are built not just with great code, but with enthusiasm, trust, and shared
              curiosity.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <h3>Projects & Learning</h3>
          <div className="grid">
            <div className="card">
              <h4>📚 Currently Learning</h4>
              <ul className="pill-list">
                <li>LLMs</li>
                <li>NLP</li>
                <li>Generative AI</li>
                <li>Transformers</li>
                <li>Deep Learning</li>
              </ul>
            </div>
            <div className="card">
              <h4>🔭 Active Projects</h4>
              <p>
                Building AI-driven apps, image classification, and text generation systems.
                Exploring the cutting edge of artificial intelligence and machine learning.
              </p>
              <div className="project-link">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Explore on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h3>Contact</h3>
          <div className="contact-card">
            <div className="contact-email">
              <a href="mailto:info.sakib.diu@gmail.com" className="email-link">
                info.sakib.diu@gmail.com
              </a>
            </div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/shakibahmedbd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/SakibKhanAbout" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Shakib Ahmed.</span>
        <span>All rights reserved..</span>
      </footer>
    </div>
  );
};

export default App;


