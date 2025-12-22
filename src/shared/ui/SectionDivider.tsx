interface SectionDividerProps {
    variant?: "title" | "content";
    className?: string;
}

export function SectionDivider({ variant = "content", className = "" }: SectionDividerProps) {
    const styleClass = variant === "title"
        ? "border-foreground/80 border-[1.5px]"
        : "border-border/50 border-t";

    // [수정] py-4 -> py-1 (디바이더 자체의 위아래 뚱뚱한 여백 제거)
    return (
        <div className={`w-full py-1 ${className}`}>
            <hr className={`border-0 ${styleClass}`} />
        </div>
    );
}