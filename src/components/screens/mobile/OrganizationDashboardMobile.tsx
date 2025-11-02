import { Screen } from '../../../hooks/useNavigation';
import svgPaths from '../../../imports/svg-vbkj569gmw';
import imgEllipse111 from "figma:asset/2bc478a6307061bc42d912aa60b0a54d5b19c4e7.png";
import imgRectangle18442 from "figma:asset/2847e84888722b6447dc866ddde9d22881c7b831.png";
import imgEllipse112 from "figma:asset/cc68363ba54b9302a94d8e3380aef381f4300f7b.png";
import imgRectangle18443 from "figma:asset/1f589fd765022b360dafc0d58353bc2f73d95be5.png";
import imgEllipse113 from "figma:asset/2599dd927f5bd0b36a5a5bbaf67077b6fc9ab9ab.png";
import imgRectangle18444 from "figma:asset/20cc6c905cd5c3d73603a4d1411bf2b5121ded72.png";
import imgEllipse114 from "figma:asset/1fb4c548fbc927602507165adc9cf7446c250110.png";
import imgRectangle18445 from "figma:asset/478aa451e99912cdfbc9ea0bbeea6ab322d85d47.png";
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface OrganizationDashboardMobileProps {
  onNavigate: (screen: Screen, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

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
            onNavigate('organizationDashboard');
            onClose();
          }}
          className="bg-[#1f60d8] text-white px-4 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] text-left"
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            onNavigate('organizationCourses');
            onClose();
          }}
          className="text-[#a1a5b3] hover:text-[#1f60d8] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left transition-colors"
        >
          Courses
        </button>
        <button
          onClick={() => {
            onNavigate('organizationInstructors');
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
      </div>
    </div>
  );
}

function StatCard({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[12px] p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[#a1a5b3] text-[12px] tracking-[-0.24px]">{title}</div>
        <div className="size-[24px]">{icon}</div>
      </div>
      <div className="font-['Poppins:SemiBold',sans-serif] text-[24px] leading-[36px]">{value}</div>
    </div>
  );
}

function TopLearnerCard({ 
  name, 
  email, 
  courseName, 
  progress, 
  avatar 
}: { 
  name: string; 
  email: string; 
  courseName: string; 
  progress: number; 
  avatar: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-[8px] mb-2">
      <div className="relative shrink-0 size-[48px] rounded-full overflow-hidden">
        <img 
          alt={name} 
          className="absolute inset-0 max-w-none object-cover size-full" 
          src={avatar} 
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-['Poppins:Medium',sans-serif] text-[14px] text-black truncate">
          {name}
        </div>
        <div className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#a8a8a8] truncate">
          {email}
        </div>
        <div className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#1f60d8] mt-1">
          {courseName}
        </div>
      </div>
      <div className="shrink-0 font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#1f60d8]">
        {progress}%
      </div>
    </div>
  );
}

function CourseCard({ 
  courseName, 
  instructor, 
  progress, 
  students, 
  courseImage 
}: { 
  courseName: string; 
  instructor: string; 
  progress: number; 
  students: number;
  courseImage: string;
}) {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden shadow-sm mb-3">
      <div className="relative h-[120px] w-full">
        <img 
          alt={courseName} 
          className="absolute inset-0 max-w-none object-cover size-full" 
          src={courseImage} 
        />
      </div>
      <div className="p-3">
        <div className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-black mb-1">
          {courseName}
        </div>
        <div className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#a8a8a8] mb-2">
          By {instructor}
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <div className="text-[#a8a8a8]">
            {students} Students
          </div>
          <div className="text-[#1f60d8] font-['Poppins:Medium',sans-serif]">
            {progress}% Complete
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrganizationDashboardMobile({ onNavigate, data }: OrganizationDashboardMobileProps) {
  const [showMenu, setShowMenu] = useState(false);
  const organizationName = data?.organizationName || 'Seev';

  const handleNavigate = (screen: Screen) => {
    onNavigate(screen, { organizationName });
  };

  return (
    <div className="bg-[#f8f9fa] relative w-[375px] min-h-screen overflow-x-hidden" data-name="Organization Dashboard - Mobile">
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={showMenu} 
        onClose={() => setShowMenu(false)} 
        onNavigate={handleNavigate}
      />

      {/* Header */}
      <div className="bg-white h-[64px] left-0 sticky top-0 w-full shadow-sm z-40">
        <div className="flex items-center justify-between px-6 h-full">
          <button onClick={() => setShowMenu(true)} className="p-2">
            <Menu size={24} color="#1F60D8" />
          </button>
          <div className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
            Dashboard
          </div>
          <div className="size-[32px] rounded-full overflow-hidden">
            <img 
              alt="Profile" 
              className="size-full object-cover" 
              src={imgRectangle18391} 
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-20">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatCard
            title="Total Courses"
            value="12"
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="document 2">
                  <path d={svgPaths.p1fe17940} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            }
          />
          <StatCard
            title="Total Learners"
            value="248"
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Mask group">
                  <mask height="24" id="mask0_stat_learners" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                  </mask>
                  <g mask="url(#mask0_stat_learners)">
                    <path d={svgPaths.p21ae0200} fill="var(--fill-0, #1F60D8)" id="Vector" />
                  </g>
                </g>
              </svg>
            }
          />
          <StatCard
            title="Total Instructors"
            value="18"
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="Mask group">
                  <mask height="24" id="mask0_stat_instructors" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="24" width="24" />
                  </mask>
                  <g mask="url(#mask0_stat_instructors)">
                    <path d={svgPaths.p2e11c900} fill="var(--fill-0, #1F60D8)" id="Vector" />
                  </g>
                </g>
              </svg>
            }
          />
          <StatCard
            title="Total Quizzes"
            value="512"
            icon={
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="document 3">
                  <path d={svgPaths.p1fe17940} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            }
          />
        </div>

        {/* Top Learners */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
              Top Learners
            </div>
            <button 
              onClick={() => handleNavigate('organizationLearners')}
              className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#1f60d8]"
            >
              View All
            </button>
          </div>
          <div>
            <TopLearnerCard
              name="Lesego Mokoena"
              email="lesego@example.com"
              courseName="Space"
              progress={85}
              avatar={imgEllipse111}
            />
            <TopLearnerCard
              name="Thabo Ndlovu"
              email="thabo@example.com"
              courseName="Mathematics"
              progress={78}
              avatar={imgEllipse112}
            />
            <TopLearnerCard
              name="Zanele Dlamini"
              email="zanele@example.com"
              courseName="Science"
              progress={72}
              avatar={imgEllipse113}
            />
          </div>
        </div>

        {/* Active Courses */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-black">
              Active Courses
            </div>
            <button 
              onClick={() => handleNavigate('organizationCourses')}
              className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#1f60d8]"
            >
              View All
            </button>
          </div>
          <div>
            <CourseCard
              courseName="Space"
              instructor="Dr. Sarah Johnson"
              progress={65}
              students={45}
              courseImage={imgRectangle18442}
            />
            <CourseCard
              courseName="Mathematics Grade 10"
              instructor="Mr. John Smith"
              progress={58}
              students={52}
              courseImage={imgRectangle18443}
            />
            <CourseCard
              courseName="Physical Science"
              instructor="Ms. Mary Williams"
              progress={42}
              students={38}
              courseImage={imgRectangle18444}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
