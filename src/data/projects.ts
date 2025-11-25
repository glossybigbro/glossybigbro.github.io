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
        role: "주요 역할: 기술적 의사결정 및 리드 개발",
        description: [
            "문제: MVC/MVVM이 혼재된 Legacy 코드의 높은 결합도 및 수동 배포의 비효율",
            "Architecture: Clean Architecture 도입 및 Feature/Domain/Core 단위의 멀티 모듈 리팩토링으로 결합도 해소",
            "DevOps: Gradle Kotlin DSL 전환 및 GitHub Actions 기반의 CI/CD(빌드/배포/정적분석) 파이프라인 구축",
            "Modernization: Java → Kotlin 100% 전환 및 신규 기능 Jetpack Compose 도입",
            "성과: 유지보수 비용 30% 절감, 배포 리드타임 0, 휴먼 에러 방지",
        ],
        tags: [
            "Clean Architecture", "Multi-Module", "MVC", "MVVM", "MVI", "Java", "Kotlin",
            "Jetpack Compose", "Hilt", "Room", "DataStore", "Coroutines", "Firebase App Distribution",
            "CI/CD", "GitHub Actions", "Gradle Kotlin DSL", "Convention Plugins", "Detekt", "Etc"
        ],
    },
    {
        id: "proj-2",
        period: "2024.05 ~ 2025.01",
        title: "SDUI (Server Driven UI) 기반 홈 피드 시스템",
        role: "주요 역할: 설계 및 구현",
        description: [
            "문제: 잦은 홈 화면 UI 변경에 따른 앱 업데이트 비효율 발생",
            "해결: GraphQL/Apollo Client를 활용한 SDUI 시스템 구축으로 서버 주도 UI 제어 환경 마련",
            "성과: 앱 배포 없이 홈 화면 즉시 개편 가능, 개발 리소스 30% 절감",
        ],
        tags: ["GraphQL", "Apollo Client", "SDUI", "Etc"],
    },
    {
        id: "proj-3",
        period: "2023.01 ~ 2025.01",
        title: "판매자(Seller) 비즈니스 기능 고도화",
        role: "주요 역할: 비즈니스 로직 구현 및 UI/UX 개선",
        description: [
            "판매자/구매자 분리: 혼재된 로직 분리, 텍스트 슬라이드 애니메이션 적용 등 각 사용자 경험(UX) 최적화",
            "상품 관리 효율화: 상품 일괄 편집(할인/삭제/상단업) 및 묶음 구매 제안 기능을 구현하여 판매 편의성 증대",
            "사용성(UX) 개편: 복잡한 상품 등록 절차를 간소화하고, 상품 상세 화면의 핵심 정보를 요약 배치하여 가독성 개선",
            "현황 시각화: 프리미엄 매입 진행 단계(신청→검수→완료)를 타임라인 형태로 시각화하여 투명성 확보",
            "관심 탭 기술 개선: 클린 아키텍처 기반의 재사용 가능한 페이징 모듈을 설계하고, Paging3의 한계를 보완하기 위해 ListAdapter 방식으로 전환하여 성능 최적화",
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
            "Tech: MVP 패턴, Retrofit2, Room",
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
            "Android Native", "Java", "ConstraintLayout", "Etc"
        ],
    },
];
