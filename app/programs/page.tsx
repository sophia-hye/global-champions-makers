import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/ui/CTASection";
import { IconRoute, IconShield, IconPeers } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "선수의 발전 단계에 맞춘 Junior · Pro · Adult 세 가지 트랙. 목표와 현재 수준에 따라 최적의 경로를 제안합니다.",
};

const tiers = [
  {
    icon: <IconRoute width={24} height={24} />,
    tier: "Junior",
    audience: "U10–U18 엘리트 주니어",
    desc: "기초 기술부터 국제 대회까지, 장기적인 발전 경로를 단계별로 설계합니다.",
    schedule: "연령별 단계 트랙",
    points: [
      "U10–12 · 기초 기술, 운동 능력, 코트 적응",
      "U13–15 · 기술 정교화, 경기 입문, 체력 강화",
      "U16–18 · 경쟁 습관, 대회 출전, 상급 진학 준비",
    ],
  },
  {
    icon: <IconPeers width={24} height={24} />,
    tier: "Adult",
    audience: "대학 · 경쟁 성인 선수",
    desc: "대학 및 경쟁 성인 선수를 위한 집중 프로그램과 단기 블록입니다.",
    schedule: "1–4주 집중 블록 · 시즌제",
    points: [
      "고강도 세션, 전술 발전, 경기 준비",
      "대학 리크루팅 지원",
      "오프시즌 · 프리시즌 집중 훈련 블록",
    ],
  },
  {
    icon: <IconShield width={24} height={24} />,
    tier: "Pro",
    audience: "프로 지망생 · 투어 선수",
    desc: "프로 전환을 목표로 한 고강도 퍼포먼스 관리 프로그램입니다.",
    schedule: "주간 · 월간 · 풀시즌",
    points: [
      "패턴 기반 트레이닝, 경기 시나리오, 퍼포먼스 지표 분석",
      "투어 일정 조율 및 대회 동행",
      "프로 계약 로드맵과 팀 진출 경로",
    ],
  },
];

const vvipSteps = [
  { label: "Technical & Data", caption: "UTR 기반 데이터 분석 및 기술 훈련" },
  { label: "Academic Master Plan", caption: "GPA 관리 · 전공 설계 · 에세이 지원" },
  { label: "Personal Branding & EC", caption: "봉사 · 리더십 · 스폰서십 포트폴리오 구축" },
  { label: "Showcase & Recruiting", caption: "미국 대학 코치진 컨택 및 장학금 오퍼 확보" },
  { label: "Post-Entry Management", caption: "미국 입학 이후 졸업까지 전 과정 관리" },
];

const returns = [
  {
    grade: "실업팀 즉시 전력감",
    utr: "UTR 남 12.5–13.2 / 여 9.5–10.1",
    salary: "예상 연봉 약 5,000만 원",
    signing: "예상 계약금 약 3,000만 원",
  },
  {
    grade: "팀 핵심 선수급",
    utr: "UTR 남 13.5–14.2 / 여 10.3–10.9",
    salary: "예상 연봉 6,000만–8,000만 원",
    signing: "예상 계약금 약 6,000만 원",
  },
  {
    grade: "국가대표급 전력",
    utr: "UTR 남 14.5 이상 / 여 11.3 이상",
    salary: "예상 연봉 1억 원 이상",
    signing: "예상 계약금 8,000만–1억 원 이상",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        kicker="Programs"
        index="B"
        title="누구를 위한 프로그램인가"
        description="선수의 발전 단계에 맞춘 세 가지 트랙을 운영합니다. 목표와 현재 수준에 따라 가장 적합한 경로를 제안합니다."
      />

      {/* Why USA */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Why USA?"
              index="01"
              title="더 큰 무대를 향한 성장 전략"
              description="운동은 선수만 하는 것이라는 고정관념에서 벗어나야 합니다. 테니스는 라켓 하나로 전 세계 어디서든 통하는 글로벌 스포츠이자, 학업·해외 진출·글로벌 네트워크까지 유기적으로 연결되는 가장 강력한 기회 창출 플랫폼입니다."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            <Reveal>
              <div className="border-t border-line-strong pt-7">
                <p className="font-display text-4xl font-bold tracking-tight text-accent md:text-5xl">
                  50–70%<span className="ml-2 text-xl text-ink">재정 절감</span>
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  국내 아카데미 및 해외 투어 비용(연 3~4천만 원) 대비, 미국 대학의
                  전액 또는 부분 장학금을 활용해 50~70% 이상의 재정을 절감할 수
                  있습니다.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-t border-line-strong pt-7">
                <p className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  NCAA<span className="ml-2 text-xl text-accent">최고 수준 환경</span>
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  S&amp;C·메디컬 전담팀과 NCAA 시스템 등 최고 수준의 환경에서 세계
                  무대에 도전하며, 학업과 운동을 병행해 글로벌 커리어 기반을
                  구축합니다.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Tiers */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Tracks"
              index="02"
              title="Junior · Pro · Adult"
              description="발전 단계별로 나뉜 세 트랙. 각 트랙은 대상과 일정, 핵심 훈련 방향이 다릅니다."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal key={t.tier} delay={i * 100}>
                <div className="flex h-full flex-col border-t border-line-strong pt-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-accent">{t.icon}</span>
                    <span className="index-num text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {t.tier}
                  </h3>
                  <p className="mt-1.5 label text-accent">{t.audience}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {t.desc}
                  </p>
                  <ul className="mt-6 space-y-3.5">
                    {t.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 border-t border-line pt-4">
                    <span className="label text-faint">Schedule</span>
                    <p className="mt-2 text-sm text-ink">{t.schedule}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* VVIP — End-to-End Management */}
      <section className="border-b border-line-strong bg-bg-soft py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="VVIP GCM"
              index="03"
              title="프로 이전부터 프로처럼"
              description="최상위 선수와 가족을 위한 프리미엄 엔드투엔드 관리. 실력뿐 아니라 태도·인터뷰·매너·평판까지, 선수를 하나의 브랜드로 성장시킵니다."
            />
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16">
              <ProcessSteps steps={vvipSteps} />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Investment & Return */}
      <section className="border-b border-line-strong py-24 md:py-28">
        <Container>
          <Reveal>
            <SectionTitle
              kicker="Investment & Return"
              index="04"
              title="대학 4년은 비용이 아닌 투자입니다"
              description="미국 대학 시스템 기반 성장 로드맵은 유학 비용 이상의 장기적 커리어 가치와 높은 기대 수익 구조를 만들어냅니다."
            />
          </Reveal>
          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {returns.map((r, i) => (
              <Reveal key={r.grade} delay={i * 100}>
                <div className="flex h-full flex-col border-t border-line-strong pt-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="index-num text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {r.grade}
                  </h3>
                  <p className="mt-2 label text-accent">{r.utr}</p>
                  <ul className="mt-6 space-y-3.5">
                    {[r.salary, r.signing].map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-xs leading-relaxed text-faint">
              * 위 연봉·계약금은 UTR 등급에 따른 예상 수치이며, 선수 개인의 성장과
              시장 상황에 따라 달라질 수 있습니다.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        title="어떤 트랙이 맞을지 함께 정해요"
        description="간단한 상담으로 선수의 현재 수준과 목표에 맞는 트랙을 안내해 드립니다."
        buttonLabel="상담 신청하기"
        buttonHref="/contact"
      />
    </>
  );
}
