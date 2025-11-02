import svgPaths from "./svg-mrjxnxchwf";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";

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

function Button() {
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
      <Button />
      <Frame256 />
    </div>
  );
}

function ArrowSliderLeft() {
  return (
    <div className="absolute left-[84px] size-[42px] top-[151px]" data-name="Arrow Slider Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Arrow Slider Left">
          <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p9f33d00} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BackNav() {
  return (
    <div className="absolute contents left-[84px] top-[151px]" data-name="Back Nav">
      <ArrowSliderLeft />
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[148px] not-italic text-[#0b0c0c] text-[20px] top-[172px] translate-y-[-50%] w-[243px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to Lesson Details</p>
      </div>
    </div>
  );
}

function UCheck() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="u:check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="u:check">
          <path d={svgPaths.p22acaec0} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex gap-[5px] inset-[15.63%_6.94%_82.03%_80.97%] items-center justify-end">
      <UCheck />
      <div className="flex flex-col font-['Effra_Medium:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b9b9b] text-[16px] text-nowrap text-right">
        <p className="leading-none whitespace-pre">Saved Automatically</p>
      </div>
    </div>
  );
}

function OutlineFilesClipboardAlt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Outline/Files/Clipboard-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outline/Files/Clipboard-alt">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.pee06380} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p3ad16e00} fill="white" />
            <path d={svgPaths.p38436600} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[40px] items-center left-[1203px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[241px]" data-name="Button">
      <OutlineFilesClipboardAlt />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">Create Quiz</p>
    </div>
  );
}

function Group11869() {
  return (
    <div className="absolute contents left-[827px] top-[236px]">
      <div className="absolute bottom-[765px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[827px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Quizes</p>
      </div>
      <Button1 />
    </div>
  );
}

function TextField() {
  return (
    <div className="absolute bg-white h-[377px] left-[86px] rounded-[6.594px] top-[552px] w-[721px]" data-name="Text field">
      <div className="h-[377px] overflow-clip relative rounded-[inherit] w-[721px]">
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[33px] not-italic text-[#232323] text-[20px] top-[37px] w-[620px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute contents left-[86px] top-[552px]" data-name="Text Area">
      <TextField />
    </div>
  );
}

function BiTypeH1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="bi:type-h1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="bi:type-h1">
          <path d={svgPaths.p3aef300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FiBold() {
  return (
    <div className="relative shrink-0 size-[17.563px]" data-name="fi:bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fi:bold">
          <path d={svgPaths.p55fdf80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          <path d={svgPaths.p19828c70} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
        </g>
      </svg>
    </div>
  );
}

function FiItalic() {
  return (
    <div className="relative shrink-0 size-[17.563px]" data-name="fi:italic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fi:italic">
          <path d="M10.2446 14.6354H3.65871" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          <path d="M13.9038 2.92707H7.31785" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          <path d={svgPaths.p2bc5ef00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
        </g>
      </svg>
    </div>
  );
}

function FiEdit3() {
  return (
    <div className="relative shrink-0 size-[17.563px]" data-name="fi:edit-3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="fi:edit-3">
          <path d="M8.78125 14.6354H15.3672" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          <path d={svgPaths.p380bce00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
        </g>
      </svg>
    </div>
  );
}

function OutlineFilesImage() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[24px]" data-name="Outline/Files/Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Outline/Files/Image">
          <g id="Icon">
            <path d={svgPaths.p38a74e00} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p9cb7b00} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group11867() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <OutlineFilesImage />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center ml-[31px] mt-[12.5px] not-italic relative text-[12px] text-black text-nowrap translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Add Image</p>
      </div>
    </div>
  );
}

function FiLink2() {
  return (
    <div className="relative shrink-0 size-[17.563px]" data-name="fi:link-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2023_1947)" id="fi:link-2">
          <path d={svgPaths.p12f86d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          <path d="M5.85402 8.78125H11.7082" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
        </g>
        <defs>
          <clipPath id="clip0_2023_1947">
            <rect fill="white" height="17.5625" width="17.5625" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <BiTypeH1 />
      <FiBold />
      <FiItalic />
      <FiEdit3 />
      <div className="h-[17px] relative shrink-0 w-0">
        <div className="absolute inset-[-5.88%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 19">
            <path d="M1 1V18" id="Vector 1" stroke="var(--stroke-0, #F1F1F1)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group11867 />
      <FiLink2 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[484px] px-[9px] py-[8px] rounded-[5.185px] shadow-[0px_0px_5.185px_1.037px_rgba(0,0,0,0.23)] top-[500px]">
      <Frame13 />
    </div>
  );
}

function Group11868() {
  return (
    <div className="absolute contents left-[84px] top-[500px]">
      <div className="absolute bottom-[501px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Content</p>
      </div>
      <TextArea />
      <Frame14 />
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute bg-white h-[52.749px] left-[90px] rounded-[6.594px] top-[393px] w-[583px]" data-name="Text field">
      <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] text-[rgba(35,35,35,0.6)] text-nowrap top-[24.86px] translate-y-[-50%]">
          <p className="leading-[24.726px] whitespace-pre">Type here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="absolute contents left-[90px] top-[393px]" data-name="Text Area">
      <TextField1 />
    </div>
  );
}

function Group11860() {
  return (
    <div className="absolute contents left-[88px] top-[341px]">
      <div className="absolute bottom-[565px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[88px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">Max Char 40</p>
      </div>
      <div className="absolute bottom-[660px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[88px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Name</p>
      </div>
      <TextArea1 />
    </div>
  );
}

export default function LessonCotent() {
  return (
    <div className="bg-white relative size-full" data-name="Lesson Cotent">
      <NavBarTeachers />
      <BackNav />
      <Frame20 />
      <Group11869 />
      <Group11868 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[1112.5px] not-italic text-[#9b9b9b] text-[20px] text-center text-nowrap top-[471.5px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[32.959px] whitespace-pre">No Activities Found</p>
      </div>
      <Group11860 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[32px] text-black text-nowrap top-[267px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">What is Space?</p>
      </div>
    </div>
  );
}