import { motion } from "framer-motion";
import { event } from "../data/event";
import { useCountdown } from "../hooks/useCountdown";

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const time = useCountdown(event.dateISO);

  return (
    <section className="bg-charcoal py-24 sm:py-28">
      <div className="container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {time.isPast ? "The celebration has begun" : "Counting down to"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl"
        >
          {time.isPast ? "Thank you for celebrating with us" : event.dateDisplay}
        </motion.h2>

        {!time.isPast && (
          <div
            className="mx-auto mt-14 flex max-w-2xl items-start justify-center gap-4 sm:gap-8"
            role="timer"
            aria-live="polite"
            aria-label={`${time.days} days, ${time.hours} hours, ${time.minutes} minutes and ${time.seconds} seconds remaining`}
          >
            {units.map((unit, i) => (
              <div key={unit.key} className="flex items-center gap-4 sm:gap-8">
                <div className="flex flex-col items-center">
                  <span className="font-display text-4xl font-medium tabular-nums text-gold sm:text-6xl">
                    {String(time[unit.key]).padStart(2, "0")}
                  </span>
                  <span className="eyebrow mt-3 text-[0.62rem] text-stone-light sm:text-[0.7rem]">
                    {unit.label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="mb-6 hidden h-10 w-px bg-gold/20 sm:block" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
