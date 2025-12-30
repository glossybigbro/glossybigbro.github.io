import { useEffect, useState, useRef, RefObject } from "react";

/**
 * Intersection Observer 훅
 * 
 * 요소가 화면에 보일 때 감지합니다.
 * 
 * @param threshold - 감지 임계값 (0.0 ~ 1.0)
 * @returns [ref, isIntersecting]
 * 
 * @example
 * const [ref, isVisible] = useIntersectionObserver(0.1);
 * return <div ref={ref}>{isVisible && "보임!"}</div>
 */
export function useIntersectionObserver<T extends HTMLElement>(
    threshold: number = 0.1
): [RefObject<T | null>, boolean] {
    const ref = useRef<T>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // 한 번만 트리거되도록 (애니메이션은 한 번만 실행)
                if (entry.isIntersecting && !isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, isIntersecting]);

    return [ref, isIntersecting];
}
