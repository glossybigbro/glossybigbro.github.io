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
            // "현재" 또는 "Present"인 경우 현재 날짜로 설정
            end: endStr === "현재" || endStr === "Present" ? new Date() : parseDate(endStr),
        };
    });

    // 1. 시작 날짜 기준으로 오름차순 정렬
    periods.sort((a, b) => a.start.getTime() - b.start.getTime());

    // 2. 겹치는 기간 병합 (중복 계산 방지)
    const mergedPeriods: { start: Date; end: Date }[] = [];
    for (const period of periods) {
        if (mergedPeriods.length === 0) {
            mergedPeriods.push(period);
        } else {
            const lastPeriod = mergedPeriods[mergedPeriods.length - 1];

            // 현재 기간의 시작일이 이전 기간의 종료일보다 앞서면 겹치는 것으로 판단
            if (period.start < lastPeriod.end) {
                // 종료일을 두 기간 중 더 늦은 날짜로 업데이트 (기간 확장)
                lastPeriod.end = new Date(Math.max(lastPeriod.end.getTime(), period.end.getTime()));
            } else {
                // 겹치지 않으면 새로운 기간으로 추가
                mergedPeriods.push(period);
            }
        }
    }

    // 3. 병합된 기간들의 총 개월 수 계산
    let totalMonths = 0;
    for (const period of mergedPeriods) {
        totalMonths += calculateMonthsBetween(period.start, period.end);
    }

    // 4. "N년 M개월" 형식으로 변환하여 반환
    return formatDuration(totalMonths);
}
