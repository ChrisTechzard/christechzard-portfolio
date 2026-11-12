
import { useState } from "react";
import {
  CodeXml,
  Video,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Code2,
  ShieldCheck,
  BrainCircuit,
  Terminal,
  Blocks,
} from "lucide-react";
import "./App.css";

const email = "kenchriski0@gmail.com";
const cvUrl = `${import.meta.env.BASE_URL}Christopher-Tettey-Omenyo-CV.pdf`;
const profileImage = `${import.meta.env.BASE_URL}images/Chris.jpg`;

const projects = [
  {
    number: "01",
    name: "Campus QR",
    category: "Web Development",
    description:
      "A QR-based campus project designed to make accessing information simpler and more interactive.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ChrisTechzard/campus-qr",
    demo: "https://christechzard.github.io/campus-qr/",
  },
  {
    number: "02",
    name: "KFC_AI",
    category: "AI / Web Development",
    description:
      "An AI-powered meal and budget experience built around KFC Ghana's menu and local pricing.",
    stack: ["HTML", "CSS", "JavaScript", "AI"],
    demo: "https://ChrisTechzard.github.io/KFC_AI/",
  },
  {
    number: "03",
    name: "Password Vault",
    category: "Python / Cybersecurity",
    description:
      "A Python password-vault application currently being developed, exploring encryption, secure credential storage and desktop application development.",
    stack: ["Python", "CustomTkinter", "Scrypt", "Fernet"],
    github: "",
  },
];

