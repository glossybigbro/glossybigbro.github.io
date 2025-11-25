# 포트폴리오 웹사이트

하윤형의 개인 포트폴리오 및 이력서 웹사이트입니다.

🔗 **Live Demo**: [https://glossybigbro.github.io/](https://glossybigbro.github.io/)

## 🎨 주요 기능

- ✨ **라이트/다크 모드**: 시스템 설정에 따라 자동으로 테마 전환
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- 🎯 **섹션별 구성**:
  - Header: 연락처 및 소셜 링크
  - Introduce: 자기소개 및 프로필
  - Experience: 경력 사항
  - Project: 주요 프로젝트
  - Skill: 기술 스택
  - Writing: 작성한 글

## 🛠️ 기술 스택

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Font**: Pretendard (한글), Geist (영문)
- **Deployment**: GitHub Pages

## 🚀 시작하기

### 개발 서버 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 배포

```bash
npm run deploy
```

GitHub Pages로 자동 배포됩니다.

## 📝 콘텐츠 수정

포트폴리오 내용을 수정하려면 `src/data/` 폴더의 파일들을 편집하세요:

- `header.ts`: 이름, 직함, 연락처
- `introduce.ts`: 자기소개
- `experience.ts`: 경력 사항
- `projects.ts`: 프로젝트 목록
- `skills.ts`: 기술 스택
- `articles.ts`: 작성한 글

## 🎨 디자인 특징

### 라이트 모드
- 순백색 배경 (`100%`)
- 부드러운 회색 톤의 태그와 배지
- 깔끔하고 전문적인 느낌

### 다크 모드
- 거의 검은색 배경 (`6%`)
- 진한 회색 배경의 태그와 배지
- 모던하고 고급스러운 느낌

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 👤 작성자

**하윤형 (Ha Yun-hyeong)**
- Email: glossy.bigbro@gmail.com
- GitHub: [@glossybigbro](https://github.com/glossybigbro)
