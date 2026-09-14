
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [year, setYear] = useState(2021);

  useEffect(() => {
    const years = [2021, 2022, 2023, 2024, 2025, 2026];
    let index = 0;

    // Slow year progression
    const interval = setInterval(() => {
      index++;

      if (index < years.length) {
        setYear(years[index]);
      } else {
        clearInterval(interval);

        // Hold on 2026 before moving to the final message
        setTimeout(() => {
          onComplete();
        }, 3500);
      }
    }, 750);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-charcoal-deep
        "
        initial={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 1.12,
          filter: "blur(12px)",
          y: -20,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative flex w-full max-w-3xl flex-col items-center px-6 text-center">
          <motion.div
            key={year}
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-display
              text-5xl
              tracking-[0.25em]
              text-gold-light
              sm:text-7xl
              md:text-8xl
            "
          >
            {year}
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 4.8,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-ivory/50">
              A journey of years
            </p>

            <h1
              className="
                mt-5
                font-display
                text-5xl
                font-medium
                tracking-tight
                text-ivory
                sm:text-7xl
                md:text-8xl
              "
            >
              WE MADE IT.
            </h1>

            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 5.2,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-7 block h-px w-24 origin-center bg-gold"
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 5.5,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-xl"
          >
            <p className="font-display text-xl italic leading-relaxed text-ivory/90 sm:text-2xl">
              Welcome, friends & family.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-stone-light">
              Thank you for being here to celebrate this special moment with me.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 5.9,
              duration: 0.9,
            }}
            className="mt-10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold-light">
              Sajaad Iqbal
            </p>

            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-ivory/40">
              BSc. in Information Technology · Class of 2026
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}


