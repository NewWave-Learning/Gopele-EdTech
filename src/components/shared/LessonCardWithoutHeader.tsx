import { Button } from "./Button";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";
import { Screen, NavigationData } from "../../hooks/useNavigation";

type LessonCardWithoutHeaderProps = {
  className?: string;
  lessonName?: string;
  lessonDescription?: string;
  lessonId?: string;
  lessonNumber?: number;
  subjectName?: string;
  onNavigate?: (screen: Screen, data?: NavigationData) => void;
};

export function LessonCardWithoutHeader({ 
  className, 
  lessonName = "Composite Polygons",
  lessonDescription = "In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.",
  lessonId,
  lessonNumber = 1,
  subjectName = 'Science',
  onNavigate
}: LessonCardWithoutHeaderProps) {
  const handleStartClick = () => {
    if (onNavigate && lessonId) {
      onNavigate('lesson', { 
        lessonId, 
        lessonName, 
        lessonNumber,
        subjectName,
        totalLessons: 8 
      });
    }
  };

  return (
    <div className={className} data-name="Lesson Card - Without header">
      <div className="absolute h-[150px] left-[15px] top-[273px] w-[329px]" data-name="Lesson Details">
        <div className="absolute content-stretch flex flex-col gap-[10px] h-[160px] items-start left-0 not-italic text-white top-[-10px] w-[329px]" data-name="Card Copy">
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[25px] w-[328px]">
            <p className="leading-[32px]">{lessonName}</p>
          </div>
          <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">{lessonDescription}</p>
        </div>
      </div>
      <div className="absolute bottom-[19px] content-stretch flex gap-[18px] items-center left-[15px] w-[328px]" data-name="Buttons">
        <button 
          onClick={handleStartClick}
          className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px] cursor-pointer hover:bg-[#f9d977] transition-colors"
        >
          <Button size="Small" type="Primary" state="Standard" className="pointer-events-none" />
        </button>
        <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
      </div>
      <div className="absolute h-[248px] left-0 top-0 w-[358px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#c4c4c4] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}
