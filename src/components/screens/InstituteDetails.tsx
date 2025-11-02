import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-3hz9h8l63c";
import svgPathsStudents from "../../imports/svg-w20ir9teoe";
import svgPathsSubjects from "../../imports/svg-6uv1yytk3y";
import imgRectangle206 from "figma:asset/3917180b2d0378d8699ac0dd6f173b7247e41dc3.png";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";
import imgLessonsCover from "figma:asset/76435e2593a1762be021a7a087976ac02d6a62e3.png";
import { ImageWithFallback } from '../figma/ImageWithFallback';

type InstituteDetailsProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  data?: {
    id: number;
    name: string;
    location: string;
    category: string;
    students: string;
    subjects: string;
    lessonsCompleted: string;
    logo: string;
  };
};

type TabType = 'analytics' | 'studentsEnrolled' | 'subjects';

type Student = {
  id: number;
  name: string;
  grade: string;
  streak: number; // 0-7, representing how many lightning bolts are filled
  profileImage: string;
};

// Mock student data with varying streak levels
const MOCK_STUDENTS: Student[] = [
  { id: 1, name: 'Rishabh Singh', grade: '6th Grade', streak: 3, profileImage: imgLessonsCover },
  { id: 2, name: 'Priya Patel', grade: '6th Grade', streak: 5, profileImage: imgLessonsCover },
  { id: 3, name: 'Amir Khan', grade: '7th Grade', streak: 2, profileImage: imgLessonsCover },
  { id: 4, name: 'Lerato Moloi', grade: '6th Grade', streak: 7, profileImage: imgLessonsCover },
  { id: 5, name: 'Thabo Dlamini', grade: '8th Grade', streak: 4, profileImage: imgLessonsCover },
  { id: 6, name: 'Sipho Ndlovu', grade: '7th Grade', streak: 6, profileImage: imgLessonsCover },
  { id: 7, name: 'Naledi Khumalo', grade: '6th Grade', streak: 3, profileImage: imgLessonsCover },
  { id: 8, name: 'Zanele Mbatha', grade: '8th Grade', streak: 5, profileImage: imgLessonsCover },
  { id: 9, name: 'Kwame Osei', grade: '7th Grade', streak: 4, profileImage: imgLessonsCover },
];

type SubjectData = {
  id: number;
  name: string;
  description: string;
  image: string;
  comingSoon: boolean;
};

// Mock subject data
const MOCK_SUBJECTS: SubjectData[] = [
  {
    id: 1,
    name: 'Science',
    description: 'Stretch your analytic muscles with truth-tellers, logical robots, and more!',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NjA5NTg2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    comingSoon: false,
  },
  {
    id: 2,
    name: 'English',
    description: 'Start your algebra journey here with an introduction to variables and equations.',
    image: 'https://images.unsplash.com/photo-1632830049084-308fd151d8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcmVhZGluZyUyMGJvb2t8ZW58MXx8fHwxNzYxMDQwNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    comingSoon: true,
  },
  {
    id: 3,
    name: 'Mathematics',
    description: 'Build a foundation for geometry with angles, triangles, and polygons.',
    image: 'https://images.unsplash.com/photo-1627983942134-dab65b677d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGdlb21ldHJ5fGVufDF8fHx8MTc2MTA0MDc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    comingSoon: true,
  },
];

