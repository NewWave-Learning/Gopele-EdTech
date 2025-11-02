import { useState } from 'react';
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { ArrowLeft, HelpCircle, Image as ImageIcon, Type, Plus, Trash2, MoveUp, MoveDown } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type ContentBlock = {
  id: string;
  type: 'text' | 'image';
  content: string;
  caption?: string;
};

type LessonContentMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function LessonContentMobile({ onNavigate, data }: LessonContentMobileProps) {
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([
    { id: '1', type: 'text', content: '' },
  ]);

  const lessonName = data?.currentLessonName || 'Lesson 1';
  const topicName = data?.lessonName || 'Topic';

  const addTextBlock = () => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: 'text',
      content: '',
    };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const addImageBlock = () => {
    const newBlock: ContentBlock = {
      id: Date.now().toString(),
      type: 'image',
      content: '',
      caption: '',
    };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const updateBlock = (id: string, field: 'content' | 'caption', value: string) => {
    setContentBlocks(contentBlocks.map(block =>
      block.id === id ? { ...block, [field]: value } : block
    ));
  };

  const deleteBlock = (id: string) => {
    if (contentBlocks.length === 1) {
      toast.error('You must have at least one content block');
      return;
    }
    setContentBlocks(contentBlocks.filter(block => block.id !== id));
  };

  const moveBlock = (id: string, direction: 'up' | 'down') => {
    const index = contentBlocks.findIndex(block => block.id === id);
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === contentBlocks.length - 1)
    ) {
      return;
    }

    const newBlocks = [...contentBlocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newBlocks[index], newBlocks[targetIndex]] = [newBlocks[targetIndex], newBlocks[index]];
    setContentBlocks(newBlocks);
  };

  const handleSave = () => {
    const hasContent = contentBlocks.some(block => block.content.trim());
    if (!hasContent) {
      toast.error('Please add some content to the lesson');
      return;
    }

    toast.success('Lesson content saved!');
    setTimeout(() => {
      onNavigate('quizCreator', data);
    }, 1000);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-24" data-name="Lesson Content Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('createLessonDetails', data)} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-black text-center flex-1 mx-2 truncate">
          {lessonName}
        </h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center shrink-0">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6 pb-8 space-y-4">
        {/* Breadcrumb */}
        <div className="bg-[#f5f6fa] rounded-[8px] p-3">
          <p className="font-['Poppins:Regular',_sans-serif] text-[11px] text-[#9b9b9b]">
            {topicName} → {lessonName}
          </p>
        </div>

        {/* Add Block Buttons */}
        <div className="flex gap-2">
          <button
            onClick={addTextBlock}
            className="flex-1 bg-[#1f60d8] h-[40px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors"
          >
            <Type className="size-4 text-white" />
            <span className="font-['Poppins:Medium',_sans-serif] text-[13px] text-white">Add Text</span>
          </button>
          <button
            onClick={addImageBlock}
            className="flex-1 bg-[#f4d35e] h-[40px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#face55] transition-colors"
          >
            <ImageIcon className="size-4 text-[#232323]" />
            <span className="font-['Poppins:Medium',_sans-serif] text-[13px] text-[#232323]">Add Image</span>
          </button>
        </div>

        {/* Content Blocks */}
        <div className="space-y-3">
          {contentBlocks.map((block, index) => (
            <div key={block.id} className="border-2 border-[#d9d9d9] rounded-[8px] p-3">
              {/* Block Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-['Poppins:Medium',_sans-serif] text-[12px] text-[#9b9b9b]">
                  {block.type === 'text' ? 'Text Block' : 'Image Block'} #{index + 1}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => moveBlock(block.id, 'up')}
                    disabled={index === 0}
                    className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                  >
                    <MoveUp className="size-4 text-[#9b9b9b]" />
                  </button>
                  <button
                    onClick={() => moveBlock(block.id, 'down')}
                    disabled={index === contentBlocks.length - 1}
                    className="p-1 hover:bg-gray-100 rounded disabled:opacity-30"
                  >
                    <MoveDown className="size-4 text-[#9b9b9b]" />
                  </button>
                  <button
                    onClick={() => deleteBlock(block.id)}
                    className="p-1 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="size-4 text-[#eb5757]" />
                  </button>
                </div>
              </div>

              {/* Block Content */}
              {block.type === 'text' ? (
                <textarea
                  value={block.content}
                  onChange={(e) => updateBlock(block.id, 'content', e.target.value)}
                  placeholder="Enter lesson content..."
                  rows={4}
                  className="w-full px-3 py-2 border border-[#d9d9d9] rounded-[6px] font-['Poppins:Regular',_sans-serif] text-[13px] outline-none focus:border-[#1f60d8] transition-colors resize-none"
                />
              ) : (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={block.content}
                    onChange={(e) => updateBlock(block.id, 'content', e.target.value)}
                    placeholder="Image URL or upload"
                    className="w-full px-3 py-2 border border-[#d9d9d9] rounded-[6px] font-['Poppins:Regular',_sans-serif] text-[13px] outline-none focus:border-[#1f60d8] transition-colors"
                  />
                  <input
                    type="text"
                    value={block.caption || ''}
                    onChange={(e) => updateBlock(block.id, 'caption', e.target.value)}
                    placeholder="Image caption (optional)"
                    className="w-full px-3 py-2 border border-[#d9d9d9] rounded-[6px] font-['Poppins:Regular',_sans-serif] text-[13px] outline-none focus:border-[#1f60d8] transition-colors"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 p-4 space-y-2 w-[375px]">
        <button
          onClick={handleSave}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Save & Create Quiz
        </button>
      </div>
    </div>
  );
}
