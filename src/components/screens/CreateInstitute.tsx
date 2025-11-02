import { useState } from 'react';
import { Screen, NavigationData } from '../../hooks/useNavigation';

type CreateInstituteProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

export function CreateInstitute({ onNavigate }: CreateInstituteProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Generate a random institute code
      const instituteCode = `INST-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      // Navigate to success screen with institute data
      onNavigate('addStudents', { 
        instituteName,
        instituteCode 
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white h-[800px] overflow-clip relative w-[916px] rounded-lg shadow-lg" data-name="Create Institute">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[98px] justify-center leading-[0] left-[458px] not-italic text-[32px] text-black text-center top-[104px] translate-x-[-50%] translate-y-[-50%] w-[588px]">
        <p className="leading-[42px]">Create Your Institute</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="absolute content-stretch flex flex-col gap-[21px] items-start left-[244px] top-[160px]">
          {/* School Email Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
            <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
              School Email
            </p>
            <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="teacher@school.com"
                required
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[15px] text-black w-full px-[16px] py-[12px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
            <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
              Password
            </p>
            <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="***********"
                required
                className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic text-[15px] text-black w-full px-[16px] py-[12px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
              />
            </div>
          </div>

          {/* Institute Name Input */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
            <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
              Institute Name
            </p>
            <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
              <input
                type="text"
                value={instituteName}
                onChange={(e) => setInstituteName(e.target.value)}
                placeholder="New Horizon School"
                required
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic text-[15px] text-black w-full px-[16px] py-[12px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[244px] px-[12px] py-[7px] rounded-[8px] top-[469px] w-[428px] hover:bg-[#face55] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-center w-[403px]">
            {isLoading ? 'Creating...' : 'Create Your Institute'}
          </p>
        </button>
      </form>

      {/* Back to Dashboard Link */}
      <button
        onClick={() => onNavigate('teacherDashboard')}
        className="absolute left-[244px] top-[540px] text-[14px] text-[#1f60d8] hover:underline"
      >
        ← Back to Dashboard
      </button>
    </div>
  );
}
