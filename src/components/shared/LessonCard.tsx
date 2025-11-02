import svgPaths from "../../imports/svg-rtrc0xe1hb";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";
import { Button } from "./Button";

export function LessonCard({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Lesson Card">
      <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
            <p className="leading-[32px] whitespace-pre">Geometry</p>
          </div>
          <div className="relative shrink-0 size-[6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
            <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
            <p className="leading-[32px]">Composite Polygons </p>
          </div>
          <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
        </div>
        <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
          <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
          <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
        </div>
      </div>
      <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}
