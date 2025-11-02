import { useState } from 'react';
import svgPaths from '../../imports/svg-vbkj569gmw';
import imgOip2 from "figma:asset/2847e84888722b6447dc866ddde9d22881c7b831.png";
import imgDGz79XQ1 from "figma:asset/20cc6c905cd5c3d73603a4d1411bf2b5121ded72.png";
import img024951 from "figma:asset/478aa451e99912cdfbc9ea0bbeea6ab322d85d47.png";
import imgR1 from "figma:asset/1f589fd765022b360dafc0d58353bc2f73d95be5.png";
import imgRectangle18446 from "figma:asset/788c0f1a278c53863862a04f57f0b028d24cedee.png";
import imgRectangle18447 from "figma:asset/0fd292a7326c45bc957f1747410a65f4e9232bab.png";
import imgRectangle18448 from "figma:asset/b31faaad83c9cdba62a1f5941e6974dc3d217f08.png";
import imgRectangle18449 from "figma:asset/a6558f1d94b3d6b3e2d8dec0cdbcd945700b620b.png";
import imgRectangle18450 from "figma:asset/7dc79c43243288b586ec91b109c836473e3db204.png";
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { imgOip1, imgGroup11829, imgGroup11828 } from "../../imports/svg-3jryv";

interface OrganizationCoursesProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

interface Course {
  id: string;
  title: string;
  topics: number;
  duration: string;
  image: string;
  isActivated: boolean;
}

const COURSES: Course[] = [
  { id: '1', title: 'Public Speaking', topics: 12, duration: '01h 2m 12s', image: imgRectangle18450, isActivated: false },
  { id: '2', title: 'Practical Leadership', topics: 5, duration: '01h 2m 12s', image: imgRectangle18447, isActivated: false },
  { id: '3', title: 'How to Learn', topics: 9, duration: '01h 2m 12s', image: imgRectangle18446, isActivated: false },
  { id: '4', title: 'Time Management', topics: 10, duration: '01h 2m 12s', image: imgRectangle18448, isActivated: false },
  { id: '5', title: 'Creative Writing', topics: 18, duration: '01h 2m 12s', image: imgRectangle18449, isActivated: false },
  { id: '6', title: 'Deep Learning', topics: 12, duration: '01h 2m 12s', image: imgOip2, isActivated: false },
  { id: '7', title: 'Business Foundations', topics: 5, duration: '01h 23m 1s', image: imgR1, isActivated: false },
  { id: '8', title: 'IELTS Preparation', topics: 7, duration: '00h 40m 15s', image: imgDGz79XQ1, isActivated: false },
  { id: '9', title: 'Introduction to Law', topics: 4, duration: '00h 21m 50s', image: img024951, isActivated: false },
];

