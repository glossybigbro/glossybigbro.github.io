# 🎯 이력서 웹사이트

> **하윤형**의 개인 이력서 웹사이트  
> Next.js 16 + Tailwind CSS v4로 구축한 모던 웹 이력서

🔗 **Live**: [https://glossybigbro.github.io/](https://glossybigbro.github.io/)

---

## 📖 프로젝트 소개

개인의 **경력**, **프로젝트**, **기술 스택**을 효과적으로 전달하기 위한 정적 이력서 웹사이트입니다.  
Next.js 16의 App Router와 Tailwind CSS v4를 활용하여 최신 웹 기술 스택을 적용했으며,  
단순한 정보 전달을 넘어 **확장 가능한 아키텍처**와 **데이터 무결성**을 고려한 엔지니어링 프로젝트입니다.

---

## 🏗️ 아키텍처 및 엔지니어링 (Architecture & Engineering)

이 프로젝트는 단순한 정적 사이트가 아닙니다. 유지보수성과 확장성을 고려하여 **엔터프라이즈급 아키텍처**를 적용했습니다.

### 1. Container-Presenter 패턴

- **관심사의 분리**: 데이터 로직(`page.tsx`)과 UI 로직(`components/`)을 완벽하게 분리했습니다.
- **유지보수성**: UI 컴포넌트는 순수하게 렌더링에만 집중하며, 데이터 소스가 변경되어도 UI 코드는 수정할 필요가 없습니다.

### 2. 데이터 무결성 검증 (Data Integrity)

- **Zod**: `src/schemas`에 정의된 강력한 스키마를 통해 모든 데이터의 유효성을 런타임에 검증합니다.
- **Single Source of Truth**: TypeScript 타입 정의가 Zod 스키마로부터 자동 추론되어, 문서와 코드 간의 불일치를 원천 차단했습니다.
- **Vitest**: 데이터 파일이 스키마를 준수하는지 확인하는 자동화 테스트(`npm test`)를 구축하여, 배포 전 오류를 사전에 방지합니다.

### 3. 체계적인 스타일 시스템 (Design System)

- **CVA (Class Variance Authority)**: `Tag`, `Button` 등 UI 컴포넌트의 스타일 변형(Variant)을 선언적으로 관리합니다.
- **Tailwind CSS v4**: 최신 엔진을 사용하여 빌드 성능을 극대화하고, 불필요한 CSS를 제거했습니다.
- **다크 모드**: `next-themes`와 CSS Variables를 활용하여 시스템 테마에 완벽하게 대응합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

### Core

| 기술 | 버전 | 설명 |
|------|------|------|
| **Next.js** | 16.x | App Router, Server Components, SSG |
| **TypeScript** | 5.x | Strict Type Checking |
| **React** | 19.x | UI Library |

### Libraries & Tools

| 기술 | 설명 |
|------|------|
| **Zod** | Schema Validation & Type Inference |
| **Vitest** | Unit Testing & Data Integrity Check |
| **CVA** | Component Style Variants Management |
| **Tailwind CSS** | v4 Utility-first CSS |

---

## 📂 프로젝트 구조 (Project Structure)

```text
glossybigbro.github.io/
├── src/
│   ├── app/                    # Container (데이터 주입)
│   ├── components/             # Presenter (순수 UI)
│   │   ├── sections/           # 페이지 섹션
│   │   └── ui/                 # 재사용 가능한 UI 컴포넌트 (CVA 적용)
│   ├── data/                   # 📝 데이터 파일
│   │   ├── __tests__/          # ✅ 데이터 무결성 테스트 (Vitest)
│   │   └── ...                 # 실제 콘텐츠 데이터
│   ├── schemas/                # 🛡️ Zod 스키마 (검증 규칙)
│   ├── types/                  # Zod 추론 타입 (Single Source of Truth)
│   └── utils/                  # 순수 유틸리티 함수
└── ...
```

---

## 🚀 시작하기 (Getting Started)

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/glossybigbro/glossybigbro.github.io.git

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
```

### 테스트 실행

데이터 무결성을 검증하려면 다음 명령어를 실행하세요.

```bash
npm test
```

---

## ✏️ 콘텐츠 수정 가이드

이력서 내용을 수정하려면 `src/data/` 폴더의 파일을 편집하세요.  
편집 후 `npm test`를 실행하면 데이터 형식이 올바른지 검증할 수 있습니다.

| 파일 | 내용 |
|------|------|
| `header.ts` | 기본 정보 및 연락처 |
| `experience.ts` | 경력 사항 |
| `projects.ts` | 프로젝트 목록 |
| `skills.ts` | 보유 기술 |
| `articles.ts` | 작성 글 |

---

## 👤 작성자

**하윤형 (Ha Yun-hyeong)**

- Email: <glossy.bigbro@gmail.com>
- GitHub: [@glossybigbro](https://github.com/glossybigbro)
