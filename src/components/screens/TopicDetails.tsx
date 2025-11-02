import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-8epbno2mh0";
import imgLessonCover from "figma:asset/c27129e7e83db334f52d648439e03067aee2ebbd.png";
import imgUnsplashLvyS3ELzIs from "figma:asset/499b67bcf3496dbfc4b48e9db79662f6dd875256.png";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";

type TopicDetailsProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  data?: {
    subjectName?: string;
    subjectDescription?: string;
    topicName?: string;
  };
};

function ProgressBar() {
  return (
    <div className="absolute h-[24px] left-[800px] top-[605px] w-[480px]" data-name="Progress Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 24">
        <g id="Progress Bar">
          <g id="Rectangle 2">
            <path d={svgPaths.p64be900} fill="white" fillOpacity="0.6" />
          </g>
          <rect fill="var(--fill-0, #FACE55)" height="24" id="Rectangle 1" rx="4" width="8" />
        </g>
      </svg>
    </div>
  );
}

function ProgressInfo() {
  return (
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
        <p className="leading-[32px] whitespace-pre">0%</p>
      </div>
    </div>
  );
}

function SubjectProgress() {
  return (
    <div className="absolute contents left-[800px] top-[562px]" data-name="Subject Progress">
      <ProgressBar />
      <ProgressInfo />
    </div>
  );
}

function CoverProgress() {
  return (
    <div className="absolute contents left-[800px] top-[55px]" data-name="Cover & Progress">
      <SubjectProgress />
      <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="Lesson Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonCover} />
        </div>
      </div>
      <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="unsplash:Lvy_S3ELzIs">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-full left-[-13.23%] max-w-none top-[0.42%] w-[133.33%]" src={imgUnsplashLvyS3ELzIs} />
        </div>
      </div>
    </div>
  );
}

function SolidMediaPlay() {
  return (
    <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Solid/Media/Play">
          <path d={svgPaths.p2c0e5d80} fill="var(--fill-0, #232323)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[160px] px-[12px] py-[7px] rounded-[8px] top-[581px] hover:bg-[#face55] transition-colors cursor-pointer" 
      data-name="Button"
    >
      <SolidMediaPlay />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Try Subject</p>
    </button>
  );
}

