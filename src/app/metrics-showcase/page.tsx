import "@/styles/components/metrics-styles.css";
import { MetricsDashboard } from "@/shared/ui/MetricsDashboard";
import type { MetricItem } from "@/schemas";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Metrics Design Showcase | 하윤형",
    description: "다양한 스타일의 메트릭 카드 디자인 쇼케이스",
};

const sampleMetrics: MetricItem[] = [
    {
        label: "앱 다운로드",
        value: 8000000,
        suffix: "+",
        type: "counter",
    },
    {
        label: "월간 활성 사용자",
        value: 1300000,
        suffix: "+",
        type: "counter",
    },
    {
        label: "앱 안정성",
        value: 99.9,
        suffix: "%",
        type: "progress",
    },
];

export default function StylesPage() {
    return (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Metrics Design Showcase</h1>
                    <p className="text-muted-foreground">
                        다양한 스타일의 메트릭 카드 디자인을 확인하세요
                    </p>
                </div>

                {/* Style 1: Gradient Border + Glow */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 1: Gradient Border + Glow</h2>
                        <p className="text-sm text-muted-foreground">
                            그라데이션 테두리와 글로우 효과로 화려한 느낌
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-gradient-border">
                                <div className="relative z-10">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 2: Glassmorphism */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 2: Glassmorphism</h2>
                        <p className="text-sm text-muted-foreground">
                            유리 같은 투명한 효과로 모던한 느낌
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-glass">
                                <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 3: Gradient Background + Shine */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 3: Gradient Background + Shine</h2>
                        <p className="text-sm text-muted-foreground">
                            그라데이션 배경과 빛나는 효과로 역동적인 느낌
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-gradient-bg">
                                <div className="relative z-10 text-white">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-90 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 4: Neon Glow */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 4: Neon Glow</h2>
                        <p className="text-sm text-muted-foreground">
                            네온 사인 효과로 사이버펑크 느낌
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-neon">
                                <div className="metrics-card-value-neon">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="metrics-card-label-neon">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 5: 3D Card */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 5: 3D Card</h2>
                        <p className="text-sm text-muted-foreground">
                            입체적인 그림자로 3D 효과 (호버 시 들어올려짐)
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-3d">
                                <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 6: Holographic */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 6: Holographic</h2>
                        <p className="text-sm text-muted-foreground">
                            홀로그램 효과로 미래지향적인 느낌
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-holographic">
                                <div className="relative z-10 text-white">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-90 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 7: Minimalist Elegant */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 7: Minimalist Elegant</h2>
                        <p className="text-sm text-muted-foreground">
                            심플하고 우아한 미니멀 디자인 (호버 시 슬라이드)
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-minimalist">
                                <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 8: Aurora Gradient */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 8: Aurora Gradient</h2>
                        <p className="text-sm text-muted-foreground">
                            오로라 같은 부드러운 그라데이션 효과
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-aurora">
                                <div className="relative z-10 text-gray-800">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-80 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 9: Retro Terminal */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 9: Retro Terminal</h2>
                        <p className="text-sm text-muted-foreground">
                            레트로 터미널 스타일 (깜빡이는 커서 효과)
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-terminal relative">
                                <div className="metrics-card-value-terminal">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="metrics-card-label-terminal">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 10: Soft Neumorphism */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 10: Soft Neumorphism</h2>
                        <p className="text-sm text-muted-foreground">
                            부드러운 뉴모피즘 효과 (호버 시 눌림 효과)
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-neumorphism">
                                <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 11: Particle Effect */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 11: Particle Effect</h2>
                        <p className="text-sm text-muted-foreground">
                            떠다니는 파티클 효과로 우주 느낌
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-particle">
                                <div className="relative z-10 text-white">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-90 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 12: Bento Grid (Dribbble Trend) */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 12: Bento Grid 🔥</h2>
                        <p className="text-sm text-muted-foreground">
                            Dribbble 트렌드 - 부드러운 그라데이션과 입체감 (호버 시 상승)
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-bento">
                                <div className="text-3xl font-bold text-gray-800">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="text-sm text-gray-600 mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 13: Frosted Glass Premium */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 13: Frosted Glass Premium 🔥</h2>
                        <p className="text-sm text-muted-foreground">
                            프리미엄 유리 효과 + 빛나는 애니메이션
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-frosted">
                                <div className="relative z-10">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 14: Morphing Gradient */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 14: Morphing Gradient 🔥</h2>
                        <p className="text-sm text-muted-foreground">
                            CodePen 트렌드 - 변화하는 그라데이션 배경
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-morphing">
                                <div className="relative z-10 text-white">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-90 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 15: Isometric 3D */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 15: Isometric 3D 🔥</h2>
                        <p className="text-sm text-muted-foreground">
                            Awwwards 트렌드 - 아이소메트릭 3D 효과
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-isometric">
                                <div className="relative z-10 text-white">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-90 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 16: Animated Border Glow */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 16: Animated Border Glow 🔥</h2>
                        <p className="text-sm text-muted-foreground">
                            회전하는 무지개 테두리 효과
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-border-glow">
                                <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Style 17: Liquid Blob */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Style 17: Liquid Blob 🔥</h2>
                        <p className="text-sm text-muted-foreground">
                            액체처럼 움직이는 블롭 효과
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {sampleMetrics.map((metric, idx) => (
                            <div key={idx} className="metrics-card-liquid">
                                <div className="relative z-10 text-white">
                                    <div className="text-3xl font-bold">{metric.value.toLocaleString()}{metric.suffix}</div>
                                    <div className="text-sm opacity-90 mt-1">{metric.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Current Style (Original) */}
                <section className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold">Current Style (Original)</h2>
                        <p className="text-sm text-muted-foreground">
                            현재 사용 중인 기본 스타일
                        </p>
                    </div>
                    <MetricsDashboard metrics={sampleMetrics} />
                </section>
            </div>
        </div>
    );
}
