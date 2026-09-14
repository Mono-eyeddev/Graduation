
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-charcoal-deep py-24 sm:py-32 md:py-44">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-gold/5
            blur-[90px]
            sm:h-[400px]
            sm:w-[400px]
            sm:blur-[110px]
            md:h-[500px]
            md:w-[500px]
            md:blur-[120px]
          "
        />
      </div>

      <div className="container-narrow relative z-10 px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="eyebrow text-[0.6rem] sm:text-xs">
            The next chapter
          </p>

          <div className="mx-auto mt-5 h-px w-12 bg-gold/60 sm:mt-6 sm:w-16" />

          <h2
            className="
              mt-7
              font-display
              text-[2.4rem]
              font-medium
              leading-[1.05]
              tracking-[-0.025em]
              text-ivory
              sm:mt-8
              sm:text-5xl
              md:text-7xl
            "
          >
            The degree is earned.
            <br />
            <span className="italic text-gold-light">
              The journey continues.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-[34rem]
              text-sm
              leading-7
              text-stone-light
              sm:mt-7
              sm:text-base
              sm:leading-relaxed
            "
          >
            Four years of learning, building, creating and growing brought me
            to this moment. But this isn't where the story ends.
          </p>

          <motion.a
            href="https://mono-eyeddev.github.io/myPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="
              group
              relative
              mt-9
              inline-flex
              w-full
              max-w-[18rem]
              items-center
              justify-center
              gap-3
              overflow-hidden
              border
              border-ivory/20
              bg-transparent
              px-5
              py-4
              text-[0.65rem]
              font-medium
              uppercase
              tracking-[0.2em]
              text-ivory
              transition-all
              duration-300
              active:border-gold
              active:bg-gold/10
              active:text-gold-light
              active:shadow-[0_0_30px_rgba(212,175,55,0.18)]
              sm:mt-10
              sm:w-auto
              sm:max-w-none
              sm:gap-4
              sm:px-8
              sm:text-xs
              sm:tracking-[0.25em]
              sm:hover:border-gold/70
              sm:hover:text-gold-light
            "
          >
            {/* Touch feedback layer */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-gold/10
                to-transparent
                transition-transform
                duration-700
                group-active:translate-x-full
              "
            />

            <span className="relative z-10">
              Get to know the grad
            </span>

            <motion.span
              variants={{
                hover: {
                  x: 4,
                  y: -4,
                },
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="relative z-10"
            >
              <ArrowUpRight
                size={17}
                strokeWidth={1.4}
              />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
