import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationForm } from "@/components/consultation/ConsultationForm";

export const metadata: Metadata = {
  title: "Consultation",
  description:
    "연락처를 남겨 주시면 전문 어드바이저가 선수에게 맞는 프로그램을 안내해 드립니다.",
};

const steps = [
  { label: "신청 접수", caption: "선수 프로필과 연락처를 남겨 주세요." },
  { label: "맞춤 안내", caption: "전문 어드바이저가 적합한 프로그램을 제안합니다." },
  { label: "함께 시작", caption: "선수에게 맞는 다음 단계를 함께 설계합니다." },
];

const events = [
  {
    index: "01",
    title: "Summer Elite Camp",
    when: "2026년 7월",
    desc: "여름 집중 엘리트 캠프. 기술·피지컬·멘탈을 통합적으로 끌어올립니다.",
  },
  {
    index: "02",
    title: "UTR Showcase",
    when: "2026년 8월",
    desc: "UTR 기반 쇼케이스. 실전 경기로 레이팅과 경쟁력을 검증합니다.",
  },
  {
    index: "03",
    title: "International Tournament Support",
    when: "2026년 9월",
    desc: "국제 대회 출전 지원. 현지 적응부터 경기 운영까지 함께합니다.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        kicker="Consultation"
        index="01"
        title="상담 신청"
        description="연락처를 남겨 주시면 전문 어드바이저가 선수에게 맞는 프로그램을 안내해 드립니다."
      />

      {/* Process */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Process"
              index="01"
              title="상담은 이렇게 진행됩니다"
              description="간단한 신청에서 시작해, 선수에게 맞는 프로그램까지 함께 찾아갑니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16">
              <ProcessSteps steps={steps} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Showcase & Camp schedule */}
      <section className="bg-bg-soft py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Showcase & Camp"
              index="02"
              title="예정된 일정"
              description="캠프와 쇼케이스, 국제 대회 지원 일정을 미리 확인하세요."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={event.index} delay={i * 100}>
                <div className="border-t border-line-strong pt-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="label text-accent">{event.when}</span>
                    <span className="index-num text-lg">{event.index}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {event.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {event.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation form */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Apply"
              index="03"
              title="상담 신청서"
              description="아래 정보를 남겨 주시면 전문 어드바이저가 선수에게 맞는 프로그램을 안내해 드립니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mx-auto mt-16 max-w-2xl">
              <ConsultationForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
