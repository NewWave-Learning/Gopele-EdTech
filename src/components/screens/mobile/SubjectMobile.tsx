import svgPaths from "../../../imports/svg-2dnbiahxic";
import img3 from "figma:asset/d2939bee28d7846c5bf1ee96be695d3f120827fb.png";
import { Screen, NavigationData } from "../../../hooks/useNavigation";

type SubjectMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function SubjectMobile({ onNavigate, data }: SubjectMobileProps) {
  return (
    <div className="bg-white h-[1024px] overflow-clip relative w-[375px]" data-name="Subject - Mobile">
      {/* Nav Bar */}
      <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
        <div className="absolute contents inset-[26.25%_61.25%_26.25%_4.8%]">
          <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.6%_61.25%_38.67%_17.25%] justify-center leading-[0] not-italic text-[#232323] text-[22.395px]">
            <p className="leading-[18.187px]">Gopele</p>
          </div>
          <div className="absolute contents inset-[26.25%_85.08%_26.25%_4.8%]">
            <div className="absolute inset-[26.25%_85.08%_26.25%_4.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
                <g id="Frame 2">
                  <path d={svgPaths.p23915500} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[27.27%_85.83%_32.13%_6.38%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
                <g id="Group 12">
                  <g id="svgg">
                    <path clipRule="evenodd" d={svgPaths.p3cb2d780} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
                  </g>
                  <rect fill="var(--fill-0, #1F60D8)" height="22.9509" id="Rectangle 1" width="24.436" x="4.77539" y="4.39062" />
                  <path d={svgPaths.p18bcec00} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[18.75%_4.8%_18.75%_87.73%]" data-name="Oval">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 51">
            <circle cx="25.5" cy="25.5" fill="var(--fill-0, #D9D9D9)" id="Oval" r="25.5" />
          </svg>
        </div>
      </div>

      {/* Subject Hero Section */}
      <div className="absolute bg-[#1f60d8] h-[480px] left-0 overflow-clip top-[80px] w-[375px]" data-name="Subject Hero">
        {/* Back Navigation */}
        <button 
          onClick={() => onNavigate('home')}
          className="absolute contents left-[18px] top-[24px] cursor-pointer group" 
          data-name="Back Nav"
        >
          <div className="absolute contents left-[18px] top-[24px]" data-name="Arrow Slider Left">
            <div className="absolute size-[36px] left-[18px] top-[24px] group-hover:opacity-90 transition-opacity">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="18" />
              </svg>
            </div>
            <div className="absolute left-[19.71px] size-[33.143px] top-[25.43px]" data-name="Solid/Interface/Arrow left">
              <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                  <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[26px] justify-center leading-[0] left-[76px] not-italic text-[16px] text-white top-[37px] translate-y-[-50%]">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[22px] underline group-hover:opacity-90 transition-opacity">Back to All Subjects</p>
          </div>
        </button>

        {/* Subject Image */}
        <div className="absolute h-[220px] left-[18px] rounded-[12px] top-[84px] w-[339px]" data-name="Subject Image">
          <div className="absolute inset-0 overflow-hidden rounded-[12px]">
            <img alt="" className="absolute h-full left-[-13.23%] max-w-none top-[0.42%] w-[133.33%]" src={img3} />
          </div>
        </div>

        {/* Subject Info */}
        <div className="absolute contents left-[18px] top-[324px]" data-name="Subject Info">
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[18px] not-italic text-[48px] text-white top-[324px] w-[339px]">
            <p className="leading-[32px]">Science</p>
          </div>
          <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[24px] left-[18px] not-italic text-[16px] text-white top-[380px] w-[339px]">
            In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving.
          </p>
        </div>

        {/* Continue Learning Button */}
        <button 
          onClick={() => onNavigate('lesson', { 
            lessonId: 'space-01', 
            lessonName: 'Introduction to Space',
            lessonNumber: 1,
            totalLessons: 8,
            subjectName: 'Science'
          })}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[18px] px-[16px] py-[8px] rounded-[8px] top-[500px] cursor-pointer hover:bg-[#f9d977] transition-colors" 
          data-name="Button"
        >
          <div className="relative shrink-0 size-[32px]" data-name="Solid/Media/Play">
            <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
              </svg>
            </div>
          </div>
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Continue Learning</p>
        </button>
      </div>

      {/* Lessons Section */}
      <div className="absolute contents left-[18px] top-[588px]" data-name="Lessons Section">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[48px] justify-center leading-[0] left-[18px] not-italic text-[28px] text-black top-[608px] translate-y-[-50%] w-[339px]">
          <p className="leading-[36px]">Lessons</p>
        </div>

        {/* Lesson Cards - Could add more lesson cards here */}
        <div className="absolute bg-[#f5f5f5] h-[140px] left-[18px] rounded-[8px] top-[648px] w-[339px]" data-name="Lesson Item">
          <div className="absolute contents left-[16px] top-[16px]">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[16px] not-italic text-[20px] text-[#232323] top-[32px] translate-y-[-50%] w-[280px]">
              <p className="leading-[26px]">Lesson 1: Introduction</p>
            </div>
            <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[22px] left-[16px] not-italic text-[14px] text-[#666666] top-[54px] w-[280px]">
              Get started with the basics of science
            </p>
            <button 
              onClick={() => onNavigate('lessonIntro', { lessonId: 'space-01', lessonName: 'Lesson 1: Introduction' })}
              className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[6px] h-[36px] items-center justify-center left-[16px] px-[12px] py-[6px] rounded-[6px] top-[92px] cursor-pointer hover:bg-[#1852ba] transition-colors"
            >
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Start</p>
            </button>
          </div>
        </div>

        <div className="absolute bg-[#f5f5f5] h-[140px] left-[18px] rounded-[8px] top-[804px] w-[339px]" data-name="Lesson Item">
          <div className="absolute contents left-[16px] top-[16px]">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[16px] not-italic text-[20px] text-[#232323] top-[32px] translate-y-[-50%] w-[280px]">
              <p className="leading-[26px]">Lesson 2: Advanced Topics</p>
            </div>
            <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[22px] left-[16px] not-italic text-[14px] text-[#666666] top-[54px] w-[280px]">
              Dive deeper into scientific concepts
            </p>
            <div className="absolute box-border content-stretch flex gap-[6px] h-[36px] items-center justify-center left-[16px] px-[12px] py-[6px] rounded-[6px] top-[92px]">
              <div className="relative shrink-0 size-[20px]" data-name="Lock Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="bx:bxs-lock-alt">
                    <path d={svgPaths.p1fefb200} fill="var(--fill-0, #999999)" id="Vector" />
                  </g>
                </svg>
              </div>
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[#999999] text-nowrap whitespace-pre">Locked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
