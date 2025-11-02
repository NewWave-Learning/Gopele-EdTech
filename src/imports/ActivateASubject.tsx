import svgPaths from "./svg-irys45ysg5";
import imgRectangle206 from "figma:asset/3917180b2d0378d8699ac0dd6f173b7247e41dc3.png";

/**
 * @figmaAssetKey c5e41300840d658f99fd8484d468ac10df65cc45
 */
function SolidInterfaceCheck({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Interface/Check">
      <div className="absolute inset-[32.29%_23.96%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
          <path clipRule="evenodd" d={svgPaths.p10ad5f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

/**
 * @figmaAssetKey 40c46f57287ef625ce5d9b22d38e03c88ec5c930
 */
function SolidCommunicationChat({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Communication/Chat">
      <div className="absolute inset-[18.37%_14.69%_21.88%_13.54%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <path clipRule="evenodd" d={svgPaths.p1c7fd280} fill="var(--fill-0, black)" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function OutlineInterfaceCross() {
  return (
    <div className="absolute right-[10px] size-[77px] top-[11px]" data-name="Outline/Interface/Cross">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 77">
        <g id="Outline/Interface/Cross">
          <path d={svgPaths.p37b94680} id="Icon" stroke="var(--stroke-0, #232323)" strokeLinecap="round" strokeWidth="3.5625" />
          <path d={svgPaths.p11f7ba00} id="Icon_2" stroke="var(--stroke-0, #232323)" strokeLinecap="round" strokeWidth="3.5625" />
        </g>
      </svg>
    </div>
  );
}

function Frame248() {
  return (
    <div className="absolute content-stretch flex font-['Poppins:SemiBold',_sans-serif] gap-[37.564px] items-start leading-[0] left-[72px] not-italic text-[#232323] text-[20.966px] text-nowrap top-[258.53px]">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[27.955px] text-nowrap whitespace-pre">Language Skills</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[27.955px] text-nowrap whitespace-pre">Mathematics</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[27.955px] text-nowrap whitespace-pre">Social Science</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[27.955px] text-nowrap whitespace-pre">Computer Science</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[13px] h-[50px] items-center left-[822px] pl-[19.792px] pr-[18.75px] py-[7.292px] rounded-[8.333px] top-[26px]" data-name="Button">
      <SolidCommunicationChat className="relative shrink-0 size-[30px]" />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.75px] text-nowrap whitespace-pre">Chat with Experts</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px]" data-name="Button">
      <SolidInterfaceCheck className="relative shrink-0 size-[24px]" />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.399px] text-nowrap text-white whitespace-pre">Subject Activated</p>
    </div>
  );
}

function InstituteListItem() {
  return (
    <div className="absolute h-[105px] left-[80px] rounded-[8px] top-[318px] w-[1008px]" data-name="Institute List Item">
      <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[1008px]">
        <div className="absolute bottom-[74px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[118px] not-italic text-[#232323] text-[20.414px] text-nowrap translate-y-[50%]">
          <p className="leading-[35.978px] whitespace-pre">English</p>
        </div>
        <div className="absolute left-[12px] rounded-[10px] size-[78px] top-[12px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
            <div className="absolute bg-white inset-0 rounded-[10px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%]" src={imgRectangle206} />
            </div>
          </div>
        </div>
        <Button2 />
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[39px] leading-[normal] left-[118px] not-italic text-[#232323] text-[12px] top-[49px] w-[663px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SolidInterfacePlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Plus">
          <path d={svgPaths.p24328530} fill="var(--fill-0, #232323)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px]" data-name="Button">
      <SolidInterfacePlus />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.399px] text-nowrap whitespace-pre">Activate Subjects</p>
    </div>
  );
}

function InstituteListItem1() {
  return (
    <div className="absolute h-[105px] left-[80px] rounded-[8px] top-[429px] w-[1008px]" data-name="Institute List Item">
      <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[1008px]">
        <div className="absolute bottom-[74px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[118px] not-italic text-[#232323] text-[20.414px] text-nowrap translate-y-[50%]">
          <p className="leading-[35.978px] whitespace-pre">English</p>
        </div>
        <div className="absolute left-[12px] rounded-[10px] size-[78px] top-[12px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
            <div className="absolute bg-white inset-0 rounded-[10px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%]" src={imgRectangle206} />
            </div>
          </div>
        </div>
        <Button4 />
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[39px] leading-[normal] left-[118px] not-italic text-[#232323] text-[12px] top-[49px] w-[663px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SolidInterfacePlus1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Plus">
          <path d={svgPaths.p24328530} fill="var(--fill-0, #232323)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px]" data-name="Button">
      <SolidInterfacePlus1 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.399px] text-nowrap whitespace-pre">Activate Subjects</p>
    </div>
  );
}

function InstituteListItem2() {
  return (
    <div className="absolute h-[105px] left-[80px] rounded-[8px] top-[540px] w-[1008px]" data-name="Institute List Item">
      <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[1008px]">
        <div className="absolute bottom-[74px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[118px] not-italic text-[#232323] text-[20.414px] text-nowrap translate-y-[50%]">
          <p className="leading-[35.978px] whitespace-pre">English</p>
        </div>
        <div className="absolute left-[12px] rounded-[10px] size-[78px] top-[12px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
            <div className="absolute bg-white inset-0 rounded-[10px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%]" src={imgRectangle206} />
            </div>
          </div>
        </div>
        <Button6 />
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[39px] leading-[normal] left-[118px] not-italic text-[#232323] text-[12px] top-[49px] w-[663px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SolidInterfacePlus2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Plus">
          <path d={svgPaths.p24328530} fill="var(--fill-0, #232323)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px]" data-name="Button">
      <SolidInterfacePlus2 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.399px] text-nowrap whitespace-pre">Activate Subjects</p>
    </div>
  );
}

function InstituteListItem3() {
  return (
    <div className="absolute h-[105px] left-[80px] rounded-[8px] top-[651px] w-[1008px]" data-name="Institute List Item">
      <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[1008px]">
        <div className="absolute bottom-[74px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[118px] not-italic text-[#232323] text-[20.414px] text-nowrap translate-y-[50%]">
          <p className="leading-[35.978px] whitespace-pre">English</p>
        </div>
        <div className="absolute left-[12px] rounded-[10px] size-[78px] top-[12px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
            <div className="absolute bg-white inset-0 rounded-[10px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%]" src={imgRectangle206} />
            </div>
          </div>
        </div>
        <Button8 />
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[39px] leading-[normal] left-[118px] not-italic text-[#232323] text-[12px] top-[49px] w-[663px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SolidInterfacePlus3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Plus">
          <path d={svgPaths.p24328530} fill="var(--fill-0, #232323)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px]" data-name="Button">
      <SolidInterfacePlus3 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.399px] text-nowrap whitespace-pre">Activate Subjects</p>
    </div>
  );
}

function InstituteListItem4() {
  return (
    <div className="absolute h-[105px] left-[80px] rounded-[8px] top-[762px] w-[1008px]" data-name="Institute List Item">
      <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[1008px]">
        <div className="absolute bottom-[74px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[118px] not-italic text-[#232323] text-[20.414px] text-nowrap translate-y-[50%]">
          <p className="leading-[35.978px] whitespace-pre">English</p>
        </div>
        <div className="absolute left-[12px] rounded-[10px] size-[78px] top-[12px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
            <div className="absolute bg-white inset-0 rounded-[10px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <img alt="" className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%]" src={imgRectangle206} />
            </div>
          </div>
        </div>
        <Button10 />
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[39px] leading-[normal] left-[118px] not-italic text-[#232323] text-[12px] top-[49px] w-[663px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Group249() {
  return (
    <div className="absolute contents left-[80px] top-[318px]">
      <InstituteListItem />
      <InstituteListItem1 />
      <InstituteListItem2 />
      <InstituteListItem3 />
      <InstituteListItem4 />
    </div>
  );
}

function ArrowSliderLeft() {
  return (
    <div className="absolute left-[533px] size-[37.779px] top-[891px]" data-name="Arrow Slider Left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Arrow Slider Left">
          <circle cx="18.8893" cy="18.8893" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="18.8893" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p29279300} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowSliderRight() {
  return (
    <div className="absolute left-[596.22px] size-[37.779px] top-[891px]" data-name="Arrow Slider Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Arrow Slider Right">
          <circle cx="18.8893" cy="18.8893" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="18.8893" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p12f85d00} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ArrowButtons() {
  return (
    <div className="absolute contents left-[533px] top-[891px]" data-name="Arrow Buttons">
      <ArrowSliderLeft />
      <ArrowSliderRight />
    </div>
  );
}

export default function ActivateASubject() {
  return (
    <div className="bg-white overflow-clip relative rounded-[8px] size-full" data-name="Activate a Subject">
      <OutlineInterfaceCross />
      <Frame248 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[72px] not-italic text-[32px] text-black top-[88px] translate-y-[-50%] w-[484px]">
        <p className="leading-[42px]">Add Subjects</p>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[72px] not-italic text-[#232323] text-[20px] top-[115px] w-[607px]">Please not that adding more subjects to your institues will result into additional chargers. If you need help, please chat to our experts</p>
      <Button />
      <div className="absolute bg-[#face55] h-[4.368px] left-[72px] top-[290.1px] w-[165.982px]" />
      <Group249 />
      <ArrowButtons />
    </div>
  );
}