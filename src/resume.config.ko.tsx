import React from "react";
import type { HeaderData, ExperienceItem, ProjectItem, SkillCategory, ArticleItem } from "@/types";

/**
 * 🎯 이력서 통합 설정 파일
 * 
 * 이 파일 하나만 수정하면 모든 이력서 정보가 업데이트됩니다.
 * 각 섹션별로 데이터를 입력하세요.
 * 
 * 💡 사용 방법:
 * 1. 아래 데이터를 본인의 정보로 수정
 * 2. `npm test` 명령어로 데이터 검증
 * 3. `npm run dev`로 로컬에서 확인
 * 4. 문제없으면 배포!
 */

// ============================================================================
// 📌 헤더 정보 (Header)
// ============================================================================
/**
 * 웹사이트 상단에 표시될 기본 정보
 * 
 * @property name - 이름
 * @property email - 이메일 주소 (클릭 시 클립보드에 복사됨)
 * @property github - GitHub 프로필 URL (선택사항)
 * @property linkedin - LinkedIn 프로필 URL (선택사항)
 * @property portfolio - 개인 웹사이트 URL (선택사항)
 */
export const header: HeaderData = {
    name: "Glossybigbro.",
    email: "glossy.bigbro@gmail.com",
    github: "https://github.com/glossybigbro",
    linkedin: "https://www.linkedin.com/in/yunhyeong-ha",
    portfolio: "",
    velog: "https://velog.io/@glossybigbro",
};

// ============================================================================
// 📌 소개 (Introduce)
// ============================================================================
/**
 * 자기소개 섹션
 * 
 * @property title - 섹션 제목
 * @property profileImage - 프로필 이미지 경로 (public/images 폴더 내)
 * @property content - 자기소개 본문 (ReactNode 배열, HTML 태그 사용 가능)
 */
export const introduce = {
    title: "Introduce.",
    profileImage: "/images/profile.jpeg",
    content: [
        <p key="p1" className="font-medium">
            반갑습니다. 다양한 도메인에서 경험을 쌓은 <strong className="font-bold">8년차 안드로이드 개발자</strong>로서, 대규모 커머스 서비스에서 <strong className="font-bold">안드로이드 리드(Android Lead)이자 스쿼드 개발 팀장</strong>으로 팀을 이끌었습니다. 현재는 <strong className="font-bold">신기술 도입</strong>을 통한 기술적 방향 설정, <strong className="font-bold">확장 가능한 아키텍처 설계</strong>, <strong className="font-bold">CI/CD 기반 개발 과정 자동화</strong>, 그리고 효과적인 팀 협업에 중점을 두고 있습니다.
        </p>,
        <p key="p2">
            저는 프로젝트의 성공을 <strong className="font-bold">사용자 만족과 팀의 성장</strong>이라 생각합니다. 팀의 효율적인 협업과 원활한 커뮤니케이션이 뒷받침될 때, 비로소 <strong className="font-bold">비즈니스 목표를 실현</strong>하고 사용자가 만족하는 서비스를 만들 수 있다고 믿습니다. <strong className="font-bold">주도적인 개발자</strong>로서 팀의 문제를 해결하며, 모든 팀원이 최고의 퍼포먼스를 발휘할 수 있도록 지원합니다.
        </p>,
        <p key="p3">
            <strong className="font-bold">'실천'과 '꾸준함', 그리고 '습관화'</strong>. 이 세 가지는 제가 일과 삶을 대하는 태도를 관통하는 키워드입니다. 러닝과 웨이트 트레이닝으로 다진 체력은 업무에 대한 <strong className="font-bold">지치지 않는 몰입</strong>으로, 폭넓은 독서와 멈추지 않는 신기술 탐구는 <strong className="font-bold">유연한 사고와 기술적 시야</strong>로 이어지고 있습니다. 사소한 반복이 모여 습관이 되고, 태도가 되며, 결국 <strong className="font-bold">누구도 대체할 수 없는 실력</strong>이 된다는 믿음으로, 묵묵히 쌓아 올린 매일의 몰입과 꾸준함이 결국 <strong className="font-bold">팀과 서비스에 큰 변화</strong>를 만들어낸다고 생각합니다.
        </p>
    ]
};

