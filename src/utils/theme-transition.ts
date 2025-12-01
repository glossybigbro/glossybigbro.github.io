/**
 * 테마 전환 애니메이션 유틸리티
 * 
 * View Transitions API를 사용하여 클릭 위치에서 원형으로 퍼져나가는
 * 부드러운 테마 전환 효과를 제공합니다.
 * 
 * @example
 * ```tsx
 * const handleClick = (e: React.MouseEvent) => {
 *   transitionTheme(e, () => setTheme('dark'));
 * };
 * ```
 */

/**
 * View Transitions API를 사용한 테마 전환
 * 
 * @param event - 클릭 이벤트 (애니메이션 시작 위치 계산용)
 * @param callback - 테마 변경 함수
 */
export function transitionTheme(
    event: React.MouseEvent,
    callback: () => void
): void {
    // View Transitions API 지원 확인
    if (!(document as any).startViewTransition) {
        callback();
        return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // 화면 끝까지의 최대 거리 계산 (원형 애니메이션 반지름)
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    );

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
                duration: 500,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    });
}
