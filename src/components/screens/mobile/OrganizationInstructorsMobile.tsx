import { useState } from 'react';
import svgPaths from '../../../imports/svg-gpwc6h2mrb';
import { Menu, X, Search, Plus } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface OrganizationInstructorsMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

interface Instructor {
  id: string;
  name: string;
  course: string;
  students: number;
  email: string;
}

const MOCK_INSTRUCTORS: Instructor[] = [
  { id: '1', name: 'Dr. Emily Roberts', course: 'Public Speaking', students: 45, email: 'emily.r@example.com' },
  { id: '2', name: 'Prof. James Wilson', course: 'Time Management', students: 38, email: 'james.w@example.com' },
  { id: '3', name: 'Sarah Mitchell', course: 'Creative Writing', students: 52, email: 'sarah.m@example.com' },
  { id: '4', name: 'Dr. Robert Chen', course: 'Deep Learning', students: 61, email: 'robert.c@example.com' },
  { id: '5', name: 'Jessica Thompson', course: 'Business Foundations', students: 29, email: 'jessica.t@example.com' },
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
          className="text-[#a1a5b3] hover:text-[#1f60d8] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left transition-colors"
        >
          Courses
        </button>
        <button
          onClick={() => {
            onNavigate('teamDetails');
            onClose();
          }}
          className="bg-[#1f60d8] text-white px-4 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] text-left"
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

export function OrganizationInstructorsMobile({ onNavigate, data }: OrganizationInstructorsMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddInstructor = () => {
    toast.info('Add instructor functionality coming soon!');
  };

  const filteredInstructors = MOCK_INSTRUCTORS.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instructor.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Organization Instructors - Mobile">
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
          <p className="leading-[32px]">Instructors</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search instructors..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
            />
          </div>
        </div>
        
        {/* Add Instructor Button */}
        <button
          onClick={handleAddInstructor}
          className="w-full bg-[#1f60d8] text-white px-4 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors mb-4"
        >
          <Plus size={18} />
          Add Instructor
        </button>
        
        {/* Instructors List */}
        <div className="flex flex-col gap-3">
          {filteredInstructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#0b0c0c] mb-1">{instructor.name}</p>
                  <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b]">{instructor.email}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div>
                  <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#666] mb-1">Course</p>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[13px] text-[#0b0c0c]">{instructor.course}</p>
                </div>
                <div className="text-right">
                  <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#666] mb-1">Students</p>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[13px] text-[#0b0c0c]">{instructor.students}</p>
                </div>
              </div>
            </div>
          ))}
          
          {filteredInstructors.length === 0 && (
            <div className="text-center py-8">
              <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#9b9b9b]">No instructors found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
