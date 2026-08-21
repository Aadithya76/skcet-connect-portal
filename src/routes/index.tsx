import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/skcet-logo.png.asset.json";
import campusAsset from "@/assets/campus.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SKCET Digital Campus — Sign In" },
      {
        name: "description",
        content:
          "Official SKCET Digital Campus application. One connected experience for your academic and campus journey.",
      },
      { property: "og:title", content: "SKCET Digital Campus — Sign In" },
      {
        property: "og:description",
        content:
          "One connected experience for your academic and campus journey at Sri Krishna College of Engineering and Technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function GoogleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.92l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.72-4.95H1.28v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l4-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.61 4.59 1.8l3.43-3.43C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.28 6.63l4 3.09C6.23 6.88 8.88 4.75 12 4.75Z"
      />
    </svg>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 180);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <main className="relative h-[100svh] w-full overflow-hidden bg-navy">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <img
          src={campusAsset.url}
          alt="Aerial view of the Sri Krishna campus in Coimbatore"
          className="h-full w-full scale-110 object-cover animate-cinematic will-change-transform"
        />
        <div className="absolute inset-0 bg-overlay-cinematic" />
      </div>

      <div
        className={`relative z-10 flex h-full w-full items-center justify-center px-6 transition-all duration-500 ${
          open && !closing ? "scale-[0.995] blur-[3px]" : ""
        }`}
      >
        <div className="flex w-full max-w-xl flex-col items-center text-center">
          <img
            src={logoAsset.url}
            alt="Sri Krishna Institutions, Coimbatore"
            className="h-24 w-auto animate-logo-in drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)] sm:h-28 md:h-32"
          />

          <h1 className="mt-9 animate-rise text-3xl font-extrabold tracking-tight text-surface [animation-delay:120ms] sm:text-4xl md:text-5xl">
            SKCET Digital Campus
          </h1>

          <p className="mt-4 max-w-md animate-rise text-balance text-sm font-light leading-relaxed text-surface/70 [animation-delay:220ms] sm:text-base">
            One connected experience for your academic and campus journey.
          </p>

          <div className="mt-11 flex w-full max-w-xs animate-rise flex-col gap-3.5 [animation-delay:320ms]">
            <button type="button" className="btn-primary" onClick={() => setOpen(true)}>
              Login
            </button>
            <button type="button" className="btn-google">
              <GoogleIcon className="h-5 w-5" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-5 py-8 ${
            closing ? "animate-fade-out" : "animate-fade-in-fast"
          }`}
        >
          <div
            className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]"
            onClick={close}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Sign in to SKCET Digital Campus"
            className={`relative w-full max-w-md overflow-y-auto rounded-[22px] border border-surface/60 bg-surface/95 p-7 shadow-modal backdrop-blur-xl sm:p-9 ${
              closing ? "animate-modal-out" : "animate-modal-in"
            }`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-2 text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <img src={logoAsset.url} alt="Sri Krishna Institutions" className="h-14 w-auto" />
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink">Welcome Back</h2>
              <p className="mt-2 text-sm font-light text-ink/60">
                Sign in to continue to SKCET Digital Campus.
              </p>
            </div>

            <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5 text-left">
                <label htmlFor="email" className="label-field">
                  Email Address
                </label>
                <input id="email" type="email" autoComplete="email" className="input-field" placeholder="you@skcet.ac.in" />
              </div>
              <div className="space-y-1.5 text-left">
                <label htmlFor="password" className="label-field">
                  Password
                </label>
                <input id="password" type="password" autoComplete="current-password" className="input-field" placeholder="••••••••" />
              </div>

              <div className="flex items-center justify-between pt-1 text-sm">
                <label className="flex cursor-pointer items-center gap-2 text-ink/70">
                  <input type="checkbox" className="checkbox-field" />
                  Remember me
                </label>
                <button type="button" className="font-medium text-royal transition-colors hover:text-primaryblue">
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn-primary mt-2 w-full">
                Login
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-ink/10" />
              <span className="text-xs font-medium tracking-[0.18em] text-ink/40">OR</span>
              <span className="h-px flex-1 bg-ink/10" />
            </div>

            <button type="button" className="btn-google w-full">
              <GoogleIcon className="h-5 w-5" />
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
