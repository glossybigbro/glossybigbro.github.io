import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tag } from "@/components/ui/Tag";
import { parseRole, parseDescription } from "@/utils/formatters";
import { DIVIDER_STYLES } from "@/constants/styles";
import { cn } from "@/lib/utils";

export function ProjectSection() {
    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 font-bold">Project.</div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="space-y-6">
                {projectsData.map((project, index) => {
                    const { label: roleLabel, value: roleValue } = parseRole(project.role);

                    return (
                        <div
                            key={project.id}
                            className={cn(
                                "flex flex-col md:flex-row gap-4 md:gap-8",
                                index !== projectsData.length - 1 && `${DIVIDER_STYLES.DOTTED} pb-6`
                            )}
                        >
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <div className="text-2xl sm:text-3xl font-medium mb-2">{project.period}</div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <div className="text-2xl sm:text-3xl font-medium mb-4">{project.title}</div>

                                <div className="mb-4 text-lg">
                                    <span className="font-bold">{roleLabel}:</span>
                                    <span>{roleValue}</span>
                                </div>

                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mb-6">
                                    {project.description.map((desc, i) => {
                                        const { label, value } = parseDescription(desc);

                                        return (
                                            <li key={i}>
                                                {label ? (
                                                    <>
                                                        <span className="font-bold text-foreground">{label}:</span>
                                                        <span>{value}</span>
                                                    </>
                                                ) : (
                                                    <span>{value}</span>
                                                )}
                                            </li>
                                        );
                                    })}

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