import svgPaths from "./svg-3mkevan7uf";
import imgClipInternationalEducation1 from "figma:asset/0c2c26a084eeb039082ca6e93ab9beaa8e537242.png";

function ArrowSliderLeft() {
  return (
    <div className="absolute left-[780px] size-[42px] top-[55px]" data-name="Arrow Slider Left">
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
    <div className="absolute contents left-[780px] top-[55px]" data-name="Back Nav">
      <ArrowSliderLeft />
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[844px] not-italic text-[#0b0c0c] text-[20px] top-[76px] translate-y-[-50%] w-[243px]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to All Subjects</p>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="absolute bg-white h-[52.749px] left-[784px] rounded-[6.594px] top-[266px] w-[583px]" data-name="Text field">
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
    <div className="absolute contents left-[784px] top-[266px]" data-name="Text Area">
      <TextField />
    </div>
  );
}

function Group11860() {
  return (
    <div className="absolute contents left-[782px] top-[214px]">
      <div className="absolute bottom-[692px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">Max Char 40</p>
      </div>
      <div className="absolute bottom-[787px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Name</p>
      </div>
      <TextArea />
    </div>
  );
}

function TextField1() {
  return (
    <div className="absolute bg-white h-[161px] left-[782px] rounded-[6.594px] top-[413px] w-[583px]" data-name="Text field">
      <div className="h-[161px] overflow-clip relative rounded-[inherit] w-[583px]">
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
    <div className="absolute contents left-[782px] top-[413px]" data-name="Text Area">
      <TextField1 />
    </div>
  );
}

function Group11858() {
  return (
    <div className="absolute contents left-[782px] top-[413px]">
      <div className="absolute bottom-[436px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">Max Char 500</p>
      </div>
      <TextArea1 />
    </div>
  );
}

function Group11861() {
  return (
    <div className="absolute contents left-[782px] top-[361px]">
      <div className="absolute bottom-[640px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Description</p>
      </div>
      <Group11858 />
    </div>
  );
}

function SolidGeneralPalette() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Palette">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Solid/General/Palette">
          <path clipRule="evenodd" d={svgPaths.p740ed00} fill="var(--fill-0, #1F60D8)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <SolidGeneralPalette />
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0c0c] text-[16.619px] tracking-[2.9676px] uppercase w-[133.333px]">
        <p className="leading-[37.985px]">Art</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[10px] relative shrink-0 w-[15.714px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Frame 36">
          <path d={svgPaths.p1e43a080} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[347px] h-[52px] items-center px-[21px] py-[8px] right-[73px] rounded-[10px] top-[663px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame247 />
      <Frame36 />
    </div>
  );
}

function Group11859() {
  return (
    <div className="absolute contents left-[782px] top-[611px]">
      <div className="absolute bottom-[390px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Category</p>
      </div>
      <Frame11 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[948px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[923px] w-[209px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Create Subject</p>
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

function Frame12() {
  return (
    <div className="absolute h-[52px] right-[73px] rounded-[10px] top-[789px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button1 />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[18px] not-italic text-[15px] text-black text-nowrap top-[14px] whitespace-pre">No file uploaded</p>
    </div>
  );
}

function Group11862() {
  return (
    <div className="absolute contents left-[782px] top-[737px]">
      <div className="absolute bottom-[264px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Banner</p>
      </div>
      <Frame12 />
    </div>
  );
}

function Group11863() {
  return (
    <div className="absolute contents left-[782px] top-[737px]">
      <Group11862 />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[19px] left-[784px] not-italic opacity-50 text-[13px] text-black text-nowrap top-[845px] whitespace-pre">Only JPG, PNG supported. Max file size: 2 MB</p>
    </div>
  );
}

export default function CreateANewSubject() {
  return (
    <div className="bg-white relative size-full" data-name="Create a New Subject">
      <BackNav />
      <div className="absolute bottom-[848px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[34.075px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Create New Subjects</p>
      </div>
      <Group11860 />
      <Group11861 />
      <div className="absolute bg-[#1f60d8] h-[1024px] left-0 top-0 w-[716px]" />
      <div className="absolute left-[132px] size-[456px] top-[127px]" data-name="clip-international-education 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipInternationalEducation1} />
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[40px] left-[360px] not-italic text-[36px] text-center text-white top-[623px] translate-x-[-50%] translate-y-[-50%] w-[546px]">
        <p className="mb-0">{`A new modern way to `}</p>
        <p>{`learn & teach!`}</p>
      </div>
      <Group11859 />
      <Button />
      <Group11863 />
    </div>
  );
}