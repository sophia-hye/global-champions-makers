"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Coach = {
  id: string;
  name: string;
  role: string;
  photo: string;
  summary: string;
  bio: string[];
};

const coaches: Coach[] = [
  {
    id: "ohseonggook",
    name: "오성국",
    role: "대표 · 헤드 코치",
    photo: "/coaches/ohseonggook/IMG_2453.JPG",
    summary: "엘리트 테니스 육성과 선수별 성장 로드맵 설계를 총괄합니다.",
    bio: [
      "엘리트 테니스 육성과 선수별 성장 로드맵 설계를 총괄하는 GCM의 대표이자 헤드 코치입니다.",
      "기술·멘탈·진학을 하나의 흐름으로 잇는 통합 퍼포먼스 모델을 직접 설계하고, 각 선수의 장기적인 발전 방향을 책임집니다.",
    ],
  },
  {
    id: "coach1",
    name: "퍼포먼스 코치",
    role: "기술 · 피지컬",
    photo: "/coaches/coach1/1.JPG",
    summary: "스트로크 정밀도, 테니스 특화 근력 트레이닝, 체계적 리커버리를 담당합니다.",
    bio: [
      "스트로크 정밀도와 테니스 특화 근력 트레이닝, 그리고 체계적인 리커버리를 담당하는 퍼포먼스 코치입니다.",
      "선수의 기술과 신체 능력을 동시에 끌어올려 경기력의 토대를 만듭니다.",
    ],
  },
  {
    id: "coach2",
    name: "멘탈 트레이너",
    role: "스포츠 심리",
    photo: "/coaches/coach2/IMG_4967.JPG",
    summary: "압박·집중·자신감 루틴과 경기 멘탈 회복 트레이닝을 지원합니다.",
    bio: [
      "압박 상황 관리와 집중·자신감 루틴, 경기 멘탈 회복 트레이닝을 지원하는 멘탈 트레이너입니다.",
      "흔들리지 않는 경기 운영을 위한 심리적 토대를 함께 다집니다.",
    ],
  },
];

function CoachPhoto({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-bg-soft">
        <span className="label text-faint">이미지 준비 중</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
      loading="lazy"
    />
  );
}

export function CoachCards() {
  const [active, setActive] = useState<Coach | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const modal = active && (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-label={`${active.name} 약력`}
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={() => setActive(null)}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />
      <div className="relative z-10 grid max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-line-strong bg-bg shadow-xl md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-line-strong md:border-b-0 md:border-r">
          <CoachPhoto
            src={active.photo}
            alt={`${active.name} 코치`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-7 md:p-9">
          <div className="flex items-start justify-between">
            <div>
              <p className="label text-accent">{active.role}</p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight">
                {active.name}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="메뉴 닫기"
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-line-strong text-ink transition-colors hover:bg-bg-soft"
            >
              <span className="text-base leading-none">✕</span>
            </button>
          </div>
          <div className="mt-7 space-y-4 border-t border-line-strong pt-7">
            {active.bio.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
        {coaches.map((coach) => (
          <button
            key={coach.id}
            type="button"
            onClick={() => setActive(coach)}
            className="group flex flex-col text-left"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-line-strong bg-bg-soft">
              <CoachPhoto
                src={coach.photo}
                alt={`${coach.name} 코치`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <p className="label text-accent">{coach.role}</p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                {coach.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {coach.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                <span className="link-underline">약력 보기</span>
                <span aria-hidden>→</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {mounted && active && createPortal(modal, document.body)}
    </>
  );
}
