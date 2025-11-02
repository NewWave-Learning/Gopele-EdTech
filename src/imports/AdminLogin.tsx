function TextField() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">teacher@school.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Email</p>
      <TextField />
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">New Horizon School</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Phone</p>
      <TextField1 />
    </div>
  );
}

function TextField2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
      <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">***********</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputDefaultOff2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Password</p>
      <TextField2 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[244px] top-[148px]">
      <InputDefaultOff />
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] h-[16.408px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-[67px]">
        <p className="leading-[28.714px]">OR</p>
      </div>
      <InputDefaultOff1 />
      <InputDefaultOff2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[405px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[504px] w-[106px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">Login</p>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <div className="bg-white relative size-full" data-name="Admin Login">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[98px] justify-center leading-[0] left-[458px] not-italic text-[32px] text-black text-center top-[92px] translate-x-[-50%] translate-y-[-50%] w-[588px]">
        <p className="leading-[42px]">Administrator Login</p>
      </div>
      <Frame15 />
      <Button />
    </div>
  );
}