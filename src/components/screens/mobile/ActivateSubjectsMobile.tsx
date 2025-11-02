import { useState } from 'react';
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type ActivateSubjectsMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

const AVAILABLE_SUBJECTS = [
  { id: 'science-01', name: 'Science', activated: false },
  { id: 'math-01', name: 'Mathematics', activated: true },
  { id: 'english-01', name: 'English', activated: false },
  { id: 'history-01', name: 'History', activated: false },
  { id: 'geography-01', name: 'Geography', activated: false },
];

export function ActivateSubjectsMobile({ onNavigate, data }: ActivateSubjectsMobileProps) {
  const [subjects, setSubjects] = useState(AVAILABLE_SUBJECTS);
  const instituteName = data?.name || 'Institute';

  const toggleSubject = (id: string) => {
    setSubjects(prev => prev.map(subject =>
      subject.id === id ? { ...subject, activated: !subject.activated } : subject
    ));
  };

  const handleSave = () => {
    const activatedCount = subjects.filter(s => s.activated).length;
    toast.success(`${activatedCount} subjects activated for ${instituteName}`);
    setTimeout(() => onNavigate('instituteDetails', data), 1000);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Activate Subjects Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('instituteDetails', data)} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black">Activate Subjects</h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#9b9b9b] mb-6">
          Select subjects to activate for {instituteName}
        </p>

        {/* Subjects List */}
        <div className="space-y-3 mb-6">
          {subjects.map((subject) => (
            <label
              key={subject.id}
              className="flex items-center justify-between p-4 border-2 border-[#d9d9d9] rounded-[8px] cursor-pointer hover:border-[#1f60d8] transition-colors"
            >
              <span className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#232323]">
                {subject.name}
              </span>
              <input
                type="checkbox"
                checked={subject.activated}
                onChange={() => toggleSubject(subject.id)}
                className="size-6 accent-[#1f60d8] cursor-pointer"
              />
            </label>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
