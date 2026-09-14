import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.85,
          }}
          whileHover={{
            y: -3,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            fixed
            bottom-6
            right-5
            z-50
            flex
            h-11
            w-11
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/15
            bg-charcoal-deep/70
            text-ivory/80
            shadow-[0_10px_35px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
            transition-colors
            duration-300
            hover:border-gold/50
            hover:text-gold-light
            sm:bottom-8
            sm:right-8
            sm:h-12
            sm:w-12
          "
        >
          {/* Glass shine */}
          <span
            className="
              pointer-events-none
              absolute
              -left-full
              top-0
              h-full
              w-1/2
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-500
              group-hover:left-[130%]
            "
          />

          <ArrowUp
            size={17}
            strokeWidth={1.4}
            className="relative z-10"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}