import { Fragment } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SignupForm from './SignupForm.jsx';

const floaters = [
  'hero__floating hero__floating--tile',
  'hero__floating hero__floating--card',
  'hero__floating hero__floating--pill',
];

const textVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const visualVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.2 } },
};

const providerLogos = [
  {
    name: 'GitHub Actions',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <circle cx="16" cy="16" r="16" className="provider-icon provider-icon--github" />
        <path
          d="M19.7 14.2c.2-.4.3-.9.3-1.4 0-1.8-1.4-3.4-3.6-3.4s-3.6 1.6-3.6 3.4c0 .5.1 1 .3 1.4-1.5.1-2.9.9-2.9 2.7 0 1.9 1.5 3 3.8 3.3-.4.3-.5.8-.5 1.3 0 .9.1 1.6.1 1.8 0 .1-.1.3-.4.3-2.6-.9-4.3-3.3-4.3-6.2 0-3.6 2.7-6.4 6.6-6.4s6.6 2.8 6.6 6.4c0 2.9-1.7 5.3-4.3 6.2-.3 0-.4-.2-.4-.3 0-.2.1-.9.1-1.8 0-.9-.2-1.5-.7-1.8 2.3-.3 3.9-1.4 3.9-3.3 0-1.8-1.4-2.6-2.9-2.7Z"
          className="provider-icon__glyph"
        />
      </svg>
    ),
  },
  {
    name: 'GitLab',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <circle cx="16" cy="16" r="16" className="provider-icon provider-icon--gitlab" />
        <path
          d="M16 23.6 8.8 16l2.4-7.2 2.7 6.2h4.2l2.7-6.2L23.2 16Z"
          className="provider-icon__glyph"
        />
      </svg>
    ),
  },
  {
    name: 'Bitbucket',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <circle cx="16" cy="16" r="16" className="provider-icon provider-icon--bitbucket" />
        <path
          d="M9.8 9.6h12.4l-1.2 12.8h-9.9Zm4.7 9.6h3l.7-4.5h-4.4Z"
          className="provider-icon__glyph"
        />
      </svg>
    ),
  },
  {
    name: 'Azure DevOps',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <circle cx="16" cy="16" r="16" className="provider-icon provider-icon--azure" />
        <path
          d="m11.2 20.4 2.8-10 6.8 5.4-3 5.8-3.7.4Z"
          className="provider-icon__glyph"
        />
      </svg>
    ),
  },
];

