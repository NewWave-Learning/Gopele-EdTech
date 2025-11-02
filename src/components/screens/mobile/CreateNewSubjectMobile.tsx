import { useState } from 'react';
import { Screen } from '../../../hooks/useNavigation';
import { Menu, HelpCircle, Upload } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type CreateNewSubjectMobileProps = {
  onNavigate: (screen: Screen) => void;
};

export function CreateNewSubjectMobile({ onNavigate }: CreateNewSubjectMobileProps) {
  const [subjectName, setSubjectName] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

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

  const handleCreateSubject = () => {
    if (!subjectName || !description) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Subject created successfully!');
    setTimeout(() => {
      onNavigate('emptySubject', { subjectName, subjectId: `subject-${Date.now()}` });
    }, 1000);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Create New Subject Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('courses')} className="p-2">
          <Menu className="size-6 text-[#232323]" />
        </button>
        <div className="flex flex-col">
          <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black text-center">Create Subject</h1>
        </div>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Form Content */}
      <div className="px-4 pt-6 space-y-6">
        {/* Subject Name */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Subject Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            placeholder="e.g. Science, Mathematics"
            className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description of the subject..."
            rows={4}
            className="w-full px-4 py-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[14px] outline-none focus:border-[#1f60d8] transition-colors resize-none"
          />
        </div>

        {/* Cover Image Upload */}
        <div className="flex flex-col gap-2">
          <label className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">
            Cover Image
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

        {/* Create Button */}
        <button
          onClick={handleCreateSubject}
          className="w-full mt-6 bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Create Subject
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => onNavigate('courses')}
          className="w-full bg-white border-2 border-[#d9d9d9] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
