import svgPaths from "../../imports/svg-2dnbiahxic";
import img23 from "figma:asset/7a89186b3f01cb8b0e6d642bef5df8fb695f8088.png";
import { Screen, NavigationData } from "../../hooks/useNavigation";
import { useState } from "react";

type FeedbackProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function Feedback({ onNavigate, data }: FeedbackProps) {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");
  const subjectName = data?.subjectName || 'Science';
  
  const handlePrevious = () => {
    // Go back to the last lesson
    onNavigate('lessonIntro', {
      ...data,
      lessonNumber: 8,
      lessonName: 'The Future of Space Science',
      lessonId: 'space-08'
    });
  };
  
  const handleExitToHome = () => {
    onNavigate('home');
  };
  
  const handleStartNextLesson = () => {
    // Navigate to AI Mentor page after completing lessons
    onNavigate('aiMentor', data);
  };
  
  return (
    <div className="bg-white h-[1454px] overflow-clip relative w-[1440px]" data-name="Feedback">
      {/* Lesson Nav & Progress */}
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Lesson Nav & Progress">
        <div className="absolute bg-[#fdf0e9] inset-0" data-name="Background" />
        
        {/* Progress Pills - All completed */}
        <div className="absolute contents inset-[40%_27.78%_40%_26.74%]" data-name="Pill Lesson Progress">
          <div className="absolute bg-[#f4d35e] inset-[40%_69.1%_40%_26.74%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_63.19%_40%_32.64%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_57.29%_40%_38.54%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_51.39%_40%_44.44%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_45.49%_40%_50.35%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_39.58%_40%_56.25%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_33.68%_40%_62.15%] rounded-[12px]" />
          <div className="absolute bg-[#f4d35e] inset-[40%_27.78%_40%_68.06%] rounded-[12px]" />
        </div>
        
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute contents left-[72px] top-[19px] cursor-pointer group"
          data-name="Previous"
        >
          <div className="absolute contents left-[72px] top-[19px]" data-name="Arrow Slider Left">
            <div className="absolute right-[1326px] size-[42px] top-[19px] group-hover:opacity-80 transition-opacity">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
              </svg>
            </div>
            <div className="absolute left-[73.71px] size-[38.571px] top-[20.71px]" data-name="Solid/Interface/Arrow left">
              <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                  <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[136px] not-italic text-[20px] text-black text-nowrap top-[40px] translate-y-[-50%] group-hover:opacity-80 transition-opacity">
            <p className="leading-[26px] whitespace-pre">Previous</p>
          </div>
        </button>
      </div>
      
      {/* Congratulations Title */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[72px] justify-center leading-[0] left-[720px] not-italic text-[40px] text-black text-center top-[196px] translate-x-[-50%] translate-y-[-50%] w-[878px]">
        <p className="leading-[32px]">You did it! Congratulations 🎉🔥🌈</p>
      </div>
      
      {/* Celebration Image */}
      <div className="absolute h-[447px] left-[484px] top-[289px] w-[471px]" data-name="2 3">
        <img alt="Celebration" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img23} />
      </div>
      
      {/* Rate Your Experience */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[72px] justify-center leading-[0] left-[720px] not-italic text-[32px] text-black text-center top-[834px] translate-x-[-50%] translate-y-[-50%] w-[878px]">
        <p className="leading-[42px]">Rate your experience</p>
      </div>
      
      {/* Stars Rating */}
      <div className="absolute contents left-[420px] top-[882px]" data-name="Stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="absolute size-[80px] cursor-pointer hover:scale-110 transition-transform"
            style={{ left: `${420 + (star - 1) * 130}px`, top: '882px' }}
          >
            <div className="absolute inset-[10.41%_6.62%_10.25%_6.62%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 64">
                <path 
                  d={svgPaths.p11b0e500} 
                  fill={star <= rating ? "var(--fill-0, #F4D35E)" : "var(--fill-0, rgba(35,35,35,0.2))"} 
                  id="Icon" 
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
      
      {/* Feedback Text Area */}
      <div className="absolute contents left-[383px] top-[1024px]" data-name="Text Area">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[385px] not-italic text-[20px] text-black text-nowrap top-[1039px] translate-y-[-50%]">
          <p className="leading-[30px] whitespace-pre">Additional Feedback (optional)</p>
        </div>
        <div className="absolute bg-white h-[121px] left-[383px] rounded-[8px] top-[1060px] w-[675px]" data-name="Text field">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type here..."
            className="absolute inset-0 font-['Poppins:Medium',_sans-serif] leading-[30px] p-[19px] resize-none rounded-[8px] text-[20px] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
          />
          <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[514px] top-[1268px]" data-name="Buttons">
        <button
          onClick={handleExitToHome}
          className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors"
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Home">
            <div className="absolute inset-[12.5%_8.59%_11.72%_8.59%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 24">
                <path d={svgPaths.p3e6500} fill="var(--fill-0, #232323)" id="Icon" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Exit to Home</p>
          </div>
        </button>
        <button
          onClick={handleStartNextLesson}
          className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#f9d977] transition-colors"
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Explore More Subjects</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                    <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
