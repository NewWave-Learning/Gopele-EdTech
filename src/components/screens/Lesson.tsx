import { useState } from 'react';
import svgPaths from "../../imports/svg-oidmgiaaz5";
import imgImage1 from "figma:asset/c27129e7e83db334f52d648439e03067aee2ebbd.png";
import imgUnsplash0OGEzyargo from "figma:asset/4b7738a9f5e7722cac899518a1624d44c9ca1363.png";
import { Screen, NavigationData } from "../../hooks/useNavigation";

type LessonProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function Lesson({ onNavigate, data }: LessonProps) {
  const lessonName = data?.lessonName || 'Introduction to Space';
  const lessonNumber = data?.lessonNumber || 1;
  const totalLessons = data?.totalLessons || 8;
  const subjectName = data?.subjectName || 'Science';
  
  // Track current step within the lesson (1-8)
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 8;
  
  const lessonNames = [
    'Introduction to Space',
    'European Exploration Strategy',
    'Earth-Moon Architectures',
    'Mars and Beyond',
    'Deep Space Gateway',
    'Asteroid Mining Operations',
    'Interplanetary Transportation',
    'Future Space Habitats'
  ];

  // MCQ states
  const [mcq1Answer, setMcq1Answer] = useState<string>('');
  const [mcq2Answer, setMcq2Answer] = useState<string>('everything');
  const [mcq3Answer, setMcq3Answer] = useState<string>('');
  const [showMcq1Hint, setShowMcq1Hint] = useState(false);
  const [showMcq3Hint, setShowMcq3Hint] = useState(false);
  
  const handlePrevious = () => {
    if (lessonNumber > 1) {
      const prevLessonNumber = lessonNumber - 1;
      onNavigate('lesson', {
        lessonNumber: prevLessonNumber,
        lessonName: lessonNames[prevLessonNumber - 1],
        lessonId: `space-${String(prevLessonNumber).padStart(2, '0')}`,
        subjectName,
        totalLessons
      });
    } else {
      // Go back to subject page if on first lesson
      onNavigate('subject', { subjectName });
    }
  };
  
  const handleNext = () => {
    if (lessonNumber >= totalLessons) {
      // Navigate to feedback/congratulations screen
      onNavigate('feedback', { subjectName, lessonNumber, totalLessons });
    } else {
      // Navigate to next lesson
      const nextLessonNumber = lessonNumber + 1;
      onNavigate('lesson', {
        lessonNumber: nextLessonNumber,
        lessonName: lessonNames[nextLessonNumber - 1],
        lessonId: `space-${String(nextLessonNumber).padStart(2, '0')}`,
        subjectName,
        totalLessons
      });
    }
  };

  return (
    <div className="bg-white relative size-full" data-name="Lesson">
      {/* Lesson Nav & Progress */}
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Lesson Nav & Progress">
        <div className="absolute bg-white inset-0" data-name="Background" />
        
        {/* Progress Pills */}
        <div className="absolute contents inset-[40%_27.78%_40%_26.74%]" data-name="Pill Lesson Progress">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((pill) => {
            // Calculate position from right to left
            const positions = [
              'inset-[40%_69.1%_40%_26.74%]',   // Pill 1
              'inset-[40%_63.19%_40%_32.64%]',  // Pill 2
              'inset-[40%_57.29%_40%_38.54%]',  // Pill 3
              'inset-[40%_51.39%_40%_44.44%]',  // Pill 4
              'inset-[40%_45.49%_40%_50.35%]',  // Pill 5
              'inset-[40%_39.58%_40%_56.25%]',  // Pill 6
              'inset-[40%_33.68%_40%_62.15%]',  // Pill 7
              'inset-[40%_27.78%_40%_68.06%]'   // Pill 8
            ];
            
            // Determine pill color based on lesson number
            let bgColor = 'bg-[rgba(35,35,35,0.2)]'; // Default: not completed
            if (pill < lessonNumber) {
              bgColor = 'bg-[#f4d35e]'; // Completed
            } else if (pill === lessonNumber) {
              bgColor = 'bg-[#1f60d8]'; // Current
            }
            
            const handlePillClick = () => {
              onNavigate('lesson', {
                lessonNumber: pill,
                lessonName: lessonNames[pill - 1],
                lessonId: `space-${String(pill).padStart(2, '0')}`,
                subjectName,
                totalLessons
              });
            };
            
            return (
              <button 
                key={pill} 
                onClick={handlePillClick}
                className={`absolute ${bgColor} ${positions[pill - 1]} rounded-[12px] cursor-pointer hover:opacity-80 transition-opacity active:scale-95`}
                aria-label={`Go to lesson ${pill}: ${lessonNames[pill - 1]}`}
              />
            );
          })}
        </div>
        
        {/* Previous Button */}
        <button onClick={handlePrevious} className="absolute flex items-center gap-[22px] left-[72px] top-[19px] cursor-pointer hover:opacity-80 transition-opacity" data-name="Previous">
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
          <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[20px] text-black text-nowrap">
            <p className="leading-[26px] whitespace-pre">Previous</p>
          </div>
        </button>
        
        {/* Next Button */}
        <button onClick={handleNext} className="absolute content-stretch flex gap-[22px] items-center left-[1243px] top-[19px] cursor-pointer hover:opacity-80 transition-opacity" data-name="Next">
          <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
            <p className="leading-[26px] whitespace-pre">Next</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
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
            </div>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[32px] left-[359px] not-italic text-[#232323] text-[40px] top-[160px] w-[572px]">What is Space?</p>
      
      <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[360px] not-italic text-[#232323] text-[20px] top-[229px] w-[720px]">
        <p className="mb-0">Space is the vast, seemingly infinite expanse that exists beyond Earth and its atmosphere. It begins approximately 100 kilometers above Earth's surface at the Kármán line, where the atmosphere becomes too thin to support conventional aircraft flight.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Unlike the air-filled environment we experience on Earth, space is an almost perfect vacuum. This means there are very few particles of matter in any given volume. The lack of atmosphere creates extreme conditions: temperatures can range from extremely hot in direct sunlight to incredibly cold in shadow, and there is no air to carry sound waves.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Space is filled with celestial objects including stars, planets, moons, asteroids, comets, and galaxies. Between these objects lies the interstellar medium, consisting of gas and dust that fills the space between star systems.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Understanding space is crucial for humanity's future. It helps us comprehend our place in the universe, develop new technologies, and potentially find resources and new homes beyond Earth. From GPS satellites to weather monitoring, space exploration has already transformed life on our planet.</p>
      </div>

      {/* Activity: MCQ 1 */}
      <div className="absolute bg-[#1f60d8] h-[401px] left-[360px] overflow-clip rounded-[8px] top-[809px] w-[720px]" data-name="Activity: MCQ">
        {/* MCQ Logo */}
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
        
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">What is Space?</p>
        
        {/* Radio button group */}
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[104px]" data-name="Radio button group">
          <div onClick={() => setMcq1Answer('unoccupied')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq1Answer === 'unoccupied' ? 'border-[#face55] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">The region beyond Earth's atmosphere</p>
          </div>
          <div onClick={() => setMcq1Answer('fames')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq1Answer === 'fames' ? 'border-[#face55] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Only the area between planets</p>
          </div>
          <div onClick={() => setMcq1Answer('fusce')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq1Answer === 'fusce' ? 'border-[#face55] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">The sky during nighttime</p>
          </div>
          <div onClick={() => setMcq1Answer('velit')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq1Answer === 'velit' ? 'border-[#face55] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Complete emptiness and void</p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="absolute contents left-[35px] top-[325px]" data-name="Buttons">
          <button onClick={() => setShowMcq1Hint(!showMcq1Hint)} className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[259px] px-[12px] py-[7px] rounded-[8px] top-[325px] cursor-pointer hover:bg-gray-100 transition-colors" data-name="Button">
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
            <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Show Hint</p>
            </div>
          </button>
          <button className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[35px] px-[12px] py-[7px] rounded-[8px] top-[325px] cursor-pointer hover:bg-[#f9d977] transition-colors" data-name="Button">
            <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Checked-box">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <g id="Solid/Status/Checked-box">
                  <path d={svgPaths.p8566b00} fill="var(--fill-0, #232323)" id="Icon" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
          </button>
        </div>
      </div>

      {/* Activity: MCQ Answered - What is Universe */}
      <div className="absolute bg-[#1f60d8] h-[549px] left-[360px] overflow-clip rounded-[8px] top-[1250px] w-[720px]" data-name="Activity: MCQ - Answered">
        {/* MCQ Logo */}
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
        
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">What is Universe?</p>
        
        {/* Radio button group */}
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[104px]" data-name="Radio button group">
          <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Everything</p>
          </div>
          <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">I dont know</p>
          </div>
          <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">None of the above</p>
          </div>
          <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">All of the above</p>
          </div>
        </div>
        
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[54px] justify-center leading-[0] left-[41px] not-italic text-[#f4d35e] text-[24px] top-[332px] translate-y-[-50%] w-[329px]">
          <p className="leading-[30px] whitespace-pre-wrap">{`Correct Answer  🎉🎉🎉`}</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[100px] not-italic text-[#f4d35e] text-[20px] text-nowrap top-[406px] translate-y-[-50%]">
          <p className="leading-[30px] whitespace-pre">Explanation</p>
        </div>
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[100px] not-italic text-[16px] text-white top-[423px] w-[558px] whitespace-pre-wrap">The universe encompasses everything that exists—all matter, energy, space, and time. This includes all galaxies, stars, planets, and even the space between them. By definition, nothing can exist outside the universe because the universe is the totality of existence itself.</p>
        <div className="absolute h-[131px] left-[35px] rounded-[8px] top-[379px] w-[650px]">
          <div aria-hidden="true" className="absolute border border-[#f4d35e] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <div className="absolute left-[56px] size-[32px] top-[391px]" data-name="Solid/Status/Pin">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Solid/Status/Pin">
              <path d={svgPaths.p52cbd80} fill="var(--fill-0, #F4D35E)" id="Icon" />
            </g>
          </svg>
        </div>
      </div>

      {/* Activity: MCQ 2 - Thinking Prompt */}
      <div className="absolute bg-[#1f60d8] h-[217px] left-[360px] overflow-clip rounded-[8px] top-[1839px] w-[720px]" data-name="Activity: MCQ">
        {/* MCQ Logo with lightbulb */}
        <div className="absolute contents left-[35px] top-[40px]" data-name="MCQ Logo">
          <div className="absolute right-[636px] size-[49px] top-[40px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
              <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
            </svg>
          </div>
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
        </div>
        
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[38px] left-[110px] not-italic text-[28px] text-white top-[26px] w-[572px]">How many stars might there be in the observable universe?</p>
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[110px] not-italic text-[20px] text-white top-[125px] w-[572px]">Take your time to think about this incredible number. Scientists estimate there are roughly 200 billion trillion stars—that's more stars than grains of sand on all Earth's beaches!</p>
      </div>

      {/* Activity: MCQ 3 - Calculate Frequency pattern */}
      <div className="absolute bg-[#1f60d8] h-[567px] left-[360px] overflow-clip rounded-[8px] top-[2096px] w-[720px]" data-name="Activity: MCQ">
        {/* MCQ Logo */}
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
        
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">Where does space begin?</p>
        
        <div className="absolute h-[123px] left-[110px] rounded-[8px] top-[88px] w-[545px]" data-name="image 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
        </div>
        
        {/* Radio button group */}
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[269px]" data-name="Radio button group">
          <div onClick={() => setMcq3Answer('100km')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq3Answer === '100km' ? 'border-[#f4d35e] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">100 kilometers above Earth (Kármán line)</p>
          </div>
          <div onClick={() => setMcq3Answer('clouds')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq3Answer === 'clouds' ? 'border-[#f4d35e] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Above the clouds</p>
          </div>
          <div onClick={() => setMcq3Answer('moon')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq3Answer === 'moon' ? 'border-[#f4d35e] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">At the distance to the Moon</p>
          </div>
          <div onClick={() => setMcq3Answer('gradual')} className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" data-name="Radio with label">
            <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
              <div aria-hidden="true" className={`absolute ${mcq3Answer === 'gradual' ? 'border-[#f4d35e] border-[6px]' : 'border-[#232323] border-2'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">There is no clear boundary</p>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="absolute bottom-[28px] contents left-[35px]" data-name="Buttons">
          <button onClick={() => setShowMcq3Hint(!showMcq3Hint)} className="absolute bg-white bottom-[28px] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[259px] px-[12px] py-[7px] rounded-[8px] cursor-pointer hover:bg-gray-100 transition-colors" data-name="Button">
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
            <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Show Hint</p>
            </div>
          </button>
          <button className="absolute bg-[#f4d35e] bottom-[28px] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[35px] px-[12px] py-[7px] rounded-[8px] cursor-pointer hover:bg-[#f9d977] transition-colors" data-name="Button">
            <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Checked-box">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                <g id="Solid/Status/Checked-box">
                  <path d={svgPaths.p8566b00} fill="var(--fill-0, #232323)" id="Icon" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
          </button>
        </div>
      </div>

      {/* Image with Caption */}
      <div className="absolute contents left-[357px] top-[2703px]" data-name="Image with Caption">
        <div className="absolute h-[457px] left-[357px] rounded-[8px] top-[2703px] w-[723px]" data-name="unsplash:0o_GEzyargo">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
            <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplash0OGEzyargo} />
          </div>
        </div>
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[24px] leading-[26px] left-[718.5px] not-italic text-[#9b9b9b] text-[14px] text-center top-[3165px] translate-x-[-50%] w-[251px]">A cluster of stars. Source: Unsplash</p>
      </div>

      {/* What Space is not section */}
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[32px] left-[357px] not-italic text-[#232323] text-[40px] top-[3256px] w-[572px]">What Space is not?</p>
      
      <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[335px] not-italic text-[#232323] text-[20px] top-[3298px] w-[720px]">
        <p className="mb-0">Space is not empty nothingness. While it's often called a vacuum, space actually contains cosmic radiation, electromagnetic fields, and sparse particles of matter. Even in the darkest voids between galaxies, there are atoms, photons, and mysterious dark matter.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Space is also not infinite from our perspective—we can only observe the "observable universe," which extends about 46.5 billion light-years in all directions. Beyond that lies more space we cannot see because light from those regions hasn't had time to reach us since the Big Bang.</p>
      </div>

      {/* Bottom Buttons */}
      <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[569px] top-[3676px]" data-name="Buttons">
        <button onClick={() => onNavigate('home')} className="bg-white box-border content-stretch flex gap-[7px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" data-name="Button">
          <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Home">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Solid/General/Home">
                <path d={svgPaths.p2eb94000} fill="var(--fill-0, #232323)" id="Icon" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Exit to Home</p>
          </div>
        </button>
        <button onClick={handleNext} className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f9d977] transition-colors" data-name="Button">
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Next</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
                  <g id="Solid/Interface/Arrow left">
                    <path d={svgPaths.p74d1880} fill="var(--fill-0, #232323)" id="Icon" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
