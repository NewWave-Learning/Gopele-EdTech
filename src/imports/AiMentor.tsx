import svgPaths from "./svg-jitx3wq8lh";
import imgWalle from "figma:asset/5659bb0a661292d84ce5d5861c0faa55bc7dd773.png";
import imgProfile from "figma:asset/e12f534198175966d657f7407655f59cc0dcdccc.png";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";
import imgUnsplashDyHx6H3LMdY from "figma:asset/57a12861c7fbae08e612aa3579445788a979c8de.png";
import imgUnsplashXVptEZzgVfo from "figma:asset/d2939bee28d7846c5bf1ee96be695d3f120827fb.png";

function Button() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[163px] px-[12px] py-[7px] rounded-[8px] top-[238px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">See Recommedations</p>
    </div>
  );
}

function WalleIntro() {
  return (
    <div className="absolute contents left-[163px] top-[79px]" data-name="Walle Intro">
      <Button />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[21.64%_67.99%_69.59%_11.32%] justify-center leading-[0] not-italic text-[40px] text-nowrap text-white">
        <p className="leading-[32px] whitespace-pre">Meet, Wall-E ;)</p>
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] inset-[35.62%_58.33%_43.01%_11.46%] leading-[26px] not-italic text-[16px] text-white">{`Wall-E is your personal teacher to help you become better by evaluating your weak areas & revision suggestions. `}</p>
    </div>
  );
}

function MeetWallE() {
  return (
    <div className="absolute bg-[#1f60d8] h-[365px] left-0 overflow-clip rounded-[8px] top-[80px] w-[1440px]" data-name="Meet Wall-E">
      <div className="absolute h-[273px] left-[911px] top-[50px] w-[317px]" data-name="Walle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWalle} />
      </div>
      <WalleIntro />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Frame 2">
          <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p3bfb200} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="27.2021" id="Rectangle 1" width="28.9726" x="5.66272" y="5.20796" />
          <path d={svgPaths.p1e47b880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[78px] top-[19px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
        <p className="leading-[21.568px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function NavLinks() {
  return (
    <div className="absolute contents inset-[30.05%_14.44%_27.55%_58.47%]" data-name="Nav Links">
      <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_36.6%_32.85%_58.47%] rounded-[8.478px]" />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_36.82%_27.55%_58.69%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center">Home</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_26.96%_27.55%_69%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">Learn</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_14.44%_27.55%_78.64%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">AI Mentor</p>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <Logo2 />
      <div className="absolute inset-[15%_5.21%_15%_90.9%]" data-name="Profile">
        <img alt="" className="block max-w-none size-full" height="56" src={imgProfile} width="56" />
      </div>
      <NavLinks />
    </div>
  );
}

function SubjectLessonHeader() {
  return (
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
  );
}

function CardCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
        <p className="leading-[32px]">{`Composite Polygons `}</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
    </div>
  );
}

function SolidMediaPlay1() {
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

function Button1() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidMediaPlay1 />
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

function Button2() {
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
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
      <Button1 />
      <Button2 />
    </div>
  );
}

function LessonDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
      <SubjectLessonHeader />
      <CardCopy />
      <Buttons />
    </div>
  );
}

function LessonCard() {
  return (
    <div className="absolute bg-[#1f60d8] h-[543px] left-[162px] overflow-clip rounded-[8px] top-[1110px] w-[358px]" data-name="Lesson Card">
      <LessonDetails />
      <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}

function SubjectLessonHeader1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">Science</p>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">lesson 13 / 22</p>
      </div>
    </div>
  );
}

function CardCopy1() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
        <p className="leading-[32px]">{`Atoms & Charges`}</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">This course was written in collaboration with Danielle Scarano.</p>
    </div>
  );
}

function SolidMediaPlay2() {
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

function Button3() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidMediaPlay2 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
    </div>
  );
}

function SolidStatusBookmark1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Status/Bookmark">
          <path d={svgPaths.p88e6270} fill="var(--fill-0, #232323)" id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidStatusBookmark1 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Saved</p>
      </div>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
      <Button3 />
      <Button4 />
    </div>
  );
}

function LessonDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
      <SubjectLessonHeader1 />
      <CardCopy1 />
      <Buttons1 />
    </div>
  );
}

function LessonCard1() {
  return (
    <div className="absolute bg-[#1f60d8] h-[543px] left-[544px] overflow-clip rounded-[8px] top-[1110px] w-[358px]" data-name="Lesson Card">
      <LessonDetails1 />
      <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:DYHx6h3lMdY">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplashDyHx6H3LMdY} />
        </div>
      </div>
    </div>
  );
}

function SubjectLessonHeader2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">Physics</p>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">lesson 25 / 26</p>
      </div>
    </div>
  );
}

function CardCopy2() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
        <p className="leading-[32px]">Electro Magnetic Radiation</p>
      </div>
      <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">Learn the key ideas of computer science with this interactive course – no coding required!</p>
    </div>
  );
}

function SolidMediaPlay3() {
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

function Button5() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidMediaPlay3 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
    </div>
  );
}

function SolidStatusBookmark2() {
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

function Button6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidStatusBookmark2 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Save</p>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
      <Button5 />
      <Button6 />
    </div>
  );
}

function LessonDetails2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
      <SubjectLessonHeader2 />
      <CardCopy2 />
      <Buttons2 />
    </div>
  );
}

