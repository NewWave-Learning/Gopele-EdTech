import svgPaths from "./svg-8f9x6kyuqb";

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[106px] top-[94px] w-[37.966px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 2">
          <path d={svgPaths.pcde7b00} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[11.68%_62.36%_84.32%_29.85%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p3af46480} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.77496" y="4.39174" />
          <path d={svgPaths.p16456600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[106px] top-[94px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute contents left-[106px] top-[94px]" data-name="Logo 3">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[12.76%_28.47%_85.01%_40.79%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Group11709() {
  return (
    <div className="absolute contents left-[106px] top-[94px]">
      <Logo3 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[106px] top-[94px]" data-name="Logo">
      <Group11709 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-[rgba(255,102,68,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[20px] py-[16px] w-full" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextInput />
    </div>
  );
}

function Inputs() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[25px] top-[421px] w-[325px]" data-name="Inputs">
      <Frame1 />
    </div>
  );
}

function InputAmount() {
  return (
    <div className="absolute contents left-[25px] top-[421px]" data-name="Input Amount">
      <Inputs />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Text Input">
      <div aria-hidden="true" className="absolute border border-[#e3e6ea] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[20px] py-[16px] w-full" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <TextInput1 />
    </div>
  );
}

function Inputs1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[25px] top-[543px] w-[325px]" data-name="Inputs">
      <Frame3 />
    </div>
  );
}

function InputAmount1() {
  return (
    <div className="absolute contents left-[25px] top-[543px]" data-name="Input Amount">
      <Inputs1 />
    </div>
  );
}

function Group11729() {
  return (
    <div className="absolute h-[15px] left-[41px] top-[564px] w-[288.364px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 289 15">
        <g id="Group 11729">
          <path d={svgPaths.p8ab0700} fill="var(--fill-0, black)" id="Vector" />
          <g id="Group 11712">
            <circle cx="58.7787" cy="6.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 87" r="5.79508" />
            <g id="Group 11711">
              <circle cx="5.79508" cy="6.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 84" r="5.79508" />
              <circle cx="22.3525" cy="6.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 85" r="5.79508" />
              <circle cx="40.5656" cy="6.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 86" r="5.79508" />
              <circle cx="76.9918" cy="6.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 88" r="5.79508" />
              <circle cx="95.2049" cy="6.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 89" r="5.79508" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group11730() {
  return (
    <div className="absolute contents left-[25px] top-[543px]">
      <InputAmount1 />
      <Group11729 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[25px] pl-[9px] pr-[24px] py-[5.331px] rounded-[10px] top-[655px] w-[325px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Login</p>
    </div>
  );
}

export default function MobileOrganizationalFirstTimeAfterLogginInInvalidEmailAddress() {
  return (
    <div className="bg-white relative size-full" data-name="Mobile - Organizational - first time after loggin in - Invalid email address">
      <Logo />
      <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[80px] not-italic text-[#0b0c0c] text-[24px] text-nowrap top-[234px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">{`Sign in  to Gopele`}</p>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[61px] leading-[25px] left-[185.5px] not-italic text-[14px] text-[rgba(51,51,51,0.5)] text-center top-[274px] translate-x-[-50%] w-[313px]">{`Lorem ipsum dolor sit amet, consectetur adipi elit. Ultricies sed lectus in sed pharetra, `}</p>
      <InputAmount />
      <a className="absolute block font-['Poppins:Regular',_sans-serif] h-[28px] leading-[0] left-[41px] not-italic text-[#232323] text-[14px] top-[432px] w-[224px]" href="mailto:admin@organizartion.com">
        <p className="cursor-pointer leading-[31px]">admin@organization.com</p>
      </a>
      <Group11730 />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[31px] left-[24px] not-italic text-[#0b0c0c] text-[14px] text-nowrap top-[513px] whitespace-pre">Password</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[31px] left-[25px] not-italic text-[#0b0c0c] text-[14px] text-nowrap top-[390px] whitespace-pre">Password</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[24px] leading-[31px] left-[25px] not-italic text-[#ff6644] text-[12px] top-[478px] w-[224px]">Invalid email address</p>
      <Button />
      <p className="absolute font-['Poppins:Light',_sans-serif] leading-[24px] left-[225px] not-italic text-[#9b9b9b] text-[14px] text-nowrap top-[608px] whitespace-pre">forgot password ?</p>
    </div>
  );
}