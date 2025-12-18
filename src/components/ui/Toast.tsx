'use client';

import { useToastTimer } from '@/hooks/useToastTimer';

interface ToastProps {
    message: string;
    duration?: number;
    onClose: () => void;
}

export function Toast({ message, duration = 2000, onClose }: ToastProps) {
    const { isVisible, progress } = useToastTimer(duration, onClose);

    return (
        <div
            className={`
                fixed bottom-8 left-1/2 -translate-x-1/2 z-[var(--z-toast)]
                transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
                w-max max-w-[90vw] sm:max-w-md
                ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-[150%] opacity-0'}
            `}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
            <div className="bg-foreground text-background px-6 py-3 rounded-lg shadow-2xl w-full backdrop-blur-sm border border-background/10">
                <div className="flex items-center gap-3 font-medium">
                    <span className="text-emerald-500">✓</span>
                    <span>{message}</span>
                </div>
                {/* 프로그레스 바 */}
                <div className="mt-2.5 h-1 bg-background/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-background/80 rounded-full will-change-[width]"
                        style={{
                            width: `${progress}%`,
                            transition: 'width 10ms linear'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
