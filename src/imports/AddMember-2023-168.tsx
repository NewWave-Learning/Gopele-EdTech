import svgPaths from "./svg-r63yncw1vn";

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
          <g id="Group">
            <path d={svgPaths.p20a5a900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pb990700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsCopy() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="akar-icons:copy">
      <Group />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[334px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[209px]" data-name="Button">
      <AkarIconsCopy />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Copy Username</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
          <g id="Group">
            <path d={svgPaths.p20a5a900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pb990700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsCopy1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="akar-icons:copy">
      <Group1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[337px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[299px]" data-name="Button">
      <AkarIconsCopy1 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Copy Password</p>
    </div>
  );
}

export default function AddMember() {
  return (
    <div className="bg-white relative size-full" data-name="Add Member">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[32px] text-black text-center top-[92px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Account Ready</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[#4f4f4f] text-[16px] text-center top-[132px] translate-x-[-50%] translate-y-[-50%] w-[576px]">
        <p className="leading-[42px]">Please do not share these credentials with anyone but the owner.</p>
      </div>
      <Button />
      <Button1 />
    </div>
  );
}