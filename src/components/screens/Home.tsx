import svgPaths from "../../imports/svg-rtrc0xe1hb";
import img from "figma:asset/e12f534198175966d657f7407655f59cc0dcdccc.png";
import img3 from "figma:asset/499b67bcf3496dbfc4b48e9db79662f6dd875256.png";
import img4 from "figma:asset/0664871b1e255ceadaf7196563af51ab3f8e7478.png";
import img5 from "figma:asset/2a6e8c954bc26f98f7449245c689b435ede3842f.png";
import img1 from "figma:asset/57a12861c7fbae08e612aa3579445788a979c8de.png";
import img2 from "figma:asset/d2939bee28d7846c5bf1ee96be695d3f120827fb.png";
import { LessonCard } from "../shared/LessonCard";
import { LessonCardFullWidth } from "../shared/LessonCardFullWidth";
import { Screen, NavigationData } from "../../hooks/useNavigation";

type HomeProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white h-[2337px] overflow-clip relative w-[1440px]" data-name="Home">
      <div className="absolute bg-[#1f60d8] h-[320px] left-0 overflow-clip rounded-[8px] top-[80px] w-[1440px]" data-name="Daily Streak">
        {/* Zap Meter - Daily Lightning Ratings */}
        <div className="absolute contents left-[710px] top-[110px]" data-name="Zap Meter">
          <div className="absolute contents left-[710px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[740px] not-italic text-[#face55] text-[20px] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">M</p>
            </div>
            <div className="absolute left-[710px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, #FACE55)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[797px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[827px] not-italic text-[#face55] text-[20px] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">T</p>
            </div>
            <div className="absolute left-[797px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, #FACE55)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[884px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[914px] not-italic text-[#face55] text-[20px] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">w</p>
            </div>
            <div className="absolute left-[884px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, #FACE55)" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[971px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1001px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">T</p>
            </div>
            <div className="absolute left-[971px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1058px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1088px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">F</p>
            </div>
            <div className="absolute left-[1058px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1145px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1175px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">S</p>
            </div>
            <div className="absolute left-[1145px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[1232px] top-[110px]">
            <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1262px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
              <p className="leading-[32px] whitespace-pre">S</p>
            </div>
            <div className="absolute left-[1232px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
              <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                  <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Streak Content */}
        <div className="absolute contents left-[161px] top-[63px]" data-name="Streak Info">
          <div className="absolute contents left-[161px] top-[174px]" data-name="Weekly Stats">
            <div className="absolute contents left-[161px] top-[220px]" data-name="Longest Streak">
              <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[205px] not-italic text-[18px] text-nowrap text-white top-[236px] translate-y-[-50%]">
                <p className="leading-[32px] whitespace-pre">
                  <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-white">Longest Streak:</span> 4 Days
                </p>
              </div>
              <div className="absolute left-[161px] size-[35px] top-[221px]" data-name="Solid/Status/Fire">
                <div className="absolute inset-[8.36%_21.88%_12.2%_21.88%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 28">
                    <path d={svgPaths.p187cb800} fill="var(--fill-0, #F4D35E)" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[161px] top-[174px]">
              <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[206.99px] not-italic text-[18px] text-nowrap text-white top-[194px] translate-y-[-50%]">
                <p className="leading-[32px] whitespace-pre">
                  <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-white">Lessons Completed:</span> 80
                </p>
              </div>
              <div className="absolute inset-[54.38%_86.39%_34.28%_11.18%]" data-name="Solid/Status/University">
                <div className="absolute inset-[12.5%_6.67%_12.25%_5.18%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 28">
                    <path clipRule="evenodd" d={svgPaths.p1803d900} fill="var(--fill-0, #F4D35E)" fillRule="evenodd" id="Icon" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[19.69%_71.88%_70.31%_11.18%] justify-center leading-[0] not-italic text-[40px] text-nowrap text-white">
            <p className="leading-[32px] whitespace-pre">Daily Streak</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.13%_59.1%_53.75%_11.32%] justify-center leading-[0] not-italic text-[18px] text-nowrap text-white">
            <p className="leading-[26px] whitespace-pre">Well done! You completed 5 lessons this week!</p>
          </div>
        </div>
      </div>
      
      {/* Nav Bar */}
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
        <div className="absolute bg-white inset-0" data-name="Background" />
        
        {/* Logo */}
        <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
          <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
            <p className="leading-[21.568px]">Gopele</p>
          </div>
          <div className="absolute contents left-[78px] top-[19px]">
            <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                <g id="Frame 2">
                  <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
                <g id="Group 12">
                  <g id="svgg">
                    <path clipRule="evenodd" d={svgPaths.p3bfb200} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
                  </g>
                  <rect fill="var(--fill-0, #1F60D8)" height="27.2021" id="Rectangle 1" width="28.9726" x="5.66272" y="5.20796" />
                  <path d={svgPaths.p1e47b880} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="absolute inset-[15%_4%_15%_93%]" data-name="Profile">
          <img alt="" className="block max-w-none size-full" height="56" src={img} width="56" />
        </div>

        {/* Nav Links - Expanded for more space */}
        <div className="absolute contents" data-name="Nav Links">
          {/* Home active indicator - 6% width, centered under Home */}
          <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_53%_32.85%_41%] rounded-[8.478px]" />
          
          {/* Home - left: 40%, width: 8%, right: 52% */}
          <button 
            onClick={() => onNavigate('home')} 
            className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_52%_27.55%_40%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center cursor-pointer"
          >
            Home
          </button>
          
          {/* Learn - left: 50%, width: 8%, right: 42% */}
          <button 
            onClick={() => onNavigate('subject', { subjectName: 'Space' })}
            className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_42%_27.55%_50%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center cursor-pointer hover:text-[#333333] transition-colors"
          >
            Learn
          </button>
          
          {/* AI Mentor - left: 60%, width: 12%, right: 28% */}
          <button 
            onClick={() => onNavigate('aiMentor')} 
            className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_28%_27.55%_60%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center cursor-pointer hover:text-[#333333] transition-colors"
          >
            AI Mentor
          </button>
          
          {/* Dashboard - left: 74%, width: 15%, right: 11% */}
          <button
            onClick={() => onNavigate('dashboard')}
            className="absolute inset-[28%_11%_auto_74%] bg-[#1f60d8] hover:bg-[#1850b8] text-white px-4 py-2.5 rounded-lg transition-colors font-['Poppins:SemiBold',_sans-serif] text-[16px] flex items-center gap-2 justify-center"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Dashboard
          </button>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="absolute contents left-[161px] top-[1076px]" data-name="Continue Learning">
        <button 
          onClick={() => onNavigate('lesson', { lessonId: 'geometry-07', lessonName: 'Composite Polygons' })}
          className="cursor-pointer"
        >
          <LessonCardFullWidth className="absolute bg-[#1f60d8] h-[341px] left-[161px] overflow-clip rounded-[8px] top-[1150px] w-[1120px] hover:opacity-90 transition-opacity" />
        </button>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[161px] not-italic text-[32px] text-black top-[1113px] translate-y-[-50%] w-[484px]">
          <p className="leading-[42px]">Continue Learning</p>
        </div>
      </div>

      {/* Pick a Subject */}
      <div className="absolute contents left-[159px] top-[480px]" data-name="Recommend Topics">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[159px] not-italic text-[32px] text-black top-[517px] translate-y-[-50%] w-[484px]">
          <p className="leading-[42px]">Pick a Subject</p>
        </div>
        <div className="absolute contents left-[161px] top-[564px]" data-name="Card Group">
          <button 
            onClick={() => onNavigate('subject', { subjectId: 'science', subjectName: 'Science' })}
            className="absolute bg-[#1f60d8] h-[432px] left-[161px] overflow-clip rounded-[8px] top-[564px] w-[358px] cursor-pointer hover:opacity-90 transition-opacity" 
            data-name="Subject Card"
          >
            <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
              <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">Stretch your analytic muscles with truth-tellers, logical robots, and more!</p>
              <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
                <p className="leading-[32px]">Science</p>
              </div>
            </div>
            <div className="absolute h-[296px] left-0 top-0 w-[358px]" data-name="unsplash:Lvy_S3ELzIs">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
            </div>
          </button>
          
          <button 
            onClick={() => onNavigate('subject', { subjectId: 'english', subjectName: 'English' })}
            className="absolute bg-[#1f60d8] h-[432px] left-[543px] overflow-clip rounded-[8px] top-[564px] w-[358px] cursor-pointer hover:opacity-90 transition-opacity" 
            data-name="Subject Card"
          >
            <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
              <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">Start your algebra journey here with an introduction to variables and equations.</p>
              <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
                <p className="leading-[32px]">English</p>
              </div>
            </div>
            <div className="absolute h-[296px] left-0 top-0 w-[358px]" data-name="unsplash:dvHkp6FzfIM">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
            </div>
          </button>

          <button 
            onClick={() => onNavigate('subject', { subjectId: 'mathematics', subjectName: 'Mathematics' })}
            className="absolute bg-[#1f60d8] h-[432px] left-[925px] overflow-clip rounded-[8px] top-[564px] w-[358px] cursor-pointer hover:opacity-90 transition-opacity" 
            data-name="Subject Card"
          >
            <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
              <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">Build a foundation for geometry with angles, triangles, and polygons.</p>
              <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
                <p className="leading-[32px]">Mathematics</p>
              </div>
            </div>
            <div className="absolute h-[296px] left-0 top-0 w-[358px]" data-name="unsplash:NA72e-F7dRc">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5} />
            </div>
          </button>
        </div>
      </div>

      {/* Recommended Topics */}
      <div className="absolute contents left-[159px] top-[1571px]" data-name="Recommend Topics">
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[160px] not-italic text-[32px] text-black top-[1608px] translate-y-[-50%] w-[484px]">
          <p className="leading-[42px]">Recommended Topics</p>
        </div>
        <div className="absolute contents left-[161px] top-[1655px]" data-name="Card Group">
          <LessonCard className="absolute bg-[#1f60d8] h-[543px] left-[161px] overflow-clip rounded-[8px] top-[1655px] w-[358px]" />
          
          <div className="absolute bg-[#1f60d8] h-[543px] left-[543px] overflow-clip rounded-[8px] top-[1655px] w-[358px]" data-name="Lesson Card">
            <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">Science</p>
                </div>
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">lesson 03 / 08</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
                  <p className="leading-[32px]">Earth-Moon Architectures</p>
                </div>
                <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">Explore cislunar space infrastructure, the Lunar Gateway, and sustainable lunar operations in this comprehensive lesson.</p>
              </div>
              <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
                <button className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px] cursor-pointer hover:bg-[#f9d977] transition-colors">
                  <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[#232323] text-[16px] text-nowrap whitespace-pre">Start</p>
                </button>
                <button className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px] cursor-pointer hover:bg-gray-100 transition-colors">
                  <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[#232323] text-[16px] text-nowrap whitespace-pre">Save</p>
                </button>
              </div>
            </div>
            <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:DYHx6h3lMdY">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={img1} />
              </div>
            </div>
          </div>

          <div className="absolute bg-[#1f60d8] h-[543px] left-[925px] overflow-clip rounded-[8px] top-[1655px] w-[358px]" data-name="Lesson Card">
            <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">Mathematics</p>
                </div>
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">lesson 12 / 20</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
                <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
                  <p className="leading-[32px]">Advanced Calculus</p>
                </div>
                <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">Master integration techniques and explore multivariable calculus. Build advanced problem-solving skills for complex mathematical challenges.</p>
              </div>
              <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
                <button className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px] cursor-pointer hover:bg-[#f9d977] transition-colors">
                  <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[#232323] text-[16px] text-nowrap whitespace-pre">Start</p>
                </button>
                <button className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px] cursor-pointer hover:bg-gray-100 transition-colors">
                  <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[#232323] text-[16px] text-nowrap whitespace-pre">Save</p>
                </button>
              </div>
            </div>
            <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:xVptEZzgVfo">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={img2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
