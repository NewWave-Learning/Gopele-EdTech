import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { Menu, HelpCircle, ArrowLeft, Users, BookOpen, GraduationCap, Settings } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

type InstituteDetailsMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function InstituteDetailsMobile({ onNavigate, data }: InstituteDetailsMobileProps) {
  const instituteName = data?.name || 'New Thomas School for Gifted';
  const instituteData = data || {
    location: 'Johannesburg',
    category: 'ART SCHOOL',
    students: '2.4k',
    subjects: '07',
    lessonsCompleted: '1.7k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Institute Details Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('institutesPage')} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black text-center flex-1 mx-2 truncate">
          {instituteName}
        </h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center shrink-0">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        {/* Institute Header */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-100">
          <div className="size-20 rounded-lg overflow-hidden shrink-0">
            <ImageWithFallback
              alt={instituteName}
              className="w-full h-full object-cover"
              src={instituteData.logo}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-[#232323] mb-1 truncate">
              {instituteName}
            </h2>
            <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b] mb-1">
              {instituteData.location}
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] text-[10px] text-[#1f60d8] tracking-[1px] uppercase">
              {instituteData.category}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-[#f5f6fa] rounded-[12px] p-4 text-center">
            <Users className="size-6 text-[#1f60d8] mx-auto mb-2" />
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-[#232323]">
              {instituteData.students}
            </p>
            <p className="font-['Poppins:Regular',_sans-serif] text-[10px] text-[#9b9b9b]">Students</p>
          </div>
          
          <div className="bg-[#f5f6fa] rounded-[12px] p-4 text-center">
            <BookOpen className="size-6 text-[#1f60d8] mx-auto mb-2" />
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-[#232323]">
              {instituteData.subjects}
            </p>
            <p className="font-['Poppins:Regular',_sans-serif] text-[10px] text-[#9b9b9b]">Subjects</p>
          </div>
          
          <div className="bg-[#f5f6fa] rounded-[12px] p-4 text-center">
            <GraduationCap className="size-6 text-[#1f60d8] mx-auto mb-2" />
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-[#232323]">
              {instituteData.lessonsCompleted}
            </p>
            <p className="font-['Poppins:Regular',_sans-serif] text-[10px] text-[#9b9b9b]">Lessons</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('activateSubjects', instituteData)}
            className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
          >
            Activate Subjects
          </button>

          <button
            onClick={() => onNavigate('teamDetails')}
            className="w-full bg-[#f4d35e] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] hover:bg-[#face55] transition-colors"
          >
            Manage Team
          </button>

          <button
            onClick={() => onNavigate('addStudents', { instituteName })}
            className="w-full border-2 border-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#1f60d8] hover:bg-[#f5f6fa] transition-colors"
          >
            Add Students
          </button>
        </div>
      </div>
    </div>
  );
}
