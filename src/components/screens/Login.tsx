import { useState } from 'react';
import svgPaths from "../../imports/svg-2dnbiahxic";
import imgWalle from "figma:asset/5659bb0a661292d84ce5d5861c0faa55bc7dd773.png";
import { Screen, NavigationData, UserRole } from "../../hooks/useNavigation";
import { GraduationCap, BookOpen, Shield } from 'lucide-react';

type LoginProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  onLogin: (role: UserRole, name: string) => void;
};

export function Login({ onNavigate, onLogin }: LoginProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Extract name from email (simple mock)
    const name = email.split('@')[0] || 'User';
    onLogin(selectedRole, name);
  };

  return (
    <div className="bg-white h-[1080px] overflow-clip relative w-[1440px]" data-name="Login">
      {/* Left Side - Branding */}
      <div className="absolute bg-[#1f60d8] h-full left-0 top-0 w-[720px]" data-name="Brand Side">
        {/* Walle Character */}
        <div className="absolute h-[400px] left-[110px] top-[140px] w-[500px]">
          <img alt="Walle mascot" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWalle} />
        </div>
        
        {/* Welcome Text */}
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[72px] left-[110px] not-italic text-[56px] text-white top-[580px] w-[500px]">
          Welcome to Gopele
        </p>
        <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[32px] left-[110px] not-italic text-[20px] text-white/90 top-[700px] w-[500px]">
          Empower your students with AI-driven personalized learning
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="absolute h-full left-[720px] top-0 w-[720px]" data-name="Login Form">
        {/* Logo at Top Right */}
        <div className="absolute left-[80px] top-[60px]" data-name="Logo">
          <div className="flex items-center gap-[12px]">
            <div className="relative h-[54.314px] w-[54.268px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
                <g id="Frame 2">
                  <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
              <div className="absolute inset-[30.09%_8.31%_32.43%_7.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 46">
                  <g id="Group 12">
                    <g id="svgg">
                      <path clipRule="evenodd" d={svgPaths.p3bfb200} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
                    </g>
                    <rect fill="var(--fill-0, #1F60D8)" height="32.8124" id="Rectangle 1" width="34.9312" x="6.83105" y="6.27734" />
                    <path d={svgPaths.p1e47b880} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[26px] not-italic text-[#232323] text-[32px] capitalize">
              Gopele
            </p>
          </div>
        </div>

        {/* Login Form Content */}
        <div className="absolute left-[80px] top-[260px] w-[560px]">
          {/* Header */}
          <div className="mb-[32px]">
            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[52px] not-italic text-[40px] text-[#232323] mb-[8px]">
              Sign In
            </h1>
            <p className="font-['Poppins:Regular',_sans-serif] leading-[26px] not-italic text-[16px] text-[#666666]">
              Select your role and enter your credentials
            </p>
          </div>

          {/* Role Selection */}
          <div className="mb-[24px]">
            <label className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic text-[#232323] text-[15px] block mb-[12px]">
              I am a:
            </label>
            <div className="grid grid-cols-3 gap-[12px]">
              <button
                type="button"
                onClick={() => setSelectedRole('student')}
                className={`flex items-center justify-center gap-[8px] h-[64px] rounded-[8px] border-2 transition-all ${
                  selectedRole === 'student'
                    ? 'border-[#1f60d8] bg-[#1f60d8]/5'
                    : 'border-[#d9d9d9] hover:border-[#1f60d8]/50'
                }`}
              >
                <BookOpen className={`w-5 h-5 ${selectedRole === 'student' ? 'text-[#1f60d8]' : 'text-gray-600'}`} />
                <span className={`font-['Poppins:Medium',_sans-serif] text-[16px] ${
                  selectedRole === 'student' ? 'text-[#1f60d8]' : 'text-[#232323]'
                }`}>
                  Student
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('teacher')}
                className={`flex items-center justify-center gap-[8px] h-[64px] rounded-[8px] border-2 transition-all ${
                  selectedRole === 'teacher'
                    ? 'border-[#1f60d8] bg-[#1f60d8]/5'
                    : 'border-[#d9d9d9] hover:border-[#1f60d8]/50'
                }`}
              >
                <GraduationCap className={`w-5 h-5 ${selectedRole === 'teacher' ? 'text-[#1f60d8]' : 'text-gray-600'}`} />
                <span className={`font-['Poppins:Medium',_sans-serif] text-[16px] ${
                  selectedRole === 'teacher' ? 'text-[#1f60d8]' : 'text-[#232323]'
                }`}>
                  Teacher
                </span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole('gopeleAdmin')}
                className={`flex items-center justify-center gap-[8px] h-[64px] rounded-[8px] border-2 transition-all ${
                  selectedRole === 'gopeleAdmin'
                    ? 'border-[#1f60d8] bg-[#1f60d8]/5'
                    : 'border-[#d9d9d9] hover:border-[#1f60d8]/50'
                }`}
              >
                <Shield className={`w-5 h-5 ${selectedRole === 'gopeleAdmin' ? 'text-[#1f60d8]' : 'text-gray-600'}`} />
                <span className={`font-['Poppins:Medium',_sans-serif] text-[14px] ${
                  selectedRole === 'gopeleAdmin' ? 'text-[#1f60d8]' : 'text-[#232323]'
                }`}>
                  Gopele Admin
                </span>
              </button>
            </div>
          </div>

          {/* Email/Username Field */}
          <div className="mb-[24px]">
            <label className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic text-[#232323] text-[15px] block mb-[8px]">
              Email or Username
            </label>
            <input 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                selectedRole === 'student' 
                  ? 'student@school.com' 
                  : selectedRole === 'teacher' 
                  ? 'teacher@school.com' 
                  : 'admin@gopele.com'
              }
              className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[15px] text-black w-full px-[16px] py-[12px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>

          {/* Password Field */}
          <div className="mb-[20px]">
            <label className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic text-[#232323] text-[15px] block mb-[8px]">
              Password
            </label>
            <input 
              type="password"
              placeholder="Enter your password"
              className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[15px] text-black w-full px-[16px] py-[12px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-[32px]">
            <label className="flex items-center gap-[8px] cursor-pointer">
              <input 
                type="checkbox"
                className="w-[20px] h-[20px] border-2 border-[#d9d9d9] rounded-[4px] cursor-pointer accent-[#1f60d8]"
              />
              <span className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[14px] text-[#666666]">
                Remember me
              </span>
            </label>
            <button className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[14px] text-[#1f60d8] cursor-pointer hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button 
            onClick={handleLogin}
            className="w-full bg-[#1f60d8] h-[56px] flex items-center justify-center rounded-[8px] cursor-pointer hover:bg-[#1a52b8] transition-colors mb-[24px]"
          >
            <span className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[18px] text-white">
              Sign In as {selectedRole === 'student' ? 'Student' : selectedRole === 'teacher' ? 'Teacher' : 'Gopele Admin'}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-[16px] mb-[24px]">
            <div className="flex-1 h-[1px] bg-[#d9d9d9]"></div>
            <span className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#666666]">or</span>
            <div className="flex-1 h-[1px] bg-[#d9d9d9]"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-[16px] mb-[32px]">
            <button className="flex-1 h-[48px] flex items-center justify-center gap-[8px] border-2 border-[#d9d9d9] rounded-[8px] hover:bg-[#f5f5f5] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10.2V12.05H15.6109C15.3818 13.3 14.6727 14.3591 13.6045 15.0682V17.5773H16.8273C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                <path d="M10.2 20C12.9 20 15.1727 19.1045 16.8273 17.5773L13.6045 15.0682C12.7 15.6682 11.5455 16.0227 10.2 16.0227C7.59545 16.0227 5.38182 14.2636 4.58182 11.9H1.25455V14.4909C2.90909 17.7591 6.29091 20 10.2 20Z" fill="#34A853"/>
                <path d="M4.58182 11.9C4.38182 11.3 4.26364 10.6591 4.26364 10C4.26364 9.34091 4.38182 8.7 4.58182 8.1V5.50909H1.25455C0.572727 6.85909 0.2 8.38636 0.2 10C0.2 11.6136 0.572727 13.1409 1.25455 14.4909L4.58182 11.9Z" fill="#FBBC05"/>
                <path d="M10.2 3.97727C11.6636 3.97727 12.9682 4.48182 14.0091 5.47273L16.8727 2.60909C15.1682 0.995455 12.8955 0 10.2 0C6.29091 0 2.90909 2.24091 1.25455 5.50909L4.58182 8.1C5.38182 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
              </svg>
              <span className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">Google</span>
            </button>
            <button className="flex-1 h-[48px] flex items-center justify-center gap-[8px] border-2 border-[#d9d9d9] rounded-[8px] hover:bg-[#f5f5f5] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 10C2.5 13.8 5.24 17 8.9 17.7V12H6.9V10H8.9V8.5C8.9 6.5 10.15 5.4 11.95 5.4C12.8 5.4 13.7 5.6 13.7 5.6V7.6H12.7C11.7 7.6 11.4 8.2 11.4 8.8V10H13.6L13.2 12H11.4V17.7C15.06 17 17.8 13.8 17.8 10C17.8 5.6 14.2 2 9.8 2C5.4 2 2.5 5.6 2.5 10Z" fill="#1877F2"/>
              </svg>
              <span className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">Facebook</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="flex items-center justify-center gap-[8px] mb-[16px]">
            <span className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[14px] text-[#666666]">
              Don't have an account?
            </span>
            <button className="font-['Poppins:SemiBold',_sans-serif] leading-[24px] not-italic text-[14px] text-[#1f60d8] cursor-pointer hover:underline">
              Sign Up
            </button>
          </div>

          {/* Admin Login Link */}
          <div className="flex items-center justify-center pt-[16px] border-t border-[#d9d9d9]">
            <button 
              onClick={() => onNavigate('adminLogin')}
              className="font-['Poppins:Medium',_sans-serif] leading-[24px] not-italic text-[14px] text-[#666666] cursor-pointer hover:text-[#1f60d8] transition-colors"
            >
              Login as Administrator →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
