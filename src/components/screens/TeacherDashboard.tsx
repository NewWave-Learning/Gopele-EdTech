import { useState } from 'react';
import svgPaths from "../../imports/svg-73eu3z8zlg";
import imgLessonsCover from "figma:asset/76435e2593a1762be021a7a087976ac02d6a62e3.png";
import imgWalle from "figma:asset/5659bb0a661292d84ce5d5861c0faa55bc7dd773.png";
import imgProfile from "figma:asset/e12f534198175966d657f7407655f59cc0dcdccc.png";
import { Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { Screen, NavigationData } from "../../hooks/useNavigation";
import { toast } from "sonner@2.0.3";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { StudentPopup } from "../shared/StudentPopup";

type TeacherDashboardProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

type Student = {
  id: string;
  name: string;
  grade: string;
  streakCount: number;
  profileImage: string;
};

export function TeacherDashboard({ onNavigate }: TeacherDashboardProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [codeCopied, setCodeCopied] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const studentsPerPage = 9;
  
  const instituteCode = 'NHS2024-EDU';
  
  // Mock student data - in a real app, this would come from an API
  const allStudents: Student[] = [
    { id: '1', name: 'Rishabh Singh', grade: '6th Grade', streakCount: 3, profileImage: imgLessonsCover },
    { id: '2', name: 'Amara Khumalo', grade: '6th Grade', streakCount: 5, profileImage: imgLessonsCover },
    { id: '3', name: 'Thabo Molefe', grade: '6th Grade', streakCount: 7, profileImage: imgLessonsCover },
    { id: '4', name: 'Kagiso Mthembu', grade: '7th Grade', streakCount: 4, profileImage: imgLessonsCover },
    { id: '5', name: 'Lerato Sithole', grade: '7th Grade', streakCount: 6, profileImage: imgLessonsCover },
    { id: '6', name: 'Neo Pule', grade: '7th Grade', streakCount: 2, profileImage: imgLessonsCover },
    { id: '7', name: 'Zanele Tshabalala', grade: '8th Grade', streakCount: 7, profileImage: imgLessonsCover },
    { id: '8', name: 'Sipho Ndlovu', grade: '8th Grade', streakCount: 5, profileImage: imgLessonsCover },
    { id: '9', name: 'Mpho Radebe', grade: '8th Grade', streakCount: 3, profileImage: imgLessonsCover },
  ];

  const totalPages = Math.ceil(allStudents.length / studentsPerPage);
  const currentStudents = allStudents.slice(
    currentPage * studentsPerPage,
    (currentPage + 1) * studentsPerPage
  );

  const handleCopyCode = async () => {
    try {
      // Try using the Clipboard API first
      await navigator.clipboard.writeText(instituteCode);
      setCodeCopied(true);
      toast.success('Institute code copied to clipboard!');
    } catch (err) {
      // Fallback: Create a temporary input element
      const textArea = document.createElement('textarea');
      textArea.value = instituteCode;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand('copy');
        setCodeCopied(true);
        toast.success('Institute code copied!');
      } catch (fallbackErr) {
        // If both methods fail, show the code to copy manually
        toast.error('Unable to copy automatically. Code: ' + instituteCode);
      }
      
      document.body.removeChild(textArea);
    }
    
    // Reset copied state after 2 seconds
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleViewDetails = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  const handleRemoveStudent = (studentId: string) => {
    // In a real app, this would make an API call to remove the student
    console.log('Removing student:', studentId);
  };

  const handleEditSubjects = (studentId: string) => {
    // In a real app, this would navigate to an edit page or open another modal
    console.log('Editing subjects for student:', studentId);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const StudentCard = ({ student }: { student: Student }) => {
    const maxStreak = 7;
    
    return (
      <div className="bg-[#1f60d8] h-[278px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" data-name="Student Card">
        {/* View Details Button */}
        <button
          onClick={() => handleViewDetails(student)}
          className="absolute bg-white bottom-[15px] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center left-[19px] px-[12px] py-[7px] rounded-[8px] w-[320px] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <div className="relative shrink-0 size-[30px]" data-name="Outline/Files/Clipboard-alt">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <g>
                <g>
                  <path clipRule="evenodd" d={svgPaths.pc55f400} fill="black" fillRule="evenodd" />
                  <path d={svgPaths.pcfd05f0} fill="black" />
                  <path d={svgPaths.p22b04e00} fill="black" />
                </g>
              </g>
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">View Details</p>
          </div>
        </button>

        {/* Student Info */}
        <div className="absolute contents left-[26px] top-[25px]">
          <div className="absolute bottom-[235px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[99px] not-italic text-[24px] text-nowrap text-white translate-y-[50%]">
            <p className="leading-[32px] whitespace-pre">{student.name}</p>
          </div>
          <div className="absolute bottom-[211.5px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[99px] not-italic text-[14.126px] text-nowrap text-white tracking-[1px] translate-y-[50%] uppercase">
            <p className="leading-[18.834px] whitespace-pre">{student.grade}</p>
          </div>
          
          {/* Profile Image */}
          <div className="absolute left-[26px] pointer-events-none rounded-[111.889px] size-[53px] top-[25px]">
            <div aria-hidden="true" className="absolute inset-0 rounded-[111.889px]">
              <div className="absolute bg-[#c4c4c4] inset-0 rounded-[111.889px]" />
              <div className="absolute inset-0 overflow-hidden rounded-[111.889px]">
                <img alt="" className="absolute h-[318.33%] left-[-22.22%] max-w-none top-[-2.13%] w-[164.81%]" src={student.profileImage} />
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[3px] border-solid border-white inset-[-3px] rounded-[114.889px]" />
          </div>
        </div>

        {/* Daily Streak */}
        <div className="absolute contents left-[18px] top-[99px]">
          <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[28px] not-italic text-[14px] text-nowrap text-white top-[115px] tracking-[2.5px] translate-y-[-50%] uppercase">
            <p className="leading-[32px] whitespace-pre">daily streak</p>
          </div>
          
          {/* Streak Lightning Bolts */}
          <div className="absolute contents left-[18px] top-[137px]">
            {[...Array(maxStreak)].map((_, index) => {
              const isActive = index < student.streakCount;
              const leftPosition = 18 + (index * 46);
              
              return (
                <div key={index} className="absolute size-[46px] top-[137px]" style={{ left: `${leftPosition}px` }}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                    <path 
                      d={svgPaths.p1ee0a900} 
                      fill={isActive ? "var(--fill-0, #FACE55)" : "var(--fill-0, white)"} 
                      fillOpacity={isActive ? 1 : 0.6}
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white relative w-[1440px] min-h-screen" data-name="Teacher Dashboard">
      {/* Nav Bar */}
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]">
        <div className="absolute bg-white inset-0" />
        
        {/* Logo */}
        <div className="absolute contents left-[78px] top-[19px]">
          <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
            <p className="leading-[21.568px]">Gopele</p>
          </div>
          <div className="absolute contents left-[78px] top-[19px]">
            <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                <g>
                  <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                <g>
                  <g>
                    <path clipRule="evenodd" d={svgPaths.p3bfb200} fill="var(--fill-0, white)" fillRule="evenodd" />
                  </g>
                  <rect fill="var(--fill-0, #1F60D8)" height="27.2021" width="28.9726" x="5.66272" y="5.20796" />
                  <path d={svgPaths.p1e47b880} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Profile */}
        <div className="absolute inset-[15%_5.21%_15%_90.9%]">
          <img alt="Teacher Profile" className="block max-w-none size-full rounded-full" height="56" src={imgProfile} width="56" />
        </div>
        
        {/* For Teachers Label */}
        <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[35%_73.75%_31.25%_16.6%] leading-[normal] not-italic text-[#555555] text-[18px] text-nowrap tracking-[1px] whitespace-pre">FOR TEACHERS</p>
      </div>

      {/* Hero Section */}
      <div className="absolute contents left-0 top-[80px]">
        <div className="absolute bg-[#1f60d8] h-[397px] left-0 top-[80px] w-[1440px]" />
        
        {/* Walle Robot Image */}
        <div className="absolute h-[254px] left-[914px] top-[142px] w-[294px]">
          <img alt="Walle Robot" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWalle} />
        </div>
        
        {/* Welcome Content */}
        <div className="absolute content-stretch flex flex-col gap-[32px] items-start justify-center left-[163px] top-[154px]">
          <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-nowrap text-white">
            <p className="leading-[32px] whitespace-pre">New Horizon High School</p>
          </div>
          <div className="font-['Poppins:Medium',_sans-serif] leading-[26px] not-italic relative shrink-0 text-[16px] text-white w-[536px]">
            <p className="mb-0">{`Hello Teachers! This is your place to see how your students are doing & how you can help them best! `}</p>
            <p className="mb-0">&nbsp;</p>
            <p>To add them to your institute, share the Institute code with them!</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-[16px]">
            <button
              onClick={handleCopyCode}
              className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center pl-[19px] pr-[18px] py-[7px] relative rounded-[8px] shrink-0 hover:bg-[#f9d977] transition-all cursor-pointer"
            >
              <Copy className={`size-[24px] transition-transform ${codeCopied ? 'scale-110' : ''}`} />
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">
                {codeCopied ? 'Copied!' : 'Copy Institute Code'}
              </p>
            </button>
            
            <button
              onClick={() => onNavigate('createInstitute')}
              className="bg-white border-2 border-white box-border content-stretch flex gap-[7px] h-[48px] items-center pl-[19px] pr-[18px] py-[7px] relative rounded-[8px] shrink-0 hover:bg-white/90 transition-all cursor-pointer"
            >
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f60d8] text-[18px] text-nowrap whitespace-pre">
                Create New Institute
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Your Students Section */}
      <div className="absolute contents left-[160px] top-[562px]">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[160px] not-italic text-[32px] text-black top-[599px] translate-y-[-50%] w-[484px]">
          <p className="leading-[42px]">Your Students</p>
        </div>

        {/* Student Cards Grid */}
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[162px] top-[646px] w-[1122px]">
          {/* Row 1 */}
          {currentStudents.length > 0 && (
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1122px]">
              {currentStudents.slice(0, 3).map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}
          
          {/* Row 2 */}
          {currentStudents.length > 3 && (
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1122px]">
              {currentStudents.slice(3, 6).map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}
          
          {/* Row 3 */}
          {currentStudents.length > 6 && (
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1122px]">
              {currentStudents.slice(6, 9).map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}
        </div>

        {/* Arrow Buttons for Pagination */}
        <div className="absolute contents left-[1153px] top-[575px]">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className="absolute left-[1153px] size-[49px] top-[575px] hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
              <g>
                <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" r="24.5" />
                <g>
                  <path d={svgPaths.p26ba13c0} fill="var(--fill-0, #232323)" />
                </g>
              </g>
            </svg>
          </button>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="absolute left-[1235px] size-[49px] top-[575px] hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
              <g>
                <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" r="24.5" />
                <g>
                  <path d={svgPaths.p2f245500} fill="var(--fill-0, #232323)" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Student Details Popup */}
      <Dialog open={!!selectedStudent} onOpenChange={(open) => !open && handleClosePopup()}>
        <DialogContent className="p-0 border-0 bg-transparent max-w-fit" aria-describedby={undefined}>
          <DialogTitle className="sr-only">
            {selectedStudent ? `${selectedStudent.name} - Student Details` : 'Student Details'}
          </DialogTitle>
          {selectedStudent && (
            <StudentPopup
              student={selectedStudent}
              onClose={handleClosePopup}
              onRemove={handleRemoveStudent}
              onEditSubjects={handleEditSubjects}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
