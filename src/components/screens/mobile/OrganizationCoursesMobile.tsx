import { useState } from 'react';
import svgPaths from '../../../imports/svg-vbkj569gmw';
import imgOip2 from "figma:asset/2847e84888722b6447dc866ddde9d22881c7b831.png";
import imgDGz79XQ1 from "figma:asset/20cc6c905cd5c3d73603a4d1411bf2b5121ded72.png";
import img024951 from "figma:asset/478aa451e99912cdfbc9ea0bbeea6ab322d85d47.png";
import imgR1 from "figma:asset/1f589fd765022b360dafc0d58353bc2f73d95be5.png";
import imgRectangle18446 from "figma:asset/788c0f1a278c53863862a04f57f0b028d24cedee.png";
import imgRectangle18447 from "figma:asset/0fd292a7326c45bc957f1747410a65f4e9232bab.png";
import imgRectangle18448 from "figma:asset/b31faaad83c9cdba62a1f5941e6974dc3d217f08.png";
import imgRectangle18449 from "figma:asset/a6558f1d94b3d6b3e2d8dec0cdbcd945700b620b.png";
import imgRectangle18450 from "figma:asset/7dc79c43243288b586ec91b109c836473e3db204.png";
import { Menu, X, Search } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface OrganizationCoursesMobileProps {
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

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[38px] w-[38px] relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <g id="Frame 2">
            <path d={svgPaths.pdcf71c0} fill="var(--fill-0, #1F60D8)" id="Vector" />
          </g>
        </svg>
        <div className="absolute inset-[11.05%_27.7%_11.05%_21.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
            <g id="Group 12">
              <g id="svgg">
                <path clipRule="evenodd" d={svgPaths.p154f6800} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
              </g>
              <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.77496" y="4.39174" />
              <path d={svgPaths.p9362e00} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Bold',_sans-serif] leading-[17px] not-italic text-[#232323] text-[18px]">Gopele</p>
    </div>
  );
}

function MobileMenu({ isOpen, onClose, onNavigate }: { isOpen: boolean; onClose: () => void; onNavigate: (screen: string) => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <Logo />
        <button onClick={onClose} className="p-2">
          <X size={24} color="#232323" />
        </button>
      </div>
      
      <div className="p-6 flex flex-col gap-4">
        <button
          onClick={() => {
            onNavigate('organizationDashboardLanding');
            onClose();
          }}
          className="text-[#a1a5b3] hover:text-[#1f60d8] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left transition-colors"
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            onNavigate('organizationCourses');
            onClose();
          }}
          className="bg-[#1f60d8] text-white px-4 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] text-left"
        >
          Courses
        </button>
        <button
          onClick={() => {
            onNavigate('teamDetails');
            onClose();
          }}
          className="text-[#a1a5b3] hover:text-[#1f60d8] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left transition-colors"
        >
          Instructors
        </button>
        <button
          onClick={() => {
            onNavigate('organizationLearners');
            onClose();
          }}
          className="text-[#a1a5b3] hover:text-[#1f60d8] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left transition-colors"
        >
          Learners
        </button>
        <button className="text-[#a1a5b3] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left">
          Settings
        </button>
        <div className="mt-8">
          <button className="text-[#a1a5b3] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export function OrganizationCoursesMobile({ onNavigate, data }: OrganizationCoursesMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState(COURSES);

  const toggleCourseActivation = (courseId: string) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, isActivated: !course.isActivated }
        : course
    ));
    const course = courses.find(c => c.id === courseId);
    if (course) {
      toast.success(course.isActivated ? 'Course deactivated' : 'Course activated successfully!');
    }
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Organization Courses - Mobile">
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={onNavigate} />
      
      {/* Header */}
      <div className="absolute bg-white h-[70px] left-0 top-0 w-[375px] border-b border-gray-100 z-10">
        <div className="flex items-center justify-between px-6 h-full">
          <button onClick={() => setMenuOpen(true)} className="p-2 -ml-2">
            <Menu size={24} color="#232323" />
          </button>
          <Logo />
          <div className="w-8" /> {/* Spacer for balance */}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="absolute left-0 top-[70px] w-[375px] h-[774px] overflow-y-auto bg-[#fafcfe] px-6 py-6">
        {/* Page Title */}
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[24px] text-black mb-6">
          <p className="leading-[32px]">Courses</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
            />
          </div>
        </div>
        
        {/* Courses List */}
        <div className="flex flex-col gap-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden border border-gray-100">
              <div className="h-[120px] w-full relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#0b0c0c] mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#666]">{course.topics} Topics</span>
                  <span className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#666]">{course.duration}</span>
                </div>
                <button
                  onClick={() => toggleCourseActivation(course.id)}
                  className={`w-full px-4 py-2.5 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[13px] transition-colors ${
                    course.isActivated
                      ? 'bg-gray-100 text-[#666] hover:bg-gray-200'
                      : 'bg-[#1f60d8] text-white hover:bg-[#1850b8]'
                  }`}
                >
                  {course.isActivated ? 'Deactivate' : 'Activate Course'}
                </button>
              </div>
            </div>
          ))}
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-8">
              <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#9b9b9b]">No courses found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
