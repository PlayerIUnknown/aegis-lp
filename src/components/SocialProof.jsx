import { motion } from 'framer-motion';
import CounterStat from './CounterStat.jsx';

const SocialProof = () => (
  <section className="social-proof" id="proof" aria-labelledby="proof-heading">
    <div className="container">
      <div className="social-proof__intro">
        <motion.h2
          id="proof-heading"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Loved by secure engineering teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Teams rely on Aegis to protect releases without slowing shipping velocity.
        </motion.p>
      </div>
      <div className="social-proof__grid">
        <motion.blockquote
          className="testimonial"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p>
            “Aegis gave our platform engineering group the visibility we needed to enforce security gates with zero drama.”
          </p>
          <cite>Placeholder testimonial — Your logo here</cite>
        </motion.blockquote>
        <div className="stats">
          <CounterStat target={92} suffix="%" label="Pass rate across teams" delay={0.1} />
          <CounterStat target={37} label="Repositories secured during beta" delay={0.2} />
          <CounterStat target={5} suffix=" min" label="Minute onboarding to first scan" delay={0.3} />
        </div>
      </div>
    </div>
  </section>
);

export default SocialProof;
