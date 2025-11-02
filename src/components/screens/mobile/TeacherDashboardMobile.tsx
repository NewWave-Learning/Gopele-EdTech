import { useState } from 'react';
import { Copy, ChevronDown } from 'lucide-react';
import { Screen, NavigationData } from "../../../hooks/useNavigation";
import { toast } from "sonner@2.0.3";
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../../ui/dialog";
import { StudentPopup } from "../../shared/StudentPopup";

type TeacherDashboardMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

type Student = {
  id: string;
  name: string;
  grade: string;
  streakCount: number;
};

export function TeacherDashboardMobile({ onNavigate }: TeacherDashboardMobileProps) {
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student & { profileImage: string } | null>(null);
  
  const instituteCode = 'NHS2024-EDU';
  
  // Mock student data
  const allStudents: Student[] = [
    { id: '1', name: 'Rishabh Singh', grade: '6th Grade', streakCount: 3 },
    { id: '2', name: 'Amara Khumalo', grade: '6th Grade', streakCount: 5 },
    { id: '3', name: 'Thabo Molefe', grade: '6th Grade', streakCount: 7 },
    { id: '4', name: 'Kagiso Mthembu', grade: '7th Grade', streakCount: 4 },
    { id: '5', name: 'Lerato Sithole', grade: '7th Grade', streakCount: 6 },
    { id: '6', name: 'Neo Pule', grade: '7th Grade', streakCount: 2 },
    { id: '7', name: 'Zanele Tshabalala', grade: '8th Grade', streakCount: 7 },
    { id: '8', name: 'Sipho Ndlovu', grade: '8th Grade', streakCount: 5 },
    { id: '9', name: 'Mpho Radebe', grade: '8th Grade', streakCount: 3 },
  ];

  const handleCopyCode = async () => {
    try {
      // Try using the Clipboard API first
      await navigator.clipboard.writeText(instituteCode);
      setCodeCopied(true);
      toast.success('Institute code copied!');
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
        toast.success('Code copied!');
      } catch (fallbackErr) {
        // If both methods fail, show the code to copy manually
        toast.error('Unable to copy. Code: ' + instituteCode);
      }
      
      document.body.removeChild(textArea);
    }
    
    // Reset copied state after 2 seconds
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleViewDetails = (student: Student) => {
    // Add profileImage for the popup
    setSelectedStudent({
      ...student,
      profileImage: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56'
    });
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  const handleRemoveStudent = (studentId: string) => {
    console.log('Removing student:', studentId);
  };

  const handleEditSubjects = (studentId: string) => {
    console.log('Editing subjects for student:', studentId);
  };

  const StreakIndicator = ({ count, max = 7 }: { count: number; max?: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(max)].map((_, index) => (
          <div key={index} className="size-6">
            <svg viewBox="0 0 46 46" fill="none">
              <path 
                d="M26.4883 5.75002C26.4883 5.36583 26.2589 5.01877 25.9054 4.86828C25.5519 4.71778 25.1427 4.79294 24.8658 5.05923L21.458 8.3359C16.3842 13.2146 12.0969 18.85 8.74883 25.0415C8.67 25.1807 8.625 25.3416 8.625 25.513C8.625 26.0423 9.05406 26.4714 9.58333 26.4714H17.8442V40.25C17.8442 40.6295 18.0681 40.9733 18.4152 41.1266C18.7624 41.28 19.1673 41.214 19.4479 40.9585L20.9726 39.5696C26.31 34.7076 30.8395 29.0271 34.3912 22.7413L35.3344 21.0722C35.502 20.7755 35.4995 20.412 35.3277 20.1177C35.1559 19.8234 34.8408 19.6424 34.5 19.6424H26.4883V5.75002Z"
                fill={index < count ? "#FACE55" : "white"}
                fillOpacity={index < count ? 1 : 0.4}
              />
            </svg>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen w-full max-w-[375px] relative" data-name="Teacher Dashboard Mobile">
      {/* Nav Bar */}
      <div className="bg-white h-[60px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-between px-4 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="size-8 bg-[#1f60d8] rounded-lg flex items-center justify-center">
            <div className="size-6 bg-white rounded"></div>
          </div>
          <span className="font-['Poppins:SemiBold',_sans-serif] text-[18px]">Gopele</span>
        </div>
        <span className="text-[10px] tracking-[1px] text-[#555555] uppercase">For Teachers</span>
      </div>

      {/* Hero Section */}
      <div className="bg-[#1f60d8] px-4 py-6">
        <h1 className="text-white text-[24px] font-['Poppins:SemiBold',_sans-serif] mb-3">
          New Horizon High School
        </h1>
        <p className="text-white/90 text-[14px] font-['Poppins:Regular',_sans-serif] mb-4 leading-relaxed">
          Hello Teachers! This is your place to see how your students are doing & how you can help them best!
        </p>
        <p className="text-white/90 text-[14px] font-['Poppins:Regular',_sans-serif] mb-4">
          To add them to your institute, share the Institute code with them!
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleCopyCode}
            className="bg-[#f4d35e] hover:bg-[#f9d977] w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all font-['Poppins:SemiBold',_sans-serif] text-[#232323]"
          >
            <Copy className={`size-5 transition-transform ${codeCopied ? 'scale-110' : ''}`} />
            <span>{codeCopied ? 'Copied!' : 'Copy Institute Code'}</span>
          </button>
          
          <button
            onClick={() => onNavigate('createInstitute')}
            className="bg-white border-2 border-white hover:bg-white/90 w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all font-['Poppins:SemiBold',_sans-serif] text-[#1f60d8]"
          >
            <span>Create New Institute</span>
          </button>
        </div>
      </div>

      {/* Students Section */}
      <div className="px-4 py-6">
        <h2 className="text-[24px] font-['Poppins:SemiBold',_sans-serif] mb-4">Your Students</h2>
        
        <div className="flex flex-col gap-3">
          {allStudents.map((student) => (
            <div 
              key={student.id} 
              className="bg-[#1f60d8] rounded-lg overflow-hidden"
            >
              {/* Student Card Header */}
              <div className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="size-12 rounded-full bg-[#c4c4c4] border-2 border-white overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56"
                      alt={student.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-[18px] font-['Poppins:SemiBold',_sans-serif] leading-tight">
                      {student.name}
                    </h3>
                    <p className="text-white/90 text-[12px] font-['Poppins:Bold',_sans-serif] uppercase tracking-wide">
                      {student.grade}
                    </p>
                  </div>
                </div>

                {/* Daily Streak */}
                <div className="mb-3">
                  <p className="text-white text-[11px] font-['Poppins:Bold',_sans-serif] uppercase tracking-wider mb-2">
                    Daily Streak
                  </p>
                  <StreakIndicator count={student.streakCount} />
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => handleViewDetails(student)}
                  className="w-full bg-white hover:bg-gray-50 py-2.5 px-4 rounded-lg transition-colors font-['Poppins:Medium',_sans-serif] text-[#232323] text-[14px] flex items-center justify-center gap-2"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 30 30">
                    <path 
                      clipRule="evenodd" 
                      d="M19.5626 5.32863L20.5793 5.45525C22.926 5.74751 24.6875 7.74199 24.6875 10.1068V23.2186C24.6875 25.5147 22.9772 27.4513 20.6987 27.735C16.9142 28.2064 13.0858 28.2064 9.30134 27.735C7.02282 27.4513 5.3125 25.5147 5.3125 23.2186V10.1068C5.3125 7.74199 7.07399 5.74751 9.42068 5.45525L10.4374 5.32863C10.8401 3.87757 12.1707 2.8125 13.75 2.8125H16.25C17.8293 2.8125 19.1599 3.87757 19.5626 5.32863Z" 
                      fill="black" 
                      fillRule="evenodd" 
                    />
                    <path d="M19.6875 14.6875C19.6875 14.1697 19.2678 13.75 18.75 13.75H11.25C10.7322 13.75 10.3125 14.1697 10.3125 14.6875C10.3125 15.2053 10.7322 15.625 11.25 15.625H18.75C19.2678 15.625 19.6875 15.2053 19.6875 14.6875Z" fill="black" />
                  </svg>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Details Popup */}
      <Dialog open={!!selectedStudent} onOpenChange={(open) => !open && handleClosePopup()}>
        <DialogContent className="p-0 border-0 bg-transparent max-w-[95vw]" aria-describedby={undefined}>
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
