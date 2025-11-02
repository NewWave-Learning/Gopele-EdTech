import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-nowuxjzzbl";
import imgClipInternationalEducation1 from "figma:asset/0c2c26a084eeb039082ca6e93ab9beaa8e537242.png";
import { useState, useRef, ChangeEvent } from 'react';
import { toast } from 'sonner@2.0.3';

type UpdateSubjectProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  data?: {
    subjectName?: string;
    subjectDescription?: string;
    category?: string;
    topicName?: string;
  };
};

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

function TextField({ value, onChange, maxLength }: { 
  value: string; 
  onChange: (value: string) => void;
  maxLength: number;
}) {
  return (
    <div className="absolute bg-white h-[52.749px] left-[784px] rounded-[6.594px] top-[266px] w-[583px]" data-name="Text field">
      <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          className="absolute inset-0 flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[#232323] text-[16.484px] text-nowrap top-[24.86px] translate-y-[-50%] bg-transparent border-none outline-none w-[calc(100%-32px)]"
          placeholder="Enter subject name"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea({ value, onChange }: { 
  value: string; 
  onChange: (value: string) => void;
}) {
  return (
    <div className="absolute contents left-[784px] top-[266px]" data-name="Text Area">
      <TextField value={value} onChange={onChange} maxLength={40} />
    </div>
  );
}

function Group11860({ value, onChange, charCount }: { 
  value: string; 
  onChange: (value: string) => void;
  charCount: number;
}) {
  return (
    <div className="absolute contents left-[782px] top-[214px]">
      <div className="absolute bottom-[692px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">{charCount}/40 Characters</p>
      </div>
      <div className="absolute bottom-[787px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Name</p>
      </div>
      <TextArea value={value} onChange={onChange} />
    </div>
  );
}

function TextField1({ value, onChange, maxLength }: { 
  value: string; 
  onChange: (value: string) => void;
  maxLength: number;
}) {
  return (
    <div className="absolute bg-white h-[161px] left-[782px] rounded-[6.594px] top-[413px] w-[583px]" data-name="Text field">
      <div className="h-[161px] overflow-clip relative rounded-[inherit] w-[583px]">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          className="absolute font-['Poppins:Medium',_sans-serif] leading-[normal] left-[16px] not-italic text-[16.484px] text-[rgba(35,35,35,0.6)] top-[16px] w-[545px] h-[calc(100%-32px)] bg-transparent border-none outline-none resize-none"
          placeholder="Enter subject description"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea1({ value, onChange }: { 
  value: string; 
  onChange: (value: string) => void;
}) {
  return (
    <div className="absolute contents left-[782px] top-[413px]" data-name="Text Area">
      <TextField1 value={value} onChange={onChange} maxLength={500} />
    </div>
  );
}

function Group11858({ value, onChange, charCount }: { 
  value: string; 
  onChange: (value: string) => void;
  charCount: number;
}) {
  return (
    <div className="absolute contents left-[782px] top-[413px]">
      <div className="absolute bottom-[436px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
        <p className="leading-[25.622px] whitespace-pre">{charCount}/500 Characters</p>
      </div>
      <TextArea1 value={value} onChange={onChange} />
    </div>
  );
}

function Group11861({ value, onChange, charCount }: { 
  value: string; 
  onChange: (value: string) => void;
  charCount: number;
}) {
  return (
    <div className="absolute contents left-[782px] top-[361px]">
      <div className="absolute bottom-[640px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Description</p>
      </div>
      <Group11858 value={value} onChange={onChange} charCount={charCount} />
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

function Frame247({ category }: { category: string }) {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <SolidGeneralPalette />
      <div className="flex flex-col font-['Poppins:Bold',_sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0c0c] text-[16.619px] tracking-[2.9676px] uppercase w-[133.333px]">
        <p className="leading-[37.985px]">{category}</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[10px] relative shrink-0 w-[15.714px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Frame 36">
          <path d={svgPaths.p1e43a080} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11({ category, isOpen, onClick, onSelectCategory }: { 
  category: string; 
  isOpen: boolean;
  onClick: () => void;
  onSelectCategory: (category: string) => void;
}) {
  const categories = ['Art', 'Science', 'Mathematics', 'Language', 'History', 'Geography'];
  
  return (
    <div className="absolute left-[782px] top-[663px]">
      <button
        onClick={onClick}
        className="box-border content-stretch flex gap-[347px] h-[52px] items-center px-[21px] py-[8px] rounded-[10px] w-[583px] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <Frame247 category={category} />
        <Frame36 />
      </button>
      {isOpen && (
        <div className="absolute bg-white border-[#0b0c0c] border-[1.65px] border-solid rounded-[10px] mt-[4px] w-[583px] shadow-lg z-10 max-h-[200px] overflow-y-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                onSelectCategory(cat);
                onClick();
              }}
              className="w-full px-[21px] py-[12px] text-left hover:bg-gray-100 transition-colors font-['Poppins:Medium',_sans-serif] text-[16px] text-[#0b0c0c]"
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Group11859({ category, isOpen, onClick, onSelectCategory }: { 
  category: string; 
  isOpen: boolean;
  onClick: () => void;
  onSelectCategory: (category: string) => void;
}) {
  return (
    <div className="absolute contents left-[782px] top-[611px]">
      <div className="absolute bottom-[390px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Category</p>
      </div>
      <Frame11 category={category} isOpen={isOpen} onClick={onClick} onSelectCategory={onSelectCategory} />
    </div>
  );
}

function Button({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[948px] pl-[19px] pr-[18px] py-[7px] rounded-[8px] top-[923px] w-[209px] cursor-pointer hover:bg-[#1850b8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
      data-name="Button"
    >
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Update Subject</p>
    </button>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[10.678px] h-[35.593px] items-center left-[435px] pl-[13.951px] pr-0 py-[5.14px] rounded-[5.874px] top-[8px] w-[140px] cursor-pointer hover:bg-[#face55] transition-colors" 
      data-name="Button"
    >
      <div className="h-[15.592px] relative shrink-0 w-[14.237px]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.pf18fc00} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2a502880} fill="black" fillRule="evenodd" />
          </g>
        </svg>
      </div>
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Upload Image</p>
    </button>
  );
}

function Frame12({ fileName, onUploadClick }: { 
  fileName: string | null;
  onUploadClick: () => void;
}) {
  return (
    <div className="absolute h-[52px] right-[73px] rounded-[10px] top-[789px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button1 onClick={onUploadClick} />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[18px] not-italic text-[15px] text-black text-nowrap top-[14px] whitespace-pre">
        {fileName || 'No file selected'}
      </p>
    </div>
  );
}

function Group11862({ fileName, onUploadClick }: { 
  fileName: string | null;
  onUploadClick: () => void;
}) {
  return (
    <div className="absolute contents left-[782px] top-[737px]">
      <div className="absolute bottom-[264px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Subject Banner</p>
      </div>
      <Frame12 fileName={fileName} onUploadClick={onUploadClick} />
    </div>
  );
}

function Group11863({ fileName, onUploadClick }: { 
  fileName: string | null;
  onUploadClick: () => void;
}) {
  return (
    <div className="absolute contents left-[782px] top-[737px]">
      <Group11862 fileName={fileName} onUploadClick={onUploadClick} />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[19px] left-[784px] not-italic opacity-50 text-[13px] text-black text-nowrap top-[845px] whitespace-pre">Only JPG, PNG supported. Max file size: 2 MB</p>
    </div>
  );
}

export function UpdateSubject({ onNavigate, data }: UpdateSubjectProps) {
  const [subjectName, setSubjectName] = useState(data?.subjectName || 'Science');
  const [subjectDescription, setSubjectDescription] = useState(
    data?.subjectDescription || `In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.\n\nUse diagrams and words to explore the very start of algebra, with puzzles and intuition guiding the way.\n\nBy the end of the course, you'll be able to simplify expressions and solve equations using methods that impart deep understanding rather than just procedures.`
  );
  const [category, setCategory] = useState(data?.category || 'Art');
  const [fileName, setFileName] = useState<string | null>('banner.png');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBackToAllSubjects = () => {
    onNavigate('courses');
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
      toast.error('Invalid file type. Only JPG and PNG are supported.');
      return;
    }

    // Validate file size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error('File size exceeds 2 MB limit.');
      return;
    }

    setUploadedFile(file);
    setFileName(file.name);
    toast.success('File uploaded successfully!');
  };

  const handleUpdateSubject = () => {
    // Validation
    if (!subjectName.trim()) {
      toast.error('Please enter a subject name.');
      return;
    }

    if (!subjectDescription.trim()) {
      toast.error('Please enter a subject description.');
      return;
    }

    toast.success('Subject updated successfully!');
    
    // Navigate back to topic details with updated data
    setTimeout(() => {
      onNavigate('topicDetails', {
        subjectName,
        subjectDescription,
        category,
        topicName: data?.topicName
      });
    }, 500);
  };

  const handleCategoryToggle = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const isFormValid = subjectName.trim().length > 0 && subjectDescription.trim().length > 0;

  return (
    <div className="bg-white relative w-[1440px] min-h-[1024px]" data-name="Update Subject">
      <BackNav onClick={handleBackToAllSubjects} />
      <div className="absolute bottom-[848px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[782px] not-italic text-[#232323] text-[34.075px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Update Subject</p>
      </div>
      <Group11860 
        value={subjectName} 
        onChange={setSubjectName} 
        charCount={subjectName.length}
      />
      <Group11861 
        value={subjectDescription} 
        onChange={setSubjectDescription}
        charCount={subjectDescription.length}
      />
      <div className="absolute bg-[#1f60d8] h-[1024px] left-0 top-0 w-[716px]" />
      <div className="absolute left-[132px] size-[456px] top-[127px]" data-name="clip-international-education 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgClipInternationalEducation1} />
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[40px] left-[360px] not-italic text-[36px] text-center text-white top-[623px] translate-x-[-50%] translate-y-[-50%] w-[546px]">
        <p className="mb-0">{`A new modern way to `}</p>
        <p>{`learn & teach!`}</p>
      </div>
      <Group11859 
        category={category} 
        isOpen={isCategoryOpen}
        onClick={handleCategoryToggle}
        onSelectCategory={setCategory}
      />
      <Button onClick={handleUpdateSubject} disabled={!isFormValid} />
      <Group11863 fileName={fileName} onUploadClick={handleFileUpload} />
      
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
