import svgPaths from '../../imports/svg-ih68msme3a';
import imgEllipse111 from "figma:asset/2bc478a6307061bc42d912aa60b0a54d5b19c4e7.png";
import imgRectangle18442 from "figma:asset/2847e84888722b6447dc866ddde9d22881c7b831.png";
import imgEllipse112 from "figma:asset/cc68363ba54b9302a94d8e3380aef381f4300f7b.png";
import imgRectangle18443 from "figma:asset/1f589fd765022b360dafc0d58353bc2f73d95be5.png";
import imgEllipse113 from "figma:asset/2599dd927f5bd0b36a5a5bbaf67077b6fc9ab9ab.png";
import imgRectangle18444 from "figma:asset/20cc6c905cd5c3d73603a4d1411bf2b5121ded72.png";
import imgEllipse114 from "figma:asset/1fb4c548fbc927602507165adc9cf7446c250110.png";
import imgRectangle18445 from "figma:asset/478aa451e99912cdfbc9ea0bbeea6ab322d85d47.png";
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { imgGroup11829, imgGroup11828 } from "../../imports/svg-99mfw";

interface OrganizationDashboardProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

function SideBar({ currentScreen, onNavigate }: { currentScreen?: string; onNavigate: (screen: string) => void }) {
  return (
    <div className="absolute contents left-0 top-0 z-10" data-name="Side Bar">
      <div className="absolute flex h-[1155px] items-center justify-center left-0 top-0 w-[247px] z-10">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white h-[1155px] w-[247px]" />
        </div>
      </div>
      
      {/* Dashboard - Active */}
      <div className="absolute contents left-[21px] top-[130px] z-20">
        <div className="absolute bg-[#1f60d8] h-[49px] left-[21px] rounded-[10px] top-[130px] w-[192px] z-20" />
        <div className="absolute contents left-[39px] top-[143px] z-20">
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[14px] text-nowrap text-white top-[154.5px] tracking-[-0.28px] translate-y-[-50%] z-20">
            <p className="leading-[21px] whitespace-pre">Dashboard</p>
          </div>
          <div className="absolute inset-[12.55%_95.76%_85.71%_2.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px] mask-size-[24px_24px] z-20" style={{ maskImage: `url('${imgGroup11828}')` }}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Group 11828">
                <path d={svgPaths.p15ef7400} fill="var(--fill-0, white)" id="Vector" />
                <path d={svgPaths.p30e6c380} fill="var(--fill-0, white)" id="Vector_2" />
                <path d={svgPaths.p4663400} fill="var(--fill-0, white)" id="Vector_3" />
                <path d={svgPaths.p12687700} fill="var(--fill-0, white)" id="Vector_4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Courses */}
      <button
        onClick={() => onNavigate('organizationCourses')}
        className="absolute left-[21px] top-[204px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[62px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Courses</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]" data-name="document 1">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="document 1">
              <path d={svgPaths.p1c9cfef0} fill="var(--fill-0, #A1A5B3)" id="Vector" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Instructors */}
      <button
        onClick={() => onNavigate('organizationInstructors')}
        className="absolute left-[21px] top-[265px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Instructors</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]" data-name="Mask group">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Mask group">
              <mask height="24" id="mask0_2034_instructors_dash" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18397" width="24" />
              </mask>
              <g mask="url(#mask0_2034_instructors_dash)">
                <path d={svgPaths.p1a938800} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              </g>
            </g>
          </svg>
        </div>
      </button>
      
      {/* Learners */}
      <button
        onClick={() => onNavigate('organizationLearners')}
        className="absolute left-[21px] top-[326px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Learners</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]" data-name="Mask group">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Mask group">
              <mask height="24" id="mask0_2034_219" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18398" width="24" />
              </mask>
              <g mask="url(#mask0_2034_219)">
                <path d={svgPaths.pf4edc00} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              </g>
            </g>
          </svg>
        </div>
      </button>
      
      {/* Settings */}
      <button
        onClick={() => console.log('Settings clicked')}
        className="absolute left-[21px] top-[387px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Settings</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]" data-name="Mask group">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Mask group">
              <mask height="24" id="mask0_2034_204" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18408" width="24" />
              </mask>
              <g mask="url(#mask0_2034_204)">
                <path d={svgPaths.p16b7f6f0} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              </g>
            </g>
          </svg>
        </div>
      </button>
      
      {/* Logout */}
      <button
        onClick={() => console.log('Logout clicked')}
        className="absolute left-[21px] top-[694px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Logout</p>
        </div>
        <div className="absolute left-[18px] w-[24px] h-[24px] top-[50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
            <g id="Group 11851">
              <path d={svgPaths.p9368b00} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              <path d={svgPaths.p218dd800} fill="var(--fill-0, #A1A5B3)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Help & Resources Button */}
      <button
        onClick={() => console.log('Help & Resources clicked')}
        className="absolute bg-[#0b0c0c] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[37px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[759px] w-[172px] z-20 cursor-pointer hover:bg-[#2b2c2c] transition-colors" data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{`Help & Resources`}</p>
      </button>
    </div>
  );
}

