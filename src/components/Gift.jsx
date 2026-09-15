
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Smartphone } from "lucide-react";

const mpesaNumber = "0115760476";

export default function Gift() {
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(mpesaNumber);
    } catch {
      const input = document.createElement("input");
      input.value = mpesaNumber;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden bg-charcoal-deep py-24 sm:py-32 md:py-40">
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          -translate-y-1/2
          rounded-full
          bg-gold/[0.045]
          blur-[110px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* Background pattern */}
      <div className="gift-pattern pointer-events-none absolute inset-0" />

      <div className="container-narrow relative z-10 px-5 sm:px-6">

        {/* Heading */}
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
          <p className="eyebrow">
            A little something
          </p>

          <span className="mx-auto mt-5 block h-px w-12 bg-gold/50" />

          <h2
            className="
              mt-7
              font-display
              text-[2.4rem]
              font-medium
              leading-[1.05]
              tracking-[-0.025em]
              text-ivory
              sm:mt-8
              sm:text-5xl
              md:text-6xl
            "
          >
            Your presence is
            <br />
            <span className="italic text-gold-light">
              the greatest gift.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-stone-light
              sm:text-base
              sm:leading-relaxed
            "
          >
            If you would like to send a gift digitally,
            M-Pesa is available below. Physical gifts are
            also warmly appreciated at the celebration.
          </p>
        </motion.div>

        {/* Gift Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 max-w-md sm:mt-14"
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
              p-7
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-gold/30
              hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]
              sm:p-10
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

            <div className="relative z-10 text-center">

              {/* M-Pesa */}
              <div className="flex items-center justify-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold/20
                    bg-gold/10
                    text-gold-light
                  "
                >
                  <Smartphone
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>

                <p
                  className="
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.3em]
                    text-gold-light
                  "
                >
                  M-Pesa
                </p>
              </div>

              {/* Recipient */}
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-light">
                  Send your gift to
                </p>

                <p className="mt-3 font-display text-2xl text-ivory">
                  Sajaad Iqbal
                </p>
              </div>

              {/* Number */}
              <div className="mt-4">
                <p className="font-display text-3xl tracking-[0.08em] text-gold-light sm:text-4xl">
                  0115 760 476
                </p>
              </div>

              {/* Copy button */}
              <motion.button
                type="button"
                onClick={copyNumber}
                whileTap={{ scale: 0.96 }}
                className="
                  mx-auto
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-gold/30
                  bg-gold/[0.06]
                  px-6
                  py-3
                  text-[0.65rem]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-gold-light
                  transition-all
                  duration-300
                  hover:border-gold/60
                  hover:bg-gold/[0.12]
                  hover:shadow-[0_0_30px_rgba(212,175,55,0.10)]
                "
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    Number copied
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy number
                  </>
                )}
              </motion.button>           

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

