import { useState, useEffect } from "react";

/**
 * 모바일/터치 디바이스 감지 훅
 * 
 * CSS Media Query를 사용하여 실제 하드웨어 기능을 감지합니다.
 * User Agent보다 정확하며, 다음을 올바르게 감지합니다:
 * - iPad 데스크톱 모드
 * - 삼성 DeX 모드
 * - 마우스가 연결된 태블릿
 * 
 * **감지 기준:**
 * - `hover: hover` 미지원 = 터치 기기 (모바일/태블릿)
 * - `pointer: coarse` = 터치 포인터 (손가락)
 * 
 * **데스크톱 창 크기 축소 시:**
 * - 마우스가 있으므로 `isMobile = false` 유지
 * - 호버 효과 정상 작동
 * 
 * @returns {boolean} 터치 디바이스 여부 (호버 불가능한 기기)
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // hover 기능이 없으면 터치 기기
            const hasNoHover = !window.matchMedia('(hover: hover)').matches;
            // 포인터가 정밀하지 않으면 터치 기기
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

            // 둘 중 하나라도 해당하면 모바일/터치 기기
            setIsMobile(hasNoHover || hasCoarsePointer);
        };

        checkMobile();

        // 창 크기 변경 시에도 재확인 (마우스 연결/해제 등)
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}
