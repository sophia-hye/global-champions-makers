import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

const stories = [
  {
    tag: "ATP Tour",
    desc: "대학 테니스를 거쳐 ATP 투어 Top Level까지 성장한, 현대 NCAA 시스템의 대표 성공 사례입니다.",
  },
  {
    tag: "WTA · Grand Slam",
    desc: "NCAA 여자 복식 준우승 이후 WTA 투어와 US Open 본선에 진출한, 아시아 선수 성장의 대표 사례입니다.",
  },
  {
    tag: "Business · CEO",
    desc: "대학 테니스 선수 출신으로 은퇴 후 비즈니스 커리어로 확장해, 현재 미국 대형 기업의 CEO로 활동 중인 사례입니다.",
  },
  {
    tag: "Entrepreneur",
    desc: "부상으로 선수 커리어가 중단되었지만, 학업과 스포츠 비즈니스를 기반으로 헬스케어 투자회사를 설립하며 새로운 커리어로 확장한 사례입니다.",
  },
];

export function SuccessStories() {
  return (
    <section className="border-t border-line-strong py-24 md:py-28">
      <Container>
        <Reveal>
          <SectionTitle
            kicker="Success Stories"
            index="05"
            title="가능성을 현실로 바꾼 글로벌 성장 사례"
            description="NCAA 시스템은 프로 투어 진출부터 글로벌 비즈니스 커리어 확장까지, 다양한 가능성을 만들어내고 있습니다."
          />
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {stories.map((story, i) => (
            <Reveal key={story.tag} delay={i * 100}>
              <div className="flex h-full flex-col border-t border-line-strong pt-7">
                <div className="mb-6 flex items-center justify-between">
                  <span className="label text-accent">{story.tag}</span>
                  <span className="index-num text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {story.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
