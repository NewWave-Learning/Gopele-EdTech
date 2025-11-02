import svgPaths from "../../imports/svg-rtrc0xe1hb";
import imgLessonCover from "figma:asset/c27129e7e83db334f52d648439e03067aee2ebbd.png";
import { Button } from "./Button";

export function LessonCardFullWidth({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Lesson Card - Full Width">
      <div className="absolute h-[309px] left-[784px] rounded-[8px] top-[16px] w-[320px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute h-[155.72%] left-0 max-w-none top-[-27.86%] w-full" src={imgLessonCover} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[38px] top-[257px]" data-name="Buttons">
        <Button size="Small" type="Secondary" state="Standard" className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[218px] px-[12px] py-[7px] rounded-[8px] top-[257px] w-[168px]" />
        <Button className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[38px] px-[12px] py-[7px] rounded-[8px] top-[257px] w-[168px]" />
      </div>
      <div className="absolute contents leading-[0] left-[38px] not-italic text-white top-[64px]" data-name="Lesson Details">
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[82px] justify-center left-[38px] text-[16px] top-[174px] translate-y-[-50%] w-[582.576px]">
          <p className="leading-[26px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center left-[38px] text-[40px] top-[101px] translate-y-[-50%] w-[609px]">
          <p className="leading-[32px]">Composite Polygons</p>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[38px] top-[20px]" data-name="Subject Lesson Header">
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[2.5px] uppercase">
          <p className="leading-[32px] whitespace-pre">Geometry</p>
        </div>
        <div className="relative shrink-0 size-[6px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
          </svg>
        </div>
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[2.5px] uppercase">
          <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
        </div>
      </div>
    </div>
  );
}
