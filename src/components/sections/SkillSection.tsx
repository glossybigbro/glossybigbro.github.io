import { skillsData } from "@/data/skills";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function SkillSection() {
    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 font-bold">Skill.</div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            {skillsData.map((category, index) => (
                <div
                    key={category.title}
                    // ▼▼▼ 수정된 부분 ▼▼▼
                    // 1. sm:border-none 삭제 (모든 화면에서 선 보이게)
                    // 2. border-gray-300 및 여백(pb-6 mb-6) 추가
                    className={`flex flex-col sm:flex-row gap-4 sm:gap-12 ${index !== skillsData.length - 1
                        ? "border-b border-dotted border-gray-300 dark:border-gray-600 pb-6 mb-6"
                        : ""
                        }`}
                >
                    <div className="w-48 flex-shrink-0">
                        <div className="text-2xl font-semibold">{category.title}</div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-wrap gap-2 text-lg leading-relaxed">
                            {category.skills.map((skill, i) => (
                                <span key={i}>
                                    {skill}
                                    {/* 마지막 아이템이 아니면 쉼표 추가 */}
                                    {i !== category.skills.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </SectionWrapper>
    );
}