import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { JourneyPath, type JourneyStep } from "@/components/ui/JourneyPath";
import { Reveal } from "@/components/ui/Reveal";

const steps: JourneyStep[] = [
  {
    title: "30분 디스커버리 콜로 시작합니다",
    body: "현재 수준과 목표, 경기 이력을 편하게 나눕니다. 어디서 출발해 어디로 가고 싶은지부터 듣습니다.",
    note: "편하게 이야기 나눠요",
  },
  {
    title: "UTR 기반 데이터로 가능성을 진단합니다",
    body: "UTR과 경기 데이터를 기반으로 선수의 현재 위치와 성장 가능성을 객관적으로 분석합니다.",
    note: "모든 결정엔 근거가 있어요",
  },
  {
    title: "미국 대학 진학 로드맵을 설계합니다",
    body: "NCAA 진학과 편입 경로, 장학금 전략까지. 검증된 시스템으로 현실적인 경로를 그립니다.",
    note: "구조가 성공을 만들어요",
  },
  {
    title: "글로벌 커리어로 자립합니다",
    body: "프로 진출·미국 대학 진학·스포츠 산업까지, 선수 그 이상의 커리어로 이어갑니다.",
    note: "다음 무대로 이어져요",
  },
];

export function ProcessSection() {
  return (
    <section className="border-b border-line-strong py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="( GCM ) Work Process"
            index="01"
            title="가능성을 현실로 바꾸는 네 단계"
            description="기술과 데이터, 진학을 따로 보지 않습니다. 하나의 흐름으로 이어진 GCM의 성장 설계 과정입니다."
          />
        </Reveal>
        <div className="mt-16">
          <JourneyPath steps={steps} />
        </div>
      </Container>
    </section>
  );
}
