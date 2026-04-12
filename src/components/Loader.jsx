import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const MotionDiv = motion.div;

export default function Loader() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-primary-dark/20 via-secondary/35 to-primary-dark px-6 py-12">
      <MotionDiv
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-primary-dark/30 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <MotionDiv
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-xl"
          animate={{ y: [0, -7, 0], rotate: [0, -4, 4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* <BriefcaseBusiness className="h-8 w-8" /> */}
          <img src="amplify-logo-nobg.png" alt="Amplify Resourcing Limited" />
        </MotionDiv>

        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-900">
            Amplify Resourcing Limited
          </p>
          <p className="text-sm text-primary-dark/75">Preparing your experience...</p>
        </div>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2.5 w-2.5 rounded-full bg-primary"
              animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: dot * 0.14,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
