import { motion } from "framer-motion";
import { event } from "../data/event";

export default function Welcome() {
  return (
    <section id="welcome" className="bg-charcoal py-24 sm:py-32">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4"
          >
            <p className="eyebrow">A note before we celebrate</p>
            <span className="mt-5 block h-px w-12 bg-gold/50" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-8"
          >
            <p className="font-display text-2xl italic leading-relaxed text-ivory sm:text-3xl md:text-[2.15rem]">
              &ldquo;{event.welcomeMessage}&rdquo;
            </p>
            <footer className="mt-6 font-body text-sm text-stone-light">
              &mdash; {event.name}
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
