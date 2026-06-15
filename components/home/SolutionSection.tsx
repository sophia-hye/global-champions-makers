import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { IconRoute, IconInfinity } from "@/components/ui/icons";

const pillars = [
  {
    tag: "Data",
    title: "퍼포먼스",
    desc: "UTR 기반 데이터 분석과 기술·피지컬 트레이닝으로 경기력의 토대를 단단하게 만듭니다.",
    icon: <IconRoute width={26} height={26} />,
  },
  {
    tag: "Pathway",
    title: "글로벌 진학",
    desc: "NCAA 미국 대학 진학과 다양한 커리어 경로를 설계해 더 큰 무대로 연결합니다.",
    icon: <IconInfinity width={26} height={26} />,
  },
];

export function SolutionSection() {
  return (
    <section className="border-b border-line-strong py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="GCM's Solution"
            index="03"
            title="리스크를 기회로 바꾸는 성장 구조"
            description="엘리트 스포츠의 불확실성을 최소화하고, 다양한 진로와 성장 가능성을 동시에 설계하는 멀티 커리어 시스템입니다."
          />
        </Reveal>

        <div className="mt-16 grid border-t border-line-strong md:grid-cols-2 md:divide-x md:divide-line">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 120}>
              <div className="border-b border-line py-9 md:border-b-0 md:px-10 md:first:pl-0">
                <div className="flex items-center justify-between">
                  <span className="text-accent">{p.icon}</span>
                  <span className="label text-faint">{p.tag}</span>
                </div>
                <h3 className="mt-8 font-display text-4xl font-bold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-12 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl">
            부상이나 진로 변화 상황에서도 선수가{" "}
            <span className="italic text-accent">미국 대학 진학과 글로벌 성장</span>
            으로 이어지도록 돕는 것, 이것이 GCM이 창출하는 본질적 가치입니다.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
