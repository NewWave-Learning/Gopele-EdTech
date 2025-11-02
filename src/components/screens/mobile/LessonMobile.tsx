import { useState } from 'react';
import svgPaths from "../../../imports/svg-s4cc7f6eg2";
import imgUnsplash0OGEzyargo from "figma:asset/4b7738a9f5e7722cac899518a1624d44c9ca1363.png";
import { Screen, NavigationData } from '../../../hooks/useNavigation';

type LessonMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function LessonMobile({ onNavigate, data }: LessonMobileProps) {
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
  const [mcq2Answer, setMcq2Answer] = useState<string>('unoccupied');
  const [showMcq1Hint, setShowMcq1Hint] = useState(false);
  const [showMcq2Feedback, setShowMcq2Feedback] = useState(false);
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (lessonNumber > 1) {
      // Navigate to previous lesson when on first step
      const prevLessonNumber = lessonNumber - 1;
      onNavigate('lesson', {
        lessonNumber: prevLessonNumber,
        lessonName: lessonNames[prevLessonNumber - 1],
        lessonId: `space-${String(prevLessonNumber).padStart(2, '0')}`,
        subjectName,
        totalLessons,
      });
    } else {
      // Go back to subject page if on first lesson and first step
      onNavigate('subject', { subjectName });
    }
  };
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCompleteLesson();
    }
  };
  
  const handleCompleteLesson = () => {
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
        totalLessons,
      });
    }
  };

  const handlePillClick = (pill: number) => {
    if (pill <= lessonNumber) {
      onNavigate('lesson', {
        lessonNumber: pill,
        lessonName: lessonNames[pill - 1],
        lessonId: `space-${String(pill).padStart(2, '0')}`,
        subjectName,
        totalLessons,
      });
    }
  };

  const handleSubmitMcq1 = () => {
    if (mcq1Answer === 'unoccupied') {
      // Correct answer
      setShowMcq1Hint(false);
      handleNext();
    } else {
      setShowMcq1Hint(true);
    }
  };

  const handleSubmitMcq2 = () => {
    if (mcq2Answer === 'unoccupied') {
      setShowMcq2Feedback(true);
    }
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-20" data-name="Lesson - Mobile">
      {/* Nav Bar */}
      <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
        {/* Previous */}
        <button 
          onClick={handlePrevious}
          className="absolute contents left-[17px] top-[19px] cursor-pointer hover:opacity-80 transition-opacity" 
          data-name="Previous"
        >
          <div className="absolute right-[316px] size-[42px] top-[19px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
            </svg>
          </div>
          <div className="absolute left-[18.71px] size-[38.571px] top-[20.71px]" data-name="Solid/Interface/Arrow left">
            <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
              </svg>
            </div>
          </div>
        </button>

        {/* Next */}
        <button
          onClick={handleNext}
          className="absolute content-stretch flex gap-[22px] items-center left-[316px] top-[19px] cursor-pointer hover:opacity-80 transition-opacity" 
          data-name="Next"
        >
          <div className="flex items-center justify-center leading-[0] relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Arrow Slider Left">
                <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[42px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                  </svg>
                </div>
                <div className="[grid-area:1_/_1] ml-[1.714px] mt-[1.714px] relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Pill Lesson Progress */}
        <div className="absolute contents inset-[40%_21.6%_40%_21.87%]" data-name="Pill Lesson Progress">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((pill) => {
            const isCompleted = pill < lessonNumber;
            const isCurrent = pill === lessonNumber;
            const isUpcoming = pill > lessonNumber;
            
            let bgColor = 'bg-[rgba(35,35,35,0.2)]'; // upcoming
            if (isCompleted) bgColor = 'bg-[#f4d35e]';
            if (isCurrent) bgColor = 'bg-[#1f60d8]';
            
            const leftPercentages = [73.87, 66.4, 58.93, 51.47, 44, 36.53, 29.07, 21.6];
            const rightPercentages = [21.87, 29.33, 36.8, 44.27, 51.73, 59.2, 66.67, 74.13];
            
            return (
              <button
                key={pill}
                onClick={() => handlePillClick(pill)}
                className={`absolute ${bgColor} rounded-[12px] cursor-pointer hover:opacity-80 transition-all`}
                style={{
                  top: '40%',
                  bottom: '40%',
                  left: `${rightPercentages[pill - 1]}%`,
                  right: `${leftPercentages[pill - 1]}%`,
                }}
                disabled={pill > lessonNumber}
              />
            );
          })}
        </div>
      </div>

      {/* Lesson Title */}
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[36px] left-[16px] not-italic text-[#232323] text-[28px] top-[137px] w-[340px]">
        What is Space?
      </p>

      {/* Lesson Content */}
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[30px] left-[19px] not-italic text-[#232323] text-[18px] top-[203px] w-[340px]">
        <p className="mb-0">{`Space is the vast expanse that exists beyond Earth and its atmosphere. It's a near-perfect vacuum containing extremely low density of particles, predominantly hydrogen and helium plasma. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">The boundary between Earth's atmosphere and outer space is known as the Kármán line, located at an altitude of 100 kilometers (62 miles) above sea level. Beyond this point, the atmosphere becomes too thin to support conventional aircraft flight.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Space is characterized by extreme conditions including near-absolute zero temperatures, intense radiation from the Sun and cosmic sources, and the absence of gravity (microgravity). `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Understanding space is crucial for human exploration, satellite technology, and our broader comprehension of the universe. From the International Space Station orbiting Earth to distant galaxies billions of light-years away, space encompasses everything beyond our planet's protective atmosphere.`}</p>
      </div>

      {/* Activity: MCQ 1 */}
      {currentStep >= 5 && (
        <div className="absolute bg-[#1f60d8] h-[479px] left-[19px] overflow-clip rounded-[8px] top-[1120px] w-[339px]" data-name="Activity: MCQ">
          {/* MCQ Logo */}
          <div className="absolute contents left-[11px] top-[11px]" data-name="MCQ Logo">
            <div className="absolute right-[288px] size-[40px] top-[11px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="20" />
              </svg>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[27.755px] justify-center leading-[0] left-[31px] not-italic text-[#232323] text-[28px] text-center top-[31.41px] translate-x-[-50%] translate-y-[-50%] w-[18.776px]">
              <p className="leading-[32px]">?</p>
            </div>
          </div>

          <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[30px] left-[68px] not-italic text-[24px] text-nowrap text-white top-[18px] whitespace-pre">What is Space?</p>
          
          {/* Radio button group */}
          <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[21px] overflow-clip top-[75px]" data-name="Radio button group">
            <button 
              onClick={() => setMcq1Answer('unoccupied')}
              className="content-stretch flex gap-[20px] h-[53px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq1Answer === 'unoccupied' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[267px]">
                <p className="leading-[30px]">The region beyond Earth's atmosphere</p>
              </div>
            </button>

            <button 
              onClick={() => setMcq1Answer('fames')}
              className="content-stretch flex gap-[20px] h-[45px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq1Answer === 'fames' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[263px]">Only the area between planets</p>
            </button>

            <button 
              onClick={() => setMcq1Answer('fusce')}
              className="content-stretch flex gap-[20px] h-[51px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq1Answer === 'fusce' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[264px]">The sky during nighttime</p>
            </button>

            <button 
              onClick={() => setMcq1Answer('velit')}
              className="content-stretch flex gap-[20px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq1Answer === 'velit' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Complete emptiness and void</p>
            </button>
          </div>

          {/* Buttons */}
          <div className="absolute contents left-[11px] top-[360px]" data-name="Buttons">
            <button 
              onClick={() => setShowMcq1Hint(!showMcq1Hint)}
              className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[11px] px-[12px] py-[7px] rounded-[8px] top-[417px] cursor-pointer hover:bg-gray-50 transition-colors" 
              data-name="Button"
            >
              <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Lightbulb">
                <div className="absolute inset-[10.42%_18.75%_6.25%_18.75%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 25">
                    <g id="Icon">
                      <path d={svgPaths.p137c2f00} fill="#232323" />
                      <path d={svgPaths.p1f336480} fill="#232323" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Show Hint</p>
              </div>
            </button>

            <button 
              onClick={handleSubmitMcq1}
              disabled={!mcq1Answer}
              className={`absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[11px] px-[12px] py-[7px] rounded-[8px] top-[360px] transition-all ${
                !mcq1Answer ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-[#face55]'
              }`}
              data-name="Button"
            >
              <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Checked-box">
                <div className="absolute inset-[14.63%_14.68%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPaths.p27f21ec0} fill="var(--fill-0, #232323)" id="Icon" />
                  </svg>
                </div>
              </div>
              <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
            </button>
          </div>

          {showMcq1Hint && (
            <div className="absolute left-[20px] top-[480px] bg-[#f4d35e] px-4 py-2 rounded-lg">
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#232323]">
                Think about where Earth's atmosphere ends...
              </p>
            </div>
          )}
        </div>
      )}

      {/* Activity: MCQ 2 (with correct answer feedback) */}
      {currentStep >= 6 && (
        <div className="absolute bg-[#1f60d8] h-[566px] left-[19px] overflow-clip rounded-[8px] top-[1646px] w-[339px]" data-name="Activity: MCQ">
          {/* MCQ Logo */}
          <div className="absolute contents left-[11px] top-[11px]" data-name="MCQ Logo">
            <div className="absolute right-[288px] size-[40px] top-[11px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="20" />
              </svg>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[27.755px] justify-center leading-[0] left-[31px] not-italic text-[#232323] text-[28px] text-center top-[31.41px] translate-x-[-50%] translate-y-[-50%] w-[18.776px]">
              <p className="leading-[32px]">?</p>
            </div>
          </div>

          <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[30px] left-[68px] not-italic text-[24px] text-nowrap text-white top-[18px] whitespace-pre">What is Universe?</p>
          
          {/* Radio button group */}
          <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[19px] overflow-clip top-[80px]" data-name="Radio button group">
            <button 
              onClick={() => setMcq2Answer('unoccupied')}
              className="content-stretch flex gap-[20px] h-[53px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq2Answer === 'unoccupied' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[267px]">
                <p className="leading-[30px]">Everything that exists in space and time</p>
              </div>
            </button>

            <button 
              onClick={() => setMcq2Answer('fames')}
              className="content-stretch flex gap-[20px] h-[45px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq2Answer === 'fames' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[263px]">Only our solar system</p>
            </button>

            <button 
              onClick={() => setMcq2Answer('fusce')}
              className="content-stretch flex gap-[20px] h-[51px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq2Answer === 'fusce' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[264px]">The Milky Way galaxy only</p>
            </button>

            <button 
              onClick={() => setMcq2Answer('velit')}
              className="content-stretch flex gap-[20px] h-[30px] items-center overflow-clip relative shrink-0 cursor-pointer" 
              data-name="Radio with label"
            >
              <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                <div aria-hidden="true" className={`absolute ${mcq2Answer === 'velit' ? 'border-[#f4d35e] border-[6px]' : 'border-2 border-[#232323]'} border-solid inset-0 pointer-events-none rounded-[100px]`} />
              </div>
              <p className="font-['Poppins:Regular',sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">A collection of galaxies</p>
            </button>
          </div>

          {showMcq2Feedback && (
            <>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[54px] justify-center leading-[0] left-[22px] not-italic text-[#f4d35e] text-[20px] top-[374px] translate-y-[-50%] w-[329px]">
                <p className="leading-[30px] whitespace-pre-wrap">{`Correct Answer  🎉🎉🎉`}</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#f4d35e] text-[18px] text-nowrap top-[439px] translate-y-[-50%]">
                <p className="leading-[30px] whitespace-pre">Explanation</p>
              </div>
              <p className="absolute font-['Poppins:Medium',sans-serif] leading-[20px] left-[24px] not-italic text-[12px] text-white top-[460px] w-[303px] whitespace-pre-wrap">{`The universe encompasses everything that exists - all matter, energy, space, and time. It includes everything from the smallest subatomic particles to the largest galactic superclusters.`}</p>
              <div className="absolute h-[131px] left-[11px] rounded-[8px] top-[417px] w-[318px]">
                <div aria-hidden="true" className="absolute border border-[#f4d35e] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <div className="absolute left-[20px] size-[27px] top-[425px]" data-name="Solid/Status/Pin">
                <div className="absolute inset-[15.47%_13.49%_11.57%_13.54%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p19257700} fill="var(--fill-0, #F4D35E)" id="Icon" />
                  </svg>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Image with Caption */}
      {currentStep >= 3 && (
        <div className="absolute contents left-[18px] top-[2251px]" data-name="Image with Caption">
          <div className="absolute h-[214.91px] left-[18px] rounded-[8px] top-[2251px] w-[340px]" data-name="unsplash:0o_GEzyargo">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
              <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
              <img alt="A cluster of stars" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplash0OGEzyargo} />
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[22px] justify-center leading-[0] left-[188px] not-italic text-[#9b9b9b] text-[12px] text-center top-[2477px] translate-x-[-50%] translate-y-[-50%] w-[272px]">
            <p className="leading-[26px]">A cluster of stars. Source: Unsplash</p>
          </div>
        </div>
      )}

      {/* Bottom Buttons */}
      <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[36px] top-[2550px]" data-name="Buttons">
        <button 
          onClick={() => onNavigate('home')}
          className="box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors" 
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Home">
            <div className="absolute inset-[14.06%_18.34%_10.42%_18.34%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25">
                <path d={svgPaths.p1f1c6a00} fill="var(--fill-0, #232323)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Exit to Home</p>
          </div>
        </button>

        <button 
          onClick={handleNext}
          className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#face55] transition-colors" 
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Next</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                    <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
