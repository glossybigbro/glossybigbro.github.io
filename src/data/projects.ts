import type { ProjectItem } from "@/types";

/**
 * 프로젝트 데이터
 * 
 * 이 파일을 수정하여 프로젝트 정보를 변경할 수 있습니다.
 * 각 항목은 다음 필드를 포함합니다:
 * - id: 고유 식별자 (중복 불가, 예: "proj-1")
 * - period: 프로젝트 기간 (예: "2023.01 ~ 2025.01")
 * - title: 프로젝트 제목
 * - role: 프로젝트에서의 역할
 * - description: 프로젝트 상세 설명 (배열)
 * - tags: 사용된 기술 스택 및 도구 (배열)
 * - links: 관련 링크 (선택사항, 배열)
 */
export const projectsData: ProjectItem[] = [
    {
        id: "proj-1",
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
    },
    {
        id: "proj-2",
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
    },
    {
        id: "proj-3",
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
    },
    {
        id: "proj-4",
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
        id: "proj-5",
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
        id: "proj-6",
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
        id: "proj-7",
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
