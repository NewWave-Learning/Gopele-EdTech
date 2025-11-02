import { useState } from 'react';
import { Screen } from '../../../hooks/useNavigation';

type AdminLoginMobileProps = {
  onNavigate: (screen: Screen) => void;
  onLogin: (role: 'admin', name: string) => void;
};

export function AdminLoginMobile({ onNavigate, onLogin }: AdminLoginMobileProps) {
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
    <div className="bg-white relative w-[375px] min-h-screen flex flex-col items-center px-4 pt-12 pb-8" data-name="Admin Login Mobile">
      {/* Title */}
      <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center text-[24px] text-black text-center mb-8 w-full">
        <p className="leading-[32px]">Administrator Login</p>
      </div>
      
      {/* Form Container */}
      <div className="content-stretch flex flex-col gap-[20px] items-center w-full max-w-[340px]">
        {/* Email Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] text-[#232323] text-[14px]">Email</p>
          <div className="bg-white relative rounded-[8px] w-full">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@school.com"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] w-full text-[14px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* OR Divider */}
        <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center text-[14px] text-black text-center">
          <p className="leading-[24px]">OR</p>
        </div>

        {/* Phone Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] text-[#232323] text-[14px]">Phone</p>
          <div className="bg-white relative rounded-[8px] w-full">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-full">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+27 123 456 789"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] w-full text-[14px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* Password Input */}
        <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] text-[#232323] text-[14px]">Password</p>
          <div className="bg-white relative rounded-[8px] w-full">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***********"
                className="font-['Inter:Regular',_sans-serif] leading-[24px] w-full text-[14px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="bg-[#1f60d8] box-border content-stretch flex h-[48px] items-center justify-center rounded-[8px] w-full hover:bg-[#1850b8] transition-colors cursor-pointer mt-4"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] text-[16px] text-white">Login</p>
        </button>
      </div>

      {/* Back to Login Link */}
      <button
        onClick={() => onNavigate('login')}
        className="mt-8 text-[14px] text-[#1f60d8] hover:underline font-['Poppins:Regular',_sans-serif]"
      >
        Back to Student/Teacher Login
      </button>
    </div>
  );
}
