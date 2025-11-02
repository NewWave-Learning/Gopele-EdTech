import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { Menu, HelpCircle, Plus, ArrowLeft, Edit2, Trash2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type SubjectWithLessonsMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

const MOCK_TOPICS = [
  { id: 'topic-01', name: 'Introduction to Space', lessonsCount: 8, status: 'completed' },
  { id: 'topic-02', name: 'The Solar System', lessonsCount: 6, status: 'in-progress' },
  { id: 'topic-03', name: 'Stars and Galaxies', lessonsCount: 0, status: 'empty' },
];

export function SubjectWithLessonsMobile({ onNavigate, data }: SubjectWithLessonsMobileProps) {
  const subjectName = data?.subjectName || 'Science';
  const subjectId = data?.subjectId || 'science-01';

  const handleEditTopic = (topic: typeof MOCK_TOPICS[0]) => {
    onNavigate('topicDetails', { subjectId, subjectName, lessonId: topic.id, lessonName: topic.name });
  };

  const handleDeleteTopic = (topic: typeof MOCK_TOPICS[0]) => {
    toast.success(`${topic.name} has been deleted`);
  };

  const handleViewTopic = (topic: typeof MOCK_TOPICS[0]) => {
    if (topic.status === 'empty') {
      onNavigate('topicDetails', { subjectId, subjectName, lessonId: topic.id, lessonName: topic.name });
    } else {
      onNavigate('lessonContent', { subjectId, subjectName, lessonId: topic.id, lessonName: topic.name });
    }
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Subject With Lessons Mobile">
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
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors mb-6"
        >
          <Plus className="size-5 text-white" />
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white">Add Topic</p>
        </button>

        {/* Topics List */}
        <div className="space-y-3">
          <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-[#232323] mb-4">Topics</h2>
          
          {MOCK_TOPICS.map((topic) => (
            <div
              key={topic.id}
              className="border-2 border-[#d9d9d9] rounded-[12px] p-4 hover:border-[#1f60d8] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1" onClick={() => handleViewTopic(topic)}>
                  <h3 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] mb-1">
                    {topic.name}
                  </h3>
                  <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b]">
                    {topic.lessonsCount} {topic.lessonsCount === 1 ? 'lesson' : 'lessons'}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditTopic(topic)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Edit2 className="size-4 text-[#1f60d8]" />
                  </button>
                  <button
                    onClick={() => handleDeleteTopic(topic)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Trash2 className="size-4 text-[#eb5757]" />
                  </button>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full text-[12px] font-['Poppins:Medium',_sans-serif] ${
                  topic.status === 'completed' ? 'bg-green-100 text-green-700' :
                  topic.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {topic.status === 'completed' ? 'Completed' :
                   topic.status === 'in-progress' ? 'In Progress' :
                   'No Lessons'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
