"use client";

import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/shared/hooks/useIntersectionObserver";

export interface ProgressBarProps {
    label: string;
    value: number;
    suffix?: string;
}

/**
 * 프로그레스 바 컴포넌트
 * 
 * 0%에서 목표%까지 카운트업되는 애니메이션을 표시합니다.
 * MetricsCard와 동일한 카드 레이아웃을 사용합니다.
 * 
 * @example
 * <ProgressBar label="앱 안정성" value={99.9} suffix="%" />
 */
export function ProgressBar({ label, value, suffix = "%" }: ProgressBarProps) {
    const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>(0.1);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 1500;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progressValue = Math.min((elapsed / duration) * value, value);

            setProgress(progressValue);

            if (progressValue < value) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, value]);

    // 숫자 포맷팅
    const formatNumber = (num: number): string => {
        return num.toFixed(value % 1 === 0 ? 0 : 1);
    };

    return (
        <div ref={ref} className="metrics-card">
            <div className="metrics-card-content">
                <div className="metrics-card-value">
                    {formatNumber(progress)}{suffix}
                </div>
                <div className="metrics-card-label">{label}</div>
            </div>
        </div>
    );
}
