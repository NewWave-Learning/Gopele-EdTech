import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../../imports/svg-8rzcslmkzq';

interface OrganizationSizeMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

const SIZE_OPTIONS = [
  { id: 'just-me', label: 'Just me' },
  { id: '2-5', label: '2-5' },
  { id: '30-50', label: '30-50' },
  { id: '50-200', label: '50-200' },
  { id: '6-10', label: '6-10' },
  { id: '11-30', label: '11-30' },
  { id: '200-500', label: '200-500' },
  { id: '500+', label: '500+' },
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

export function OrganizationSizeMobile({ onNavigate, data }: OrganizationSizeMobileProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedSize) {
      toast.error('Please select an organization size');
      return;
    }

    const selectedOption = SIZE_OPTIONS.find(opt => opt.id === selectedSize);
    
    onNavigate('organizationIndustry', {
      ...data,
      organizationSize: selectedOption?.label,
    });
  };

  return (
    <div className="bg-white relative w-[375px] min-h-[812px]" data-name="Mobile - Organizational - first time after loggin - What is the size of your organzation">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[normal] left-[187px] not-italic text-[#0b0c0c] text-[24px] text-center top-[197px] translate-x-[-50%] translate-y-[-50%] w-[326px]">
        <p className="mb-0">{`What is the size of your `}</p>
        <p>{`organization `}</p>
      </div>
      
      <Logo />
      
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[41px] leading-[25px] left-[187px] not-italic text-[#9b9b9b] text-[16px] text-center top-[253px] translate-x-[-50%] w-[326px] whitespace-pre-wrap">{`Let's know  about your company.`}</p>
      
      {/* Size Options Grid - 2 columns x 4 rows */}
      <div className="absolute left-[24px] top-[332px] w-[326px]">
        <div className="grid grid-cols-2 gap-[16px]">
          {SIZE_OPTIONS.map((option) => {
            const isSelected = selectedSize === option.id;
            
            return (
              <button
                key={option.id}
                onClick={() => setSelectedSize(option.id)}
                className={`relative bg-white h-[76px] rounded-[10px] transition-all ${
                  isSelected ? 'border-2 border-[#1f60d8]' : ''
                }`}
              >
                {!isSelected && (
                  <div aria-hidden="true" className="absolute border border-[rgba(198,213,222,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
                )}
                <p className={`font-['Poppins:Medium',sans-serif] leading-[25px] not-italic text-[16px] text-center ${
                  isSelected ? 'text-[#1f60d8]' : 'text-[#0b0c0c]'
                }`}>
                  {option.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedSize}
        className={`absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[24px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[726px] w-[326px] transition-all ${
          !selectedSize ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-[#1850b8] cursor-pointer'
        }`}
        data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Continue</p>
      </button>
    </div>
  );
}
