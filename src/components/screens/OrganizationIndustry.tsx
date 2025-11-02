import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../imports/svg-0xe4sxdjrf';

interface OrganizationIndustryProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  onLogin?: (role: 'student' | 'teacher' | 'admin' | 'gopeleAdmin', name: string) => void;
  data?: {
    organizationName?: string;
    organizationSize?: string;
  };
}

const INDUSTRY_OPTIONS = [
  { id: 'education', label: 'Education', left: '332px', labelLeft: '362px', labelTop: '433px' },
  { id: 'technology', label: 'Technology', left: '490px', labelLeft: '512px', labelTop: '433px' },
  { id: 'finance', label: 'Finance', left: '650px', labelLeft: '688px', labelTop: '431px' },
  { id: 'agriculture', label: 'Agriculture', left: '807px', labelLeft: '832px', labelTop: '433px' },
  { id: 'see-more', label: 'See More', left: '967px', labelLeft: '1001px', labelTop: '437px' },
];

function Button({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[524px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[639px] w-[393px] transition-all ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-[#1850b8] cursor-pointer'
      }`}
      data-name="Button"
    >
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Continue</p>
    </button>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[68px] top-[30px] w-[37.966px]">
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
    <div className="absolute inset-[3.59%_92.84%_92.62%_5.13%]">
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
    <div className="absolute contents left-[68px] top-[30px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute contents left-[68px] top-[30px]" data-name="Logo 3">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[4.62%_84.01%_93.27%_7.98%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Group11709() {
  return (
    <div className="absolute contents left-[68px] top-[30px]">
      <Logo3 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[68px] top-[30px]" data-name="Logo">
      <Group11709 />
    </div>
  );
}

export function OrganizationIndustry({ onNavigate, onLogin, data }: OrganizationIndustryProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedIndustry) return;

    // Find the selected option label
    const selectedOption = INDUSTRY_OPTIONS.find(opt => opt.id === selectedIndustry);
    
    // Log in as admin with organization name before navigating
    if (onLogin) {
      onLogin('admin', data?.organizationName || 'Admin');
    }
    
    toast.success('Organization industry saved!');
    
    // Navigate to congratulations screen with all organization data
    onNavigate('organizationCongratulations', {
      ...data,
      organizationIndustry: selectedOption?.label,
    });
  };

  return (
    <div className="bg-white relative size-full" data-name="Organization Industry">
      <Button onClick={handleContinue} disabled={!selectedIndustry} />
      
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[41px] leading-[25px] left-[720px] not-italic text-[#9b9b9b] text-[16px] text-center top-[252px] translate-x-[-50%] w-[348px]">Almost done with your setup</p>
      
      <Logo />
      
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[48px] left-[720px] not-italic text-[#0b0c0c] text-[35px] text-center text-nowrap top-[180px] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
        <p className="mb-0">{`What industry does your organization `}</p>
        <p>belongs to</p>
      </div>
      
      {/* Industry selection tabs */}
      <div className="absolute contents left-[332px] top-[389px]" data-name="tabs">
        {INDUSTRY_OPTIONS.map((option) => {
          const isSelected = selectedIndustry === option.id;
          
          return (
            <div key={option.id}>
              {/* Tab button */}
              <button
                onClick={() => setSelectedIndustry(option.id)}
                className={`absolute h-[118px] rounded-[10px] w-[141.63px] transition-all group ${
                  isSelected 
                    ? 'bg-[#1f60d8] shadow-md' 
                    : 'bg-white'
                }`}
                style={{ left: option.left, top: '389px' }}
              >
                <div 
                  aria-hidden="true" 
                  className={`absolute border solid inset-0 pointer-events-none rounded-[10px] transition-all ${
                    isSelected 
                      ? 'border-[#1f60d8] border-[1px]' 
                      : 'border-[rgba(198,213,222,0.5)] border-[1px] group-hover:border-[#1f60d8] group-hover:border-2'
                  }`} 
                />
              </button>
              
              {/* Tab label */}
              <p 
                className={`absolute font-['Poppins:Medium',_sans-serif] leading-[31px] not-italic text-[16px] pointer-events-none ${
                  isSelected ? 'text-white' : 'text-[#0b0c0c]'
                }`}
                style={{ 
                  left: option.labelLeft, 
                  top: option.labelTop,
                  width: option.id === 'technology' ? '96px' : option.id === 'agriculture' ? '92px' : option.id === 'see-more' ? '75px' : option.id === 'education' ? '81px' : '65px'
                }}
              >
                {option.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
