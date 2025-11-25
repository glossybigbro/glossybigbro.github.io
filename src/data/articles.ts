export interface ArticleItem {
    text: string;
    href: string;
    summary?: string;
    keywords?: string[];
}

export const articles: ArticleItem[] = [
    {
        text: "[OKR과 애자일: 변화의 시작과 도전]",
        href: "#",
        summary:
            "리브랜딩 과정에서 도입된 OKR과 애자일 체제 속에서, 스쿼드 팀장으로서 겪은 변화와 적응 과정을 담았습니다. 3개월 단위의 목표 설정, 스프린트 실행, 그리고 JIRA를 활용한 투명한 협업을 통해 '팀 전체가 하나의 목표를 향해 달리는 문화'를 만들어간 경험기입니다.",
        keywords: ["OKR", "Agile", "Scrum", "Team Building", "Leadership"],
    },
];
