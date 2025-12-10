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
        text: "[OKR + 애자일로 3개월 만에 조직을 바꾼 방법]",
        href: "https://velog.io/@glossybigbro/OKR-%EC%95%A0%EC%9E%90%EC%9D%BC%EB%A1%9C-3%EA%B0%9C%EC%9B%94-%EB%A7%8C%EC%97%90-%EC%A1%B0%EC%A7%81%EC%9D%84-%EB%B0%94%EA%BE%BC-%EB%B0%A9%EB%B2%95",
        summary:
            "이거 제 일 아닌데요? 서로 미루던 조직이 '되는 방법'을 먼저 제안하기까지. 막연한 탑다운 지시 대신 3개월 단위의 OKR 정렬을 도입하여, 개발자가 기획에 참여하고 디자이너가 공수를 고민하게 만든 스쿼드팀의 실전 변화 기록입니다.",
        keywords: ["OKR", "애자일", "스타트업", "조직문화", "일하는 방식"],
    },
];
