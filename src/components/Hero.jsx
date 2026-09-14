
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { event } from "../data/event";
import { asset } from "../utils/asset";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: shouldReduceMotion
      ? {}
      : {
          opacity: 0,
          y: 35,
        },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 1,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal-deep">

      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <motion.div
        className="absolute inset-0"
        initial={
          shouldReduceMotion
            ? {}
            : {
                scale: 1.1,
                opacity: 0,
              }
        }
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src={asset(event.heroImage)}
          alt={`${event.name} on graduation day`}
          className="
            h-full
            w-full
            object-cover
            object-[65%_center]
            sm:object-[60%_center]
            md:object-center
          "
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </motion.div>

      {/* =========================================================
          CINEMATIC OVERLAYS
      ========================================================= */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/45 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/75 via-charcoal-deep/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/35 via-transparent to-transparent" />

      {/* =========================================================
          TOP LABEL
      ========================================================= */}
      <div className="absolute left-6 right-6 top-7 flex items-center justify-between sm:left-10 sm:right-10 sm:top-10 lg:left-14 lg:right-14">

        <motion.p
          {...fadeUp(0.2)}
          className="
            text-[0.65rem]
            font-medium
            uppercase
            tracking-[0.3em]
            text-ivory/80
            sm:text-xs
          "
        >
          Class of {event.year}
        </motion.p>

        <motion.p
          {...fadeUp(0.3)}
          className="
            hidden
            text-[0.65rem]
            uppercase
            tracking-[0.25em]
            text-ivory/60
            sm:block
          "
        >
          {event.dateDisplay}
        </motion.p>
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <div className="container-narrow relative flex min-h-[100svh] items-end pb-24 pt-32 sm:pb-28 md:pb-32">

        <div className="max-w-5xl">

          {/* Small introduction */}
          <motion.p
            {...fadeUp(0.45)}
            className="
              mb-5
              text-[0.7rem]
              font-medium
              uppercase
              tracking-[0.3em]
              text-gold-light
              sm:text-xs
            "
          >
            A new chapter begins
          </motion.p>

          {/* =====================================================
              NAME
          ===================================================== */}
          <motion.h1
            {...fadeUp(0.6)}
          className="
             font-display
             text-[3rem]
             font-medium
             leading-[0.9]
             tracking-[-0.04em]
             text-ivory
             sm:whitespace-nowrap
             sm:text-6xl
             md:text-7xl
             lg:text-[7rem]
"
          >
            {event.name}
          </motion.h1>

          {/* =====================================================
              OCCASION
          ===================================================== */}
          <motion.div
            {...fadeUp(0.8)}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
              sm:mt-9
            "
          >
            <span className="h-px w-12 bg-gold/70 sm:w-16" />

            <p className="font-display text-lg italic text-gold-light sm:text-2xl">
              {event.occasion}
            </p>
          </motion.div>

          {/* =====================================================
              DEGREE
          ===================================================== */}
          <motion.p
            {...fadeUp(0.95)}
            className="
              mt-3
              text-sm
              font-medium
              tracking-[0.08em]
              text-ivory/85
              sm:text-base
            "
          >
            BSc. in Information Technology
          </motion.p>

          {/* =====================================================
              EVENT INFORMATION
          ===================================================== */}
          <motion.div
            {...fadeUp(1.1)}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2
              text-xs
              uppercase
              tracking-[0.18em]
              text-ivory/65
              sm:mt-9
              sm:text-sm
            "
          >
            <span>{event.dateDisplay}</span>

            <span className="h-1 w-1 rounded-full bg-gold/70" />

            <span>{event.timeDisplay}</span>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}
      <motion.a
        href="#welcome"
        aria-label="Scroll to next section"
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.4,
        }}
        className="
          absolute
          bottom-7
          right-6
          flex
          items-center
          gap-3
          text-ivory/60
          transition-colors
          hover:text-gold
          sm:bottom-10
          sm:right-10
          lg:right-14
        "
      >
        <span className="hidden text-[0.6rem] uppercase tracking-[0.3em] sm:block">
          Explore
        </span>

        <motion.span
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 7, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={18} strokeWidth={1.2} />
        </motion.span>
      </motion.a>

    </section>
  );
}

