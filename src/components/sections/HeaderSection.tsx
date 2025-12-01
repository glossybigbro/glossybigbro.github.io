"use client";

import { useState } from "react";
import { headerData } from "@/data/header";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SocialLink } from "@/components/ui/SocialLink";
import { Icon } from "@/components/ui/Icon";
import { LINK_STYLES, FOCUS_STYLES, TEXT_COLORS } from "@/constants/styles";
import { ANIMATION_DURATION } from "@/constants";
import { cn } from "@/lib/utils";

export function HeaderSection() {
    const [isCopied, setIsCopied] = useState(false);

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(headerData.email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), ANIMATION_DURATION.TOAST);
    };

    return (
        <SectionWrapper>
            <div className="flex flex-row justify-between items-end gap-4 sm:gap-8">
                <div className="flex-shrink-0 flex flex-col gap-1">
                    {headerData.name && (
                        <div className="text-2xl sm:text-2xl font-bold text-foreground whitespace-nowrap">
                            {headerData.name}
                        </div>
                    )}
                    {headerData.title && (
                        <div className="text-muted-foreground text-sm sm:text-xl font-normal italic whitespace-nowrap">
                            {headerData.title}
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-end gap-1 sm:gap-2 text-sm sm:text-lg ml-auto flex-shrink-0">
                    <div className="flex items-center gap-2 justify-end">
                        <div className="flex gap-2 sm:gap-4 text-foreground">
                            <SocialLink type="github" href={headerData.github} />
                            <SocialLink type="linkedin" href={headerData.linkedin} />
                            <SocialLink type="portfolio" href={headerData.portfolio} />
                            <ThemeToggle />
                        </div>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        {headerData.email && (
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
                                            {headerData.email}
                                        </span>
                                        <div className="flex items-center gap-1 sm:hidden text-foreground">
                                            <Icon name="email" size={18} />
                                            <span className="text-sm underline decoration-dotted underline-offset-4">Email Me</span>
                                        </div>
                                    </>
                                )}
                            </button>
                        )}

                        {headerData.phone && (
                            <a
                                href={`tel:${headerData.phone}`}
                                className="hover:text-accent transition-colors text-sm sm:text-sm text-muted-foreground"
                            >
                                {headerData.phone}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}