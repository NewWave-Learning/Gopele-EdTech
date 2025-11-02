import { useState } from 'react';
import { Screen, UserRole } from '../../../hooks/useNavigation';
import svgPaths from "../../../imports/svg-rm3h8ylet9";
import { toast } from 'sonner@2.0.3';
import { Eye, EyeOff } from 'lucide-react';

type OrganizationLoginMobileProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  onLogin: (role: UserRole, name: string) => void;
};

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

export function OrganizationLoginMobile({ onNavigate, onLogin }: OrganizationLoginMobileProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (value: string): string => {
    if (!value) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Invalid email address';
    }
    return '';
  };

  const validatePassword = (value: string): string => {
    if (!value) return '';
    if (value.length < 5) {
      return 'Invalid password';
    }
    return '';
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (emailTouched) {
      setEmailError(validateEmail(value));
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (passwordTouched) {
      setPasswordError(validatePassword(value));
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    setPasswordError(validatePassword(password));
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '' && !emailError && !passwordError;

  const handleLogin = () => {
    setEmailTouched(true);
    setPasswordTouched(true);

    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    if (emailErr || passwordErr) {
      return;
    }

    const isFirstTimeLogin = email === 'admin@organization.com';
    
    if (isFirstTimeLogin) {
      toast.success('Login successful! Please set your password.');
      onNavigate('organizationSetPassword', { organizationName: 'Seev' });
    } else {
      onLogin('admin', 'Organization Admin');
      toast.success('Welcome back!');
      onNavigate('adminDashboard');
    }
  };

  const handleForgotPassword = () => {
    toast.info('Password reset link will be sent to your email');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div 
      className="bg-white h-[844px] overflow-clip relative w-[375px]" 
      data-name="Organization Login - Mobile"
      onKeyPress={handleKeyPress}
    >
      <Logo />
      
      {/* Header */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[24px] not-italic text-[#0b0c0c] text-[28px] top-[120px] w-[327px]">
        <p className="leading-[36px]">{`Sign in to Gopele`}</p>
      </div>
      
      {/* Subtitle */}
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[#9b9b9b] text-[14px] top-[170px] w-[327px]">
        <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Ultricies sed lectus in sed pharetra.</p>
      </div>
      
      {/* Email Input */}
      <div className="absolute left-[24px] top-[230px] w-[327px]">
        <p className="font-['Poppins:Medium',_sans-serif] leading-[25px] not-italic text-[#0b0c0c] text-[14px] mb-2">Email</p>
        <div className={`bg-white h-[48px] rounded-[8px] w-full relative`}>
          <div aria-hidden="true" className={`absolute border ${emailTouched && emailError ? 'border-[rgba(255,102,68,0.5)]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[9px]`} />
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={handleEmailBlur}
            placeholder="admin@organization.com"
            className="font-['Poppins:Regular',_sans-serif] h-full leading-[25px] px-4 not-italic text-[#0b0c0c] placeholder:text-[#c6d5de] text-[14px] w-full bg-transparent border-none outline-none"
          />
        </div>
        {emailTouched && emailError && (
          <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] mt-1 not-italic text-[#ff6644] text-[12px]">{emailError}</p>
        )}
      </div>
      
      {/* Password Input */}
      <div className="absolute left-[24px] top-[340px] w-[327px]">
        <p className="font-['Poppins:Medium',_sans-serif] leading-[25px] not-italic text-[#1b1616] text-[14px] mb-2">Password</p>
        <div className={`bg-white h-[48px] rounded-[8px] w-full relative`}>
          <div aria-hidden="true" className={`absolute border ${passwordTouched && passwordError ? 'border-[#ff6644]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[9px]`} />
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
        {passwordTouched && passwordError && (
          <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] mt-1 not-italic text-[#ff6644] text-[12px]">{passwordError}</p>
        )}
        <button 
          onClick={handleForgotPassword}
          className="font-['Poppins:Light',_sans-serif] leading-[20px] mt-2 not-italic text-[#9b9b9b] text-[12px] cursor-pointer hover:text-[#1f60d8] transition-colors block"
        >
          forgot password ?
        </button>
      </div>
      
      {/* Login Button */}
      <button 
        onClick={handleLogin}
        disabled={false}
        className={`absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[48px] items-center justify-center left-[24px] px-3 py-2 rounded-[8px] top-[480px] w-[327px] transition-opacity ${false ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-[#1850b8]'}`}
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Login</p>
      </button>
    </div>
  );
}
