import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Connect your repositories',
    copy: 'Secure OAuth onboarding with tenant-aware scoping for fast adoption.',
    pill: 'status-pill status-pill--pass',
    label: 'Step 1',
  },
  {
    title: 'Run the first scan',
    copy: 'Kick off automated baselines across SBOM, SCA, secrets, and vuln detection.',
    pill: 'status-pill status-pill--attention',
    label: 'Step 2',
  },
  {
    title: 'Review prioritized findings',
    copy: 'Spotlight remediation-ready issues with contextual guidance for developers.',
    pill: 'status-pill status-pill--fail',
    label: 'Step 3',
  },
  {
    title: 'Enforce quality gates',
    copy: 'Flip enforcement to block regressions and sustain compliance confidently.',
    pill: 'status-pill status-pill--pass',
    label: 'Step 4',
  },
];

const Timeline = () => (
  <section className="timeline" id="workflow" aria-labelledby="timeline-heading">
    <div className="container">
      <motion.h2
        id="timeline-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Guided workflow from day zero
      </motion.h2>
      <ol className="timeline__steps">
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            className="timeline__step"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className={`timeline__badge ${step.pill}`}>{step.label}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Timeline;
