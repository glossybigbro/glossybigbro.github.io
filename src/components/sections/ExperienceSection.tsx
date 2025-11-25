import { useMemo } from "react";
import { experienceData } from "@/data/experience";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ExperienceSection() {
    const totalDuration = useMemo(() => {
        return calculateTotalCareer(experienceData);
    }, []);

    const renderDescription = (text: string) => {
        if (text.includes(":")) {
            const [label, ...rest] = text.split(":");
            const value = rest.join(":");
            return (
                <>
                    <span className="font-bold text-foreground">{label}:</span>
                    <span>{value}</span>
                </>
            );
        }
        return text;
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
                        className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index !== experienceData.length - 1
                            ? "border-b border-dotted border-gray-300 dark:border-gray-600 pb-6"
                            : ""
                            }`}
                    >
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="text-2xl sm:text-3xl font-medium mb-2">{item.period}</div>
                            <div className="flex gap-2 flex-wrap">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
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

function calculateTotalCareer(data: typeof experienceData) {
    const periods = data.map((item) => {
        const [startStr, endStr] = item.period.split(/~|-/).map((s) => s.trim());
        return {
            start: parseDate(startStr),
            end: endStr === "현재" || endStr === "Present" ? new Date() : parseDate(endStr),
        };
    });

    periods.sort((a, b) => a.start.getTime() - b.start.getTime());

    const mergedPeriods: { start: Date; end: Date }[] = [];
    for (const period of periods) {
        if (mergedPeriods.length === 0) {
            mergedPeriods.push(period);
        } else {
            const lastPeriod = mergedPeriods[mergedPeriods.length - 1];
            if (period.start < lastPeriod.end) {
                lastPeriod.end = new Date(Math.max(lastPeriod.end.getTime(), period.end.getTime()));
            } else {
                mergedPeriods.push(period);
            }
        }
    }

    let totalMonths = 0;
    for (const period of mergedPeriods) {
        const months =
            (period.end.getFullYear() - period.start.getFullYear()) * 12 +
            (period.end.getMonth() - period.start.getMonth());
        totalMonths += months + 1;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0 && months === 0) {
        return "신입";
    }
    if (years > 0) {
        return months > 0 ? `${years}년 ${months}개월` : `${years}년`;
    }
    return `${months}개월`;
}

function parseDate(dateStr: string) {
    if (!dateStr) return new Date();
    const [year, month] = dateStr.split(".").map(Number);
    return new Date(year, month - 1, 1);
}