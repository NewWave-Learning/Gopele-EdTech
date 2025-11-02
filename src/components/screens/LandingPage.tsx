import svgPaths from "../../imports/svg-2dnbiahxic";
import imgImage2 from "figma:asset/5f903bfe134f0da1dae546fc6d15153372ccfd39.png";
import imgImage3 from "figma:asset/d06ba5f33cfacea98850a8138b56026b583c1320.png";
import imgImage4 from "figma:asset/b1716d9057bd1e76cf49ab71ddb4ba906c369068.png";
import imgLaptop1 from "figma:asset/7cca158ae07b4705c72ffea5507003723362bbef.png";
import imgAsset22X1 from "figma:asset/36e81eae8e19c0bef954442fd77e1fc1acd52b8e.png";
import { imgOval } from "../../imports/svg-wo5f8";
import { Screen, NavigationData } from "../../hooks/useNavigation";

type LandingPageProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="bg-white h-[6473px] overflow-clip relative w-[1440px]" data-name="Landing Page">
      {/* Navigation Bar */}
      <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
        <div className="absolute bg-white inset-0" data-name="Background" />
        <div className="absolute contents left-[75px] top-[17px]" data-name="Logo 2">
          <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[35.89%_84.31%_37.15%_9.05%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
            <p className="leading-[21.568px]">Gopele</p>
          </div>
          <div className="absolute contents left-[75px] top-[17px]">
            <div className="absolute h-[45.065px] left-[75px] top-[17px] w-[45.024px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                <g id="Frame 2">
                  <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[22.46%_91.9%_29.4%_5.7%]">
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
        <div 
          onClick={() => onNavigate('login')}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[20%_6.74%_20%_82.5%] items-center justify-center px-[12px] py-[7px] rounded-[8px] cursor-pointer hover:bg-[#f9d977] transition-colors" 
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="absolute bg-[#1f60d8] h-[841px] left-0 overflow-clip rounded-[8px] top-[80px] w-[1440px]" data-name="Daily Streak">
        <div className="absolute h-[676px] left-[699px] top-[64px] w-[741px]" data-name="Asset 2@2x 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[118.26%] left-[-65.56%] max-w-none top-[-9.13%] w-[165.56%]" src={imgAsset22X1} />
          </div>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[98px] not-italic text-[72px] text-white top-[372px] translate-y-[-50%] w-[546px]">
          <p className="leading-[80px]">Improve your students' results with A.I</p>
        </div>
        <div 
          onClick={() => onNavigate('login')}
          className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[62.9%_75.97%_29.84%_6.81%] items-center justify-center px-[12px] py-[7px] rounded-[8px] cursor-pointer hover:bg-[#f9d977] transition-colors" 
          data-name="Button"
        >
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[22px] text-nowrap whitespace-pre">Get Started</p>
        </div>
      </div>

      {/* Feature Section 1 - Help Your Learners' Achieve Mastery */}
      <div className="absolute h-[768px] left-0 overflow-clip top-[921px] w-[1440px]">
        <div className="absolute contents left-[39px] top-[99px]">
          <div className="absolute h-[569px] left-[39px] top-[99px] w-[771.251px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
          <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[64px] left-[810px] not-italic text-[#333333] text-[50px] top-[270px] w-[488px]">
            Help Your Learners' Achieve Mastery
          </p>
        </div>
        <p className="absolute font-['Poppins:Regular',_sans-serif] h-[80px] leading-[32px] left-[810px] not-italic text-[#333333] text-[20px] top-[416px] w-[560px]">
          GoPele's AI system sends alerts of learners' problem areas so facilitators can assist learners swiftly.
        </p>
      </div>

      {/* Feature Section 2 - By Teachers, For Teachers */}
      <div className="absolute contents left-[162px] top-[1769px]">
        <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[162px] not-italic text-[#333333] top-[1930px]">
          <div className="absolute leading-[64px] left-[162px] text-[50px] top-[1930px] w-[415px]">
            <p className="mb-0">By Teachers, </p>
            <p>For Teachers</p>
          </div>
          <p className="absolute h-[110px] leading-[32px] left-[162px] text-[20px] top-[2076px] w-[520px]">
            GoPele's curriculum is designed holistically, by teachers, to cater to all learners; from students to employees
          </p>
        </div>
        <div className="absolute h-[577.643px] left-[632px] top-[1769px] w-[750.328px]" data-name="image 3">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
        </div>
      </div>

      {/* Feature Section 3 - Gamification at the Core */}
      <div className="absolute contents left-[80px] top-[2632px]">
        <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[810px] not-italic text-[#333333] top-[2769px]">
          <p className="absolute leading-[64px] left-[810px] text-[50px] top-[2769px] w-[415px]">Gamification at the Core</p>
          <p className="absolute h-[105px] leading-[32px] left-[810px] text-[20px] top-[2915px] w-[517px]">
            A fun, bite-sized approach to delivering learning material, with daily streaks to enhance the learning experience
          </p>
        </div>
        <div className="absolute h-[525.664px] left-[80px] top-[2632px] w-[689px]" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
        </div>
      </div>

      {/* Feature Section 4 - Team Up with GoBOT! */}
      <div className="absolute contents left-[162px] top-[3494px]">
        <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[162px] not-italic text-[#333333] top-[3588px]">
          <p className="absolute leading-[64px] left-[162px] text-[50px] top-[3588px] w-[415px]">Team Up with GoBOT!</p>
          <p className="absolute h-[123px] leading-[32px] left-[162px] text-[20px] top-[3734px] w-[519px]">
            GoBOT! is your learners' education buddy, ensuring content is delivered to learners using spaced repetition for improved knowledge mastery.
          </p>
        </div>
        <div className="absolute h-[494px] left-[778px] top-[3494px] w-[502px]" data-name="Laptop 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptop1} />
        </div>
      </div>

      {/* Feature Section 5 - Content Recommendation System */}
      <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[808px] not-italic text-[#333333] top-[4481px]">
        <p className="absolute leading-[64px] left-[808px] text-[50px] top-[4481px] w-[529px]">Content Recommendation System</p>
        <p className="absolute h-[71px] leading-[32px] left-[808px] text-[20px] top-[4687px] w-[470px]">
          Using GoBOT's A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.
        </p>
      </div>

      <div className="absolute contents left-[71px] top-[4402px]">
        <div className="absolute h-[755px] left-[71px] top-[4402px] w-[588px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 588 755">
            <g id="Group 20">
              <path d={svgPaths.p9296b00} fill="var(--fill-0, #333333)" id="Combined Shape" />
              <g id="Combined Shape + Combined Shape Mask">
                <g id="Mask"></g>
                <mask height="244" id="mask0_1_3366" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="244" x="0" y="511">
                  <path d={svgPaths.p27b6d980} fill="var(--fill-0, white)" id="Mask_2" />
                </mask>
                <g mask="url(#mask0_1_3366)">
                  <path d={svgPaths.p1d259bf0} fill="var(--fill-0, #333333)" id="Combined Shape_2" />
                  <path d={svgPaths.p147a8380} fill="var(--fill-0, #333333)" id="Combined Shape_3" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        {/* Feature Card 1 - Spaced Repetition */}
        <div className="absolute h-[176px] left-[159px] overflow-clip top-[4434px] w-[570px]" data-name="features">
          <div className="absolute bg-[#fdf0e9] inset-0 rounded-[8px]" data-name="Rectangle" />
          <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 112">
              <g id="Group 17">
                <path d={svgPaths.p39c9cb70} fill="var(--fill-0, #6483F6)" id="Oval" />
                <path d={svgPaths.pad64900} fill="var(--fill-0, white)" id="Combined Shape" />
              </g>
            </svg>
          </div>
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[28.07%] right-[35.97%] text-[#333333] text-[24px] text-nowrap top-[calc(50%-48px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Sapced Repetition
          </p>
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[32px] text-[16px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.
          </p>
        </div>

        {/* Feature Card 2 - Recommended Topics */}
        <div className="absolute h-[176px] left-[159px] overflow-clip top-[4626px] w-[570px]" data-name="features">
          <div className="absolute bg-[#face55] inset-0 rounded-[8px]" data-name="Rectangle" />
          <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 112">
              <g id="Group 18">
                <path d={svgPaths.p39c9cb70} fill="var(--fill-0, #F07867)" id="Oval" />
                <path clipRule="evenodd" d={svgPaths.p18bd50f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
              </g>
            </svg>
          </div>
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[28.07%] right-[28.42%] text-[#333333] text-[24px] text-nowrap top-[calc(50%-48px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Recommended Topics
          </p>
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[32px] text-[16px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Some distant orb has power to raise and purify our thoughts like a strain of sacred music.
          </p>
        </div>

        {/* Feature Card 3 - Analytics */}
        <div className="absolute h-[176px] left-[159px] overflow-clip top-[4818px] w-[570px]" data-name="features">
          <div className="absolute bg-[#fdf0e9] inset-0 rounded-[8px]" data-name="Rectangle" />
          <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 112">
              <g id="Group 19">
                <path d={svgPaths.p39c9cb70} fill="var(--fill-0, #EEA1E2)" id="Oval" />
                <path clipRule="evenodd" d={svgPaths.p4602d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
              </g>
            </svg>
          </div>
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[28.07%] right-[24.04%] text-[#333333] text-[24px] text-nowrap top-[calc(50%-48px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Analytics (Coming Soon)
          </p>
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[32px] text-[16px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Distant orb has power to raise and purify our thoughts like a strain of sacred music.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-[141px] size-[35px] top-[4661px]" data-name="Oval">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
            <path d={svgPaths.pe29c900} id="Oval" stroke="var(--stroke-0, #F07867)" strokeWidth="4" />
          </svg>
        </div>
        <div className="absolute left-[595px] size-[18px] top-[4810px]" data-name="Oval">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p3896100} fill="var(--fill-0, #6382F5)" id="Oval" />
          </svg>
        </div>
        <div className="absolute left-[708px] size-[41px] top-[4542px]" data-name="Polygon">
          <div className="absolute inset-[-14.63%_-7.94%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 53">
              <path d={svgPaths.p30e4f280} id="Polygon" stroke="var(--stroke-0, #6380F2)" strokeLinejoin="round" strokeWidth="6" />
            </svg>
          </div>
        </div>
      </div>

      {/* CTA Section - Ready to improve your student's results? */}
      <div className="absolute bg-[#6483f6] h-[496px] left-0 top-[5322px] w-[1440px]" data-name="Rectangle" />
      <div className="absolute contents left-0 top-[5322px]" data-name="bg">
        <div className="absolute bg-[#1f60d8] h-[496px] left-0 top-[5322px] w-[1440px]" data-name="Rectangle" />
        <div className="absolute left-[-225px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[225px_273px] mask-size-[1440px_496px] size-[449px] top-[5049px]" data-name="Oval" style={{ maskImage: `url('${imgOval}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 449 449">
            <path d={svgPaths.p3a7d9f80} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="80" />
          </svg>
        </div>
        <div className="absolute left-[1216px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1216px_-351px] mask-size-[1440px_496px] size-[449px] top-[5673px]" data-name="Oval" style={{ maskImage: `url('${imgOval}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 449 449">
            <path d={svgPaths.p2b2abe00} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="40" />
          </svg>
        </div>
        <div className="absolute h-[203px] left-[330px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-330px_-293px] mask-size-[1440px_496px] top-[5615px] w-[107px]" data-name="Plant Left" style={{ maskImage: `url('${imgOval}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 203">
            <g id="Plant Left" opacity="0.499558">
              <path clipRule="evenodd" d={svgPaths.p2f9ae2c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf" opacity="0.254767" />
              <path clipRule="evenodd" d={svgPaths.p10ad6c12} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_2" opacity="0.248489" />
              <path clipRule="evenodd" d={svgPaths.p40a3c80} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_3" opacity="0.251628" />
              <path clipRule="evenodd" d={svgPaths.pd612d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_4" opacity="0.498396" />
              <path clipRule="evenodd" d={svgPaths.p109f88c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_5" opacity="0.497396" />
              <path clipRule="evenodd" d={svgPaths.p1dbf0ab2} fill="var(--fill-0, white)" fillRule="evenodd" id="Base" />
            </g>
          </svg>
        </div>
        <div className="absolute h-[103px] left-[989px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-989px_0px] mask-size-[1440px_496px] opacity-[0.251] overflow-clip top-[5322px] w-[74px]" data-name="Hanging Lamp" style={{ maskImage: `url('${imgOval}')` }}>
          <div className="absolute bottom-0 h-[53.999px] left-1/2 translate-x-[-50%] w-[74px]" data-name="Light">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 54">
              <g id="Light">
                <path clipRule="evenodd" d={svgPaths.p2a396d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp Light" opacity="0.504999" />
                <path clipRule="evenodd" d={svgPaths.p21530100} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp" />
              </g>
            </svg>
          </div>
          <div className="absolute bg-white bottom-[31px] left-[calc(50%+0.5px)] top-0 translate-x-[-50%] w-[5px]" data-name="Wire" />
        </div>
        <div className="absolute left-[615px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-615px_-408px] mask-size-[1440px_496px] size-[244px] top-[5730px]" data-name="Combined Shape + Combined Shape Mask" style={{ maskImage: `url('${imgOval}')` }}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 244">
            <g id="Combined Shape + Combined Shape Mask" opacity="0.501907">
              <g id="Mask"></g>
              <mask height="244" id="mask0_1_3604" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="244" x="0" y="0">
                <path d={svgPaths.p32b05900} fill="var(--fill-0, white)" id="Mask_2" />
              </mask>
              <g mask="url(#mask0_1_3604)">
                <path d={svgPaths.p3dd1f400} fill="var(--fill-0, white)" id="Combined Shape" />
                <path d={svgPaths.p140a600} fill="var(--fill-0, white)" id="Combined Shape_2" />
              </g>
            </g>
          </svg>
        </div>
        <div className="absolute h-[250px] left-[252px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-252px_-101px] mask-size-[1440px_496px] top-[5423px] w-[964px]" data-name="objects" style={{ maskImage: `url('${imgOval}')` }}>
          <div className="absolute bottom-0 left-0 right-[-0.34%] top-[-2.4%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 968 256">
              <g id="objects">
                <path d={svgPaths.p339bbbc0} id="Oval" stroke="var(--stroke-0, #F07867)" strokeWidth="4" />
                <path d={svgPaths.p1f1ec500} fill="var(--fill-0, #FACE55)" id="Oval_2" />
                <path d={svgPaths.pf1200} id="Polygon" stroke="var(--stroke-0, #79E6F8)" strokeLinejoin="round" strokeWidth="6" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[64px] left-[720px] not-italic text-[56px] text-center text-nowrap text-white top-[5447px] translate-x-[-50%] whitespace-pre">
        Ready to improve your student's results?
      </p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[69px] leading-[32px] left-[720px] not-italic text-[16px] text-center text-white top-[5541px] translate-x-[-50%] w-[838px]">
        Click <span className="font-['Poppins:Bold',_sans-serif]">Get Started</span> if you already have a student account. If not, click Contact, and we will set you up!
      </p>
      
      <button 
        onClick={() => onNavigate('login')}
        className="absolute h-[48px] left-[535px] top-[5642px] w-[170px] cursor-pointer hover:opacity-90 transition-opacity" 
        data-name="Dark/Button/Primary/Text"
      >
        <div className="absolute bg-[#face55] inset-0 rounded-[8px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[#232323] text-[18px] text-center text-nowrap top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Get Started
        </p>
      </button>
      
      <button className="absolute h-[48px] left-[735px] top-[5642px] w-[170px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Dark/Button/Primary/Text">
        <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        </div>
        <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contact
        </p>
      </button>

      {/* Footer */}
      <div className="absolute contents left-0 top-[5817px]">
        <div className="absolute bg-[#232323] h-[656px] left-0 top-[5817px] w-[1440px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[134px] text-[40px] text-nowrap text-white top-[5875px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Learning Now!
        </p>
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[134px] text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap top-[5940px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          By the same illusion which lifts the horizon of the sea to the level of the spectator.
        </p>
        <div className="absolute contents left-[935px] top-[5897px]">
          <button 
            onClick={() => onNavigate('login')}
            className="absolute h-[48px] left-[935px] top-[5897px] w-[170px] cursor-pointer hover:opacity-90 transition-opacity" 
            data-name="Dark/Button/Primary/Text"
          >
            <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Get Started
            </p>
          </button>
          <button className="absolute h-[48px] left-[1135px] top-[5897px] w-[170px] cursor-pointer hover:opacity-90 transition-opacity" data-name="Dark/Button/Primary/Text">
            <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Contact
            </p>
          </button>
        </div>
        <div className="absolute bg-white h-px left-[135px] opacity-[0.195] top-[6041px] w-[1170px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[134px] text-[40px] text-nowrap text-white top-[6099px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Gopele
        </p>
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal h-[63px] leading-[26px] left-[135px] text-[16px] text-[rgba(255,255,255,0.5)] top-[6180px] w-[270px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] left-[535px] text-[#f4d35e] text-[16px] text-nowrap top-[6116px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Contact
        </p>
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[535px] text-[16px] text-nowrap text-white top-[6180px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Email: education@edu.com
        </p>
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[535px] text-[16px] text-nowrap text-white top-[6228px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Phone: +1 (234) 567-89-00
        </p>
        <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] left-[935px] text-[#f4d35e] text-[16px] text-nowrap top-[6116px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Subscribe
        </p>
        <div className="absolute h-[76px] left-[935px] top-[6157px] w-[254px]" data-name="Dark/Field/Default">
          <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-0 text-[12px] text-nowrap text-white top-0 uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            {" "}
          </p>
          <div className="absolute bg-white bottom-0 left-0 right-0 rounded-[8px] top-[28px]" data-name="Rectangle" />
          <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[16px] text-[16px] text-[rgba(51,51,51,0.5)] text-nowrap top-[37px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Email
          </p>
        </div>
        <div className="absolute h-[48px] left-[1205px] top-[6185px] w-[100px]" data-name="Dark/Button/Primary/Text">
          <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
          <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Submit
          </p>
        </div>
        <div className="absolute bg-white h-px left-[135px] opacity-[0.195] top-[6329px] w-[1170px]" data-name="Rectangle" />
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[135px] text-[16px] text-nowrap text-white top-[6388px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Privacy Policy Terms & Conditions
        </p>
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[1305px] text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap text-right top-[6388px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          © 2022 Gopele
        </p>
      </div>
    </div>
  );
}
