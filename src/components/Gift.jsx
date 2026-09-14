import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Copy,
  Smartphone,
  Sparkles,
} from "lucide-react";

const mpesaNumber = "0115760476";

const quickAmounts = [500, 1000, 2000, 5000];

export default function Gift() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const selectedAmount =
    customAmount.trim() !== ""
      ? Number(customAmount)
      : amount;

  const selectAmount = (value) => {
    setAmount(value);
    setCustomAmount("");
  };

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

  const handleSendGift = async () => {
    await copyNumber();
    setShowPaymentModal(true);
  };

  const confirmGift = () => {
    setShowPaymentModal(false);
    setSent(true);
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
            For those who would like to send a gift digitally,
            M-Pesa is available below. Physical gifts are also
            warmly appreciated at the celebration.
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
              p-6
              shadow-[0_25px_80px_rgba(0,0,0,0.35)]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-gold/30
              hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)]
              sm:p-9
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
                  M-Pesa Gift
                </p>
              </div>

              {/* Amount */}
              <div className="mt-8">
                <p className="mb-3 text-center text-[0.65rem] uppercase tracking-[0.25em] text-stone-light">
                  Choose an amount
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {quickAmounts.map((value) => {
                    const active =
                      !customAmount &&
                      amount === value;

                    return (
                      <motion.button
                        key={value}
                        type="button"
                        whileTap={{ scale: 0.94 }}
                        onClick={() =>
                          selectAmount(value)
                        }
                        className={`
                          border
                          px-2
                          py-3
                          text-xs
                          font-medium
                          transition-all
                          duration-300
                          ${
                            active
                              ? "border-gold/60 bg-gold/10 text-gold-light shadow-[0_0_25px_rgba(212,175,55,0.12)]"
                              : "border-white/10 bg-white/[0.025] text-ivory/70 hover:border-gold/30 hover:text-ivory"
                          }
                        `}
                      >
                        KES {value.toLocaleString()}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Custom amount */}
                <div className="mt-3">
                  <input
                    type="number"
                    min="1"
                    inputMode="numeric"
                    placeholder="Or enter another amount"
                    value={customAmount}
                    onChange={(e) =>
                      setCustomAmount(e.target.value)
                    }
                    className="
                      w-full
                      border
                      border-white/10
                      bg-white/[0.025]
                      px-4
                      py-3
                      text-center
                      text-sm
                      text-ivory
                      outline-none
                      placeholder:text-stone-light/50
                      transition
                      focus:border-gold/40
                      focus:bg-white/[0.04]
                    "
                  />
                </div>
              </div>

              {/* Number */}
              <div className="mt-8 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-light">
                  Send to
                </p>

                <p className="mt-2 font-display text-xl text-ivory">
                  Sajaad Iqbal
                </p>

                <p className="mt-1 font-display text-3xl tracking-[0.08em] text-gold-light sm:text-4xl">
                  0115 760 476
                </p>
              </div>

              {/* Copy */}
              <motion.button
                type="button"
                onClick={copyNumber}
                whileTap={{ scale: 0.96 }}
                className="
                  mx-auto
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-[0.65rem]
                  uppercase
                  tracking-[0.2em]
                  text-stone-light
                  transition-colors
                  hover:text-gold-light
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

              {/* Send */}
              <motion.button
                type="button"
                onClick={handleSendGift}
                disabled={!selectedAmount || selectedAmount <= 0}
                whileTap={{ scale: 0.97 }}
                className="
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  border
                  border-gold/40
                  bg-gold/[0.08]
                  px-6
                  py-4
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-gold-light
                  transition-all
                  duration-300
                  hover:border-gold/70
                  hover:bg-gold/[0.14]
                  hover:shadow-[0_0_35px_rgba(212,175,55,0.12)]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <Smartphone size={16} />
                Send KES{" "}
                {selectedAmount
                  ? selectedAmount.toLocaleString()
                  : "0"}
              </motion.button>

              {/* Instructions */}
              <div className="mt-6 border-t border-white/[0.07] pt-6 text-center">
                <p className="text-xs leading-6 text-stone-light">
                  Lipa na M-Pesa → Send Money →{" "}
                  <span className="text-ivory/80">
                    0115 760 476
                  </span>
                </p>
              </div>

              {/* Confirmation */}
              <div className="mt-5">
                <AnimatePresence mode="wait">
                  {!sent ? (
                    <motion.button
                      key="confirm"
                      type="button"
                      onClick={confirmGift}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="
                        mx-auto
                        flex
                        items-center
                        gap-2
                        text-[0.6rem]
                        uppercase
                        tracking-[0.18em]
                        text-stone-light/70
                        transition-colors
                        hover:text-gold-light
                      "
                    >
                      <Check size={13} />
                      I've sent my gift
                    </motion.button>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      className="flex flex-col items-center"
                    >
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-gold/30
                          bg-gold/10
                          text-gold-light
                        "
                      >
                        <Sparkles
                          size={17}
                          strokeWidth={1.4}
                        />
                      </div>

                      <p className="mt-3 text-xs text-gold-light">
                        Thank you for your kindness.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* M-Pesa Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/70
              p-5
              backdrop-blur-md
            "
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-md
                overflow-hidden
                rounded-3xl
                border
                border-gold/20
                bg-charcoal-deep
                p-7
                shadow-2xl
              "
            >
              {/* Gold glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-gold/10
                  blur-3xl
                "
              />

              <div className="relative z-10">

                {/* Header */}
                <div className="mb-7 flex items-start justify-between">
                  <div>
                    <p className="eyebrow mb-2">
                      M-Pesa Gift
                    </p>

                    <h3 className="font-display text-2xl text-ivory">
                      Almost there.
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowPaymentModal(false)
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-ivory/50
                      transition-colors
                      hover:border-gold/30
                      hover:text-gold-light
                    "
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {/* Amount */}
                <div
                  className="
                    mb-5
                    rounded-2xl
                    border
                    border-gold/15
                    bg-white/[0.03]
                    p-5
                    text-center
                  "
                >
                  <p className="mb-1 text-xs uppercase tracking-[0.2em] text-ivory/40">
                    Gift amount
                  </p>

                  <p className="font-display text-3xl text-gold-light">
                    KES {selectedAmount.toLocaleString()}
                  </p>
                </div>

                {/* Instructions */}
                <div className="space-y-4 text-sm text-ivory/70">
                  <p>
                    Your M-Pesa number has been copied.
                    Complete the gift manually using your
                    M-Pesa app or phone.
                  </p>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-4
                    "
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-ivory/40">
                        Send to
                      </span>

                      <span className="font-medium text-ivory">
                        Sajaad Iqbal
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-ivory/40">
                        Number
                      </span>

                      <span className="font-mono text-gold-light">
                        0115 760 476
                      </span>
                    </div>
                  </div>

                  <p className="leading-relaxed text-ivory/50">
                    Open{" "}
                    <span className="text-ivory/80">
                      M-Pesa
                    </span>
                    {" → "}
                    <span className="text-ivory/80">
                      Send Money
                    </span>
                    {" → "}
                    enter the number above, then enter
                    your gift amount.
                  </p>
                </div>

                {/* Done */}
                <button
                  type="button"
                  onClick={confirmGift}
                  className="
                    mt-7
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-gold
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-charcoal
                    transition-all
                    duration-300
                    hover:bg-gold-light
                  "
                >
                  <Check size={16} />
                  I've sent my gift
                </button>

                {/* Later */}
                <button
                  type="button"
                  onClick={() =>
                    setShowPaymentModal(false)
                  }
                  className="
                    mt-3
                    w-full
                    py-2
                    text-xs
                    text-ivory/40
                    transition-colors
                    hover:text-ivory/70
                  "
                >
                  I'll do it later
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}