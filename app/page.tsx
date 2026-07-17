import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { MailIcon, WhatsAppIcon } from "@/components/icons";
import {
  RainbowArch,
  ArrowDoodle,
  SunDoodle,
  CloudDoodle,
  HeartsDoodle,
  ButterflyDoodle,
} from "@/components/Doodles";

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
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/20 selection:text-foreground">
      {/* Nav */}
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-10 sm:py-4 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <a
          href={SCHOOL_URL}
          className="flex min-w-0 items-center gap-2 sm:gap-3 group"
        >
          <Image
            src="/logo.png"
            alt="Code Illustrated Online School"
            width={44}
            height={44}
            className="h-8 w-8 shrink-0 sm:h-11 sm:w-11 transition-transform group-hover:scale-105"
            priority
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-serif text-sm font-bold tracking-tight sm:text-lg text-foreground">
              Code Illustrated
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-highlight sm:text-[10px] sm:tracking-[0.2em]">
              Online School
            </span>
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-3 text-xs sm:text-sm text-muted sm:gap-6">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-highlight"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-600" />
            <span className="hidden sm:inline font-semibold">{WHATSAPP_NUMBER}</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 transition-colors hover:text-highlight"
          >
            <MailIcon className="h-4 w-4 shrink-0 text-highlight" />
            <span className="hidden sm:inline font-semibold">{EMAIL}</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col justify-between items-stretch px-6 md:px-16 pt-8 md:pt-14 lg:pt-16 pb-0">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-start max-w-7xl mx-auto w-full relative z-20">
          
          {/* Playful Title (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start relative pb-6 sm:pb-10">
            <h1 className="font-hand text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold leading-[1.08] text-foreground tracking-tight">
              Learn Without Limits,
              <br />
              This Summer
              <br />
              Build Your Future
              <br />
              Digitally
            </h1>
            
            {/* Draw Arrow under "Build Your Future" */}
            <ArrowDoodle className="absolute left-[3%] bottom-[-10px] sm:bottom-[-20px] w-64 sm:w-72 md:w-80 h-auto" />
          </div>

          {/* Subtext and Button (Right Column) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:pl-8 lg:pt-4">
            <p className="text-muted text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-6 max-w-md">
              Join interactive online classes, learn from expert instructors, and grow your career from anywhere in the world.
            </p>
            
            <CtaButton className="px-8 py-3.5 bg-foreground text-white rounded-full font-semibold text-sm sm:text-base hover:bg-highlight hover:scale-[1.02] transition-all shadow-sm hover:shadow-md cursor-pointer select-none active:scale-[0.98]">
              Start Learning
            </CtaButton>
          </div>

        </div>

        {/* Visual Composition: Rainbow + Kid + Floating Doodles */}
        <div className="relative mt-8 md:mt-12 lg:mt-6 flex flex-col items-center justify-end select-none w-full max-w-7xl mx-auto h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px]">
          
          {/* Rainbow Arch */}
          <RainbowArch className="absolute bottom-0 w-[140%] sm:w-[120%] lg:w-[100%] h-auto z-0" />

          {/* Smiling Sun Doodle */}
          <SunDoodle className="absolute left-[4%] sm:left-[8%] lg:left-[12%] bottom-[20%] w-16 h-20 sm:w-24 sm:h-28 md:w-28 md:h-32 z-10" />

          {/* Hearts Doodle */}
          <HeartsDoodle className="absolute left-[20%] sm:left-[24%] lg:left-[28%] bottom-[45%] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 z-10" />

          {/* Cloud Doodle */}
          <CloudDoodle className="absolute right-[22%] sm:right-[26%] lg:right-[30%] top-[10%] w-16 h-12 sm:w-22 sm:h-16 md:w-28 md:h-20 z-10" />

          {/* Butterfly Doodle */}
          <ButterflyDoodle className="absolute right-[6%] sm:right-[10%] lg:right-[14%] bottom-[28%] w-14 h-11 sm:w-20 sm:h-16 md:w-24 md:h-18 z-10" />

          {/* Central Kid Avatar */}
          <div className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] h-auto z-20 overflow-visible">
            <Image
              src="/kid-headphones.png"
              alt="Kid coding with headphones"
              width={380}
              height={380}
              className="w-full h-auto object-contain drop-shadow-[0_8px_24px_rgba(19,78,90,0.08)]"
              priority
            />
          </div>

        </div>
      </main>

      {/* Stats Section */}
      <section className="shrink-0 border-t border-border bg-foreground/[0.015]">
        <div className="mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-0.5 px-2 py-4 text-center sm:px-4 sm:py-6 ${
                i % 2 === 0 ? "border-r border-border/80" : ""
              } ${i < 2 ? "border-b border-border/80 sm:border-b-0" : ""} ${
                i > 0 ? "sm:border-l sm:border-border/80 sm:border-r-0" : ""
              }`}
            >
              <span className="font-serif text-lg font-bold text-foreground sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-muted sm:text-[10px] sm:tracking-[0.12em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex shrink-0 flex-col items-center gap-2 border-t border-border px-6 py-4 text-center text-xs text-muted sm:flex-row sm:justify-between sm:gap-4 sm:px-10 sm:py-5 sm:text-left">
        <div className="flex flex-col items-center gap-0.5 sm:items-start">
          <span className="text-foreground font-semibold">
            &copy; 2026 Code Illustrated Online School
          </span>
          <a
            href={SCHOOL_URL}
            className="text-highlight font-bold hover:text-foreground transition-colors"
          >
            {SCHOOL_URL_LABEL}
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:text-highlight transition-colors"
          >
            {WHATSAPP_NUMBER}
          </a>
          <span className="text-border">&middot;</span>
          <a
            href={`mailto:${EMAIL}`}
            className="font-semibold text-foreground hover:text-highlight transition-colors"
          >
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}

