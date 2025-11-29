export interface ProjectItem {
    id: string;
    period: string;
    title: string;
    role: string;
    description: string[];
    tags: string[];
    links?: { text: string; href: string }[];
}

export const projectsData: ProjectItem[] = [
    {
        id: "proj-1",
        period: "2023.08 ~ 2025.01",
        title: "헬로마켓 아키텍처 대전환 및 생산성 혁신",
        role: "주요 역할: 앱 아키텍처 전면 개편 및 DevOps/품질 시스템 구축",
        description: [
            "문제: 유지보수 한계에 다다른 Java/MVC 레거시 코드와 수동 배포 프로세스의 비효율 및 인적 오류 위험",
            "Architecture: 100% Java → Kotlin 전환, Clean Architecture+MVVM 도입으로 로직 분리 및 유닛 테스트 환경 마련, 멀티 모듈로 의존성 최적화",
            "Performance: 콜백 지옥을 Coroutine & Flow로 전환하여 비동기 안정성 확보, Gradle Kotlin DSL/Version Catalog 도입으로 빌드 표준화",
            "DevOps: GitHub Actions로 정적분석(Detekt)/테스트/Firebase 자동 배포 파이프라인을 구축하여 데이터 기반 품질 관리 체계 확립",
            "성과: 배포 준비 시간 90% 단축 및 인적 오류 원천 차단, Crashlytics 모니터링 고도화를 통해 Crash-free 99.9% 달성",
        ],
        tags: [
            "Clean Architecture", "Multi-Module", "MVC", "MVVM", "MVI", "Java", "Kotlin",
            "Jetpack Compose", "Hilt", "Room", "DataStore", "Coroutines", "Flow", "Firebase App Distribution",
            "CI/CD", "GitHub Actions", "Gradle Kotlin DSL", "Version Catalog", "Detekt", "Etc"
        ],
    },
    {
        id: "proj-2",
        period: "2024.05 ~ 2025.01",
        title: "SDUI (Server Driven UI) 기반 홈 피드 구축",
        role: "주요 역할: SDUI 클라이언트 설계 및 구현",
        description: [
            "문제 정의: 잦은 홈 화면 UI 변경 요청으로 인한 반복적인 앱 배포와 심사 대기 시간의 비효율 발생",
            "SDUI 구현: GraphQL과 Apollo Client를 활용해 서버 주도형 동적 UI 렌더링 구조 설계",
            "운영 효율 30% 증대: 기획전/배너 변경 시 앱 심사 및 배포 과정 없이 즉시 반영 가능하도록 개선",
            "네트워크 최적화: 필요한 데이터만 쿼리하여 오버페칭 방지 및 데이터 전송량 감소",
        ],
        tags: ["GraphQL", "Apollo Client", "SDUI", "Jetpack Compose", "Optimization"],
    },
    {
        id: "proj-3",
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
        id: "proj-4",
        period: "2021.10 ~ 2022.07",
        title: "중고차 라이브 커머스 플랫폼 '차란차 스튜디오'",
        role: "주요 역할: 안드로이드 메인 개발",
        description: [
            "기능 구현: 실시간 영상 송출/채팅(Tencent SDK), VOD 다시보기 서비스 개발",
            "구조 개선: Single Activity 및 Navigation Component 도입",
        ],
        tags: [
            "Clean Architecture", "MVVM", "Navigation Component", "Coroutine", "Tencent SDK", "ExoPlayer2", "Etc"
        ],
    },
    {
        id: "proj-5",
        period: "2018.05 ~ 2021.09",
        title: "농협하나로유통 디지털 풀필먼트(DFC) 및 PDA 솔루션",
        role: "주요 역할: 안드로이드 PDA 앱 개발",
        description: [
            "DFC (디지털 풀필먼트 센터): 총량 피킹 리스트 연동 및 트레이 매핑, DAS 데이터 전송 기능 개발",
            "Tech: Clean Architecture (MVP), RxJava, Jetpack (ViewModel, LiveData, Room)",
            "(신)PCS 고도화: 기존 존(Zone)별 피킹을 주문별 피킹 방식으로 전환 및 시스템 이관",
            "공통: Honeywell SDK를 활용한 고속 바코드 스캔 처리 및 데이터 정합성 확보",
        ],
        tags: [
            "Clean Architecture", "MVP", "RxJava", "Retrofit2", "Room", "Honeywell SDK", "Etc"
        ],
    },
    {
        id: "proj-6",
        period: "2017.09 ~ 2017.11",
        title: "플레이키보드 (PlayKeyboard)",
        role: "주요 역할: 초기 멤버 및 안드로이드 개발",
        description: [
            "기능 구현: 인터랙티브 키보드 테마 엔진 개발 및 신규 UI 화면 구성",
        ],
        tags: [
            "Java", "ConstraintLayout", "Etc"
        ],
    },
];
