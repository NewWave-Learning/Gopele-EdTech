import { useState } from 'react';
import { Screen, UserRole } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-rm3h8ylet9";
import imgClipInternationalEducation1 from "figma:asset/0c2c26a084eeb039082ca6e93ab9beaa8e537242.png";
import { toast } from 'sonner@2.0.3';
import { Eye, EyeOff } from 'lucide-react';

type OrganizationLoginProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  onLogin: (role: UserRole, name: string) => void;
};

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[1006px] top-[94px] w-[37.966px]">
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
    <div className="absolute inset-[11.05%_27.7%_85.16%_70.27%]">
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
    <div className="absolute contents left-[1006px] top-[94px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute contents left-[1006px] top-[94px]" data-name="Logo 3">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[12.07%_18.87%_85.81%_73.12%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Group11709() {
  return (
    <div className="absolute contents left-[1006px] top-[94px]">
      <Logo3 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[1006px] top-[94px]" data-name="Logo">
      <Group11709 />
    </div>
  );
}

function Button({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[890px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[628px] w-[393px] transition-opacity ${disabled ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer hover:bg-[#1850b8]'}`} 
      data-name="Button"
    >
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Login</p>
    </button>
  );
}

function EmailInput1({ value, onChange, error, touched, onBlur }: { 
  value: string; 
  onChange: (val: string) => void;
  error?: string;
  touched?: boolean;
  onBlur?: () => void;
}) {
  const hasError = touched && error;
  
  return (
    <div className="absolute contents left-[890px] top-[371px]" data-name="Email Input">
      <div className="absolute bg-white h-[54px] left-[890px] rounded-[10px] top-[404px] w-[393px]">
        <div aria-hidden="true" className={`absolute border ${hasError ? 'border-[rgba(255,102,68,0.5)]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[11px]`} />
      </div>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder="admin@organization.com"
        className="absolute font-['Poppins:Regular',_sans-serif] h-[36.391px] leading-[31px] left-[912.63px] not-italic text-[#0b0c0c] placeholder:text-[#c6d5de] text-[16px] top-[414.56px] w-[343px] bg-transparent border-none outline-none"
      />
      {hasError && (
        <p className="absolute font-['Poppins:Regular',_sans-serif] h-[24px] leading-[31px] left-[890px] not-italic text-[#ff6644] text-[12px] top-[460px] w-[224px]">{error}</p>
      )}
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[31px] left-[896px] not-italic text-[#0b0c0c] text-[16px] text-nowrap top-[371px] whitespace-pre">Email</p>
    </div>
  );
}

function Group11712() {
  return (
    <div className="absolute h-[11.59px] left-[913px] top-[531.21px] w-[101px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 12">
        <g id="Group 11712">
          <circle cx="58.7787" cy="5.79508" fill="var(--fill-0, #C6D5DE)" id="Ellipse 87" r="5.79508" />
          <g id="Group 11711">
            <circle cx="5.79508" cy="5.79508" fill="var(--fill-0, #C6D5DE)" id="Ellipse 84" r="5.79508" />
            <circle cx="22.3525" cy="5.79508" fill="var(--fill-0, #C6D5DE)" id="Ellipse 85" r="5.79508" />
            <circle cx="40.5656" cy="5.79508" fill="var(--fill-0, #C6D5DE)" id="Ellipse 86" r="5.79508" />
            <circle cx="76.9918" cy="5.79508" fill="var(--fill-0, #C6D5DE)" id="Ellipse 88" r="5.79508" />
            <circle cx="95.2049" cy="5.79508" fill="var(--fill-0, #C6D5DE)" id="Ellipse 89" r="5.79508" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group11713({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute inset-[61.89%_12.27%_36.36%_86.6%] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
        <g id="Group 11713">
          <path d={svgPaths.p21dd0600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function EmailInput({ onForgotPassword, error, touched }: { 
  onForgotPassword: () => void;
  error?: string;
  touched?: boolean;
}) {
  const hasError = touched && error;
  
  return (
    <div className="absolute contents left-[890px] top-[477px]" data-name="Email Input">
      <div className="absolute bg-white h-[54px] left-[890px] rounded-[10px] top-[510px] w-[393px]">
        <div aria-hidden="true" className={`absolute border ${hasError ? 'border-[#ff6644]' : 'border-[rgba(0,0,0,0.05)]'} border-solid inset-[-1px] pointer-events-none rounded-[11px]`} />
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[31px] left-[896px] not-italic text-[#1b1616] text-[16px] text-nowrap top-[477px] whitespace-pre">Password</p>
      {hasError && (
        <p className="absolute font-['Poppins:Regular',_sans-serif] h-[24px] leading-[31px] left-[890px] not-italic text-[#ff6644] text-[12px] top-[571px] w-[224px]">{error}</p>
      )}
      <button 
        onClick={onForgotPassword}
        className="absolute font-['Poppins:Light',_sans-serif] leading-[24px] left-[1145px] not-italic text-[#9b9b9b] text-[14px] text-nowrap top-[576px] whitespace-pre cursor-pointer hover:text-[#1f60d8] transition-colors"
      >
        forgot password ?
      </button>
    </div>
  );
}

function Password({ value, onChange, showPassword, onTogglePassword, onForgotPassword, error, touched, onBlur }: { 
  value: string; 
  onChange: (val: string) => void;
  showPassword: boolean;
  onTogglePassword: () => void;
  onForgotPassword: () => void;
  error?: string;
  touched?: boolean;
  onBlur?: () => void;
}) {
  return (
    <div className="absolute contents left-[890px] top-[477px]" data-name="password">
      <EmailInput onForgotPassword={onForgotPassword} error={error} touched={touched} />
      {!showPassword && value && <Group11712 />}
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="absolute font-['Poppins:Regular',_sans-serif] h-[36.391px] leading-[31px] left-[912.63px] not-italic text-[#0b0c0c] text-[16px] top-[520.56px] w-[300px] bg-transparent border-none outline-none"
      />
      <button
        onClick={onTogglePassword}
        className="absolute left-[1240px] top-[530px] cursor-pointer hover:opacity-70 transition-opacity"
        type="button"
      >
        {showPassword ? <EyeOff size={20} color="#9b9b9b" /> : <Eye size={20} color="#9b9b9b" />}
      </button>
    </div>
  );
}

export function OrganizationLogin({ onNavigate, onLogin }: OrganizationLoginProps) {
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
    // Mark all fields as touched
    setEmailTouched(true);
    setPasswordTouched(true);

    // Validate all fields
    const emailErr = validateEmail(email);
    const passwordErr = validatePassword(password);
    
    setEmailError(emailErr);
    setPasswordError(passwordErr);

    // If there are errors, don't proceed
    if (emailErr || passwordErr) {
      return;
    }

    // Success - check if this is first time login
    // For demo purposes, we'll assume it's first time if email is exactly "admin@organization.com"
    const isFirstTimeLogin = email === 'admin@organization.com';
    
    if (isFirstTimeLogin) {
      // First time login - need to set password
      toast.success('Login successful! Please set your password.');
      onNavigate('organizationSetPassword', { organizationName: 'Seev' });
    } else {
      // Regular login
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
      className="bg-white relative size-full" 
      data-name="Organizational - first time after loggin in"
      onKeyPress={handleKeyPress}
    >
      <div className="absolute bg-[#1f60d8] h-[858px] left-0 top-0 w-[720px]" />
      <Logo />
      <Button onClick={handleLogin} disabled={false} />
      <Password 
        value={password}
        onChange={handlePasswordChange}
        showPassword={showPassword}
        onTogglePassword={() => setShowPassword(!showPassword)}
        onForgotPassword={handleForgotPassword}
        error={passwordError}
        touched={passwordTouched}
        onBlur={handlePasswordBlur}
      />
      <EmailInput1 
        value={email} 
        onChange={handleEmailChange}
        error={emailError}
        touched={emailTouched}
        onBlur={handleEmailBlur}
      />
      <div className="absolute left-[132px] size-[456px] top-[127px]" data-name="clip-international-education 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipInternationalEducation1} />
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[40px] left-[360px] not-italic text-[36px] text-center text-white top-[623px] translate-x-[-50%] translate-y-[-50%] w-[546px]">
        <p className="mb-0">{`A new modern way to `}</p>
        <p>{`learn & teach!`}</p>
      </div>
      <div className="absolute font-['Poppins:Regular',_sans-serif] h-[61px] leading-[25px] left-[1082px] not-italic text-[#9b9b9b] text-[16px] text-center top-[274px] translate-x-[-50%] w-[470px]">
        <p className="mb-0">{`Lorem ipsum dolor sit amet, consectetur adipi elit. `}</p>
        <p>{`Ultricies sed lectus in sed pharetra, `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[941px] not-italic text-[#0b0c0c] text-[32px] text-nowrap top-[234px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">{`Sign in  to Gopele`}</p>
      </div>
    </div>
  );
}
