import svgPaths from "./svg-dibih6ikw1";

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
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[103px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[360px] w-[428px]" data-name="Button">
      <AkarIconsCopy />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Copy Institute Code</p>
    </div>
  );
}

export default function AddStudents() {
  return (
    <div className="bg-white relative size-full" data-name="Add Students">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[62px] justify-center leading-[0] left-[317px] not-italic text-[32px] text-black text-center top-[102px] translate-x-[-50%] translate-y-[-50%] w-[458px]">
        <p className="leading-[42px]">Add Your Students</p>
      </div>
      <Button />
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] inset-[28%_18.96%_30.11%_19.27%] justify-center leading-[26px] not-italic text-[#232323] text-[16px] text-center">
        <p className="mb-0">Congratulations! Your institute has been created successful!</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Copy & share the insitute code with your students & ask them to sign up as students!`}</p>
      </div>
    </div>
  );
}