import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "궁금한 점이 있으신가요? 편하신 방법으로 GCM에 연락 주세요.",
};

const channels = [
  { k: "Phone", v: site.phone, href: `tel:${site.phone.replace(/[^0-9+]/g, "")}` },
  { k: "Email", v: site.email, href: `mailto:${site.email}` },
  {
    k: "Instagram",
    v: site.instagram,
    href: site.instagramUrl,
    external: true,
  },
  { k: "Location", v: site.address },
  { k: "Hours", v: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        index="D"
        title="궁금한 점이 있으신가요?"
        description="편하신 방법으로 연락 주세요. 선수에게 맞는 프로그램을 함께 찾아드립니다."
      />

      {/* Direct contact */}
      <section className="border-b border-line-strong py-20 md:py-24">
        <Container>
          <Reveal>
            <p className="label text-muted">Direct</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              바로 연락하기
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-12 grid gap-x-12 border-t border-line-strong md:grid-cols-2">
              {channels.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-6"
                >
                  <dt className="label text-faint">{row.k}</dt>
                  <dd className="text-right text-sm text-ink md:text-base">
                    {row.href ? (
                      <a
                        href={row.href}
                        {...(row.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="link-underline transition-colors hover:text-accent"
                      >
                        {row.v}
                      </a>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Chat */}
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="border border-line-strong bg-bg-soft p-8 md:p-12">
              <p className="label text-muted">Chat with us</p>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
                실시간으로 문의하세요
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                카카오톡 채널을 준비 중입니다. 오픈 전까지는 전화 또는 이메일로
                편하게 문의해 주세요.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 border border-line-strong px-5 py-2.5 text-sm text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                카카오톡 채널 준비 중
              </span>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
