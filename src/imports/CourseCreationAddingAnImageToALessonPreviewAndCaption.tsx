import svgPaths from "./svg-0j8btaeo0n";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";
import imgUnsplash0OGEzyargo from "figma:asset/4b7738a9f5e7722cac899518a1624d44c9ca1363.png";

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
          <g clipPath="url(#clip0_2027_296)" id="fi:link-2">
            <path d={svgPaths.p5ead640} id="Vector_9" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
            <path d="M268.542 12H274.396" id="Vector_10" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46354" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2027_296">
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
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[8px] h-[49px] items-center left-[904px] px-[38px] py-[7.017px] rounded-[8.02px] top-[687px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18.044px] text-nowrap text-white whitespace-pre">Add Image</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[8px] h-[49px] items-center left-[750px] px-[38px] py-[7.017px] rounded-[8.02px] top-[687px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ff6644] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8.02px]" />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff6644] text-[18.044px] text-nowrap whitespace-pre">Cancel</p>
    </div>
  );
}

function OutlineFilesImage1() {
  return (
    <div className="absolute left-[28px] size-[52px] top-[20px]" data-name="Outline/Files/Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="Outline/Files/Image">
          <g id="Icon">
            <path d={svgPaths.p3bd80e40} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p27f6f840} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ImageWithCaption() {
  return (
    <div className="absolute contents left-[170px] top-[99px]" data-name="Image with Caption">
      <div className="absolute h-[457px] left-[170px] rounded-[8px] top-[99px] w-[792px]" data-name="unsplash:0o_GEzyargo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplash0OGEzyargo} />
        </div>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute bg-white h-[53px] left-[171px] rounded-[6.594px] top-[572px] w-[791px]" data-name="Text field">
      <div className="h-[53px] overflow-clip relative rounded-[inherit] w-[791px]">
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] text-[rgba(35,35,35,0.6)] text-nowrap top-[24.86px] translate-y-[-50%]">
          <p className="leading-[24.726px] whitespace-pre">Image Captions</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function Frame260() {
  return (
    <div className="absolute bg-white h-[766px] left-[155px] overflow-clip top-[129px] w-[1129px]">
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[43px] left-[89px] not-italic text-[28.667px] text-black text-nowrap top-[25px] whitespace-pre">Add Image</p>
      <Button1 />
      <Button2 />
      <OutlineFilesImage1 />
      <ImageWithCaption />
      <TextField1 />
    </div>
  );
}

export default function CourseCreationAddingAnImageToALessonPreviewAndCaption() {
  return (
    <div className="bg-white relative size-full" data-name="Course creation - Adding an image to a lesson preview and caption">
      <NavBarTeachers />
      <BackNav />
      <Group11860 />
      <Frame14 />
      <div className="absolute bg-[#0b0c0c] h-[1024px] left-0 opacity-50 top-0 w-[1440px]" />
      <Frame260 />
    </div>
  );
}