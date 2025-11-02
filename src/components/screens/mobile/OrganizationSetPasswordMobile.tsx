import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../../imports/svg-61w1qlkmn1';
import { Eye, EyeOff } from 'lucide-react';

interface OrganizationSetPasswordMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[24px] top-[24px] w-[37.966px]">
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
    <div className="absolute inset-[2.84%_91.2%_94.43%_5.87%]">
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

function Logo() {
  return (
    <div className="absolute contents left-[24px] top-[24px]" data-name="Logo">
      <Frame2 />
      <Group12 />
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[2.84%_79.47%_94.43%_15.73%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
    </div>
  );
}

export function OrganizationSetPasswordMobile({ onNavigate, data }: OrganizationSetPasswordMobileProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const organizationName = data?.organizationName || 'Seev';

  const validatePassword = (value: string): string => {
    if (!value) return '';
    
    if (value.length < 8) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    if (!/[A-Z]/.test(value)) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    if (!/[a-z]/.test(value)) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    if (!/[0-9]/.test(value)) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    return '';
  };

  const validateConfirmPassword = (value: string): string => {
    if (!value) return '';
    if (value !== password) {
      return 'Password does not match';
    }
    return '';
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordTouched) {
      setPasswordError(validatePassword(value));
    }
    if (confirmPasswordTouched && confirmPassword) {
      setConfirmPasswordError(value !== confirmPassword ? 'Password does not match' : '');
    }
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    if (confirmPasswordTouched) {
      setConfirmPasswordError(validateConfirmPassword(value));
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };

  const handleConfirmPasswordBlur = () => {
    setConfirmPasswordTouched(true);
    setConfirmPasswordError(validateConfirmPassword(confirmPassword));
  };

  const handleContinue = () => {
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);

    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(confirmPassword);
    
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    if (passwordErr || confirmPasswordErr) {
      return;
    }

    toast.success('Password set successfully!');
    onNavigate('organizationSize', {
      organizationName: organizationName,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleContinue();
    }
  };

  const hasPasswordError = passwordTouched && passwordError;
  const hasConfirmPasswordError = confirmPasswordTouched && confirmPasswordError;

  return (
    <div 
      className="bg-white h-[844px] overflow-clip relative w-[375px]" 
      data-name="Organization Set Password - Mobile"
      onKeyPress={handleKeyPress}
    >
      <Logo />
      
      {/* Header */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#0b0c0c] text-[28px] top-[120px] w-[327px]">
        <p className="leading-[36px]">Welcome to Gopele</p>
      </div>
      
      {/* Subtitle */}
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[14px] top-[170px] w-[327px]">
        <p><span className="text-[#9b9b9b]">You are signed in as</span> <span className="text-[#2f80ed]">{organizationName}</span></p>
      </div>
      
      {/* Set Password Label */}
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[#0b0c0c] text-[14px] text-center top-[220px] w-[327px]">
        <p>{`Set a new password `}</p>
      </div>
      
      {/* Password Input */}
      <div className="absolute left-[24px] top-[260px] w-[327px]">
        <p className="font-['Poppins:Medium',_sans-serif] leading-[25px] not-italic text-[#0b0c0c] text-[14px] mb-2">Password</p>
        <div className={`bg-white h-[48px] rounded-[8px] w-full relative`}>
          <div aria-hidden="true" className={`absolute border ${hasPasswordError ? 'border-[#ff6644]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[9px]`} />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            onBlur={handlePasswordBlur}
            placeholder="••••••••"
            className="font-['Poppins:Regular',_sans-serif] h-full leading-[25px] px-4 not-italic text-[#0b0c0c] text-[14px] w-full bg-transparent border-none outline-none pr-12"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 transition-opacity"
            type="button"
          >
            {showPassword ? <EyeOff size={18} color="#9b9b9b" /> : <Eye size={18} color="#9b9b9b" />}
          </button>
        </div>
        {hasPasswordError && (
          <p className="font-['Poppins:Regular',_sans-serif] leading-[18px] mt-1 not-italic text-[#ff6644] text-[11px]">{passwordError}</p>
        )}
      </div>
      
      {/* Confirm Password Input */}
      <div className="absolute left-[24px] top-[380px] w-[327px]">
        <p className="font-['Poppins:Medium',_sans-serif] leading-[25px] not-italic text-[#0b0c0c] text-[14px] mb-2">Confirm password</p>
        <div className={`bg-white h-[48px] rounded-[8px] w-full relative`}>
          <div aria-hidden="true" className={`absolute border ${hasConfirmPasswordError ? 'border-[#ff6644]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[9px]`} />
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            onBlur={handleConfirmPasswordBlur}
            placeholder="••••••••"
            className="font-['Poppins:Regular',_sans-serif] h-full leading-[25px] px-4 not-italic text-[#0b0c0c] text-[14px] w-full bg-transparent border-none outline-none pr-12"
          />
          <button
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 transition-opacity"
            type="button"
          >
            {showConfirmPassword ? <EyeOff size={18} color="#9b9b9b" /> : <Eye size={18} color="#9b9b9b" />}
          </button>
        </div>
        {hasConfirmPasswordError && (
          <p className="font-['Poppins:Regular',_sans-serif] leading-[18px] mt-1 not-italic text-[#ff6644] text-[11px]">{confirmPasswordError}</p>
        )}
      </div>
      
      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[48px] items-center justify-center left-[24px] px-3 py-2 rounded-[8px] top-[500px] w-[327px] hover:bg-[#1850b8] transition-colors cursor-pointer"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Continue</p>
      </button>
    </div>
  );
}
