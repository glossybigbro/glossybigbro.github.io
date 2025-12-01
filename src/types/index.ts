/**
 * 이력서 웹사이트의 타입 정의
 * 
 * 이 파일은 프로젝트 전체에서 사용되는 타입을 중앙에서 관리합니다.
 * 각 타입에는 JSDoc 주석이 포함되어 있어 IDE에서 자동완성 시 설명을 볼 수 있습니다.
 */

/**
 * 헤더 섹션 데이터 타입
 * 
 * 페이지 상단에 표시되는 개인 정보 및 연락처 정보입니다.
 */
export interface HeaderData {
    /** 표시될 이름 */
    name: string;

    /** 직함 또는 역할 (예: "Senior Android Developer") */
    title: string;

    /** 이메일 주소 (클릭 시 클립보드에 복사됨) */
    email: string;

    /** 전화번호 (선택사항, 빈 문자열이면 표시되지 않음) */
    phone: string;

    /** GitHub 프로필 URL (선택사항, 빈 문자열이면 표시되지 않음) */
    github: string;

    /** LinkedIn 프로필 URL (선택사항, 빈 문자열이면 표시되지 않음) */
    linkedin: string;

    /** 개인 웹사이트 URL (선택사항, 빈 문자열이면 표시되지 않음) */
    portfolio: string;
}

/**
 * 경력 항목 타입
 * 
 * 각 회사/조직에서의 경력 사항을 나타냅니다.
 */
export interface ExperienceItem {
    /** 
     * 고유 식별자 (중복 불가)
     * 예: "exp-1", "exp-2"
     */
    id: string;

    /** 
     * 근무 기간
     * 형식: "YYYY.MM ~ YYYY.MM" 또는 "YYYY.MM ~ 현재"
     * 예: "2022.08 ~ 2025.01"
     */
    period: string;

    /** 
     * 회사명 또는 조직명
     * 예: "헬로마켓", "더 싸이언티스트"
     */
    role: string;

    /** 
     * 주요 업무 및 성과 설명
     * 각 항목은 하나의 업무/성과를 나타냅니다.
     * 문자열 또는 중첩된 리스트 형태로 작성 가능합니다.
     */
    description: (string | { text: string; subItems: string[] })[];

    /** 
     * 관련 기술 스택 또는 역할 태그
     * 예: ["Android Lead", "Kotlin", "Clean Architecture"]
     */
    tags: string[];
}

/**
 * 프로젝트 항목 타입
 * 
 * 개인 또는 팀 프로젝트의 상세 정보를 나타냅니다.
 */
export interface ProjectItem {
    /** 
     * 고유 식별자 (중복 불가)
     * 예: "proj-1", "proj-2"
     */
    id: string;

    /** 
     * 프로젝트 기간
     * 형식: "YYYY.MM ~ YYYY.MM"
     * 예: "2023.01 ~ 2025.01"
     */
    period: string;

    /** 
     * 프로젝트 제목
     * 예: "앱 아키텍처 전면 개편 및 성능 최적화"
     */
    title: string;

    /** 
     * 프로젝트에서의 역할
     * 예: "주요 역할: 레거시 리팩토링 및 아키텍처 설계"
     */
    role: string;

    /** 
     * 프로젝트 상세 설명
     * 각 항목은 하나의 주요 내용을 나타냅니다.
     */
    description: string[];

    /** 
     * 사용된 기술 스택 및 도구
     * 예: ["Kotlin", "Clean Architecture", "Jetpack Compose"]
     */
    tags: string[];

    /** 
     * 관련 링크 (선택사항)
     * GitHub 저장소, 데모 사이트 등
     */
    links?: { text: string; href: string }[];
}

/**
 * 기술 스택 카테고리 타입
 * 
 * 기술을 카테고리별로 그룹화하여 표시합니다.
 */
export interface SkillCategory {
    /** 
     * 카테고리 제목
     * 예: "Languages", "Framework", "Tools"
     */
    title: string;

    /** 
     * 해당 카테고리의 기술 목록
     * 예: ["Kotlin", "Java", "TypeScript"]
     */
    skills: string[];
}

/**
 * 작성 글/아티클 항목 타입
 * 
 * 기술 블로그 글이나 외부 게시물 정보를 나타냅니다.
 */
export interface ArticleItem {
    /** 
     * 글 제목 (링크 텍스트로 표시됨)
     * 예: "[OKR과 애자일: 변화의 시작과 도전]"
     */
    text: string;

    /** 
     * 글 URL
     * 예: "https://example.com/article"
     */
    href: string;

    /** 
     * 글 요약 또는 설명 (선택사항)
     */
    summary?: string;

    /** 
     * 관련 키워드/태그 (선택사항)
     * 예: ["Android", "Kotlin", "Architecture"]
     */
    keywords?: string[];
}
