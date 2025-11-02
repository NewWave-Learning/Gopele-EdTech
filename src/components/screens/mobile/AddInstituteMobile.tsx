import { useState } from 'react';
import svgPaths from "../../../imports/svg-5ml7wct8yr";
import { Screen } from '../../../hooks/useNavigation';
import { toast } from 'sonner@2.0.3';
import { AddInstituteModals } from '../../shared/AddInstituteModals';
import { ChevronDown, Upload, Menu } from 'lucide-react';

type AddInstituteMobileProps = {
  onNavigate: (screen: Screen) => void;
};

type ModalStatus = 'loading' | 'success' | 'error' | null;

const SCHOOL_CATEGORIES = [
  { id: 'art', label: 'ART SCHOOL', icon: 'palette' },
  { id: 'science', label: 'SCIENCE SCHOOL', icon: 'flask' },
  { id: 'business', label: 'BUSINESS SCHOOL', icon: 'briefcase' },
  { id: 'technology', label: 'TECHNOLOGY SCHOOL', icon: 'computer' },
  { id: 'general', label: 'GENERAL SCHOOL', icon: 'building' },
];

export function AddInstituteMobile({ onNavigate }: AddInstituteMobileProps) {
  const [instituteName, setInstituteName] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('art');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [modalStatus, setModalStatus] = useState<ModalStatus>(null);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    // Simple email validation - check if it contains common non-school domains
    const nonSchoolDomains = ['gmail', 'yahoo', 'hotmail', 'outlook'];
    const emailDomain = value.split('@')[1]?.toLowerCase() || '';
    const hasNonSchoolDomain = nonSchoolDomains.some(domain => emailDomain.includes(domain));
    setEmailError(hasNonSchoolDomain);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        toast.error('Only JPG and PNG files are supported');
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        toast.error('File size must be less than 2 MB');
        return;
      }
      setUploadedFile(file);
      toast.success('Logo uploaded successfully');
    }
  };

  const handleAddInstitute = async () => {
    if (!instituteName || !location || !email) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (emailError) {
      toast.error('Please use a school-issued email address');
      return;
    }

    setModalStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        setModalStatus('success');
        setTimeout(() => {
          setModalStatus(null);
          onNavigate('institutesPage');
        }, 2000);
      } else {
        setModalStatus('error');
        setTimeout(() => setModalStatus(null), 3000);
      }
    } catch (error) {
      setModalStatus('error');
      setTimeout(() => setModalStatus(null), 3000);
    }
  };

  const selectedCategoryLabel = SCHOOL_CATEGORIES.find(cat => cat.id === selectedCategory)?.label || '';

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Add Institute Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] h-[60px] w-full flex items-center justify-between px-4">
        <button 
          onClick={() => onNavigate('institutesPage')}
          className="flex items-center gap-2"
        >
          <div className="size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
              <g id="Frame 2">
                <circle cx="23" cy="23" fill="var(--fill-0, #1F60D8)" id="Ellipse 1" r="23" />
                <path d="M 15.333 23 L 30.667 23 M 30.667 23 L 25.778 18.111 M 30.667 23 L 25.778 27.889" id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-black">Add Institute</h1>
        <button className="p-2">
          <Menu className="size-6 text-[#232323]" />
        </button>
      </div>

      {/* Form Container */}
      <div className="px-4 pt-6 space-y-4">
        {/* Institute Name */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
            Institute Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
              placeholder="New Thomas School for Gifted"
              className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Johannesburg"
              className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="institute@school.com"
              className={`w-full px-4 py-3 border-2 rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none transition-colors ${
                emailError ? 'border-red-500' : 'border-[#d9d9d9] focus:border-[#1f60d8]'
              }`}
            />
            {emailError && (
              <p className="mt-1 text-[12px] text-red-500 font-['Poppins:Regular',_sans-serif]">
                Please use a school-issued email address
              </p>
            )}
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] text-left flex items-center justify-between hover:border-[#1f60d8] transition-colors"
            >
              <span>{selectedCategoryLabel}</span>
              <ChevronDown className={`size-5 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showCategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#d9d9d9] rounded-[8px] shadow-lg z-20 max-h-[200px] overflow-y-auto">
                {SCHOOL_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowCategoryDropdown(false);
                    }}
                    className={`w-full px-4 py-3 text-left font-['Poppins:Regular',_sans-serif] text-[14px] hover:bg-[#f5f6fa] transition-colors ${
                      selectedCategory === category.id ? 'bg-[#e9f0ff] text-[#1f60d8]' : 'text-[#232323]'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Logo Upload */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#232323]">
            Upload Logo
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={handleFileUpload}
              className="hidden"
              id="logo-upload-mobile"
            />
            <label
              htmlFor="logo-upload-mobile"
              className="w-full px-4 py-3 border-2 border-dashed border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] flex items-center justify-center gap-2 cursor-pointer hover:border-[#1f60d8] transition-colors"
            >
              <Upload className="size-5" />
              <span>{uploadedFile ? uploadedFile.name : 'Upload JPG or PNG (Max 2MB)'}</span>
            </label>
          </div>
        </div>

        {/* Add Institute Button */}
        <button
          onClick={handleAddInstitute}
          className="w-full mt-6 bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Add Institute
        </button>
      </div>

      {/* Modals */}
      <AddInstituteModals 
        status={modalStatus}
        onClose={() => setModalStatus(null)}
      />
    </div>
  );
}
