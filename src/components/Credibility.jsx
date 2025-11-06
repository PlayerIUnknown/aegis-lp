import { motion } from 'framer-motion';

const logos = ['SOC 2 Type II', 'ISO 27001', 'GDPR Ready', 'Fortress Labs', 'EdgeSpan'];

const Credibility = () => (
  <motion.section
    className="credibility"
    aria-label="Compliance and customers"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.4 }}
  >
    <div className="container credibility__content">
      <span className="credibility__eyebrow">Trusted by teams securing cloud-native releases</span>
      <div className="credibility__logos" role="list">
        {logos.map((logo) => (
          <span key={logo} role="listitem">
            {logo}
          </span>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Credibility;
