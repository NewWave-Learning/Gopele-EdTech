import svgPaths from "./svg-9m5clqwgu7";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";

function CardCopy() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[160px] items-start left-0 not-italic text-white top-[-10px] w-[329px]" data-name="Card Copy">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[25px] w-[328px]">
        <p className="leading-[32px]">{`Composite Polygons `}</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
    </div>
  );
}

function LessonDetails() {
  return (
    <div className="absolute h-[150px] left-[15px] top-[273px] w-[329px]" data-name="Lesson Details">
      <CardCopy />
    </div>
  );
}

function SolidMediaPlay() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Solid/Media/Play">
          <path d={svgPaths.p2c0e5d80} fill="var(--fill-0, #232323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidMediaPlay />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
    </div>
  );
}

function SolidStatusBookmark() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Status/Bookmark">
          <path d={svgPaths.p88e6270} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidStatusBookmark />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Save</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute bottom-[19px] content-stretch flex gap-[18px] items-center left-[15px] w-[328px]" data-name="Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function LessonCardWithoutHeader() {
  return (
    <div className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" data-name="Lesson Card - Without header">
      <LessonDetails />
      <Buttons />
      <div className="absolute h-[248px] left-0 top-0 w-[358px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#c4c4c4] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}

function CardGroup() {
  return (
    <div className="absolute content-stretch flex gap-[23px] items-start left-[2px] top-[84px] w-[1120px]" data-name="Card Group">
      {[...Array(2).keys()].map((_, i) => (
        <LessonCardWithoutHeader key={i} />
      ))}
    </div>
  );
}

export default function RecommendTopics() {
  return (
    <div className="relative size-full" data-name="Recommend Topics">
      <CardGroup />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-0 not-italic text-[32px] text-black top-[37px] translate-y-[-50%] w-[484px]">
        <ol className="list-decimal" start="1">
          <li className="ms-[48px]">
            <span className="leading-[42px]">Space</span>
          </li>
        </ol>
      </div>
    </div>
  );
}