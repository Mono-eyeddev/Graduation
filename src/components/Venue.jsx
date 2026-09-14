import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { event } from "../data/event";

export default function Venue() {
  return (
    <section className="bg-charcoal py-24 sm:py-28">
      <div className="container-narrow">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7"
          >
            <p className="eyebrow">Where to find us</p>

            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ivory sm:text-4xl">
              {event.venue.name}
            </h2>

            <p className="mt-3 flex items-start gap-2 text-stone-light">
              <MapPin
                size={18}
                strokeWidth={1.25}
                className="mt-0.5 shrink-0 text-gold"
              />
              <span>{event.venue.address}</span>
            </p>

            <a
              href={event.venue.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 border border-gold/50 px-7 py-3 text-sm tracking-wide text-ivory transition-colors duration-300 ease-editorial hover:border-gold hover:bg-gold/10"
            >
              Get Directions

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="overflow-hidden border border-gold/20 bg-charcoal-soft">
              <iframe
                src={event.venue.mapsEmbedUrl}
                title={`Map showing ${event.venue.name}`}
                width="100%"
                height="100%"
                className="aspect-[4/3] w-full"
                style={{
                  border: 0,
                  filter:
                    "invert(92%) hue-rotate(180deg) brightness(0.9) contrast(0.9)",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}