function SideBar({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="absolute contents left-0 top-0 z-10" data-name="Side Bar">
      <div className="absolute flex h-[1155px] items-center justify-center left-0 top-0 w-[247px] z-10">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white h-[1155px] w-[247px]" />
        </div>
      </div>
      
      {/* Dashboard */}
      <button
        onClick={() => onNavigate('organizationDashboard')}
        className="absolute left-[21px] top-[130px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Dashboard</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 11828">
              <path d={svgPaths.p15ef7400} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              <path d={svgPaths.p30e6c380} fill="var(--fill-0, #A1A5B3)" id="Vector_2" />
              <path d={svgPaths.p4663400} fill="var(--fill-0, #A1A5B3)" id="Vector_3" />
              <path d={svgPaths.p12687700} fill="var(--fill-0, #A1A5B3)" id="Vector_4" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Courses - Active */}
      <div className="absolute contents left-[21px] top-[191px] z-20">
        <div className="absolute bg-[#1f60d8] h-[49px] left-[21px] rounded-[10px] top-[191px] w-[192px] z-20" />
        <div className="absolute contents left-[39px] top-[204px] z-20">
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[14px] text-nowrap text-white top-[215.5px] tracking-[-0.28px] translate-y-[-50%] z-20">
            <p className="leading-[21px] whitespace-pre">Courses</p>
          </div>
          <div className="absolute left-[39px] size-[24px] top-[204px] z-20" data-name="document 1">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="document 1">
                <path d={svgPaths.p1c9cfef0} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Instructors */}
      <button
        onClick={() => onNavigate('organizationInstructors')}
        className="absolute left-[21px] top-[265px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Instructors</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 11829">
              <path d={svgPaths.p1a938800} fill="var(--fill-0, #A1A5B3)" id="Vector" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Learners */}
      <button
        onClick={() => onNavigate('organizationLearners')}
        className="absolute left-[21px] top-[326px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Learners</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]" data-name="Mask group">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Mask group">
              <mask height="24" id="mask0_2034_219" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18398" width="24" />
              </mask>
              <g mask="url(#mask0_2034_219)">
                <path d={svgPaths.pf4edc00} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              </g>
            </g>
          </svg>
        </div>
      </button>
      
      {/* Settings */}
      <button
        onClick={() => console.log('Settings clicked')}
        className="absolute left-[21px] top-[387px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Settings</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]" data-name="Mask group">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Mask group">
              <mask height="24" id="mask0_2034_204" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18408" width="24" />
              </mask>
              <g mask="url(#mask0_2034_204)">
                <path d={svgPaths.p16b7f6f0} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              </g>
            </g>
          </svg>
        </div>
      </button>
      
      {/* Logout */}
      <button
        onClick={() => console.log('Logout clicked')}
        className="absolute left-[21px] top-[694px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Logout</p>
        </div>
        <div className="absolute left-[18px] w-[24px] h-[24px] top-[50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
            <g id="Group 11851">
              <path d={svgPaths.p9368b00} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              <path d={svgPaths.p218dd800} fill="var(--fill-0, #A1A5B3)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Help & Resources Button */}
      <button
        onClick={() => console.log('Help & Resources clicked')}
        className="absolute bg-[#0b0c0c] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[37px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[759px] w-[172px] z-20 cursor-pointer hover:bg-[#2b2c2c] transition-colors" data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{`Help & Resources`}</p>
      </button>
    </div>
  );
}

