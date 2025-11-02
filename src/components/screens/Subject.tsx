import svgPaths from "../../imports/svg-2dnbiahxic";
import img from "figma:asset/e12f534198175966d657f7407655f59cc0dcdccc.png";
import imgLessonCover from "figma:asset/c27129e7e83db334f52d648439e03067aee2ebbd.png";
import img3 from "figma:asset/499b67bcf3496dbfc4b48e9db79662f6dd875256.png";
import { LessonCardWithoutHeader } from "../shared/LessonCardWithoutHeader";
import { Screen, NavigationData } from "../../hooks/useNavigation";

type SubjectProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function Subject({ onNavigate, data }: SubjectProps) {
  const subjectName = data?.subjectName || 'Science';
  return (
    <div className="bg-white h-[3438px] overflow-clip relative w-[1440px]" data-name="Subject">
      <div className="absolute bg-[#1f60d8] h-[684px] left-0 overflow-clip top-[80px] w-[1440px]" data-name="Subject Details">
        <div className="absolute contents left-[800px] top-[55px]" data-name="Cover & Progress">
          <div className="absolute contents left-[800px] top-[562px]" data-name="Subject Progress">
            <div className="absolute h-[24px] left-[800px] top-[605px] w-[480px]" data-name="Progress Bar">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 24">
                <g id="Progress Bar">
                  <g id="Rectangle 2">
                    <path d={svgPaths.p64be900} fill="white" fillOpacity="0.6" />
                  </g>
                  <rect fill="var(--fill-0, #FACE55)" height="24" id="Rectangle 1" rx="8" width="358" />
                </g>
              </svg>
            </div>
            <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[800px] top-[562px]" data-name="Progress Info">
              <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.5px] uppercase">
                <p className="leading-[32px] whitespace-pre">Learning progress</p>
              </div>
              <div className="relative shrink-0 size-[6px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                </svg>
              </div>
              <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.5px] uppercase">
                <p className="leading-[32px] whitespace-pre">75%</p>
              </div>
            </div>
          </div>
          <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="unsplash:Lvy_S3ELzIs">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
              <img alt="" className="absolute h-full left-[-13.23%] max-w-none top-[0.42%] w-[133.33%]" src={img3} />
            </div>
          </div>
        </div>
        <div className="absolute contents left-[160px] top-[139px]" data-name="Subject Info">
          <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[160px] not-italic text-[20px] text-white top-[225px] w-[572px]">
            <p className="mb-0">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Use diagrams and words to explore the very start of algebra, with puzzles and intuition guiding the way. </p>
            <p className="mb-0"> </p>
            <p>By the end of the course, you'll be able to simplify expressions and solve equations using methods that impart deep understanding rather than just procedures. </p>
          </div>
          <button 
            onClick={() => onNavigate('lesson', { 
              lessonId: 'space-01', 
              lessonName: 'Introduction to Space',
              lessonNumber: 1,
              totalLessons: 8,
              subjectName: subjectName
            })}
            className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[160px] px-[12px] py-[7px] rounded-[8px] top-[581px] cursor-pointer hover:bg-[#f9d977] transition-colors" 
            data-name="Button"
          >
            <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
              <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                  <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Continue Learning</p>
          </button>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[160px] not-italic text-[60px] text-white top-[155px] translate-y-[-50%] w-[484px]">
            <p className="leading-[32px]">{subjectName}</p>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('home')}
          className="absolute contents left-[160px] top-[45px] cursor-pointer group" 
          data-name="Back Nav"
        >
          <div className="absolute contents left-[160px] top-[45px]" data-name="Arrow Slider Left">
            <div className="absolute right-[1238px] size-[42px] top-[45px] group-hover:opacity-90 transition-opacity">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
              </svg>
            </div>
            <div className="absolute left-[161.71px] size-[38.571px] top-[46.71px]" data-name="Solid/Interface/Arrow left">
              <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                  <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[224px] not-italic text-[20px] text-white top-[66px] translate-y-[-50%] w-[243px]">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline group-hover:opacity-90 transition-opacity">Back to All Subjects</p>
          </div>
        </button>
      </div>
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
        <div className="absolute bg-white inset-0" data-name="Background" />
        <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
          <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
            <p className="leading-[21.568px]">Gopele</p>
          </div>
          <div className="absolute contents left-[78px] top-[19px]">
            <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                <g id="Frame 2">
                  <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                <g id="Group 12">
                  <g id="svgg">
                    <path clipRule="evenodd" d={svgPaths.p3bfb200} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
                  </g>
                  <rect fill="var(--fill-0, #1F60D8)" height="27.2021" id="Rectangle 1" width="28.9726" x="5.66272" y="5.20796" />
                  <path d={svgPaths.p1e47b880} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute inset-[15%_5.21%_15%_90.9%]" data-name="Profile">
          <img alt="" className="block max-w-none size-full" height="56" src={img} width="56" />
        </div>
        {/* Nav Links - Expanded for more space */}
        <div className="absolute contents" data-name="Nav Links">
          {/* Home - left: 40%, width: 8%, right: 52% */}
          <button 
            onClick={() => onNavigate('home')} 
            className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_52%_27.55%_40%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center cursor-pointer hover:text-[#333333] transition-colors"
          >
            Home
          </button>
          
          {/* Learn active indicator - 6% width, centered under Learn */}
          <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_43%_32.85%_51%] rounded-[8.478px]" />
          
          {/* Learn - left: 50%, width: 8%, right: 42% */}
          <button 
            onClick={() => onNavigate('subject', { subjectName: 'Space' })}
            className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_42%_27.55%_50%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center cursor-pointer"
          >
            Learn
          </button>
          
          {/* AI Mentor - left: 60%, width: 12%, right: 28% */}
          <button 
            onClick={() => onNavigate('aiMentor')} 
            className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_28%_27.55%_60%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center cursor-pointer hover:text-[#333333] transition-colors"
          >
            AI Mentor
          </button>
          
          {/* Dashboard - left: 74%, width: 15%, right: 11% */}
          <button
            onClick={() => onNavigate('dashboard')}
            className="absolute inset-[28%_11%_auto_74%] bg-[#1f60d8] hover:bg-[#1850b8] text-white px-4 py-2.5 rounded-lg transition-colors font-['Poppins:SemiBold',_sans-serif] text-[16px] flex items-center gap-2 justify-center"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Dashboard
          </button>
        </div>
      </div>
      <div className="absolute contents left-[162px] top-[844px]" data-name="Recommend Topics">
        <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[928px] w-[1120px]" data-name="Card Group">
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Introduction to Space"
            lessonDescription="Begin your journey into the cosmos. Learn about the scale of the universe and fundamental concepts of astronomy."
            lessonId="space-01"
            lessonNumber={1}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="European Exploration Strategy"
            lessonDescription="Learn about ESA's vision for space exploration and international partnerships."
            lessonId="space-02"
            lessonNumber={2}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[162px] not-italic text-[32px] text-black top-[881px] translate-y-[-50%] w-[484px]">
          <ol className="list-decimal" start="1">
            <li className="ms-[48px]">
              <span className="leading-[42px]">Space</span>
            </li>
          </ol>
        </div>
      </div>
      <div className="absolute contents left-[162px] top-[1520px]" data-name="Recommend Topics">
        <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[1604px] w-[1120px]" data-name="Card Group">
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Earth-Moon Architectures"
            lessonDescription="Explore cislunar space infrastructure, the Lunar Gateway, and sustainable lunar operations."
            lessonId="space-03"
            lessonNumber={3}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Mars and Beyond"
            lessonDescription="Discover interplanetary travel, Martian habitats, and missions to the outer solar system."
            lessonId="space-04"
            lessonNumber={4}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Deep Space Gateway"
            lessonDescription="Learn about the Gateway's modular design and its role as a waystation for deep space missions."
            lessonId="space-05"
            lessonNumber={5}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[162px] not-italic text-[32px] text-black top-[1557px] translate-y-[-50%] w-[484px]">
          <p className="leading-[42px]">2. Beyond Space</p>
        </div>
      </div>
      <div className="absolute contents left-[162px] top-[2196px]" data-name="Recommend Topics">
        <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[2827px] w-[1120px]" data-name="Card Group">
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Multiverse Theory"
            lessonDescription="Explore the fascinating concept that our universe might be just one of many in a vast multiverse."
            lessonId="space-09"
            onNavigate={onNavigate}
          />
        </div>
        <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[2280px] w-[1120px]" data-name="Card Group">
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Asteroid Mining Operations"
            lessonDescription="Understand mining technologies, economic models, and legal frameworks for space resources."
            lessonId="space-06"
            lessonNumber={6}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Interplanetary Transportation"
            lessonDescription="Explore propulsion systems, transfer orbits, and spacecraft design for deep space travel."
            lessonId="space-07"
            lessonNumber={7}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
          <LessonCardWithoutHeader 
            className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]"
            lessonName="Future Space Habitats"
            lessonDescription="Discover O'Neill Cylinders, Stanford Torus, and closed ecosystem designs for space colonies."
            lessonId="space-08"
            lessonNumber={8}
            subjectName={subjectName}
            onNavigate={onNavigate}
          />
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[162px] not-italic text-[32px] text-black top-[2233px] translate-y-[-50%] w-[484px]">
          <p className="leading-[42px]">3. Beyond Universe</p>
        </div>
      </div>
    </div>
  );
}
