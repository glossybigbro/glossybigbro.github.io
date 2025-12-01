import { useMemo } from "react";
import { experienceData } from "@/data/experience";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tag } from "@/components/ui/Tag";
import { calculateTotalCareer } from "@/utils/career";
import { parseDescription } from "@/utils/formatters";
import { DIVIDER_STYLES } from "@/constants/styles";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
    const totalDuration = useMemo(() => {
        return calculateTotalCareer(experienceData);
    }, []);

    const renderDescription = (text: string) => {
        const { label, value } = parseDescription(text);

        if (label) {
            return (
                <>
                    <span className="font-bold text-foreground">{label}:</span>{" "}
                    <span>{value}</span>
                </>
            );
        }
        return value;
    };

    return (
        <SectionWrapper>
            <div className="flex items-end gap-3 mb-2">
                <div className="text-3xl sm:text-4xl font-bold">Experience.</div>
                <div className="text-muted-foreground italic pb-1">
                    총 경력: {totalDuration}
                </div>
            </div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="space-y-6">
                {experienceData.map((item, index) => (
                    <div
                        key={item.id}
                        className={cn(
                            "flex flex-col md:flex-row gap-4 md:gap-8",
                            index !== experienceData.length - 1 && `${DIVIDER_STYLES.DOTTED} pb-6`
                        )}
                    >
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="text-2xl sm:text-3xl font-medium mb-2">{item.period}</div>
                            <div className="flex gap-2 flex-wrap">
                                {item.tags.map((tag) => (
                                    <Tag key={tag} className="px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </Tag>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-2xl sm:text-3xl font-medium mb-4">{item.role}</div>

                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                                {item.description.map((desc, index) => (
                                    <li key={index}>
                                        {typeof desc === "string" ? (
                                            renderDescription(desc)
                                        ) : (
                                            <>
                                                {renderDescription(desc.text)}
                                                {desc.subItems && (
                                                    <ul className="list-[circle] pl-5 mt-1 space-y-1">
                                                        {desc.subItems.map((sub, subIndex) => (
                                                            <li key={subIndex}>{sub}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}