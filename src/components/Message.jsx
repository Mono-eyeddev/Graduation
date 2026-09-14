import { motion } from "framer-motion";
import { event } from "../data/event";

export default function Message() {
  return (
    <section className="bg-charcoal-soft py-28 sm:py-36">
      <div className="container-narrow text-center">
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
