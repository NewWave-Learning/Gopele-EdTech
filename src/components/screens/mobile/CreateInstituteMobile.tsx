import { useState } from 'react';
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { ArrowLeft } from 'lucide-react';

type CreateInstituteMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

export function CreateInstituteMobile({ onNavigate }: CreateInstituteMobileProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const instituteCode = `INST-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      
      onNavigate('addStudents', { 
        instituteName,
        instituteCode 
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Create Institute - Mobile">
      {/* Header */}
      <div className="absolute left-0 top-0 w-full px-[20px] py-[16px] border-b border-gray-200">
        <button
          onClick={() => onNavigate('teacherDashboard')}
          className="flex items-center gap-2 text-[#1f60d8]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-['Poppins:Medium',_sans-serif] text-[14px]">Back</span>
        </button>
      </div>

      {/* Title */}
      <div className="absolute left-[20px] top-[80px] w-[335px]">
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[28px] text-center text-black leading-[38px]">
          Create Your Institute
        </h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="absolute left-[20px] top-[160px] w-[335px]">
        <div className="flex flex-col gap-[20px]">
          {/* School Email */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
              School Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="teacher@school.com"
              required
              className="font-['Poppins:Regular',_sans-serif] text-[15px] text-black w-full px-[14px] py-[10px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***********"
              required
              className="font-['Inter:Regular',_sans-serif] text-[15px] text-black w-full px-[14px] py-[10px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>

          {/* Institute Name */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
              Institute Name
            </label>
            <input
              type="text"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              placeholder="New Horizon School"
              required
              className="font-['Poppins:Regular',_sans-serif] text-[15px] text-black w-full px-[14px] py-[10px] bg-white border-2 border-[#d9d9d9] rounded-[8px] outline-none focus:border-[#1f60d8] transition-colors placeholder:opacity-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#f4d35e] h-[52px] flex items-center justify-center rounded-[8px] hover:bg-[#face55] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            <span className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">
              {isLoading ? 'Creating...' : 'Create Your Institute'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
