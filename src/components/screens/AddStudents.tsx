import { useState } from 'react';
import svgPaths from "../../imports/svg-dibih6ikw1";
import { Screen, NavigationData } from '../../hooks/useNavigation';
import { toast } from 'sonner@2.0.3';

type AddStudentsProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function AddStudents({ onNavigate, data }: AddStudentsProps) {
  const [copied, setCopied] = useState(false);
  
  // Get institute code from navigation data or generate a default one
  const instituteCode = (data?.instituteCode as string) || 'INST-DEMO123';
  const instituteName = (data?.instituteName as string) || 'Your Institute';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(instituteCode);
      setCopied(true);
      toast.success('Institute code copied to clipboard!');
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy code');
    }
  };

  return (
    <div className="bg-white h-[600px] overflow-clip relative w-[634px] rounded-lg shadow-lg" data-name="Add Students">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[62px] justify-center leading-[0] left-[317px] not-italic text-[32px] text-black text-center top-[102px] translate-x-[-50%] translate-y-[-50%] w-[458px]">
        <p className="leading-[42px]">Add Your Students</p>
      </div>

      {/* Success Message */}
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] inset-[28%_18.96%_30.11%_19.27%] justify-center leading-[26px] not-italic text-[#232323] text-[16px] text-center">
        <p className="mb-0">
          Congratulations! <span className="font-['Poppins:SemiBold',_sans-serif]">{instituteName}</span> has been created successfully!
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Copy & share the institute code with your students & ask them to sign up as students!`}</p>
        <p className="mb-0">&nbsp;</p>
        {/* Institute Code Display */}
        <div className="bg-[#f3f3f5] rounded-lg px-6 py-4 mt-4">
          <p className="text-[12px] text-[#666666] mb-1">Institute Code</p>
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[24px] text-[#1f60d8] tracking-wider">
            {instituteCode}
          </p>
        </div>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopyCode}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[103px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[360px] w-[428px] hover:bg-[#face55] transition-colors"
        data-name="Button"
      >
        {/* Copy Icon */}
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="akar-icons:copy">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
                <g id="Group">
                  <path d={svgPaths.p20a5a900} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.pb990700} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">
          {copied ? 'Code Copied!' : 'Copy Institute Code'}
        </p>
      </button>

      {/* Navigation Buttons */}
      <div className="absolute left-[103px] top-[430px] w-[428px] flex gap-4">
        <button
          onClick={() => onNavigate('teacherDashboard')}
          className="flex-1 h-[40px] flex items-center justify-center rounded-[8px] border-2 border-[#1f60d8] text-[#1f60d8] hover:bg-[#1f60d8]/5 transition-colors"
        >
          <span className="font-['Poppins:Medium',_sans-serif] text-[14px]">
            Go to Dashboard
          </span>
        </button>
        <button
          onClick={() => onNavigate('createInstitute')}
          className="flex-1 h-[40px] flex items-center justify-center rounded-[8px] text-[#666666] hover:bg-gray-100 transition-colors"
        >
          <span className="font-['Poppins:Medium',_sans-serif] text-[14px]">
            Create Another
          </span>
        </button>
      </div>
    </div>
  );
}
