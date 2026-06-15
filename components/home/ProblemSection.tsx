import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemSection() {
  return (
    <section className="border-b border-line-strong py-24 md:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-alert" aria-hidden />
                <span className="label text-alert">The Problem / 02</span>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="font-display text-[1.9rem] font-bold leading-[1.12] tracking-tight md:text-[2.75rem]">
                단 하나의 길만 보고 달려온 선수가 멈췄을 때, 국내 시스템은 이들을
                받칠{" "}
                <span className="italic text-muted">
                  대안도, 다음 무대도 충분히 갖고 있지 않습니다.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl leading-relaxed text-muted md:text-lg">
                엘리트 스포츠의 불확실성 속에서 부상이나 성적 부진은 곧바로
                커리어 단절로 이어지기 쉽습니다. 다양한 진로와 성장 가능성을
                동시에 설계하는 구조가 필요합니다.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