// ============================================================================
// 📌 경력 (Experience)
// ============================================================================
/**
 * 경력 사항 목록
 * 
 * @property id - 고유 식별자 (중복 불가, 예: "exp-1")
 * @property period - 근무 기간 (예: "2022.08 ~ 2025.01")
 * @property role - 회사명 또는 조직명
 * @property description - 주요 업무 및 성과 (배열)
 * @property tags - 관련 기술 스택 또는 역할 태그
 * @property playStoreUrl - Google Play Store 링크 (선택사항)
 * @property isEnterprise - 기업용 솔루션 여부 (선택사항)
 */
export const experience: ExperienceItem[] = [
    {
        id: "exp-1",
        period: "2022.08 ~ 2025.01",
        role: "헬로마켓",
        description: [
            "대규모 서비스 운영: 누적 다운로드 800만, MAU 130만 플랫폼의 앱 안정성(Crash-free) 99.9% 이상 유지",
            "셀러 스쿼드 개발 팀장: 스쿼드 내 개발 직군(iOS, FE, BE)의 일정 및 리소스를 관리하고, PM/디자이너와 소통하여 원활한 프로젝트 진행을 조율",
            "OKR 및 애자일 실행: 리브랜딩 과정에서 분기별 목표(OKR)를 바탕으로 스프린트 일정을 수립하고 관리하여 비즈니스 요구사항에 대응 [관련 글 보기](https://velog.io/@glossybigbro/OKR-애자일로-3개월-만에-조직을-바꾼-방법)",
            "안드로이드 리드: 3명 규모의 안드로이드 파트를 리딩하며 기술 공유 및 아키텍처 논의를 주도하고, 최신 트렌드(Paging3, GraphQL, Compose)를 실무에 적극 도입하여 기술 경쟁력 강화",
            "기술 고도화: 100% Java 코드를 Kotlin으로 전환하고, MVC를 Clean Architecture로 리팩토링 및 Jetpack Compose 점진적 도입",
            "생산성 혁신: 멀티 모듈 아키텍처 도입 및 GitHub Actions 기반 CI/CD 파이프라인 구축 (배포 자동화)",
        ],
        tags: ["Android Lead", "Seller Squad Development Team Lead"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.tuck.hellomarket",
        metrics: [
            { label: "앱 다운로드", value: 8000000, suffix: "+", type: "counter" as const },
            { label: "월간 활성 사용자", value: 1300000, suffix: "+", type: "counter" as const },
            { label: "앱 안정성", value: 99.9, suffix: "%", type: "progress" as const },
        ],
    },
    {
        id: "exp-2",
        period: "2021.10 ~ 2022.07",
        role: "더 싸이언티스트",
        description: [
            "라이브 커머스 플랫폼 신규 개발: Tencent SDK 및 ExoPlayer2를 활용하여 방송 송출, 실시간 채팅, VOD 등 핵심 기능 구현",
            "성능 및 구조 최적화: Single Activity(Navigation Component) 도입으로 불필요한 리소스 낭비를 줄이고 화면 전환 속도 개선",
            "아키텍처 설계: 초기 단계부터 Clean Architecture(MVVM)를 적용하여 유지보수와 기능 확장이 용이한 코드베이스 마련",
        ],
        tags: ["Android Developer"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=com.charancha.broadcast",
    },
    {
        id: "exp-3",
        period: "2018.05 ~ 2021.09",
        role: "버텍스아이디",
        description: [
            "농협하나로유통 PDA 솔루션 개발: 디지털 풀필먼트 센터(DFC) 및 PCS 고도화 프로젝트 메인 개발",
            "물류 프로세스 효율화: 총량/주문별 피킹 로직 구현 및 Honeywell 바코드 스캔 최적화",
            "기업용 물류/영업 시스템 구축: 동서식품, 팔도 등 대형 기업의 영업 지원 및 물류 관리(WMS) PDA 앱 개발",
        ],
        tags: ["Android Developer", "대리"],
        isEnterprise: true,
    },
    {
        id: "exp-4",
        period: "2017.09 ~ 2017.11",
        role: "비트바이트",
        description: [
            "플레이키보드 UI 개발: ConstraintLayout을 도입하여 신규 기능 화면을 구성하고, 디자이너와 협업하여 정교한 UI 레이아웃 구현",
        ],
        tags: ["Android Developer"],
        playStoreUrl: "https://play.google.com/store/apps/details?id=kr.bitbyte.playkeyboard",
    },
];

// ============================================================================
// 📌 프로젝트 (Projects)
// ============================================================================
/**
 * 프로젝트 목록
 * 
 * @property id - 고유 식별자 (중복 불가, 예: "proj-1")
 * @property period - 프로젝트 기간 (예: "2023.01 ~ 2025.01")
 * @property title - 프로젝트 제목
 * @property role - 프로젝트에서의 역할
 * @property description - 프로젝트 상세 설명 (배열)
 * @property tags - 사용된 기술 스택 및 도구
 * @property links - 관련 링크 (선택사항)
 */
export const projects: ProjectItem[] = [
    {
        id: "proj-0",
        period: "2026.01 ~ 현재",
        title: "GitHub Profile Generator",
        role: "개인 프로젝트: 기획, 디자인, 개발, 배포",
        isPersonal: true,
        description: [
            "프로젝트 동기: 멋진 GitHub 프로필을 갖고 싶지만 디자인이나 마크다운 문법이 어려워 포기하는 개발자들을 위해 시작했습니다. '누구나 쉽고 예쁘게 자신을 표현할 수 없을까?'라는 고민 끝에, 내가 가진 기술로 다른 사람들의 퍼스널 브랜딩을 돕는 도구를 만들고자 합니다.",
            "기획 의도 (Editor Experience): 익숙하지 않은 마크다운 에디터 대신, 많은 개발자들에게 친숙한 '노션(Notion)'의 작성 경험을 웹으로 가져오면 어떨까 생각했습니다. 블록을 조립하듯 직관적인 WYSIWYG 에디터를 통해, 글을 쓰듯이 자연스럽게 프로필을 완성하는 경험을 제공하는 것이 목표입니다.",
            "템플릿 시스템: 현재 통계, 주간 활동 내역, Bio 등 5종의 핵심 위젯을 구현했으며, 향후 기술 스택이나 방문자 수 등 다양한 목적의 템플릿을 지속적으로 추가할 수 있도록 확장 가능한 아키텍처를 설계했습니다.",
            "기술 구현 (Editor Engine): 이러한 사용자 경험을 웹에서 구현하기 위해 ContentEditable 기반의 블록 에디터 엔진을 직접 개발하고 있습니다. 슬래시 커맨드(/)와 드래그 앤 드롭 등 복잡한 상호작용을 라이브러리 없이 구현하며 프론트엔드 기술의 한계에 도전 중입니다.",
            "데이터 시각화 및 자동화 실험: 현재 적용된 'Activity Graph(Ashutosh00710)' 사례처럼, 다양한 오픈소스 프로젝트와 WakaTime 등 외부 서비스를 사용자가 자유롭게 커스터마이징하여 자신의 프로필에 적용할 수 있는 '확장형 템플릿 시스템'을 구축하고 있습니다. 또한 GitHub Actions를 도입해 매일 프로필이 자동으로 최신화되는 파이프라인 구축을 목표로 하고 있습니다.",
            "디자인 및 아키텍처: '개발자의 여정'이라는 테마에 어울리는 몰입감 있는 우주 배경(Canvas API)과, 프로젝트가 커져도 유지보수가 용이한 FSD 아키텍처를 도입하여 지속 가능한 서비스를 만들어가고 있습니다.",
        ],
        tags: [
            "Next.js 15", "TypeScript", "Three.js (R3F)", "Framer Motion", "TanStack Query",
            "FSD Architecture", "Zustand", "dnd-kit", "Zod", "Octokit", "Tailwind CSS"
        ],
        links: [
            {
                text: "웹사이트",
                href: "https://glossybigbro-github-profile-generator.vercel.app/"
            },
            {
                text: "GitHub Repository",
                href: "https://github.com/glossybigbro/github-profile-generator"
            }
        ]
    },
    {
        id: "proj-1",
        period: "2025.12 ~ 현재",
        title: "웹 개발 첫 도전: 이력서 웹사이트 제작기",
        role: "개인 프로젝트: 기획, 디자인, 개발, 배포",
        isPersonal: true,
        description: [
            "배경: 프리랜서 준비 중 '웹 + 모바일', '풀스택' 요구사항을 보고 웹 개발 학습을 결심. 첫 프로젝트로 이력서 웹사이트를 만들면서 Android 개발과 생각보다 유사한 점이 많다는 걸 발견. 학습 과정을 Velog 시리즈로 공유 중",
            "아키텍처: Container-Presenter 패턴으로 데이터와 UI를 분리하고, Zod 스키마로 타입 안전성을 보장하며, CVA로 재사용 가능한 컴포넌트 시스템 구축. 학습 프로젝트지만 실무 수준의 설계 적용",
            "다국어 & 테마: Context API 기반 한영 토글, Chrome 시스템 테마와 웹사이트 토글을 조합한 다크모드(4가지 조합), View Transition API로 랜덤 위치 원형 전환 애니메이션",
            "SEO & UX: 동적 메타데이터 생성 및 자동 사이트맵으로 검색 엔진 최적화, useIsMobile 훅으로 모바일 터치와 데스크톱 호버를 구분하여 최적화",
            "사용자 친화적 설계: resume.config.tsx 파일에 모든 데이터(이름, 경력, 프로젝트, 기술 스택 등)를 통합하여 한 곳에서 관리. 초보자도 따라할 수 있도록 Step-by-Step 가이드와 예시 템플릿을 포함한 README 문서 작성",
            "학습 공유: Velog에서 'Android 개발자의 웹 개발 도전기' 시리즈 연재 중. Kotlin과 TypeScript의 유사성, Compose와 React의 공통점, Tailwind CSS, 다크모드, 다국어 지원, Zod 타입 검증 등 다양한 주제를 다룰 예정",

        ],
        tags: [
            "Next.js 15", "TypeScript", "React", "Tailwind CSS v4",
            "Context API", "GitHub Actions", "GitHub Pages",
            "View Transition API", "Responsive Design", "i18n", "Dark Mode"
        ],
        links: [
            {
                text: "웹사이트",
                href: "https://glossybigbro.github.io"
            },
            {
                text: "GitHub Repository",
                href: "https://github.com/glossybigbro/glossybigbro.github.io"
            },
            {
                text: "Velog 시리즈",
                href: "https://velog.io/@glossybigbro/1%ED%8E%B8.-%EC%96%B4-%EC%9D%B4%EA%B1%B0-Kotlin%EC%9D%B4%EB%9E%91-%EB%98%91%EA%B0%99%EC%9E%96%EC%95%84"
            }
        ],
    },
    {
        id: "proj-2",
        period: "2023.01 ~ 2025.01",
        title: "앱 아키텍처 전면 개편 및 성능 최적화",
        role: "주요 역할: 레거시 리팩토링 및 아키텍처 설계",
        description: [
            "개요: 유지보수가 한계에 다다른 Java/MVC 레거시 코드를 현대적인 아키텍처로 전환하여 개발 생산성 확보",
            "Modern Android 전환: 100% Java 코드를 Kotlin으로 전환하고, Clean Architecture + MVVM 도입으로 비즈니스 로직 분리 및 유닛 테스트 환경 마련",
            "Multi-Module 구축: Layered Architecture를 Feature, Domain, Core 단위의 멀티 모듈로 재설계하여 빌드 속도 단축 및 모듈 간 의존성 최적화",
            "비동기 처리 개선: 콜백 지옥을 Coroutine & Flow로 전환하여 데이터 처리 안정성 확보",
            "빌드 환경 최적화: Gradle Kotlin DSL 및 Version Catalog 도입으로 의존성 관리 중앙화 및 빌드 환경 표준화",
            "성과: 기술 부채 해소로 신규 기능 개발 속도 향상 및 유지보수 효율 30% 증대",
        ],
        tags: [
            "Clean Architecture", "Multi-Module", "MVC", "MVVM", "Java", "Kotlin",
            "Jetpack Compose", "Hilt", "Room", "Coroutines", "Flow", "Gradle Kotlin DSL", "Version Catalog",
            "Etc"
        ],
        metrics: [
            { label: "유지보수 효율 증대", value: 30, suffix: "%", type: "progress" as const },
            { label: "빌드 속도 개선", value: 40, suffix: "%", type: "progress" as const },
        ],
    },
    {
        id: "proj-3",
        period: "2023.05 ~ 2025.01",
        title: "DevOps 구축 및 앱 안정성(Quality) 고도화",
        role: "주요 역할: CI/CD 파이프라인 구축 및 품질 관리 시스템 운영",
        description: [
            "개요: 수동 배포의 비효율 제거 및 데이터 기반 품질 관리 체계 구축",
            "CI/CD 파이프라인: GitHub Actions로 정적 분석(Detekt), 테스트, 빌드 자동화 및 Firebase 자동 배포 구현",
            "배포 효율화: 배포 준비 시간을 90% 이상 단축하고 인적 오류(Human Error) 원천 차단",
            "앱 안정성 확보: Crashlytics 모니터링 고도화로 이슈 선제 대응 체계 마련, Crash-free 비율 99.9% 이상 유지",
            "성과: 배포 리드타임 90% 단축 및 무사고 운영(Crash-free 99.9%) 달성",
        ],
        tags: [
            "DevOps", "CI/CD", "GitHub Actions", "Firebase App Distribution", "Crashlytics", "Detekt",
            "Etc"
        ],
        metrics: [
            { label: "배포 시간 단축", value: 90, suffix: "%", type: "progress" as const },
            { label: "Crash-free 비율", value: 99.9, suffix: "%", type: "progress" as const },
        ],
    },
    {
        id: "proj-4",
        period: "2023.06 ~ 2023.12",
        title: "SDUI (Server Driven UI) 기반 홈 피드 구축",
        role: "주요 역할: SDUI 클라이언트 설계 및 구현",
        description: [
            "문제 정의: 잦은 홈 화면 UI 변경 요청으로 인한 반복적인 앱 배포와 심사 대기 시간의 비효율 발생",
            "SDUI 구현: GraphQL과 Apollo Client를 활용해 서버 주도형 동적 UI 렌더링 구조 설계",
            "개발 리소스 30% 절감: 홈 화면 UI를 동적으로 변경할 수 있도록 개선하여 반복적인 수정 업무 및 배포 비용 감소",
            "네트워크 최적화: 필요한 데이터만 쿼리(GraphQL)하여 오버페칭을 방지하고, 데이터 전송량 감소를 통해 서버 비용 절감에 기여",
            "안정성 확보: 타입 안정성을 보장하는 설계로 UI 관련 에러 발생 0건을 유지하며 안정적인 운영 환경 구축",
        ],
        tags: ["GraphQL", "Apollo Client", "SDUI", "Jetpack Compose", "Optimization", "Etc"],
        metrics: [
            { label: "개발 리소스 절감", value: 30, suffix: "%", type: "progress" as const },
            { label: "UI 에러", value: 0, suffix: "건", type: "counter" as const },
        ],
    },
    {
        id: "proj-5",
        period: "2023.01 ~ 2025.01",
        title: "판매자(Seller) 비즈니스 기능 고도화",
        role: "주요 역할: 판매자(Seller) 비즈니스 로직 구현 및 UI/UX 고도화",
        description: [
            "상점 화면 분리: 판매자와 구매자 기능이 혼재된 상점 화면을 구조적으로 분리하여 UX 개선의 토대를 마련하고, 텍스트 슬라이드 애니메이션을 구현하여 정보 전달력 강화",
            "매입 프로세스 시각화: 수거-검수-송금 단계를 직관적으로 시각화하고 실시간 알림(노티)을 구현하여 CS 문의 감소 및 투명성 확보",
            "상품 관리 효율화: 상품 일괄 편집(할인/상단업) 구현 및 묶음 구매 제안 로직 설계를 통해 객단가(Basket Size) 상승 유도",
            "상품 등록 개선: 입력 단계 재구성 및 유효성 검사 강화로 등록 이탈률 방지 및 완료율 상승",
            "관심 탭 개편: 찜한 상품/상점을 한눈에 보는 클린 아키텍처 기반 페이징 뷰 구현 (Paging3 도입)",
            "상세 화면 개편: 핵심 정보를 상단에 요약 배치하고, 추가 정보는 스크롤 방식으로 제공하는 UI 구조를 설계하여 사용자 편의성 극대화",
        ],
        tags: [
            "Hilt", "Room", "DataStore", "Coroutines", "Jetpack Compose", "Paging3", "Flow",
            "ListAdapter", "PagingData", "DiffUtil", "CustomView(Animation)", "Etc"
        ],
    },
    {
        id: "proj-6",
        period: "2021.10 ~ 2022.07",
        title: "중고차 라이브 커머스 플랫폼 '차란차 스튜디오' 신규 개발",
        role: "주요 역할: 안드로이드 메인 개발 (초기 설계 및 구현)",
        description: [
            "라이브 스트리밍 기능 구현: Tencent SDK 및 ExoPlayer2를 활용해 방송 송출, 실시간 채팅, VOD 기능을 개발하여 딜러-고객 간 양방향 소통 환경 제공",
            "성능 및 구조 최적화: Single Activity Architecture(Navigation Component) 도입으로 불필요한 리소스 낭비를 줄이고 화면 전환 속도 개선",
            "확장성 있는 아키텍처: 초기 단계부터 Clean Architecture(MVVM)를 적용하여 유지보수와 기능 확장이 용이한 코드베이스 마련"
        ],
        tags: [
            "Kotlin", "MVVM", "Clean Architecture", "Tencent SDK", "ExoPlayer2",
            "Navigation Component", "Single Activity", "Coroutines", "Retrofit2", "Etc"
        ],
    },
    {
        id: "proj-7",
        period: "2018.05 ~ 2021.09",
        title: "농협하나로유통 디지털 풀필먼트(DFC) 및 PDA 솔루션",
        role: "주요 역할: 안드로이드 PDA 앱 개발",
        description: [
            "DFC (디지털 풀필먼트 센터): 총량 피킹 리스트 연동 및 트레이 매핑, DAS 데이터 전송 기능 개발",
            "(신)PCS 고도화: 기존 존(Zone)별 피킹을 주문별 피킹 방식으로 전환 및 시스템 이관",
            "공통: Honeywell SDK를 활용한 고속 바코드 스캔 처리 및 데이터 정합성 확보",
        ],
        tags: [
            "Clean Architecture", "MVP", "RxJava", "Retrofit2", "Room", "Honeywell SDK", "Etc"
        ],
    },
    {
        id: "proj-8",
        period: "2017.09 ~ 2017.11",
        title: "플레이키보드 신규 기능 UI 및 레이아웃 구현",
        role: "주요 역할: ConstraintLayout 기반 UI 개발",
        description: [
            "UI 기술 도입: ConstraintLayout을 도입하여 신규 기능 화면을 구성하고 레이아웃 구조 효율화",
            "협업 및 구현: 디자이너와 협업하여 가이드에 맞춘 정확한 UI 레이아웃 구현 및 신규 기능 화면 개발",
        ],
        tags: ["Android", "ConstraintLayout", "UI/UX", "XML"],
    },
];

// ============================================================================
// 📌 기술 스택 (Skills)
// ============================================================================
/**
 * 기술 스택 목록 (카테고리별)
 * 
 * @property title - 카테고리 제목 (예: "Languages", "Framework")
 * @property skills - 해당 카테고리의 기술 목록
 */
export const skills: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            "Kotlin",
            "Java",
            "Dart",
        ],
    },
    {
        title: "Architecture & Design Patterns",
        skills: [
            "Clean Architecture",
            "Multi-Module",
            "MVVM",
            "MVP",
            "MVI",
            "Single Activity",
        ],
    },
    {
        title: "Android Libraries & Jetpack",
        skills: [
            "Jetpack Compose",
            "Coroutines",
            "Flow",
            "RxJava",
            "Hilt",
            "Navigation",
            "Room",
            "DataStore",
            "LiveData",
            "DataBinding",
            "WorkManager",
            "Paging3",
            "ExoPlayer2",
        ],
    },
    {
        title: "Network & Data",
        skills: [
            "Retrofit2",
            "OkHttp3",
            "GraphQL(Apollo Client)",
            "Glide/Coil",
        ],
    },
    {
        title: "Cross-Platform",
        skills: [
            "Flutter",
        ],
    },
    {
        title: "Build & Tools",
        skills: [
            "Gradle (Kotlin DSL)",
            "Convention Plugins",
            "Version Catalog",
            "Detekt",
            "Android Studio",
            "Visual Studio Code",
            "Git",
            "GitHub",
            "GitLab",
        ],
    },
    {
        title: "DevOps & Collaboration",
        skills: [
            "GitHub Actions",
            "Firebase App Distribution",
            "Jira",
            "Confluence",
            "Slack",
            "Trello",
            "Figma",
        ],
    },
    {
        title: "Others (SDK & AI)",
        skills: [
            "Kakao Map API",
            "Tencent SDK",
            "Honeywell SDK",
            "ChatGPT",
            "Gemini",
            "Claude(Code)",
            "Cursor",
            "Antigravity",
        ],
    },
];

