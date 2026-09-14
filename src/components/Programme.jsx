import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { programme } from "../data/event";

export default function Programme() {
  return (
    <section className="relative overflow-hidden bg-charcoal-deep py-24 sm:py-32 md:py-40">
      <div className="programme-background" aria-hidden="true" />

      <div className="container-narrow relative z-10 px-5 sm:px-6">
        {/* Header */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.4 }}
  transition={{ duration: 0.7 }}
  className="mb-16 text-center"
>
  <p className="eyebrow">Running order</p>

  <h2 className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl">
    Programme for the evening
  </h2>
</motion.div>

        {/* Programme */}
        <div className="mx-auto max-w-5xl">
          <div className="space-y-5 sm:space-y-6">
            {programme.map((item, i) => (
              <motion.article
                key={item.time + item.title}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  border
                  border-white/[0.10]
                  bg-white/[0.035]
                  shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:border-gold/30
                  hover:bg-white/[0.055]
                  hover:shadow-[0_25px_80px_rgba(0,0,0,0.28)]
                "
              >
                {/* Glass reflection */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[120%]
                    top-0
                    h-full
                    w-[70%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.18]
                    to-transparent
                    opacity-0
                    transition-all
                    duration-700
                    ease-out
                    group-hover:left-[140%]
                    group-hover:opacity-100
                  "
                />

                {/* Soft glass highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/[0.07]
                    via-transparent
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Gold edge */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[2px]
                    bg-gradient-to-b
                    from-gold
                    via-gold/30
                    to-transparent
                    opacity-60
                    transition-all
                    duration-500
                    group-hover:w-[3px]
                    group-hover:opacity-100
                  "
                />

                <div className="relative p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col gap-7 md:flex-row md:gap-12">
                    {/* Chapter */}
                    <div className="flex items-center gap-4 md:w-40 md:shrink-0 md:items-start md:flex-col">
                      <span
                        className="
                          font-display
                          text-5xl
                          leading-none
                          text-gold/35
                          transition-all
                          duration-500
                          group-hover:text-gold/70
                          group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.25)]
                          sm:text-6xl
                        "
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="h-px w-8 bg-gold/30 md:w-10" />

                      <span
                        className="
                          pt-1
                          text-[0.6rem]
                          font-medium
                          uppercase
                          tracking-[0.16em]
                          text-stone-light
                          sm:text-xs
                        "
                      >
                        {item.time}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="mb-2 text-[0.6rem] uppercase tracking-[0.22em] text-gold-light/70">
                            Chapter {String(i + 1).padStart(2, "0")}
                          </p>

                          <h3
                            className="
                              font-display
                              text-2xl
                              font-medium
                              leading-tight
                              text-ivory
                              transition-colors
                              duration-500
                              group-hover:text-white
                              sm:text-3xl
                              md:text-[2.1rem]
                            "
                          >
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-xl text-sm leading-6 text-stone-light">
                            {item.note}
                          </p>
                        </div>

                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            text-gold/50
                            transition-all
                            duration-500
                            group-hover:border-gold/40
                            group-hover:bg-gold/10
                            group-hover:text-gold
                            group-hover:shadow-[0_0_25px_rgba(212,175,55,0.12)]
                          "
                        >
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.3}
                            className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      {item.details?.length > 0 && (
                        <div className="mt-7 border-t border-white/[0.08] pt-5">
                          <div className="grid gap-3 sm:grid-cols-2">
                            {item.details.map((detail) => (
                              <div
                                key={detail}
                                className="flex items-start gap-3"
                              >
                                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-gold/60" />

                                <span className="text-sm leading-6 text-ivory/60">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Ending */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex items-center justify-center gap-4 sm:mt-20"
        >
          <span className="h-px w-10 bg-gold/25" />

          <p className="font-display text-base italic text-ivory/40 sm:text-lg">
            And then, we celebrate.
          </p>

          <span className="h-px w-10 bg-gold/25" />
        </motion.div>
      </div>
    </section>
  );
}