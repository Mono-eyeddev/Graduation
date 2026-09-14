import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { event } from "../data/event";

export default function Rsvp() {
  return (
    <section id="rsvp" className="bg-charcoal-soft py-24 sm:py-28">
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Kindly RSVP</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl">
            We'd love to know you're coming
          </h2>
          <p className="mx-auto mt-4 max-w-md text-stone-light">{event.contact.rsvpNote}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 flex max-w-md flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={event.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-charcoal-deep transition-colors duration-300 ease-editorial hover:bg-gold-light"
          >
            <MessageCircle size={17} strokeWidth={1.75} />
            RSVP on WhatsApp
          </a>
          <a
            href={`mailto:${event.contact.email}`}
            className="inline-flex items-center justify-center gap-2 border border-gold/40 px-6 py-3 text-sm text-ivory transition-colors duration-300 ease-editorial hover:border-gold hover:bg-gold/10"
          >
            <Mail size={17} strokeWidth={1.75} />
            Email
          </a>
        </motion.div>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-stone-light">
          <Phone size={15} strokeWidth={1.5} className="text-gold" />
          {event.contact.phone}
        </p>
      </div>
    </section>
  );
}