function SolidInterfaceEditAlt() {
  return (
    <div 
      className="relative shrink-0 size-[24px]" 
      data-name="Solid/Interface/Edit-alt"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Edit-alt">
          <g id="Icon">
            <path d={svgPaths.p36ffa480} fill="var(--fill-0, black)" />
            <path d={svgPaths.p263a3200} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[346px] px-[12px] py-[7px] rounded-[8px] top-[581px] w-[172px] hover:bg-[#face55] transition-colors cursor-pointer" 
      data-name="Button"
    >
      <SolidInterfaceEditAlt />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Edit Subject</p>
    </button>
  );
}

function SubjectInfo({ subjectName, subjectDescription, onTrySubject, onEditSubject }: {
  subjectName: string;
  subjectDescription: string;
  onTrySubject: () => void;
  onEditSubject: () => void;
}) {
  return (
    <div className="absolute contents left-[160px] top-[139px]" data-name="Subject Info">
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[160px] not-italic text-[20px] text-white top-[225px] w-[572px]">
        <p>{subjectDescription}</p>
      </div>
      <Button onClick={onTrySubject} />
      <Button1 onClick={onEditSubject} />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[160px] not-italic text-[60px] text-white top-[155px] translate-y-[-50%] w-[484px]">
        <p className="leading-[32px]">{subjectName}</p>
      </div>
    </div>
  );
}

function ArrowSliderLeft({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute left-[160px] size-[42px] top-[45px] cursor-pointer hover:opacity-80 transition-opacity" 
      data-name="Arrow Slider Left"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Arrow Slider Left">
          <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p19833c80} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function BackNav({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute contents left-[160px] top-[45px]" data-name="Back Nav">
      <ArrowSliderLeft onClick={onClick} />
      <button 
        onClick={onClick}
        className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[224px] not-italic text-[20px] text-white top-[66px] translate-y-[-50%] w-[243px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to All Subjects</p>
      </button>
    </div>
  );
}

function SubjectDetails({ subjectName, subjectDescription, onBack, onTrySubject, onEditSubject }: {
  subjectName: string;
  subjectDescription: string;
  onBack: () => void;
  onTrySubject: () => void;
  onEditSubject: () => void;
}) {
  return (
    <div className="absolute bg-[#1f60d8] h-[684px] left-0 overflow-clip top-[80px] w-[1440px]" data-name="Subject Details">
      <CoverProgress />
      <SubjectInfo 
        subjectName={subjectName}
        subjectDescription={subjectDescription}
        onTrySubject={onTrySubject}
        onEditSubject={onEditSubject}
      />
      <BackNav onClick={onBack} />
    </div>
  );
}

function SolidInterfaceEditAlt1({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute left-[426px] size-[40px] top-[923px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="Solid/Interface/Edit-alt"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Solid/Interface/Edit-alt">
          <g id="Icon">
            <path d={svgPaths.p2fc75c00} fill="var(--fill-0, #1F60D8)" />
            <path d={svgPaths.p3e6f5600} fill="var(--fill-0, #1F60D8)" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[35.601px] left-[78px] top-[23.73px] w-[35.569px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 2">
          <path d={svgPaths.p28ec9500} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[30.62%_92.3%_31.35%_5.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 31">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p2714ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="21.4896" id="Rectangle 1" width="22.8884" x="4.47357" y="4.11446" />
          <path d={svgPaths.p2c02ac00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[78px] top-[23.73px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute contents left-[78px] top-[23.73px]" data-name="Logo 2">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[41.23%_86.3%_37.47%_8.46%] justify-center leading-[0] not-italic text-[#232323] text-[20.981px]">
        <p className="leading-[17.039px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function OutlineGeneralBank() {
  return (
    <div className="relative shrink-0 size-[20.585px]" data-name="Outline/General/Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Outline/General/Bank">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p32a89900} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p389c8700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1d1d7c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35407680} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1607c900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1073px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[21.99px] hover:bg-[#face55] transition-colors cursor-pointer" 
      data-name="Button"
    >
      <OutlineGeneralBank />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Institute</p>
    </button>
  );
}

function Frame256() {
  return (
    <div className="absolute bg-[#face55] left-[1237px] overflow-clip rounded-[176px] size-[34px] top-[22px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[20px] justify-center leading-[0] left-[17.5px] not-italic text-[13.709px] text-black text-center top-[17px] translate-x-[-50%] translate-y-[-50%] w-[17px]">
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function NavBarTeachers({ onAddInstitute }: { onAddInstitute: () => void }) {
  return (
    <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar - Teachers">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <Logo2 />
      <div className="absolute inset-[19.98%_6.74%_19.98%_89.93%]" data-name="Profile">
        <img alt="" className="block max-w-none size-full" height="48.032" src={imgProfile} width="48.032" />
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[38.55%_75.13%_35.2%_14.25%] leading-[normal] not-italic text-[#555555] text-[14.22px] text-nowrap tracking-[0.79px] whitespace-pre">FOR GOPELE ADMINS</p>
      <Button2 onClick={onAddInstitute} />
      <Frame256 />
    </div>
  );
}

function Button3({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[1071px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[836px] w-[209px] hover:bg-[#1850b8] transition-colors cursor-pointer" 
      data-name="Button"
    >
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Create New Topic</p>
    </button>
  );
}

function AkarIconsPlus() {
  return (
    <div className="absolute left-[111px] size-[52px] top-[110px]" data-name="akar-icons:plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
        <g id="akar-icons:plus">
          <path d={svgPaths.p32ad3980} id="Vector" stroke="var(--stroke-0, #9B9B9B)" strokeLinecap="round" strokeWidth="4.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame258({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute h-[315px] left-[122px] rounded-[6px] top-[996px] w-[274px] cursor-pointer hover:bg-gray-50 transition-colors"
    >
      <div className="h-[315px] overflow-clip relative rounded-[inherit] w-[274px]">
        <AkarIconsPlus />
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[137.5px] not-italic text-[#9b9b9b] text-[20px] text-center top-[213px] translate-x-[-50%] translate-y-[-50%] w-[183px]">
          <p className="leading-[31px]">Click to Create New Lesson</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#9b9b9b] border-dashed inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}

export function TopicDetails({ onNavigate, data }: TopicDetailsProps) {
  const subjectName = data?.subjectName || 'Science';
  const subjectDescription = data?.subjectDescription || `In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.\n\nUse diagrams and words to explore the very start of algebra, with puzzles and intuition guiding the way.\n\nBy the end of the course, you'll be able to simplify expressions and solve equations using methods that impart deep understanding rather than just procedures.`;
  const topicName = data?.topicName || 'Molecular Biology';

  const handleBackToAllSubjects = () => {
    onNavigate('courses');
  };

  const handleTrySubject = () => {
    // TODO: Navigate to subject preview/test mode
    console.log('Try subject clicked');
  };

  const handleEditSubject = () => {
    // Navigate to update subject form with current data
    onNavigate('updateSubject', {
      subjectName,
      subjectDescription,
      topicName
    });
  };

  const handleEditTopic = () => {
    // TODO: Navigate to edit topic screen
    console.log('Edit topic clicked');
  };

  const handleAddInstitute = () => {
    onNavigate('addInstitute');
  };

  const handleCreateNewTopic = () => {
    // Navigate back to empty subject to create another topic
    onNavigate('emptySubject', {
      subjectName,
      subjectDescription
    });
  };

  const handleCreateLesson = () => {
    // Navigate to create lesson details screen
    onNavigate('createLessonDetails', {
      subjectName,
      topicName,
      chapterName: topicName // Using topic name as the chapter name
    });
  };

  return (
    <div className="bg-white relative w-[1440px] min-h-screen" data-name="Topic Details">
      <SubjectDetails 
        subjectName={subjectName}
        subjectDescription={subjectDescription}
        onBack={handleBackToAllSubjects}
        onTrySubject={handleTrySubject}
        onEditSubject={handleEditSubject}
      />
      <SolidInterfaceEditAlt1 onClick={handleEditTopic} />
      <NavBarTeachers onAddInstitute={handleAddInstitute} />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[122px] not-italic text-[32px] text-black text-nowrap top-[943px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">{topicName}</p>
      </div>
      <Button3 onClick={handleCreateNewTopic} />
      <Frame258 onClick={handleCreateLesson} />
    </div>
  );
}
