import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-jc0o4hk5p8";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";
import { useState, useRef, ChangeEvent } from 'react';
import { toast } from 'sonner@2.0.3';

type CreateLessonDetailsProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  data?: {
    subjectName?: string;
    topicName?: string;
    chapterName?: string;
  };
};

type LessonPage = {
  id: string;
  title: string;
  pageNumber: number;
};

function Frame2() {
  return (
    <div className="absolute h-[35.601px] left-[78px] top-[23.73px] w-[35.569px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Frame 2">
          <path d={svgPaths.p28ec9500} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[30.62%_92.3%_31.35%_5.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 31">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p2714ce00} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="21.4896" id="Rectangle 1" width="22.8884" x="4.47357" y="4.11446" />
          <path d={svgPaths.p2c02ac00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[78px] top-[23.73px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute contents left-[78px] top-[23.73px]" data-name="Logo 2">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[41.23%_86.3%_37.47%_8.46%] justify-center leading-[0] not-italic text-[#232323] text-[20.981px]">
        <p className="leading-[17.039px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function OutlineGeneralBank() {
  return (
    <div className="relative shrink-0 size-[20.585px]" data-name="Outline/General/Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Outline/General/Bank">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p32a89900} fill="var(--fill-0, black)" fillRule="evenodd" />
            <path d={svgPaths.p389c8700} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1d1d7c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p35407680} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1607c900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1073px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[21.99px] cursor-pointer hover:bg-[#face55] transition-colors" 
      data-name="Button"
    >
      <OutlineGeneralBank />
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Institute</p>
    </button>
  );
}

function Frame256() {
  return (
    <div className="absolute bg-[#face55] left-[1237px] overflow-clip rounded-[176px] size-[34px] top-[22px] cursor-pointer hover:bg-[#f4d35e] transition-colors">
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[20px] justify-center leading-[0] left-[17.5px] not-italic text-[13.709px] text-black text-center top-[17px] translate-x-[-50%] translate-y-[-50%] w-[17px]">
        <p className="leading-[normal]">?</p>
      </div>
    </div>
  );
}

function NavBarTeachers({ onAddInstitute }: { onAddInstitute: () => void }) {
  return (
    <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar - Teachers">
      <div className="absolute bg-white inset-0" data-name="Background" />
      <Logo2 />
      <div className="absolute inset-[19.98%_6.74%_19.98%_89.93%]" data-name="Profile">
        <img alt="" className="block max-w-none size-full" height="48.032" src={imgProfile} width="48.032" />
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[38.55%_75.13%_35.2%_14.25%] leading-[normal] not-italic text-[#555555] text-[14.22px] text-nowrap tracking-[0.79px] whitespace-pre">FOR GOPELE ADMINS</p>
      <Button onClick={onAddInstitute} />
      <Frame256 />
    </div>
  );
}

function ArrowSliderLeft({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="absolute left-[84px] size-[42px] top-[151px] cursor-pointer hover:opacity-80 transition-opacity" 
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

function BackNav({ onClick, subjectName }: { onClick: () => void; subjectName: string }) {
  return (
    <div className="absolute contents left-[84px] top-[151px]" data-name="Back Nav">
      <ArrowSliderLeft onClick={onClick} />
      <button 
        onClick={onClick}
        className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[148px] not-italic text-[#0b0c0c] text-[20px] top-[172px] translate-y-[-50%] w-[243px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to {subjectName}</p>
      </button>
    </div>
  );
}

function TextField({ value, onChange, maxLength, placeholder }: { 
  value: string; 
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: string;
}) {
  return (
    <div className="absolute bg-white h-[52.749px] left-[86px] rounded-[6.594px] top-[392px] w-[583px]" data-name="Text field">
      <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          placeholder={placeholder}
          className="absolute inset-0 flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] top-[24.86px] translate-y-[-50%] bg-transparent border-none outline-none w-[calc(100%-32px)] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea({ value, onChange, maxLength, placeholder }: { 
  value: string; 
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: string;
}) {
  return (
    <div className="absolute contents left-[86px] top-[392px]" data-name="Text Area">
      <TextField value={value} onChange={onChange} maxLength={maxLength} placeholder={placeholder} />
    </div>
  );
}

function Group11860({ value, onChange, charCount }: { 
  value: string; 
  onChange: (value: string) => void;
  charCount: number;
}) {
  return (
    <div className="absolute contents left-[84px] top-[340px]">
      <div className="absolute top-[340px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap">
        <p className="leading-[25.622px] whitespace-pre">Max Char {charCount}/40</p>
      </div>
      <div className="absolute top-[292px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap">
        <p className="leading-[45.434px] whitespace-pre">Lesson Name</p>
      </div>
      <TextArea value={value} onChange={onChange} maxLength={40} placeholder="Type here..." />
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute h-[10px] left-[544.33px] top-[21px] w-[15.714px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="Frame 36">
          <path d={svgPaths.p1e43a080} fill="var(--fill-0, #333333)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextField1({ value, isOpen, onClick }: { 
  value: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-white h-[52.749px] left-[86px] rounded-[6.594px] top-[947px] w-[583px] cursor-pointer hover:bg-gray-50 transition-colors" 
      data-name="Text field"
    >
      <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[#232323] text-[16.484px] text-nowrap top-[26.5px] translate-y-[-50%]">
          <p className="leading-[24.726px] whitespace-pre">{value}</p>
        </div>
        <Frame36 />
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </button>
  );
}

function TextArea1({ value, isOpen, onClick }: { 
  value: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="absolute contents left-[86px] top-[947px]" data-name="Text Area">
      <TextField1 value={value} isOpen={isOpen} onClick={onClick} />
    </div>
  );
}

function Group11864({ value, isOpen, onClick }: { 
  value: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="absolute contents left-[86px] top-[895px]">
      <div className="absolute top-[895px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[86px] not-italic text-[#232323] text-[24px] text-nowrap">
        <p className="leading-[45.434px] whitespace-pre">Topic</p>
      </div>
      <TextArea1 value={value} isOpen={isOpen} onClick={onClick} />
    </div>
  );
}

function TextField2({ value, onChange, maxLength, placeholder }: { 
  value: string; 
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: string;
}) {
  return (
    <div className="absolute bg-white h-[161px] left-[84px] rounded-[6.594px] top-[542px] w-[583px]" data-name="Text field">
      <div className="h-[161px] overflow-clip relative rounded-[inherit] w-[583px]">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          placeholder={placeholder}
          className="absolute font-['Poppins:Medium',_sans-serif] leading-[normal] left-[15.66px] not-italic text-[16.484px] top-[16px] w-[545px] h-[calc(100%-32px)] bg-transparent border-none outline-none resize-none text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
        />
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea2({ value, onChange, maxLength, placeholder }: { 
  value: string; 
  onChange: (value: string) => void;
  maxLength: number;
  placeholder: string;
}) {
  return (
    <div className="absolute contents left-[84px] top-[542px]" data-name="Text Area">
      <TextField2 value={value} onChange={onChange} maxLength={maxLength} placeholder={placeholder} />
    </div>
  );
}

function Group11858({ value, onChange, charCount }: { 
  value: string; 
  onChange: (value: string) => void;
  charCount: number;
}) {
  return (
    <div className="absolute contents left-[84px] top-[542px]">
      <div className="absolute top-[490px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap">
        <p className="leading-[25.622px] whitespace-pre">Max Char {charCount}/500</p>
      </div>
      <TextArea2 value={value} onChange={onChange} maxLength={500} placeholder="Type here..." />
    </div>
  );
}

function Group11861({ value, onChange, charCount }: { 
  value: string; 
  onChange: (value: string) => void;
  charCount: number;
}) {
  return (
    <div className="absolute contents left-[84px] top-[490px]">
      <div className="absolute top-[442px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap">
        <p className="leading-[45.434px] whitespace-pre">Lesson Description</p>
      </div>
      <Group11858 value={value} onChange={onChange} charCount={charCount} />
    </div>
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

function Frame11({ fileName, onUploadClick }: { 
  fileName: string | null;
  onUploadClick: () => void;
}) {
  return (
    <div className="absolute h-[52px] right-[771px] rounded-[10px] top-[801px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[#0b0c0c] border-[1.65px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Button1 onClick={onUploadClick} />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[18px] not-italic text-[15px] text-black text-nowrap top-[14px] whitespace-pre">{fileName || 'No file uploaded'}</p>
    </div>
  );
}

function Group11862({ fileName, onUploadClick }: { 
  fileName: string | null;
  onUploadClick: () => void;
}) {
  return (
    <div className="absolute contents left-[84px] top-[749px]">
      <div className="absolute top-[749px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap">
        <p className="leading-[45.434px] whitespace-pre">Subject Banner</p>
      </div>
      <Frame11 fileName={fileName} onUploadClick={onUploadClick} />
    </div>
  );
}

function Group11863({ fileName, onUploadClick }: { 
  fileName: string | null;
  onUploadClick: () => void;
}) {
  return (
    <div className="absolute contents left-[84px] top-[749px]">
      <Group11862 fileName={fileName} onUploadClick={onUploadClick} />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[19px] left-[86px] not-italic opacity-50 text-[13px] text-black text-nowrap top-[857px] whitespace-pre">Only JPG, PNG supported. Max file size: 2 MB</p>
    </div>
  );
}

function LessonPageItem({ page, onEdit }: { 
  page: LessonPage;
  onEdit: () => void;
}) {
  const topPosition = 355 + ((page.pageNumber - 1) * 97);
  
  return (
    <>
      {/* Page Title */}
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[33.655px] left-[960px] not-italic text-[#232323] text-[25.241px]" style={{ top: `${topPosition + 35}px` }}>
        <p className="text-nowrap whitespace-pre">{page.title}</p>
      </div>
      {/* Page Number */}
      <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[normal] left-[960px] not-italic text-[#9b9b9b] text-[16px]" style={{ top: `${topPosition + 5}px` }}>
        <p className="text-nowrap whitespace-pre">Page {page.pageNumber}</p>
      </div>
      {/* Document Icon */}
      <div className="absolute left-[902px] size-[44px]" style={{ top: `${topPosition}px` }} data-name="Outline/Files/Document">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Outline/Files/Document">
            <g id="Icon">
              <path d={svgPaths.p21634a90} fill="var(--fill-0, #0B0C0C)" />
              <path d={svgPaths.p247c8800} fill="var(--fill-0, #0B0C0C)" />
              <path clipRule="evenodd" d={svgPaths.p42203c0} fill="var(--fill-0, #0B0C0C)" fillRule="evenodd" />
            </g>
          </g>
        </svg>
      </div>
      {/* Edit Lesson Button */}
      <button
        onClick={onEdit}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[11px] h-[35.593px] items-center left-[1206px] pl-[13.951px] pr-[13.951px] py-[5.14px] rounded-[5.874px] w-[140px] cursor-pointer hover:bg-[#face55] transition-colors" 
        style={{ top: `${topPosition + 4}px` }}
        data-name="Button"
      >
        <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Edit-alt">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Solid/Interface/Edit-alt">
              <g id="Icon">
                <path d={svgPaths.p36ffa480} fill="var(--fill-0, black)" />
                <path d={svgPaths.p263a3200} fill="var(--fill-0, black)" />
              </g>
            </g>
          </svg>
        </div>
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.217px] text-nowrap whitespace-pre">Edit Lesson</p>
      </button>
    </>
  );
}

function Button5({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center pl-[19px] pr-[18px] py-[7px] right-[1151px] rounded-[8px] top-[1072px] w-[205px] cursor-pointer hover:bg-[#1850b8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
      data-name="Button"
    >
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Save Changes</p>
    </button>
  );
}

export function CreateLessonDetails({ onNavigate, data }: CreateLessonDetailsProps) {
  const [chapterName, setChapterName] = useState(data?.chapterName || '');
  const [lessonName, setLessonName] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(data?.topicName || 'Molecular Biology');
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [lessonPages, setLessonPages] = useState<LessonPage[]>([
    { id: '1', title: 'What is Space?', pageNumber: 1 },
    { id: '2', title: 'What is Space?', pageNumber: 2 },
    { id: '3', title: 'What is Space?', pageNumber: 3 },
  ]);

  const handleBackToSubject = () => {
    onNavigate('topicDetails', {
      subjectName: data?.subjectName,
      topicName: data?.topicName
    });
  };

  const handleAddInstitute = () => {
    toast.info('Add Institute feature coming soon!');
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

  const handleEditLesson = (pageNumber: number) => {
    const lessonTitle = lessonPages.find(p => p.pageNumber === pageNumber)?.title || 'What is Space?';
    onNavigate('lessonContent', {
      subjectName: data?.subjectName,
      topicName: data?.topicName,
      chapterName: data?.chapterName || chapterName,
      lessonTitle,
      pageNumber
    });
  };

  const handleSaveChanges = () => {
    // Validation
    if (!lessonName.trim()) {
      toast.error('Please enter a lesson name.');
      return;
    }

    if (!lessonDescription.trim()) {
      toast.error('Please enter a lesson description.');
      return;
    }

    toast.success('Lesson created successfully!');
    
    // Navigate back to topic details with updated data
    setTimeout(() => {
      onNavigate('topicDetails', {
        subjectName: data?.subjectName,
        topicName: data?.topicName,
        hasLessons: true
      });
    }, 500);
  };

  const isFormValid = lessonName.trim().length > 0 && lessonDescription.trim().length > 0;

  return (
    <div className="bg-white relative w-[1440px] min-h-[1150px]" data-name="Create Lesson - Lesson Details">
      <NavBarTeachers onAddInstitute={handleAddInstitute} />
      <BackNav onClick={handleBackToSubject} subjectName={data?.subjectName || 'Science'} />
      <Group11860 
        value={lessonName} 
        onChange={setLessonName} 
        charCount={lessonName.length}
      />
      <Group11864 
        value={selectedTopic}
        isOpen={isTopicOpen}
        onClick={() => setIsTopicOpen(!isTopicOpen)}
      />
      <Group11861 
        value={lessonDescription} 
        onChange={setLessonDescription}
        charCount={lessonDescription.length}
      />
      <Group11863 fileName={fileName} onUploadClick={handleFileUpload} />
      <div className="absolute top-[292px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[902px] not-italic text-[#232323] text-[34.075px] text-nowrap">
        <p className="leading-[45.434px] whitespace-pre">Lesson Content</p>
      </div>
      
      {lessonPages.map((page) => (
        <LessonPageItem 
          key={page.id} 
          page={page} 
          onEdit={() => handleEditLesson(page.pageNumber)}
        />
      ))}
      
      <Button5 onClick={handleSaveChanges} disabled={!isFormValid} />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[36px] text-black text-nowrap top-[267px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">{chapterName || 'Chapter Name'}</p>
      </div>
      
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
