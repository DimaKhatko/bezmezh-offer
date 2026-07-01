export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-grad-sakura py-20 lg:py-28">
      {/* Soft brand accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-xl px-5 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-600">
            ありがとう · Дякуємо
          </div>
          <h2 className="mt-4 text-balance font-display text-4xl font-black text-violet-700 sm:text-5xl">
            Дякуємо, що дочитали. Поїхали з нами!
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-card backdrop-blur-sm sm:p-8">
          {/* Contacts */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <span className="text-sm text-foreground/50">Звʼязатись з нами напряму</span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+380662217373"
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50"
              >
                <span>📞</span>
                <span className="whitespace-nowrap">+38 066 221 73 73</span>
              </a>
              <a
                href="https://t.me/point_camp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-violet-200 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                  <path d="M9.7 15.3l-.4 4c.6 0 .8-.3 1.1-.6l2.7-2.5 5.5 4c1 .6 1.7.3 2-1l3.6-16.9c.3-1.5-.6-2.1-1.6-1.7L1 8.5C-.4 9.1-.4 10 .7 10.4l5.6 1.7L19 4.4c.6-.3 1.2-.1.7.3" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-foreground/45">
          Point Camp · 2026 — подорож, яку згадуватимуть усе життя.
        </div>
      </div>
    </section>
  );
}
