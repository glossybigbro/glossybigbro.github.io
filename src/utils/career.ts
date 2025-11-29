import { parseDate, calculateMonthsBetween, formatDuration } from "./date";

interface ExperiencePeriod {
    period: string;
}

/**
 * 경력 데이터에서 총 경력 기간을 계산합니다.
 * 겹치는 기간은 한 번만 계산됩니다.
 * 
 * @param data - 경력 데이터 배열
 * @returns "N년 M개월" 형식의 총 경력 문자열
 */
export function calculateTotalCareer<T extends ExperiencePeriod>(data: T[]): string {
    const periods = data.map((item) => {
        const [startStr, endStr] = item.period.split(/~|-/).map((s) => s.trim());
        return {
            start: parseDate(startStr),
            end: endStr === "현재" || endStr === "Present" ? new Date() : parseDate(endStr),
        };
    });

    // 시작 날짜 기준으로 정렬
    periods.sort((a, b) => a.start.getTime() - b.start.getTime());

    // 겹치는 기간 병합
    const mergedPeriods: { start: Date; end: Date }[] = [];
    for (const period of periods) {
        if (mergedPeriods.length === 0) {
            mergedPeriods.push(period);
        } else {
            const lastPeriod = mergedPeriods[mergedPeriods.length - 1];
            if (period.start < lastPeriod.end) {
                // 겹치는 경우 종료일을 더 늦은 날짜로 업데이트
                lastPeriod.end = new Date(Math.max(lastPeriod.end.getTime(), period.end.getTime()));
            } else {
                mergedPeriods.push(period);
            }
        }
    }

    // 총 개월 수 계산
    let totalMonths = 0;
    for (const period of mergedPeriods) {
        totalMonths += calculateMonthsBetween(period.start, period.end);
    }

    return formatDuration(totalMonths);
}
