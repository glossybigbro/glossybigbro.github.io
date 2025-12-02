import { THEME_TRANSITION_CONFIG } from "@/constants/ui";

/**
 * 테마 전환 애니메이션 유틸리티
 * 
 * View Transitions API를 사용하여 랜덤 위치에서 원형으로 퍼져나가는
 * 부드러운 테마 전환 효과를 제공합니다.
 * 
 * **기술 스택:**
 * - View Transitions API (Chrome 111+, Safari 18+)
 * - Graceful degradation (미지원 브라우저는 즉시 전환)
 * 
 * **애니메이션 설정:**
 * - 지속 시간: 500ms
 * - 이징: ease-in-out
 * - 시작 위치: 랜덤 (화면 내 임의의 점)
 * 
 * @example
 * ```tsx
 * const handleClick = () => {
 *   transitionTheme(() => setTheme('dark'));
 * };
 * ```
 */

/**
 * View Transitions API를 사용한 테마 전환
 * 
 * @param callback - 테마 변경 함수 (예: setTheme('dark'))
 */
export function transitionTheme(callback: () => void): void {
    // View Transitions API 지원 확인
    if (!(document as any).startViewTransition) {
        // 미지원 브라우저는 즉시 전환
        callback();
        return;
    }

    // 랜덤 위치에서 애니메이션 시작
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const x = Math.random() * viewportWidth;
    const y = Math.random() * viewportHeight;

    // 화면 끝까지의 최대 거리 계산 (원형 애니메이션 반지름)
    const endRadius = Math.hypot(
        Math.max(x, viewportWidth - x),
        Math.max(y, viewportHeight - y)
    );

    // CSS transition 비활성화를 위한 클래스 추가
    document.body.classList.add('view-transitioning');

    // View Transition 시작
    const transition = (document as any).startViewTransition(callback);

    // 애니메이션 준비 완료 후 실행
    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        document.documentElement.animate(
            { clipPath },
            {
                duration: THEME_TRANSITION_CONFIG.DURATION,
                easing: THEME_TRANSITION_CONFIG.EASING,
                pseudoElement: "::view-transition-new(root)",
            }
        );
    });

    // 애니메이션 완료 후 클래스 제거
    transition.finished.finally(() => {
        document.body.classList.remove('view-transitioning');
    });
}