const skills = [
  {
    icon: Code2,
    name: "Software Development",
    detail: "Python, JavaScript, React, Flutter",
  },
  {
    icon: ShieldCheck,
    name: "Cybersecurity",
    detail: "Security fundamentals, Kali Linux, ethical hacking",
  },
  {
    icon: Terminal,
    name: "Linux & Systems",
    detail: "Ubuntu, Bash, virtualization and system tools",
  },
  {
    icon: BrainCircuit,
    name: "Artificial Intelligence",
    detail: "AI-powered applications and practical experimentation",
  },
  {
    icon: Blocks,
    name: "Emerging Technology",
    detail: "Blockchain development and new technologies",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          CT<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            "Home",
            "About",
            "Skills",
            "Projects",
            "Experience",
            "Certifications",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}

          <a
            href={`mailto:${email}`}
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              COMPUTER ENGINEERING STUDENT & BUILDER
            </div>

            <p className="eyebrow">HELLO, WORLD. I'M</p>

            <h1>
              Chris
              <br />
              <span>Techzard.</span>
            </h1>

            <h2>
              Building with technology.
              <br />
              <span>Creating with purpose.</span>
            </h2>

            <p className="hero-description">
              I'm Omenyo Christopher Tettey, a Computer Engineering student,
              developer and technology enthusiast exploring software
              development, cybersecurity, artificial intelligence, IoT,
              the systems shaping our future and more.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore my work <ArrowRight size={17} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get in touch <ArrowUpRight size={17} />
              </a>

              <a
                href={cvUrl}
                download="Christopher-Tettey-Omenyo-CV.pdf"
                className="btn btn-secondary"
              >
                Download My CV <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ChrisTechzard"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <CodeXml />
              </a>

              <a
                href="https://www.youtube.com/@Techzardhub"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <Video />
              </a>

              <a href={`mailto:${email}`} aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>

          <div className="hero-image-area">
            <div className="image-glow"></div>

            <div className="image-frame">
              <img
                src={profileImage}
                alt="Chris Techzard"
                className="profile-image"
              />
            </div>

            <div className="image-caption">
              <span>CHRIS TECHZARD</span>
              <span>LEARN. BUILD. SECURE.</span>
            </div>

            <div className="floating-tag tag-top">
              <span className="tag-dot"></span> Developer mindset
            </div>

            <div className="floating-tag tag-bottom">
              <Terminal size={16} /> Always building
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / GET TO KNOW ME</p>
            <h2>
              A little about <span>me.</span>
            </h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                Technology is more than an interest to me. It's a space where
                I get to learn, experiment, solve problems and turn ideas into
                something useful.
              </p>

              <p>
                I'm currently pursuing a BSc in Computer Engineering at
                Ghana Communication Technology University (GCTU). Along the
                way, I'm developing my skills through hands-on projects,
                technical learning and community involvement.
              </p>

              <p>
                Through Chris Techzard, I also share my learning journey and
                make technology more accessible to other aspiring tech
                enthusiasts.
              </p>
            </div>

            <div className="about-facts">
              <div className="fact">
                <span>01</span>
                <div>
                  <h3>Learn</h3>
                  <p>Stay curious. Keep exploring.</p>
                </div>
              </div>

              <div className="fact">
                <span>02</span>
                <div>
                  <h3>Build</h3>
                  <p>Turn knowledge into real projects.</p>
                </div>
              </div>

              <div className="fact">
                <span>03</span>
                <div>
                  <h3>Secure</h3>
                  <p>Create with responsibility and purpose.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / WHAT I EXPLORE</p>
            <h2>
              Areas of <span>interest.</span>
            </h2>
            <p className="section-intro">
              The technologies and disciplines I'm actively exploring and
              developing through learning and practical work.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <article className="skill-card" key={skill.name}>
                  <Icon className="skill-icon" size={27} />
                  <h3>{skill.name}</h3>
                  <p>{skill.detail}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">03 / SELECTED WORK</p>
            <h2>
              Things I've <span>built.</span>
            </h2>
            <p className="section-intro">
              A growing collection of experiments, projects and practical
              solutions. More work is always in progress.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CodeXml size={16} /> Source code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="education section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">04 / MY JOURNEY</p>
            <h2>
              Learning. Growing. <span>Building.</span>
            </h2>
          </div>

          <div className="journey-card">
            <div className="journey-marker"></div>
            <div>
              <span className="journey-date">CURRENTLY</span>
              <h3>BSc Computer Engineering</h3>
              <p className="journey-place">
                Ghana Communication Technology University (GCTU)
              </p>
              <p>
                Level 200 student developing a foundation in computer
                engineering while exploring software, systems, networking
                and cybersecurity through practical work.
              </p>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-marker"></div>
            <div>
              <span className="journey-date">PROFESSIONAL EXPERIENCE</span>
              <h3>Intern — Electricity Company of Ghana (ECG)</h3>
              <p className="journey-place">Two-month internship</p>
              <p>
                Assisted with basic electrical and technical operations,
                routine system maintenance and networking troubleshooting
                while gaining experience in a professional engineering
                environment.
              </p>
            </div>
          </div>

          <div className="journey-card">
            <div className="journey-marker"></div>
            <div>
              <span className="journey-date">COMMUNITY & LEADERSHIP</span>
              <h3>Public Relations Officer</h3>
              <p className="journey-place">GCTU GhiE Club</p>
              <p>
                Supporting communication, engagement and participation in
                the engineering community.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="education section" id="certifications">
          <div className="section-heading">
            <p className="eyebrow">05 / PROFESSIONAL DEVELOPMENT</p>
            <h2>
              Certifications & <span>training.</span>
            </h2>
            <p className="section-intro">
              Training and learning experiences contributing to my technical
              development.
            </p>
          </div>

          <div className="journey-card">
            <div className="journey-marker"></div>
            <div>
              <span className="journey-date">2026</span>
              <h3>Cybersecurity Training</h3>
              <p className="journey-place">Thrive Africa</p>
              <p>
                Certificate of Completion — cybersecurity training.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <p className="eyebrow">06 / LET'S CONNECT</p>

          <h2>
            Have an idea?
            <br />
            <span>Let's make it happen.</span>
          </h2>

          <p>
            Interested in technology, collaboration, opportunities or simply
            having a meaningful conversation? I'd love to hear from you.
          </p>

          <a
            href={`mailto:${email}`}
            className="btn btn-primary"
          >
            Send me an email <Mail size={17} />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/ChrisTechzard"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.youtube.com/@Techzardhub"
              target="_blank"
              rel="noreferrer"
            >
              YouTube <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/christopher-omenyo-tettey-580a44374/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>

            <a
              href="https://x.com/ChrisTechzard"
              target="_blank"
              rel="noreferrer"
            >
              X <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.tiktok.com/@chris.techzard"
              target="_blank"
              rel="noreferrer"
            >
              TikTok <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          CT<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Chris Techzard. Built with purpose.
        </p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;
