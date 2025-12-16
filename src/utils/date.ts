/**
 * 날짜 문자열을 Date 객체로 파싱합니다.
 * @param dateStr - "YYYY.MM" 형식의 날짜 문자열
 * @returns Date 객체
 */
export function parseDate(dateStr: string): Date {
    if (!dateStr) return new Date();
    const [year, month] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, 1);
}

/**
 * 두 날짜 사이의 개월 수를 계산합니다.
 * @param start - 시작 날짜
 * @param end - 종료 날짜
 * @returns 개월 수 (시작 월 포함)
 */
export function calculateMonthsBetween(start: Date, end: Date): number {
    const months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
    return months + 1; // 시작 월 포함
}

/**
 * 개월 수를 "N년 M개월" 형식의 문자열로 변환합니다.
 * @param totalMonths - 총 개월 수
 * @param language - 언어 설정 ('ko' | 'en'), 기본값은 'ko'
 * @returns 포맷된 기간 문자열
 */
export function formatDuration(totalMonths: number, language: 'ko' | 'en' = 'ko'): string {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0 && months === 0) {
        return language === 'ko' ? "신입" : "Entry Level";
    }

    if (language === 'ko') {
        if (years > 0) {
            return months > 0 ? `${years}년 ${months}개월` : `${years}년`;
        }
        return `${months}개월`;
    } else {
        // English
        const yearText = years === 1 ? 'year' : 'years';
        const monthText = months === 1 ? 'month' : 'months';

        if (years > 0) {
            return months > 0 ? `${years} ${yearText} ${months} ${monthText}` : `${years} ${yearText}`;
        }
        return `${months} ${monthText}`;
    }
}
