"use client";

import { MetricItem } from "@/schemas";
import { MetricsCard } from "./MetricsCard";
import { ProgressBar } from "./ProgressBar";

export interface MetricsDashboardProps {
    metrics: MetricItem[];
}

/**
 * 메트릭 대시보드 컴포넌트
 * 
 * 여러 메트릭을 그리드로 배치하여 표시합니다.
 * 반응형 레이아웃을 지원합니다 (모바일: 1열, 태블릿: 2열, 데스크톱: 3열)
 * 
 * @example
 * <MetricsDashboard metrics={experienceItem.metrics} />
 */
export function MetricsDashboard({ metrics }: MetricsDashboardProps) {
    if (!metrics || metrics.length === 0) return null;

    return (
        <div className="metrics-dashboard">
            {metrics.map((metric, index) => (
                <div key={index}>
                    {metric.type === "counter" ? (
                        <MetricsCard
                            label={metric.label}
                            value={metric.value}
                            suffix={metric.suffix}
                            icon={metric.icon}
                        />
                    ) : (
                        <ProgressBar
                            label={metric.label}
                            value={metric.value}
                            suffix={metric.suffix}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
