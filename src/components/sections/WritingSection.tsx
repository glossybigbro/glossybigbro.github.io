"use client";

import { ArticleItem } from "@/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tag } from "@/components/ui/Tag";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

interface WritingSectionProps {
    data: ArticleItem[];
}

export function WritingSection({ data }: WritingSectionProps) {
    const isMobile = useIsMobile();

    if (!data || data.length === 0) {
        return null;
    }

    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 sm:flex sm:items-end sm:gap-2 font-bold">
                <div>Writing. </div>
            </div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="mt-4 space-y-4">
                {data.map((article, index) => (
                    <a
                        key={article.href + index}
                        href={article.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "block p-4 border border-border rounded-lg cursor-pointer transition-all duration-200",
                            // PC에서만 hover 효과 적용
                            !isMobile && "group hover:shadow-md hover:border-primary/50 hover:-translate-y-0.5"
                        )}
                    >
                        <div className={cn(
                            "text-xl font-bold mb-2 transition-colors",
                            !isMobile && "group-hover:text-primary"
                        )}>
                            {article.text}
                        </div>
                        {article.summary && (
                            <p className="text-muted-foreground mb-2 leading-relaxed">
                                {article.summary}
                            </p>
                        )}
                        {article.keywords && (
                            <div className="flex gap-2 flex-wrap">
                                {article.keywords.map((keyword) => (
                                    <Tag key={keyword}>{keyword}</Tag>
                                ))}
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </SectionWrapper>
    );
}
