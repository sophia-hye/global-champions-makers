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

export function ConsultationForm() {
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
          상담 신청이 접수되었습니다
        </h3>
        <p className="mt-3 text-sm text-muted">
          전문 어드바이저가 선수에게 맞는 프로그램을 안내해 드리겠습니다. 감사합니다.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-medium text-accent"
        >
          새 상담 신청하기
        </button>
      </div>
    );
  }

  return (
    <div className="border border-line-strong bg-bg-soft p-6 md:p-9">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="program" className={labelClass}>
            관심 프로그램
          </label>
          <select id="program" name="program" className={inputClass}>
            <option>Junior</option>
            <option>Pro</option>
            <option>Adult</option>
            <option>미정 / 상담 후 결정</option>
          </select>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              이름 *
            </label>
            <input id="name" name="name" className={inputClass} placeholder="홍길동" />
            {errors.name && <p className="mt-1.5 text-xs text-alert">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="applicantType" className={labelClass}>
              지원자 유형
            </label>
            <select id="applicantType" name="applicantType" className={inputClass}>
              <option>선수 본인</option>
              <option>학부모</option>
              <option>기타</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              이메일 *
            </label>
            <input id="email" name="email" type="email" className={inputClass} placeholder="you@example.com" />
            {errors.email && <p className="mt-1.5 text-xs text-alert">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              전화번호
            </label>
            <input id="phone" name="phone" className={inputClass} placeholder="010-0000-0000" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="postalCode" className={labelClass}>
              우편번호
            </label>
            <input id="postalCode" name="postalCode" className={inputClass} placeholder="06000" />
          </div>
          <div>
            <label htmlFor="country" className={labelClass}>
              국가
            </label>
            <select id="country" name="country" className={inputClass}>
              <option>대한민국</option>
              <option>기타</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm text-muted">
            <input type="checkbox" name="agree" className="mt-0.5 h-4 w-4 accent-[var(--color-accent)]" />
            <span>
              개인정보처리방침 및 이용약관에 동의합니다.{" "}
              <span className="text-alert">(필수)</span>
            </span>
          </label>
          {errors.agree && <p className="mt-1.5 text-xs text-alert">{errors.agree}</p>}
        </div>

        <button type="submit" className="w-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim">
          상담 신청하기
        </button>
      </form>
    </div>
  );
}
