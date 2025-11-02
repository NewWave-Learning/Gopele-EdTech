import { Screen } from '../../../hooks/useNavigation';
import { Menu, Plus, HelpCircle, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

type CoursesPopulatedMobileProps = {
  onNavigate: (screen: Screen, data?: any) => void;
};

const MOCK_SUBJECTS = [
  {
    id: 'science-01',
    name: 'Science',
    description: 'Stretch your analytic muscles with truth-tellers, logical robots, and more!',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2MTAzNTMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'math-01',
    name: 'Mathematics',
    description: 'Master numbers, algebra, geometry and more with our comprehensive math curriculum',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljc3xlbnwxfHx8fDE3NjEwMzUzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'english-01',
    name: 'English',
    description: 'Improve reading, writing, grammar and communication skills',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGVuZ2xpc2h8ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'history-01',
    name: 'History',
    description: 'Explore the past and understand how it shapes our present and future',
    image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwYm9va3N8ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function CoursesPopulatedMobile({ onNavigate }: CoursesPopulatedMobileProps) {
  const handleEditSubject = (subject: typeof MOCK_SUBJECTS[0]) => {
    onNavigate('updateSubject', { subjectId: subject.id, subjectName: subject.name });
  };

  const handleDeleteSubject = (subject: typeof MOCK_SUBJECTS[0]) => {
    toast.success(`${subject.name} has been deleted`);
  };

  const handleViewSubject = (subject: typeof MOCK_SUBJECTS[0]) => {
    onNavigate('subjectWithLessons', { subjectId: subject.id, subjectName: subject.name });
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Courses Populated Mobile">
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[20px] text-[#232323]">All Subjects</h2>
        </div>

        {/* Create New Subjects Button */}
        <button
          onClick={() => onNavigate('createNewSubject')}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors mb-6"
        >
          <Plus className="size-5 text-white" />
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white">Create New Subjects</p>
        </button>

        {/* Subject Cards */}
        <div className="space-y-4">
          {MOCK_SUBJECTS.map((subject) => (
            <div
              key={subject.id}
              className="relative rounded-[12px] overflow-hidden h-[280px] cursor-pointer group"
              onClick={() => handleViewSubject(subject)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  alt={subject.name}
                  className="w-full h-full object-cover"
                  src={subject.image}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-4">
                {/* Top Actions */}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSubject(subject);
                    }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Edit2 className="size-5 text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSubject(subject);
                    }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-red-500/50 transition-colors"
                  >
                    <Trash2 className="size-5 text-white" />
                  </button>
                </div>

                {/* Bottom Content */}
                <div>
                  <h3 className="font-['Poppins:Bold',_sans-serif] text-[22px] text-white mb-2">
                    {subject.name}
                  </h3>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-white leading-[22px] line-clamp-3">
                    {subject.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
