import { Screen } from '../../../hooks/useNavigation';
import { Menu, Plus, HelpCircle } from 'lucide-react';

type CoursesMobileProps = {
  onNavigate: (screen: Screen) => void;
};

export function CoursesMobile({ onNavigate }: CoursesMobileProps) {
  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Courses Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button className="p-2">
          <Menu className="size-6 text-[#232323]" />
        </button>
        <div className="flex flex-col">
          <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black text-center">Gopele</h1>
          <p className="font-['Poppins:Regular',_sans-serif] text-[8px] text-[#555555] tracking-[0.5px] text-center">FOR GOPELE ADMINS</p>
        </div>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[20px] text-[#232323]">All Subjects</h2>
        </div>

        {/* Create New Subjects Button */}
        <button
          onClick={() => onNavigate('createNewSubject')}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors mb-8"
        >
          <Plus className="size-5 text-white" />
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white">Create New Subjects</p>
        </button>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center mt-24 px-8">
          {/* Curved Arrow SVG */}
          <div className="mb-6 relative h-[200px] w-full flex items-center justify-center">
            <svg className="absolute top-0 right-0 w-[120px] h-[180px]" fill="none" viewBox="0 0 120 180">
              <path
                d="M 110 10 Q 90 50, 70 90 T 50 170"
                stroke="#9B9B9B"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M 45 165 L 50 170 L 55 165"
                stroke="#9B9B9B"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[#9b9b9b] text-center leading-[28px]">
            You don't have any subjects yet! Click on this button to add new Subjects
          </p>
        </div>
      </div>

      {/* Bottom Help Button */}
      <div className="fixed bottom-8 left-4 right-4">
        <button className="w-full bg-[#0b0c0c] h-[48px] rounded-[10px] flex items-center justify-center hover:bg-[#1a1b1b] transition-colors">
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white">Help & Resources</p>
        </button>
      </div>
    </div>
  );
}
