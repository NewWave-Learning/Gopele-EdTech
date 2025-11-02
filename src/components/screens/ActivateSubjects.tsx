import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-irys45ysg5";
import { ImageWithFallback } from '../figma/ImageWithFallback';

type ActivateSubjectsProps = {
  onNavigate: (screen: Screen, data?: any) => void;
  data?: {
    instituteName?: string;
    instituteId?: number;
  };
};

type CategoryType = 'languageSkills' | 'mathematics' | 'socialScience' | 'computerScience';

type SubjectItem = {
  id: number;
  name: string;
  description: string;
  image: string;
  activated: boolean;
  category: CategoryType;
};

// Mock subject data
const MOCK_SUBJECTS: SubjectItem[] = [
  {
    id: 1,
    name: 'English',
    description: "In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.",
    image: 'https://images.unsplash.com/photo-1565022536102-f7645c84354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MXx8fHwxNzYxMDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: true,
    category: 'languageSkills',
  },
  {
    id: 2,
    name: 'Afrikaans',
    description: "In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.",
    image: 'https://images.unsplash.com/photo-1565022536102-f7645c84354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MXx8fHwxNzYxMDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: false,
    category: 'languageSkills',
  },
  {
    id: 3,
    name: 'isiZulu',
    description: "In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.",
    image: 'https://images.unsplash.com/photo-1565022536102-f7645c84354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MXx8fHwxNzYxMDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: false,
    category: 'languageSkills',
  },
  {
    id: 4,
    name: 'Sesotho',
    description: "In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.",
    image: 'https://images.unsplash.com/photo-1565022536102-f7645c84354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MXx8fHwxNzYxMDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: false,
    category: 'languageSkills',
  },
  {
    id: 5,
    name: 'Setswana',
    description: "In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.",
    image: 'https://images.unsplash.com/photo-1565022536102-f7645c84354a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwYm9va3N8ZW58MXx8fHwxNzYxMDI5ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: false,
    category: 'languageSkills',
  },
  {
    id: 6,
    name: 'Algebra',
    description: "Start your algebra journey here with an introduction to variables and equations.",
    image: 'https://images.unsplash.com/photo-1653361860636-36f2fb89eab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMG51bWJlcnN8ZW58MXx8fHwxNzYxMDQxNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: false,
    category: 'mathematics',
  },
  {
    id: 7,
    name: 'Geometry',
    description: "Build a foundation for geometry with angles, triangles, and polygons.",
    image: 'https://images.unsplash.com/photo-1653361860636-36f2fb89eab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMG51bWJlcnN8ZW58MXx8fHwxNzYxMDQxNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    activated: false,
    category: 'mathematics',
  },
];

