import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../imports/svg-wy8d826ua3';

interface OrganizationSizeProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

const SIZE_OPTIONS = [
  { id: 'just-me', label: 'Just me', position: { left: '412px', top: '312px' }, labelLeft: '484px', labelTop: '338px' },
  { id: '2-5', label: '2-5', position: { left: '570px', top: '312px' }, labelLeft: '642px', labelTop: '338px' },
  { id: '6-10', label: '6-10', position: { left: '728px', top: '312px' }, labelLeft: '800px', labelTop: '338px' },
  { id: '11-30', label: '11-30', position: { left: '886px', top: '312px' }, labelLeft: '958px', labelTop: '338px' },
  { id: '30-50', label: '30-50', position: { left: '412px', top: '407px' }, labelLeft: '484px', labelTop: '433px' },
  { id: '50-200', label: '50-200', position: { left: '570px', top: '407px' }, labelLeft: '642px', labelTop: '433px' },
  { id: '200-500', label: '200-500', position: { left: '728px', top: '407px' }, labelLeft: '800px', labelTop: '433px' },
  { id: '500+', label: '500+', position: { left: '886px', top: '407px' }, labelLeft: '958px', labelTop: '433px' },
];

function Button({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[524px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[597px] w-[393px] transition-all ${
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

export function OrganizationSize({ onNavigate, data }: OrganizationSizeProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedSize) return;

    // Find the selected option label
    const selectedOption = SIZE_OPTIONS.find(opt => opt.id === selectedSize);
    
    toast.success('Organization size saved!');
    
    // Navigate to next step with organization data
    onNavigate('organizationIndustry', {
      ...data,
      organizationSize: selectedOption?.label,
    });
  };

  return (
    <div className="bg-white relative size-full" data-name="Organization Size">
      <Button onClick={handleContinue} disabled={!selectedSize} />
      
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[41px] leading-[25px] left-[720px] not-italic text-[#9b9b9b] text-[16px] text-center top-[210px] translate-x-[-50%] w-[348px] whitespace-pre-wrap">{`Let's know  about your company.`}</p>
      
      <Logo />
      
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[404px] not-italic text-[#0b0c0c] text-[35px] text-nowrap top-[177px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">{`What is the size of your organzation `}</p>
      </div>
      
      {/* Size selection tabs */}
      <div className="absolute contents left-[412px] top-[312px]" data-name="tabs">
        {SIZE_OPTIONS.map((option) => {
          const isSelected = selectedSize === option.id;
          
          return (
            <div key={option.id}>
              {/* Tab button */}
              <button
                onClick={() => setSelectedSize(option.id)}
                className={`absolute h-[76px] rounded-[10px] w-[143px] transition-all group ${
                  isSelected 
                    ? 'bg-[#1f60d8] shadow-md' 
                    : 'bg-white'
                }`}
                style={{ left: option.position.left, top: option.position.top }}
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
                className={`absolute font-['Poppins:Medium',_sans-serif] h-[24px] leading-[25px] not-italic text-[16px] text-center translate-x-[-50%] w-[110px] pointer-events-none ${
                  isSelected ? 'text-white' : 'text-[#0b0c0c]'
                }`}
                style={{ left: option.labelLeft, top: option.labelTop }}
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
