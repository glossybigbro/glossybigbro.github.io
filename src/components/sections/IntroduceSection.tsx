import Image from "next/image";
import { introduceData } from "@/data/introduce";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function IntroduceSection() {
    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 font-bold">
                {introduceData.title}
            </div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="block text-lg leading-relaxed text-foreground">

                <div className="hidden md:block md:float-left md:mr-8 md:mb-2 relative w-[280px] lg:w-[300px] aspect-[3/4] rounded-3xl shadow-lg overflow-hidden">
                    <Image
                        src={introduceData.profileImage}
                        alt="Profile"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>

                <div className="space-y-6">
                    {introduceData.content.map((paragraph, index) => (
                        <div key={index}>
                            {index === introduceData.content.length - 1 ? (
                                <span className="font-medium text-foreground">
                                    {paragraph}
                                </span>
                            ) : (
                                paragraph
                            )}
                        </div>
                    ))}
                </div>

                <div className="clear-both"></div>
            </div>
        </SectionWrapper>
    );
}