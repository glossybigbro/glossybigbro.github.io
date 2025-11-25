export interface ExperienceItem {
    id: string;
    period: string;
    role: string;
    description: (string | { text: string; subItems: string[] })[];
    tags: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        id: "exp-1",
        period: "2022.08 ~ 2025.01",
        role: "헬로마켓",
        description: [
            "셀러 스쿼드 개발 총괄: 셀러 스쿼드의 개발 팀장으로서 개발 직군(iOS, FE, BE)을 리딩하고, 디자이너/PM과 협업하여 판매자 도메인의 핵심 기능 개발을 주도",
            "OKR/애자일 실행: 리브랜딩 과정에서 분기별 목표(OKR)를 바탕으로 스프린트를 주도적으로 실행하며 변화에 유연하게 대응",
            "앱 안정성 확보: 누적 다운로드 800만, MAU 130만 서비스의 크래시 미발생 비율 99.9% 이상 유지",
            "기술 고도화: Java → Kotlin 100% 전환, MVC → Clean Architecture 리팩토링 및 Jetpack Compose 점진적 전환",
            "생산성 혁신: 멀티 모듈 아키텍처 도입 및 GitHub Actions 기반 CI/CD 파이프라인 구축 (배포 자동화)",
            "팀 성장 기여: 바이어(구매자) 스쿼드 주니어 개발자의 사수로서 기술적 방향성 제시 및 코드 리뷰 주도",
        ],
        tags: ["Android Lead", "Seller Squad Development Team Lead"],
    },
    {
        id: "exp-2",
        period: "2021.10 ~ 2022.07",
        role: "더 싸이언티스트",
        description: [
            "라이브 커머스 '차란차 스튜디오' 개발: Tencent SDK 활용 실시간 방송 송출 및 채팅 기능 구현",
            "구조 최적화: Single Activity 패턴 및 Navigation Component 도입으로 화면 전환 성능 개선",
            "서비스 확장: 방송 종료 후 VOD 다시보기 기능 개발로 콘텐츠 재사용성 증대",
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
        role: "비트바이트",
        description: [
            "'플레이키보드' 초기 멤버: 인터랙티브 키보드 테마 엔진 개발 및 UI/UX 구현",
        ],
        tags: ["Android Developer"],
    },
];
