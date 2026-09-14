
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MessageCircle, X } from "lucide-react";
import { event } from "../data/event";

const whatsappNumber = "254115760476";

export default function Rsvp() {
  const [response, setResponse] = useState(null);

  const sendRsvp = (answer) => {
    setResponse(answer);

    const message =
      answer === "yes"
        ? `Hi Sajaad! I'll be joining you for your graduation celebration on ${event.dateDisplay}. Looking forward to celebrating with you! 🎓`
        : `Hi Sajaad, thank you for the invitation. Unfortunately, I won't be able to attend your graduation celebration. Congratulations! 🎓`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative overflow-hidden bg-charcoal-soft py-24 sm:py-32 md:py-40">
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/[0.035]
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* Background pattern */}
      <div className="rsvp-pattern pointer-events-none absolute inset-0" />

      <div className="container-narrow relative z-10 px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">One last thing</p>

          <span className="mx-auto mt-5 block h-px w-12 bg-gold/50" />

          <h2
            className="
              mt-7
              font-display
              text-[2.5rem]
              font-medium
              leading-[1.05]
              tracking-[-0.025em]
              text-ivory
              sm:mt-8
              sm:text-5xl
              md:text-6xl
            "
          >
            Will you be
            <br />
            <span className="italic text-gold-light">
              joining us?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-lg
              text-sm
              leading-7
              text-stone-light
              sm:text-base
              sm:leading-relaxed
            "
          >
            {event.contact.rsvpNote}
          </p>
        </motion.div>

        {/* RSVP card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 max-w-lg sm:mt-14"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.10]
              bg-white/[0.035]
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* Glass shine */}
            <div
              className="
                pointer-events-none
                absolute
                -left-[120%]
                top-0
                h-full
                w-[65%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/[0.12]
                to-transparent
                opacity-0
                transition-all
                duration-700
                ease-out
                group-hover:left-[140%]
                group-hover:opacity-100
              "
            />

            {/* Gold edge */}
            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-px
                bg-gradient-to-b
                from-transparent
                via-gold/70
                to-transparent
                opacity-60
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <div className="relative z-10">
              <p className="text-center text-xs uppercase tracking-[0.25em] text-stone-light">
                Let me know
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {/* YES */}
                <motion.button
                  type="button"
                  onClick={() => sendRsvp("yes")}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group/yes
                    relative
                    flex
                    min-h-[58px]
                    items-center
                    justify-center
                    gap-2.5
                    overflow-hidden
                    border
                    border-gold/40
                    bg-gold/[0.08]
                    px-5
                    py-4
                    text-[0.65rem]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-gold-light
                    transition-all
                    duration-300
                    hover:border-gold/70
                    hover:bg-gold/[0.14]
                    hover:shadow-[0_0_35px_rgba(212,175,55,0.12)]
                  "
                >
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
                      group-hover/yes:left-[130%]
                    "
                  />

                  <Check
                    size={17}
                    strokeWidth={1.5}
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    Yes, I'll be there
                  </span>
                </motion.button>

                {/* NO */}
                <motion.button
                  type="button"
                  onClick={() => sendRsvp("no")}
                  whileTap={{ scale: 0.96 }}
                  className="
                    group/no
                    relative
                    flex
                    min-h-[58px]
                    items-center
                    justify-center
                    gap-2.5
                    overflow-hidden
                    border
                    border-white/10
                    bg-white/[0.025]
                    px-5
                    py-4
                    text-[0.65rem]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-ivory/70
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.05]
                    hover:text-ivory
                  "
                >
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
                      via-white/10
                      to-transparent
                      transition-all
                      duration-500
                      group-hover/no:left-[130%]
                    "
                  />

                  <X
                    size={16}
                    strokeWidth={1.4}
                    className="relative z-10"
                  />

                  <span className="relative z-10">
                    Sorry, I can't
                  </span>
                </motion.button>
              </div>

              {/* WhatsApp note */}
              <div className="mt-7 flex items-center justify-center gap-2 text-stone-light/60">
                <MessageCircle size={14} strokeWidth={1.4} />

                <p className="text-[0.6rem] uppercase tracking-[0.18em]">
                  Opens WhatsApp
                </p>
              </div>

              {/* Response confirmation */}
              <AnimatePresence mode="wait">
                {response && (
                  <motion.div
                    key={response}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    className="mt-5 text-center"
                  >
                    <p className="text-xs text-gold-light">
                      Your response is ready in WhatsApp.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

