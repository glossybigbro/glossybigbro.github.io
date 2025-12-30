import { useEffect, useState, useRef } from "react";

/**
 * 숫자 카운트업 애니메이션 훅
 * 
 * @param end - 목표 숫자
 * @param duration - 애니메이션 지속 시간 (ms)
 * @param start - 시작 여부
 * @returns 현재 카운트 값
 * 
 * @example
 * const count = useCountUp(1000000, 2000, true);
 */
export function useCountUp(end: number, duration: number = 2000, start: boolean = false): number {
    const [count, setCount] = useState(0);
    const frameRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        const animate = (currentTime: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currentTime;
            }

            const elapsed = currentTime - startTimeRef.current;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutCubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCount(Math.floor(end * easeProgress));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current !== undefined) {
                cancelAnimationFrame(frameRef.current);
            }
            startTimeRef.current = undefined;
        };
    }, [end, duration, start]);

    return count;
}
