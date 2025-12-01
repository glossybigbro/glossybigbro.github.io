import { useState, useEffect } from "react";

/**
 * 모바일 디바이스 감지 훅
 * 
 * User Agent를 기반으로 현재 디바이스가 모바일인지 확인합니다.
 * 클라이언트 사이드에서만 실행되도록 useEffect를 사용합니다.
 * 
 * @returns {boolean} 모바일 디바이스 여부
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    return isMobile;
}
