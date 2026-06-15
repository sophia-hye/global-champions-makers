import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line-strong">
      {/* top meta row */}
      <div className="border-b border-line">
        <Container className="flex items-center justify-between py-3">
          <span className="label text-muted">GCM.COM</span>
          <span className="label hidden text-muted sm:inline">
            Tennis Elite
          </span>
          <span className="label text-muted">2026</span>
        </Container>
      </div>

      {/* decorative flowing line, upper right */}
      <svg
        className="pointer-events-none absolute -right-10 top-0 hidden h-[480px] w-[420px] lg:block"
        viewBox="0 0 420 480"
        fill="none"
        aria-hidden
      >
        <path
          d="M420 40 C 300 60, 320 180, 240 200 S 120 240, 180 330 S 360 420, 280 470"
          stroke="var(--color-accent)"
          strokeWidth={1.5}
        />
        <circle cx="240" cy="200" r="5" fill="var(--color-accent)" />
      </svg>

      <Container className="relative py-20 md:py-28 lg:py-32">
        <p className="font-display text-2xl font-semibold tracking-tight text-accent md:text-3xl">
          ( GCM )
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-[2.6rem] font-semibold uppercase leading-[0.98] tracking-tight text-ink/85 sm:text-6xl lg:text-7xl">
          The Next Generation
          <br />
          of <span className="text-accent">Tennis</span> Elite.
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            운동은 잘하는 것만이 성공이 아니라,{" "}
            <span className="text-ink">잘 설계하면 성공</span>입니다. 미국 대학
            NCAA 시스템 기반 로드맵으로, 테니스 선수의 글로벌 성장과 진학·커리어를
            설계합니다.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button href="/contact" withArrow>
              무료 상담 신청
            </Button>
            <Button href="/programs" variant="secondary">
              프로그램 보기
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
