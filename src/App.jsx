import SignupForm from './components/SignupForm.jsx';

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'How it works', href: '#how' },
  { label: 'Contact us', href: '#contact' },
];

const supportLogos = ['travis ci', 'gitlab', 'circleci', 'bitbucket'];

const heroSignals = [
  { label: 'Policy coverage', value: '99%', tone: 'positive' },
  { label: 'Secrets resolved', value: '48', tone: 'neutral' },
  { label: 'Pipelines protected', value: '120+', tone: 'positive' },
];

const problemCards = [
  {
    title: 'Fragmented visibility',
    copy:
      'Signals are trapped in individual tools, so critical issues stay hidden until they ship to production.',
  },
  {
    title: 'Reactive security',
    copy:
      'Manual reviews happen after deploys and force teams to triage incidents instead of preventing them.',
  },
  {
    title: 'Blind commits',
    copy: 'CI/CD pipelines merge code every hour — but they rarely enforce the policies that matter most.',
  },
];

const solutionCards = [
  {
    title: 'Smart code scanning',
    copy: 'Continuously scan every commit for secrets, IaC drift, SCA, and misconfigurations with single coverage.',
  },
  {
    title: 'Customizable enforcement',
    copy: 'Design quality gates aligned to your SLAs and flip enforcement on when you are ready to block risky merges.',
  },
  {
    title: 'Unified issue dashboard',
    copy: 'Bring remediation, ownership, and audit evidence into one panel so engineering keeps shipping.',
  },
];

const workflowCards = [
  {
    title: 'Add AEGIS to your pipeline',
    description: 'Drop one snippet into GitHub, GitLab, Bitbucket, or Jenkins and let the first scan run within minutes.',
    footnote: 'Supports GitHub, GitLab, Bitbucket, Jenkins',
    screenshotLabel: 'Pipeline overview',
    variant: 'pipeline',
  },
  {
    title: 'Define your rules',
    description: 'Choose which repos block merges, configure required checks, and tailor alerts to each team inside AEGIS.',
    footnote: 'Map controls to SOC 2, ISO, or internal SLAs',
    screenshotLabel: 'Policy designer',
    variant: 'rules',
  },
  {
    title: 'Scan every commit',
    description: 'Every push runs through the AEGIS policy engine. Signals stay in sync across CI providers automatically.',
    footnote: 'Secrets · SAST · IaC · Containers',
    screenshotLabel: 'Live findings',
    variant: 'signals',
  },
  {
    title: 'Fix in the dashboard',
    description: 'See prioritized findings with triage paths, exports, and insights mapped to frameworks you follow.',
    footnote: 'Assign owners, export evidence, notify instantly',
    screenshotLabel: 'Unified dashboard',
    variant: 'dashboard',
  },
];

const previewStages = [
  {
    label: 'Quality Gate',
    title: 'Define merge protection',
    copy: 'Select checks, coverage, and severity thresholds per repo.',
  },
  {
    label: 'Signals',
    title: 'Monitor every commit',
    copy: 'Drill into secrets, IaC, and SAST findings across teams.',
  },
  {
    label: 'Evidence',
    title: 'Export proof anytime',
    copy: 'Generate auditor-ready packages mapped to your controls.',
  },
];

