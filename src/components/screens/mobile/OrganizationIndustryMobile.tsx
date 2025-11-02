import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../../imports/svg-4m82hak0up';

interface OrganizationIndustryMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  onLogin?: (role: 'student' | 'teacher' | 'admin' | 'gopeleAdmin', name: string) => void;
  data?: {
    organizationName?: string;
    organizationSize?: string;
  };
}

const INDUSTRY_OPTIONS = [
  { id: 'education', label: 'Education' },
  { id: 'technology', label: 'Technology' },
  { id: 'finance', label: 'Finance' },
  { id: 'agriculture', label: 'Agriculture' },
];

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[106px] top-[84px] w-[37.966px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 2">
          <path d={svgPaths.pcde7b00} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[10.19%_62.36%_85.9%_29.85%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p3af46480} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.77496" y="4.39174" />
          <path d={svgPaths.p16456600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[106px] top-[84px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute contents left-[106px] top-[84px]" data-name="Logo 3">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[11.25%_28.47%_86.57%_40.79%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Group11709() {
  return (
    <div className="absolute contents left-[106px] top-[84px]">
      <Logo3 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[106px] top-[84px]" data-name="Logo">
      <Group11709 />
    </div>
  );
}

export function OrganizationIndustryMobile({ onNavigate, onLogin, data }: OrganizationIndustryMobileProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [showMoreIndustries, setShowMoreIndustries] = useState(false);

  const handleContinue = () => {
    if (!selectedIndustry) {
      toast.error('Please select an industry');
      return;
    }

    const selectedOption = INDUSTRY_OPTIONS.find(opt => opt.id === selectedIndustry);
    
    if (onLogin) {
      onLogin('admin', data?.organizationName || 'Admin');
    }
    
    onNavigate('organizationCongratulations', {
      ...data,
      organizationIndustry: selectedOption?.label,
    });
  };

  const handleSeeMore = () => {
    setShowMoreIndustries(!showMoreIndustries);
    toast.info('Additional industries coming soon!');
  };

  return (
    <div className="bg-white relative w-[375px] min-h-[812px]" data-name="Mobile - Organizational - first time after loggin - - What industry does your organization  belongs to">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[187px] not-italic text-[#0b0c0c] text-[24px] text-center top-[197px] translate-x-[-50%] translate-y-[-50%] w-[326px]">
        <p className="leading-[normal]">What industry does your organization belongs to</p>
      </div>
      
      <Logo />
      
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[41px] leading-[25px] left-[187px] not-italic text-[#9b9b9b] text-[16px] text-center top-[252px] translate-x-[-50%] w-[326px]">Almost done with your setup</p>
      
      {/* Industry Options Grid - 2x2 */}
      <div className="absolute left-[42px] top-[335px] w-[300px]">
        <div className="grid grid-cols-2 gap-[16px]">
          {INDUSTRY_OPTIONS.map((option) => {
            const isSelected = selectedIndustry === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => setSelectedIndustry(option.id)}
                className={`relative bg-white h-[118px] rounded-[10px] transition-all ${
                  isSelected ? 'border-2 border-[#1f60d8]' : ''
                }`}
              >
                {!isSelected && (
                  <div aria-hidden="true" className="absolute border border-[rgba(198,213,222,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                )}
                <p className={`font-['Poppins:Medium',sans-serif] leading-[31px] not-italic text-[16px] text-center ${
                  isSelected ? 'text-[#1f60d8]' : 'text-[#0b0c0c]'
                }`}>
                  {option.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* See More Button */}
      <button
        onClick={handleSeeMore}
        className="absolute bg-white h-[65px] left-[41px] rounded-[10px] top-[609px] w-[300px] transition-all hover:bg-gray-50"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(198,213,222,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <p className="font-['Poppins:Medium',sans-serif] leading-[31px] not-italic text-[#0b0c0c] text-[16px]">See More</p>
      </button>
      
      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedIndustry}
        className={`absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[24px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[726px] w-[326px] transition-all ${
          !selectedIndustry ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-[#1850b8] cursor-pointer'
        }`}
        data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Continue</p>
      </button>
    </div>
  );
}
