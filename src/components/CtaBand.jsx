import { motion } from 'framer-motion';
import SignupForm from './SignupForm.jsx';

const CtaBand = () => (
  <section className="cta-band" aria-labelledby="cta-band-heading">
    <div className="container">
      <div>
        <motion.h2
          id="cta-band-heading"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Get launch updates first
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
        >
          Join the early access list for exclusive hardening guides and release invites.
        </motion.p>
      </div>
      <SignupForm
        id="footer-signup"
        messageId="footer-message"
        inline
        submitLabel="Notify me"
      />
    </div>
  </section>
);

export default CtaBand;
