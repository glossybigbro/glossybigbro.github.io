import type { ArticleItem } from "@/types";

/**
 * 작성 글/아티클 데이터
 * 
 * 이 파일을 수정하여 작성한 글을 변경할 수 있습니다.
 * 각 항목은 다음 필드를 포함합니다:
 * - text: 글 제목 (링크 텍스트로 표시)
 * - href: 글 URL
 * - summary: 글 요약 (선택사항)
 * - keywords: 관련 키워드/태그 (선택사항, 배열)
 */
export const articles: ArticleItem[] = [
    {
        text: "[OKR과 애자일: 변화의 시작과 도전]",
        href: "#",
        summary:
            "리브랜딩 과정에서 도입된 OKR과 애자일 체제 속에서, 스쿼드 팀장으로서 겪은 변화와 적응 과정을 담았습니다. 3개월 단위의 목표 설정, 스프린트 실행, 그리고 JIRA를 활용한 투명한 협업을 통해 '팀 전체가 하나의 목표를 향해 달리는 문화'를 만들어간 경험기입니다.",
        keywords: ["OKR", "Agile", "Scrum", "Team Building"],
    },
];
