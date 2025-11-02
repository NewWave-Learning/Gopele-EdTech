import { useState } from 'react';
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { ArrowLeft, HelpCircle, Upload } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type CreateLessonDetailsMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function CreateLessonDetailsMobile({ onNavigate, data }: CreateLessonDetailsMobileProps) {
  const [lessonName, setLessonName] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const lessonNumber = (data?.lessonNumber as number) || 1;
  const topicName = data?.lessonName || 'Topic';
  const subjectName = data?.subjectName || 'Subject';

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        toast.error('Only JPG and PNG files are supported');
        return;
      }
      setUploadedImage(file);
      toast.success('Image uploaded successfully');
    }
  };

  const handleSave = () => {
    if (!lessonName || !lessonDescription) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Lesson details saved!');
    setTimeout(() => {
      onNavigate('lessonContent', {
        ...data,
        currentLessonName: lessonName,
        currentLessonDescription: lessonDescription,
      });
    }, 1000);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Create Lesson Details Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('topicDetails', data)} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black">Lesson Details</h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6 space-y-6">
        {/* Breadcrumb */}
        <div className="bg-[#f5f6fa] rounded-[8px] p-4">
          <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b] mb-1">
            {subjectName} → {topicName}
          </p>
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">
            Lesson {lessonNumber}
          </p>
        </div>

        {/* Lesson Name */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Lesson Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
            placeholder="e.g. What is Space?"
            className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
          />
        </div>

        {/* Lesson Description */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Lesson Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={lessonDescription}
            onChange={(e) => setLessonDescription(e.target.value)}
            placeholder="Brief description of what students will learn..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors resize-none"
          />
        </div>

        {/* Cover Image Upload */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Lesson Cover Image
          </label>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleImageUpload}
            className="hidden"
            id="cover-upload"
          />
          <label
            htmlFor="cover-upload"
            className="w-full px-4 py-12 border-2 border-dashed border-[#d9d9d9] rounded-[8px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#1f60d8] transition-colors"
          >
            <Upload className="size-8 text-[#9b9b9b]" />
            <span className="font-['Poppins:Regular',_sans-serif] text-[14px] text-[#9b9b9b] text-center">
              {uploadedImage ? uploadedImage.name : 'Upload JPG or PNG (Max 2MB)'}
            </span>
          </label>
        </div>

        {/* Save & Continue Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Save & Add Content
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => onNavigate('topicDetails', data)}
          className="w-full border-2 border-[#d9d9d9] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
