"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Recognition", "#beyond"],
  ["Japan career", "#japanese"],
  ["Contact", "#contact"],
] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`section-heading${className ? ` ${className}` : ""}`}>
      <div className="section-heading__meta">
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function SectionDivider() {
  return <div className="section-divider" aria-hidden="true" />;
}

function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="empty-state">
      <span className="empty-state__mark" aria-hidden="true">
        <span />
      </span>
      <div>
        <p className="empty-state__title">{title}</p>
        <p className="empty-state__description">{description}</p>
      </div>
    </div>
  );
}

export function Portfolio() {
  const reduceMotion = useReducedMotion();
  const availableLinks = portfolio.links.filter((link) => link.href);
  const emailHref = portfolio.contactEmail
    ? `mailto:${portfolio.contactEmail}`
    : undefined;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label={`${portfolio.name}, home`}>
            <span className="brand__name">{portfolio.name}</span>
          </a>
          <div className="nav__links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="nav__cta" href="#contact">
            Let’s talk <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="main-content">
      <section className="hero shell" id="home">
        <div className="hero__copy">
          <Reveal>
            <div className="availability">
              <span className="availability__dot" />
              <span>Curious by nature. Building with intent.</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>
              Hello, I’m
              <br />
              <span className="hero__name">{portfolio.name}</span>
              <span className="hero__period">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="hero__role">{portfolio.role} <span>·</span> {portfolio.education.institution}</p>
            <p className="hero__intro">{portfolio.introduction}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="text-link" href="#about">
                A little about me <span>↓</span>
              </a>
            </div>
          </Reveal>
          <div className="hero__coordinates" aria-hidden="true">
            <span>CYBERSECURITY</span>
            <span>AI / ML</span>
          </div>
        </div>

        <Reveal className="hero__visual" delay={0.2}>
          <motion.div
            className="portrait-card"
            whileHover={reduceMotion ? undefined : { y: -6, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="portrait-card__topline">
              <span>PROFILE / 01</span>
              <span className="portrait-card__status"><i /> OPEN TO IDEAS</span>
            </div>
            <div className="portrait-frame">
              {portfolio.profilePhoto ? (
                <Image
                  className="portrait-frame__image"
                  src={portfolio.profilePhoto}
                  alt={`Portrait of ${portfolio.name}`}
                  fill
                  priority
                  sizes="(max-width: 680px) 78vw, (max-width: 900px) 38vw, 420px"
                />
              ) : (
                <div className="portrait-placeholder">
                  <div className="portrait-placeholder__halo" />
                  <svg className="portrait-placeholder__figure" viewBox="0 0 180 220" fill="none" aria-hidden="true">
                    <circle cx="90" cy="69" r="37" />
                    <path d="M25 212c4-49 29-75 65-75s61 26 65 75" />
                    <path d="M45 191c10-24 25-36 45-36s35 12 45 36" />
                  </svg>
                  <span className="portrait-placeholder__label">PORTRAIT PHOTOGRAPH</span>
                </div>
              )}
              <span className="portrait-frame__corner portrait-frame__corner--tl" />
              <span className="portrait-frame__corner portrait-frame__corner--br" />
            </div>
            <div className="portrait-card__caption">
              <div>
                <span className="eyebrow">Computer science · SRMIST</span>
                <strong>{portfolio.name}</strong>
              </div>
              <span className="portrait-card__serial">CSE<br />CHENNAI</span>
            </div>
          </motion.div>
        </Reveal>
        <div className="hero__scroll" aria-hidden="true">
          <span />
          Scroll to explore
        </div>
      </section>

      <SectionDivider />

      <section className="section shell" id="about">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="A little context"
            title="Learning how things work — and how to make them better."
          />
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-grid__intro">
            <p className="large-copy">
              I’m a <span>computer science engineering student</span> with a
              growing interest in building technology that is both capable and
              resilient.
            </p>
            <p className="body-copy">
              The more I learn about intelligent systems, the more I want to
              understand what makes them trustworthy. That curiosity is what
              brings cybersecurity and AI/ML together in my work.
            </p>
          </Reveal>
        </div>
        <Reveal className="qualification-record" delay={0.1}>
          <div className="qualification-record__heading">
            <div>
              <span className="eyebrow">Academic background</span>
              <h3>Educational Qualification</h3>
            </div>
            <span className="qualification-record__count">03 RECORDS</span>
          </div>
          <div className="qualification-table-wrap">
            <table className="qualification-table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Institution</th>
                  <th scope="col">Board / University</th>
                  <th scope="col">Year of Passing</th>
                  <th scope="col">Percentage / CGPA</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.education.qualifications.map((qualification) => (
                  <tr key={qualification.course}>
                    <th scope="row" data-label="Course">{qualification.course}</th>
                    <td data-label="Institution">{qualification.institution}</td>
                    <td data-label="Board / University">{qualification.board}</td>
                    <td data-label="Year of Passing">{qualification.year}</td>
                    <td data-label="Percentage / CGPA">{qualification.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section section--tinted" id="skills">
        <div className="shell">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Skills & current focus"
              title="A curious mind, a considered toolkit."
              description="The areas I’m exploring, alongside the tools I use to bring ideas to life."
            />
          </Reveal>
          <div className="focus-grid">
            {portfolio.focus.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="focus-card">
                  <span className="focus-card__number">0{index + 1}</span>
                  <span className="focus-card__icon" aria-hidden="true">
                    {item.symbol}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="focus-card__line" />
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="toolkit">
              <span className="eyebrow">Website toolkit</span>
              <div className="toolkit__items">
                {portfolio.toolkit.map((tool) => (
                  <span className="tool-pill" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section shell" id="projects">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Projects"
            className="section-heading--projects"
          />
        </Reveal>
        {portfolio.projects.length ? (
          <div className="project-grid">
            {portfolio.projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <article className="project-card">
                  <div className="project-card__top">
                    <span>0{index + 1} / PROJECT</span>
                    <span className="project-card__icon"><ArrowIcon diagonal /></span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-card__links">
                    {project.href && <a href={project.href} target="_blank" rel="noreferrer">Live project <ArrowIcon diagonal /></a>}
                    {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source code <ArrowIcon diagonal /></a>}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <EmptyState
              title="Work in progress, ideas in motion."
              description="I’m focused on cybersecurity and AI/ML. This space is for projects and experiments as they’re ready to share."
            />
          </Reveal>
        )}
      </section>

      <section className="section section--tinted" id="beyond">
        <div className="shell">
          <div className="milestone-grid">
            <Reveal>
              <section className="milestone-panel milestone-panel--hackathons" id="hackathons" aria-labelledby="hackathons-title">
                <div className="milestone-panel__heading">
                  <span className="milestone-panel__index">01 / PARTICIPATION</span>
                  <h3 id="hackathons-title">Hackathons</h3>
                </div>
                {portfolio.hackathons.length ? (
                  <ul className="entry-list">
                    {portfolio.hackathons.map((item) => (
                      <li key={item.title}>
                        <span>
                          <strong>{item.title}</strong>
                          {item.detail && <small>{item.detail}</small>}
                        </span>
                        {item.year && <span className="entry-year">{item.year}</span>}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
            <Reveal delay={0.1}>
              <section className="milestone-panel milestone-panel--achievements" id="achievements" aria-labelledby="achievements-title">
                <div className="milestone-panel__heading">
                  <span className="milestone-panel__index">02 / MILESTONES</span>
                  <h3 id="achievements-title">Achievements</h3>
                </div>
                {portfolio.achievements.length ? (
                  <ul className="entry-list">
                    {portfolio.achievements.map((item) => (
                      <li key={item.title}>
                        <span>
                          <strong>{item.title}</strong>
                          {item.detail && <small>{item.detail}</small>}
                        </span>
                        {item.year && <span className="entry-year">{item.year}</span>}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
            <Reveal delay={0.2}>
              <section className="milestone-panel milestone-panel--certificates" id="certificates" aria-labelledby="certificates-title">
                <div className="milestone-panel__heading">
                  <span className="milestone-panel__index">03 / CREDENTIALS</span>
                  <h3 id="certificates-title">Certificates</h3>
                </div>
                <ul className="entry-list">
                  {portfolio.certificates.map((item) => (
                    <li key={item.title}>
                      <span>
                        <strong>{item.title}</strong>
                        {item.detail && <small>{item.detail}</small>}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section japanese-section" id="japanese">
        <div className="shell">
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="Language & professional direction"
              title="Japanese Language & Japan Career"
            />
          </Reveal>
          <Reveal className="japanese-intro">
            <div className="japanese-intro__copy">
              <div className="japanese-micro-label">
                <span>{portfolio.japanese.decorativeText[0]}</span>
                <span>LANGUAGE × TECHNOLOGY</span>
              </div>
              <h3>{portfolio.japanese.headline}</h3>
              <p>{portfolio.japanese.description}</p>
            </div>
            <div className="japanese-intro__seal" aria-hidden="true">
              <span>{portfolio.japanese.decorativeText[1]}</span>
              <span>{portfolio.japanese.decorativeText[2]}</span>
            </div>
          </Reveal>

          <Reveal className="jlpt-panel">
            <div className="jlpt-panel__heading">
              <span className="eyebrow">A steady path forward</span>
              <span className="jlpt-panel__caption">JLPT PROGRESSION</span>
            </div>
            <ol className="jlpt-timeline" aria-label="Japanese proficiency progression">
              {portfolio.japanese.progression.map((step) => (
                <li className={`jlpt-step jlpt-step--${step.status}`} key={step.level}>
                  <span className="jlpt-step__node" aria-hidden="true">
                    {step.status === "complete" ? "✓" : ""}
                  </span>
                  <span className="jlpt-step__level">{step.level}</span>
                  <span className="jlpt-step__label">{step.label}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="japanese-detail-grid">
            <Reveal>
              <section className="japan-career-card" aria-labelledby="japan-career-title">
                <div className="japan-career-card__heading">
                  <span className="eyebrow">Career focus</span>
                  <span className="japan-career-card__kanji" aria-hidden="true">
                    {portfolio.japanese.decorativeText[1]}
                  </span>
                </div>
                <h3 id="japan-career-title">{portfolio.japanese.careerFocus.title}</h3>
                <p>{portfolio.japanese.careerFocus.description}</p>
                <span className="japan-career-badge">{portfolio.japanese.careerFocus.badge}</span>
              </section>
            </Reveal>
            <Reveal delay={0.08}>
              <section className="japan-info-card japan-info-card--why" aria-labelledby="why-japanese-title">
                <span className="eyebrow">Purpose & curiosity</span>
                <h3 id="why-japanese-title">Why Japanese?</h3>
                <ul className="japan-bullet-list">
                  {portfolio.japanese.reasons.map((reason) => (
                    <li key={reason}>{reason}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
            <Reveal delay={0.16}>
              <section className="japan-info-card japan-info-card--learning" aria-labelledby="current-learning-title">
                <span className="eyebrow">Building every day</span>
                <h3 id="current-learning-title">Current Learning</h3>
                <ul className="japanese-learning-list">
                  {portfolio.japanese.currentLearning.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="interests">
        <div className="shell interests-grid">
          <Reveal>
            <section className="interest-panel" aria-labelledby="hobbies-title">
              <span className="eyebrow">Away from the screen</span>
              <h2 id="hobbies-title">Hobbies</h2>
              <ul className="interest-list">
                {portfolio.hobbies.map((hobby) => <li key={hobby}>{hobby}</li>)}
              </ul>
            </section>
          </Reveal>
          <Reveal delay={0.1}>
            <section className="interest-panel" aria-labelledby="languages-title">
              <span className="eyebrow">Communication</span>
              <h2 id="languages-title">Known languages</h2>
              <ul className="interest-list">
                {portfolio.languages.map((language) => <li key={language}>{language}</li>)}
              </ul>
            </section>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="shell">
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="Start a conversation"
              title="Contact"
              description="For opportunities, collaborations, or a conversation about cybersecurity and AI/ML, reach out."
              className="section-heading--contact"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="contact-details">
              <a className="contact-detail" href={emailHref}>
                <strong>Email</strong>
                <span>{portfolio.contactEmail}</span>
                <ArrowIcon diagonal />
              </a>
              <a className="contact-detail" href={`tel:${portfolio.contactPhone}`}>
                <strong>Phone</strong>
                <span>{portfolio.contactPhone}</span>
                <ArrowIcon diagonal />
              </a>
            </div>
            {availableLinks.length > 0 && (
              <div className="social-links">
                {availableLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label} <ArrowIcon diagonal />
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-row">
          <a className="brand" href="#home" aria-label="Back to top">
            <span className="brand__name">{portfolio.name}</span>
          </a>
          <p>Thoughtfully made, one line at a time.</p>
          <a className="back-to-top" href="#home">Back to top ↑</a>
          <span className="footer-copyright">© {new Date().getFullYear()} {portfolio.name}</span>
        </div>
      </footer>
    </>
  );
}
