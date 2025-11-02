import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../imports/svg-61w1qlkmn1';

interface OrganizationSetPasswordProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

function Button({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[524px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[615px] w-[393px] hover:bg-[#1850b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

export function OrganizationSetPassword({ onNavigate, data }: OrganizationSetPasswordProps) {
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
    
    // Check for minimum length
    if (value.length < 8) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    // Check for uppercase letter
    if (!/[A-Z]/.test(value)) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    // Check for lowercase letter
    if (!/[a-z]/.test(value)) {
      return 'Password should be at least 8 characters , uppercase, lowercase character and a number';
    }
    
    // Check for number
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
    // Also revalidate confirm password if it's been touched
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
    // Mark all fields as touched
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);

    // Validate all fields
    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(confirmPassword);
    
    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    // If there are errors, don't proceed
    if (passwordErr || confirmPasswordErr) {
      return;
    }

    // Success - password set
    toast.success('Password set successfully!');
    // Navigate to next step in organization onboarding
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
      className="bg-white relative size-full" 
      data-name="Organization Set Password"
      onKeyPress={handleKeyPress}
    >
      <Button onClick={handleContinue} />
      
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[61px] leading-[25px] left-[720px] not-italic text-[16px] text-[rgba(51,51,51,0.5)] text-center top-[210px] translate-x-[-50%] w-[348px]">
        <span className="text-[#9b9b9b]">You are signed in as</span> <span className="text-[#2f80ed]">{organizationName}</span>
      </p>
      
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[84px] justify-center leading-[0] left-[518px] not-italic text-[#0b0c0c] text-[40px] top-[177px] translate-y-[-50%] w-[400px]">
        <p className="leading-[42px]">Welcome to Gopele</p>
      </div>
      
      {/* Password Field - Label */}
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[31px] left-[530px] not-italic text-[#0b0c0c] text-[14px] text-nowrap top-[345px] whitespace-pre">Password</p>
      
      {/* Password Field - Input Box */}
      <div className={`absolute bg-white h-[54px] left-[524px] rounded-[10px] top-[378px] w-[393px]`}>
        <div aria-hidden="true" className={`absolute border ${hasPasswordError ? 'border-[#ff6644]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[11px]`} />
      </div>
      
      {/* Password Dots - only show when password is hidden and there's content */}
      {!showPassword && password && (
        <div className="absolute h-[11.59px] left-[547px] top-[399.2px] w-[101px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 12">
            <g id="Group 11741">
              <circle cx="58.7785" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 87" r="5.79508" />
              <g id="Group 11711">
                <circle cx="5.79508" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 84" r="5.79508" />
                <circle cx="22.3525" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 85" r="5.79508" />
                <circle cx="40.5656" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 86" r="5.79508" />
                <circle cx="76.9918" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 88" r="5.79508" />
                <circle cx="95.2049" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 89" r="5.79508" />
              </g>
            </g>
          </svg>
        </div>
      )}
      
      {/* Password Input Field */}
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => handlePasswordChange(e.target.value)}
        onBlur={handlePasswordBlur}
        className="absolute font-['Poppins:Regular',_sans-serif] h-[36px] leading-[31px] left-[547px] not-italic text-[#0b0c0c] text-[16px] w-[300px] bg-transparent border-none outline-none top-[388px] z-10"
      />
      
      {/* Password Eye Toggle */}
      <button
        onClick={() => setShowPassword(!showPassword)}
        className="absolute inset-[46.5%_37.68%_51.75%_61.18%] cursor-pointer hover:opacity-70 transition-opacity z-20"
        type="button"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
          <g id="Group 11713">
            <path d={svgPaths.p21dd0600} fill="var(--fill-0, black)" id="Vector" />
          </g>
        </svg>
      </button>
      
      {/* Confirm Password Field - Label */}
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[31px] left-[530px] not-italic text-[#0b0c0c] text-[14px] text-nowrap top-[463px] whitespace-pre">Confirm password</p>
      
      {/* Confirm Password Field - Input Box */}
      <div className={`absolute bg-white h-[54px] left-[524px] rounded-[10px] top-[496px] w-[393px]`}>
        <div aria-hidden="true" className={`absolute border ${hasConfirmPasswordError ? 'border-[#ff6644]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[11px]`} />
      </div>
      
      {/* Confirm Password Dots - only show when password is hidden and there's content */}
      {!showConfirmPassword && confirmPassword && (
        <div className="absolute h-[11.59px] left-[547px] top-[517.21px] w-[101px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 12">
            <g id="Group 11712">
              <circle cx="58.7787" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 87" r="5.79508" />
              <g id="Group 11711">
                <circle cx="5.79508" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 84" r="5.79508" />
                <circle cx="22.3525" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 85" r="5.79508" />
                <circle cx="40.5656" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 86" r="5.79508" />
                <circle cx="76.9918" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 88" r="5.79508" />
                <circle cx="95.2049" cy="5.79508" fill="var(--fill-0, #0B0C0C)" id="Ellipse 89" r="5.79508" />
              </g>
            </g>
          </svg>
        </div>
      )}
      
      {/* Confirm Password Input Field */}
      <input
        type={showConfirmPassword ? "text" : "password"}
        value={confirmPassword}
        onChange={(e) => handleConfirmPasswordChange(e.target.value)}
        onBlur={handleConfirmPasswordBlur}
        className="absolute font-['Poppins:Regular',_sans-serif] h-[36px] leading-[31px] left-[547px] not-italic text-[#0b0c0c] text-[16px] w-[300px] bg-transparent border-none outline-none top-[506px] z-10"
      />
      
      {/* Confirm Password Eye Toggle */}
      <button
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className="absolute inset-[60.26%_37.68%_37.99%_61.18%] cursor-pointer hover:opacity-70 transition-opacity z-20"
        type="button"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
          <g id="Group 11713">
            <path d={svgPaths.p21dd0600} fill="var(--fill-0, black)" id="Vector" />
          </g>
        </svg>
      </button>
      
      {/* Confirm Password Error Message */}
      {hasConfirmPasswordError && (
        <p className="absolute font-['Poppins:Regular',_sans-serif] h-[24px] leading-[31px] left-[524px] not-italic text-[#ff6644] text-[12px] top-[550px] w-[224px]">
          {confirmPasswordError}
        </p>
      )}
      
      <Logo />
      
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[24px] leading-[25px] left-[720.5px] not-italic text-[#0b0c0c] text-[16px] text-center top-[300px] translate-x-[-50%] w-[163px]">{`Set a new password `}</p>
    </div>
  );
}
