import svgPaths from "./svg-pgfnuw5tjm";
import imgImage1 from "figma:asset/0ee158329f6dc281292ae5982f96926aedd61c1c.png";
import imgUnsplash0OGEzyargo from "figma:asset/4b7738a9f5e7722cac899518a1624d44c9ca1363.png";

function PillLessonProgress() {
  return (
    <div className="absolute contents inset-[40%_27.78%_40%_26.74%]" data-name="Pill Lesson Progress">
      <div className="absolute bg-[#f4d35e] inset-[40%_69.1%_40%_26.74%] rounded-[12px]" />
      <div className="absolute bg-[#f4d35e] inset-[40%_63.19%_40%_32.64%] rounded-[12px]" />
      <div className="absolute bg-[#f4d35e] inset-[40%_57.29%_40%_38.54%] rounded-[12px]" />
      <div className="absolute bg-[#f4d35e] inset-[40%_51.39%_40%_44.44%] rounded-[12px]" />
      <div className="absolute bg-[#1f60d8] inset-[40%_45.49%_40%_50.35%] rounded-[12px]" />
      <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_39.58%_40%_56.25%] rounded-[12px]" />
      <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_33.68%_40%_62.15%] rounded-[12px]" />
      <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_27.78%_40%_68.06%] rounded-[12px]" />
    </div>
  );
}

function ArrowSliderLeft() {
  return (
    <div className="absolute left-[72px] size-[42px] top-[19px]" data-name="Arrow Slider Left">
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

function Previous() {
  return (
    <div className="absolute contents left-[72px] top-[19px]" data-name="Previous">
      <ArrowSliderLeft />
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[136px] not-italic text-[20px] text-black text-nowrap top-[40px] translate-y-[-50%]">
        <p className="leading-[26px] whitespace-pre">Previous</p>
      </div>
    </div>
  );
}

function ArrowSliderLeft1() {
  return (
    <div className="relative size-[42px]" data-name="Arrow Slider Left">
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

function Next() {
  return (
    <div className="absolute content-stretch flex gap-[22px] items-center left-[1243px] top-[19px]" data-name="Next">
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="leading-[26px] whitespace-pre">Next</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <ArrowSliderLeft1 />
        </div>
      </div>
    </div>
  );
}

function LessonNavProgress() {
  return (
    <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Lesson Nav & Progress">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <PillLessonProgress />
      <Previous />
      <Next />
    </div>
  );
}

function McqLogo() {
  return (
    <div className="absolute contents left-[35px] top-[21px]" data-name="MCQ Logo">
      <div className="absolute right-[636px] size-[49px] top-[21px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="24.5" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[34px] justify-center leading-[0] left-[59.5px] not-italic text-[#232323] text-[28px] text-center top-[46px] translate-x-[-50%] translate-y-[-50%] w-[23px]">
        <p className="leading-[32px]">?</p>
      </div>
    </div>
  );
}

function Radio() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-[#face55] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Unoccupid space beyond earth</p>
    </div>
  );
}

function Radio1() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel1() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio1 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Fames varius semper est vestibulum</p>
    </div>
  );
}

function Radio2() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel2() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio2 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Fusce donec orci semper cras</p>
    </div>
  );
}

function Radio3() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel3() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio3 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Velit tempus quam ac nec</p>
    </div>
  );
}

function RadioButtonGroup() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[104px]" data-name="Radio button group">
      <RadioWithLabel />
      <RadioWithLabel1 />
      <RadioWithLabel2 />
      <RadioWithLabel3 />
    </div>
  );
}

function SolidStatusLightbulb() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Lightbulb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Status/Lightbulb">
          <g id="Icon">
            <path d={svgPaths.p78e5d80} fill="#232323" />
            <path d={svgPaths.p2a7b5200} fill="#232323" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[259px] px-[12px] py-[7px] rounded-[8px] top-[325px]" data-name="Button">
      <SolidStatusLightbulb />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Show Hint</p>
      </div>
    </div>
  );
}

function SolidStatusCheckedBox() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Checked-box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Status/Checked-box">
          <path d={svgPaths.p8566b00} fill="var(--fill-0, #232323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[35px] px-[12px] py-[7px] rounded-[8px] top-[325px]" data-name="Button">
      <SolidStatusCheckedBox />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute contents left-[35px] top-[325px]" data-name="Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

function ActivityMcq() {
  return (
    <div className="absolute bg-[#1f60d8] h-[401px] left-[360px] overflow-clip rounded-[8px] top-[809px] w-[720px]" data-name="Activity: MCQ">
      <McqLogo />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">What is Space?</p>
      <RadioButtonGroup />
      <Buttons />
    </div>
  );
}

