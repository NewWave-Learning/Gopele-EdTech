import { Screen } from '../../../hooks/useNavigation';
import svgPaths from "../../../imports/svg-wjke1rjq0o";
import { imgPlantLeft } from "../../../imports/svg-z3afk";
import imgAsset22X1 from "figma:asset/36e81eae8e19c0bef954442fd77e1fc1acd52b8e.png";
import imgImage2 from "figma:asset/5f903bfe134f0da1dae546fc6d15153372ccfd39.png";
import imgImage3 from "figma:asset/d06ba5f33cfacea98850a8138b56026b583c1320.png";
import imgImage4 from "figma:asset/b1716d9057bd1e76cf49ab71ddb4ba906c369068.png";
import imgLaptop1 from "figma:asset/7cca158ae07b4705c72ffea5507003723362bbef.png";
import { toast } from 'sonner@2.0.3';

type LandingPageMobileProps = {
  onNavigate: (screen: Screen, data?: any) => void;
};

function DailyStreak() {
  return <div className="absolute bg-[#1f60d8] h-[628px] left-0 top-[80px] w-[375px]" data-name="Daily Streak" />;
}

function Frame2() {
  return (
    <div className="absolute inset-[26.25%_85.08%_26.25%_4.8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 2">
          <path d={svgPaths.p23915500} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[27.27%_85.83%_32.13%_6.38%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p27fdb840} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.7753" y="4.39156" />
          <path d={svgPaths.pd8a3700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[26.25%_85.08%_26.25%_4.8%]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[26.25%_61.25%_26.25%_4.8%]">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[38.6%_61.25%_38.67%_17.25%] justify-center leading-[0] not-italic text-[#232323] text-[22.395px]">
        <p className="leading-[18.187px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function NavBarMobile({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
      <Group14 />
      <button 
        onClick={onGetStarted}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[20%_3.73%_20%_54.93%] items-center justify-center px-[12px] py-[7px] rounded-[8px] cursor-pointer hover:bg-[#face55] transition-colors" 
        data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
      </button>
    </div>
  );
}

function WalleIntro({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="absolute contents left-[21px] top-[115px]" data-name="Walle Intro">
      <button 
        onClick={onGetStarted}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[21px] px-[12px] py-[7px] rounded-[8px] top-[283px] cursor-pointer hover:bg-[#face55] transition-colors" 
        data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
      </button>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] left-[21px] top-[115px] right-[39px] justify-center not-italic text-[40px] text-white">
        <p className="leading-[1.215]">Improve your students' results with A.I</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[1101px]">
      <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[336px]">Identify Areas for Improvement</p>
      <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Gopele enables teachers to identify areas where individual students require assistance—helping teachers cater to their student's individual needs. Our A.I. identifies and reports each student's problem areas so teachers can swiftly respond and assist their students</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[1716px]">
      <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[282px]">By Teachers, For Teachers</p>
      <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Gopele's curriculum is designed by teachers and curriculum development experts with years of experience. The content design has taken a holistic approach to cater to various education industry stakeholders—from students to district managers.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[2330px]">
      <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[282px]">Gamification at the Core</p>
      <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Gopele's curriculum considers how students learn. It takes a fun, bite-sized approach to deliver learning material to students. Additionally, many other gamified components, like daily streaks, are incorporated to improve students learning experiences.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[3027px]">
      <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[282px]">Team Up with GoBOT!</p>
      <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">GoBOT is Gopele's personalized learning buddy for students. GoBOT ensures that content is delivered to students using spaced repetition to improve the intake of information over a period—instilling mastery over information cramming.</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[3878px]">
      <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[351px]">Content Recommendation System</p>
      <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Using GoBOT's A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute h-[426px] left-[-26px] top-[3472px] w-[331.773px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 426">
        <g id="Group 20">
          <path d={svgPaths.p2f238700} fill="var(--fill-0, #333333)" id="Combined Shape" />
          <g id="Combined Shape + Combined Shape Mask">
            <g id="Mask"></g>
            <mask height="138" id="mask0_2095_639" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="138" x="0" y="288">
              <path d={svgPaths.p2d27cf80} fill="var(--fill-0, white)" id="Mask_2" />
            </mask>
            <g mask="url(#mask0_2095_639)">
              <path d={svgPaths.p661bf00} fill="var(--fill-0, #333333)" id="Combined Shape_2" />
              <path d={svgPaths.p20995380} fill="var(--fill-0, #333333)" id="Combined Shape_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 17">
          <path d={svgPaths.p1842e100} fill="var(--fill-0, #6483F6)" id="Oval" />
          <path d={svgPaths.p18eb1100} fill="var(--fill-0, white)" id="Combined Shape" />
        </g>
      </svg>
    </div>
  );
}

function Features() {
  return (
    <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3490.06px] w-[321.616px]" data-name="features">
      <div className="absolute bg-[#fdf0e9] inset-0 rounded-[4.514px]" data-name="Rectangle" />
      <Group17 />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[35.86%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.083px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Spaced Repetition
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.
      </p>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 18">
          <path d={svgPaths.p1842e100} fill="var(--fill-0, #F07867)" id="Oval" />
          <path clipRule="evenodd" d={svgPaths.p2f2d7a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Features1() {
  return (
    <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3598.39px] w-[321.616px]" data-name="features">
      <div className="absolute bg-[#face55] inset-0 rounded-[4.514px]" data-name="Rectangle" />
      <Group18 />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[28.4%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.084px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Recommended Topics
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Some distant orb has power to raise and purify our thoughts like a strain of sacred music.
      </p>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 19">
          <path d={svgPaths.p1842e100} fill="var(--fill-0, #EEA1E2)" id="Oval" />
          <path clipRule="evenodd" d={svgPaths.p285019f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
        </g>
      </svg>
    </div>
  );
}

function Features2() {
  return (
    <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3706.72px] w-[321.616px]" data-name="features">
      <div className="absolute bg-[#fdf0e9] inset-0 rounded-[4.514px]" data-name="Rectangle" />
      <Group19 />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[24.05%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.084px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Analytics (Coming Soon)
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Distant orb has power to raise and purify our thoughts like a strain of sacred music.
      </p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[-26px] top-[3472px]">
      <Group20 />
      <Features />
      <Features1 />
      <Features2 />
      <div className="absolute left-[13.5px] size-[19.748px] top-[3618.14px]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p336d5a40} id="Oval" stroke="var(--stroke-0, #F07867)" strokeWidth="2.25695" />
        </svg>
      </div>
      <div className="absolute left-[269.66px] size-[10.156px] top-[3702.21px]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <path d={svgPaths.p2b62600} fill="var(--fill-0, #6382F5)" id="Oval" />
        </svg>
      </div>
      <div className="absolute left-[333.42px] size-[23.134px] top-[3550.99px]" data-name="Polygon">
        <div className="absolute inset-[-14.63%_-7.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 30">
            <path d={svgPaths.p7a5c980} id="Polygon" stroke="var(--stroke-0, #6380F2)" strokeLinejoin="round" strokeWidth="3.38543" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PlantLeft() {
  return (
    <div className="absolute h-[202.436px] left-[-180.92px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-329.082px_-292.186px] mask-size-[1436px_494.622px] top-[292.19px] w-[106.704px]" data-name="Plant Left" style={{ maskImage: `url('${imgPlantLeft}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 203">
        <g id="Plant Left" opacity="0.499558">
          <path clipRule="evenodd" d={svgPaths.p1e4b970} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf" opacity="0.254767" />
          <path clipRule="evenodd" d={svgPaths.p9f55800} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_2" opacity="0.248489" />
          <path clipRule="evenodd" d={svgPaths.p324c5400} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_3" opacity="0.251628" />
          <path clipRule="evenodd" d={svgPaths.p7691e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_4" opacity="0.498396" />
          <path clipRule="evenodd" d={svgPaths.p378eef00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_5" opacity="0.497396" />
          <path clipRule="evenodd" d={svgPaths.p1a89b400} fill="var(--fill-0, white)" fillRule="evenodd" id="Base" />
        </g>
      </svg>
    </div>
  );
}

function Light() {
  return (
    <div className="absolute bottom-[-0.23px] h-[52.923px] left-[calc(50%+0.366px)] translate-x-[-50%] w-[72.525px]" data-name="Light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 53">
        <g id="Light">
          <path clipRule="evenodd" d={svgPaths.p3c1f4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp Light" opacity="0.504999" />
          <path clipRule="evenodd" d={svgPaths.p362f6080} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp" />
        </g>
      </svg>
    </div>
  );
}

function HangingLamp() {
  return (
    <div className="absolute h-[102.714px] left-[476.25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-986.252px_0px] mask-size-[1436px_494.622px] opacity-[0.251] overflow-clip top-0 w-[73.794px]" data-name="Hanging Lamp" style={{ maskImage: `url('${imgPlantLeft}')` }}>
      <Light />
      <div className="absolute bg-white bottom-[30.15px] left-[calc(50%+0.856px)] top-0 translate-x-[-50%] w-[4.9px]" data-name="Wire" />
    </div>
  );
}

function CombinedShapeCombinedShapeMask1() {
  return (
    <div className="absolute left-[103.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-613.293px_-406.866px] mask-size-[1436px_494.622px] size-[243.322px] top-[406.87px]" data-name="Combined Shape + Combined Shape Mask" style={{ maskImage: `url('${imgPlantLeft}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 244">
        <g id="Combined Shape + Combined Shape Mask" opacity="0.501907">
          <g id="Mask"></g>
          <mask height="244" id="mask0_2095_490" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="244" x="0" y="0">
            <path d={svgPaths.p2bc58380} fill="var(--fill-0, white)" id="Mask_2" />
          </mask>
          <g mask="url(#mask0_2095_490)">
            <path d={svgPaths.p28798600} fill="var(--fill-0, white)" id="Combined Shape" />
            <path d={svgPaths.p323a9af0} fill="var(--fill-0, white)" id="Combined Shape_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Objects() {
  return (
    <div className="absolute h-[249.305px] left-[-258.7px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-251.301px_-100.719px] mask-size-[1436px_494.622px] top-[100.72px] w-[961.324px]" data-name="objects" style={{ maskImage: `url('${imgPlantLeft}')` }}>
      <div className="absolute bottom-0 left-0 right-[-0.33%] top-[-2.36%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 256">
          <g id="objects">
            <path d={svgPaths.p2db5d6f0} id="Oval" stroke="var(--stroke-0, #F07867)" strokeWidth="3.92025" />
            <path d={svgPaths.p3a9ee800} fill="var(--fill-0, #FACE55)" id="Oval_2" />
            <path d={svgPaths.pfe1a5f0} id="Polygon" stroke="var(--stroke-0, #79E6F8)" strokeLinejoin="round" strokeWidth="5.88037" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute contents left-[-510px] top-0" data-name="bg">
      <div className="absolute bg-[#1f60d8] h-[494.622px] left-[-510px] top-0 w-[1436px]" data-name="Rectangle" />
      <div className="absolute left-[-734.38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.375px_272.242px] mask-size-[1436px_494.622px] size-[447.753px] top-[-272.24px]" data-name="Oval" style={{ maskImage: `url('${imgPlantLeft}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
          <path d={svgPaths.p2f3177b0} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="78.4049" />
        </svg>
      </div>
      <div className="absolute left-[702.62px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1212.62px_-350.025px] mask-size-[1436px_494.622px] size-[447.753px] top-[350.02px]" data-name="Oval" style={{ maskImage: `url('${imgPlantLeft}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
          <path d={svgPaths.p87e5d00} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="39.2025" />
        </svg>
      </div>
      <PlantLeft />
      <HangingLamp />
      <CombinedShapeCombinedShapeMask1 />
      <Objects />
    </div>
  );
}

function Frame26({ onContact }: { onContact: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[103px] top-[400px]">
      <button 
        onClick={onContact}
        className="h-[48px] relative shrink-0 w-[170px] cursor-pointer hover:opacity-80 transition-opacity" 
        data-name="Dark/Button/Primary/Text"
      >
        <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contact
        </p>
      </button>
    </div>
  );
}

function Frame24({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="absolute h-[383px] left-[46px] overflow-clip top-[6px] w-[255px]">
      <button 
        onClick={onGetStarted}
        className="absolute h-[48px] left-[57px] top-[314px] w-[170px] cursor-pointer hover:bg-[#f4d35e] transition-colors" 
        data-name="Dark/Button/Primary/Text"
      >
        <div className="absolute bg-[#face55] inset-0 rounded-[8px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[#232323] text-[18px] text-center text-nowrap top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Get Started
        </p>
      </button>
    </div>
  );
}

function Frame25({ onGetStarted, onContact }: { onGetStarted: () => void; onContact: () => void }) {
  return (
    <div className="absolute h-[581px] left-0 overflow-clip top-[4326px] w-[375px]">
      <Bg />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[1.24] left-[189px] not-italic text-[36px] text-center text-white top-[23px] translate-x-[-50%] w-[360px]">Ready to improve your student's results?</p>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[164px] justify-center leading-[0] left-[188px] not-italic text-[14px] text-center text-white top-[221px] translate-x-[-50%] translate-y-[-50%] w-[320px]">
        <p className="leading-[normal]">Using GoBOT's A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
      </div>
      <Frame26 onContact={onContact} />
      <Frame24 onGetStarted={onGetStarted} />
    </div>
  );
}

function Frame28({ onGetStarted, onContact }: { onGetStarted: () => void; onContact: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[103px] top-[246px]">
      <button 
        onClick={onGetStarted}
        className="h-[48px] relative shrink-0 w-[170px] cursor-pointer hover:bg-[#1850b8] transition-colors" 
        data-name="Dark/Button/Primary/Text"
      >
        <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Get Started
        </p>
      </button>
      <button 
        onClick={onContact}
        className="h-[48px] relative shrink-0 w-[170px] cursor-pointer hover:opacity-80 transition-opacity" 
        data-name="Dark/Button/Primary/Text"
      >
        <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contact
        </p>
      </button>
    </div>
  );
}

function DarkFieldDefault() {
  return (
    <div className="absolute h-[76px] left-[42px] top-[883px] w-[201px]" data-name="Dark/Field/Default">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-0 text-[12px] text-nowrap text-white top-0 uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Email
      </p>
      <div className="absolute bg-white bottom-0 left-0 right-0 rounded-[8px] top-[28px]" data-name="Rectangle" />
      <input 
        type="email"
        placeholder="Your email address"
        className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] left-[16px] text-[16px] text-[#232323] placeholder:text-[rgba(51,51,51,0.5)] text-nowrap top-[37px] bg-transparent border-none outline-none w-[calc(100%-32px)]" 
        style={{ fontVariationSettings: "'opsz' 14" }}
      />
    </div>
  );
}

function Frame27({ onGetStarted, onContact, onSubmit }: { onGetStarted: () => void; onContact: () => void; onSubmit: () => void }) {
  return (
    <div className="absolute bg-[#232323] h-[1195px] left-0 overflow-clip top-[4907px] w-[375px]">
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[48px] left-[40px] text-[40px] text-nowrap text-white top-[26px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Learning Now!
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] left-[40px] text-[16px] text-[rgba(255,255,255,0.5)] top-[91px] w-[279px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        By the same illusion which lifts the horizon of the sea to the level of the spectator.
      </p>
      <Frame28 onGetStarted={onGetStarted} onContact={onContact} />
      <div className="absolute bg-white h-px left-[18px] opacity-[0.195] top-[434px] w-[339px]" data-name="Rectangle" />
      <div className="absolute bg-white h-px left-[18px] opacity-[0.195] top-[999px] w-[339px]" data-name="Rectangle" />
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[48px] left-[40px] text-[40px] text-nowrap text-white top-[478px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Gopele
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal h-[63px] leading-[26px] left-[41px] text-[16px] text-[rgba(255,255,255,0.5)] top-[559px] w-[270px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</p>
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] left-[41px] text-[#f4d35e] text-[16px] text-nowrap top-[655px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] left-[41px] text-[16px] text-nowrap text-white top-[719px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Email: education@edu.com
      </p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] left-[41px] text-[16px] text-nowrap text-white top-[767px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Phone: +1 (234) 567-89-00
      </p>
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[32px] left-[42px] text-[#f4d35e] text-[16px] text-nowrap top-[842px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Subscribe
      </p>
      <DarkFieldDefault />
      <button 
        onClick={onSubmit}
        className="absolute h-[48px] left-[253px] top-[911px] w-[100px] cursor-pointer hover:bg-[#1850b8] transition-colors" 
        data-name="Dark/Button/Primary/Text"
      >
        <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Submit
        </p>
      </button>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] left-[20px] text-[16px] text-nowrap text-white top-[1046px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>{`Privacy Policy		Terms & Conditions`}</p>
      <p className="absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[32px] left-[139px] text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap text-right top-[1089px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2022 Gopele
      </p>
    </div>
  );
}

export function LandingPageMobile({ onNavigate }: LandingPageMobileProps) {
  const handleGetStarted = () => {
    onNavigate('login');
  };

  const handleContact = () => {
    toast.info('Contact feature coming soon!');
  };

  const handleSubmit = () => {
    toast.success('Thank you for subscribing!');
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen overflow-x-hidden" data-name="Landing Page - Mobile">
      <DailyStreak />
      <NavBarMobile onGetStarted={handleGetStarted} />
      <WalleIntro onGetStarted={handleGetStarted} />
      <div className="absolute h-[318px] left-[13px] top-[357px] w-[348.577px]" data-name="Asset 2@2x 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="AI Learning illustration" className="absolute h-[118.26%] left-[-65.56%] max-w-none top-[-9.13%] w-[165.56%]" src={imgAsset22X1} />
        </div>
      </div>
      <div className="absolute h-[320.927px] left-[-30px] top-[732px] w-[435px]" data-name="image 2">
        <img alt="Students learning" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <div className="absolute h-[294px] left-[-3px] top-[1422px] w-[382px]" data-name="image 3">
        <img alt="Teacher dashboard" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[281px] left-[4px] top-[2049px] w-[368px]" data-name="image 4">
        <img alt="Gamification features" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <div className="absolute h-[326px] left-[22px] top-[2673px] w-[332px]" data-name="Laptop 1">
        <img alt="Platform overview" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptop1} />
      </div>
      <Group11 />
      <Frame25 onGetStarted={handleGetStarted} onContact={handleContact} />
      <Frame27 onGetStarted={handleGetStarted} onContact={handleContact} onSubmit={handleSubmit} />
    </div>
  );
}
