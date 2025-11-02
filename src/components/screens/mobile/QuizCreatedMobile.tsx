import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { CheckCircle, Plus, BookOpen } from 'lucide-react';

type QuizCreatedMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function QuizCreatedMobile({ onNavigate, data }: QuizCreatedMobileProps) {
  const questionsCount = (data?.questionsCount as number) || 1;
  const lessonName = data?.currentLessonName || 'Lesson';
  const topicName = data?.lessonName || 'Topic';
  const subjectName = data?.subjectName || 'Subject';

  const handleAddAnotherLesson = () => {
    const nextLessonNumber = ((data?.lessonNumber as number) || 1) + 1;
    onNavigate('createLessonDetails', {
      ...data,
      lessonNumber: nextLessonNumber,
    });
  };

  const handleViewSubject = () => {
    onNavigate('subjectWithLessons', data);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen" data-name="Quiz Created Mobile">
      {/* Success Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-12">
        {/* Success Icon */}
        <div className="mb-8 relative">
          <div className="size-32 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircle className="size-20 text-green-500" />
          </div>
          {/* Confetti Effect */}
          <div className="absolute -top-4 -left-4">
            <div className="size-3 rounded-full bg-[#f4d35e]" />
          </div>
          <div className="absolute top-2 -right-6">
            <div className="size-2 rounded-full bg-[#1f60d8]" />
          </div>
          <div className="absolute -bottom-2 left-8">
            <div className="size-2 rounded-full bg-green-400" />
          </div>
          <div className="absolute bottom-6 -right-4">
            <div className="size-3 rounded-full bg-[#face55]" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[28px] text-[#232323] text-center mb-3">
          Quiz Created!
        </h1>
        
        <p className="font-['Poppins:Regular',_sans-serif] text-[16px] text-[#9b9b9b] text-center mb-2">
          You've successfully created a quiz with <span className="text-[#1f60d8] font-semibold">{questionsCount} {questionsCount === 1 ? 'question' : 'questions'}</span>
        </p>

        <p className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#9b9b9b] text-center mb-8">
          for "{lessonName}"
        </p>

        {/* Summary Card */}
        <div className="w-full bg-[#f5f6fa] rounded-[12px] p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <BookOpen className="size-5 text-[#1f60d8] shrink-0 mt-1" />
            <div className="flex-1">
              <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323] mb-1">
                Lesson Details
              </p>
              <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b]">
                {subjectName} → {topicName} → {lessonName}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#9b9b9b]">
                Quiz Questions
              </span>
              <span className="font-['Poppins:SemiBold',_sans-serif] text-[13px] text-[#232323]">
                {questionsCount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-['Poppins:Regular',_sans-serif] text-[13px] text-[#9b9b9b]">
                Status
              </span>
              <span className="font-['Poppins:SemiBold',_sans-serif] text-[13px] text-green-600">
                Complete
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3">
          <button
            onClick={handleAddAnotherLesson}
            className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors"
          >
            <Plus className="size-5 text-white" />
            <span className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white">
              Add Another Lesson
            </span>
          </button>

          <button
            onClick={handleViewSubject}
            className="w-full bg-white border-2 border-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#1f60d8] hover:bg-[#f5f6fa] transition-colors"
          >
            View All Lessons
          </button>

          <button
            onClick={() => onNavigate('coursesPopulated')}
            className="w-full bg-white border-2 border-[#d9d9d9] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] hover:bg-gray-50 transition-colors"
          >
            Back to Subjects
          </button>
        </div>
      </div>
    </div>
  );
}
