import { useState } from 'react';
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { ArrowLeft, HelpCircle, Plus } from 'lucide-react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

type TopicDetailsMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function TopicDetailsMobile({ onNavigate, data }: TopicDetailsMobileProps) {
  const [topicName, setTopicName] = useState(data?.lessonName || '');
  const [topicDescription, setTopicDescription] = useState('');
  const subjectName = data?.subjectName || 'Subject';
  const subjectId = data?.subjectId || 'subject-01';

  const handleSave = () => {
    if (!topicName) {
      toast.error('Please enter a topic name');
      return;
    }

    toast.success('Topic saved successfully!');
    setTimeout(() => {
      onNavigate('createLessonDetails', {
        ...data,
        lessonName: topicName,
        lessonId: data?.lessonId || `topic-${Date.now()}`,
      });
    }, 1000);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Topic Details Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('subjectWithLessons', data)} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black">Topic Details</h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6 space-y-6">
        {/* Subject Context */}
        <div className="bg-[#f5f6fa] rounded-[8px] p-4">
          <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b] mb-1">Subject</p>
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">{subjectName}</p>
        </div>

        {/* Topic Name */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Topic Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={topicName}
            onChange={(e) => setTopicName(e.target.value)}
            placeholder="e.g. Introduction to Space"
            className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
          />
        </div>

        {/* Topic Description */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Topic Description
          </label>
          <textarea
            value={topicDescription}
            onChange={(e) => setTopicDescription(e.target.value)}
            placeholder="Brief description of this topic..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors resize-none"
          />
        </div>

        {/* Progress Info */}
        <div className="bg-[#1f60d8] rounded-[12px] p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] tracking-[1px] uppercase">
              Learning Progress
            </p>
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] tracking-[1px]">
              0%
            </p>
          </div>
          <div className="w-full h-[8px] bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-[#face55] rounded-full" style={{ width: '0%' }} />
          </div>
          <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-white/80 mt-3">
            No lessons added yet
          </p>
        </div>

        {/* Save & Continue Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Save & Continue to Add Lessons
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => onNavigate('subjectWithLessons', data)}
          className="w-full border-2 border-[#d9d9d9] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