/**
 * 모든 기술 스택을 평탄화하여 반환합니다.
 * SEO 키워드 생성 등에 사용됩니다.
 */
export const getAllSkills = (): string[] => {
    return skills.flatMap((category) => category.skills);
};

// ============================================================================
// 📌 작성 글 (Articles)
// ============================================================================
/**
 * 작성한 글/아티클 목록
 * 
 * @property text - 글 제목 (링크 텍스트로 표시)
 * @property href - 글 URL
 * @property summary - 글 요약 (선택사항)
 * @property keywords - 관련 키워드/태그 (선택사항)
 * @property seriesName - 시리즈 이름 (선택사항, 시리즈 뱃지로 표시됨)
 */
export const articles: ArticleItem[] = [
    {
        text: "3편. Android 개발자가 보는 TypeScript (feat. Kotlin)",
        href: "https://velog.io/@glossybigbro/Android-%EA%B0%9C%EB%B0%9C%EC%9E%90%EA%B0%80-%EB%B3%B4%EB%8A%94-TypeScript-feat.-Kotlin",
        summary: "8년차 Android 개발자의 웹 개발 도전기 세 번째 이야기. 경력 표시 기능을 예시로 Kotlin과 TypeScript를 깊이 있게 비교합니다. 클래스, 인터페이스, 다형성, Null Safety부터 MVI + Clean Architecture와 React Query까지, 실전 아키텍처 비교를 통해 두 언어의 차이점과 공통점을 알아봅니다.",
        keywords: ["Android", "Kotlin", "TypeScript", "객체지향", "아키텍처"],
        seriesName: "Android 개발자의 웹 개발 도전기",
    },
    {
        text: "2편. Next.js 프로젝트 시작하기",
        href: "https://velog.io/@glossybigbro/Next.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",
        summary: "8년차 Android 개발자의 웹 개발 도전기 두 번째 이야기. Next.js를 선택한 솔직한 이유와 프로젝트 생성부터 첫 실행까지의 과정을 Jetpack Compose와 비교하며 설명합니다. Node.js 설치, npx 사용법, 프로젝트 구조 이해까지 실전 경험을 공유합니다.",
        keywords: ["Android", "Next.js", "React", "TypeScript", "Jetpack Compose"],
        seriesName: "Android 개발자의 웹 개발 도전기",
    },
    {
        text: "1편. 어? 이거 Kotlin이랑 똑같잖아?",
        href: "https://velog.io/@glossybigbro/1%ED%8E%B8.-%EC%96%B4-%EC%9D%B4%EA%B1%B0-Kotlin%EC%9D%B4%EB%9E%91-%EB%98%91%EA%B0%99%EC%9E%96%EC%95%84",
        summary: "8년차 Android 개발자의 웹 개발 도전기 첫 번째 이야기. Kotlin과 Jetpack Compose를 사용하던 개발자가 TypeScript와 React를 배우며 느낀 놀라운 유사점, 그리고 웹 개발을 공부하게 된 진짜 이유를 공유합니다.",
        keywords: ["Android", "Kotlin", "Web", "Next.js", "TypeScript"],
        seriesName: "Android 개발자의 웹 개발 도전기",
    },
    {
        text: "[OKR + 애자일로 3개월 만에 조직을 바꾼 방법]",
        href: "https://velog.io/@glossybigbro/OKR-%EC%95%A0%EC%9E%90%EC%9D%BC%EB%A1%9C-3%EA%B0%9C%EC%9B%94-%EB%A7%8C%EC%97%90-%EC%A1%B0%EC%A7%81%EC%9D%84-%EB%B0%94%EA%BE%BC-%EB%B0%A9%EB%B2%95",
        summary:
            "이거 제 일 아닌데요? 서로 미루던 조직이 '되는 방법'을 먼저 제안하기까지. 막연한 탑다운 지시 대신 3개월 단위의 OKR 정렬을 도입하여, 개발자가 기획에 참여하고 디자이너가 공수를 고민하게 만든 스쿼드팀의 실전 변화 기록입니다.",
        keywords: ["OKR", "애자일", "스타트업", "조직문화", "일하는 방식"],
    },
];