const pipelineStages = [
  {
    key: 'code',
    badge: 'Commit',
    title: 'Code',
    description: 'Pull requests, feature branches, and hotfixes line up for automated review.',
    tone: 'source',
  },
  {
    key: 'gate',
    badge: 'Gate',
    title: 'AEGIS Quality Gate',
    description: 'Secrets, IaC, SAST, and policy packs block risky merges before build.',
    isGate: true,
    tone: 'gate',
  },
  {
    key: 'build',
    badge: 'Build',
    title: 'Secure Build',
    description: 'Signed artifacts, SBOM attestation, and dependency controls prepare trusted releases.',
    tone: 'build',
  },
  {
    key: 'production',
    badge: 'Release',
    title: 'Production',
    description: 'Deploy with complete audit evidence and live policy enforcement.',
    tone: 'release',
  },
];

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      id="top"
      className="hero"
      initial="hidden"
      animate="visible"
      variants={textVariants}
    >
      {floaters.map((className, index) => (
        <motion.span
          key={className}
          className={className}
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -20, 0],
                  rotate: [0, 6, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  duration: 8 + index * 1.5,
                  delay: index * 0.6,
                }
          }
        />
      ))}
      <motion.div
        className="hero__intro container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="hero__intro-grid">
          <div className="hero__intro-text">
            <span className="hero__brand">AEGIS</span>
            <p className="hero__intro-copy">
              Security assurance for modern delivery teams. Automate branch protection, enforce policy guardrails,
              and ship only the builds that clear every quality signal.
            </p>
          </div>
          <motion.div
            className="hero__intro-visual"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            aria-hidden="true"
          >
            <div className="pipeline-diagram">
              <div className="pipeline-diagram__glow" />
              <div className="pipeline-track">
                {pipelineStages.map((stage, index) => (
                  <Fragment key={stage.key}>
                    <div
                      className={[
                        'pipeline-stage',
                        `pipeline-stage--${stage.tone}`,
                        stage.isGate ? 'pipeline-stage--gate' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      <span className="pipeline-stage__badge">{stage.badge}</span>
                      {stage.isGate && (
                        <span className="pipeline-stage__icon" aria-hidden="true">
                          <svg viewBox="0 0 48 48" role="img" focusable="false">
                            <path
                              d="M24 6 8 12v11c0 9.4 6.8 18.5 16 21 9.2-2.5 16-11.6 16-21V12Z"
                              fill="currentColor"
                              opacity="0.22"
                            />
                            <path
                              d="M24 8.2 10.4 13v10c0 8 5.8 15.8 13.6 18.3 7.8-2.5 13.6-10.3 13.6-18.3V13Z"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            />
                            <path
                              d="M20.4 23.6 18 21.2l-2.2 2.2 4.6 4.6 11-11-2.2-2.2Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      )}
                      <strong>{stage.title}</strong>
                      <p>{stage.description}</p>
                    </div>
                    {index < pipelineStages.length - 1 && (
                      <div
                        className={[
                          'pipeline-connector',
                          index >= 1 ? 'pipeline-connector--active' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        aria-hidden="true"
                      >
                        <span
                          className={[
                            'pipeline-connector__pulse',
                            index >= 1 ? 'pipeline-connector__pulse--active' : '',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="hero__content container">
        <motion.div className="hero__text" variants={textVariants}>
          <span className="eyebrow">Continuous security assurance</span>
          <h1>Ship with confidence. Every commit.</h1>
          <p>
            Aegis automates security and quality gates across your pipelines so teams can surface actionable findings,
            enforce policies, and deliver resilient releases without slowing down delivery.
          </p>
          <SignupForm
            id="hero-signup"
            messageId="hero-message"
            includeName
            includeConsent
            submitLabel="Join the early access list"
          />
          <p className="trust-copy">GDPR-ready. Unsubscribe anytime.</p>
          <motion.div
            className="hero__providers"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, delayChildren: 0.6 },
              },
            }}
          >
            <motion.span className="hero__providers-label" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Works with every git provider &amp; CI/CD pipeline
            </motion.span>
            <div className="hero__providers-logos">
              {providerLogos.map(({ name, icon }) => (
                <motion.div
                  key={name}
                  className="hero__provider"
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                  whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                >
                  {icon}
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="hero__visual" variants={visualVariants}>
          <div className="dashboard-preview" aria-hidden="true">
            <div className="dashboard-preview__column">
              <div className="kpi-card">
                <span className="kpi-card__label">Global Pass Rate</span>
                <strong className="kpi-card__value">92%</strong>
                <span className="status-pill status-pill--pass">PASS</span>
              </div>
              <div className="kpi-card kpi-card--secondary">
                <span className="kpi-card__label">Critical Findings</span>
                <strong className="kpi-card__value">3</strong>
                <span className="status-pill status-pill--fail">ALERT</span>
              </div>
            </div>
            <div className="dashboard-preview__column">
              <div className="repo-card">
                <div className="avatar" aria-hidden="true">
                  AP
                </div>
                <div>
                  <h3>api-gateway</h3>
                  <p>Last scan 12m ago</p>
                </div>
                <span className="status-pill status-pill--attention">ATTENTION</span>
              </div>
              <div className="repo-card">
                <div className="avatar" aria-hidden="true">
                  WS
                </div>
                <div>
                  <h3>web-storefront</h3>
                  <p>Last scan 6m ago</p>
                </div>
                <span className="status-pill status-pill--pass">PASS</span>
              </div>
              <div className="findings-card">
                <h4>Secrets Detected</h4>
                <ul>
                  <li>
                    <span className="dot dot--fail" aria-hidden="true"></span>
                    AWS key committed <time dateTime="2024-06-12">12 Jun</time>
                  </li>
                  <li>
                    <span className="dot dot--attention" aria-hidden="true"></span>
                    Token rotation overdue
                  </li>
                  <li>
                    <span className="dot dot--pass" aria-hidden="true"></span>
                    Policy pack meets OWASP ASVS L2
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <motion.div
            className="hero__compliance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          >
            <span className="hero__compliance-badge">Compliance-first</span>
            <p>
              Continuous alignment with OWASP ASVS, SOC2, ISO 27001, and industry benchmarks built into every
              policy you enforce.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Hero;