function SolidCommunicationEnvelope({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Communication/Envelope">
      <div className="absolute inset-[19.6%_11.81%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <g id="Icon">
            <path d={svgPaths.p36f0df0} fill="black" />
            <path d={svgPaths.pe4a480} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolidGeneralPalette({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/General/Palette">
      <div className="absolute inset-[10.42%_10.42%_10.43%_10.42%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
          <path clipRule="evenodd" d={svgPaths.p23618d00} fill="var(--fill-0, #FACE55)" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidNavigationLocation({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Navigation/Location">
      <div className="absolute inset-[6.25%_15.6%_9.72%_15.6%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 27">
          <g id="Icon">
            <path d={svgPaths.p30dc2900} fill="var(--fill-0, #FACE55)" />
            <path clipRule="evenodd" d={svgPaths.p2cfb6100} fill="var(--fill-0, #FACE55)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
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

function SolidStatusLightningAlt({ isFilled }: { isFilled: boolean }) {
  return (
    <div className="size-[46px]" data-name="Solid/Status/Lightning-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Solid/Status/Lightning-alt">
          <path 
            d={svgPathsStudents.p1ee0a900} 
            fill={isFilled ? "#FACE55" : "white"} 
            fillOpacity={isFilled ? 1 : 0.6} 
            id="Icon" 
          />
        </g>
      </svg>
    </div>
  );
}

function OutlineFilesClipboardAlt() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Outline/Files/Clipboard-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Outline/Files/Clipboard-alt">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPathsStudents.pc55f400} fill="black" fillRule="evenodd" />
            <path d={svgPathsStudents.pcfd05f0} fill="black" />
            <path d={svgPathsStudents.p22b04e00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SolidFilesBook({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Files/Book">
      <div className="absolute inset-[14.58%_16.67%_12.5%_16.67%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <path clipRule="evenodd" d={svgPathsSubjects.p16361680} fill="var(--fill-0, black)" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SubjectCard({ subject }: { subject: SubjectData }) {
  return (
    <div className="relative bg-[#1f60d8] h-[432px] overflow-clip rounded-[8px] shrink-0 w-[358px]" data-name="Subject Card">
      {/* Coming Soon Badge */}
      {subject.comingSoon && (
        <div className="absolute bg-[#face55] box-border content-stretch flex gap-[17.673px] h-[36px] items-center justify-center px-[8.247px] py-[2.356px] right-[13px] rounded-[7.069px] top-[13px] w-[181.385px] z-10">
          <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17.673px] text-black text-center text-nowrap tracking-[2.3564px] uppercase">
            <p className="leading-[normal] whitespace-pre">Coming soon</p>
          </div>
        </div>
      )}
      {/* Card Copy */}
      <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">
          {subject.description}
        </p>
        <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
          <p className="leading-[32px]">{subject.name}</p>
        </div>
      </div>
      {/* Subject Image */}
      <div className="absolute h-[296px] left-0 top-0 w-[358px]">
        <ImageWithFallback alt={subject.name} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={subject.image} />
      </div>
    </div>
  );
}

function StudentCard({ student, onViewDetails }: { student: Student; onViewDetails: () => void }) {
  return (
    <div className="bg-[#1f60d8] h-[278px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" data-name="Student Card">
      {/* View Details Button */}
      <button
        onClick={onViewDetails}
        className="absolute bg-white bottom-[15px] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[19px] px-[12px] py-[7px] rounded-[8px] w-[320px] hover:bg-gray-50 transition-colors cursor-pointer"
        data-name="Button"
      >
        <OutlineFilesClipboardAlt />
        <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">View Details</p>
        </div>
      </button>

      {/* Student Info */}
      <div className="absolute contents left-[26px] top-[25px]">
        <div className="absolute bottom-[235px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[99px] not-italic text-[24px] text-nowrap text-white translate-y-[50%]">
          <p className="leading-[32px] whitespace-pre">{student.name}</p>
        </div>
        <div className="absolute bottom-[211.5px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[99px] not-italic text-[14.126px] text-nowrap text-white tracking-[1px] translate-y-[50%] uppercase">
          <p className="leading-[18.834px] whitespace-pre">{student.grade}</p>
        </div>
        <div className="absolute left-[26px] pointer-events-none rounded-[111.889px] size-[53px] top-[25px]" data-name="Lessons Cover">
          <div aria-hidden="true" className="absolute inset-0 rounded-[111.889px]">
            <div className="absolute bg-[#c4c4c4] inset-0 rounded-[111.889px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[111.889px]">
              <img alt={student.name} className="absolute h-[318.33%] left-[-22.22%] max-w-none top-[-2.13%] w-[164.81%]" src={student.profileImage} />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-[-3px] rounded-[114.889px]" />
        </div>
      </div>

      {/* Daily Streak */}
      <div className="absolute contents left-[18px] top-[99px]">
        <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[28px] not-italic text-[14px] text-nowrap text-white top-[115px] tracking-[2.5px] translate-y-[-50%] uppercase">
          <p className="leading-[32px] whitespace-pre">daily streak</p>
        </div>
        {/* Zap Meter */}
        <div className="absolute contents left-[18px] top-[137px]" data-name="Zap Meter">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="absolute" style={{ left: `${18 + (index * 46)}px`, top: '137px' }}>
              <SolidStatusLightningAlt isFilled={index < student.streak} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function InstituteDetails({ onNavigate, data }: InstituteDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('analytics');
  const [currentPage, setCurrentPage] = useState(0);
  const studentsPerPage = 9;

  // Default data if none provided
  const institute = data || {
    id: 1,
    name: 'New Thomas School for Gifted',
    location: 'Johannesburg',
    category: 'ART SCHOOL',
    students: '2.4k',
    subjects: '07',
    lessonsCompleted: '1.7k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const totalPages = Math.ceil(MOCK_STUDENTS.length / studentsPerPage);
  const currentStudents = MOCK_STUDENTS.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  const handleSendEmail = () => {
    toast.success('Email compose window would open here');
  };

  const handleCopyCode = () => {
    const instituteCode = `INST-${institute.id.toString().padStart(4, '0')}`;
    navigator.clipboard.writeText(instituteCode);
    toast.success('Institute code copied to clipboard!');
  };

  const handleViewStudentDetails = (student: Student) => {
    toast.success(`Viewing details for ${student.name}`);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Split students into rows of 3
  const rows: Student[][] = [];
  for (let i = 0; i < currentStudents.length; i += 3) {
    rows.push(currentStudents.slice(i, i + 3));
  }

  return (
    <div className="bg-white relative w-[1440px] min-h-screen" data-name="Institute Details">
      {/* Nav Bar - Teachers */}
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar - Teachers">
        <div className="absolute bg-white inset-0" data-name="Background" />
        
        {/* Logo */}
        <div className="absolute contents left-[78px] top-[23.73px]" data-name="Logo 2">
          <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[41.23%_86.3%_37.47%_8.46%] justify-center leading-[0] not-italic text-[#232323] text-[20.981px]">
            <p className="leading-[17.039px]">Gopele</p>
          </div>
          <div className="absolute contents left-[78px] top-[23.73px]">
            <div className="absolute h-[35.601px] left-[78px] top-[23.73px] w-[35.569px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                <g id="Frame 2">
                  <path d={svgPaths.p28ec9500} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            </div>
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
          </div>
        </div>

        <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[38.55%_78.11%_35.2%_14.25%] leading-[normal] not-italic text-[#555555] text-[14.22px] text-nowrap tracking-[0.79px] whitespace-pre">FOR TEACHERS</p>

        {/* Add Institute Button */}
        <button
          onClick={() => onNavigate('addInstitute')}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1073px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[21.99px] hover:bg-[#face55] transition-colors"
          data-name="Button"
        >
          <OutlineGeneralBank />
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Institute</p>
        </button>

        {/* Help Button */}
        <div className="absolute bg-[#face55] left-[1237px] overflow-clip rounded-[176px] size-[34px] top-[22px]">
          <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[20px] justify-center leading-[0] left-[17.5px] not-italic text-[13.709px] text-black text-center top-[17px] translate-x-[-50%] translate-y-[-50%] w-[17px]">
            <p className="leading-[normal]">?</p>
          </div>
        </div>

        {/* Profile */}
        <div className="absolute inset-[19.98%_6.74%_19.98%_89.93%]" data-name="Profile">
          <img alt="" className="block max-w-none size-full rounded-full" height="48.032" src={imgProfile} width="48.032" />
        </div>
      </div>

      {/* School Details Header */}
      <div className="absolute bg-[#1f60d8] h-[476px] left-0 overflow-clip top-[83px] w-[1440px]" data-name="School Details">
        {/* Back Nav */}
        <button
          onClick={() => onNavigate('institutesPage')}
          className="absolute contents left-[127px] top-[49px] cursor-pointer hover:opacity-80 transition-opacity"
          data-name="Back Nav"
        >
          <div className="absolute contents left-[127px] top-[49px]" data-name="Arrow Slider Left">
            <div className="absolute right-[1280.01px] size-[32.987px] top-[49px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                <circle cx="16.4937" cy="16.4937" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16.4937" />
              </svg>
            </div>
            <div className="absolute left-[128.35px] size-[30.295px] top-[50.35px]" data-name="Solid/Interface/Arrow left">
              <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
                  <path d={svgPaths.p19ad5ff0} fill="var(--fill-0, #232323)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[23.563px] justify-center leading-[0] left-[177.27px] not-italic text-[15.708px] text-white top-[65.49px] translate-y-[-50%] w-[190.856px]">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[20.421px] underline">Back to All Institutes</p>
          </div>
        </button>

        {/* Institute Logo */}
        <div className="absolute left-[1043px] rounded-[24.429px] size-[211px] top-[128px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24.429px]">
            <div className="absolute bg-white inset-0 rounded-[24.429px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[24.429px]">
              <img alt={institute.name} className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%] object-cover" src={imgRectangle206} />
            </div>
          </div>
        </div>

        {/* Location and Category */}
        <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[127px] top-[134px]">
          <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
              <SolidNavigationLocation className="relative shrink-0 size-[32px]" />
              <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16.619px] text-nowrap text-white tracking-[2.9676px] uppercase">
                <p className="leading-[37.985px] whitespace-pre">{institute.location}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
              <SolidGeneralPalette className="relative shrink-0 size-[32px]" />
              <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16.619px] text-white tracking-[2.9676px] uppercase w-[133.333px]">
                <p className="leading-[37.985px]">{institute.category}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[47.125px] text-white w-[500px]">
            <p className="leading-[normal]">{institute.name}</p>
          </div>
        </div>

        {/* Send Email Button */}
        <button
          onClick={handleSendEmail}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[13px] h-[50px] items-center left-[133px] pl-[19.792px] pr-[18.75px] py-[7.292px] rounded-[8.333px] top-[371px] hover:bg-[#face55] transition-colors cursor-pointer"
          data-name="Button"
        >
          <SolidCommunicationEnvelope className="relative shrink-0 size-[28px]" />
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.75px] text-nowrap whitespace-pre">Send Email</p>
        </button>

        {/* Copy Institute Code Button */}
        <button
          onClick={handleCopyCode}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[627px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[372px] hover:bg-[#face55] transition-colors cursor-pointer"
          data-name="Button"
        >
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="akar-icons:copy">
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
          </div>
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Copy Institute Code</p>
        </button>
      </div>

      {/* Tabs Section */}
      <div className="absolute content-stretch flex font-['Poppins:SemiBold',_sans-serif] gap-[43px] items-start leading-[0] left-[139px] not-italic text-[24px] text-nowrap top-[624px]">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex flex-col justify-center relative shrink-0 ${activeTab === 'analytics' ? 'text-[#232323]' : 'text-[#9b9b9b]'} hover:text-[#232323] transition-colors cursor-pointer`}
        >
          <p className="leading-[32px] text-nowrap whitespace-pre">Analytics</p>
        </button>
        <button
          onClick={() => setActiveTab('studentsEnrolled')}
          className={`flex flex-col justify-center relative shrink-0 ${activeTab === 'studentsEnrolled' ? 'text-[#232323]' : 'text-[#9b9b9b]'} hover:text-[#232323] transition-colors cursor-pointer`}
        >
          <p className="leading-[32px] text-nowrap whitespace-pre">Students Enrolled</p>
        </button>
        <button
          onClick={() => setActiveTab('subjects')}
          className={`flex flex-col justify-center relative shrink-0 ${activeTab === 'subjects' ? 'text-[#232323]' : 'text-[#9b9b9b]'} hover:text-[#232323] transition-colors cursor-pointer`}
        >
          <p className="leading-[32px] text-nowrap whitespace-pre">Subjects</p>
        </button>
      </div>

      {/* Active Tab Underline */}
      <div 
        className="absolute bg-[#face55] h-[5px] top-[656px] transition-all duration-300"
        style={{
          left: activeTab === 'analytics' ? '137px' : activeTab === 'studentsEnrolled' ? '299px' : '553px',
          width: activeTab === 'analytics' ? '119px' : activeTab === 'studentsEnrolled' ? '213px' : '106px'
        }}
      />

      {/* Chart Section - Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="absolute h-[474px] left-[212px] rounded-[10px] top-[745px] w-[1016px]">
          <div className="h-[474px] overflow-clip relative rounded-[inherit] w-[1016px]">
            {/* Chart Title */}
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[43px] justify-center leading-[0] left-[26px] not-italic text-[17.863px] text-black top-[37.5px] translate-y-[-50%] w-[259px]">
              <p className="leading-[normal]">No. of Students Growth</p>
            </div>

            {/* Y-axis Label */}
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[32px] top-[261px] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "204.109375", "--transform-inner-height": "14" } as React.CSSProperties}>
              <div className="flex-none rotate-[270deg]">
                <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative text-[#9b9b9b] text-[12px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">No. of Students Growth (in thousands)</p>
                </div>
              </div>
            </div>

            {/* Y-axis Values */}
            <div className="absolute contents left-[69px] top-[141.45px]">
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-end leading-[0] left-[82.24px] not-italic text-[#333333] text-[17.319px] text-nowrap text-right top-[167.45px] translate-x-[-100%] translate-y-[-100%]">
                <p className="leading-[normal] whitespace-pre">5</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-end leading-[0] left-[81.24px] not-italic text-[#333333] text-[17.319px] text-nowrap text-right top-[263.94px] translate-x-[-100%] translate-y-[-100%]">
                <p className="leading-[normal] whitespace-pre">3</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-end leading-[0] left-[81px] not-italic text-[#333333] text-[17.319px] text-nowrap text-right top-[215.7px] translate-x-[-100%] translate-y-[-100%]">
                <p className="leading-[normal] whitespace-pre">4</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-end leading-[0] left-[80.24px] not-italic text-[#333333] text-[17.319px] text-nowrap text-right top-[310.95px] translate-x-[-100%] translate-y-[-100%]">
                <p className="leading-[normal] whitespace-pre">2</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-end leading-[0] left-[80.95px] not-italic text-[#333333] text-[17.319px] text-nowrap text-right top-[359.2px] translate-x-[-100%] translate-y-[-100%]">
                <p className="leading-[normal] whitespace-pre">1</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-end leading-[0] left-[82.24px] not-italic text-[#333333] text-[17.319px] text-nowrap text-right top-[408.68px] translate-x-[-100%] translate-y-[-100%]">
                <p className="leading-[normal] whitespace-pre">0</p>
              </div>

              {/* Horizontal Grid Lines */}
              {[395.05, 346.8, 298.56, 250.31, 202.07, 153.82].map((top, index) => (
                <div key={index} className="absolute h-0 left-[109.82px] w-[867.177px]" style={{ top: `${top}px` }}>
                  <div className="absolute bottom-0 left-0 right-0 top-[-1.24px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 868 2">
                      <line id="Line 1" stroke="var(--stroke-0, #F7F8FA)" strokeWidth="1.23706" x2="867.177" y1="0.618529" y2="0.618529" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Line */}
            <div className="absolute h-[188.032px] left-[108.59px] top-[176.09px] w-[851.095px]">
              <div className="absolute inset-[-17.11%_-6.1%_-32.89%_-6.1%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 955 283">
                  <g id="Group 230">
                    <g filter="url(#filter0_d_2016_8617)" id="Vector 178">
                      <path d={svgPaths.p11f01280} shapeRendering="crispEdges" stroke="var(--stroke-0, #FFA600)" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="4.94823" />
                    </g>
                    <g filter="url(#filter1_d_2016_8617)" id="Ellipse 109">
                      <circle cx="680.382" cy="42.0603" fill="var(--fill-0, #242730)" r="9.89646" />
                      <circle cx="680.382" cy="42.0603" r="8.6594" stroke="var(--stroke-0, white)" strokeWidth="2.47411" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="282.049" id="filter0_d_2016_8617" width="955.009" x="-4.76837e-07" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="9.89646" />
                      <feGaussianBlur stdDeviation="24.7411" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.286685 0 0 0 0 0.109375 0 0 0 0 0.390625 0 0 0 0.2 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2016_8617" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_2016_8617" mode="normal" result="shape" />
                    </filter>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44.5341" id="filter1_d_2016_8617" width="44.5341" x="660.589" y="22.2674">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="2.47411" dy="2.47411" />
                      <feGaussianBlur stdDeviation="6.18529" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.286685 0 0 0 0 0.109375 0 0 0 0 0.390625 0 0 0 0.25 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2016_8617" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_2016_8617" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Data Point Label */}
            <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-[687.53px] px-[24.741px] py-[6.185px] rounded-[12.371px] top-[113px] w-[98.965px]">
              <div aria-hidden="true" className="absolute border-[#cccccc] border-[1.237px] border-solid inset-0 pointer-events-none rounded-[12.371px]" />
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[17.319px] text-nowrap whitespace-pre">4.5k</p>
              <p className="font-['Poppins:Regular',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[14.845px] text-nowrap whitespace-pre">Students</p>
            </div>

            {/* Year Selector and Navigation */}
            <div className="absolute content-stretch flex gap-[10px] items-center justify-end right-[23px] top-[20px]">
              {/* Year Dropdown */}
              <div className="box-border content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[8px] relative rounded-[10px] shrink-0 w-[98px]">
                <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="relative shrink-0 size-[18px]" data-name="fi:calendar">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="fi:calendar">
                      <path d={svgPaths.p13693a10} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M2.25 7.5H15.75" id="Vector_2" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M12 1.5V4.5" id="Vector_3" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6 1.5V4.5" id="Vector_4" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-center w-[37px]">Year</p>
                <div className="h-[7px] relative shrink-0 w-[11px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
                    <g id="Frame 36">
                      <path d={svgPaths.p3eb042f2} fill="var(--fill-0, #333333)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                <div className="bg-[#f5f6fa] box-border content-stretch flex gap-[10px] items-center justify-center p-[5px] relative rounded-[5px] shrink-0 size-[33px] cursor-pointer hover:bg-[#e5e6ea] transition-colors">
                  <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-left">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="fi:chevron-left">
                        <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#f5f6fa] box-border content-stretch flex gap-[10px] items-center justify-center p-[5px] relative rounded-[5px] shrink-0 size-[33px] cursor-pointer hover:bg-[#e5e6ea] transition-colors">
                  <div className="relative shrink-0 size-[24px]" data-name="fi:chevron-right">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g id="fi:chevron-left">
                        <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* X-axis Labels */}
            <div className="absolute content-stretch flex font-['Poppins:Medium',_sans-serif] items-center justify-between leading-[normal] left-[110px] not-italic text-[#333333] text-[12px] text-center text-nowrap top-[423px] w-[850px] whitespace-pre">
              <p className="relative shrink-0">Jan</p>
              <p className="relative shrink-0">Feb</p>
              <p className="relative shrink-0">Mar</p>
              <p className="relative shrink-0">Apr</p>
              <p className="relative shrink-0">May</p>
              <p className="relative shrink-0">Jun</p>
              <p className="relative shrink-0">July</p>
              <p className="relative shrink-0">Aug</p>
              <p className="relative shrink-0">Sep</p>
              <p className="relative shrink-0">Oct</p>
              <p className="relative shrink-0">Nov</p>
              <p className="relative shrink-0">Dec</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-2 border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      )}

      {/* Students Enrolled Tab Content */}
      {activeTab === 'studentsEnrolled' && (
        <div className="absolute contents left-[158px] top-[726px]" data-name="Your Students">
          {/* Title */}
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[158px] not-italic text-[32px] text-black top-[763px] translate-y-[-50%] w-[484px]">
            <p className="leading-[42px]">Your Students</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute contents left-[1151px] top-[739px]" data-name="Arrow Buttons">
            {/* Left Arrow */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="absolute left-[1151px] size-[49px] top-[739px] cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              data-name="Arrow Slider Left"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                <g id="Arrow Slider Left">
                  <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="24.5" />
                  <g id="Solid/Interface/Arrow left">
                    <path d={svgPathsStudents.p26ba13c0} fill="var(--fill-0, #232323)" id="Icon" />
                  </g>
                </g>
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              className="absolute left-[1233px] size-[49px] top-[739px] cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              data-name="Arrow Slider Right"
            >
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                <g id="Arrow Slider Right">
                  <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="24.5" />
                  <g id="Solid/Interface/Arrow left">
                    <path d={svgPathsStudents.p2f245500} fill="var(--fill-0, #232323)" id="Icon" />
                  </g>
                </g>
              </svg>
            </button>
          </div>

          {/* Student Cards Grid */}
          <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[160px] top-[810px] w-[1122px]" data-name="Vertical Cards">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="content-stretch flex items-start justify-between relative shrink-0 w-[1122px]" data-name="Horizontal Card">
                {row.map((student) => (
                  <StudentCard 
                    key={student.id} 
                    student={student} 
                    onViewDetails={() => handleViewStudentDetails(student)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subjects Tab Content */}
      {activeTab === 'subjects' && (
        <div className="absolute contents left-[143px] top-[726px]" data-name="Recommend Topics">
          {/* Title */}
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[143px] not-italic text-[32px] text-black top-[763px] translate-y-[-50%] w-[484px]">
            <p className="leading-[42px]">Pick a Subject</p>
          </div>

          {/* Add Subjects Button */}
          <button
            onClick={() => onNavigate('activateSubjects', data)}
            className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[13px] h-[50px] items-center left-[1060px] pl-[19.792px] pr-[18.75px] py-[7.292px] rounded-[8.333px] top-[738px] hover:bg-[#face55] transition-colors cursor-pointer"
            data-name="Button"
          >
            <SolidFilesBook className="relative shrink-0 size-[30px]" />
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.75px] text-nowrap whitespace-pre">Add Subjects</p>
          </button>

          {/* Card Group */}
          <div className="absolute contents left-[144px] top-[842px]" data-name="Card Group">
            {/* Subject Cards */}
            {MOCK_SUBJECTS.map((subject, index) => (
              <div key={subject.id} style={{ position: 'absolute', left: `${144 + (index * 382)}px`, top: '842px' }}>
                <SubjectCard subject={subject} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
