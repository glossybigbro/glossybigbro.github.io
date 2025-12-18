import { useState, useEffect } from 'react';

interface UseToastTimerReturn {
    isVisible: boolean;
    progress: number;
}

/**
 * 토스트 메시지의 애니메이션 및 수명 주기를 관리하는 커스텀 훅
 * 
 * @param duration 토스트 표시 시간 (ms)
 * @param onClose 토스트가 완전히 사라진 후 호출될 콜백
 * @returns {UseToastTimerReturn} 표시 여부(isVisible), 진행률(progress)
 */
export function useToastTimer(duration: number, onClose: () => void): UseToastTimerReturn {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        // 1. 등장 애니메이션: 렌더링 직후 부드럽게 나타나도록 requestAnimationFrame 사용
        const entryTimer = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        // 2. 진행률(Progress Bar) 애니메이션
        const startTime = Date.now();
        const progressInterval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            // 시간이 지남에 따라 100 -> 0으로 감소
            const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
            setProgress(remaining);
        }, 10); // 10ms 마다 업데이트 (부드러운 애니메이션)

        // 3. 퇴장 및 종료 시퀀스
        const exitTimer = setTimeout(() => {
            // 표시 시간이 끝나면 퇴장 애니메이션 시작 (isVisible = false)
            setIsVisible(false);

            // 퇴장 애니메이션 시간(500ms)만큼 기다린 후 onClose 호출 (컴포넌트 언마운트)
            setTimeout(onClose, 500);
        }, duration + 100); // 프로그레스바가 확실히 0이 된 후 사라지도록 100ms 버퍼 추가

        // 클린업: 컴포넌트가 중간에 사라지면 타이머 모두 해제
        return () => {
            cancelAnimationFrame(entryTimer);
            clearInterval(progressInterval);
            clearTimeout(exitTimer);
        };
    }, [duration, onClose]);

    return { isVisible, progress };
}
