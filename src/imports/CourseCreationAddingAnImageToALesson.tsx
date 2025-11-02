import svgPaths from "./svg-cv2vqzaaxp";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";

/**
 * @figmaAssetKey 8fc7824e4371a163c2b4724bdf624bbfe09d4b3f
 */
function OutlineFilesImage({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Files/Image">
      <div className="absolute inset-[18.55%_10.77%_18.56%_10.78%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 33">
          <g id="Icon">
            <path d={svgPaths.pd68f570} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.pfb82600} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
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

function TextField() {
  return (
    <div className="absolute bg-white h-[642px] left-[86px] rounded-[6.594px] top-[293px] w-[1257px]" data-name="Text field">
      <div className="h-[642px] overflow-clip relative rounded-[inherit] w-[1257px]">
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[33px] not-italic text-[#232323] text-[20px] top-[37px] w-[1192px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. `}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute contents left-[86px] top-[293px]" data-name="Text Area">
      <TextField />
    </div>
  );
}

function Group11860() {
  return (
    <div className="absolute contents left-[84px] top-[241px]">
      <div className="absolute bottom-[760px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Content</p>
      </div>
      <TextArea />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[280.25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 281 24">
        <g id="Frame 13">
          <g id="bi:type-h1">
            <path d={svgPaths.p3c034400} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <g id="fi:bold">
            <path d={svgPaths.p19266900} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
            <path d={svgPaths.p22b37000} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          </g>
          <g id="fi:italic">
            <path d="M89.8072 17.8542H83.2212" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
            <path d="M93.4663 6.14582H86.8803" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
            <path d={svgPaths.p2a754d00} id="Vector_6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          </g>
          <g id="fi:edit-3">
            <path d="M125.906 17.8542H132.492" id="Vector_7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
            <path d={svgPaths.p31edc500} id="Vector_8" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          </g>
          <path d="M154.688 3.5V20.5" id="Vector 1" stroke="var(--stroke-0, #F1F1F1)" strokeLinecap="round" strokeWidth="2" />
          <g id="Outline/Files/Image">
            <g id="Icon">
              <path d={svgPaths.p1b1c8400} fill="var(--fill-0, black)" />
              <path clipRule="evenodd" d={svgPaths.pfd02900} fill="var(--fill-0, black)" fillRule="evenodd" />
            </g>
          </g>
          <g id="Outline/Files/Clipboard-alt">
            <g id="Icon_2">
              <path clipRule="evenodd" d={svgPaths.p2556e580} fill="white" fillRule="evenodd" />
              <path d={svgPaths.p2f704c80} fill="white" />
              <path d={svgPaths.p25b884a8} fill="white" />
            </g>
          </g>
          <g clipPath="url(#clip0_2025_2278)" id="fi:link-2">
            <path d={svgPaths.p5ead640} id="Vector_9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
            <path d="M268.542 12H274.396" id="Vector_10" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2025_2278">
            <rect fill="white" height="17.5625" transform="translate(262.688 3.21875)" width="17.5625" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] items-start left-[1045px] px-[9px] py-[8px] rounded-[5.185px] shadow-[0px_0px_5.185px_1.037px_rgba(0,0,0,0.23)] top-[242px]">
      <Frame13 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[14.578px] h-[48.593px] items-center left-[469px] pl-[19.047px] pr-0 py-[7.017px] rounded-[8.02px] top-[388px] w-[191.133px]" data-name="Button">
      <div className="h-[21.287px] relative shrink-0 w-[19.437px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p35b0f900} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p4b14d80} fill="black" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.044px] text-nowrap whitespace-pre">Upload Image</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[8px] h-[49px] items-center left-[888px] px-[38px] py-[7.017px] rounded-[8.02px] top-[734px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18.044px] text-nowrap text-white whitespace-pre">Save Quiz</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[49px] items-center left-[683px] px-[38px] py-[7.017px] rounded-[8.02px] top-[734px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff6644] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8.02px]" />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff6644] text-[18.044px] text-nowrap whitespace-pre">Discard Quiz</p>
    </div>
  );
}

function Frame260() {
  return (
    <div className="absolute bg-white h-[824px] left-[156px] overflow-clip top-[100px] w-[1129px]">
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[43px] left-[89px] not-italic text-[28.667px] text-black text-nowrap top-[25px] whitespace-pre">Add Image</p>
      <Button1 />
      <Button2 />
      <Button3 />
      <OutlineFilesImage className="absolute left-[28px] size-[52px] top-[20px]" />
    </div>
  );
}

export default function CourseCreationAddingAnImageToALesson() {
  return (
    <div className="bg-white relative size-full" data-name="Course creation - Adding an image to a lesson">
      <NavBarTeachers />
      <BackNav />
      <Group11860 />
      <Frame14 />
      <div className="absolute bg-[#0b0c0c] h-[1024px] left-0 opacity-50 top-0 w-[1440px]" />
      <Frame260 />
    </div>
  );
}