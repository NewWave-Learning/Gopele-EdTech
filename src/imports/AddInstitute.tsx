import svgPaths from "./svg-5ml7wct8yr";

function TextField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Name</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Institute Name</p>
      <TextField />
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">Johsenburg</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Location</p>
      <TextField1 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">bnb@school.vom</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#eb5757] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Institute Email</p>
      <TextField2 />
      <p className="font-['Poppins:Regular',_sans-serif] leading-[19px] not-italic relative shrink-0 text-[#eb5757] text-[11.875px] text-nowrap whitespace-pre">{`Only school issued emails allowed. `}</p>
    </div>
  );
}

function SolidGeneralPalette() {
  return (
    <div className="relative shrink-0 size-[24.136px]" data-name="Solid/General/Palette">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Solid/General/Palette">
          <path clipRule="evenodd" d={svgPaths.p104eba00} fill="var(--fill-0, #232323)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame249() {
  return (
    <div className="absolute content-stretch flex gap-[8.297px] items-center left-[26px] top-[12px]">
      <SolidGeneralPalette />
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.102px] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[12.535px] tracking-[2.2383px] uppercase w-[100.567px]">
        <p className="leading-[28.651px]">art school</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[7px] left-[407px] top-[21px] w-[11px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
        <g id="Frame 36">
          <path d={svgPaths.p3eb042f2} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[49px] relative rounded-[10px] shrink-0 w-[428px]">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame249 />
      <Frame36 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[9px] h-[30px] items-center left-[303px] pl-[11.759px] pr-0 py-[4.332px] rounded-[4.951px] top-[9px] w-[118px]" data-name="Button">
      <div className="h-[13.142px] relative shrink-0 w-[12px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p9c03f80} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p313a4500} fill="black" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[11.14px] text-nowrap whitespace-pre">Upload Image</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] h-[49px] ml-0 mt-[35px] relative rounded-[10px] w-[428px]">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[24px] left-[16px] not-italic opacity-50 text-[15px] text-black text-nowrap top-[12px] whitespace-pre">No file uploaded</p>
      <Button />
    </div>
  );
}

function Group251() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[1.5] ml-0 mt-0 not-italic relative text-[#232323] text-[15px] w-[428px]">School Logo</p>
      <Frame12 />
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[19px] ml-0 mt-[84px] not-italic opacity-50 relative text-[11.875px] text-black text-nowrap whitespace-pre">Only JPG, PNG supported. Max file size: 2 MB</p>
    </div>
  );
}

function InputDefaultOff3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">School Category</p>
      <Frame11 />
      <Group251 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[228px] top-[178px]">
      <InputDefaultOff />
      <InputDefaultOff1 />
      <InputDefaultOff2 />
      <InputDefaultOff3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[352px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[731px] w-[180px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">Add Institute</p>
    </div>
  );
}

export default function AddInstitute() {
  return (
    <div className="bg-white relative size-full" data-name="Add Institute">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[32px] text-black text-center top-[72px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Add Institute</p>
      </div>
      <Frame15 />
      <Button1 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[442px] not-italic text-[#9b9b9b] text-[15px] text-center top-[101px] translate-x-[-50%] w-[334px]">After successfully creation, all credentials will be directly emailed to you.</p>
    </div>
  );
}