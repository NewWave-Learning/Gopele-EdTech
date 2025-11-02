import svgPaths from "./svg-jc0o4hk5p8";
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
            <path d={svgPaths.p19833c80} fill="var(--fill-0, #232323)" id="Icon" />
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
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to Science</p>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="absolute bg-white h-[52.749px] left-[86px] rounded-[6.594px] top-[392px] w-[583px]" data-name="Text field">
      <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] text-[rgba(35,35,35,0.6)] text-nowrap top-[24.86px] translate-y-[-50%]">
          <p className="leading-[24.726px] whitespace-pre">Type here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute contents left-[86px] top-[392px]" data-name="Text Area">
      <TextField />
    </div>
  );
}

function Group11860() {
  return (
    <div className="absolute contents left-[84px] top-[340px]">
      <div className="absolute bottom-[1109px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">Max Char 40</p>
      </div>
      <div className="absolute bottom-[1204px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Name</p>
      </div>
      <TextArea />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[10px] left-[544.33px] top-[21px] w-[15.714px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Frame 36">
          <path d={svgPaths.p1e43a080} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute bg-white h-[52.749px] left-[86px] rounded-[6.594px] top-[947px] w-[583px]" data-name="Text field">
      <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[#232323] text-[16.484px] text-nowrap top-[26.5px] translate-y-[-50%]">
          <p className="leading-[24.726px] whitespace-pre">Molecular Biology</p>
        </div>
        <Frame36 />
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea1() {
  return (
    <div className="absolute contents left-[86px] top-[947px]" data-name="Text Area">
      <TextField1 />
    </div>
  );
}

function Group11864() {
  return (
    <div className="absolute contents left-[86px] top-[895px]">
      <div className="absolute bottom-[649px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[86px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Topic</p>
      </div>
      <TextArea1 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="absolute bg-white h-[161px] left-[84px] rounded-[6.594px] top-[542px] w-[583px]" data-name="Text field">
      <div className="h-[161px] overflow-clip relative rounded-[inherit] w-[583px]">
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] text-[rgba(35,35,35,0.6)] text-nowrap top-[24.86px] translate-y-[-50%]">
          <p className="leading-[24.726px] whitespace-pre">Type here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea2() {
  return (
    <div className="absolute contents left-[84px] top-[542px]" data-name="Text Area">
      <TextField2 />
    </div>
  );
}

function Group11858() {
  return (
    <div className="absolute contents left-[84px] top-[542px]">
      <div className="absolute bottom-[850px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">Max Char 500</p>
      </div>
      <TextArea2 />
    </div>
  );
}

function Group11861() {
  return (
    <div className="absolute contents left-[84px] top-[490px]">
      <div className="absolute bottom-[1054px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Description</p>
      </div>
      <Group11858 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[10.678px] h-[35.593px] items-center left-[435px] pl-[13.951px] pr-0 py-[5.14px] rounded-[5.874px] top-[8px] w-[140px]" data-name="Button">
      <div className="h-[15.592px] relative shrink-0 w-[14.237px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.pf18fc00} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2a502880} fill="black" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Upload Image</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[52px] right-[771px] rounded-[10px] top-[801px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button1 />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[18px] not-italic text-[15px] text-black text-nowrap top-[14px] whitespace-pre">No file uploaded</p>
    </div>
  );
}

function Group11862() {
  return (
    <div className="absolute contents left-[84px] top-[749px]">
      <div className="absolute bottom-[795px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Banner</p>
      </div>
      <Frame11 />
    </div>
  );
}

function Group11863() {
  return (
    <div className="absolute contents left-[84px] top-[749px]">
      <Group11862 />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[19px] left-[86px] not-italic opacity-50 text-[13px] text-black text-nowrap top-[857px] whitespace-pre">Only JPG, PNG supported. Max file size: 2 MB</p>
    </div>
  );
}

function Group11872() {
  return (
    <div className="absolute bottom-[1148px] contents font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[962px] not-italic text-center text-nowrap">
      <div className="absolute bottom-[1195px] flex flex-col justify-center left-[1060.5px] text-[#232323] text-[25.241px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[33.655px] text-nowrap whitespace-pre">What is Space?</p>
      </div>
      <div className="absolute bottom-[1165px] flex flex-col justify-center left-[987.5px] text-[#9b9b9b] text-[16px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[33.655px] text-nowrap whitespace-pre">Page 1</p>
      </div>
    </div>
  );
}

function Group11873() {
  return (
    <div className="absolute bottom-[1051px] contents font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[960px] not-italic text-center text-nowrap">
      <div className="absolute bottom-[1098px] flex flex-col justify-center left-[1060.5px] text-[#232323] text-[25.241px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[33.655px] text-nowrap whitespace-pre">What is Space?</p>
      </div>
      <div className="absolute bottom-[1068px] flex flex-col justify-center left-[987.5px] text-[#9b9b9b] text-[16px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[33.655px] text-nowrap whitespace-pre">Page 2</p>
      </div>
    </div>
  );
}

function Group11874() {
  return (
    <div className="absolute bottom-[954px] contents font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[960px] not-italic text-center text-nowrap">
      <div className="absolute bottom-[1001px] flex flex-col justify-center left-[1060.5px] text-[#232323] text-[25.241px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[33.655px] text-nowrap whitespace-pre">What is Space?</p>
      </div>
      <div className="absolute bottom-[971px] flex flex-col justify-center left-[987.5px] text-[#9b9b9b] text-[16px] translate-x-[-50%] translate-y-[50%]">
        <p className="leading-[33.655px] text-nowrap whitespace-pre">Page 3</p>
      </div>
    </div>
  );
}

function OutlineFilesDocument() {
  return (
    <div className="absolute left-[902px] size-[44px] top-[355px]" data-name="Outline/Files/Document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Outline/Files/Document">
          <g id="Icon">
            <path d={svgPaths.p21634a90} fill="var(--fill-0, #0B0C0C)" />
            <path d={svgPaths.p247c8800} fill="var(--fill-0, #0B0C0C)" />
            <path clipRule="evenodd" d={svgPaths.p42203c0} fill="var(--fill-0, #0B0C0C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OutlineFilesDocument1() {
  return (
    <div className="absolute left-[902px] size-[44px] top-[452px]" data-name="Outline/Files/Document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Outline/Files/Document">
          <g id="Icon">
            <path d={svgPaths.p21634a90} fill="var(--fill-0, #0B0C0C)" />
            <path d={svgPaths.p247c8800} fill="var(--fill-0, #0B0C0C)" />
            <path clipRule="evenodd" d={svgPaths.p42203c0} fill="var(--fill-0, #0B0C0C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OutlineFilesDocument2() {
  return (
    <div className="absolute left-[902px] size-[44px] top-[549px]" data-name="Outline/Files/Document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Outline/Files/Document">
          <g id="Icon">
            <path d={svgPaths.p21634a90} fill="var(--fill-0, #0B0C0C)" />
            <path d={svgPaths.p247c8800} fill="var(--fill-0, #0B0C0C)" />
            <path clipRule="evenodd" d={svgPaths.p42203c0} fill="var(--fill-0, #0B0C0C)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SolidInterfaceEditAlt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Edit-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Edit-alt">
          <g id="Icon">
            <path d={svgPaths.p36ffa480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p263a3200} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[11px] h-[35.593px] items-center left-[1206px] pl-[13.951px] pr-0 py-[5.14px] rounded-[5.874px] top-[355px] w-[140px]" data-name="Button">
      <SolidInterfaceEditAlt />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Edit Lesson</p>
    </div>
  );
}

function SolidInterfaceEditAlt1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Edit-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Edit-alt">
          <g id="Icon">
            <path d={svgPaths.p36ffa480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p263a3200} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[11px] h-[35.593px] items-center left-[1206px] pl-[13.951px] pr-0 py-[5.14px] rounded-[5.874px] top-[452px] w-[140px]" data-name="Button">
      <SolidInterfaceEditAlt1 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Edit Lesson</p>
    </div>
  );
}

function SolidInterfaceEditAlt2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Edit-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Edit-alt">
          <g id="Icon">
            <path d={svgPaths.p36ffa480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p263a3200} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[11px] h-[35.593px] items-center left-[1206px] pl-[13.951px] pr-0 py-[5.14px] rounded-[5.874px] top-[549px] w-[140px]" data-name="Button">
      <SolidInterfaceEditAlt2 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Edit Lesson</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center pl-[19px] pr-[18px] py-[7px] right-[1151px] rounded-[8px] top-[1072px] w-[205px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Save Changes</p>
    </div>
  );
}

export default function CreateLessonLessonDetails() {
  return (
    <div className="bg-white relative size-full" data-name="Create Lesson - Lesson Details">
      <NavBarTeachers />
      <BackNav />
      <Group11860 />
      <Group11864 />
      <Group11861 />
      <Group11863 />
      <div className="absolute bottom-[1304px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1094px] not-italic text-[#232323] text-[34.075px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Content</p>
      </div>
      <Group11872 />
      <Group11873 />
      <Group11874 />
      <OutlineFilesDocument />
      <OutlineFilesDocument1 />
      <OutlineFilesDocument2 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[36px] text-black text-nowrap top-[267px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Chapter Name</p>
      </div>
    </div>
  );
}