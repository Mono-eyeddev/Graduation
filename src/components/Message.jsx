import { motion } from "framer-motion";
import { event } from "../data/event";

export default function Message() {
  return (
    <section className="message-section relative overflow-hidden bg-charcoal-soft py-28 sm:py-36">
      {/* Background pattern */}
      <div className="message-pattern" aria-hidden="true" />

      {/* Soft centre glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/[0.035]
          blur-[100px]
        "
        aria-hidden="true"
      />

      <div className="container-narrow relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 block h-px w-12 origin-center bg-gold/50"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl font-display text-2xl italic leading-relaxed text-ivory sm:text-3xl"
        >
          {event.thankYouMessage}
        </motion.p>
      </div>
    </section>
  );
}