import { useState } from 'react';
import { Screen } from '../../hooks/useNavigation';

type AdminLoginProps = {
  onNavigate: (screen: Screen) => void;
  onLogin: (role: 'admin', name: string) => void;
};

export function AdminLogin({ onNavigate, onLogin }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, this would validate credentials
    // For demo purposes, we'll just login with the email or phone as the name
    const adminName = email || phone || 'Administrator';
    onLogin('admin', adminName);
  };

  return (
    <div className="bg-white relative size-full" data-name="Admin Login">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[98px] justify-center leading-[0] left-[458px] not-italic text-[32px] text-black text-center top-[92px] translate-x-[-50%] translate-y-[-50%] w-[588px]">
        <p className="leading-[42px]">Administrator Login</p>
      </div>
      
      {/* Form Container */}
      <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[244px] top-[148px]">
        {/* Email Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Email</p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="teacher@school.com"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic w-full text-[15px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex flex-col font-['Poppins:Regular',_sans-serif] h-[16.408px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-center w-[67px]">
          <p className="leading-[28.714px]">OR</p>
        </div>

        {/* Phone Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Phone</p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="New Horizon School"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic w-full text-[15px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* Password Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Password</p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***********"
                className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic w-full text-[15px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[405px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[504px] w-[106px] hover:bg-[#1850b8] transition-colors cursor-pointer"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">Login</p>
      </button>

      {/* Back to Login Link */}
      <button
        onClick={() => onNavigate('login')}
        className="absolute bottom-[60px] left-[50%] translate-x-[-50%] text-[14px] text-[#1f60d8] hover:underline font-['Poppins:Regular',_sans-serif]"
      >
        Back to Student/Teacher Login
      </button>
    </div>
  );
}
