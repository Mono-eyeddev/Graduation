import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { event } from "../data/event";
import { asset } from "../utils/asset";

function GalleryImage({ src, alt, index }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.figure
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden bg-charcoal-soft ${
        index % 5 === 0 ? "sm:row-span-2" : ""
      }`}
    >
      <div className={`w-full ${index % 5 === 0 ? "aspect-[3/4] sm:h-full" : "aspect-[4/3]"}`}>
        {!failed ? (
          <img
            src={asset(src)}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-gold/15 text-gold/40">
            <GraduationCap size={26} strokeWidth={1} />
            <span className="text-xs text-stone-light">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section className="bg-charcoal py-24 sm:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="eyebrow">A few frames</p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ivory sm:text-4xl">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {event.gallery.map((img, i) => (
            <GalleryImage key={img.src} src={img.src} alt={img.alt} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
