import svgPaths from "../../../imports/svg-2dnbiahxic";
import img23 from "figma:asset/7a89186b3f01cb8b0e6d642bef5df8fb695f8088.png";
import { Screen, NavigationData } from "../../../hooks/useNavigation";
import { useState } from "react";

type FeedbackMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function FeedbackMobile({ onNavigate, data }: FeedbackMobileProps) {
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
  
  const handleExploreMore = () => {
    // Navigate to AI Mentor page after completing lessons
    onNavigate('aiMentor', data);
  };
  
  return (
    <div className="bg-white h-[1400px] overflow-clip relative w-[375px]" data-name="Feedback - Mobile">
      {/* Lesson Nav & Progress */}
      <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Lesson Nav & Progress">
        <div className="absolute bg-[#fdf0e9] inset-0" data-name="Background" />
        
        {/* Progress Pills - All completed */}
        <div className="absolute flex gap-[6px] items-center justify-center left-[50%] top-[40px] translate-x-[-50%]" data-name="Pill Lesson Progress">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-[#f4d35e] h-[8px] rounded-[4px] w-[20px]" />
          ))}
        </div>
        
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-[16px] top-[19px] cursor-pointer group flex gap-[8px] items-center"
          data-name="Previous"
        >
          <div className="size-[36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
              <circle cx="18" cy="18" fill="var(--fill-0, #F4D35E)" r="18" />
              <path d="M20.5 12L15 18L20.5 24" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="font-['Poppins:Medium',_sans-serif] leading-[22px] text-[16px] text-black group-hover:opacity-80 transition-opacity">
            Previous
          </p>
        </button>
      </div>
      
      {/* Congratulations Title */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[50%] not-italic text-[32px] text-black text-center top-[120px] translate-x-[-50%] w-[339px]">
        <p className="leading-[40px]">You did it! Congratulations 🎉</p>
      </div>
      
      {/* Celebration Image */}
      <div className="absolute h-[280px] left-[47px] top-[190px] w-[280px]">
        <img alt="Celebration" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img23} />
      </div>
      
      {/* Rate Your Experience */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[48px] justify-center leading-[0] left-[50%] not-italic text-[24px] text-black text-center top-[500px] translate-x-[-50%] w-[339px]">
        <p className="leading-[36px]">Rate your experience</p>
      </div>
      
      {/* Stars Rating */}
      <div className="absolute flex gap-[10px] items-center justify-center left-[50%] top-[560px] translate-x-[-50%]" data-name="Stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="size-[50px] cursor-pointer hover:scale-110 transition-transform shrink-0"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
              <path 
                d="M25 5L29.5 19H44L32.5 27.5L37 41.5L25 33L13 41.5L17.5 27.5L6 19H20.5L25 5Z"
                fill={star <= rating ? "#F4D35E" : "rgba(35,35,35,0.2)"}
              />
            </svg>
          </button>
        ))}
      </div>
      
      {/* Feedback Text Area */}
      <div className="absolute left-[18px] top-[640px] w-[339px]" data-name="Text Area">
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] mb-[16px] not-italic text-[18px] text-black">
          <p className="leading-[28px]">Additional Feedback (optional)</p>
        </div>
        <div className="bg-white h-[100px] relative rounded-[8px] w-full" data-name="Text field">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Type here..."
            className="absolute inset-0 font-['Poppins:Medium',_sans-serif] leading-[24px] p-[16px] resize-none rounded-[8px] text-[16px] text-[#232323] placeholder:text-[rgba(35,35,35,0.6)]"
          />
          <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[18px] top-[780px] w-[339px]" data-name="Buttons">
        <button
          onClick={handleExploreMore}
          className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] w-full cursor-pointer hover:bg-[#f9d977] transition-colors"
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[16px] text-nowrap whitespace-pre">Explore More Subjects</p>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <path d="M20 10L14 16L20 22" stroke="#232323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <button
          onClick={handleExitToHome}
          className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] w-full cursor-pointer hover:bg-gray-100 transition-colors"
          data-name="Button"
        >
          <div aria-hidden="true" className="absolute border border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="relative shrink-0 size-[28px]" data-name="Solid/General/Home">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
              <path d="M14 6L22 12V22H16V16H12V22H6V12L14 6Z" fill="#232323" />
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[16px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Exit to Home</p>
          </div>
        </button>
      </div>
    </div>
  );
}
