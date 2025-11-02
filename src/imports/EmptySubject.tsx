import svgPaths from "./svg-snmmbibanz";
import imgLessonCover from "figma:asset/c27129e7e83db334f52d648439e03067aee2ebbd.png";
import imgUnsplashLvyS3ELzIs from "figma:asset/499b67bcf3496dbfc4b48e9db79662f6dd875256.png";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";

/**
 * @figmaAssetKey bbd36c04b000773812c437060b8db1a95de640ef
 */
function SolidInterfaceEditAlt({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Interface/Edit-alt">
      <div className="absolute inset-[14.58%_17.71%_13.54%_13.54%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <g id="Icon">
            <path d={svgPaths.p1aa65f00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1eee8680} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="absolute h-[24px] left-[800px] top-[605px] w-[480px]" data-name="Progress Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 24">
        <g id="Progress Bar">
          <g id="Rectangle 2">
            <path d={svgPaths.p64be900} fill="white" fillOpacity="0.6" />
          </g>
          <rect fill="var(--fill-0, #FACE55)" height="24" id="Rectangle 1" rx="4" width="8" />
        </g>
      </svg>
    </div>
  );
}

function ProgressInfo() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[800px] top-[562px]" data-name="Progress Info">
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">Learning progress</p>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">0%</p>
      </div>
    </div>
  );
}

function SubjectProgress() {
  return (
    <div className="absolute contents left-[800px] top-[562px]" data-name="Subject Progress">
      <ProgressBar />
      <ProgressInfo />
    </div>
  );
}

function CoverProgress() {
  return (
    <div className="absolute contents left-[800px] top-[55px]" data-name="Cover & Progress">
      <SubjectProgress />
      <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="Lesson Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonCover} />
        </div>
      </div>
      <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="unsplash:Lvy_S3ELzIs">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-full left-[-13.23%] max-w-none top-[0.42%] w-[133.33%]" src={imgUnsplashLvyS3ELzIs} />
        </div>
      </div>
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
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[160px] px-[12px] py-[7px] rounded-[8px] top-[581px]" data-name="Button">
      <SolidMediaPlay />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Try Subject</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[346px] px-[12px] py-[7px] rounded-[8px] top-[581px] w-[172px]" data-name="Button">
      <SolidInterfaceEditAlt className="relative shrink-0 size-[24px]" />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Edit Subject</p>
    </div>
  );
}

function SubjectInfo() {
  return (
    <div className="absolute contents left-[160px] top-[139px]" data-name="Subject Info">
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[160px] not-italic text-[20px] text-white top-[225px] w-[572px]">
        <p className="mb-0">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Use diagrams and words to explore the very start of algebra, with puzzles and intuition guiding the way. `}</p>
        <p className="mb-0"> </p>
        <p>{`By the end of the course, you'll be able to simplify expressions and solve equations using methods that impart deep understanding rather than just procedures. `}</p>
      </div>
      <Button />
      <Button1 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[160px] not-italic text-[60px] text-white top-[155px] translate-y-[-50%] w-[484px]">
        <p className="leading-[32px]">Science</p>
      </div>
    </div>
  );
}

function ArrowSliderLeft() {
  return (
    <div className="absolute left-[160px] size-[42px] top-[45px]" data-name="Arrow Slider Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Arrow Slider Left">
          <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p19833c80} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BackNav() {
  return (
    <div className="absolute contents left-[160px] top-[45px]" data-name="Back Nav">
      <ArrowSliderLeft />
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[224px] not-italic text-[20px] text-white top-[66px] translate-y-[-50%] w-[243px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to All Subjects</p>
      </div>
    </div>
  );
}

function SubjectDetails() {
  return (
    <div className="absolute bg-[#1f60d8] h-[684px] left-0 overflow-clip top-[80px] w-[1440px]" data-name="Subject Details">
      <CoverProgress />
      <SubjectInfo />
      <BackNav />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[35.601px] left-[78px] top-[23.73px] w-[35.569px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 2">
          <path d={svgPaths.p28ec9500} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[30.62%_92.3%_31.35%_5.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 31">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p2714ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="21.4896" id="Rectangle 1" width="22.8884" x="4.47357" y="4.11446" />
          <path d={svgPaths.p2c02ac00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[78px] top-[23.73px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute contents left-[78px] top-[23.73px]" data-name="Logo 2">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[41.23%_86.3%_37.47%_8.46%] justify-center leading-[0] not-italic text-[#232323] text-[20.981px]">
        <p className="leading-[17.039px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function OutlineGeneralBank() {
  return (
    <div className="relative shrink-0 size-[20.585px]" data-name="Outline/General/Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Outline/General/Bank">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p32a89900} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p389c8700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1d1d7c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35407680} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1607c900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1073px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[21.99px]" data-name="Button">
      <OutlineGeneralBank />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Institute</p>
    </div>
  );
}

function Frame256() {
  return (
    <div className="absolute bg-[#face55] left-[1237px] overflow-clip rounded-[176px] size-[34px] top-[22px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[20px] justify-center leading-[0] left-[17.5px] not-italic text-[13.709px] text-black text-center top-[17px] translate-x-[-50%] translate-y-[-50%] w-[17px]">
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function NavBarTeachers() {
  return (
    <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar - Teachers">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <Logo2 />
      <div className="absolute inset-[19.98%_6.74%_19.98%_89.93%]" data-name="Profile">
        <img alt="" className="block max-w-none size-full" height="48.032" src={imgProfile} width="48.032" />
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[38.55%_75.13%_35.2%_14.25%] leading-[normal] not-italic text-[#555555] text-[14.22px] text-nowrap tracking-[0.79px] whitespace-pre">FOR GOPELE ADMINS</p>
      <Button2 />
      <Frame256 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[616px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[1158px] w-[209px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Create Topic</p>
    </div>
  );
}

function Group11871() {
  return (
    <div className="absolute contents left-[468px] top-[1095px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[720px] not-italic text-[#9b9b9b] text-[34.693px] text-center text-nowrap top-[1116.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[42.959px] whitespace-pre">Create a Topic to get started</p>
      </div>
      <Button3 />
    </div>
  );
}

export default function EmptySubject() {
  return (
    <div className="bg-white relative size-full" data-name="Empty Subject">
      <SubjectDetails />
      <NavBarTeachers />
      <Group11871 />
    </div>
  );
}