function LessonCard2() {
  return (
    <div className="absolute bg-[#1f60d8] h-[543px] left-[926px] overflow-clip rounded-[8px] top-[1110px] w-[358px]" data-name="Lesson Card">
      <LessonDetails2 />
      <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:xVptEZzgVfo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplashXVptEZzgVfo} />
        </div>
      </div>
    </div>
  );
}

function CardGroup() {
  return (
    <div className="absolute contents left-[162px] top-[1110px]" data-name="Card Group">
      <LessonCard />
      <LessonCard1 />
      <LessonCard2 />
    </div>
  );
}

function ArrowSliderLeft() {
  return (
    <div className="absolute left-[1153px] size-[49px] top-[1039px]" data-name="Arrow Slider Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="Arrow Slider Left">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p26ba13c0} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowSliderRight() {
  return (
    <div className="absolute left-[1235px] size-[49px] top-[1039px]" data-name="Arrow Slider Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="Arrow Slider Right">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p2f245500} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButtons() {
  return (
    <div className="absolute contents left-[1153px] top-[1039px]" data-name="Arrow Buttons">
      <ArrowSliderLeft />
      <ArrowSliderRight />
    </div>
  );
}

function RecommendTopics() {
  return (
    <div className="absolute contents left-[160px] top-[1026px]" data-name="Recommend Topics">
      <CardGroup />
      <ArrowButtons />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[160px] not-italic text-[32px] text-black top-[1063px] translate-y-[-50%] w-[484px]">
        <p className="leading-[42px]">Recommended Revision</p>
      </div>
    </div>
  );
}

function LessonDetails3() {
  return (
    <div className="absolute contents leading-[0] left-[40px] not-italic text-white top-[104px]" data-name="Lesson Details">
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[82px] justify-center left-[40px] text-[16px] top-[214px] translate-y-[-50%] w-[463px]">
        <p className="leading-[26px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center left-[40px] text-[40px] top-[141px] translate-y-[-50%] w-[484px]">
        <p className="leading-[32px]">Composite Polygons</p>
      </div>
    </div>
  );
}

function RepetionChain() {
  return (
    <div className="absolute h-[50.021px] left-[54px] top-[20px] w-[601px]" data-name="Repetion Chain">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 51">
        <g id="Repetion Chain">
          <line id="Line 1" stroke="var(--stroke-0, #F4D35E)" strokeWidth="5" x1="0.986737" x2="563.911" y1="24.377" y2="21.3906" />
          <g id="Group 10">
            <circle cx="26.0106" cy="25.0106" fill="var(--fill-0, #F4D35E)" id="Ellipse 3" r="25.0106" />
            <circle cx="117.84" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 4" r="25.0106" />
            <circle cx="209.67" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 5" r="25.0106" />
            <circle cx="301.5" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 6" r="25.0106" />
            <circle cx="393.33" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 7" r="25.0106" />
            <circle cx="485.16" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 8" r="25.0106" />
            <circle cx="576.989" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 9" r="25.0106" />
          </g>
          <g id="Solid/Media/Play">
            <path d={svgPaths.p18fbfe80} fill="var(--fill-0, #1F60D8)" id="Icon" />
          </g>
          <g id="bx:bxs-lock-alt">
            <path d={svgPaths.p1555e600} fill="var(--fill-0, #151A21)" id="Vector" />
          </g>
          <g id="bx:bxs-lock-alt_2">
            <path d={svgPaths.p26e6800} fill="var(--fill-0, #151A21)" id="Vector_2" />
          </g>
          <g id="bx:bxs-lock-alt_3">
            <path d={svgPaths.p3acd1870} fill="var(--fill-0, #151A21)" id="Vector_3" />
          </g>
          <g id="bx:bxs-lock-alt_4">
            <path d={svgPaths.pdd99d00} fill="var(--fill-0, #151A21)" id="Vector_4" />
          </g>
          <g id="bx:bxs-lock-alt_5">
            <path d={svgPaths.p20a48000} fill="var(--fill-0, #151A21)" id="Vector_5" />
          </g>
          <g id="bx:bx-check">
            <path d={svgPaths.pa4df470} fill="var(--fill-0, #232323)" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SolidMediaPlay6() {
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

function Button9() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidMediaPlay6 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
    </div>
  );
}

function SolidStatusBookmark4() {
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

function Button10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
      <SolidStatusBookmark4 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Save</p>
      </div>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[36px] top-[289px] w-[328px]" data-name="Buttons">
      <Button9 />
      <Button10 />
    </div>
  );
}

function SpacedRepetition() {
  return (
    <div className="absolute bg-[#1f60d8] h-[361px] left-[160px] overflow-clip rounded-[8px] top-[605px] w-[1120px]" data-name="Spaced Repetition">
      <LessonDetails3 />
      <RepetionChain />
      <Buttons4 />
      <div className="absolute h-[330px] left-[762px] rounded-[8px] top-[16px] w-[342px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute h-[155.72%] left-0 max-w-none top-[-27.86%] w-full" src={imgLessonsCover} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SpacedRepetition1() {
  return (
    <div className="absolute contents left-[160px] top-[525px]" data-name="Spaced Repetition">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[160px] not-italic text-[32px] text-black top-[562px] translate-y-[-50%] w-[484px]">
        <p className="leading-[42px]">Spaced Repetition</p>
      </div>
      <SpacedRepetition />
    </div>
  );
}

export default function AiMentor() {
  return (
    <div className="bg-white relative size-full" data-name="AI Mentor">
      <MeetWallE />
      <NavBar />
      <RecommendTopics />
      <SpacedRepetition1 />
    </div>
  );
}