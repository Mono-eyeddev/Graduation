
import { motion } from "framer-motion";
import { event } from "../data/event";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative overflow-hidden bg-charcoal py-24 sm:py-28 md:py-32"
    >
      {/* Responsive background */}
      <div className="absolute inset-0">
        <img
          src="/Graduation/images/grad.png"
          alt=""
          className="h-full w-full object-cover object-[50%_center] sm:object-center"
          loading="lazy"
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-charcoal/60" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:col-span-4"
          >
            <p className="eyebrow">A note before we celebrate</p>

            <span className="mt-5 block h-px w-12 bg-gold/50" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
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


