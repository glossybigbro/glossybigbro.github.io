import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
}
export function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
    return (
        // 수정 포인트: mt-12 sm:mt-24 -> mt-8 sm:mt-16 (섹션 간 간격 축소)
        <section className={`mt-8 sm:mt-16 ${className}`}>
            {children}
        </section>
    );
}