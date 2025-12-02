import React from "react";

/**
 * 소개 섹션 데이터
 * 
 * 이 파일을 수정하여 자기소개 내용을 변경할 수 있습니다.
 * - title: 섹션 제목 (예: "Introduce.")
 * - profileImage: 프로필 이미지 경로 (public/images 폴더 내)
 * - content: 자기소개 본문 (ReactNode 배열, HTML 태그 사용 가능)
 */
export const introduceData = {
    title: "Introduce.",
    profileImage: "/images/profile.jpeg",
    content: [
        <p key="p1" className="font-medium">
            반갑습니다. 다양한 도메인에서 <strong className="font-bold">8년간 안드로이드 개발 경험</strong>을 쌓았으며, 대규모 커머스 서비스에서 <strong className="font-bold">안드로이드 리드(Android Lead)이자 스쿼드 개발 팀장</strong>으로 팀을 이끌었습니다. 현재는 <strong className="font-bold">신기술 도입</strong>을 통한 기술적 방향 설정, <strong className="font-bold">확장 가능한 아키텍처 설계</strong>, <strong className="font-bold">CI/CD 기반 개발 과정 자동화</strong>, 그리고 효과적인 팀 협업에 중점을 두고 있습니다.
        </p>,
        <p key="p2">
            저는 프로젝트의 성공을 <strong className="font-bold">사용자 만족과 팀의 성장</strong>이라 생각합니다. 팀의 효율적인 협업과 원활한 커뮤니케이션이 뒷받침될 때, 비로소 <strong className="font-bold">비즈니스 목표를 실현</strong>하고 사용자가 만족하는 서비스를 만들 수 있다고 믿습니다. <strong className="font-bold">주도적인 개발자</strong>로서 팀의 문제를 해결하며, 모든 팀원이 최고의 퍼포먼스를 발휘할 수 있도록 지원합니다.
        </p>,
        <p>
            <strong className="font-bold">'실천'과 '꾸준함', 그리고 '습관화'</strong>. 이 세 가지는 제가 일과 삶을 대하는 태도를 관통하는 키워드입니다. 러닝과 웨이트 트레이닝으로 다진 체력은 업무에 대한 <strong className="font-bold">지치지 않는 몰입</strong>으로, 폭넓은 독서와 멈추지 않는 신기술 탐구는 <strong className="font-bold">유연한 사고와 기술적 시야</strong>로 이어지고 있습니다. 사소한 반복이 모여 습관이 되고, 태도가 되며, 결국 <strong className="font-bold">누구도 대체할 수 없는 실력</strong>이 된다는 믿음으로, 묵묵히 쌓아 올린 매일의 몰입과 꾸준함이 결국 <strong className="font-bold">팀과 서비스에 큰 변화</strong>를 만들어낸다고 생각합니다.
        </p>
    ]
};