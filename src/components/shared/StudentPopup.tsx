import svgPaths from "../../imports/svg-oq6gf08icx";
import imgUnsplashLvyS3ELzIs from "figma:asset/499b67bcf3496dbfc4b48e9db79662f6dd875256.png";
import imgLessonsCover from "figma:asset/76435e2593a1762be021a7a087976ac02d6a62e3.png";
import { X } from 'lucide-react';
import { toast } from "sonner@2.0.3";

type StudentPopupProps = {
  student: {
    id: string;
    name: string;
    grade: string;
    streakCount: number;
    profileImage: string;
  };
  onClose: () => void;
  onRemove?: (studentId: string) => void;
  onEditSubjects?: (studentId: string) => void;
};

function OutlineCommunicationUserBlock({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Communication/User-block">
      <div className="absolute inset-[13.54%_12.5%_12.5%_9.38%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 23">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p2229d370} fill="#EB5757" fillRule="evenodd" />
            <path d={svgPaths.p31966080} fill="#EB5757" />
            <path clipRule="evenodd" d={svgPaths.p19bbcd00} fill="#EB5757" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function OutlineFilesFolderPlus({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Outline/Files/Folder-plus">
      <div className="absolute inset-[21.88%_10.67%_18.48%_10.44%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18">
          <g id="Icon">
            <path d={svgPaths.p1156b380} fill="var(--fill-0, black)" />
            <path clipRule="evenodd" d={svgPaths.p7f40b00} fill="var(--fill-0, black)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolidStatusLightningAlt({ filled }: { filled: boolean }) {
  return (
    <div className="size-[54px]" data-name="Solid/Status/Lightning-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="Solid/Status/Lightning-alt">
          <path 
            d={svgPaths.p23c4ea00} 
            fill={filled ? "var(--fill-0, #FACE55)" : "var(--fill-0, white)"} 
            fillOpacity={filled ? 1 : 0.6}
            id="Icon" 
          />
        </g>
      </svg>
    </div>
  );
}

function ProgressBar({ percentage }: { percentage: number }) {
  const width = (percentage / 100) * 309;
  
  return (
    <div className="h-[15.45px] relative shrink-0 w-[309px]" data-name="Progress Bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 309 16">
        <g id="Progress Bar">
          <g id="Rectangle 2">
            <path d={svgPaths.p24dd4a00} fill="white" fillOpacity="0.6" />
          </g>
          <rect fill="var(--fill-0, #FACE55)" height="15.45" id="Rectangle 1" rx="5.15" width={width} />
        </g>
      </svg>
    </div>
  );
}

export function StudentPopup({ student, onClose, onRemove, onEditSubjects }: StudentPopupProps) {
  const maxStreak = 7;
  const subjectProgress = 75; // Mock data - could be passed as prop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const handleRemove = () => {
    if (onRemove) {
      onRemove(student.id);
    }
    toast.success(`${student.name} removed from your class`);
    onClose();
  };

  const handleEditSubjects = () => {
    if (onEditSubjects) {
      onEditSubjects(student.id);
    }
    toast.info(`Editing subjects for ${student.name}`);
  };

  // Mobile layout
  if (isMobile) {
    return (
      <div className="bg-[#1f60d8] overflow-hidden rounded-[12px] w-[340px] max-h-[85vh] overflow-y-auto relative" data-name="Student Popup Mobile">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 size-10 flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer bg-white/10 rounded-full"
          aria-label="Close"
        >
          <X className="size-6 text-white" strokeWidth={3} />
        </button>

        <div className="p-6 pb-4">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="size-24 rounded-full border-4 border-white overflow-hidden bg-[#c4c4c4] mb-3">
              <img alt={student.name} className="size-full object-cover" src={student.profileImage} />
            </div>
            <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[24px] text-white text-center mb-1">
              {student.name}
            </h2>
            <p className="font-['Poppins:Bold',_sans-serif] text-[14px] text-[#f4d35e] uppercase tracking-wider">
              {student.grade}
            </p>
          </div>

          {/* Daily Streak Section */}
          <div className="mb-6">
            <h3 className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white uppercase tracking-wider mb-3">
              Daily Streak
            </h3>
            <div className="flex gap-1.5 flex-wrap">
              {[...Array(maxStreak)].map((_, index) => (
                <div key={index} className="size-10">
                  <SolidStatusLightningAlt filled={index < student.streakCount} />
                </div>
              ))}
            </div>
          </div>

          {/* Subject Progress Section */}
          <div className="mb-6">
            <h3 className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white uppercase tracking-wider mb-3">
              Subject Progress
            </h3>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img alt="Science" className="size-full object-cover" src={imgUnsplashLvyS3ELzIs} />
                </div>
                <h4 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-white">
                  Science
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#face55] rounded-full transition-all" 
                    style={{ width: `${subjectProgress}%` }}
                  />
                </div>
                <span className="font-['Poppins:Bold',_sans-serif] text-[14px] text-white tracking-wider">
                  {subjectProgress}%
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleEditSubjects}
              className="w-full bg-white hover:bg-gray-50 h-12 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <OutlineFilesFolderPlus className="size-6" />
              <span className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#232323]">
                Edit Subjects
              </span>
            </button>
            <button
              onClick={handleRemove}
              className="w-full bg-white hover:bg-red-50 h-12 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <OutlineCommunicationUserBlock className="size-6" />
              <span className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#eb5757]">
                Remove Student
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="bg-[#1f60d8] overflow-clip relative rounded-[8px] w-[950px] h-[540px]" data-name="Student Popup">
      {/* Student Name and Grade */}
      <div className="absolute bottom-[448.5px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[212px] not-italic text-[33.326px] text-nowrap text-white translate-y-[50%]">
        <p className="leading-[44.434px] whitespace-pre">{student.name}</p>
      </div>
      <div className="absolute bottom-[413px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[212px] not-italic text-[#f4d35e] text-[18.997px] text-nowrap tracking-[1.3448px] translate-y-[50%] uppercase">
        <p className="leading-[25.329px] whitespace-pre">{student.grade}</p>
      </div>

      {/* Profile Image */}
      <div className="absolute left-[50px] pointer-events-none rounded-[263.889px] size-[125px] top-[42px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 rounded-[263.889px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[263.889px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[263.889px]">
            <img alt={student.name} className="absolute h-[318.33%] left-[-22.22%] max-w-none top-[-2.13%] w-[164.81%]" src={student.profileImage} />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] rounded-[267.889px]" />
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-[7px] size-[57px] top-[7px] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
        aria-label="Close"
      >
        <X className="size-8 text-white" strokeWidth={3} />
      </button>

      {/* Daily Streak Section */}
      <div className="absolute contents left-[57px] top-[224px]">
        <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[57px] not-italic text-[16px] text-nowrap text-white top-[240px] tracking-[2.5px] translate-y-[-50%] uppercase">
          <p className="leading-[32px] whitespace-pre">daily streak</p>
        </div>
        
        {/* Lightning Bolts */}
        <div className="absolute contents left-[59px] top-[266px]">
          {[...Array(maxStreak)].map((_, index) => {
            const isActive = index < student.streakCount;
            const leftPosition = 59 + (index * 54);
            
            return (
              <div key={index} className="absolute top-[266px]" style={{ left: `${leftPosition}px` }}>
                <SolidStatusLightningAlt filled={isActive} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Subject Progress Section */}
      <div className="absolute contents left-[57px] top-[344px]">
        <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[57px] not-italic text-[16px] text-nowrap text-white top-[360px] tracking-[2.5px] translate-y-[-50%] uppercase">
          <p className="leading-[32px] whitespace-pre">subject progress</p>
        </div>
        
        {/* Subject Info */}
        <div className="absolute contents left-[59px] top-[391px]">
          <div className="absolute bottom-[128.5px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[186px] not-italic text-[22.25px] text-nowrap text-white translate-y-[50%]">
            <p className="leading-[38.025px] whitespace-pre">Science</p>
          </div>
          
          {/* Subject Image */}
          <div className="absolute h-[74px] left-[59px] rounded-[8px] top-[391px] w-[108px]" data-name="unsplash:Lvy_S3ELzIs">
            <img alt="Science" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgUnsplashLvyS3ELzIs} />
          </div>
          
          {/* Progress Bar */}
          <div className="absolute content-stretch flex gap-[12px] items-center left-[186px] top-[431px]" data-name="Subject Lesson Header">
            <ProgressBar percentage={subjectProgress} />
            <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
              <p className="leading-[32px] whitespace-pre">{subjectProgress}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Subjects Button */}
      <button
        onClick={handleEditSubjects}
        className="absolute bg-white bottom-[436px] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[671px] px-[12px] py-[7px] rounded-[8px] w-[237px] hover:bg-gray-50 transition-colors cursor-pointer"
        data-name="Button"
      >
        <OutlineFilesFolderPlus className="relative shrink-0 size-[30px]" />
        <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Edit Subjects</p>
        </div>
      </button>

      {/* Remove Student Button */}
      <button
        onClick={handleRemove}
        className="absolute bg-white bottom-[373px] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[671px] px-[12px] py-[7px] rounded-[8px] w-[237px] hover:bg-red-50 transition-colors cursor-pointer"
        data-name="Button"
      >
        <OutlineCommunicationUserBlock className="relative shrink-0 size-[30px]" />
        <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eb5757] text-[18px] text-nowrap">
          <p className="leading-[normal] whitespace-pre">Remove Student</p>
        </div>
      </button>
    </div>
  );
}
