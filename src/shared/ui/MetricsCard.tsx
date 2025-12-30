"use client";

import { Icon } from "@/shared/ui/Icon";
import { useCountUp } from "@/shared/hooks/useCountUp";
import { useIntersectionObserver } from "@/shared/hooks/useIntersectionObserver";

export interface MetricsCardProps {
    label: string;
    value: number;
    suffix?: string;
    icon?: string;
}

/**
 * 메트릭 카드 컴포넌트
 * 
 * 숫자가 0에서 목표값까지 카운트업되는 애니메이션을 표시합니다.
 * 화면에 보일 때 자동으로 애니메이션이 시작됩니다.
 * 
 * @example
 * <MetricsCard label="앱 다운로드" value={8000000} suffix="+" icon="download" />
 */
export function MetricsCard({ label, value, suffix = "", icon }: MetricsCardProps) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>(0.1);
    const count = useCountUp(value, 2000, isVisible);

    // 숫자 포맷팅 (1,000,000 형식)
    const formatNumber = (num: number): string => {
        return num.toLocaleString();
    };

    return (
        <div ref={ref} className="metrics-card">
            {icon && (
                <div className="metrics-card-icon">
                    <Icon name={icon as any} size={24} />
                </div>
            )}
            <div className="metrics-card-content">
                <div className="metrics-card-value">
                    {formatNumber(count)}{suffix}
                </div>
                <div className="metrics-card-label">{label}</div>
            </div>
        </div>
    );
}
