import { Hero } from "@/components/home/Hero";
import { ProcessSection } from "@/components/home/ProcessSection";
import { StatStrip } from "@/components/ui/StatStrip";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { CTASection } from "@/components/ui/CTASection";

const stats = [
  { value: "50–70%", label: "미국 대학 장학금 활용 시 재정 절감 효과" },
  { value: "NCAA", label: "S&C·메디컬 전담팀 기반 최고 수준의 환경" },
  { value: "Multi-Career", label: "프로·진학·스포츠 산업으로 잇는 멀티 커리어" },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <StatStrip stats={stats} />
      <ProblemSection />
      <SolutionSection />
      <ProgramsSection />
      <SuccessStories />
      <CTASection
        title="가능성을 진단해 드립니다"
        description="1:1 상담을 통해 전문 코치와 함께 아이의 무한한 가능성을 진단해 보세요."
        buttonLabel="무료 상담 신청하기"
        buttonHref="/contact"
      />
    </>
  );
}
