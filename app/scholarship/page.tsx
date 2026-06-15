import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SpecTable } from "@/components/ui/SpecTable";
import { Reveal } from "@/components/ui/Reveal";
import { ScholarshipForm } from "@/components/scholarship/ScholarshipForm";

export const metadata: Metadata = {
  title: "Apply for Scholarship",
  description:
    "경쟁력 있는 주니어·영 어덜트 선수를 위한 GCM 전액·부분 장학 프로그램. 매년 제한된 인원을 선발합니다.",
};

const criteria = [
  {
    index: "01",
    title: "지원 대상",
    desc: "프로 무대를 목표로 하는 경쟁 레벨의 주니어 및 영 어덜트 선수. 정원 범위 내에서 전액 또는 부분 장학을 제공합니다.",
  },
  {
    index: "02",
    title: "선발 기준",
    desc: "UTR, ITF·국가 랭킹, 최근 경기 결과, 코칭 수용성, 그리고 프로페셔널리즘을 종합적으로 평가합니다.",
  },
  {
    index: "03",
    title: "지속 지원",
    desc: "선발 이후에도 발전 단계, UTR 향상, 대학 진학 결과를 지속적으로 추적하고 관리합니다.",
  },
];

const materials = [
  { label: "기본 정보", value: "이름, 연락처, 생년월일, 국적" },
  { label: "테니스 프로필", value: "UTR, 랭킹, 최근 경기 결과" },
  { label: "신체 정보", value: "키, 몸무게, 주 사용 손, 백핸드 유형" },
  {
    label: "목표",
    value: "강점, 보완할 점, 단기 및 중기 목표",
  },
];

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        kicker="Scholarship"
        index="01"
        title="전액 · 부분 장학 신청"
        description="GCM은 매년 제한된 인원의 장학 정원을 운영하며, 경쟁 잠재력과 헌신, 프로페셔널리즘을 갖춘 선수를 선발합니다."
      />

      {/* Criteria */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Eligibility"
              index="01"
              title="누구를 어떻게 선발하나요"
              description="단순한 실력만이 아니라, 함께 성장할 수 있는 태도와 잠재력을 함께 봅니다."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {criteria.map((item, i) => (
              <Reveal key={item.index} delay={i * 100}>
                <div className="border-t border-line-strong pt-7">
                  <span className="index-num text-lg">{item.index}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Required materials */}
      <section className="bg-bg-soft py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Application"
              index="02"
              title="신청에 필요한 자료"
              description="아래 정보를 바탕으로 선수의 현재 위치와 가능성을 검토합니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16">
              <SpecTable rows={materials} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Application form */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Apply"
              index="03"
              title="장학 신청서"
              description="아래 양식을 작성해 제출해 주시면 담당자가 검토 후 연락드립니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mx-auto mt-16 max-w-3xl">
              <ScholarshipForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
