import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, MapPin, Clock } from "lucide-react";
import { details } from "../data/event";

const icons = {
  Date: CalendarDays,
  Event: GraduationCap,
  Venue: MapPin,
  Time: Clock,
};

export default function EventDetails() {
  return (
    <section className="bg-charcoal-soft py-24 sm:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow">The occasion</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl">
            Details worth marking on the calendar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 divide-y divide-gold/15 border-y border-gold/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {details.map((item, i) => {
            const Icon = icons[item.label] ?? GraduationCap;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col items-center gap-3 px-6 py-10 text-center"
              >
                <Icon size={22} strokeWidth={1.25} className="text-gold" />
                <p className="eyebrow">{item.label}</p>
                <p className="font-display text-lg text-ivory sm:text-xl">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
