import { useState } from 'react';
import svgPaths from "../../../imports/svg-2dnbiahxic";
import { Screen, NavigationData, UserRole } from "../../../hooks/useNavigation";
import { GraduationCap, BookOpen, Shield } from 'lucide-react';

type LoginMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  onLogin: (role: UserRole, name: string) => void;
};

export function LoginMobile({ onNavigate, onLogin }: LoginMobileProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    const name = email.split('@')[0] || 'User';
    onLogin(selectedRole, name);
  };

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Login - Mobile">
      {/* Logo at Top */}
      <div className="absolute contents left-[18px] top-[60px]" data-name="Logo">
        <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[91px] not-italic text-[#232323] text-[28px] top-[73px] translate-y-[-50%]">
          <p className="leading-[26px]">Gopele</p>
        </div>
        <div className="absolute contents left-[18px] top-[60px]">
          <div className="absolute h-[48px] left-[18px] top-[60px] w-[48px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <g id="Frame 2">
                <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[30.09%_91.69%_32.43%_7.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 40">
              <g id="Group 12">
                <g id="svgg">
                  <path clipRule="evenodd" d={svgPaths.p3bfb200} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
                </g>
                <rect fill="var(--fill-0, #1F60D8)" height="28.8" id="Rectangle 1" width="30.7" x="6" y="5.5" />
                <path d={svgPaths.p1e47b880} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Branding Section */}
      <div className="absolute bg-[#1f60d8] h-[280px] left-0 top-[140px] w-[375px]" data-name="Brand Section">
        <div className="absolute contents left-[40px] top-[40px]">
          <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[52px] left-[40px] not-italic text-[40px] text-white top-[60px] w-[295px]">
            Welcome Back
          </p>
          <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[26px] left-[40px] not-italic text-[16px] text-white top-[160px] w-[295px]">
            Sign in to continue your learning journey
          </p>
        </div>
      </div>

      {/* Login Form */}
      <div className="absolute contents left-[40px] top-[460px]">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[40px] not-italic text-[32px] text-[#232323] top-[460px] w-[295px]">
          <p className="leading-[42px]">Sign In</p>
        </div>

        {/* Role Selection */}
        <div className="absolute left-[40px] top-[530px] w-[295px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic text-[#232323] text-[14px] mb-3">I am a:</p>
          <div className="grid grid-cols-3 gap-[6px]">
            <button
              type="button"
              onClick={() => setSelectedRole('student')}
              className={`flex items-center justify-center gap-[4px] h-[52px] rounded-[8px] border-2 transition-all ${
                selectedRole === 'student'
                  ? 'border-[#1f60d8] bg-[#1f60d8]/5'
                  : 'border-[#d9d9d9]'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${selectedRole === 'student' ? 'text-[#1f60d8]' : 'text-gray-600'}`} />
              <span className={`font-['Poppins:Medium',_sans-serif] text-[11px] ${
                selectedRole === 'student' ? 'text-[#1f60d8]' : 'text-[#232323]'
              }`}>
                Student
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('teacher')}
              className={`flex items-center justify-center gap-[4px] h-[52px] rounded-[8px] border-2 transition-all ${
                selectedRole === 'teacher'
                  ? 'border-[#1f60d8] bg-[#1f60d8]/5'
                  : 'border-[#d9d9d9]'
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${selectedRole === 'teacher' ? 'text-[#1f60d8]' : 'text-gray-600'}`} />
              <span className={`font-['Poppins:Medium',_sans-serif] text-[11px] ${
                selectedRole === 'teacher' ? 'text-[#1f60d8]' : 'text-[#232323]'
              }`}>
                Teacher
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('gopeleAdmin')}
              className={`flex flex-col items-center justify-center gap-[2px] h-[52px] rounded-[8px] border-2 transition-all ${
                selectedRole === 'gopeleAdmin'
                  ? 'border-[#1f60d8] bg-[#1f60d8]/5'
                  : 'border-[#d9d9d9]'
              }`}
            >
              <Shield className={`w-4 h-4 ${selectedRole === 'gopeleAdmin' ? 'text-[#1f60d8]' : 'text-gray-600'}`} />
              <span className={`font-['Poppins:Medium',_sans-serif] text-[10px] text-center leading-tight ${
                selectedRole === 'gopeleAdmin' ? 'text-[#1f60d8]' : 'text-[#232323]'
              }`}>
                Gopele<br/>Admin
              </span>
            </button>
          </div>
        </div>

        {/* Email/ID Input */}
        <div className="absolute left-[40px] top-[620px] w-[295px]" data-name="Input/Default/Off">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic relative text-[#232323] text-[14px] w-full mb-2">Email or ID</p>
          <div className="bg-white relative rounded-[8px] w-full" data-name="Text field">
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
              className="font-['Poppins:Regular',_sans-serif] leading-[22px] not-italic text-[14px] text-black w-full px-[14px] py-[10px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="absolute left-[40px] top-[710px] w-[295px]" data-name="Input/Default/Off">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] not-italic relative text-[#232323] text-[14px] w-full mb-2">Password</p>
          <div className="bg-white relative rounded-[8px] w-full" data-name="Text field">
            <input 
              type="password"
              placeholder="••••••••"
              className="font-['Poppins:Regular',_sans-serif] leading-[22px] not-italic text-[14px] text-black w-full px-[14px] py-[10px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <button 
          onClick={handleLogin}
          className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[7px] h-[52px] items-center justify-center left-[40px] px-[24px] py-[12px] rounded-[8px] top-[790px] w-[295px] hover:bg-[#1a52b8] transition-colors"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">
            Sign In as {selectedRole === 'student' ? 'Student' : selectedRole === 'teacher' ? 'Teacher' : 'Gopele Admin'}
          </p>
        </button>

        {/* Sign Up Link */}
        <div className="absolute content-stretch flex gap-[6px] items-center justify-center left-[40px] top-[828px] w-[295px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[#666666] text-nowrap whitespace-pre">Don't have an account?</p>
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[22px] not-italic relative shrink-0 text-[13px] text-[#1f60d8] text-nowrap whitespace-pre">Sign Up</p>
        </div>
      </div>
    </div>
  );
}
