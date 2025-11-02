import svgPaths from '../../../imports/svg-3v0bu8164x';
import imgClipInternationalEducation2 from "figma:asset/0c2c26a084eeb039082ca6e93ab9beaa8e537242.png";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface OrganizationDashboardLandingMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
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
            onNavigate('organizationDashboardLanding');
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

export function OrganizationDashboardLandingMobile({ onNavigate, data }: OrganizationDashboardLandingMobileProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleActionClick = (action: string) => {
    onNavigate(action as any);
  };

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Organization Dashboard Landing - Mobile">
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={onNavigate} />
      
      {/* Header */}
      <div className="absolute bg-white h-[70px] left-0 top-0 w-[375px] border-b border-gray-100">
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
          <p className="leading-[32px]">Dashboard</p>
        </div>
        
        {/* Illustration and heading */}
        <div className="flex flex-col items-center mb-8">
          <div className="size-[180px] mb-4" data-name="clip-international-education 2">
            <img alt="" className="size-full object-cover opacity-50 pointer-events-none" src={imgClipInternationalEducation2} />
          </div>
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic text-[#05051b] text-[20px] text-center mb-3">
            <p className="leading-[1.5]">{`Setup your Organisation`}</p>
          </div>
          <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[20px] not-italic text-[#9b9b9b] text-[13px] text-center">
            <p>{`Welcome to Gopele. Lorem ipsum dolor sit amet, consectetur elit. Ultricies sed lectus in sed pharetra.`}</p>
          </div>
        </div>
        
        {/* Action Cards */}
        <div className="flex flex-col gap-4">
          {/* Activate a Course */}
          <div className="bg-white rounded-[10px] p-5 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-[rgba(31,96,216,0.15)] rounded-[10px] size-[50px] flex items-center justify-center flex-shrink-0">
                <div className="size-[24px]" data-name="document 2">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="document 2">
                      <path d={svgPaths.p1c9cfef0} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[16px] mb-2">
                  <p className="leading-[24px]">Activate a Course</p>
                </div>
                <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[18px] not-italic text-[#9b9b9b] text-[12px] mb-3">
                  <p>{`Lorem ipsum dolor sit amet, consectetur elit. amet consectetur amet elit.`}</p>
                </div>
                <button
                  onClick={() => handleActionClick('organizationCourses')}
                  className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic text-[#1f60d8] hover:text-[#1850b8] text-[12px] cursor-pointer transition-colors"
                >
                  <p className="leading-[normal]">Get started</p>
                </button>
              </div>
            </div>
          </div>
          
          {/* Enroll Learners */}
          <div className="bg-white rounded-[10px] p-5 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-[rgba(35,35,35,0.15)] rounded-[10px] size-[50px] flex items-center justify-center flex-shrink-0">
                <div className="size-[24px]" data-name="Mask group">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g id="Mask group">
                      <mask height="24" id="mask0_2034_234" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18398" width="24" />
                      </mask>
                      <g mask="url(#mask0_2034_234)">
                        <path d={svgPaths.pf4edc00} fill="var(--fill-0, #232323)" id="Vector" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[16px] mb-2">
                  <p className="leading-[24px]">Enroll Learners</p>
                </div>
                <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[18px] not-italic text-[#9b9b9b] text-[12px] mb-3">
                  <p>{`Welcome to Gopele. Lorem ipsum dolor sit amet, consectetur amet elit.`}</p>
                </div>
                <button
                  onClick={() => handleActionClick('organizationLearners')}
                  className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic text-[#1f60d8] hover:text-[#1850b8] text-[12px] cursor-pointer transition-colors"
                >
                  <p className="leading-[normal]">Get started</p>
                </button>
              </div>
            </div>
          </div>
          
          {/* Team Members */}
          <div className="bg-white rounded-[10px] p-5 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-[rgba(250,206,85,0.15)] rounded-[10px] size-[50px] flex items-center justify-center flex-shrink-0">
                <div className="size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="Group 11829">
                      <path d={svgPaths.p1a938800} fill="var(--fill-0, #FACE55)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[16px] mb-2">
                  <p className="leading-[24px]">Team Members</p>
                </div>
                <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[18px] not-italic text-[#9b9b9b] text-[12px] mb-3">
                  <p>Welcome to Gopele. Lorem ipsum dolor sit amet, consectetur amet elit.</p>
                </div>
                <button
                  onClick={() => handleActionClick('organizationInstructors')}
                  className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic text-[#1f60d8] hover:text-[#1850b8] text-[12px] cursor-pointer transition-colors"
                >
                  <p className="leading-[normal]">Get started</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
