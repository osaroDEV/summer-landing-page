import { ArrowIcon } from "./icons";

const TALLY_FORM_ID = "1AyQqM";

export function CtaButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      type="button"
      data-tally-open={TALLY_FORM_ID}
      data-tally-layout="modal"
      data-tally-emoji-animation="wave"
      className={
        className ??
        "group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-[#e3b264]"
      }
    >
      {children ?? (
        <>
          Book a Free Trial Class
          <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}
