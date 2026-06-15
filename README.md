# GCM Tennis Academy

미국 대학 NCAA 시스템 기반 로드맵으로 테니스 선수의 글로벌 성장과 진학·커리어를 설계하는 테니스 엘리트 아카데미 웹사이트입니다.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS v4
- **Backend**: Supabase (Auth + PostgreSQL)
- **Email**: Resend

## Getting Started

```bash
npm install
cp .env.local.example .env.local   # 값 채우기
npm run dev                          # http://localhost:3000
```

## Pages

| 경로 | 설명 |
|------|------|
| `/` | 홈 |
| `/about` | Who we are (Paradigm Shift · Safety Net · Beyond Athlete) |
| `/team` | 코치진 소개 (약력 팝업) |
| `/programs` | Why USA · Junior/Adult/Pro 트랙 · VVIP · Investment |
| `/scholarship` | 장학 신청 |
| `/consultation` | 상담 신청 |
| `/contact` | 연락처 안내 |

## Supabase

`supabase/schema.sql`을 Supabase SQL Editor에서 실행해 테이블(`gcm_profiles`, `gcm_applications`)을 생성하세요. 자세한 설정은 [docs/gcm-auth-setup.md](docs/gcm-auth-setup.md) 참고.
