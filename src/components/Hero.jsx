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
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Hero;
