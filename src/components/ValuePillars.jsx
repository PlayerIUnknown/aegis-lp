import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Automated Quality Gates',
    description:
      'Configure tenant-aware thresholds, toggle enforcement per repository, and let Aegis block risky merges before they land in production.',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <path
          d="M6 26l7-18 5 12 3-7 5 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Real-time Findings',
    description:
      'Consolidate SCA, SBOM, secret scanning, and vulnerability triage in one command center built for fast remediation.',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <path
          d="M6 8h20M6 16h20M6 24h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'GitHub Actions Integration',
    description:
      'Drop in the Aegis workflow snippet to run policy checks in CI/CD with tenant-aware secrets and automatic gate enforcement.',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <path d="M6 8h20v16H6z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path
          d="M10 12h8M10 16h12M10 20h6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Developer-Friendly Insights',
    description:
      'Investigate with intuitive timelines, repository filters, and drill-down panels that keep developers in flow.',
    icon: (
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
        <path
          d="M16 6a6 6 0 016 6v4h2a2 2 0 012 2v6H6v-6a2 2 0 012-2h2v-4a6 6 0 016-6zm0 0v10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: index * 0.12, ease: 'easeOut' },
  }),
};

const ValuePillars = () => (
  <section className="pillars" id="value" aria-labelledby="value-heading">
    <div className="container">
      <motion.h2
        id="value-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        Automate, surface, and enforce with clarity
      </motion.h2>
      <div className="pillars__grid">
        {pillars.map((pillar, index) => (
          <motion.article
            key={pillar.title}
            className="pillar"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={itemVariants}
            custom={index}
          >
            <div className="pillar__icon" aria-hidden="true">
              {pillar.icon}
            </div>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ValuePillars;