const App = () => (
  <div className="landing">
    <header className="hero" id="hero">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <a className="brand-mark" href="#hero">
            <span className="brand-mark__product">AEGIS</span>
            <span className="brand-mark__divider" aria-hidden="true">
              •
            </span>
            <span className="brand-mark__parent">4th wall sec</span>
          </a>
          <div className="nav__links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="button button--ghost" href="#demo">
            Dashboard
          </a>
        </nav>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">4th wall sec presents</p>
            <h1>AEGIS secures every commit automatically.</h1>
            <p className="hero__lead">
              4th wall sec is the parent company crafting operator-first security products. AEGIS is our flagship
              release — a CI/CD-native guardian that watches secrets, IaC drift, and vulnerable dependencies before
              code merges.
            </p>
            <div className="hero__product-pill">First product from 4th wall sec</div>
            <div className="hero__actions">
              <button type="button" className="button button--primary">
                Book a demo
              </button>
              <SignupForm
                id="hero-form"
                messageId="hero-message"
                inline
                submitLabel="Request a demo"
              />
            </div>
            <p className="hero__disclaimer">No spam. GDPR-ready. Cancel anytime.</p>
            <div className="hero__signals">
              {heroSignals.map((signal) => (
                <div key={signal.label} className={`signal signal--${signal.tone}`}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="hero__panel" aria-label="Product preview">
            <div className="panel-card">
              <div className="panel-card__header">
                <p className="panel-card__eyebrow">Supports</p>
                <div className="supports-row">
                  {supportLogos.map((logo) => (
                    <span key={logo} className="supports-row__logo">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
              <div className="panel-card__body">
                <h3>4th wall sec built AEGIS for pipelines that never pause.</h3>
                <p>Connect Git providers, pick environments, and watch policies enforce themselves.</p>
                <ul className="preview-list">
                  {previewStages.map((stage) => (
                    <li key={stage.label}>
                      <div>
                        <span className="pill">{stage.label}</span>
                        <strong>{stage.title}</strong>
                        <p>{stage.copy}</p>
                      </div>
                      <span aria-hidden="true" className="preview-list__indicator"></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="panel-card panel-card--secondary">
              <p>Add AEGIS by 4th wall sec to your pipeline and scan every commit.</p>
              <div className="panel-card__grid">
                <div>
                  <span className="micro-label">Status</span>
                  <strong>Healthy</strong>
                </div>
                <div>
                  <span className="micro-label">Active checks</span>
                  <strong>Secrets · SAST · IaC</strong>
                </div>
                <div>
                  <span className="micro-label">Next audit</span>
                  <strong>Jul 12</strong>
                </div>
                <div>
                  <span className="micro-label">Owners</span>
                  <strong>Platform · Security</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section className="section" id="problem">
        <div className="container">
          <div className="section__header">
            <p className="eyebrow">Problem</p>
            <h2>Security wasn&apos;t built for CI/CD speed.</h2>
            <p>
              Today&apos;s pipelines move faster than security teams can review. Developers ship code daily — but vulnerabilities
              slip in commits, dependencies, and build scripts without tooling that keeps pace.
            </p>
          </div>
          <div className="card-grid">
            {problemCards.map((card) => (
              <article key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent" id="solution">
        <div className="container">
          <div className="section__header">
            <p className="eyebrow">Solution</p>
            <h2>AEGIS: one code snippet. Total code security.</h2>
            <p>Scan every commit, manage policy, and ship with a unified dashboard teams actually enjoy using.</p>
          </div>
          <div className="card-grid">
            {solutionCards.map((card) => (
              <article key={card.title} className="info-card">
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section__header">
            <p className="eyebrow">How it works</p>
            <h2>4th wall sec presents AEGIS with the original mockup flow.</h2>
            <p>Each step mirrors the design system from the mockups — now with AEGIS showing the exact dashboard views.</p>
          </div>
          <div className="workflow">
            {workflowCards.map((card, index) => (
              <article key={card.title} className="workflow-card">
                <div className={`workflow-shot workflow-shot--${card.variant}`} aria-hidden="true">
                  <div className="workflow-shot__header">
                    <div className="workflow-shot__dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p>{card.screenshotLabel}</p>
                  </div>
                  <div className="workflow-shot__body">
                    <div className="workflow-shot__panel">
                      <div className="workflow-shot__title"></div>
                      <div className="workflow-shot__chart"></div>
                    </div>
                    <div className="workflow-shot__list">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="workflow-card__step">Step {index + 1}</p>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <p className="workflow-card__footnote">{card.footnote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="container contact">
          <div>
            <p className="eyebrow">Contact us</p>
            <h2>Ready to secure every commit?</h2>
            <p>
              Reach out to the parent team at 4th wall sec for launch updates, security partnerships, or platform
              support. We respond within one business day.
            </p>
            <ul className="contact__details">
              <li>
                <span>Email</span>
                <a href="mailto:hello@4thwallsec.com">hello@4thwallsec.com</a>
              </li>
              <li>
                <span>Office</span>
                <p>845 King Street, Suite 402 · San Francisco, CA</p>
              </li>
            </ul>
          </div>
          <div className="contact__form" id="demo">
            <h3>Join the early access list</h3>
            <SignupForm
              id="contact-form"
              messageId="contact-message"
              includeName
              includeConsent
              submitLabel="Get updates"
            />
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="container footer__inner">
        <div>
          <span className="brand-mark">
            <span className="brand-mark__product">AEGIS</span>
            <span className="brand-mark__divider" aria-hidden="true">
              •
            </span>
            <span className="brand-mark__parent">4th wall sec</span>
          </span>
          <p>4th wall sec builds operator-first security products. AEGIS is our flagship pipeline guardian.</p>
        </div>
        <div className="footer__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <p className="footer__legal">© {new Date().getFullYear()} 4th wall sec. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default App;
