import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-csw0ronwls";

type AddMemberProps = {
  onNavigate: (screen: Screen) => void;
  onClose: () => void;
};

type MemberRole = 'Teacher' | 'Admin' | 'Coordinator';

export function AddMember({ onNavigate, onClose }: AddMemberProps) {
  const [name, setName] = useState('');
  const [memberId, setMemberId] = useState('');
  const [role, setRole] = useState<MemberRole>('Teacher');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast.error('Please enter a name');
      return;
    }
    
    if (!memberId.trim()) {
      toast.error('Please enter an Institute Member ID');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to Account Ready screen with member data
      onNavigate('accountReady');
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div 
        className="bg-white relative w-[884px] h-[554px] rounded-[10px] shadow-xl"
        onClick={(e) => e.stopPropagation()}
        data-name="Add Member"
      >
        {/* Title */}
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[32px] text-black text-center top-[69px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
          <p className="leading-[42px]">Add Member</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[228px] top-[124px]">
            {/* Name Input */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
              <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Name</p>
              <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First & Last Name"
                  className="box-border w-full px-[16px] py-[12px] rounded-[8px] border-2 border-[#d9d9d9] font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[15px] text-black placeholder:opacity-50 focus:border-[#1f60d8] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Institute Member ID Input */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
              <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Institute Member ID</p>
              <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
                <input
                  type="text"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  placeholder="#11111111"
                  className="box-border w-full px-[16px] py-[12px] rounded-[8px] border-2 border-[#d9d9d9] font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[15px] text-black placeholder:opacity-50 focus:border-[#1f60d8] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Role Dropdown */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
              <p className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[1.5] ml-0 mt-0 not-italic relative text-[#232323] text-[15px] w-[428px]">Role</p>
              <div className="[grid-area:1_/_1] box-border content-stretch flex h-[48px] items-center justify-between ml-0 mt-[31px] pl-[10px] pr-[25.714px] py-[8px] relative rounded-[10px] w-[428px]">
                <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as MemberRole)}
                  className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] mr-[-15.714px] not-italic relative shrink-0 text-[#333333] text-[15px] w-[380px] bg-transparent border-none outline-none cursor-pointer appearance-none"
                >
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                  <option value="Coordinator">Coordinator</option>
                </select>
                <div className="h-[10px] mr-[-15.714px] relative shrink-0 w-[15.714px] pointer-events-none">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
                    <g>
                      <path d={svgPaths.p1e43a080} fill="#333333" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Create Credentials Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[352px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[447px] w-[180px] hover:bg-[#1850b8] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">
              {isSubmitting ? 'Creating...' : 'Create Credentials'}
            </p>
          </button>
        </form>

        {/* Close Button (X) */}
        <button
          onClick={onClose}
          className="absolute right-[20px] top-[20px] w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
