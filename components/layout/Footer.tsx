import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const columns = [
  {
    title: "Programs",
    links: [
      { label: "Junior", href: "/programs" },
      { label: "Adult", href: "/programs" },
      { label: "Pro", href: "/programs" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Who we are", href: "/about" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Apply",
    links: [
      { label: "Scholarship", href: "/scholarship" },
      { label: "Consultation", href: "/consultation" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Instagram", href: site.instagramUrl },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line-strong bg-bg">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <p className="label text-ink">The Next Generation</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="label text-faint">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* oversized serif wordmark */}
        <div className="border-t border-line py-10">
          <p className="font-display text-[19vw] font-black lowercase leading-none tracking-tighter text-ink/[0.07] lg:text-[15rem]">
            GCM
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-7 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <p>{site.legalNameFull}</p>
          <p className="flex items-center gap-3">
            <span>개인정보처리방침</span>
            <span className="text-line">·</span>
            <span>이용약관</span>
            <span className="text-line">·</span>
            <span>&copy; 2026 {site.name}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
