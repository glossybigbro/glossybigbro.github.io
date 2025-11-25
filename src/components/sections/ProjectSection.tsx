import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ProjectSection() {
    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 font-bold">Project.</div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="space-y-6">
                {projectsData.map((project, index) => (
                    <div key={project.id} className={`flex flex-col md:flex-row gap-4 md:gap-8 ${index !== projectsData.length - 1 ? "border-b border-dotted border-gray-300 pb-6" : ""
                        }`}>
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="text-2xl sm:text-3xl font-medium mb-2">{project.period}</div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-2xl sm:text-3xl font-medium mb-4">{project.title}</div>

                            <div className="mb-4 text-lg">
                                <span className="font-bold">{project.role.split(":")[0]}:</span>
                                <span>{project.role.split(":")[1]}</span>
                            </div>

                            <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mb-6">
                                {project.description.map((desc, i) => {
                                    if (desc.includes(":")) {
                                        const [label, ...rest] = desc.split(":");
                                        const value = rest.join(":");

                                        return (
                                            <li key={i}>
                                                <span className="font-bold text-foreground">{label}:</span>
                                                <span>{value}</span>
                                            </li>
                                        );
                                    }

                                    return <li key={i}>{desc}</li>;
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
                                        <span key={tag} className="inline-flex items-center justify-center px-2.5 py-0.5 bg-black text-white dark:bg-white dark:text-black rounded text-xs font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}