import Link from "next/link";
import { ProjectItem } from "@/types";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tag } from "@/components/ui/Tag";
import { parseRole, parseDescription } from "@/utils/formatters";
import { DIVIDER_STYLES } from "@/constants/styles";
import { cn } from "@/lib/utils";

interface ProjectSectionProps {
    data: ProjectItem[];
}

export function ProjectSection({ data }: ProjectSectionProps) {
    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 font-bold">Project.</div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="flex flex-col gap-8 sm:gap-12">
                {data.map((project, index) => {
                    // 역할 파싱 (예: "주요 역할: 개발 리딩" -> label="주요 역할", value="개발 리딩")
                    const { label, value } = parseRole(project.role);

                    return (
                        <div
                            key={project.id}
                            className={cn(
                                "flex flex-col md:flex-row gap-4 md:gap-8",
                                // 마지막 항목이 아니면 점선 구분선 추가
                                index !== data.length - 1 && `${DIVIDER_STYLES.DOTTED} pb-6`
                            )}
                        >
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <div className="text-2xl sm:text-3xl font-medium mb-2">{project.period}</div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <div className="text-2xl sm:text-3xl font-medium mb-4">{project.title}</div>

                                <div className="mb-4 text-lg">
                                    <span className="font-bold">{label}:</span>
                                    <span>{value}</span>
                                </div>

                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mb-6">
                                    {project.description.map((desc, i) => {
                                        // 설명 텍스트 파싱 (Label: Value 형식 지원)
                                        const { label, value } = parseDescription(desc);

                                        return (
                                            <li key={i}>
                                                {label ? (
                                                    <>
                                                        <span className="font-bold text-foreground">{label}:</span>{" "}
                                                        <span>{value}</span>
                                                    </>
                                                ) : (
                                                    <span>{value}</span>
                                                )}
                                            </li>
                                        );
                                    })}

                                    {/* 관련 링크 렌더링 */}
                                    {project.links?.map((link, i) => (
                                        <li key={`link-${i}`} className="list-none -ml-5">
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                className="text-blue-500 hover:underline flex items-center gap-1"
                                            >
                                                • {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-2">
                                    <div className="font-bold text-lg">• Skill Keywords</div>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.tags.map((tag) => (
                                            <Tag key={tag}>{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}