function SolidInterfaceCheck({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Interface/Check">
      <div className="absolute inset-[32.29%_23.96%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
          <path clipRule="evenodd" d={svgPaths.p10ad5f00} fill="white" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidCommunicationChat({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Communication/Chat">
      <div className="absolute inset-[18.37%_14.69%_21.88%_13.54%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <path clipRule="evenodd" d={svgPaths.p1c7fd280} fill="black" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidInterfacePlus() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Solid/Interface/Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Solid/Interface/Plus">
          <path d={svgPaths.p24328530} fill="#232323" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SubjectListItem({ 
  subject, 
  onActivate 
}: { 
  subject: SubjectItem; 
  onActivate: (id: number) => void;
}) {
  return (
    <div className="h-[105px] rounded-[8px] w-[1008px]" data-name="Institute List Item">
      <div className="h-[105px] overflow-clip relative rounded-[inherit] w-[1008px]">
        {/* Subject Name */}
        <div className="absolute bottom-[74px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[118px] not-italic text-[#232323] text-[20.414px] text-nowrap translate-y-[50%]">
          <p className="leading-[35.978px] whitespace-pre">{subject.name}</p>
        </div>
        
        {/* Subject Logo */}
        <div className="absolute left-[12px] rounded-[10px] size-[78px] top-[12px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
            <div className="absolute bg-white inset-0 rounded-[10px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[10px]">
              <ImageWithFallback 
                alt={subject.name} 
                className="absolute h-full left-[-1.54%] max-w-none top-0 w-[150.94%] object-cover" 
                src={subject.image} 
              />
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        {subject.activated ? (
          <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px]" data-name="Button">
            <SolidInterfaceCheck className="relative shrink-0 size-[24px]" />
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.399px] text-nowrap text-white whitespace-pre">Subject Activated</p>
          </div>
        ) : (
          <button
            onClick={() => onActivate(subject.id)}
            className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.211px] h-[36px] items-center justify-center left-[805px] px-[8.933px] py-[5.211px] rounded-[5.955px] top-[35px] w-[183px] hover:bg-[#face55] transition-colors cursor-pointer"
            data-name="Button"
          >
            <SolidInterfacePlus />
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.399px] text-nowrap whitespace-pre">Activate Subjects</p>
          </button>
        )}
        
        {/* Description */}
        <p className="absolute font-['Poppins:Medium',_sans-serif] h-[39px] leading-[normal] left-[118px] not-italic text-[#232323] text-[12px] top-[49px] w-[663px]">
          {subject.description}
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export function ActivateSubjects({ onNavigate, data }: ActivateSubjectsProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('languageSkills');
  const [subjects, setSubjects] = useState<SubjectItem[]>(MOCK_SUBJECTS);
  const [currentPage, setCurrentPage] = useState(0);
  const subjectsPerPage = 5;

  const categoryLabels: Record<CategoryType, string> = {
    languageSkills: 'Language Skills',
    mathematics: 'Mathematics',
    socialScience: 'Social Science',
    computerScience: 'Computer Science',
  };

  // Filter subjects by category
  const filteredSubjects = subjects.filter(s => s.category === activeCategory);
  const totalPages = Math.ceil(filteredSubjects.length / subjectsPerPage);
  const currentSubjects = filteredSubjects.slice(
    currentPage * subjectsPerPage,
    (currentPage + 1) * subjectsPerPage
  );

  const handleActivate = (subjectId: number) => {
    setSubjects(prev => prev.map(s => 
      s.id === subjectId ? { ...s, activated: true } : s
    ));
    const subject = subjects.find(s => s.id === subjectId);
    toast.success(`${subject?.name} has been activated!`);
  };

  const handleChatWithExperts = () => {
    toast.success('Opening chat with experts...');
  };

  const handleClose = () => {
    onNavigate('instituteDetails', data);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  const handleCategoryChange = (category: CategoryType) => {
    setActiveCategory(category);
    setCurrentPage(0); // Reset to first page when changing categories
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[8px] w-[1168px] min-h-[950px]" data-name="Activate a Subject">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute right-[10px] size-[77px] top-[11px] cursor-pointer hover:opacity-70 transition-opacity"
        data-name="Outline/Interface/Cross"
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 77">
          <g id="Outline/Interface/Cross">
            <path d={svgPaths.p37b94680} id="Icon" stroke="#232323" strokeLinecap="round" strokeWidth="3.5625" />
            <path d={svgPaths.p11f7ba00} id="Icon_2" stroke="#232323" strokeLinecap="round" strokeWidth="3.5625" />
          </g>
        </svg>
      </button>

      {/* Title */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[72px] not-italic text-[32px] text-black top-[88px] translate-y-[-50%] w-[484px]">
        <p className="leading-[42px]">Add Subjects</p>
      </div>

      {/* Description */}
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[72px] not-italic text-[#232323] text-[20px] top-[115px] w-[607px]">
        Please note that adding more subjects to your institutes will result into additional charges. If you need help, please chat to our experts
      </p>

      {/* Chat with Experts Button */}
      <button
        onClick={handleChatWithExperts}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[13px] h-[50px] items-center left-[822px] pl-[19.792px] pr-[18.75px] py-[7.292px] rounded-[8.333px] top-[26px] hover:bg-[#face55] transition-colors cursor-pointer"
        data-name="Button"
      >
        <SolidCommunicationChat className="relative shrink-0 size-[30px]" />
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18.75px] text-nowrap whitespace-pre">Chat with Experts</p>
      </button>

      {/* Category Tabs */}
      <div className="absolute content-stretch flex font-['Poppins:SemiBold',_sans-serif] gap-[37.564px] items-start leading-[0] left-[72px] not-italic text-[#232323] text-[20.966px] text-nowrap top-[258.53px]">
        {(Object.keys(categoryLabels) as CategoryType[]).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`flex flex-col justify-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity ${
              activeCategory === category ? '' : 'opacity-50'
            }`}
          >
            <p className="leading-[27.955px] text-nowrap whitespace-pre">{categoryLabels[category]}</p>
          </button>
        ))}
      </div>

      {/* Active Category Underline */}
      <div 
        className="absolute bg-[#face55] h-[4.368px] top-[290.1px] transition-all duration-300"
        style={{
          left: activeCategory === 'languageSkills' ? '72px' : 
                activeCategory === 'mathematics' ? '289.564px' :
                activeCategory === 'socialScience' ? '493.128px' : '706.692px',
          width: activeCategory === 'languageSkills' ? '165.982px' :
                 activeCategory === 'mathematics' ? '151.564px' :
                 activeCategory === 'socialScience' ? '161.564px' : '191.564px'
        }}
      />

      {/* Subject List */}
      <div className="absolute left-[80px] top-[318px] w-[1008px]">
        <div className="flex flex-col gap-[6px]">
          {currentSubjects.map((subject) => (
            <SubjectListItem 
              key={subject.id} 
              subject={subject} 
              onActivate={handleActivate}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalPages > 1 && (
        <div className="absolute contents left-[533px] top-[891px]" data-name="Arrow Buttons">
          {/* Left Arrow */}
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="absolute left-[533px] size-[37.779px] top-[891px] cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            data-name="Arrow Slider Left"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Arrow Slider Left">
                <circle cx="18.8893" cy="18.8893" fill="#FACE55" id="Ellipse 2" r="18.8893" />
                <g id="Solid/Interface/Arrow left">
                  <path d={svgPaths.p29279300} fill="#232323" id="Icon" />
                </g>
              </g>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            className="absolute left-[596.22px] size-[37.779px] top-[891px] cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            data-name="Arrow Slider Right"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Arrow Slider Right">
                <circle cx="18.8893" cy="18.8893" fill="#FACE55" id="Ellipse 2" r="18.8893" />
                <g id="Solid/Interface/Arrow left">
                  <path d={svgPaths.p12f85d00} fill="#232323" id="Icon" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
