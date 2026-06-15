import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Reveal } from "@/components/ui/Reveal";
import { IconRoute, IconPeers, IconShield } from "@/components/ui/icons";

const items = [
  {
    index: "01",
    icon: <IconRoute width={24} height={24} />,
    title: "Junior",
    body: "U10–U18 엘리트 주니어. 기초 기술부터 국제 대회까지 장기적인 발전 경로를 단계별로 설계합니다.",
    href: "/programs",
  },
  {
    index: "02",
    icon: <IconPeers width={24} height={24} />,
    title: "Adult",
    body: "대학·경쟁 성인 선수를 위한 집중 프로그램과 단기 블록. 대학 리크루팅과 경기 준비를 지원합니다.",
    href: "/programs",
  },
  {
    index: "03",
    icon: <IconShield width={24} height={24} />,
    title: "Pro",
    body: "프로 지망생·투어 선수를 위한 고강도 퍼포먼스 관리. 프로 계약 로드맵과 팀 진출 경로를 설계합니다.",
    href: "/programs",
  },
];

export function ProgramsSection() {
  return (
    <section className="border-b border-line-strong bg-bg-soft py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="What We Do"
            index="04"
            title="발전 단계에 맞춘 세 가지 트랙"
          />
        </Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <FeatureCard
                index={item.index}
                icon={item.icon}
                title={item.title}
                href={item.href}
              >
                {item.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
