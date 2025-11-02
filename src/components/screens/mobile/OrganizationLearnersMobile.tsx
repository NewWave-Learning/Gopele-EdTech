import svgPaths from '../../../imports/svg-vj9lkq47mt';
import { Menu, X, Plus, Search } from 'lucide-react';
import { useState } from 'react';

interface OrganizationLearnersMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
    hasLearners?: boolean;
  };
}

interface Learner {
  id: string;
  name: string;
  course: string;
  progress: number;
  email: string;
}

const MOCK_LEARNERS: Learner[] = [
  { id: '1', name: 'Sarah Johnson', course: 'Public Speaking', progress: 85, email: 'sarah.j@example.com' },
  { id: '2', name: 'Michael Chen', course: 'Time Management', progress: 62, email: 'michael.c@example.com' },
  { id: '3', name: 'Emma Williams', course: 'Creative Writing', progress: 91, email: 'emma.w@example.com' },
  { id: '4', name: 'David Brown', course: 'Deep Learning', progress: 45, email: 'david.b@example.com' },
  { id: '5', name: 'Lisa Anderson', course: 'Public Speaking', progress: 73, email: 'lisa.a@example.com' },
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
          className="text-[#a1a5b3] hover:text-[#1f60d8] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left transition-colors"
        >
          Instructors
        </button>
        <button
          onClick={() => {
            onNavigate('organizationLearners');
            onClose();
          }}
          className="bg-[#1f60d8] text-white px-4 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] text-left"
        >
          Learners
        </button>
        <button
          className="text-[#a1a5b3] px-4 py-3 font-['Poppins:Regular',_sans-serif] text-[14px] text-left"
        >
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

function EmptyState({ onAddLearner }: { onAddLearner: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="size-[120px] mb-6 opacity-50">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="40" stroke="#1f60d8" strokeWidth="2" fill="none" />
          <circle cx="60" cy="45" r="12" stroke="#1f60d8" strokeWidth="2" fill="none" />
          <path d="M35 85 C35 70, 45 65, 60 65 C75 65, 85 70, 85 85" stroke="#1f60d8" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[#0b0c0c] text-[20px] text-center mb-3">
        <p className="leading-[28px]">No Learners Yet</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[20px] not-italic text-[#9b9b9b] text-[13px] text-center mb-6 px-8">
        <p>{`Add learners to your organization to get started with course enrollment and tracking.`}</p>
      </div>
      <button
        onClick={onAddLearner}
        className="bg-[#1f60d8] text-white px-6 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] flex items-center gap-2 hover:bg-[#1850b8] transition-colors"
      >
        <Plus size={18} />
        Add Learner
      </button>
    </div>
  );
}

function LearnersWithData({ learners, onAddLearner }: { learners: Learner[]; onAddLearner: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLearners = learners.filter(learner =>
    learner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    learner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    learner.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search learners..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
          />
        </div>
      </div>
      
      {/* Add Learner Button */}
      <button
        onClick={onAddLearner}
        className="w-full bg-[#1f60d8] text-white px-4 py-3 rounded-lg font-['Poppins:SemiBold',_sans-serif] text-[14px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors mb-4"
      >
        <Plus size={18} />
        Add Learner
      </button>
      
      {/* Learners List */}
      <div className="flex flex-col gap-3">
        {filteredLearners.map((learner) => (
          <div key={learner.id} className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#0b0c0c] mb-1">{learner.name}</p>
                <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b]">{learner.email}</p>
              </div>
            </div>
            <div className="mb-2">
              <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#666] mb-1">{learner.course}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-[#1f60d8] h-full rounded-full transition-all duration-300"
                  style={{ width: `${learner.progress}%` }}
                />
              </div>
              <span className="font-['Poppins:Medium',_sans-serif] text-[12px] text-[#0b0c0c] min-w-[40px] text-right">
                {learner.progress}%
              </span>
            </div>
          </div>
        ))}
        
        {filteredLearners.length === 0 && (
          <div className="text-center py-8">
            <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#9b9b9b]">No learners found</p>
          </div>
        )}
      </div>
    </>
  );
}

export function OrganizationLearnersMobile({ onNavigate, data }: OrganizationLearnersMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasLearners, setHasLearners] = useState(data?.hasLearners || false);

  const handleAddLearner = () => {
    onNavigate('organizationAddLearner');
  };

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Organization Learners - Mobile">
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
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[24px] text-black">
            <p className="leading-[32px]">Learners</p>
          </div>
          {hasLearners && (
            <button
              onClick={() => setHasLearners(false)}
              className="text-[#1f60d8] font-['Poppins:Regular',_sans-serif] text-[12px] px-3 py-1 border border-[#1f60d8] rounded-lg hover:bg-[#1f60d8] hover:text-white transition-colors"
            >
              Toggle View
            </button>
          )}
        </div>
        
        {/* Content */}
        {hasLearners ? (
          <LearnersWithData learners={MOCK_LEARNERS} onAddLearner={handleAddLearner} />
        ) : (
          <>
            <EmptyState onAddLearner={handleAddLearner} />
            <div className="text-center mt-4">
              <button
                onClick={() => setHasLearners(true)}
                className="text-[#1f60d8] font-['Poppins:Regular',_sans-serif] text-[12px] underline"
              >
                View with data
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
