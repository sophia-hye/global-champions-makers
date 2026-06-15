"use client";

import Link from "next/link";
import { useState } from "react";

const iconBase = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ScholarshipIcon() {
  return (
    <svg {...iconBase} aria-hidden>
      <path d="M3 8 12 4l9 4-9 4-9-4Z" />
      <path d="M7 10.5V15c0 1.1 2.2 2.5 5 2.5s5-1.4 5-2.5v-4.5" />
      <path d="M21 8v5" />
    </svg>
  );
}

function ConsultationIcon() {
  return (
    <svg {...iconBase} aria-hidden>
      <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
      <path d="M8.5 11.5h7M8.5 14h4" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg {...iconBase} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconBase} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const items = [
  {
    label: "Apply for Scholarship",
    href: "/scholarship",
    icon: <ScholarshipIcon />,
    external: false,
  },
  {
    label: "Consultation",
    href: "/consultation",
    icon: <ConsultationIcon />,
    external: false,
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: <ContactIcon />,
    external: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gcm_tennis/",
    icon: <InstagramIcon />,
    external: true,
  },
];

export function FloatingMenu() {
  const [open, setOpen] = useState(false);

  const itemClass =
    "group flex items-center justify-end gap-3 transition-all duration-200";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Items */}
      <ul
        className={`flex flex-col items-end gap-3 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {items.map((item, i) => {
          const content = (
            <>
              <span className="rounded-sm border border-line-strong bg-bg px-3 py-1.5 text-xs font-medium text-ink shadow-sm transition-colors group-hover:border-accent group-hover:text-accent">
                {item.label}
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-bg text-ink shadow-sm transition-colors group-hover:bg-accent group-hover:text-white group-hover:border-accent">
                {item.icon}
              </span>
            </>
          );
          return (
            <li
              key={item.label}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`transition-all duration-200 ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {content}
                </a>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={itemClass}
                >
                  {content}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "메뉴 닫기" : "빠른 메뉴 열기"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-colors hover:bg-accent-dim"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </div>
  );
}
