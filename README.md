# 🎯 포트폴리오 웹사이트

> 하윤형의 개인 포트폴리오 및 이력서 웹사이트입니다.  
> 모던한 디자인과 최신 웹 기술을 활용하여 제작되었습니다.

🔗 **Live Demo**: [https://glossybigbro.github.io/](https://glossybigbro.github.io/)

---

## 📖 프로젝트 소개

이 프로젝트는 개인의 경력, 프로젝트, 기술 스택을 효과적으로 보여주기 위한 **인터랙티브 포트폴리오 웹사이트**입니다. Next.js 16의 App Router와 Tailwind CSS v4를 활용하여 최신 웹 개발 트렌드를 반영했으며, 사용자 경험을 최우선으로 고려한 디자인을 구현했습니다.

### ✨ 주요 특징

- 🌓 **다크/라이트 모드 지원**
  - 시스템 설정에 따른 자동 테마 감지
  - 사용자가 직접 테마 전환 가능
  - 부드러운 테마 전환 애니메이션 (0.3초)
  - 선택한 테마 로컬 저장소에 자동 저장

- 📱 **완벽한 반응형 디자인**
  - 모바일, 태블릿, 데스크톱 등 모든 화면 크기 최적화
  - Tailwind CSS의 반응형 유틸리티 활용
  - 유연한 레이아웃으로 콘텐츠 자동 조정

- 🎨 **미니멀한 디자인**
  - 깔끔하고 전문적인 UI
  - 일관된 색상 시스템 (라이트/다크 모드)
  - 타이포그래피 최적화 (Pretendard, Geist)

- ⚡ **빠른 성능**
  - Next.js의 정적 사이트 생성(SSG)
  - 자동 코드 스플리팅
  - 최소화된 번들 크기

### 🎯 섹션 구성

| 섹션 | 설명 |
|------|------|
| **Header** | 이름, 직함, 연락처 및 소셜 미디어 링크 |
| **Introduce** | 자기소개, 핵심 가치, 업무 철학 |
| **Experience** | 경력 사항, 주요 업무 및 성과 |
| **Project** | 참여 프로젝트, 역할, 사용 기술 |
| **Skill** | 기술 스택, 도구, 프레임워크 |
| **Writing** | 작성한 기술 블로그 글 및 아티클 |

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

## ⚡ 성능 최적화

### 적용된 최적화 기법

- ✅ **정적 사이트 생성 (SSG)**: 빌드 시 HTML 생성으로 빠른 로딩
- ✅ **자동 코드 스플리팅**: Next.js가 페이지별로 코드 자동 분할
- ✅ **CSS 최적화**: Tailwind CSS로 필요한 스타일만 포함
- ✅ **번들 크기 최소화**: Tree shaking 및 minification 적용
- ✅ **테마 전환 최적화**: 0.3초 부드러운 애니메이션

### 참고 사항

- 이미지 최적화는 GitHub Pages 배포 특성상 비활성화되어 있습니다 (`unoptimized: true`)
- 폰트는 CDN(Pretendard)과 Google Fonts(Geist)를 사용합니다

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
