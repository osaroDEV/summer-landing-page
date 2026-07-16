import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { MailIcon, WhatsAppIcon } from "@/components/icons";

const WHATSAPP_NUMBER = "+44 7405 786 279";
const WHATSAPP_HREF = "https://wa.me/447405786279";
const EMAIL = "admin@codeillustrated.com";
const SCHOOL_URL = "https://codeillustrated.com/academy";
const SCHOOL_URL_LABEL = "codeillustrated.com/academy";

const stats = [
  { value: "8–18", label: "Age Range" },
  { value: "100%", label: "Live, Instructor-Led" },
  { value: "1:1 & Group", label: "Session Formats" },
  { value: "50+", label: "Portfolio Projects Built" },
];

export default function Home() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-background text-foreground">
      {/* Nav */}
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-10 sm:py-4">
        <a
          href={SCHOOL_URL}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logo.png"
            alt="Code Illustrated Online School"
            width={44}
            height={44}
            className="h-8 w-8 shrink-0 sm:h-11 sm:w-11"
            priority
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-serif text-sm tracking-tight sm:text-lg">
              Code Illustrated
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-accent sm:text-[10px] sm:tracking-[0.2em]">
              Online School
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-3 text-sm text-muted sm:gap-6">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{WHATSAPP_NUMBER}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">{EMAIL}</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 min-h-0 flex-col items-center justify-center px-4 text-center sm:px-10">
        <div className="mb-6 inline-flex max-w-full items-center gap-2 whitespace-nowrap rounded-full border border-highlight/40 bg-highlight/10 px-3.5 py-2 text-[11px] font-medium uppercase tracking-wide text-highlight sm:px-4 sm:text-xs sm:tracking-[0.15em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
          <span>Summer Enrollment Open &middot; Ages 8&ndash;18</span>
        </div>

        <h1 className="max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl md:text-6xl">
          This summer, they build &mdash; not just scroll.
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
          Don&rsquo;t let the school break turn into idle screen time. Live,
          instructor-led 1:1 and group coding classes for ages 8&ndash;18
          &mdash; real projects, real portfolios, and a head start that
          outlasts the holidays.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8">
          <CtaButton />
          <p className="text-[11px] text-muted sm:text-xs">
            No experience needed &middot; 30-minute live intro session
          </p>
        </div>
      </main>

      {/* Stats */}
      <section className="shrink-0 border-t border-border">
        <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-1 px-2 py-3 text-center sm:px-4 sm:py-5 ${
                i % 2 === 0 ? "border-r border-border" : ""
              } ${i < 2 ? "border-b border-border sm:border-b-0" : ""} ${
                i > 0 ? "sm:border-l sm:border-r-0" : ""
              }`}
            >
              <span className="font-serif text-lg text-accent sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.08em] text-muted sm:text-[11px] sm:tracking-[0.1em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex shrink-0 flex-col items-center gap-1.5 border-t border-border px-4 py-3 text-center text-[11px] text-muted sm:flex-row sm:justify-between sm:gap-2 sm:px-10 sm:py-4 sm:text-left sm:text-xs">
        <div className="flex flex-col items-center gap-0.5 sm:items-start">
          <span className="text-foreground/80">
            &copy; 2026 Code Illustrated Online School
          </span>
          <a
            href={SCHOOL_URL}
            className="text-accent transition-colors hover:text-foreground"
          >
            {SCHOOL_URL_LABEL}
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {WHATSAPP_NUMBER}
          </a>
          <span className="text-border">&middot;</span>
          <a
            href={`mailto:${EMAIL}`}
            className="transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
