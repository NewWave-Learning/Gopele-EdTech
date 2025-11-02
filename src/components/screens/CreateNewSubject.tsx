import { useState, useRef } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-3mkevan7uf";
import imgClipInternationalEducation1 from "figma:asset/0c2c26a084eeb039082ca6e93ab9beaa8e537242.png";
import { ChevronDown } from 'lucide-react';

type CreateNewSubjectProps = {
  onNavigate: (screen: Screen) => void;
};

const SUBJECT_CATEGORIES = [
  { id: 'art', name: 'ART', icon: '🎨' },
  { id: 'math', name: 'MATHEMATICS', icon: '➗' },
  { id: 'science', name: 'SCIENCE', icon: '🔬' },
  { id: 'language', name: 'LANGUAGE', icon: '📚' },
  { id: 'history', name: 'HISTORY', icon: '📜' },
  { id: 'geography', name: 'GEOGRAPHY', icon: '🌍' },
  { id: 'technology', name: 'TECHNOLOGY', icon: '💻' },
  { id: 'music', name: 'MUSIC', icon: '🎵' },
  { id: 'physical-ed', name: 'PHYSICAL EDUCATION', icon: '⚽' },
];

function ArrowSliderLeft({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-[780px] size-[42px] top-[55px] cursor-pointer hover:opacity-80 transition-opacity"
      data-name="Arrow Slider Left"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Arrow Slider Left">
          <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
          <g id="Solid/Interface/Arrow left">
            <path d={svgPaths.p19833c80} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function BackNav({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute contents left-[780px] top-[55px]" data-name="Back Nav">
      <ArrowSliderLeft onClick={onClick} />
      <button
        onClick={onClick}
        className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[844px] not-italic text-[#0b0c0c] text-[20px] top-[76px] translate-y-[-50%] w-[243px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to All Subjects</p>
      </button>
    </div>
  );
}

function SolidGeneralPalette() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Palette">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Solid/General/Palette">
          <path clipRule="evenodd" d={svgPaths.p740ed00} fill="var(--fill-0, #1F60D8)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

export function CreateNewSubject({ onNavigate }: CreateNewSubjectProps) {
  const [subjectName, setSubjectName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(SUBJECT_CATEGORIES[0]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      toast.error('Only JPG and PNG files are supported');
      return;
    }

    // Validate file size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error('File size must be less than 2 MB');
      return;
    }

    setUploadedFile(file);
    toast.success('File uploaded successfully');
  };

  const handleSubmit = () => {
    // Validation
    if (!subjectName.trim()) {
      toast.error('Please enter a subject name');
      return;
    }

    if (subjectName.length > 40) {
      toast.error('Subject name must be 40 characters or less');
      return;
    }

    if (!description.trim()) {
      toast.error('Please enter a subject description');
      return;
    }

    if (description.length > 500) {
      toast.error('Description must be 500 characters or less');
      return;
    }

    if (!uploadedFile) {
      toast.error('Please upload a subject banner');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(`Subject "${subjectName}" created successfully!`);
      setIsSubmitting(false);
      // Navigate to the empty subject screen with the created subject data
      onNavigate('emptySubject', {
        subjectName: subjectName,
        subjectDescription: description,
        subjectCategory: selectedCategory.name
      });
    }, 1500);
  };

  return (
    <div className="bg-white relative w-[1440px] h-[1024px]" data-name="Create a New Subject">
      <BackNav onClick={() => onNavigate('courses')} />
      
      <div className="absolute bottom-[848px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[34.075px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Create New Subjects</p>
      </div>

      {/* Subject Name */}
      <div className="absolute contents left-[782px] top-[214px]">
        <div className="absolute bottom-[692px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
          <p className="leading-[25.622px] whitespace-pre">Max Char {subjectName.length}/40</p>
        </div>
        <div className="absolute bottom-[787px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Subject Name</p>
        </div>
        <div className="absolute bg-white h-[52.749px] left-[784px] rounded-[6.594px] top-[266px] w-[583px]">
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            maxLength={40}
            placeholder="Type here..."
            className="w-full h-full px-[15.66px] rounded-[6.594px] font-['Poppins:Medium',_sans-serif] text-[16.484px] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)] outline-none"
          />
          <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
        </div>
      </div>

      {/* Subject Description */}
      <div className="absolute contents left-[782px] top-[361px]">
        <div className="absolute bottom-[640px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Subject Description</p>
        </div>
        <div className="absolute bottom-[436px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
          <p className="leading-[25.622px] whitespace-pre">Max Char {description.length}/500</p>
        </div>
        <div className="absolute bg-white h-[161px] left-[782px] rounded-[6.594px] top-[413px] w-[583px]">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={500}
            placeholder="Type here..."
            className="w-full h-full px-[15.66px] py-[15px] rounded-[6.594px] font-['Poppins:Medium',_sans-serif] text-[16.484px] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)] outline-none resize-none"
          />
          <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
        </div>
      </div>

      {/* Subject Category */}
      <div className="absolute contents left-[782px] top-[611px]">
        <div className="absolute bottom-[390px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Subject Category</p>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="absolute box-border content-stretch flex gap-[347px] h-[52px] items-center px-[21px] py-[8px] right-[73px] rounded-[10px] top-[663px] w-[583px] bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
            <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[32px] flex items-center justify-center text-[24px]">
                {selectedCategory.icon}
              </div>
              <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0c0c] text-[16.619px] tracking-[2.9676px] uppercase w-[200px]">
                <p className="leading-[37.985px]">{selectedCategory.name}</p>
              </div>
            </div>
            <ChevronDown className="h-[15.714px] w-[15.714px] text-[#333333]" />
          </button>

          {/* Dropdown Menu */}
          {showCategoryDropdown && (
            <div className="absolute right-[73px] top-[720px] w-[583px] bg-white border-[1.65px] border-[#0b0c0c] rounded-[10px] shadow-lg z-10 max-h-[300px] overflow-y-auto">
              {SUBJECT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategoryDropdown(false);
                  }}
                  className="w-full px-[21px] py-[12px] flex items-center gap-[11px] hover:bg-gray-100 transition-colors cursor-pointer border-b border-gray-200 last:border-b-0"
                >
                  <div className="size-[32px] flex items-center justify-center text-[24px]">
                    {category.icon}
                  </div>
                  <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic text-[#0b0c0c] text-[16.619px] tracking-[2.9676px] uppercase">
                    <p className="leading-[37.985px]">{category.name}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Subject Banner */}
      <div className="absolute contents left-[782px] top-[737px]">
        <div className="absolute bottom-[264px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Subject Banner</p>
        </div>
        <div className="absolute h-[52px] right-[73px] rounded-[10px] top-[789px] w-[583px]">
          <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[10.678px] h-[35.593px] items-center left-[435px] pl-[13.951px] pr-0 py-[5.14px] rounded-[5.874px] top-[8px] w-[140px] hover:bg-[#face55] transition-colors cursor-pointer"
          >
            <div className="h-[15.592px] relative shrink-0 w-[14.237px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
                <g id="Icon">
                  <path clipRule="evenodd" d={svgPaths.pf18fc00} fill="black" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2a502880} fill="black" fillRule="evenodd" />
                </g>
              </svg>
            </div>
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Upload Image</p>
          </button>
          <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[18px] not-italic text-[15px] text-black text-nowrap top-[14px] whitespace-pre">
            {uploadedFile ? uploadedFile.name : 'No file uploaded'}
          </p>
        </div>
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[19px] left-[784px] not-italic opacity-50 text-[13px] text-black text-nowrap top-[845px] whitespace-pre">Only JPG, PNG supported. Max file size: 2 MB</p>
      </div>

      {/* Create Subject Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[948px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[923px] w-[209px] hover:bg-[#1850b8] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">
          {isSubmitting ? 'Creating...' : 'Create Subject'}
        </p>
      </button>

      {/* Left Side - Blue Background with Illustration */}
      <div className="absolute bg-[#1f60d8] h-[1024px] left-0 top-0 w-[716px]" />
      <div className="absolute left-[132px] size-[456px] top-[127px]">
        <img alt="Education illustration" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipInternationalEducation1} />
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[40px] left-[360px] not-italic text-[36px] text-center text-white top-[623px] translate-x-[-50%] translate-y-[-50%] w-[546px]">
        <p className="mb-0">{`A new modern way to `}</p>
        <p>{`learn & teach!`}</p>
      </div>
    </div>
  );
}
