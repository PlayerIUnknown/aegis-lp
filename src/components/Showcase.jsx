import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Scroll through live-inspired UI states to see how Aegis translates scans into high-signal dashboards.',
    layers: [
      {
        heading: 'Global Summary',
        body: 'Track pass rates, blockers, and remediation velocity at a glance.',
        className: 'panel__image panel__image--summary',
      },
      {
        heading: 'Repository health',
        body: 'Filter by team, language, or risk score to prioritize the next fix.',
        className: 'panel__image panel__image--repos',
      },
      {
        heading: 'Tool Findings',
        body: 'Surface SBOM alerts, SAST results, and secrets with inline recommendations.',
        className: 'panel__image panel__image--findings',
      },
    ],
  },
  {
    id: 'setup',
    label: 'Setup',
    description: 'Preview the onboarding flow and see how quickly your team can enforce policy-driven gates.',
    layers: [
      {
        heading: 'API access',
        body: 'Generate scoped keys for automation with one click.',
        className: 'panel__image panel__image--api',
      },
      {
        heading: 'Quality gates',
        body: 'Set pass/fail criteria by severity, coverage, and SLAs.',
        className: 'panel__image panel__image--gates',
      },
      {
        heading: 'CI workflow',
        body: 'Copy the GitHub Actions snippet to enforce policies in under 5 minutes.',
        className: 'panel__image panel__image--ci',
      },
    ],
  },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="showcase" id="showcase" aria-labelledby="showcase-heading">
      <div className="container">
        <div className="showcase__header">
          <motion.h2
            id="showcase-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Preview the dashboard experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Scroll through live-inspired UI states to see how Aegis translates scans into high-signal dashboards and guided
            setup.
          </motion.p>
        </div>
        <div className="tab-chips" role="tablist" aria-label="Dashboard views">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <motion.button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`tab-chip ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                whileTap={{ scale: 0.96 }}
                layout
              >
                {tab.label}
              </motion.button>
            );
          })}
        </div>
        <div className="showcase__panels">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              className={`panel panel--${activeTab.id} active`}
              role="tabpanel"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.97 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              {activeTab.layers.map((layer, index) => (
                <motion.div
                  key={layer.heading}
                  className={`panel__layer panel__layer--${['primary', 'secondary', 'tertiary'][index]}`}
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
                >
                  <div className="panel__callout">
                    <h3>{layer.heading}</h3>
                    <p>{layer.body}</p>
                  </div>
                  <div className={layer.className} aria-hidden="true"></div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