function TopNav({ organizationName }: { organizationName?: string }) {
  return (
    <div className="absolute contents left-[-2px] top-0 z-20" data-name="nav">
      <div className="absolute bg-white h-[86px] left-[-2px] top-0 w-[1440px] z-20" />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[320px] not-italic text-[32px] text-black text-nowrap top-[43px] translate-y-[-50%] z-20">
        <p className="leading-[42px] whitespace-pre">Courses</p>
      </div>
      
      {/* Notification Icons */}
      <div className="absolute flex gap-[20px] left-[1165px] top-[25px] z-20">
        {/* Search Icon */}
        <button
          onClick={() => console.log('Search clicked')}
          className="relative bg-gray-100 rounded-[15px] size-[40px] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center z-20"
        >
          <svg className="size-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p1160ca00} fill="var(--fill-0, #0B0C0C)" id="Vector" />
          </svg>
        </button>
        
        {/* Notification Icon */}
        <button
          onClick={() => console.log('Notifications clicked')}
          className="relative bg-gray-100 rounded-[15px] size-[40px] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center z-20"
        >
          <svg className="size-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
            <g id="Notification">
              <path d={svgPaths.p2c0b1d00} fill="var(--fill-0, #0B0C0C)" id="Fill 1" />
              <path d={svgPaths.p14e42c00} fill="var(--fill-0, #0B0C0C)" id="Fill 4" opacity="0.4" />
            </g>
          </svg>
          {/* Notification Badge */}
          <div className="absolute -top-[9px] -right-[9px] size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, #D81F1F)" id="Ellipse 110" r="9" />
            </svg>
            <div className="absolute flex items-center justify-center inset-0">
              <p className="font-['Poppins:SemiBold',_sans-serif] text-[10px] text-white">5</p>
            </div>
          </div>
        </button>
      </div>
      
      {/* User Profile */}
      <button
        onClick={() => console.log('Profile clicked')}
        className="absolute flex items-center gap-[9px] left-[1291px] top-[19px] z-20 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="rounded-[10px] size-[46px]">
          <img alt="" className="w-full h-full object-cover rounded-[10px]" src={imgRectangle18391} />
        </div>
        <div className="flex flex-col justify-center text-nowrap">
          <p className="font-['Poppins:Medium',_sans-serif] text-[20px] text-black leading-[17.039px]">{organizationName || 'Seev'}</p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[#a8a8a8] text-[12px] leading-[20px] tracking-[-0.192px]">#10532</p>
        </div>
      </button>
    </div>
  );
}

function ActivatedCourseCard({ course }: { course: Course }) {
  return (
    <div className="relative w-[267.12px] shrink-0">
      <div className="h-[261.184px] rounded-[10px] relative" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(217, 217, 217) 0%, rgb(217, 217, 217) 100%)" }}>
        {/* Course Image */}
        <div className="absolute h-[128.613px] left-[9.89px] rounded-[10px] top-[11.87px] w-[246.344px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[246.344px_128.613px]" style={{ maskImage: `url('${imgOip1}')` }}>
          <img alt={course.title} className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={course.image} />
        </div>
        
        {/* Topics Count */}
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[32px] justify-center leading-[0] left-[18px] not-italic text-[#4f4f4f] text-[14px] top-[166px] translate-y-[-50%] w-[238px]">
          <p className="leading-[32px]">{course.topics} Topics</p>
        </div>
        
        {/* Course Title */}
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[32px] justify-center leading-[0] left-[18px] not-italic text-[#333333] text-[18px] top-[182px] translate-y-[-50%] w-[238px]">
          <p className="leading-[32px]">{course.title}</p>
        </div>
        
        {/* Duration */}
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[17.81px] not-italic text-[#4f4f4f] text-[14px] text-nowrap top-[228.04px] translate-y-[-50%]">
          <p className="leading-[45.434px] whitespace-pre">{course.duration}</p>
        </div>
        
        {/* Activated Badge */}
        <div className="absolute bg-[#f6f8fa] h-[27.701px] left-[163.24px] rounded-[29px] top-[212.71px] w-[92.997px] flex items-center justify-center">
          <p className="font-['Poppins:Medium',_sans-serif] text-[#1f60d8] text-[12px] leading-[45.434px]">
            Activated
          </p>
        </div>
      </div>
    </div>
  );
}

function AvailableCourseCard({ course, onToggleActivate }: { course: Course; onToggleActivate: (id: string) => void }) {
  return (
    <div className="relative w-[210.889px] h-[286px]">
      {/* Course Image */}
      <div className="absolute h-[144.444px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[210.889px] overflow-hidden">
        <img alt={course.title} className="w-full h-full object-cover" src={course.image} />
      </div>
      
      {/* Course Info */}
      <div className="absolute bg-white h-[141.556px] left-0 rounded-bl-[10px] rounded-br-[10px] top-[144.444px] w-[210.889px]">
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[21.185px] justify-center leading-[0] left-[15.407px] not-italic text-[#4f4f4f] text-[10px] top-[24.075px] translate-y-[-50%] w-[161.778px]">
          <p className="leading-[32px]">{course.topics} Topics</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[24.074px] justify-center leading-[0] left-[15.407px] not-italic text-[#333333] text-[16px] top-[41.886px] translate-y-[-50%] w-[182px]">
          <p className="leading-[32px]">{course.title}</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[21.185px] justify-center leading-[0] left-[15.407px] not-italic text-[#e0e0e0] text-[10px] top-[62.596px] translate-y-[-50%] w-[69.333px]">
          <p className="leading-[45.434px]">{course.duration}</p>
        </div>
        
        {/* Activate Button or Activated Badge */}
        {course.isActivated ? (
          <div className="absolute bg-[#f6f8fa] h-[31.568px] left-[15.407px] rounded-[29px] top-[86.667px] w-[111.704px] flex items-center justify-center">
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[#1f60d8] text-[12px] leading-[45.434px]">
              Activated
            </p>
          </div>
        ) : (
          <button
            onClick={() => onToggleActivate(course.id)}
            className="absolute bg-[#1f60d8] hover:bg-[#1850b8] h-[31.568px] left-[15.407px] rounded-[29px] top-[86.667px] w-[111.704px] flex items-center justify-center transition-colors"
          >
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[#f6f8fa] text-[12px] leading-[45.434px]">
              Activate
            </p>
          </button>
        )}
      </div>
    </div>
  );
}

export function OrganizationCourses({ onNavigate, data }: OrganizationCoursesProps) {
  const [courses, setCourses] = useState<Course[]>(COURSES);
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const activatedCourses = courses.filter(c => c.isActivated);
  const hasActivatedCourses = activatedCourses.length > 0;

  const handleToggleActivate = (courseId: string) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, isActivated: !course.isActivated }
        : course
    ));
  };

  const handlePrevCourse = () => {
    setCarouselIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextCourse = () => {
    setCarouselIndex(prev => Math.min(activatedCourses.length - 4, prev + 1));
  };

  // Dynamic positioning based on activated courses
  const availableCoursesTop = hasActivatedCourses ? 501 : 437;
  const availableCoursesGridRow1Top = hasActivatedCourses ? 548 : 483;
  const availableCoursesGridRow2Top = hasActivatedCourses ? 849 : 784;
  const dropdownTop = hasActivatedCourses ? 478 : 413;

  return (
    <div className="bg-white relative size-full" data-name="Organizational -Courses  -  All Course - Option to activate Course">
      <div className={`absolute bg-[#fafcfe] h-[1302px] top-0 w-[1193px] ${hasActivatedCourses ? 'left-[252px]' : 'left-[247px]'}`} />
      
      {/* Empty State (if no courses activated) */}
      {!hasActivatedCourses && (
        <>
          <div className="absolute bg-[rgba(31,96,216,0.15)] left-[809px] rounded-[10px] size-[50px] top-[199px]" />
          <div className="absolute left-[822px] size-[24px] top-[212px]" data-name="document 2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="document 2">
                <path d={svgPaths.p1c9cfef0} fill="var(--fill-0, #1F60D8)" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[737px] not-italic text-[#232323] text-[20px] top-[285px] translate-y-[-50%] w-[214px]">
            <p className="leading-[30px] whitespace-pre-wrap">{`No Course  Activated`}</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[843.5px] not-italic text-[#9b9b9b] text-[13px] text-center top-[326px] translate-x-[-50%] translate-y-[-50%] w-[307px]">
            <p className="leading-[normal] whitespace-pre-wrap">{` Lorem ipsum dolor sit amet, consectetur elit.  amet consectetur amet elit.`}</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[825.5px] not-italic text-[#1f60d8] text-[13px] text-center top-[365px] translate-x-[-50%] translate-y-[-50%] w-[129px]">
            <p className="leading-[normal]">Start Activating</p>
          </div>
        </>
      )}
      
      {/* Activated Courses Section */}
      {hasActivatedCourses && (
        <>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[287px] not-italic text-[24px] text-black text-nowrap top-[134px] translate-y-[-50%]">
            <p className="leading-[42px] whitespace-pre">Activated Courses</p>
          </div>
          
          {/* Search Bar */}
          <div className="absolute bg-[rgba(236,241,244,0.3)] bottom-[1083px] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+527.5px)] pl-[16px] pr-[12px] py-[14px] rounded-[12px] top-[110px] translate-x-[-50%] w-[293px]">
            <div aria-hidden="true" className="absolute border border-[rgba(22,22,23,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="relative shrink-0 size-[20px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="MagnifyingGlass">
                  <g id="Vector"></g>
                  <path d={svgPaths.p688b600} id="Vector_2" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
                  <path d={svgPaths.p14f1df00} id="Vector_3" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:Regular',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,37,0.4)] text-nowrap whitespace-pre">{`Search  for an activated Course`}</p>
          </div>
          
          {/* Left Arrow */}
          <button
            onClick={handlePrevCourse}
            disabled={carouselIndex === 0}
            className="absolute contents left-[276px] top-[272px] disabled:opacity-30"
          >
            <div className="absolute flex items-center justify-center left-[276px] size-[42px] top-[272px]">
              <div className="flex-none rotate-[180deg]">
                <div className="relative size-[42px]">
                  <div className="absolute bottom-[-19.05%] left-[-9.52%] right-[-9.52%] top-0">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                      <g filter="url(#filter0_d_2038_1642)" id="Ellipse 73">
                        <path d={svgPaths.p1c68100} fill="var(--fill-0, white)" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_d_2038_1642" width="50" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2038_1642" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_2038_1642" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex items-center justify-center left-[289px] size-[16px] top-[285px]">
              <div className="flex-none scale-y-[-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="CaretLeft">
                    <g id="Vector"></g>
                    <path d="M10 13L5 8L10 3" id="Vector_2" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
          
          {/* Right Arrow */}
          <button
            onClick={handleNextCourse}
            disabled={carouselIndex >= activatedCourses.length - 4}
            className="absolute contents left-[1373px] top-[272px] disabled:opacity-30"
          >
            <div className="absolute left-[1373px] size-[42px] top-[272px]">
              <div className="absolute bottom-[-19.05%] left-[-9.52%] right-[-9.52%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                  <g filter="url(#filter0_d_2038_1638)" id="Ellipse 73">
                    <circle cx="25" cy="21" fill="var(--fill-0, white)" r="21" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter0_d_2038_1638" width="50" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2038_1638" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_2038_1638" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute flex items-center justify-center left-[1386px] size-[16px] top-[285px]">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="CaretLeft">
                    <g id="Vector"></g>
                    <path d="M10 13L5 8L10 3" id="Vector_2" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </div>
            </div>
          </button>
          
          {/* Activated Courses Carousel */}
          <div className="absolute flex gap-[14.96px] left-[287px] top-[174px] overflow-hidden w-[1113px]">
            <div className="flex gap-[14.96px] transition-transform duration-300" style={{ transform: `translateX(-${carouselIndex * (281.96)}px)` }}>
              {activatedCourses.map((course) => (
                <ActivatedCourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </>
      )}
      
      {/* Available Courses Section */}
      <div className={`absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[287px] not-italic text-[24px] text-black text-nowrap translate-y-[-50%]`} style={{ top: `${availableCoursesTop}px` }}>
        <p className="leading-[42px] whitespace-pre">{` Available Courses`}</p>
      </div>
      
      {/* All Courses Dropdown */}
      <div className={`absolute contents left-[1255px]`} style={{ top: `${dropdownTop}px` }}>
        <div className={`absolute h-[43px] left-[1255px] rounded-[10px] w-[140px]`} style={{ top: `${dropdownTop}px` }}>
          <div aria-hidden="true" className="absolute border border-[#c6d5de] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
        <div className="absolute contents left-[1268px]" style={{ top: `${dropdownTop + 1}px` }}>
          <div className={`absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[1268px] not-italic text-[#bdbdbd] text-[${hasActivatedCourses ? '16px' : '14px'}] text-nowrap translate-y-[-50%]`} style={{ top: `${dropdownTop + 22}px` }}>
            <p className="leading-[42px] whitespace-pre">All Courses</p>
          </div>
          <div className="absolute flex inset-[37.79%_4.2%_61.77%_95.1%] items-center justify-center">
            <div className="flex-none h-[10px] rotate-[270deg] scale-y-[-100%] w-[5px]">
              <div className="relative size-full">
                <div className="absolute inset-[-10%_-20%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
                    <path d="M6 11L1 6L6 1" id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Available Courses Grid - Row 1 */}
      <div className={`absolute flex gap-[25px] left-[287px]`} style={{ top: `${availableCoursesGridRow1Top}px` }}>
        {courses.slice(0, 5).map((course) => (
          <AvailableCourseCard 
            key={course.id} 
            course={course} 
            onToggleActivate={handleToggleActivate}
          />
        ))}
      </div>
      
      {/* Available Courses Grid - Row 2 */}
      <div className={`absolute flex gap-[25px] left-[287px]`} style={{ top: `${availableCoursesGridRow2Top}px` }}>
        {courses.slice(0, 5).map((course) => (
          <AvailableCourseCard 
            key={`${course.id}-2`} 
            course={course} 
            onToggleActivate={handleToggleActivate}
          />
        ))}
      </div>
      
      <SideBar onNavigate={onNavigate} />
      <TopNav organizationName={data?.organizationName} />
    </div>
  );
}
