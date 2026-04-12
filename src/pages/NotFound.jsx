import { motion } from "framer-motion";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

const MotionDiv = motion.div;

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-20 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--color-secondary)_22%,transparent),transparent_45%),radial-gradient(circle_at_80%_0%,color-mix(in_oklab,var(--color-primary)_20%,transparent),transparent_35%),linear-gradient(180deg,#ffffff_0%,color-mix(in_oklab,var(--color-primary-dark)_8%,white)_100%)]" />

      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl  p-10 text-center shadow-2xl shadow-primary/10 backdrop-blur"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-primary-dark">
          {/* <SearchX className="h-3.5 w-3.5" /> */}
          Oops!
        </div>

        <h1 className="text-6xl font-black tracking-tight text-primary-dark sm:text-7xl">404</h1>
        <p className="mt-3 text-xl font-semibold text-slate-800">Page Not Found</p>
        <p className="mt-2 max-w-xl text-sm leading-6 text-primary-dark/75 sm:text-base">
          The link might be outdated or the page may have moved. You can return home or head to our services page to keep exploring.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-dark px-5 py-3 text-sm font-medium text-white transition hover:bg-primary"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-white px-5 py-3 text-sm font-medium text-primary-dark transition hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4" />
            View Services
          </Link>
        </div>
      </MotionDiv>
    </section>
  );
}
