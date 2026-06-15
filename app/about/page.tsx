import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import {
  IconShield,
  IconPeers,
  IconAnchor,
  IconRoute,
  IconInfinity,
  IconDevice,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "운동은 잘하는 것만이 성공이 아니라, 잘 설계하면 성공입니다. GCM은 테니스로 여는 글로벌 성장의 로드맵을 설계합니다.",
};

const paradigm = [
  {
    icon: <IconShield width={24} height={24} />,
    title: "Global Leadership",
    sub: "글로벌 리더십 기반 성장",
    desc: "규율·책임감·자기관리·리더십을 기반으로, 코트 위 경험을 통해 글로벌 경쟁력을 키웁니다.",
  },
  {
    icon: <IconPeers width={24} height={24} />,
    title: "Strategic Networking",
    sub: "글로벌 네트워크와 진학 기회",
    desc: "국제 대회와 미국 대학을 기반으로 글로벌 네트워크를 형성하고, 경험·인맥·진학을 연결하는 성장 기회를 넓힙니다.",
  },
  {
    icon: <IconAnchor width={24} height={24} />,
    title: "Premium Personal Branding",
    sub: "선수 브랜딩",
    desc: "실력·태도·영향력을 기반으로 선수를 브랜딩하고, 글로벌 경험을 통해 차세대 리더형 인재로 육성합니다.",
  },
];

const safetyNet = [
  {
    icon: <IconRoute width={24} height={24} />,
    title: "Transfer Roadmap",
    sub: "성장형 트랜스퍼 구조",
    desc: "CC(NJCAA)에서 NCAA D1 편입까지, 실력·언어·경기 경험을 단계적으로 성장시키는 검증된 미국 대학 진학 시스템입니다.",
  },
  {
    icon: <IconInfinity width={24} height={24} />,
    title: "Flexible Career Path",
    sub: "유연한 진로 전환 구조",
    desc: "프로 진출·미국 대학 진학·실업팀·스포츠 산업 등 다양한 커리어로 확장하고, 학업과 운동을 병행하며 장기적 글로벌 커리어 기반을 구축합니다.",
  },
  {
    icon: <IconDevice width={24} height={24} />,
    title: "Athlete Portfolio",
    sub: "선수 경험 기반 진학 구조",
    desc: "운동 이력·경기 경험·자기관리·리더십을 하나의 경쟁력 있는 포트폴리오로 확장해, 부상·진로 변화 상황에서도 미국 대학 진학과 글로벌 성장 기회로 연결합니다.",
  },
];

const beyond = [
  {
    title: "자유로운 전공 선택",
    desc: "미국 대학은 스포츠뿐 아니라 비즈니스·데이터·경제·스포츠 매니지먼트 등 다양한 전공 선택이 가능합니다.",
  },
  {
    title: "글로벌 커리어 확장",
    desc: "운동 경험과 전공을 기반으로 글로벌 기업·스포츠 산업·비즈니스 분야까지 커리어를 확장할 수 있습니다.",
  },
  {
    title: "대학원 & 코칭 시스템",
    desc: "졸업 이후 대학원 진학과 Assistant Coach 시스템을 통해 학업과 지도자 경험을 동시에 이어갈 수 있습니다.",
  },
  {
    title: "Global Life Platform",
    desc: "영어·글로벌 네트워크·미국 학위 기반의 평생 커리어 자산을 구축합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="Who we are"
        index="A"
        title="잘 설계하면, 성공입니다"
        description="운동은 잘하는 것만이 성공이 아닙니다. 자녀의 가능성을 지금의 환경과 한계로 결정하기보다, 올바른 구조와 환경이 압도적인 성공을 만든다는 것을 기억하세요. GCM이 가장 완벽한 성공의 로드맵을 열어드립니다."
      />

      {/* Paradigm Shift */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Paradigm Shift"
              index="01"
              title="테니스로 여는 새로운 글로벌 성장의 기준"
              description="실력만이 아니라 리더십, 네트워크, 브랜딩까지. 세 가지 축으로 글로벌 인재의 성장을 설계합니다."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {paradigm.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full flex-col border-t border-line-strong pt-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-accent">{item.icon}</span>
                    <span className="index-num text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 label text-accent">{item.sub}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Safety Net System */}
      <section className="border-b border-line-strong bg-bg-soft py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Safety Net System"
              index="02"
              title="리스크를 기회로 바꾸는 성장 구조"
              description="엘리트 스포츠의 불확실성을 최소화하고, 다양한 진로와 성장 가능성을 동시에 설계하는 멀티 커리어 시스템입니다."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {safetyNet.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="flex h-full flex-col border-t border-line-strong pt-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-accent">{item.icon}</span>
                    <span className="index-num text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 label text-accent">{item.sub}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Beyond Athlete */}
      <section className="py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Beyond Athlete"
              index="03"
              title="선수 그 이상의 커리어"
              description="운동을 넘어 전공, 커리어, 그리고 평생 자산까지. 선수의 미래를 폭넓게 설계합니다."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {beyond.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="border-t border-line-strong pt-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="index-num text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
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

      <CTASection
        title="가능성을 진단해 드립니다"
        description="1:1 상담을 통해 전문 코치와 함께 아이의 무한한 가능성을 진단해 보세요."
        buttonLabel="상담 신청하기"
        buttonHref="/contact"
      />
    </>
  );
}