function TopNav({ organizationName }: { organizationName?: string }) {
  return (
    <div className="absolute contents left-[-2px] top-0 z-20" data-name="nav">
      <div className="absolute bg-white h-[86px] left-[-2px] top-0 w-[1440px] z-20" />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[320px] not-italic text-[32px] text-black text-nowrap top-[43px] translate-y-[-50%] z-20">
        <p className="leading-[42px] whitespace-pre">Dashboard</p>
      </div>
      
      {/* Notification Icons */}
      <div className="absolute flex gap-[20px] left-[1165px] top-[25px] z-20">
        {/* Search Icon */}
        <button
          onClick={() => console.log('Search clicked')}
          className="relative bg-gray-100 rounded-[15px] size-[40px] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center z-20"
        >
          <svg className="size-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p1160ca00} fill="var(--fill-0, #0B0C0C)" id="Vector" />
          </svg>
        </button>
        
        {/* Notification Icon */}
        <button
          onClick={() => console.log('Notifications clicked')}
          className="relative bg-gray-100 rounded-[15px] size-[40px] cursor-pointer hover:bg-gray-200 transition-colors flex items-center justify-center z-20"
        >
          <svg className="size-[17px]" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
            <g id="Notification">
              <path d={svgPaths.p2c0b1d00} fill="var(--fill-0, #0B0C0C)" id="Fill 1" />
              <path d={svgPaths.p14e42c00} fill="var(--fill-0, #0B0C0C)" id="Fill 4" opacity="0.4" />
            </g>
          </svg>
          {/* Notification Badge */}
          <div className="absolute -top-[9px] -right-[9px] size-[18px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <circle cx="9" cy="9" fill="var(--fill-0, #D81F1F)" id="Ellipse 110" r="9" />
            </svg>
            <div className="absolute flex items-center justify-center inset-0">
              <p className="font-['Poppins:SemiBold',_sans-serif] text-[10px] text-white">5</p>
            </div>
          </div>
        </button>
      </div>
      
      {/* User Profile */}
      <button
        onClick={() => console.log('Profile clicked')}
        className="absolute flex items-center gap-[9px] left-[1291px] top-[19px] z-20 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="rounded-[10px] size-[46px]">
          <img alt="" className="w-full h-full object-cover rounded-[10px]" src={imgRectangle18391} />
        </div>
        <div className="flex flex-col justify-center text-nowrap">
          <p className="font-['Poppins:Medium',_sans-serif] text-[20px] text-black leading-[17.039px]">{organizationName || 'Seev'}</p>
          <p className="font-['Poppins:Regular',_sans-serif] text-[#a8a8a8] text-[12px] leading-[20px] tracking-[-0.192px]">#10532</p>
        </div>
      </button>
    </div>
  );
}

export function OrganizationDashboard({ onNavigate, data }: OrganizationDashboardProps) {
  return (
    <div className="bg-white relative size-full" data-name="Organizational - Dashboard - Courses -  Learner and Instructors">
      <SideBar onNavigate={onNavigate} />
      <div className="absolute bg-[#fafcfe] h-[1155px] left-[244px] top-0 w-[1193px] z-0" />
      
      {/* Stats Cards */}
      <div className="absolute contents left-[287px] top-[118px]">
        {/* Total Courses Card - Blue */}
        <div className="absolute contents left-[287px] top-[118px]">
          <div className="absolute bg-[#1f60d8] h-[160px] left-[287px] rounded-[10px] top-[118px] w-[238px]" />
          <div className="absolute bg-white left-[313px] rounded-[10px] size-[50px] top-[142px]" />
          <div className="absolute left-[326px] size-[24px] top-[155px]" data-name="document 2">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="document 2">
                <path d={svgPaths.p1c9cfef0} fill="var(--fill-0, #1F60D8)" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[315px] not-italic text-[26px] text-nowrap text-white top-[222px] translate-y-[-50%]">
            <p className="leading-[42px] whitespace-pre">60</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[315px] not-italic text-[14px] text-nowrap text-white top-[249.5px] tracking-[-0.28px] translate-y-[-50%]">
            <p className="leading-[21px] whitespace-pre">Total Courses</p>
          </div>
          <div className="absolute h-[160px] left-[287px] overflow-clip rounded-[10px] top-[118px] w-[238px]">
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7408559918403625)+(var(--transform-inner-height)*0.6716638803482056)))] items-center justify-center left-[141px] top-[-36px] w-[calc(1px*((var(--transform-inner-height)*0.7408559918403625)+(var(--transform-inner-width)*0.6716638803482056)))]" style={{ "--transform-inner-width": "90", "--transform-inner-height": "90" } as React.CSSProperties}>
              <div className="flex-none rotate-[227.804deg]">
                <div className="relative size-[90px]" data-name="document 2">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                    <g id="document 2">
                      <path d={svgPaths.pda9ba80} fill="var(--fill-0, white)" fillOpacity="0.15" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Total Learners Card - Black */}
        <div className="absolute contents left-[545px] top-[118px]">
          <div className="absolute bg-[#232323] h-[160px] left-[545px] rounded-[10px] top-[118px] w-[238px]" />
          <div className="absolute bg-white left-[571px] rounded-[10px] size-[50px] top-[142px]" />
          <div className="absolute left-[584px] size-[24px] top-[155px]" data-name="Mask group">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Mask group">
                <mask height="24" id="mask0_2034_234" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                  <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18398" width="24" />
                </mask>
                <g mask="url(#mask0_2034_234)">
                  <path d={svgPaths.pf4edc00} fill="var(--fill-0, #232323)" id="Vector" />
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[573px] not-italic text-[26px] text-nowrap text-white top-[222px] translate-y-[-50%]">
            <p className="leading-[42px] whitespace-pre">200</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[573px] not-italic text-[14px] text-nowrap text-white top-[249.5px] tracking-[-0.28px] translate-y-[-50%]">
            <p className="leading-[21px] whitespace-pre">Total Learners</p>
          </div>
          <div className="absolute h-[160px] left-[545px] overflow-clip rounded-[10px] top-[118px] w-[238px]">
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.6933704018592834)+(var(--transform-inner-height)*0.7205813527107239)))] items-center justify-center left-[136px] top-[-30px] w-[calc(1px*((var(--transform-inner-height)*0.6933704018592834)+(var(--transform-inner-width)*0.7205813527107239)))]" style={{ "--transform-inner-width": "90", "--transform-inner-height": "90" } as React.CSSProperties}>
              <div className="flex-none rotate-[223.897deg]">
                <div className="relative size-[90px]" data-name="Mask group">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 90">
                    <g id="Mask group">
                      <mask height="90" id="mask0_2037_423" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="90" x="0" y="0">
                        <rect fill="var(--fill-0, #D9D9D9)" height="90" id="Rectangle 18398" width="90" />
                      </mask>
                      <g mask="url(#mask0_2037_423)">
                        <path d={svgPaths.p2b9cfef0} fill="var(--fill-0, white)" fillOpacity="0.15" id="Vector" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Total Instructors Card - Yellow */}
        <div className="absolute contents left-[804px] top-[118px]">
          <div className="absolute bg-[#face55] h-[160px] left-[804px] rounded-[10px] top-[118px] w-[238px]" />
          <div className="absolute bg-black left-[830px] rounded-[10px] size-[50px] top-[146px]" />
          <div className="absolute h-[160px] left-[804px] top-[118px] w-[238px]" data-name="icon frame">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 160">
              <g id="icon frame">
                <g clipPath="url(#clip0_2037_478)">
                  <path d={svgPaths.p1ee7b100} fill="var(--fill-0, black)" fillOpacity="0.15" id="Vector" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2037_478">
                  <rect fill="white" height="160" rx="10" width="238" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[830px] not-italic text-[26px] text-black text-nowrap top-[222px] translate-y-[-50%]">
            <p className="leading-[42px] whitespace-pre">40</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[830px] not-italic text-[14px] text-black text-nowrap top-[249.5px] tracking-[-0.28px] translate-y-[-50%]">
            <p className="leading-[21px] whitespace-pre">Total Instructors</p>
          </div>
          <div className="absolute inset-[13.94%_39.93%_84.33%_58.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Group 11829">
                <path d={svgPaths.p1a938800} fill="var(--fill-0, #FACE55)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Student Growth Chart - Placeholder */}
      <div className="absolute contents left-[288px] top-[303px]">
        <div className="absolute bg-white h-[379.371px] left-[288px] rounded-[10px] top-[303px] w-[754px]" />
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[32.468px] justify-center leading-[0] left-[309.81px] not-italic text-[16px] text-black top-[349.58px] translate-y-[-50%] w-[228.325px]">
          <p className="leading-[normal]">No. of Students Growth</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[314.25px] not-italic text-[#9b9b9b] text-[12px] top-[517.06px] translate-y-[-50%] w-[170.399px]">
          <p className="leading-[normal] rotate-[270deg]">No. of Students Growth (in thousands)</p>
        </div>
      </div>
      
      {/* Calendar Widget */}
      <div className="absolute contents left-[1077.81px] top-[118px]">
        <div className="absolute bg-white h-[299px] left-[1077.81px] rounded-[10px] top-[118px] w-[318.193px]" />
        <div className="absolute contents left-[1093.97px] top-[139.21px]">
          {/* Month Selector */}
          <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[16.6px] justify-center leading-[0] left-[1093.97px] not-italic text-[#333333] text-[16px] top-[147.51px] translate-y-[-50%] w-[174.992px]">
            <p className="leading-[normal]">July 2022</p>
          </div>
          
          {/* Weekdays */}
          <div className="absolute contents font-['Poppins:Medium',_sans-serif] leading-[0] left-[1100.03px] not-italic text-[#333333] text-[12px] text-center top-[178.61px]">
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1109.63px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[19.193px]">
              <p className="leading-[normal]">Mo</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1155.08px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">Tu</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1202.56px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[23.233px]">
              <p className="leading-[normal]">We</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1247.51px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">Th</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1288.93px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[14.142px]">
              <p className="leading-[normal]">Fr</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1330.34px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[18.182px]">
              <p className="leading-[normal]">Sa</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1372.26px] top-[184.67px] translate-x-[-50%] translate-y-[-50%] w-[17.172px]">
              <p className="leading-[normal]">Su</p>
            </div>
          </div>
          
          {/* Week 01 */}
          <div className="absolute contents font-['Poppins:Medium',_sans-serif] leading-[0] left-[1104.07px] not-italic text-[12px] text-center top-[214.97px]">
            <div className="absolute flex flex-col h-[24.243px] justify-center left-[1111.14px] text-[#bdbdbd] top-[227.09px] translate-x-[-50%] translate-y-[-50%] w-[14.142px]">
              <p className="leading-[normal]">27</p>
            </div>
            <div className="absolute flex flex-col h-[24.243px] justify-center left-[1155.08px] text-[#bdbdbd] top-[227.09px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">28</p>
            </div>
            <div className="absolute flex flex-col h-[24.243px] justify-center left-[1202.56px] text-[#bdbdbd] top-[227.09px] translate-x-[-50%] translate-y-[-50%] w-[19.193px]">
              <p className="leading-[normal]">29</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1250.54px] text-[#bdbdbd] top-[227.09px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">30</p>
            </div>
            <div className="absolute flex flex-col justify-center left-[1289.94px] size-[12.122px] text-[#666666] top-[227.09px] translate-x-[-50%] translate-y-[-50%]">
              <p className="leading-[normal]">1</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1330.85px] text-[#666666] top-[227.09px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">2</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1373.27px] text-[#666666] top-[227.09px] translate-x-[-50%] translate-y-[-50%] w-[13.132px]">
              <p className="leading-[normal]">3</p>
            </div>
          </div>
          
          {/* Week 02 */}
          <div className="absolute contents left-[1104.07px] top-[257.4px]">
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1108.11px] not-italic text-[#666666] text-[12px] text-center top-[269.52px] translate-x-[-50%] translate-y-[-50%] w-[8.081px]">
              <p className="leading-[normal]">4</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1153.57px] not-italic text-[#666666] text-[12px] text-center top-[269.52px] translate-x-[-50%] translate-y-[-50%] w-[8.081px]">
              <p className="leading-[normal]">5</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1199.53px] not-italic text-[#666666] text-[12px] text-center top-[269.52px] translate-x-[-50%] translate-y-[-50%] w-[7.071px]">
              <p className="leading-[normal]">6</p>
            </div>
            <div className="absolute left-[1233.37px] size-[25px] top-[257.4px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
                <circle cx="12.5" cy="12.5" fill="var(--fill-0, #1F60D8)" id="Current Day" r="12.5" />
              </svg>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1245.99px] not-italic text-[12px] text-center text-white top-[269.52px] translate-x-[-50%] translate-y-[-50%] w-[9.091px]">
              <p className="leading-[normal]">7</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1289.43px] not-italic text-[#666666] text-[12px] text-center top-[269.52px] translate-x-[-50%] translate-y-[-50%] w-[13.132px]">
              <p className="leading-[normal]">8</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[1328.32px] not-italic size-[12.122px] text-[#666666] text-[12px] text-center top-[269.52px] translate-x-[-50%] translate-y-[-50%]">
              <p className="leading-[normal]">9</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1373.27px] not-italic text-[#666666] text-[12px] text-center top-[269.52px] translate-x-[-50%] translate-y-[-50%] w-[13.132px]">
              <p className="leading-[normal]">10</p>
            </div>
          </div>
          
          {/* Week 03 */}
          <div className="absolute contents font-['Poppins:Medium',_sans-serif] leading-[0] left-[1102.05px] not-italic text-[#666666] text-[12px] text-center top-[304.88px]">
            <div className="absolute flex flex-col justify-center left-[1108.62px] size-[13.132px] top-[311.44px] translate-x-[-50%] translate-y-[-50%]">
              <p className="leading-[normal]">11</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1155.08px] top-[311.44px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">12</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1201.04px] top-[311.44px] translate-x-[-50%] translate-y-[-50%] w-[14.142px]">
              <p className="leading-[normal]">13</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1247.01px] top-[311.44px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">14</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1288.93px] top-[311.44px] translate-x-[-50%] translate-y-[-50%] w-[14.142px]">
              <p className="leading-[normal]">15</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1329.33px] top-[311.44px] translate-x-[-50%] translate-y-[-50%] w-[12.122px]">
              <p className="leading-[normal]">16</p>
            </div>
            <div className="absolute flex flex-col justify-center left-[1371.25px] size-[13.132px] top-[311.44px] translate-x-[-50%] translate-y-[-50%]">
              <p className="leading-[normal]">17</p>
            </div>
          </div>
          
          {/* Week 04 */}
          <div className="absolute contents font-['Poppins:Medium',_sans-serif] leading-[0] left-[1102.05px] not-italic text-[#666666] text-[12px] text-center top-[347.3px]">
            <div className="absolute flex flex-col justify-center left-[1108.62px] size-[13.132px] top-[353.87px] translate-x-[-50%] translate-y-[-50%]">
              <p className="leading-[normal]">18</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1155.08px] top-[353.87px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">19</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1204.07px] top-[353.87px] translate-x-[-50%] translate-y-[-50%] w-[20.203px]">
              <p className="leading-[normal]">20</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1247.01px] top-[353.87px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">21</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1288.93px] top-[353.87px] translate-x-[-50%] translate-y-[-50%] w-[14.142px]">
              <p className="leading-[normal]">22</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1331.35px] top-[353.87px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">23</p>
            </div>
            <div className="absolute flex flex-col h-[13.132px] justify-center left-[1371.76px] top-[353.87px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">24</p>
            </div>
          </div>
          
          {/* Week 05 */}
          <div className="absolute contents font-['Poppins:Medium',_sans-serif] leading-[0] left-[1102.56px] not-italic text-[#666666] text-[12px] text-center top-[389.73px]">
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1109.13px] top-[396.29px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">25</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1155.08px] top-[396.29px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">26</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1202.56px] top-[396.29px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">27</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1247.01px] top-[396.29px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">28</p>
            </div>
            <div className="absolute flex flex-col h-[12.122px] justify-center left-[1290.45px] top-[396.29px] translate-x-[-50%] translate-y-[-50%] w-[15.152px]">
              <p className="leading-[normal]">29</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1331.35px] not-italic text-[#666666] text-[12px] text-center top-[395.79px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">30</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[12.122px] justify-center leading-[0] left-[1372.77px] not-italic text-[#666666] text-[12px] text-center top-[395.79px] translate-x-[-50%] translate-y-[-50%] w-[16.162px]">
              <p className="leading-[normal]">31</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trending Courses Table */}
      <div className="absolute contents left-[288px] top-[703px]" data-name="trending courses">
        <div className="absolute bg-white h-[355px] left-[288px] rounded-[10px] top-[703px] w-[754px]" />
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[310px] not-italic text-[20px] text-black text-nowrap top-[734px] translate-y-[-50%]">
          <p className="leading-[45.434px] whitespace-pre">Trending Courses</p>
        </div>
        
        {/* Table Headers */}
        <div className="absolute h-0 left-[311px] top-[800px] w-[710px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 710 2">
              <line id="Line 9" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="2" x2="710" y1="1" y2="1" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[15px] justify-center leading-[0] left-[311px] not-italic text-[#828282] text-[14px] top-[774.5px] translate-y-[-50%] w-[85px]">
          <p className="leading-[45.434px]">Course Title</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[15px] justify-center leading-[0] left-[557px] not-italic text-[#828282] text-[14px] top-[774.5px] translate-y-[-50%] w-[131px]">
          <p className="leading-[45.434px]">Course Category</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[15px] justify-center leading-[0] left-[771px] not-italic text-[#828282] text-[14px] top-[774.5px] translate-y-[-50%] w-[85px]">
          <p className="leading-[45.434px]">Duration</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[15px] justify-center leading-[0] left-[905px] not-italic text-[#828282] text-[14px] top-[774.5px] translate-y-[-50%] w-[70px]">
          <p className="leading-[45.434px]">Instructor</p>
        </div>
        
        {/* Course Rows */}
        {/* Deep Learning */}
        <div className="absolute contents left-[312px] top-[826px]">
          <div className="absolute left-[312px] rounded-[10px] size-[40px] top-[826px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle18442} />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[362px] not-italic text-[#0b0c0c] text-[14px] top-[845.5px] translate-y-[-50%] w-[177px]">
            <p className="leading-[45.434px]">{`Deep Learing `}</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[557px] not-italic text-[#0b0c0c] text-[14px] top-[845.5px] translate-y-[-50%] w-[143px]">
            <p className="leading-[45.434px]">Computer Science</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[775px] not-italic text-[#0b0c0c] text-[14px] top-[845.5px] translate-y-[-50%] w-[81px]">
            <p className="leading-[45.434px]">01h 2m 12s</p>
          </div>
          <div className="absolute left-[909px] size-[30px] top-[830px]">
            <img alt="" className="block max-w-none size-full" height="30" src={imgEllipse111} width="30" />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[950px] not-italic text-[#0b0c0c] text-[14px] top-[845.5px] translate-y-[-50%] w-[70px]">
            <p className="leading-[45.434px]">Abigail</p>
          </div>
        </div>
        
        {/* Business Foundations */}
        <div className="absolute contents left-[312px] top-[882px]">
          <div className="absolute left-[312px] rounded-[10px] size-[40px] top-[882px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle18443} />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[362px] not-italic text-[#0b0c0c] text-[14px] top-[901.5px] translate-y-[-50%] w-[151px]">
            <p className="leading-[45.434px]">Business Foundations</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[557px] not-italic text-[#0b0c0c] text-[14px] top-[901.5px] translate-y-[-50%] w-[143px]">
            <p className="leading-[45.434px]">Business</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[775px] not-italic text-[#0b0c0c] text-[14px] top-[901.5px] translate-y-[-50%] w-[78px]">
            <p className="leading-[normal]">01h 6m 13s</p>
          </div>
          <div className="absolute left-[909px] size-[30px] top-[886px]">
            <img alt="" className="block max-w-none size-full" height="30" src={imgEllipse112} width="30" />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[950px] not-italic text-[#0b0c0c] text-[14px] top-[901.5px] translate-y-[-50%] w-[70px]">
            <p className="leading-[45.434px]">James</p>
          </div>
        </div>
        
        {/* IELTS Preparation */}
        <div className="absolute contents left-[314px] top-[938px]">
          <div className="absolute h-[40px] left-[314px] rounded-[10px] top-[938px] w-[39.887px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle18444} />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[363.86px] not-italic text-[#0b0c0c] text-[14px] top-[957.5px] translate-y-[-50%] w-[119.661px]">
            <p className="leading-[45.434px]">IELTS Preparation</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[558.31px] not-italic text-[#0b0c0c] text-[14px] top-[957.5px] translate-y-[-50%] w-[142.596px]">
            <p className="leading-[45.434px]">Language Learning</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[775.69px] not-italic text-[#0b0c0c] text-[14px] top-[957.5px] translate-y-[-50%] w-[87.751px]">
            <p className="leading-[normal]">00h 7m 4s</p>
          </div>
          <div className="absolute h-[30px] left-[909.31px] top-[942px] w-[29.915px]">
            <img alt="" className="block max-w-none size-full" height="30" src={imgEllipse113} width="29.915" />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[950.2px] not-italic text-[#0b0c0c] text-[14px] top-[957.5px] translate-y-[-50%] w-[69.802px]">
            <p className="leading-[45.434px]">Kate</p>
          </div>
        </div>
        
        {/* Introduction to Law */}
        <div className="absolute contents left-[312px] top-[994px]">
          <div className="absolute left-[312px] rounded-[10px] size-[40px] top-[994px]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle18445} />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[362px] not-italic text-[#0b0c0c] text-[14px] top-[1013.5px] translate-y-[-50%] w-[138px]">
            <p className="leading-[45.434px]">Introduction to Law</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[557px] not-italic text-[#0b0c0c] text-[14px] top-[1013.5px] translate-y-[-50%] w-[143px]">
            <p className="leading-[45.434px]">Social Science</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[775px] not-italic text-[#0b0c0c] text-[14px] top-[1013.5px] translate-y-[-50%] w-[99px]">
            <p className="leading-[45.434px]">00h 30m 19s</p>
          </div>
          <div className="absolute left-[909px] size-[30px] top-[998px]">
            <img alt="" className="block max-w-none size-full" height="30" src={imgEllipse114} width="30" />
          </div>
          <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15px] justify-center leading-[0] left-[950px] not-italic text-[#0b0c0c] text-[14px] top-[1013.5px] translate-y-[-50%] w-[70px]">
            <p className="leading-[45.434px]">Emily</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Stats Cards */}
      <div className="absolute contents left-[1078px] top-[450px]">
        {/* Total Completed Lessons - Yellow */}
        <div className="absolute bg-[#f6bb00] h-[128px] left-[1078px] rounded-[10px] top-[450px] w-[155px]" />
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[1103px] not-italic text-[26px] text-nowrap text-white top-[496px] translate-y-[-50%]">
          <p className="leading-[42px] whitespace-pre">200</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[16px] left-[1103px] not-italic text-[14px] text-nowrap text-white top-[541px] tracking-[-0.28px] translate-y-[-50%] whitespace-pre">
          <p className="mb-0">{`Total Completed `}</p>
          <p>Lessons</p>
        </div>
        
        {/* Total Quizzes Taken - White with border */}
        <div className="absolute bg-white h-[128px] left-[1245px] rounded-[10px] top-[450px] w-[155px]">
          <div aria-hidden="true" className="absolute border border-[#c6d5de] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[1259px] not-italic text-[#232323] text-[26px] text-nowrap top-[496px] translate-y-[-50%]">
          <p className="leading-[42px] whitespace-pre">512</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[16px] left-[1259px] not-italic text-[#232323] text-[14px] top-[541px] tracking-[-0.28px] translate-y-[-50%] whitespace-pre">
          <p className="mb-0">Total Quizzes </p>
          <p>Taken</p>
        </div>
      </div>
      
      <TopNav organizationName={data?.organizationName} />
    </div>
  );
}
