import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-r63yncw1vn";

type AccountReadyProps = {
  onNavigate: (screen: Screen) => void;
  data?: {
    username?: string;
    password?: string;
    memberName?: string;
  };
};

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
          <g id="Group">
            <path d={svgPaths.p20a5a900} id="Vector" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pb990700} id="Vector_2" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AkarIconsCopy() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="akar-icons:copy">
      <Group />
    </div>
  );
}

export function AccountReady({ onNavigate, data }: AccountReadyProps) {
  // Generate mock credentials if not provided
  const username = data?.username || `member${Math.floor(Math.random() * 100000)}@gopele.edu`;
  const password = data?.password || generateSecurePassword();
  
  const [copiedUsername, setCopiedUsername] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  const handleCopyUsername = async () => {
    try {
      await navigator.clipboard.writeText(username);
      setCopiedUsername(true);
      toast.success('Username copied to clipboard');
      setTimeout(() => setCopiedUsername(false), 2000);
    } catch (err) {
      toast.error('Failed to copy username');
    }
  };

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopiedPassword(true);
      toast.success('Password copied to clipboard');
      setTimeout(() => setCopiedPassword(false), 2000);
    } catch (err) {
      toast.error('Failed to copy password');
    }
  };

  const handleDone = () => {
    onNavigate('teamDetails');
  };

  return (
    <div className="bg-white relative w-[884px] h-[554px] rounded-[10px] shadow-xl" data-name="Account Ready">
      {/* Title */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[32px] text-black text-center top-[92px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Account Ready</p>
      </div>

      {/* Subtitle */}
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[#4f4f4f] text-[16px] text-center top-[132px] translate-x-[-50%] translate-y-[-50%] w-[576px]">
        <p className="leading-[42px]">Please do not share these credentials with anyone but the owner.</p>
      </div>

      {/* Username Display */}
      <div className="absolute left-[228px] top-[180px] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] text-[#232323] text-[15px] mb-2">Username</p>
        <div className="bg-[#f5f5f5] px-[16px] py-[12px] rounded-[8px] border-2 border-[#d9d9d9] font-['Poppins:Medium',_sans-serif] text-[15px] text-black break-all">
          {username}
        </div>
      </div>

      {/* Copy Username Button */}
      <button
        onClick={handleCopyUsername}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[334px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[265px] hover:bg-[#face55] transition-colors cursor-pointer"
        data-name="Button"
      >
        <AkarIconsCopy />
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">
          {copiedUsername ? 'Copied!' : 'Copy Username'}
        </p>
      </button>

      {/* Password Display */}
      <div className="absolute left-[228px] top-[330px] w-[428px]">
        <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] text-[#232323] text-[15px] mb-2">Password</p>
        <div className="bg-[#f5f5f5] px-[16px] py-[12px] rounded-[8px] border-2 border-[#d9d9d9] font-['Poppins:Medium',_sans-serif] text-[15px] text-black break-all">
          {password}
        </div>
      </div>

      {/* Copy Password Button */}
      <button
        onClick={handleCopyPassword}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[337px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[415px] hover:bg-[#face55] transition-colors cursor-pointer"
        data-name="Button"
      >
        <AkarIconsCopy />
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">
          {copiedPassword ? 'Copied!' : 'Copy Password'}
        </p>
      </button>

      {/* Done Button */}
      <button
        onClick={handleDone}
        className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[352px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[490px] w-[180px] hover:bg-[#1850b8] transition-colors cursor-pointer"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">
          Done
        </p>
      </button>
    </div>
  );
}

// Helper function to generate a secure-looking password
function generateSecurePassword(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}
