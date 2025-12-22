import Image from "next/image";
import { IntroduceData } from "@/types";
import { SectionWrapper } from "@/shared/ui/SectionWrapper";
import { SectionDivider } from "@/shared/ui/SectionDivider";

interface IntroduceSectionProps {
    data: IntroduceData;
}

export function IntroduceSection({ data }: IntroduceSectionProps) {
    return (
        <SectionWrapper>
            <div className="text-3xl sm:text-4xl mb-2 font-bold">
                {data.title}
            </div>
            <div className="mb-4"><SectionDivider variant="title" /></div>

            <div className="block text-lg leading-relaxed text-foreground">

                <div className="hidden md:block md:float-left md:mr-8 md:mb-2 relative w-[280px] lg:w-[300px] aspect-[3/4] rounded-3xl profile-image-container overflow-hidden">
                    <Image
                        src={data.profileImage}
                        alt="Profile"
                        fill
                        priority
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=="
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>

                <div className="space-y-6">
                    {data.content.map((paragraph, index) => (
                        <div key={index}>
                            {index === data.content.length - 1 ? (
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