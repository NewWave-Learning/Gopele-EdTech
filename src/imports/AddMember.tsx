import svgPaths from "./svg-csw0ronwls";

function TextField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">{`First & Last Name`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Name</p>
      <TextField />
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">#11111111</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Institute Member ID</p>
      <TextField1 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[10px] mr-[-15.714px] relative shrink-0 w-[15.714px]">
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex h-[48px] items-center justify-between ml-0 mt-[31px] pl-[10px] pr-[25.714px] py-[8px] relative rounded-[10px] w-[428px]">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] mr-[-15.714px] not-italic relative shrink-0 text-[#9b9b9b] text-[15px] w-[149px]">Teacher</p>
      <Frame36 />
    </div>
  );
}

function Group250() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[1.5] ml-0 mt-0 not-italic relative text-[#232323] text-[15px] w-[428px]">Institute Member ID</p>
      <Frame11 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[228px] top-[124px]">
      <InputDefaultOff />
      <InputDefaultOff1 />
      <Group250 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[352px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[447px] w-[180px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">Create Credentials</p>
    </div>
  );
}

export default function AddMember() {
  return (
    <div className="bg-white relative size-full" data-name="Add Member">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[32px] text-black text-center top-[69px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Add Member</p>
      </div>
      <Frame15 />
      <Button />
    </div>
  );
}