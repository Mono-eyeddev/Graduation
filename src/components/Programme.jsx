import { motion } from "framer-motion";
import { programme } from "../data/event";

export default function Programme() {
  return (
    <section className="bg-charcoal-soft py-24 sm:py-28">
      <div className="container-narrow">
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

        <div className="relative mx-auto max-w-2xl">
          <span
            aria-hidden="true"
            className="absolute left-[5.5rem] top-2 bottom-2 w-px bg-gold/20 sm:left-24"
          />

          <ol className="space-y-10">
            {programme.map((item, i) => (
              <motion.li
                key={item.time + item.title}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 sm:gap-10"
              >
                <span className="w-16 shrink-0 pt-0.5 text-right font-body text-sm text-stone-light sm:w-20 sm:text-base">
                  {item.time}
                </span>
                <span
                  aria-hidden="true"
                  className="relative top-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold ring-4 ring-charcoal-soft"
                />
                <div className="pb-1">
                  <h3 className="font-display text-lg text-ivory sm:text-xl">{item.title}</h3>
                  {item.note && (
                    <p className="mt-1 text-sm text-stone-light">{item.note}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