function SolidStatusLightbulb1() {
  return (
    <div className="absolute left-[48px] size-[24px] top-[52px]" data-name="Solid/Status/Lightbulb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Status/Lightbulb">
          <g id="Icon">
            <path d={svgPaths.p497fb00} fill="#232323" />
            <path d={svgPaths.p3a639800} fill="#232323" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function McqLogo1() {
  return (
    <div className="absolute contents left-[35px] top-[40px]" data-name="MCQ Logo">
      <div className="absolute right-[636px] size-[49px] top-[40px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
        </svg>
      </div>
      <SolidStatusLightbulb1 />
    </div>
  );
}

function ActivityMcq1() {
  return (
    <div className="absolute bg-[#1f60d8] h-[217px] left-[360px] overflow-clip rounded-[8px] top-[1839px] w-[720px]" data-name="Activity: MCQ">
      <McqLogo1 />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[38px] left-[110px] not-italic text-[28px] text-white top-[26px] w-[572px]">How many stars there might be in the universe?</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[110px] not-italic text-[20px] text-white top-[125px] w-[572px]">Take your time to think about how many stars there might be in the sky. It doesnt has to be accurate.</p>
    </div>
  );
}

function McqLogo2() {
  return (
    <div className="absolute contents left-[35px] top-[21px]" data-name="MCQ Logo">
      <div className="absolute right-[636px] size-[49px] top-[21px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[34px] justify-center leading-[0] left-[59.5px] not-italic text-[#232323] text-[28px] text-center top-[46px] translate-x-[-50%] translate-y-[-50%] w-[23px]">
        <p className="leading-[32px]">?</p>
      </div>
    </div>
  );
}

function Radio4() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel4() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio4 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Everything</p>
    </div>
  );
}

function Radio5() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel5() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio5 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">I dont know</p>
    </div>
  );
}

function Radio6() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel6() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio6 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">None of the above</p>
    </div>
  );
}

function Radio7() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel7() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio7 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">All of the above</p>
    </div>
  );
}

function RadioButtonGroup1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[104px]" data-name="Radio button group">
      <RadioWithLabel4 />
      <RadioWithLabel5 />
      <RadioWithLabel6 />
      <RadioWithLabel7 />
    </div>
  );
}

function SolidStatusPin() {
  return (
    <div className="absolute left-[56px] size-[32px] top-[391px]" data-name="Solid/Status/Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Solid/Status/Pin">
          <path d={svgPaths.p52cbd80} fill="var(--fill-0, #F4D35E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ActivityMcqAnswered() {
  return (
    <div className="absolute bg-[#1f60d8] h-[549px] left-[360px] overflow-clip rounded-[8px] top-[1250px] w-[720px]" data-name="Activity: MCQ - Answered">
      <McqLogo2 />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">What is Universe?</p>
      <RadioButtonGroup1 />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[54px] justify-center leading-[0] left-[41px] not-italic text-[#f4d35e] text-[24px] top-[332px] translate-y-[-50%] w-[329px]">
        <p className="leading-[30px] whitespace-pre-wrap">{`Correct Answer  🎉🎉🎉`}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[100px] not-italic text-[#f4d35e] text-[20px] text-nowrap top-[406px] translate-y-[-50%]">
        <p className="leading-[30px] whitespace-pre">Explaination</p>
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[100px] not-italic text-[16px] text-white top-[423px] w-[558px] whitespace-pre-wrap">{`Because universe is everything  & everything is universe expecept you are a Marvel fan where they usually have a lot of universes regularly colliding with each other.`}</p>
      <div className="absolute h-[131px] left-[35px] rounded-[8px] top-[379px] w-[650px]">
        <div aria-hidden="true" className="absolute border border-[#f4d35e] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <SolidStatusPin />
    </div>
  );
}

function McqLogo3() {
  return (
    <div className="absolute contents left-[35px] top-[21px]" data-name="MCQ Logo">
      <div className="absolute right-[636px] size-[49px] top-[21px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[34px] justify-center leading-[0] left-[59.5px] not-italic text-[#232323] text-[28px] text-center top-[46px] translate-x-[-50%] translate-y-[-50%] w-[23px]">
        <p className="leading-[32px]">?</p>
      </div>
    </div>
  );
}

function SolidStatusLightbulb2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Lightbulb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Status/Lightbulb">
          <g id="Icon">
            <path d={svgPaths.p78e5d80} fill="#232323" />
            <path d={svgPaths.p2a7b5200} fill="#232323" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white bottom-[28px] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[259px] px-[12px] py-[7px] rounded-[8px]" data-name="Button">
      <SolidStatusLightbulb2 />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Show Hint</p>
      </div>
    </div>
  );
}

function SolidStatusCheckedBox1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Checked-box">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Solid/Status/Checked-box">
          <path d={svgPaths.p8566b00} fill="var(--fill-0, #232323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f4d35e] bottom-[28px] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[35px] px-[12px] py-[7px] rounded-[8px]" data-name="Button">
      <SolidStatusCheckedBox1 />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="absolute bottom-[28px] contents left-[35px]" data-name="Buttons">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Radio8() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel8() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio8 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">2+2</p>
    </div>
  );
}

function Radio9() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel9() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio9 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">I am bad at maths</p>
    </div>
  );
}

function Radio10() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel10() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio10 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">85*7+4-8/51+95+95*5+2+2+</p>
    </div>
  );
}

