import { useState } from 'react';
import svgPaths from "../../imports/svg-5ml7wct8yr";
import { Screen } from '../../hooks/useNavigation';
import { toast } from 'sonner@2.0.3';
import { AddInstituteModals } from '../shared/AddInstituteModals';

type AddInstituteProps = {
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

export function AddInstitute({ onNavigate }: AddInstituteProps) {
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
      // Check file type
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        toast.error('Only JPG and PNG files are supported');
        return;
      }
      // Check file size (2MB max)
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

    // Show loading modal
    setModalStatus('loading');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // Randomly simulate success or error for demo (90% success rate)
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        setModalStatus('success');
        // Auto-navigate after 3 seconds
        setTimeout(() => {
          onNavigate('adminDashboard');
        }, 3000);
      } else {
        setModalStatus('error');
      }
    } catch (error) {
      setModalStatus('error');
    }
  };

  const handleCloseModal = () => {
    setModalStatus(null);
    if (modalStatus === 'success') {
      onNavigate('adminDashboard');
    }
  };

  const selectedCategoryData = SCHOOL_CATEGORIES.find(c => c.id === selectedCategory) || SCHOOL_CATEGORIES[0];

  return (
    <>
      <AddInstituteModals status={modalStatus} onClose={handleCloseModal} />
      
      <div className="bg-white relative w-[916px] h-[800px]" data-name="Add Institute">
      {/* Header */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[442px] not-italic text-[32px] text-black text-center top-[72px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Add Institute</p>
      </div>

      {/* Subheader */}
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[442px] not-italic text-[#9b9b9b] text-[15px] text-center top-[101px] translate-x-[-50%] w-[334px]">
        After successfully creation, all credentials will be directly emailed to you.
      </p>

      {/* Form Fields */}
      <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-[228px] top-[178px]">
        {/* Institute Name */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
            Institute Name
          </p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
              <input
                type="text"
                value={instituteName}
                onChange={(e) => setInstituteName(e.target.value)}
                placeholder="Name"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic w-full text-[15px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* Location */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
            Location
          </p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Johsenburg"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic w-full text-[15px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>

        {/* Institute Email */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
            Institute Email
          </p>
          <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]">
            <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="bnb@school.vom"
                className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic w-full text-[15px] text-black bg-transparent border-none outline-none placeholder:opacity-50"
              />
            </div>
            <div aria-hidden="true" className={`absolute border-2 ${emailError ? 'border-[#eb5757]' : 'border-[#d9d9d9]'} border-solid inset-0 pointer-events-none rounded-[8px]`} />
          </div>
          {emailError && (
            <p className="font-['Poppins:Regular',_sans-serif] leading-[19px] not-italic relative shrink-0 text-[#eb5757] text-[11.875px] text-nowrap whitespace-pre">
              Only school issued emails allowed. 
            </p>
          )}
        </div>

        {/* School Category */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">
            School Category
          </p>
          
          {/* Dropdown */}
          <div className="relative w-[428px]">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="h-[49px] relative rounded-[10px] w-[428px] bg-white hover:bg-gray-50 transition-colors"
            >
              <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
              
              {/* Selected Category Display */}
              <div className="absolute content-stretch flex gap-[8.297px] items-center left-[26px] top-[12px]">
                <div className="relative shrink-0 size-[24.136px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                    <g>
                      <path clipRule="evenodd" d={svgPaths.p104eba00} fill="var(--fill-0, #232323)" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.102px] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[12.535px] tracking-[2.2383px] uppercase w-[100.567px]">
                  <p className="leading-[28.651px]">{selectedCategoryData.label}</p>
                </div>
              </div>

              {/* Dropdown Arrow */}
              <div className="absolute h-[7px] left-[407px] top-[21px] w-[11px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
                  <g>
                    <path d={svgPaths.p3eb042f2} fill="var(--fill-0, #333333)" />
                  </g>
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showCategoryDropdown && (
              <div className="absolute top-[52px] left-0 w-[428px] bg-white border border-[#cccccc] rounded-[10px] shadow-lg z-10 max-h-[200px] overflow-y-auto">
                {SCHOOL_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setShowCategoryDropdown(false);
                    }}
                    className="w-full px-[26px] py-[12px] text-left hover:bg-gray-50 transition-colors flex items-center gap-[8px]"
                  >
                    <div className="relative shrink-0 size-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p104eba00} fill="var(--fill-0, #232323)" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                    <span className="font-['Poppins:Bold',_sans-serif] text-[12.535px] tracking-[2.2383px] uppercase text-[#232323]">
                      {category.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* School Logo Upload */}
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 mt-[21px]">
            <p className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[1.5] ml-0 mt-0 not-italic relative text-[#232323] text-[15px] w-[428px]">
              School Logo
            </p>
            
            {/* File Upload Field */}
            <div className="[grid-area:1_/_1] h-[49px] ml-0 mt-[35px] relative rounded-[10px] w-[428px]">
              <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[24px] left-[16px] not-italic opacity-50 text-[15px] text-black text-nowrap top-[12px] whitespace-pre">
                {uploadedFile ? uploadedFile.name : 'No file uploaded'}
              </p>
              
              {/* Upload Button */}
              <label className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[9px] h-[30px] items-center left-[303px] pl-[11.759px] pr-[11.759px] py-[4.332px] rounded-[4.951px] top-[9px] w-[118px] cursor-pointer hover:bg-[#face55] transition-colors">
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="h-[13.142px] relative shrink-0 w-[12px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14">
                    <g>
                      <path clipRule="evenodd" d={svgPaths.p9c03f80} fill="black" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p313a4500} fill="black" fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[11.14px] text-nowrap whitespace-pre">
                  Upload Image
                </p>
              </label>
            </div>

            {/* File Format Info */}
            <p className="[grid-area:1_/_1] font-['Poppins:Regular',_sans-serif] leading-[19px] ml-0 mt-[84px] not-italic opacity-50 relative text-[11.875px] text-black text-nowrap whitespace-pre">
              Only JPG, PNG supported. Max file size: 2 MB
            </p>
          </div>
        </div>
      </div>

      {/* Add Institute Button */}
      <button
        onClick={handleAddInstitute}
        className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[37px] items-center justify-center left-[352px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[731px] w-[180px] hover:bg-[#1850b8] transition-colors cursor-pointer"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">
          Add Institute
        </p>
      </button>
    </div>
    </>
  );
}
