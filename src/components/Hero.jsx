import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { event } from "../data/event";
import { asset } from "../utils/asset";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-charcoal-deep">
      {/* Background photograph — replace public/images/graduation.jpg */}
      <motion.div
        className="absolute inset-0"
        initial={shouldReduceMotion ? {} : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={asset(event.heroImage)}
          alt={`${event.name} on graduation day`}
          className="h-full w-full object-cover object-[72%_center] sm:object-[65%_center] md:object-center"
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>

      {/* Elegant overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/55 to-charcoal-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/40 via-transparent to-transparent" />

      <div className="container-narrow relative w-full pb-16 pt-40 sm:pb-20 md:pb-24">
        <motion.p {...fadeUp(0.15)} className="eyebrow mb-5">
          {event.dateDisplay}
        </motion.p>

        <motion.h1
          {...fadeUp(0.3)}
          className="max-w-4xl font-display text-[2.75rem] font-medium leading-[1.05] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {event.name}
        </motion.h1>

        <motion.div {...fadeUp(0.5)} className="mt-6 flex items-center gap-4 sm:mt-8">
          <span className="h-px w-10 bg-gold/60 sm:w-14" />
          <p className="font-display text-lg italic text-gold-light sm:text-2xl">
            {event.occasion} &middot; {event.year}
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#welcome"
        aria-label="Scroll to next section"
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="group absolute bottom-7 left-1/2 -translate-x-1/2 text-ivory/70 transition-colors hover:text-gold sm:bottom-9"
      >
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <ChevronDown size={22} strokeWidth={1.25} />
        </motion.span>
      </motion.a>
    </section>
  );
}