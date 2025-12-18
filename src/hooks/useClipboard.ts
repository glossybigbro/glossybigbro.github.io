import { useState } from 'react';

interface UseClipboardReturn {
    isCopied: boolean;
    copyToClipboard: (text: string) => Promise<void>;
    reset: () => void;
}

/**
 * 클립보드 복사 기능을 제공하는 커스텀 훅
 * 
 * 최신 Clipboard API를 우선 사용하며, 지원하지 않는 환경(모바일 웹뷰 등)을 위해
 * document.execCommand를 사용하는 폴백 로직을 포함합니다.
 * 
 * @returns {UseClipboardReturn} 복사 상태, 복사 함수, 상태 초기화 함수
 */
export function useClipboard(): UseClipboardReturn {
    const [isCopied, setIsCopied] = useState(false);

    /**
     * 텍스트를 클립보드에 복사합니다.
     * 
     * @param text 복사할 텍스트
     */
    const copyToClipboard = async (text: string) => {
        try {
            // 1. 최신 Clipboard API 시도
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
        } catch (err) {
            // 2. 실패 시 폴백 (textarea 생성 후 execCommand 사용)
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;

                // 화면에 보이지 않게 설정
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);

                textArea.focus();
                textArea.select();

                // 복사 명령어 실행 (Deprecated 상태지만 호환성을 위해 사용)
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);

                if (successful) {
                    setIsCopied(true);
                } else {
                    console.error('Clipboard copy failed (Fallback)');
                }
            } catch (fallbackErr) {
                console.error('Critical error during clipboard copy:', fallbackErr);
            }
        }
    };

    /**
     * 복사 성공 상태(isCopied)를 초기화합니다.
     */
    const reset = () => setIsCopied(false);

    return { isCopied, copyToClipboard, reset };
}
