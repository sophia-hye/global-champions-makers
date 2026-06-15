import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { CoachCards } from "@/components/team/CoachCards";

export const metadata: Metadata = {
  title: "Team",
  description:
    "기술·멘탈·진학을 하나로 잇는 GCM의 통합 퍼포먼스 팀. 선수 한 명을 여러 전문가가 함께 지원합니다.",
};

const phases = [
  { label: "Train", caption: "스트로크 발전, 게임 아이덴티티, 장기 성장 계획" },
  { label: "Prepare", caption: "멘탈 루틴, 훈련량에 맞춘 경기 준비" },
  { label: "Compete", caption: "경기 전략, 전술 지원, 압박 관리" },
  { label: "Recover", caption: "신체 회복, 회복 프로토콜, 영양 지원" },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Team"
        index="01"
        title="코치진 소개"
        description="기술·멘탈·진학을 하나로 잇는 통합 퍼포먼스 팀입니다. 여러 전문가가 협업해 선수 한 명의 성장을 함께 책임집니다."
      />

      {/* Coaches */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Coaches"
              index="01"
              title="선수를 함께 키우는 사람들"
              description="각 카드를 누르면 코치의 약력을 자세히 확인할 수 있습니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16">
              <CoachCards />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Program structure */}
      <section className="bg-bg-soft py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Approach"
              index="02"
              title="4단계 통합 퍼포먼스"
              description="훈련부터 경기, 회복까지 하나의 흐름으로 이어지는 GCM의 육성 방식입니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16">
              <ProcessSteps steps={phases} />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="GCM과 함께 성장하세요"
        description="간단한 상담으로 선수에게 맞는 프로그램을 함께 찾아드립니다."
        buttonLabel="상담 신청하기"
        buttonHref="/contact"
      />
    </>
  );
}
