import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-ifqenfqpi5";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";
import { useState, useRef, ChangeEvent } from 'react';
import { toast } from 'sonner@2.0.3';

type QuizCreatorProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  data?: {
    subjectName?: string;
    topicName?: string;
    chapterName?: string;
    lessonTitle?: string;
    pageNumber?: number;
  };
};

type QuizOption = {
  id: string;
  text: string;
  isCorrect: boolean;
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
            <path d={svgPaths.p9f33d00} fill="var(--fill-0, #232323)" id="Icon" />
          </g>
        </g>
      </svg>
    </button>
  );
}

function BackNav({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute contents left-[84px] top-[151px]" data-name="Back Nav">
      <ArrowSliderLeft onClick={onClick} />
      <button 
        onClick={onClick}
        className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[148px] not-italic text-[#0b0c0c] text-[20px] top-[172px] translate-y-[-50%] w-[243px] cursor-pointer hover:opacity-70 transition-opacity"
      >
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to Lesson Details</p>
      </button>
    </div>
  );
}

function TextField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="absolute bg-white h-[642px] left-[86px] rounded-[6.594px] top-[293px] w-[1257px]" data-name="Text field">
      <div className="h-[642px] overflow-clip relative rounded-[inherit] w-[1257px]">
        <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[33px] not-italic text-[#232323] text-[20px] top-[37px] w-[1192px]">{value}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
    </div>
  );
}

function TextArea({ value }: { value: string }) {
  return (
    <div className="absolute contents left-[86px] top-[293px]" data-name="Text Area">
      <TextField value={value} onChange={() => {}} />
    </div>
  );
}

function Group11860({ lessonContent }: { lessonContent: string }) {
  return (
    <div className="absolute contents left-[84px] top-[241px]">
      <div className="absolute bottom-[760px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[84px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[45.434px] whitespace-pre">Lesson Content</p>
      </div>
      <TextArea value={lessonContent} />
    </div>
  );
}

