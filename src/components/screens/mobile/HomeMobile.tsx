import { Screen } from '../../../hooks/useNavigation';
import svgPaths from "../../../imports/svg-0iuzodpw2v";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

type HomeMobileProps = {
  onNavigate: (screen: Screen, data?: any) => void;
};

function LongestStreak() {
  return (
    <div className="absolute contents left-[17px] top-[222px]" data-name="Longest Streak">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[61px] not-italic text-[18px] text-nowrap text-white top-[238px] translate-y-[-50%]">
        <p className="leading-[32px] whitespace-pre">
          <span className="font-['Poppins:SemiBold',sans-serif] not-italic text-white">Longest Streak:</span>
          <span>{` 4 Days`}</span>
        </p>
      </div>
      <div className="absolute left-[17px] size-[35px] top-[223px]" data-name="Solid/Status/Fire">
        <div className="absolute inset-[8.36%_21.88%_12.2%_21.88%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 28">
            <path d={svgPaths.p187cb800} fill="var(--fill-0, #F4D35E)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[17px] top-[176px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[62.99px] not-italic text-[18px] text-nowrap text-white top-[196px] translate-y-[-50%]">
        <p className="leading-[32px] whitespace-pre">
          <span className="font-['Poppins:SemiBold',sans-serif] not-italic text-white">Lessons Completed:</span>
          <span>{` 80`}</span>
        </p>
      </div>
      <div className="absolute inset-[42.82%_86.13%_48.35%_4.53%]" data-name="Solid/Status/University">
        <div className="absolute inset-[12.5%_6.67%_12.25%_5.18%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 28">
            <path clipRule="evenodd" d={svgPaths.p25152900} fill="var(--fill-0, #F4D35E)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WeeklyStats() {
  return (
    <div className="absolute contents left-[17px] top-[176px]" data-name="Weekly Stats">
      <LongestStreak />
      <Group8 />
    </div>
  );
}

function StreakInfo() {
  return (
    <div className="absolute contents left-[17px] top-[38px]" data-name="Streak Info">
      <WeeklyStats />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[9.25%_37.07%_82.97%_4.53%] justify-center leading-[0] not-italic text-[36px] text-nowrap text-white">
        <p className="leading-[32px] whitespace-pre">Daily Streak</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[23.6%_4.8%_63.75%_5.07%] justify-center leading-[0] not-italic text-[18px] text-white">
        <p className="leading-[26px]">Well done! You completed 5 lessons this week!</p>
      </div>
    </div>
  );
}

function DayStreak({ letter, isActive, position }: { letter: string; isActive: boolean; position: number }) {
  return (
    <div className="absolute contents" style={{ left: `${10 + position * 51.33}px`, top: '299.37px' }}>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[18.88px] justify-center leading-[0] not-italic text-[16px] translate-y-[-50%]" 
        style={{ 
          left: `${17.7 + position * 51.33}px`, 
          top: '357.19px',
          color: isActive ? '#face55' : 'rgba(255,255,255,0.6)'
        }}>
        <p className="leading-[32px]">{letter}</p>
      </div>
      <div className="absolute size-[46.02px]" style={{ left: `${10 + position * 51.33}px`, top: '299.37px' }} data-name="Solid/Status/Lightning-alt">
        <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
            <path 
              d={svgPaths.p262a5580} 
              fill={isActive ? "var(--fill-0, #FACE55)" : "var(--fill-0, white)"} 
              fillOpacity={isActive ? 1 : 0.6}
              id="Icon" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ZapMeter() {
  const days = [
    { letter: 'M', isActive: true },
    { letter: 'T', isActive: true },
    { letter: 'W', isActive: true },
    { letter: 'T', isActive: false },
    { letter: 'F', isActive: false },
    { letter: 'S', isActive: false },
    { letter: 'S', isActive: false },
  ];

  return (
    <div className="absolute contents left-[10px] top-[299.37px]" data-name="Zap Meter">
      {days.map((day, index) => (
        <DayStreak key={index} letter={day.letter} isActive={day.isActive} position={index} />
      ))}
    </div>
  );
}

function DailyStreak() {
  return (
    <div className="absolute bg-[#1f60d8] h-[411px] left-0 overflow-clip top-[80px] w-[375px]" data-name="Daily Streak">
      <StreakInfo />
      <ZapMeter />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[26.25%_85.08%_26.25%_4.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 2">
          <path d={svgPaths.p23915500} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[27.27%_85.83%_32.13%_6.38%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p27fdb840} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.7753" y="4.39156" />
          <path d={svgPaths.p3f429c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[26.25%_85.08%_26.25%_4.8%]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[26.25%_61.25%_26.25%_4.8%]">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[38.6%_61.25%_38.67%_17.25%] justify-center leading-[0] not-italic text-[#232323] text-[22.395px]">
        <p className="leading-[18.187px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Buttons({ onStart, onSave }: { onStart: () => void; onSave: () => void }) {
  return (
    <div className="absolute contents left-[16px] top-[310px]" data-name="Buttons">
      <button 
        onClick={onSave}
        className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[16px] px-[12px] py-[7px] rounded-[8px] top-[370px] cursor-pointer hover:bg-gray-50 transition-colors" 
        data-name="Button"
      >
        <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
          <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
            <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--stroke-0": "rgba(51, 51, 51, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                <path d={svgPaths.p40deac0} id="Icon" stroke="var(--stroke-0, #333333)" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Save for Later</p>
        </div>
      </button>
      <button 
        onClick={onStart}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[16px] px-[12px] py-[7px] rounded-[8px] top-[310px] cursor-pointer hover:bg-[#face55] transition-colors" 
        data-name="Button"
      >
        <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
          <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
              <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start Topic</p>
      </button>
    </div>
  );
}

function LessonDetails() {
  return (
    <div className="absolute contents left-[16px] not-italic text-white top-[72px]" data-name="Lesson Details">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[106px] leading-[26px] left-[16px] text-[16px] top-[170px] w-[299px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[74px] justify-center leading-[0] left-[16px] text-[36px] top-[109px] translate-y-[-50%] w-[319px]">
        <p className="leading-[48px]">Composite Polygons</p>
      </div>
    </div>
  );
}

function SubjectLessonHeader() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[16px] top-[16px]" data-name="Subject Lesson Header">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">Geometry</p>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
      </div>
    </div>
  );
}

function LessonCardMobile({ onStart, onSave }: { onStart: () => void; onSave: () => void }) {
  return (
    <div className="absolute bg-[#1f60d8] h-[444px] left-[19px] overflow-clip rounded-[8px] top-[645px] w-[338px]" data-name="Lesson Card - Mobile">
      <Buttons onStart={onStart} onSave={onSave} />
      <LessonDetails />
      <SubjectLessonHeader />
    </div>
  );
}

function ContinueLearningMobile({ onStart, onSave }: { onStart: () => void; onSave: () => void }) {
  return (
    <div className="absolute contents left-[17px] top-[571px]" data-name="Continue Learning - Mobile">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[74px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[608px] translate-y-[-50%] w-[340px]">
        <p className="leading-[36px]">Continue Learning</p>
      </div>
      <LessonCardMobile onStart={onStart} onSave={onSave} />
    </div>
  );
}

function LessonDetails1() {
  return (
    <div className="absolute contents left-[10px] not-italic text-white top-[314px]" data-name="Lesson Details">
      <p className="absolute font-['Poppins:Medium',sans-serif] h-[106px] leading-[26px] left-[10px] text-[16px] top-[412px] w-[319px]">{`In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.`}</p>
      <div className="absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[74px] justify-center leading-[0] left-[10px] text-[36px] top-[351px] translate-y-[-50%] w-[319px]">
        <p className="leading-[48px]">Composite Polygons</p>
      </div>
    </div>
  );
}

function SubjectLessonHeader1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[10px] top-[256px]" data-name="Subject Lesson Header">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">Geometry</p>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
        <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
      </div>
    </div>
  );
}

function Buttons1({ onStart, onSave }: { onStart: () => void; onSave: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[14px] items-center left-[10px] top-[552px] w-[319px]" data-name="Buttons">
      <button 
        onClick={onStart}
        className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px] cursor-pointer hover:bg-[#face55] transition-colors" 
        data-name="Button"
      >
        <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
          <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
              <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
            </svg>
          </div>
        </div>
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
      </button>
      <button 
        onClick={onSave}
        className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px] cursor-pointer hover:bg-gray-50 transition-colors" 
        data-name="Button"
      >
        <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
          <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
            <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                <path d={svgPaths.p40deac0} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Save</p>
        </div>
      </button>
    </div>
  );
}

function LessonCardMobile1({ onStart, onSave }: { onStart: () => void; onSave: () => void }) {
  return (
    <div className="absolute bg-[#1f60d8] h-[622px] left-[19px] overflow-clip rounded-[8px] top-[1263px] w-[338px]" data-name="Lesson Card - Mobile">
      <LessonDetails1 />
      <SubjectLessonHeader1 />
      <Buttons1 onStart={onStart} onSave={onSave} />
      <div className="absolute h-[228px] left-[13px] rounded-[8px] top-[13px] w-[312px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="Composite Polygons lesson cover" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}

function ArrowSliderLeft({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute contents left-[273px] top-[1190px]" data-name="Arrow Slider Left">
      <button 
        onClick={onClick}
        className="absolute right-[70px] size-[32px] top-[1190px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16" />
        </svg>
      </button>
      <div className="absolute left-[274.31px] size-[29.388px] top-[1191.31px] pointer-events-none" data-name="Solid/Interface/Arrow left">
        <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
            <path d={svgPaths.p1a05bc00} fill="var(--fill-0, #232323)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ArrowSliderRight({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute contents left-[325px] top-[1190px]" data-name="Arrow Slider Right">
      <button 
        onClick={onClick}
        className="absolute right-[18px] size-[32px] top-[1190px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <circle cx="16" cy="16" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16" />
        </svg>
      </button>
      <div className="absolute flex items-center justify-center left-[326.31px] size-[29.388px] top-[1191.31px] pointer-events-none">
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-[29.388px]" data-name="Solid/Interface/Arrow left">
            <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                <path d={svgPaths.p1a05bc00} fill="var(--fill-0, #232323)" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowButtons({ onPrevious, onNext }: { onPrevious: () => void; onNext: () => void }) {
  return (
    <div className="absolute contents left-[273px] top-[1190px]" data-name="Arrow Buttons">
      <ArrowSliderLeft onClick={onPrevious} />
      <ArrowSliderRight onClick={onNext} />
    </div>
  );
}

function ContinueLearningMobile1({ 
  onStart, 
  onSave, 
  onPrevious, 
  onNext 
}: { 
  onStart: () => void; 
  onSave: () => void; 
  onPrevious: () => void; 
  onNext: () => void; 
}) {
  return (
    <div className="absolute contents left-[17px] top-[1169px]" data-name="Continue Learning - Mobile">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[74px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[1206px] translate-y-[-50%] w-[228px]">
        <p className="leading-[36px]">Recommended Topics</p>
      </div>
      <LessonCardMobile1 onStart={onStart} onSave={onSave} />
      <ArrowButtons onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}

function MenuIcon({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute inset-[22.5%_2.4%_22.5%_85.87%] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Solid/Interface/Menu"
    >
      <div className="absolute inset-[26.04%_17.71%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 22">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p1d223200} fill="#1F60D8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b8b7100} fill="#1F60D8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2dbd0c00} fill="#1F60D8" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </button>
  );
}

export function HomeMobile({ onNavigate }: HomeMobileProps) {
  const [savedLessons, setSavedLessons] = useState<Set<string>>(new Set());

  const handleStartLesson = () => {
    onNavigate('lesson', {
      subjectName: 'Geometry',
      lessonNumber: 1,
      totalLessons: 8,
      lessonName: 'Composite Polygons'
    });
  };

  const handleSaveLesson = (lessonId: string = 'geometry-07') => {
    if (savedLessons.has(lessonId)) {
      setSavedLessons(prev => {
        const newSet = new Set(prev);
        newSet.delete(lessonId);
        return newSet;
      });
      toast.success('Removed from saved lessons');
    } else {
      setSavedLessons(prev => new Set(prev).add(lessonId));
      toast.success('Lesson saved for later!');
    }
  };

  const handlePreviousTopic = () => {
    toast.info('Showing previous topic');
  };

  const handleNextTopic = () => {
    toast.info('Showing next topic');
  };

  const handleMenuClick = () => {
    toast.info('Menu - Navigation coming soon!');
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen overflow-x-hidden" data-name="Home - Mobile">
      <DailyStreak />
      <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
        <Group14 />
        <MenuIcon onClick={handleMenuClick} />
      </div>
      <ContinueLearningMobile onStart={handleStartLesson} onSave={() => handleSaveLesson('continue-geometry-07')} />
      <ContinueLearningMobile1 
        onStart={handleStartLesson} 
        onSave={() => handleSaveLesson('recommended-geometry-07')}
        onPrevious={handlePreviousTopic}
        onNext={handleNextTopic}
      />
    </div>
  );
}