function Radio11() {
  return (
    <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
      <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function RadioWithLabel11() {
  return (
    <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
      <Radio11 />
      <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">All of the above</p>
    </div>
  );
}

function RadioButtonGroup2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[269px]" data-name="Radio button group">
      <RadioWithLabel8 />
      <RadioWithLabel9 />
      <RadioWithLabel10 />
      <RadioWithLabel11 />
    </div>
  );
}

function ActivityMcq2() {
  return (
    <div className="absolute bg-[#1f60d8] h-[567px] left-[360px] overflow-clip rounded-[8px] top-[2096px] w-[720px]" data-name="Activity: MCQ">
      <McqLogo3 />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">Calculate Frequency pattern</p>
      <div className="absolute h-[123px] left-[110px] rounded-[8px] top-[88px] w-[545px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
      </div>
      <Buttons1 />
      <RadioButtonGroup2 />
    </div>
  );
}

function Sticky() {
  return (
    <div className="bg-[#ffd600] box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full" data-name="Sticky">
      <p className="basis-0 font-['Comic_Sans_MS:Regular',_sans-serif] grow h-full leading-[28px] min-h-px min-w-px not-italic opacity-90 relative shrink-0 text-[24px] text-black">Alex, over here I’ve designed multiple activity components to cover major layout use cases.</p>
    </div>
  );
}

function Sticky1() {
  return (
    <div className="absolute inset-[1320px_1121px_2238px_47px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_8px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" data-name="Sticky">
      <div className="absolute flex inset-[-11.336px] items-center justify-center">
        <div className="flex-none rotate-[355deg] size-[272px]">
          <Sticky />
        </div>
      </div>
    </div>
  );
}

function ImageWithCaption() {
  return (
    <div className="absolute contents left-[357px] top-[2703px]" data-name="Image with Caption">
      <div className="absolute h-[457px] left-[357px] rounded-[8px] top-[2703px] w-[723px]" data-name="unsplash:0o_GEzyargo">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplash0OGEzyargo} />
        </div>
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] h-[24px] leading-[26px] left-[718.5px] not-italic text-[#9b9b9b] text-[14px] text-center top-[3165px] translate-x-[-50%] w-[251px]">A cluster of stars. Source: Unsplash</p>
    </div>
  );
}

function SolidGeneralHome() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Solid/General/Home">
          <path d={svgPaths.p2eb94000} fill="var(--fill-0, #232323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[7px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <SolidGeneralHome />
      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Exit to Home</p>
      </div>
    </div>
  );
}

function SolidInterfaceArrowLeft2() {
  return (
    <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="Solid/Interface/Arrow left">
          <path d={svgPaths.p74d1880} fill="var(--fill-0, #232323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Next</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <SolidInterfaceArrowLeft2 />
        </div>
      </div>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[569px] top-[3676px]" data-name="Buttons">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Sticky2() {
  return (
    <div className="bg-[#ff634e] box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full" data-name="Sticky">
      <p className="basis-0 font-['Comic_Sans_MS:Regular',_sans-serif] grow h-full leading-[28px] min-h-px min-w-px not-italic opacity-90 relative shrink-0 text-[24px] text-black">Folks I had a few suggestions like what if we add some accessibility controls like text size, multiple fonts, text to speech, dark mode, etc</p>
    </div>
  );
}

function Sticky3() {
  return (
    <div className="absolute inset-[253px_32px_3279px_1124px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_8px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" data-name="Sticky">
      <div className="absolute flex inset-[-11.336px] items-center justify-center">
        <div className="flex-none h-[295.904px] rotate-[354.773deg] skew-x-[359.556deg] w-[283.177px]">
          <Sticky2 />
        </div>
      </div>
    </div>
  );
}

export default function Lesson() {
  return (
    <div className="bg-white relative size-full" data-name="Lesson">
      <LessonNavProgress />
      <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[360px] not-italic text-[#232323] text-[20px] top-[229px] w-[720px]">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Ultrices ut sit sagittis, nulla id tortor, morbi et. Velit tempus quam ac nec et suscipit nam sed lacus. Dolor eu etiam mattis eget. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et. Ultrices ut sit sagittis, nulla id tortor, morbi et. Velit tempus quam ac nec et suscipit nam sed lacus. Dolor eu etiam mattis eget. `}</p>
      </div>
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[32px] left-[359px] not-italic text-[#232323] text-[40px] top-[160px] w-[572px]">What is Space?</p>
      <ActivityMcq />
      <ActivityMcq1 />
      <ActivityMcqAnswered />
      <ActivityMcq2 />
      <Sticky1 />
      <ImageWithCaption />
      <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[335px] not-italic text-[#232323] text-[20px] top-[3298px] w-[720px]">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et</p>
      </div>
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[32px] left-[357px] not-italic text-[#232323] text-[40px] top-[3256px] w-[572px]">What Space is not?</p>
      <Buttons2 />
      <Sticky3 />
    </div>
  );
}