function OutlineFilesClipboardAlt({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Files/Clipboard-alt">
      <div className="absolute inset-[9.38%_17.71%_6.37%_17.71%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 38">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p229b4700} fill="black" fillRule="evenodd" />
            <path d={svgPaths.p146db800} fill="black" />
            <path d={svgPaths.p6414a80} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function OutlineInterfacePlus({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Interface/Plus">
      <div className="absolute bottom-[29.17%] left-1/2 right-1/2 top-[29.17%]" data-name="Icon">
        <div className="absolute inset-[-7.5%_-1.13px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 18">
            <path d="M1.125 16.125V1.125" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.25" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 flex items-center justify-center left-[29.17%] right-[29.17%] top-1/2">
        <div className="flex-none h-[15px] rotate-[90deg] w-px">
          <div className="relative size-full">
            <div className="absolute inset-[-7.5%_-1.13px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 18">
                <path d="M1.125 16.125V1.125" id="Vector 113" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="2.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OutlineInterfaceCross({ className, onClick }: { className?: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`${className} cursor-pointer hover:opacity-70 transition-opacity`} data-name="Outline/Interface/Cross">
      <div className="absolute flex inset-[35.27%] items-center justify-center">
        <div className="flex-none h-[22.5px] rotate-[45deg] w-px">
          <div className="relative size-full" data-name="Icon">
            <div className="absolute inset-[-7.5%_-1.69px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 26">
                <path d="M1.6875 24.1875V1.6875" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3.375" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[35.27%] items-center justify-center">
        <div className="flex-none h-[22.5px] rotate-[135deg] w-px">
          <div className="relative size-full" data-name="Icon">
            <div className="absolute inset-[-7.5%_-1.69px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 26">
                <path d="M1.6875 24.1875V1.6875" id="Icon" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="3.375" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function QuizOption({ 
  option, 
  index, 
  onTextChange, 
  onCorrectChange, 
  onRemove,
  canRemove 
}: { 
  option: QuizOption;
  index: number;
  onTextChange: (text: string) => void;
  onCorrectChange: (isCorrect: boolean) => void;
  onRemove: () => void;
  canRemove: boolean;
}) {
  const topPosition = 265 + (index * 80);

  return (
    <>
      <div className="absolute bg-white left-[41px] rounded-[6px] size-[36px]" style={{ top: `${topPosition + 8}px` }}>
        <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      
      <div className="absolute bg-white h-[52.749px] left-[93px] rounded-[6.594px] w-[583px]" style={{ top: `${topPosition}px` }} data-name="Text field">
        <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
          <input
            type="text"
            value={option.text}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Type here..."
            className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] top-[24.86px] translate-y-[-50%] bg-transparent border-none outline-none w-[calc(100%-32px)] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
          />
        </div>
        <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
      </div>

      <button
        onClick={() => onCorrectChange(!option.isCorrect)}
        className="absolute bg-white left-[734px] rounded-[6px] size-[20px] cursor-pointer hover:bg-gray-50 transition-colors"
        style={{ top: `${topPosition + 17}px` }}
      >
        {option.isCorrect && (
          <div className="absolute inset-[2px] bg-[#1f60d8] rounded-[4px]" />
        )}
        <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </button>

      {canRemove && (
        <OutlineInterfaceCross 
          className="absolute left-[1040px] size-[54px]" 
          style={{ top: `${topPosition - 1}px` }}
          onClick={onRemove}
        />
      )}
    </>
  );
}

export function QuizCreator({ onNavigate, data }: QuizCreatorProps) {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<QuizOption[]>([
    { id: '1', text: '', isCorrect: false },
    { id: '2', text: '', isCorrect: false },
  ]);
  const [explanation, setExplanation] = useState('');
  const [hint, setHint] = useState('');
  const [questionImage, setQuestionImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const lessonContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. ';

  const handleBackToLessonContent = () => {
    onNavigate('lessonContent', data);
  };

  const handleAddInstitute = () => {
    toast.info('Add Institute feature coming soon!');
  };

  const handleAddOption = () => {
    const newOption: QuizOption = {
      id: Date.now().toString(),
      text: '',
      isCorrect: false,
    };
    setOptions([...options, newOption]);
  };

  const handleRemoveOption = (id: string) => {
    if (options.length > 2) {
      setOptions(options.filter(opt => opt.id !== id));
    }
  };

  const handleOptionTextChange = (id: string, text: string) => {
    setOptions(options.map(opt => 
      opt.id === id ? { ...opt, text } : opt
    ));
  };

  const handleOptionCorrectChange = (id: string, isCorrect: boolean) => {
    setOptions(options.map(opt => 
      opt.id === id ? { ...opt, isCorrect } : opt
    ));
  };

  const handleUploadImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error('File size must be less than 2MB');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        toast.error('Only JPG and PNG files are supported');
        return;
      }
      setQuestionImage(file);
      toast.success('Image uploaded successfully');
    }
  };

  const handleSaveQuiz = () => {
    if (!question.trim()) {
      toast.error('Please enter a question');
      return;
    }
    if (options.some(opt => !opt.text.trim())) {
      toast.error('Please fill in all options');
      return;
    }
    if (!options.some(opt => opt.isCorrect)) {
      toast.error('Please mark at least one correct answer');
      return;
    }
    
    // Navigate to the quiz created page with the quiz data
    onNavigate('quizCreated', {
      subjectName: data?.subjectName,
      topicName: data?.topicName,
      chapterName: data?.chapterName,
      lessonTitle: data?.lessonTitle,
      pageNumber: data?.pageNumber,
      quizData: {
        question,
        options,
        explanation,
        hint
      }
    });
  };

  const handleDiscardQuiz = () => {
    if (question || options.some(opt => opt.text) || explanation || hint) {
      if (confirm('Are you sure you want to discard this quiz? All changes will be lost.')) {
        handleBackToLessonContent();
      }
    } else {
      handleBackToLessonContent();
    }
  };

  return (
    <div className="bg-white relative w-[1440px] min-h-screen" data-name="Quiz Creator">
      <NavBarTeachers onAddInstitute={handleAddInstitute} />
      <BackNav onClick={handleBackToLessonContent} />
      <Group11860 lessonContent={lessonContent} />
      
      {/* Dark overlay */}
      <div className="absolute bg-[#0b0c0c] h-[1024px] left-0 opacity-50 top-0 w-[1440px]" />
      
      {/* Quiz Creator Modal */}
      <div className="absolute bg-white h-[824px] left-[156px] overflow-clip top-[100px] w-[1129px] rounded-lg shadow-2xl">
        <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[43px] left-[80px] not-italic text-[28.667px] text-black text-nowrap top-[24px] whitespace-pre">Quiz Creator</p>
        <OutlineFilesClipboardAlt className="absolute left-[26px] size-[44px] top-[23px]" />
        
        {/* Question Section */}
        <div className="absolute bottom-[613px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[34px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
          <p className="leading-[25.622px] whitespace-pre">Max Char 40</p>
        </div>
        <div className="absolute bottom-[708px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[34px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Question</p>
        </div>
        
        <div className="absolute bg-white h-[52.749px] left-[36px] rounded-[6.594px] top-[145px] w-[583px]" data-name="Text field">
          <div className="h-[52.749px] overflow-clip relative rounded-[inherit] w-[583px]">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={40}
              placeholder="Type here..."
              className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[15.66px] not-italic text-[16.484px] top-[24.86px] translate-y-[-50%] bg-transparent border-none outline-none w-[calc(100%-32px)] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
            />
          </div>
          <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
        </div>

        {/* Upload Image Button */}
        <button 
          onClick={handleUploadImage}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[14.578px] h-[48.593px] items-center left-[638px] pl-[19.047px] pr-0 py-[7.017px] rounded-[8.02px] top-[146px] w-[191.133px] cursor-pointer hover:bg-[#face55] transition-colors" 
          data-name="Button"
        >
          <div className="h-[21.287px] relative shrink-0 w-[19.437px]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
              <g id="Icon">
                <path clipRule="evenodd" d={svgPaths.p35b0f900} fill="black" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p4b14d80} fill="black" fillRule="evenodd" />
              </g>
            </svg>
          </div>
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.044px] text-nowrap whitespace-pre">Upload Image</p>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Options Section */}
        <div className="absolute bottom-[532px] flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[20px] justify-center leading-[0] left-[764px] not-italic text-[#232323] text-[14px] translate-y-[50%] w-[167px]">
          <p className="leading-[45.434px]">Mark as correct answer</p>
        </div>

        {options.map((option, index) => (
          <QuizOption
            key={option.id}
            option={option}
            index={index}
            onTextChange={(text) => handleOptionTextChange(option.id, text)}
            onCorrectChange={(isCorrect) => handleOptionCorrectChange(option.id, isCorrect)}
            onRemove={() => handleRemoveOption(option.id)}
            canRemove={options.length > 2}
          />
        ))}

        {/* Add Option Button */}
        <button 
          onClick={handleAddOption}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[8px] h-[49px] items-center left-[93px] pl-[19.047px] pr-0 py-[7.017px] rounded-[8.02px] w-[187px] cursor-pointer hover:bg-[#face55] transition-colors" 
          style={{ top: `${265 + (options.length * 80) + 6}px` }}
          data-name="Button"
        >
          <OutlineInterfacePlus className="relative shrink-0 size-[36px]" />
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.044px] text-nowrap whitespace-pre">Add Option</p>
        </button>

        {/* Explanation Section */}
        <div className="absolute bottom-[283px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[34px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Explanation (optional)</p>
        </div>
        <div className="absolute bottom-[129px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[34px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
          <p className="leading-[25.622px] whitespace-pre">Max Char 500</p>
        </div>
        
        <div className="absolute bg-white h-[105px] left-[34px] rounded-[6.594px] top-[570px] w-[495px]" data-name="Text field">
          <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[495px]">
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              maxLength={500}
              placeholder="Type here..."
              className="absolute font-['Poppins:Medium',_sans-serif] left-[15.66px] not-italic text-[16.484px] top-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] bg-transparent border-none outline-none resize-none text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
            />
          </div>
          <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
        </div>

        {/* Hint Section */}
        <div className="absolute bottom-[283px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[573px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
          <p className="leading-[45.434px] whitespace-pre">Hint (optional)</p>
        </div>
        <div className="absolute bottom-[129px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[573px] not-italic text-[#9b9b9b] text-[13.535px] text-nowrap translate-y-[50%]">
          <p className="leading-[25.622px] whitespace-pre">Max Char 500</p>
        </div>
        
        <div className="absolute bg-white h-[105px] left-[573px] rounded-[6.594px] top-[570px] w-[502px]" data-name="Text field">
          <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[502px]">
            <textarea
              value={hint}
              onChange={(e) => setHint(e.target.value)}
              maxLength={500}
              placeholder="Type here..."
              className="absolute font-['Poppins:Medium',_sans-serif] left-[15.66px] not-italic text-[16.484px] top-[16px] w-[calc(100%-32px)] h-[calc(100%-32px)] bg-transparent border-none outline-none resize-none text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
            />
          </div>
          <div aria-hidden="true" className="absolute border-[#232323] border-[1.648px] border-solid inset-0 pointer-events-none rounded-[6.594px]" />
        </div>

        {/* Action Buttons */}
        <button 
          onClick={handleDiscardQuiz}
          className="absolute box-border content-stretch flex gap-[8px] h-[49px] items-center left-[683px] px-[38px] py-[7.017px] rounded-[8.02px] top-[734px] cursor-pointer hover:bg-red-50 transition-colors" 
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border-[#ff6644] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[8.02px]" />
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ff6644] text-[18.044px] text-nowrap whitespace-pre">Discard Quiz</p>
        </button>

        <button 
          onClick={handleSaveQuiz}
          className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[8px] h-[49px] items-center left-[888px] px-[38px] py-[7.017px] rounded-[8.02px] top-[734px] cursor-pointer hover:bg-[#1850b8] transition-colors" 
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[18.044px] text-nowrap text-white whitespace-pre">Save Quiz</p>
        </button>
      </div>
    </div>
  );
}
