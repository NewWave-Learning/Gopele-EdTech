import svgPaths from "../../../imports/svg-jitx3wq8lh";
import imgWalle from "figma:asset/5659bb0a661292d84ce5d5861c0faa55bc7dd773.png";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";
import imgUnsplashDyHx6H3LMdY from "figma:asset/57a12861c7fbae08e612aa3579445788a979c8de.png";
import imgUnsplashXVptEZzgVfo from "figma:asset/d2939bee28d7846c5bf1ee96be695d3f120827fb.png";
import { Screen, NavigationData } from "../../../hooks/useNavigation";

type AIMentorMobileProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  data?: NavigationData;
};

export function AIMentorMobile({ onNavigate, data }: AIMentorMobileProps) {
  return (
    <div className="bg-white relative w-[390px] min-h-screen pb-8" data-name="AI Mentor Mobile">
      {/* Nav Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] h-[60px] w-full flex items-center justify-between px-4">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
          <div className="size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
              <g id="Frame 2">
                <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
              </g>
            </svg>
          </div>
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-[#232323] capitalize">Gopele</p>
        </button>
        <button className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#1f60d8]">AI Mentor</button>
      </div>

      {/* Meet Wall-E */}
      <div className="bg-[#1f60d8] mx-4 mt-4 rounded-[8px] p-6 relative overflow-hidden">
        <div className="absolute right-[-20px] top-4 w-[140px] h-[140px] opacity-50">
          <img alt="" className="size-full object-contain" src={imgWalle} />
        </div>
        <div className="relative z-10">
          <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[28px] text-white mb-3">Meet, Wall-E ;)</h2>
          <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-white leading-[22px] mb-6">
            Wall-E is your personal teacher to help you become better by evaluating your weak areas & revision suggestions.
          </p>
          <button className="bg-[#f4d35e] rounded-[8px] px-4 py-3 font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323] hover:bg-[#f9d977] transition-colors">
            See Recommendations
          </button>
        </div>
      </div>

      {/* Spaced Repetition */}
      <div className="px-4 mt-8">
        <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[24px] text-black mb-4">Spaced Repetition</h2>
        
        <div className="bg-[#1f60d8] rounded-[8px] p-4">
          {/* Repetition Chain */}
          <div className="mb-4 overflow-x-auto">
            <div className="min-w-[320px] h-[40px] relative">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 602 51">
                <g id="Repetition Chain">
                  <line id="Line 1" stroke="var(--stroke-0, #F4D35E)" strokeWidth="5" x1="0.986737" x2="563.911" y1="24.377" y2="21.3906" />
                  <g id="Group 10">
                    <circle cx="26.0106" cy="25.0106" fill="var(--fill-0, #F4D35E)" id="Ellipse 3" r="25.0106" />
                    <circle cx="117.84" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 4" r="25.0106" />
                    <circle cx="209.67" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 5" r="25.0106" />
                    <circle cx="301.5" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 6" r="25.0106" />
                    <circle cx="393.33" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 7" r="25.0106" />
                    <circle cx="485.16" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 8" r="25.0106" />
                    <circle cx="576.989" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 9" r="25.0106" />
                  </g>
                  <g id="Solid/Media/Play">
                    <path d={svgPaths.p18fbfe80} fill="var(--fill-0, #1F60D8)" id="Icon" />
                  </g>
                  <g id="bx:bxs-lock-alt">
                    <path d={svgPaths.p1555e600} fill="var(--fill-0, #151A21)" id="Vector" />
                  </g>
                  <g id="bx:bxs-lock-alt_2">
                    <path d={svgPaths.p26e6800} fill="var(--fill-0, #151A21)" id="Vector_2" />
                  </g>
                  <g id="bx:bxs-lock-alt_3">
                    <path d={svgPaths.p3acd1870} fill="var(--fill-0, #151A21)" id="Vector_3" />
                  </g>
                  <g id="bx:bxs-lock-alt_4">
                    <path d={svgPaths.pdd99d00} fill="var(--fill-0, #151A21)" id="Vector_4" />
                  </g>
                  <g id="bx:bxs-lock-alt_5">
                    <path d={svgPaths.p20a48000} fill="var(--fill-0, #151A21)" id="Vector_5" />
                  </g>
                  <g id="bx:bx-check">
                    <path d={svgPaths.pa4df470} fill="var(--fill-0, #232323)" id="Vector_6" />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <h3 className="font-['Poppins:SemiBold',_sans-serif] text-[24px] text-white mb-2">Composite Polygons</h3>
          <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-white leading-[22px] mb-4">
            In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.
          </p>

          {/* Image */}
          <div className="rounded-[8px] overflow-hidden mb-4">
            <img alt="" className="w-full h-[160px] object-cover" src={imgLessonsCover} />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-[#f4d35e] rounded-[8px] py-3 px-4 flex items-center justify-center gap-2 hover:bg-[#f9d977] transition-colors">
              <div className="size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                  <g id="Solid/Media/Play">
                    <path d={svgPaths.p2c0e5d80} fill="var(--fill-0, #232323)" id="Icon" />
                  </g>
                </svg>
              </div>
              <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">Start</p>
            </button>
            <button className="flex-1 bg-white rounded-[8px] py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
              <div className="size-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                  <g id="Solid/Status/Bookmark">
                    <path d={svgPaths.p88e6270} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                  </g>
                </svg>
              </div>
              <p className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#232323]">Save</p>
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Revision */}
      <div className="px-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-['Poppins:SemiBold',_sans-serif] text-[24px] text-black">Recommended Revision</h2>
          <div className="flex gap-2">
            <button className="size-[36px] bg-[#f4d35e] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                <path d={svgPaths.p26ba13c0} fill="var(--fill-0, #232323)" />
              </svg>
            </button>
            <button className="size-[36px] bg-[#f4d35e] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg className="w-[20px] h-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                <path d={svgPaths.p2f245500} fill="var(--fill-0, #232323)" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lesson Cards - Scrollable */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {/* Card 1 - Geometry */}
          <div className="flex-shrink-0 w-[300px] bg-[#1f60d8] rounded-[8px] snap-start">
            <div className="rounded-t-[8px] overflow-hidden">
              <img alt="" className="w-full h-[160px] object-cover" src={imgLessonsCover} />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <p className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white tracking-[2px] uppercase">Geometry</p>
                <div className="size-[4px] rounded-full bg-[#f4d35e]" />
                <p className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white tracking-[2px] uppercase">lesson 07 / 25</p>
              </div>
              <h3 className="font-['Poppins:Bold',_sans-serif] text-[20px] text-white mb-2">Composite Polygons</h3>
              <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-white leading-[20px] mb-4">
                In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-[#f4d35e] rounded-[8px] py-2 px-3 flex items-center justify-center gap-2 hover:bg-[#f9d977] transition-colors">
                  <div className="size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                      <g id="Solid/Media/Play">
                        <path d={svgPaths.p2c0e5d80} fill="var(--fill-0, #232323)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#232323]">Start</p>
                </button>
                <button className="flex-1 bg-white rounded-[8px] py-2 px-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  <div className="size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <g id="Solid/Status/Bookmark">
                        <path d={svgPaths.p88e6270} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">Save</p>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Science */}
          <div className="flex-shrink-0 w-[300px] bg-[#1f60d8] rounded-[8px] snap-start">
            <div className="rounded-t-[8px] overflow-hidden">
              <img alt="" className="w-full h-[160px] object-cover" src={imgUnsplashDyHx6H3LMdY} />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <p className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white tracking-[2px] uppercase">Science</p>
                <div className="size-[4px] rounded-full bg-[#f4d35e]" />
                <p className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white tracking-[2px] uppercase">lesson 13 / 22</p>
              </div>
              <h3 className="font-['Poppins:Bold',_sans-serif] text-[20px] text-white mb-2">Atoms & Charges</h3>
              <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-white leading-[20px] mb-4">
                This course was written in collaboration with Danielle Scarano.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-[#f4d35e] rounded-[8px] py-2 px-3 flex items-center justify-center gap-2 hover:bg-[#f9d977] transition-colors">
                  <div className="size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                      <g id="Solid/Media/Play">
                        <path d={svgPaths.p2c0e5d80} fill="var(--fill-0, #232323)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#232323]">Start</p>
                </button>
                <button className="flex-1 bg-white rounded-[8px] py-2 px-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  <div className="size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <g id="Solid/Status/Bookmark">
                        <path d={svgPaths.p88e6270} id="Icon" fill="var(--fill-0, #232323)" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">Saved</p>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Physics */}
          <div className="flex-shrink-0 w-[300px] bg-[#1f60d8] rounded-[8px] snap-start">
            <div className="rounded-t-[8px] overflow-hidden">
              <img alt="" className="w-full h-[160px] object-cover" src={imgUnsplashXVptEZzgVfo} />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <p className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white tracking-[2px] uppercase">Physics</p>
                <div className="size-[4px] rounded-full bg-[#f4d35e]" />
                <p className="font-['Poppins:Bold',_sans-serif] text-[12px] text-white tracking-[2px] uppercase">lesson 25 / 26</p>
              </div>
              <h3 className="font-['Poppins:Bold',_sans-serif] text-[20px] text-white mb-2">Electro Magnetic Radiation</h3>
              <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-white leading-[20px] mb-4">
                Learn the key ideas of computer science with this interactive course – no coding required!
              </p>
              <div className="flex gap-3">
                <button className="flex-1 bg-[#f4d35e] rounded-[8px] py-2 px-3 flex items-center justify-center gap-2 hover:bg-[#f9d977] transition-colors">
                  <div className="size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
                      <g id="Solid/Media/Play">
                        <path d={svgPaths.p2c0e5d80} fill="var(--fill-0, #232323)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-[#232323]">Start</p>
                </button>
                <button className="flex-1 bg-white rounded-[8px] py-2 px-3 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                  <div className="size-[18px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <g id="Solid/Status/Bookmark">
                        <path d={svgPaths.p88e6270} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323]">Save</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
