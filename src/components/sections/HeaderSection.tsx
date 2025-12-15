"use client";

import { useState } from "react";
import { HeaderData } from "@/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLink } from "@/components/ui/SocialLink";
import { Icon } from "@/components/ui/Icon";
import { LINK_STYLES, FOCUS_STYLES, TEXT_COLORS } from "@/constants/styles";
import { ANIMATION_DURATION } from "@/constants";
import { cn } from "@/lib/utils";

interface HeaderSectionProps {
    data: HeaderData;
}

export function HeaderSection({ data }: HeaderSectionProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(data.email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), ANIMATION_DURATION.TOAST);
    };

    return (
        <SectionWrapper>
            <div className="flex flex-row justify-between items-end gap-4 sm:gap-8">
                <div className="flex-shrink-0 flex flex-col gap-1">
                    {data.name && (
                        <div className="text-2xl sm:text-2xl font-bold text-foreground whitespace-nowrap">
                            {data.name}
                        </div>
                    )}
                    {data.title && (
                        <div className="text-muted-foreground text-sm sm:text-xl font-normal italic whitespace-nowrap">
                            {data.title}
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-end gap-1 sm:gap-2 text-sm sm:text-lg ml-auto flex-shrink-0">
                    <div className="flex items-center gap-2 sm:gap-3 justify-end">
                        <div className="flex gap-2 sm:gap-4 text-foreground">
                            <SocialLink type="github" href={data.github} />
                            <SocialLink type="linkedin" href={data.linkedin} />
                            <SocialLink type="portfolio" href={data.portfolio} />
                        </div>
                        <div className="h-5 sm:h-6 w-px bg-muted-foreground/20" />
                        <div className="flex gap-2 sm:gap-3 text-foreground">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        {data.email && (
                            <button
                                onClick={handleEmailClick}
                                className={cn(LINK_STYLES.BASE, FOCUS_STYLES.BASE, "font-bold relative group")}
                                aria-label="Copy email address"
                            >
                                {isCopied ? (
                                    <span className={cn(TEXT_COLORS.SUCCESS, "animate-pulse text-xs sm:text-base whitespace-nowrap")}>
                                        Copied! ✅
                                    </span>
                                ) : (
                                    <>
                                        <span className="hidden sm:inline">
                                            {data.email}
                                        </span>
                                        <div className="flex items-center gap-1 sm:hidden text-foreground">
                                            <Icon name="email" size={18} />
                                            <span className="text-sm underline decoration-dotted underline-offset-4">Email Me</span>
                                        </div>
                                    </>
                                )}
                            </button>
                        )}

                        {data.phone && (
                            <a
                                href={`tel:${data.phone}`}
                                className="hover:text-accent transition-colors text-sm sm:text-sm text-muted-foreground"
                            >
                                {data.phone}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}