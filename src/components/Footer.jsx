
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  HelpCircle,
  Sparkles,
  X,
} from "lucide-react";
import { event } from "../data/event";

const acceptedAnswers = [
  "degree",
  "a degree",
  "my degree",
  "bachelors degree",
  "bachelor degree",
  "bachelors",
  "bachelor",
];

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  angle: (360 / 28) * i,
  distance: 90 + Math.random() * 130,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 0.12,
}));

export default function Footer() {
  const [showRiddle, setShowRiddle] = useState(false);
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("idle");

  const openRiddle = () => {
    setShowRiddle(true);
    setAnswer("");
    setStatus("idle");
  };

  const closeRiddle = () => {
    setShowRiddle(false);
    setAnswer("");
    setStatus("idle");
  };

  const normalizeAnswer = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ");
  };

  const checkAnswer = () => {
    const normalized = normalizeAnswer(answer);

    if (!normalized) return;

    const correct = acceptedAnswers.some(
      (accepted) =>
        normalizeAnswer(accepted) === normalized
    );

    setStatus(correct ? "correct" : "wrong");
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-charcoal py-12">
      {/* Footer background */}
      <div className="absolute inset-0">
        <img
          src="/Graduation/images/grada.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Footer content */}
      <div className="container-narrow relative z-10 flex flex-col items-center gap-3 text-center">
        <p className="font-display text-lg text-ivory">
          {event.name}
        </p>

        <p className="eyebrow">
          {event.occasion} &middot; {event.year}
        </p>

        {/* Secret button */}
        <motion.button
          type="button"
          onClick={openRiddle}
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          aria-label="Discover a secret"
          className="
            mt-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            text-ivory/30
            transition-all
            duration-300
            hover:border-gold/40
            hover:bg-gold/10
            hover:text-gold-light
          "
        >
          <HelpCircle size={14} strokeWidth={1.3} />
        </motion.button>
      </div>

      {/* Riddle modal */}
      <AnimatePresence>
        {showRiddle && (
          <motion.div
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/75
              px-5
              py-8
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-md
                overflow-y-auto
                rounded-2xl
                border
                border-white/[0.10]
                bg-charcoal-deep/95
                p-7
                text-center
                shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                backdrop-blur-2xl
                sm:p-9
              "
            >
              {/* Gold glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-60
                  w-60
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-gold/[0.06]
                  blur-[90px]
                "
              />

              {/* Close button */}
              <button
                type="button"
                onClick={closeRiddle}
                aria-label="Close riddle"
                className="
                  absolute
                  right-4
                  top-4
                  z-20
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-ivory/40
                  transition-colors
                  hover:bg-white/5
                  hover:text-ivory
                "
              >
                <X size={16} strokeWidth={1.3} />
              </button>

              <div className="relative z-10">
                {/* Riddle icon */}
                <motion.div
                  animate={
                    status === "correct"
                      ? {
                          rotate: [0, -8, 8, -4, 0],
                          scale: [1, 1.15, 1.15, 1.05, 1],
                        }
                      : {
                          rotate: [0, -4, 4, 0],
                        }
                  }
                  transition={{
                    duration:
                      status === "correct" ? 0.8 : 2.5,
                    repeat:
                      status === "correct" ? 0 : Infinity,
                    repeatDelay: 2,
                  }}
                  className="
                    relative
                    mx-auto
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold/20
                    bg-gold/10
                    text-gold-light
                  "
                >
                  {status === "correct" ? (
                    <Sparkles size={18} strokeWidth={1.3} />
                  ) : (
                    <HelpCircle size={18} strokeWidth={1.3} />
                  )}
                </motion.div>

                <p className="mt-5 text-[0.6rem] uppercase tracking-[0.3em] text-gold-light">
                  {status === "correct"
                    ? "Secret unlocked"
                    : "You found something"}
                </p>

                <h3 className="mt-4 font-display text-3xl italic text-ivory">
                  {status === "correct"
                    ? "Access granted."
                    : "A little riddle"}
                </h3>

                <AnimatePresence mode="wait">
                  {status !== "correct" ? (
                    <motion.div
                      key="riddle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Riddle */}
                      <div className="mx-auto mt-6 max-w-sm text-sm leading-7 text-stone-light">
                        <p>
                          I have no teeth,
                          <br />
                          yet I can unlock doors.
                          <br />
                          <br />
                          I have no voice,
                          <br />
                          yet I can speak for years of work.
                          <br />
                          <br />
                          I weigh almost nothing,
                          <br />
                          but can change someone's future.
                          <br />
                          <br />
                          You cannot eat me,
                          <br />
                          you cannot wear me,
                          <br />
                          but once you earn me,
                          <br />
                          you carry me for life.
                        </p>

                        <p className="mt-6 text-ivory">
                          What am I?
                        </p>
                      </div>

                      {/* Answer input */}
                      <div className="mt-7">
                        <input
                          type="text"
                          value={answer}
                          onChange={(e) => {
                            setAnswer(e.target.value);

                            if (status === "wrong") {
                              setStatus("idle");
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              checkAnswer();
                            }
                          }}
                          placeholder="Type your answer..."
                          autoFocus
                          className="
                            w-full
                            border
                            border-white/10
                            bg-white/[0.035]
                            px-4
                            py-3.5
                            text-center
                            text-sm
                            text-ivory
                            outline-none
                            placeholder:text-stone-light/40
                            transition-all
                            focus:border-gold/40
                            focus:bg-white/[0.05]
                          "
                        />

                        <motion.button
                          type="button"
                          onClick={checkAnswer}
                          whileTap={{ scale: 0.95 }}
                          className="
                            mt-3
                            w-full
                            border
                            border-gold/40
                            bg-gold/[0.08]
                            px-6
                            py-3.5
                            text-[0.65rem]
                            font-medium
                            uppercase
                            tracking-[0.2em]
                            text-gold-light
                            transition-all
                            duration-300
                            hover:border-gold/70
                            hover:bg-gold/[0.14]
                            hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]
                          "
                        >
                          Submit answer
                        </motion.button>
                      </div>

                      {/* Wrong answer */}
                      <AnimatePresence>
                        {status === "wrong" && (
                          <motion.p
                            initial={{
                              opacity: 0,
                              y: 6,
                              scale: 0.95,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              scale: 1,
                            }}
                            className="
                              mt-5
                              font-display
                              text-lg
                              italic
                              text-ivory/70
                            "
                          >
                            Oops 😂 Story za jaba.
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    /* Success */
                    <motion.div
                      key="success"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="relative mt-7"
                    >
                      {/* Gold particle burst */}
                      <div className="pointer-events-none absolute left-1/2 top-7">
                        {particles.map((particle) => {
                          const radians =
                            (particle.angle * Math.PI) / 180;

                          const x =
                            Math.cos(radians) *
                            particle.distance;

                          const y =
                            Math.sin(radians) *
                            particle.distance;

                          return (
                            <motion.span
                              key={particle.id}
                              initial={{
                                x: 0,
                                y: 0,
                                opacity: 0,
                                scale: 0,
                              }}
                              animate={{
                                x,
                                y,
                                opacity: [0, 1, 1, 0],
                                scale: [0, 1, 0.8, 0],
                              }}
                              transition={{
                                duration: 1.1,
                                delay: particle.delay,
                                ease: "easeOut",
                              }}
                              className="
                                absolute
                                block
                                rounded-full
                                bg-gold-light
                                shadow-[0_0_10px_rgba(212,175,55,0.9)]
                              "
                              style={{
                                width: particle.size,
                                height: particle.size,
                              }}
                            />
                          );
                        })}
                      </div>

                      {/* Success icon */}
                      <motion.div
                        initial={{
                          scale: 0,
                          rotate: -20,
                        }}
                        animate={{
                          scale: [0, 1.2, 1],
                          rotate: [-20, 8, 0],
                        }}
                        transition={{
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          relative
                          mx-auto
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-gold/40
                          bg-gold/10
                          text-gold-light
                          shadow-[0_0_40px_rgba(212,175,55,0.25)]
                        "
                      >
                        <Check size={27} strokeWidth={1.4} />
                      </motion.div>

                      <p className="mt-6 text-[0.6rem] uppercase tracking-[0.25em] text-stone-light">
                        The answer
                      </p>

                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="mt-2 font-display text-3xl text-gold-light"
                      >
                        A degree. 🎓
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="
                          mx-auto
                          mt-4
                          max-w-xs
                          text-xs
                          leading-6
                          text-stone-light
                        "
                      >
                        Four years of learning.
                        <br />
                        One achievement.
                        <br />
                        A lifetime of possibilities.
                      </motion.p>

                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{ delay: 0.6 }}
                        className="
                          mt-6
                          font-display
                          text-lg
                          italic
                          text-ivory/80
                        "
                      >
                        You found the secret.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}

