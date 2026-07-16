"use client";

import { PopupButton } from "@typeform/embed-react";
import { ArrowIcon } from "./icons";

const TYPEFORM_ID = "w1A5Fljk";

export function CtaButton({ className }: { className?: string }) {
  return (
    <PopupButton
      id={TYPEFORM_ID}
      className={
        className ??
        "group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-accent-foreground transition-colors hover:bg-[#e3b264]"
      }
    >
      Book a Free Trial Class
      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </PopupButton>
  );
}
