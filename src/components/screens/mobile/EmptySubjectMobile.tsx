import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { Menu, HelpCircle, Plus, ArrowLeft } from 'lucide-react';

type EmptySubjectMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function EmptySubjectMobile({ onNavigate, data }: EmptySubjectMobileProps) {
  const subjectName = data?.subjectName || 'Subject';
  const subjectId = data?.subjectId || 'subject-01';

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Empty Subject Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('coursesPopulated')} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-black">{subjectName}</h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        {/* Add Topic Button */}
        <button
          onClick={() => onNavigate('topicDetails', { subjectId, subjectName })}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors mb-8"
        >
          <Plus className="size-5 text-white" />
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white">Add Topic</p>
        </button>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center mt-24 px-8">
          <div className="mb-6">
            <div className="size-24 rounded-full bg-[#f5f6fa] flex items-center justify-center">
              <Plus className="size-12 text-[#9b9b9b]" />
            </div>
          </div>

          <p className="font-['Poppins:Medium',_sans-serif] text-[18px] text-[#9b9b9b] text-center leading-[28px]">
            No topics yet! Click the button above to add your first topic to {subjectName}
          </p>
        </div>
      </div>
    </div>
  );
}
