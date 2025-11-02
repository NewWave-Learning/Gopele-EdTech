import { useState } from 'react';
import svgPaths from "../../../imports/svg-dibih6ikw1";
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { toast } from 'sonner@2.0.3';
import { Check } from 'lucide-react';

type AddStudentsMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function AddStudentsMobile({ onNavigate, data }: AddStudentsMobileProps) {
  const [copied, setCopied] = useState(false);
  
  const instituteCode = (data?.instituteCode as string) || 'INST-DEMO123';
  const instituteName = (data?.instituteName as string) || 'Your Institute';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(instituteCode);
      setCopied(true);
      toast.success('Institute code copied!');
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Add Students - Mobile">
      {/* Success Icon */}
      <div className="absolute left-[50%] translate-x-[-50%] top-[80px]">
        <div className="w-[80px] h-[80px] bg-[#f4d35e] rounded-full flex items-center justify-center">
          <Check className="w-[48px] h-[48px] text-[#232323]" strokeWidth={3} />
        </div>
      </div>

      {/* Title */}
      <div className="absolute left-[20px] top-[190px] w-[335px]">
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[28px] text-center text-black leading-[38px]">
          Add Your Students
        </h1>
      </div>

      {/* Success Message */}
      <div className="absolute left-[20px] top-[260px] w-[335px]">
        <div className="flex flex-col font-['Poppins:Medium',_sans-serif] leading-[26px] text-[#232323] text-[15px] text-center">
          <p className="mb-0">
            Congratulations! <span className="font-['Poppins:SemiBold',_sans-serif]">{instituteName}</span> has been created successfully!
          </p>
          <p className="mb-0 mt-4">
            {`Copy & share the institute code with your students & ask them to sign up as students!`}
          </p>
        </div>

        {/* Institute Code Display */}
        <div className="bg-[#f3f3f5] rounded-lg px-6 py-4 mt-6">
          <p className="text-[12px] text-[#666666] mb-1 text-center">Institute Code</p>
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[20px] text-[#1f60d8] tracking-wider text-center">
            {instituteCode}
          </p>
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopyCode}
        className="absolute bg-[#f4d35e] h-[52px] flex items-center justify-center gap-[8px] left-[20px] rounded-[8px] top-[520px] w-[335px] hover:bg-[#face55] transition-colors"
      >
        {/* Copy Icon */}
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[8.33%_16.67%]">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
                <g>
                  <path d={svgPaths.p20a5a900} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pb990700} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <span className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">
          {copied ? 'Code Copied!' : 'Copy Institute Code'}
        </span>
      </button>

      {/* Navigation Buttons */}
      <div className="absolute left-[20px] top-[590px] w-[335px] flex flex-col gap-3">
        <button
          onClick={() => onNavigate('teacherDashboard')}
          className="h-[48px] flex items-center justify-center rounded-[8px] border-2 border-[#1f60d8] text-[#1f60d8] hover:bg-[#1f60d8]/5 transition-colors"
        >
          <span className="font-['Poppins:Medium',_sans-serif] text-[15px]">
            Go to Dashboard
          </span>
        </button>
        <button
          onClick={() => onNavigate('createInstitute')}
          className="h-[48px] flex items-center justify-center rounded-[8px] text-[#666666] hover:bg-gray-100 transition-colors"
        >
          <span className="font-['Poppins:Medium',_sans-serif] text-[15px]">
            Create Another Institute
          </span>
        </button>
      </div>
    </div>
  );
}
