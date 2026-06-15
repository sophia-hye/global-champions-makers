"use client";

import { FormEvent, useState } from "react";
import { IconShield } from "@/components/ui/icons";

type FieldErrors = Record<string, string>;

const inputClass =
  "w-full border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";
const labelClass = "label mb-2 block text-muted";

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ScholarshipForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: FieldErrors = {};

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const agree = data.get("agree");

    if (!name) nextErrors.name = "이름을 입력해 주세요.";
    if (!email) nextErrors.email = "이메일을 입력해 주세요.";
    else if (!validateEmail(email))
      nextErrors.email = "올바른 이메일 형식이 아닙니다.";
    if (!agree) nextErrors.agree = "개인정보 수집·이용에 동의해 주세요.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center border border-line-strong bg-surface p-12">
        <span className="text-accent">
          <IconShield width={40} height={40} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">
          장학 신청서가 접수되었습니다
        </h3>
        <p className="mt-3 text-sm text-muted">
          제출해 주신 정보를 검토한 뒤 담당자가 연락드리겠습니다. 감사합니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-medium text-accent"
        >
          새 신청서 작성하기
        </button>
      </div>
    );
  }

  return (
    <div className="border border-line-strong bg-bg-soft p-6 md:p-9">
      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        {/* Personal information */}
        <fieldset className="space-y-5">
          <legend className="label mb-2 text-ink">개인 정보</legend>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                이름 *
              </label>
              <input id="name" name="name" className={inputClass} placeholder="홍길동" />
              {errors.name && <p className="mt-1.5 text-xs text-alert">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                연락처
              </label>
              <input id="phone" name="phone" className={inputClass} placeholder="010-0000-0000" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              이메일 *
            </label>
            <input id="email" name="email" type="email" className={inputClass} placeholder="you@example.com" />
            {errors.email && <p className="mt-1.5 text-xs text-alert">{errors.email}</p>}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="birthdate" className={labelClass}>
                생년월일
              </label>
              <input id="birthdate" name="birthdate" className={inputClass} placeholder="2008-01-01" />
            </div>
            <div>
              <label htmlFor="nationality" className={labelClass}>
                국적
              </label>
              <input id="nationality" name="nationality" className={inputClass} placeholder="대한민국" />
            </div>
          </div>
        </fieldset>

        {/* Tennis profile */}
        <fieldset className="space-y-5">
          <legend className="label mb-2 text-ink">테니스 프로필</legend>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="utr" className={labelClass}>
                UTR
              </label>
              <input id="utr" name="utr" className={inputClass} placeholder="예) 9.5" />
            </div>
            <div>
              <label htmlFor="ranking" className={labelClass}>
                랭킹 (ITF / 국가)
              </label>
              <input id="ranking" name="ranking" className={inputClass} placeholder="예) 국내 U16 12위" />
            </div>
          </div>
          <div>
            <label htmlFor="results" className={labelClass}>
              최근 경기 결과
            </label>
            <textarea id="results" name="results" rows={3} className={`${inputClass} resize-none`} placeholder="최근 출전 대회와 성적을 적어 주세요." />
          </div>
        </fieldset>

        {/* Physical information */}
        <fieldset className="space-y-5">
          <legend className="label mb-2 text-ink">신체 정보</legend>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="height" className={labelClass}>
                키 (cm)
              </label>
              <input id="height" name="height" className={inputClass} placeholder="175" />
            </div>
            <div>
              <label htmlFor="weight" className={labelClass}>
                몸무게 (kg)
              </label>
              <input id="weight" name="weight" className={inputClass} placeholder="65" />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="hand" className={labelClass}>
                주 사용 손
              </label>
              <select id="hand" name="hand" className={inputClass}>
                <option>오른손</option>
                <option>왼손</option>
              </select>
            </div>
            <div>
              <label htmlFor="backhand" className={labelClass}>
                백핸드 유형
              </label>
              <select id="backhand" name="backhand" className={inputClass}>
                <option>투핸드</option>
                <option>원핸드</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Goals */}
        <fieldset className="space-y-5">
          <legend className="label mb-2 text-ink">목표</legend>
          <div>
            <label htmlFor="goals" className={labelClass}>
              강점 · 보완할 점 · 단기/중기 목표
            </label>
            <textarea id="goals" name="goals" rows={4} className={`${inputClass} resize-none`} placeholder="본인의 강점과 보완할 점, 단기 및 중기 목표를 자유롭게 작성해 주세요." />
          </div>
        </fieldset>

        <div>
          <label className="flex items-start gap-3 text-sm text-muted">
            <input type="checkbox" name="agree" className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]" />
            <span>
              개인정보 수집·이용에 동의합니다. <span className="text-alert">(필수)</span>
            </span>
          </label>
          {errors.agree && <p className="mt-1.5 text-xs text-alert">{errors.agree}</p>}
        </div>

        <button type="submit" className="w-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim">
          장학 신청서 제출하기
        </button>
      </form>
    </div>
  );
}
