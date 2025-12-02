import { ArticleItem } from "@/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tag } from "@/components/ui/Tag";

interface WritingSectionProps {
    data: ArticleItem[];
}

export function WritingSection({ data }: WritingSectionProps) {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 sm:flex sm:items-end sm:gap-2 font-bold">
                <div>Writing. </div>
                {/* <div className="text-sm font-normal text-muted-foreground pb-1">
                    (나의 가치관인 <strong>실천</strong>, <strong>꾸준함</strong>,{" "}
                    <strong>습관</strong>에 대해 글로 표현)
                </div> */}
            </div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="mt-4 space-y-2">
                {data.map((article, index) => (
                    <div key={article.href + index} className="mb-6">
                        <div className="text-xl font-bold mb-2">
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
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
