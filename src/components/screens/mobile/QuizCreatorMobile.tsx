import { useState } from 'react';
import { Screen, NavigationData } from '../../../hooks/useNavigation';
import { ArrowLeft, HelpCircle, Plus, Trash2, CheckCircle, Circle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
};

type QuizCreatorMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function QuizCreatorMobile({ onNavigate, data }: QuizCreatorMobileProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([
    {
      id: '1',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    },
  ]);

  const lessonName = data?.currentLessonName || 'Lesson 1';

  const addQuestion = () => {
    const newQuestion: QuizQuestion = {
      id: Date.now().toString(),
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id: string) => {
    if (questions.length === 1) {
      toast.error('You must have at least one question');
      return;
    }
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateQuestion = (id: string, field: string, value: any) => {
    setQuestions(questions.map(q =>
      q.id === id ? { ...q, [field]: value } : q
    ));
  };

  const updateOption = (questionId: string, optionIndex: number, value: string) => {
    setQuestions(questions.map(q =>
      q.id === questionId
        ? { ...q, options: q.options.map((opt, idx) => idx === optionIndex ? value : opt) }
        : q
    ));
  };

  const handleSave = () => {
    // Validate questions
    for (const q of questions) {
      if (!q.question.trim()) {
        toast.error('Please fill in all questions');
        return;
      }
      if (q.options.some(opt => !opt.trim())) {
        toast.error('Please fill in all answer options');
        return;
      }
    }

    toast.success('Quiz created successfully!');
    setTimeout(() => {
      onNavigate('quizCreated', { ...data, questionsCount: questions.length });
    }, 1000);
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-24" data-name="Quiz Creator Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('lessonContent', data)} className="p-2">
          <ArrowLeft className="size-6 text-[#232323]" />
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black">Create Quiz</h1>
        <button className="size-8 rounded-full bg-[#face55] flex items-center justify-center">
          <HelpCircle className="size-5 text-black" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6 pb-8 space-y-4">
        {/* Header Info */}
        <div className="bg-[#f5f6fa] rounded-[8px] p-4">
          <p className="font-['Poppins:Regular',_sans-serif] text-[12px] text-[#9b9b9b] mb-1">
            Quiz for: {lessonName}
          </p>
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">
            {questions.length} {questions.length === 1 ? 'Question' : 'Questions'}
          </p>
        </div>

        {/* Add Question Button */}
        <button
          onClick={addQuestion}
          className="w-full bg-[#1f60d8] h-[40px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#1850b8] transition-colors"
        >
          <Plus className="size-5 text-white" />
          <span className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-white">Add Question</span>
        </button>

        {/* Questions */}
        <div className="space-y-4">
          {questions.map((question, qIndex) => (
            <div key={question.id} className="border-2 border-[#d9d9d9] rounded-[12px] p-4">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#232323]">
                  Question {qIndex + 1}
                </span>
                <button
                  onClick={() => deleteQuestion(question.id)}
                  className="p-2 hover:bg-red-50 rounded-full transition-colors"
                >
                  <Trash2 className="size-4 text-[#eb5757]" />
                </button>
              </div>

              {/* Question Input */}
              <textarea
                value={question.question}
                onChange={(e) => updateQuestion(question.id, 'question', e.target.value)}
                placeholder="Enter your question..."
                rows={3}
                className="w-full px-3 py-2 mb-3 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[13px] outline-none focus:border-[#1f60d8] transition-colors resize-none"
              />

              {/* Answer Options */}
              <div className="space-y-2">
                <p className="font-['Poppins:Medium',_sans-serif] text-[12px] text-[#9b9b9b] mb-2">
                  Answer Options (tap to mark as correct)
                </p>
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuestion(question.id, 'correctAnswer', optIndex)}
                      className="shrink-0 p-1"
                    >
                      {question.correctAnswer === optIndex ? (
                        <CheckCircle className="size-5 text-green-500" />
                      ) : (
                        <Circle className="size-5 text-[#d9d9d9]" />
                      )}
                    </button>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateOption(question.id, optIndex, e.target.value)}
                      placeholder={`Option ${optIndex + 1}`}
                      className="flex-1 px-3 py-2 border-2 border-[#d9d9d9] rounded-[8px] font-['Poppins:Regular',_sans-serif] text-[13px] outline-none focus:border-[#1f60d8] transition-colors"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-100 p-4 w-[375px]">
        <button
          onClick={handleSave}
          className="w-full bg-[#1f60d8] h-[48px] rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[16px] text-white hover:bg-[#1850b8] transition-colors"
        >
          Save Quiz
        </button>
      </div>
    </div>
  );
}
