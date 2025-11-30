# 🎯 포트폴리오 웹사이트

> **하윤형**의 개인 포트폴리오 및 이력서 웹사이트  
> Next.js 16 + Tailwind CSS v4로 구축한 모던 웹 포트폴리오

🔗 **Live**: [https://glossybigbro.github.io/](https://glossybigbro.github.io/)

---

## 📖 프로젝트 소개

개인의 **경력**, **프로젝트**, **기술 스택**을 효과적으로 전달하기 위한 정적 포트폴리오 웹사이트입니다.  
Next.js 16의 App Router와 Tailwind CSS v4를 활용하여 최신 웹 기술 스택을 적용했으며,  
미니멀하고 깔끔한 디자인으로 콘텐츠에 집중할 수 있도록 설계했습니다.

### ✨ 구현된 주요 기능

#### 🌓 다크/라이트 모드

- **시스템 테마 자동 감지**: 사용자의 OS 설정에 따라 자동으로 테마 적용
- **수동 테마 전환**: 헤더의 테마 토글 버튼(☀️/🌙)으로 언제든 전환 가능
- **부드러운 애니메이션**: 0.3초 CSS transition으로 자연스러운 전환
- **테마 저장**: localStorage에 선택한 테마 자동 저장 (재방문 시 유지)
- **일관된 디자인**: 모든 컴포넌트에 테마 색상 시스템 적용

#### 📱 반응형 디자인

- **모바일 퍼스트**: 작은 화면부터 설계하여 모든 기기에서 최적화
- **Breakpoint 시스템**: Tailwind의 `sm:`, `md:`, `lg:` 유틸리티 활용
- **유연한 레이아웃**: Flexbox와 Grid로 화면 크기에 따라 자동 조정
- **터치 친화적**: 모바일 환경을 고려한 버튼 크기 및 간격

#### 🎨 미니멀 디자인 시스템

- **깔끔한 UI**: 불필요한 요소를 제거하고 콘텐츠에 집중
- **일관된 색상**: HSL 기반 색상 시스템으로 라이트/다크 모드 통일
- **타이포그래피**: Pretendard(한글), Geist(영문) 웹폰트 적용
- **인터랙션**: 호버 효과, 클릭 피드백 등 사용자 경험 개선

#### ⚡ 성능 최적화

- **정적 사이트 생성(SSG)**: 빌드 타임에 HTML 생성으로 초고속 로딩
- **자동 코드 스플리팅**: Next.js가 페이지별로 번들 자동 분할
- **CSS 최적화**: Tailwind CSS로 사용된 스타일만 포함
- **경량 번들**: Tree shaking과 minification 적용

#### 🛠️ 개발 경험

- **TypeScript**: 타입 안정성으로 런타임 에러 방지
- **모듈화**: 데이터와 UI 컴포넌트 분리로 유지보수 용이
- **유틸리티 함수**: 경력 계산, 날짜 파싱 등 재사용 가능한 함수 분리
- **GitHub Pages**: 자동 배포로 코드 푸시 시 즉시 반영

### 🎯 페이지 구성

| 섹션 | 내용 | 특징 |
|------|------|------|
| **Header** | 이름, 직함, 연락처, 소셜 링크, 테마 토글 | 이메일 클릭 시 클립보드 복사 |
| **Introduce** | 자기소개, 핵심 가치, 업무 철학 | 프로필 이미지 포함 |
| **Experience** | 경력 사항, 주요 업무, 성과 | 총 경력 자동 계산 표시 |
| **Project** | 참여 프로젝트, 역할, 기술 스택 | 기간별 정렬 및 태그 시스템 |
| **Skill** | 기술 스택, 도구, 프레임워크 | 카테고리별 분류 |
| **Writing** | 작성한 기술 블로그 글, 아티클 | 외부 링크 연결 |

---

## 🛠️ 기술 스택

### Core Technologies

| 기술 | 버전 | 설명 |
|------|------|------|
| **Next.js** | 16.x | React 기반 풀스택 프레임워크 (App Router 사용) |
| **TypeScript** | 5.x | 타입 안정성을 위한 정적 타입 언어 |
| **React** | 19.x | UI 구축을 위한 JavaScript 라이브러리 |

### Styling & Design

| 기술 | 설명 |
|------|------|
| **Tailwind CSS** | v4 - 유틸리티 우선 CSS 프레임워크 |
| **next-themes** | 다크/라이트 모드 테마 관리 |
| **Pretendard** | 한글 웹폰트 (가독성 최적화) |
| **Geist** | 영문 웹폰트 (Next.js 공식 폰트) |

### Development & Deployment

| 도구 | 용도 |
|------|------|
| **GitHub Pages** | 정적 사이트 호스팅 |
| **GitHub Actions** | CI/CD 자동화 배포 |
| **ESLint** | 코드 품질 관리 |
| **Prettier** | 코드 포맷팅 |

---

## 📁 프로젝트 구조

```text
glossybigbro.github.io/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   ├── page.tsx           # 메인 페이지
│   │   └── globals.css        # 전역 스타일
│   ├── components/            # React 컴포넌트
│   │   ├── Header.tsx         # 헤더 섹션
│   │   ├── Introduce.tsx      # 소개 섹션
│   │   ├── Experience.tsx     # 경력 섹션
│   │   ├── Projects.tsx       # 프로젝트 섹션
│   │   ├── Skills.tsx         # 스킬 섹션
│   │   ├── Writing.tsx        # 글 섹션
│   │   └── ThemeToggle.tsx    # 테마 전환 버튼
│   └── data/                  # 데이터 파일
│       ├── header.ts          # 헤더 정보
│       ├── introduce.ts       # 소개 내용
│       ├── experience.ts      # 경력 데이터
│       ├── projects.ts        # 프로젝트 목록
│       ├── skills.ts          # 기술 스택
│       └── articles.ts        # 작성 글 목록
├── public/                    # 정적 파일
├── .github/workflows/         # GitHub Actions
└── package.json
```

---

## 🚀 시작하기

### 필수 요구사항

- **Node.js**: 18.x 이상
- **npm**: 9.x 이상 또는 **yarn**: 1.22.x 이상

### 설치 및 실행

#### 1️⃣ 저장소 클론

```bash
git clone https://github.com/glossybigbro/glossybigbro.github.io.git
cd glossybigbro.github.io
```

#### 2️⃣ 의존성 설치

```bash
npm install
# 또는
yarn install
```

#### 3️⃣ 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

#### 4️⃣ 프로덕션 빌드

```bash
npm run build
# 또는
yarn build
```

#### 5️⃣ 배포

```bash
npm run deploy
# 또는
yarn deploy
```

GitHub Pages로 자동 배포됩니다.

### 📜 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 시작 (<http://localhost:3000>) |
| `npm run build` | 프로덕션 빌드 생성 |
| `npm run start` | 프로덕션 서버 시작 |
| `npm run lint` | ESLint로 코드 검사 |
| `npm run deploy` | GitHub Pages에 배포 |

---

## ✏️ 콘텐츠 커스터마이징

### 📝 데이터 수정

포트폴리오 내용을 수정하려면 `src/data/` 폴더의 TypeScript 파일들을 편집하세요:

#### `header.ts` - 헤더 정보

```typescript
export const headerData = {
  name: "하윤형",
  title: "Product Manager",
  email: "glossy.bigbro@gmail.com",
  github: "https://github.com/glossybigbro",
  // ...
}
```

#### `introduce.ts` - 자기소개

- 프로필 사진 경로
- 소개 텍스트
- 핵심 가치 및 업무 철학

#### `experience.ts` - 경력 사항

- 회사명, 직책, 재직 기간
- 주요 업무 및 성과
- 사용 기술 스택

#### `projects.ts` - 프로젝트 목록

- 프로젝트명, 설명
- 참여 기간, 역할
- 사용 기술 및 성과

#### `skills.ts` - 기술 스택

- 카테고리별 기술 분류
- 숙련도 및 경험

#### `articles.ts` - 작성한 글

- 제목, 요약
- 발행일, 링크
- 키워드 태그

### 🎨 스타일 커스터마이징

#### 색상 변경

`src/app/globals.css` 파일에서 색상을 수정할 수 있습니다:

```css
@theme {
  --color-background: oklch(100% 0 0);  /* 라이트 모드 배경 */
  --color-foreground: oklch(20% 0 0);   /* 라이트 모드 텍스트 */
  
  /* 다크 모드 */
  .dark {
    --color-background: oklch(6% 0 0);   /* 다크 모드 배경 */
    --color-foreground: oklch(98% 0 0);  /* 다크 모드 텍스트 */
  }
}
```

#### 폰트 변경

`src/app/layout.tsx`에서 폰트를 변경할 수 있습니다.

---

## 🎨 디자인 시스템

### 색상 팔레트

#### 라이트 모드

- **배경**: `oklch(100% 0 0)` - 순백색
- **텍스트**: `oklch(20% 0 0)` - 진한 회색
- **태그/배지**: `oklch(96% 0 0)` - 밝은 회색 배경
- **보더**: `oklch(90% 0 0)` - 부드러운 회색

#### 다크 모드

- **배경**: `oklch(6% 0 0)` - 거의 검은색
- **텍스트**: `oklch(98% 0 0)` - 거의 흰색
- **태그/배지**: `oklch(15% 0 0)` - 진한 회색 배경
- **보더**: `oklch(20% 0 0)` - 어두운 회색

### 타이포그래피

- **한글**: Pretendard (가독성과 심미성 최적화)
- **영문**: Geist (Next.js 공식 폰트)
- **제목**: 볼드체, 적절한 여백
- **본문**: 레귤러체, 1.6 line-height

### 레이아웃

- **최대 너비**: 1200px (데스크톱)
- **여백**: 일관된 spacing 시스템
- **그리드**: 반응형 CSS Grid 활용
- **간격**: Tailwind의 spacing scale 사용

---

## ⚡ 성능 및 기술적 특징

### 실제 적용된 최적화

- ✅ **정적 사이트 생성 (SSG)**  
  Next.js의 `output: 'export'` 설정으로 빌드 시 모든 페이지를 HTML로 생성합니다.  
  서버 없이 CDN에서 직접 제공되어 초고속 로딩이 가능합니다.

- ✅ **자동 코드 스플리팅**  
  Next.js가 자동으로 페이지별, 컴포넌트별로 JavaScript 번들을 분할합니다.  
  사용자는 현재 페이지에 필요한 코드만 다운로드합니다.

- ✅ **CSS 최적화**  
  Tailwind CSS v4가 실제 사용된 유틸리티 클래스만 최종 CSS에 포함시킵니다.  
  미사용 스타일이 자동으로 제거되어 CSS 파일 크기가 최소화됩니다.

- ✅ **번들 최소화**  
  프로덕션 빌드 시 Tree shaking과 minification이 자동 적용됩니다.  
  불필요한 코드가 제거되고 변수명이 압축되어 전송 크기가 줄어듭니다.

- ✅ **테마 전환 최적화**  
  CSS transition으로 0.3초 부드러운 애니메이션을 구현했습니다.  
  JavaScript 없이 순수 CSS로 처리되어 성능 영향이 없습니다.

### 기술적 제약사항

- ⚠️ **이미지 최적화 비활성화**  
  GitHub Pages 배포 특성상 `next.config.ts`에 `unoptimized: true` 설정이 필요합니다.  
  Next.js Image 컴포넌트의 자동 최적화 기능은 사용할 수 없습니다.

- ⚠️ **외부 폰트 사용**  
  Pretendard는 CDN(jsdelivr)에서, Geist는 Google Fonts에서 로드됩니다.  
  로컬 폰트가 아니므로 초기 로딩 시 외부 요청이 발생합니다.

---

## 🔧 트러블슈팅

### 일반적인 문제 해결

#### 개발 서버가 시작되지 않을 때

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

#### 빌드 에러가 발생할 때

```bash
# 캐시 삭제
rm -rf .next
npm run build
```

#### 스타일이 적용되지 않을 때

- Tailwind CSS v4 설정 확인
- `globals.css`의 `@theme` 지시어 확인
- 브라우저 캐시 삭제

---

## 🤝 기여하기

이 프로젝트는 개인 포트폴리오이지만, 개선 제안은 언제나 환영합니다!

### 기여 방법

1. 이 저장소를 Fork 합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

### 코드 스타일

- **TypeScript**: 타입 안정성 유지
- **ESLint**: 린트 규칙 준수
- **Prettier**: 코드 포맷팅 일관성
- **커밋 메시지**: 명확하고 설명적인 메시지 작성

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 👤 작성자

**하윤형 (Ha Yun-hyeong)**

- Email: <glossy.bigbro@gmail.com>
- GitHub: [@glossybigbro](https://github.com/glossybigbro)
