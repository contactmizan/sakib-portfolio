import React, { useEffect, useRef, useState } from 'react';
import profileImg from '../images/sk.jpeg';

type Section = { id: string; label: string };

const sections: Section[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const App: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false, false]);
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ];
  const lastScrollY = useRef<number>(0);
  const scrollDirectionRef = useRef<'down' | 'up'>('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirectionRef.current = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = itemRefs.map((ref, index) => {
      if (!ref.current) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const direction = scrollDirectionRef.current;

            setVisibleItems((prev) => {
              const newState = [...prev];

              if (direction === 'down') {
                // When scrolling down, show item when it enters viewport
                if (entry.isIntersecting) {
                  newState[index] = true;
                }
              } else {
                // When scrolling up, hide item when it leaves viewport
                if (!entry.isIntersecting) {
                  newState[index] = false;
                }
              }

              return newState;
            });
          });
        },
        { threshold: 0.2, rootMargin: '-40px 0px' }
      );

      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setNavOpen(false);
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
        <button
          type="button"
          className={`nav-toggle ${navOpen ? 'nav-toggle-open' : ''}`}
          onClick={() => setNavOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${navOpen ? 'nav-links-open' : ''}`}>
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
              I&apos;m a Software Engineer, AI Engineer, and Entrepreneur, passionate about Machine
              Learning, Deep Learning, NLP, and Computer Vision — turning bold ideas into real-world
              intelligent solutions.
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
                &quot;Inspired by J.A.R.V.I.S., I love building AI that feels less like a tool and
                more like a smart companion.&quot;
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
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Who I am</p>
              <h3>About</h3>
            </div>
            <span className="section-chip">AI Engineer • Builder • Learner</span>
          </div>
          <div className="section-grid">
            <div className="card about-card">
              <p>
                I&apos;m currently studying Software Engineering at Daffodil International
                University, where I explore how AI can transform industries and everyday life. My
                journey is driven by curiosity, creativity, and a relentless desire to turn science
                fiction into practical, impactful technology.
              </p>
              <p>
                With hands-on experience in AI model development, deployment, and data-driven
                problem solving, I bridge the gap between research and real-world products. I
                believe great technology doesn&apos;t just work — it should feel intuitive, human,
                and inspiring.
              </p>
            </div>
            <div className="card about-highlights">
              <h4>Snapshot</h4>
              <ul className="pill-list">
                <li>Software Engineering @ DIU</li>
                <li>Managing Director @ BSCL</li>
                <li>AI & ML Enthusiast</li>
                <li>Competition Team Lead</li>
              </ul>
              <div className="about-metrics">
                <div className="metric">
                  <span className="metric-label">AI Focus</span>
                  <span className="metric-value">ML • DL • NLP • CV</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Mindset</span>
                  <span className="metric-value">Builder & Problem Solver</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">What I&apos;ve been doing</p>
              <h3>Experience</h3>
            </div>
            <span className="section-chip">Leadership • Product • AI</span>
          </div>
          <div className="section-grid">
            <div className="card card-clickable">
              <div className="card-header">
                <h4>Managing Director</h4>
                <span className="badge">Bangladesh Software Company Limited - BSCL</span>
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
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Where I learned</p>
              <h3>Education</h3>
            </div>
            <span className="section-chip">Software • Science • People</span>
          </div>
          <div className="education-cards">
            <div className="card card-clickable">
              <h4>Daffodil International University</h4>
              <p className="muted">B.Sc. in Software Engineering</p>
              <p>
                Exploring the intersection of software engineering and artificial intelligence —
                from algorithms and systems design to building intelligent applications that solve
                real problems.
              </p>
            </div>
            <div className="card card-clickable">
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
          <div className="timeline" ref={timelineRef}>
            <div
              className={`timeline-item ${visibleItems[0] ? 'timeline-item-visible' : 'timeline-item-hidden'}`}
              ref={itemRefs[0]}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Foundation</div>
                <h4>Programming & Core Skills</h4>
                <ul className="list">
                  <li>
                    <strong>Programming Languages</strong> – Python (Core), familiarity with CVZone,
                    OpenCV, and more
                  </li>
                  <li>
                    <strong>Data Analysis</strong> – Data visualization and interpretation for
                    informed decision-making
                  </li>
                  <li>
                    <strong>Problem Solving</strong> – Tackling real-world challenges with smart
                    tech solutions
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`timeline-item ${visibleItems[1] ? 'timeline-item-visible' : 'timeline-item-hidden'}`}
              ref={itemRefs[1]}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Intermediate</div>
                <h4>Machine Learning & AI Fundamentals</h4>
                <ul className="list">
                  <li>
                    <strong>Machine Learning (ML)</strong> – Model development, evaluation, and
                    deployment
                  </li>
                  <li>
                    <strong>Computer Vision</strong> – Gesture recognition, lip reading, image
                    classification
                  </li>
                  <li>
                    <strong>Communication</strong> – Clear, effective, and adaptable across teams
                    and audiences
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`timeline-item ${visibleItems[2] ? 'timeline-item-visible' : 'timeline-item-hidden'}`}
              ref={itemRefs[2]}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Advanced</div>
                <h4>Deep Learning & Specialized AI</h4>
                <ul className="list">
                  <li>
                    <strong>Deep Learning</strong> – CNNs, LSTMs, RNNs, Transfer Learning, Object
                    Detection (YOLO)
                  </li>
                  <li>
                    <strong>Natural Language Processing (NLP)</strong> – Custom chatbots, text
                    generation, and LLMs
                  </li>
                  <li>
                    <strong>Leadership</strong> – Team lead experience in international and national
                    competitions
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`timeline-item ${visibleItems[3] ? 'timeline-item-visible' : 'timeline-item-hidden'}`}
              ref={itemRefs[3]}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-date">Ongoing</div>
                <h4>🚀 Professional Growth</h4>
                <ul className="list">
                  <li>
                    <strong>Adaptability</strong> – Quick learner, flexible in dynamic environments
                  </li>
                  <li>
                    <strong>Continuous Learning</strong> – Passionate about staying updated with AI
                    & tech trends
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Beyond the code</p>
              <h3>Leadership & Competitions</h3>
            </div>
            <span className="section-chip">Teamwork • Strategy • Energy</span>
          </div>
          <div className="card card-clickable">
            <p>
              I&apos;ve led teams in both national and international competitions, combining strong
              communication, adaptability, and a growth mindset to achieve success. Whether it&apos;s
              a hackathon, AI challenge, or product pitch, I enjoy rallying people around ambitious
              ideas and executing under pressure.
            </p>
            <p>
              I bring a lively, fun-loving energy to every team — because I believe the best AI
              projects are built not just with great code, but with enthusiasm, trust, and shared
              curiosity.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">What I&apos;m building</p>
              <h3>Projects & Learning</h3>
            </div>
            <span className="section-chip">Always in beta</span>
          </div>
          <div className="grid">
            <div className="card card-clickable">
              <h4>📚 Currently Learning</h4>
              <ul className="pill-list">
                <li>LLMs</li>
                <li>NLP</li>
                <li>Generative AI</li>
                <li>Transformers</li>
                <li>Deep Learning</li>
              </ul>
            </div>
            <div className="card card-clickable">
              <h4>🔭 Active Projects</h4>
              <p>
                Building AI-driven apps, image classification, and text generation systems.
                Exploring the cutting edge of artificial intelligence and machine learning.
              </p>
              <div className="project-link">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Explore on GitHub →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-container">
            <div className="contact-left">
              <h3>Let&apos;s Connect</h3>
              <p className="contact-intro">
                I&apos;m currently studying Software Engineering and actively working on AI projects.
                Feel free to reach out for collaboration opportunities or just to connect!
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-label">Email</span>
                    <a href="mailto:info.sakib.diu@gmail.com" className="contact-value">
                      info.sakib.diu@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">Available upon request</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Bangladesh</span>
                  </div>
                </div>
              </div>

              <div className="follow-me">
                <h4>Follow Me</h4>
                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/shakibahmedbd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="social-icon"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/SakibKhanAbout"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook profile"
                    className="social-icon"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="social-icon"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <h3>Send a Message</h3>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or just say hello!"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </button>
              </form>
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


