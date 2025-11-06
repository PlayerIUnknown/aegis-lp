import { animate, motion, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CounterStat = ({ target = 0, suffix = '', label, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplay(`${Math.round(latest)}${suffix}`);
    });
    return () => unsubscribe();
  }, [motionValue, suffix]);

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setDisplay(`${target}${suffix}`);
      return;
    }
    const controls = animate(motionValue, target, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, target, suffix, delay, shouldReduceMotion, motionValue]);

  return (
    <motion.div
      ref={ref}
      className="stat"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.4 }}
      data-target={target}
      data-suffix={suffix}
    >
      <div className="stat__value">{display}</div>
      <p>{label}</p>
    </motion.div>
  );
};

export default CounterStat;
