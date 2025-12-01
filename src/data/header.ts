import type { HeaderData } from "@/types";

/**
 * 헤더 섹션 데이터
 * 
 * 이 파일을 수정하여 개인 정보를 변경할 수 있습니다.
 * - name: 표시될 이름
 * - title: 직함 또는 역할
 * - email: 이메일 주소 (클릭 시 클립보드에 복사)
 * - phone: 전화번호 (빈 문자열이면 표시되지 않음)
 * - github: GitHub 프로필 URL (빈 문자열이면 표시되지 않음)
 * - linkedin: LinkedIn 프로필 URL (빈 문자열이면 표시되지 않음)
 * - portfolio: 개인 웹사이트 URL (빈 문자열이면 표시되지 않음)
 */
export const headerData: HeaderData = {
    name: "하윤형",
    title: "Senior Android Developer",
    email: "glossy.bigbro@gmail.com",
    phone: "",
    github: "https://github.com/glossybigbro",
    linkedin: "https://www.linkedin.com/in/yunhyeong-ha",
    portfolio: "",
};