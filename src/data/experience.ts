import type { ExperienceItem } from "@/types";

/**
 * 경력 데이터
 * 
 * 이 파일을 수정하여 경력 사항을 변경할 수 있습니다.
 * 각 항목은 다음 필드를 포함합니다:
 * - id: 고유 식별자 (중복 불가, 예: "exp-1")
 * - period: 근무 기간 (예: "2022.08 ~ 2025.01")
 * - role: 회사명 또는 조직명
 * - description: 주요 업무 및 성과 (배열)
 * - tags: 관련 기술 스택 또는 역할 태그 (배열)
 */
export const experienceData: ExperienceItem[] = [
    {
        id: "exp-1",
        period: "2022.08 ~ 2025.01",
        role: "헬로마켓",
        description: [
            "대규모 서비스 운영: 누적 다운로드 800만, MAU 130만 플랫폼의 앱 안정성(Crash-free) 99.9% 이상 유지",
            "셀러 스쿼드 개발 팀장: 스쿼드 내 개발 직군(iOS, FE, BE)의 일정 및 리소스를 관리하고, PM/디자이너와 소통하여 원활한 프로젝트 진행을 조율",
            "OKR 및 애자일 실행: 리브랜딩 과정에서 분기별 목표(OKR)를 바탕으로 스프린트 일정을 수립하고 관리하여 비즈니스 요구사항에 대응",
            "안드로이드 리드: 3명 규모의 안드로이드 파트를 리딩하며 기술 공유 및 아키텍처 논의를 주도하고, 최신 트렌드(Paging3, GraphQL, Compose)를 실무에 적극 도입하여 기술 경쟁력 강화",
            "기술 고도화: 100% Java 코드를 Kotlin으로 전환하고, MVC를 Clean Architecture로 리팩토링 및 Jetpack Compose 점진적 도입",
            "생산성 혁신: 멀티 모듈 아키텍처 도입 및 GitHub Actions 기반 CI/CD 파이프라인 구축 (배포 자동화)",
        ],
        tags: ["Android Lead", "Seller Squad Development Team Lead"],
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
    },
    {
        id: "exp-4",
        period: "2017.09 ~ 2017.11",
        role: "비트바이트 (BitByte)",
        description: [
            "플레이키보드 UI 개발: ConstraintLayout을 도입하여 신규 기능 화면을 구성하고, 디자이너와 협업하여 정교한 UI 레이아웃 구현",
        ],
        tags: ["Android Developer"],
    },
];
