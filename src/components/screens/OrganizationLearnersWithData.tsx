import svgPaths from "../../imports/svg-jhxt50qou7";
import imgEllipse112 from "figma:asset/f13ba6016299fd0ea977c52e5b8bc8feb68f1314.png";
import imgEllipse113 from "figma:asset/a2176bfd62d3463010ba2d1d4a2507bdd5c1e107.png";
import imgEllipse114 from "figma:asset/bb90fad83e7e4ae3e48a95d2255eb82262f5e930.png";
import imgEllipse115 from "figma:asset/e1eddbd80723f14517660c8b7de85ad71e9f7a9e.png";
import imgEllipse116 from "figma:asset/e1520c0b7bedc8648cdce1db4fc1c56b849a1f8e.png";
import imgEllipse117 from "figma:asset/b06d92777406a44ec36106820b5087d0e31e3bc5.png";
import imgEllipse118 from "figma:asset/ce7b0192906d92629b8c7b7766d85db5b69161d7.png";
import imgEllipse119 from "figma:asset/e799f22937fb8c0fe621ecf5f8b1e89cb5a61b64.png";
import imgEllipse120 from "figma:asset/b82ec4312828cad503c0e2467890b7768ca0976c.png";
import imgEllipse121 from "figma:asset/7db7af6b7ad161eae30db1af7f3df46fb77e6776.png";
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { imgGroup11828, imgGroup11829 } from "../../imports/svg-s4jyr";

interface OrganizationLearnersWithDataProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

function SideBar({ onNavigate }: { onNavigate: (screen: string, data?: Record<string, unknown>) => void }) {
  return (
    <div className="absolute contents left-0 top-0 z-10" data-name="Side Bar">
      <div className="absolute flex h-[1155px] items-center justify-center left-0 top-0 w-[247px] z-10">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white h-[1155px] w-[247px]" />
        </div>
      </div>
      
      {/* Dashboard */}
      <button
        onClick={() => onNavigate('organizationDashboard')}
        className="absolute left-[21px] top-[130px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
      >
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[#a1a5b3] group-hover:text-[#1f60d8] text-[14px] text-nowrap top-[50%] tracking-[-0.28px] translate-y-[-50%] transition-colors">
          <p className="leading-[21px] whitespace-pre">Dashboard</p>
        </div>
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 11828">
              <path d={svgPaths.p15ef7400} fill="var(--fill-0, #A1A5B3)" id="Vector" />
              <path d={svgPaths.p30e6c380} fill="var(--fill-0, #A1A5B3)" id="Vector_2" />
              <path d={svgPaths.p4663400} fill="var(--fill-0, #A1A5B3)" id="Vector_3" />
              <path d={svgPaths.p12687700} fill="var(--fill-0, #A1A5B3)" id="Vector_4" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Courses */}
      <button
        onClick={() => onNavigate('organizationCourses')}
        className="absolute left-[21px] top-[191px] h-[49px] w-[192px] cursor-pointer group z-20 rounded-[10px] hover:bg-[#f0f4ff] transition-colors"
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
        <div className="absolute left-[18px] size-[24px] top-[50%] translate-y-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 11829">
              <path d={svgPaths.p1a938800} fill="var(--fill-0, #A1A5B3)" id="Vector" />
            </g>
          </svg>
        </div>
      </button>
      
      {/* Learners - Active */}
      <div className="absolute contents left-[21px] top-[326px] z-20">
        <div className="absolute bg-[#1f60d8] h-[49px] left-[21px] rounded-[10px] top-[326px] w-[192px] z-20" />
        <div className="absolute contents left-[39px] top-[326px] z-20">
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[14px] text-nowrap text-white top-[337.5px] tracking-[-0.28px] translate-y-[-50%] z-20">
            <p className="leading-[21px] whitespace-pre">Learners</p>
          </div>
          <div className="absolute left-[18px] size-[24px] top-[337.5px] translate-y-[-50%] z-20" data-name="Mask group">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Mask group">
                <mask height="24" id="mask0_2038_2711" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                  <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Rectangle 18398" width="24" />
                </mask>
                <g mask="url(#mask0_2038_2711)">
                  <path d={svgPaths.pf4edc00} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
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

function TopBar({ organizationName }: { organizationName?: string }) {
  return (
    <div className="absolute contents left-[-2px] top-0 z-20" data-name="nav">
      <div className="absolute bg-white h-[86px] left-[-2px] top-0 w-[1440px] z-20" />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[320px] not-italic text-[32px] text-black text-nowrap top-[43px] translate-y-[-50%] z-20">
        <p className="leading-[42px] whitespace-pre">Learners</p>
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

export function OrganizationLearnersWithData({ onNavigate, data }: OrganizationLearnersWithDataProps) {
  const handleAddLearner = () => {
    // Navigate to learners page without hasLearners flag to show empty state with add modal
    onNavigate('organizationLearners', { ...data, hasLearners: false });
  };
  
  return (
    <div className="bg-white relative size-full" data-name="Organizational Courses All Course Learners with Top Learners">
      <SideBar onNavigate={onNavigate} />
      <TopBar organizationName={data?.organizationName} />
      <div className="absolute bg-[#fafcfe] h-[1409px] left-[252px] top-0 w-[1193px]" />
      
      {/* Add Learner & Upload Learners Buttons */}
      <button
        onClick={handleAddLearner}
        className="absolute contents left-[1245px] top-[119px] cursor-pointer group"
      >
        <div className="absolute h-[49px] left-[1245px] top-[119px] w-[156px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 49">
            <path d={svgPaths.p2683de30} fill="var(--fill-0, #1F60D8)" id="Rectangle 18397" stroke="var(--stroke-0, #1F60D8)" />
          </svg>
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[1284px] not-italic text-[16px] text-nowrap text-white top-[143px] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">Add Leaner</p>
        </div>
        <div className="absolute flex inset-[13.73%_11.53%_84.97%_87.57%] items-center justify-center">
          <div className="flex-none scale-y-[-100%] size-[13px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-6.154%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <path d={svgPaths.p24aab500} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #1F60D8)" strokeWidth="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </button>
      
      <div className="absolute contents left-[1067px] top-[119px]">
        <div className="absolute h-[49px] left-[1067px] top-[119px] w-[169px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169 49">
            <path d={svgPaths.p37723680} id="Rectangle 18398" stroke="var(--stroke-0, #1F60D8)" />
          </svg>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[1099px] not-italic text-[#1f60d8] text-[16px] text-nowrap top-[143px] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">Upload Leaners</p>
        </div>
        <div className="absolute inset-[13.83%_24.03%_84.97%_75.07%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 12">
            <path d={svgPaths.p2c290e80} fill="var(--fill-0, #1F60D8)" id="Vector" />
          </svg>
        </div>
      </div>
      
      {/* Top Learners Section */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[290px] not-italic text-[24px] text-black text-nowrap top-[175px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">{`Top Learners `}</p>
      </div>
      
      {/* Top Learner Cards */}
      <div className="absolute contents left-[290px] top-[214px]">
        <div className="absolute bg-white h-[142px] left-[290px] rounded-[10px] top-[214px] w-[209.7px]">
          <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_2px_7px_0px_rgba(173,173,173,0.13)]" />
        </div>
        <div className="absolute left-[305px] size-[51px] top-[228px]">
          <img alt="" className="block max-w-none size-full" height="51" src={imgEllipse112} width="51" />
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[311px] not-italic text-[#4f4f4f] text-[16px] text-nowrap top-[298px] translate-y-[-50%]">
          <p className="leading-[42px] whitespace-pre">Kate Brown</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[311px] not-italic text-[#4f4f4f] text-[12px] text-nowrap top-[322px] translate-y-[-50%]">
          <p className="leading-[42px] whitespace-pre">katebrown@gmail.com</p>
        </div>
      </div>
      
      {/* Additional top learner cards would go here - simplified for brevity */}
      <div className="absolute bg-white h-[142px] left-[515px] rounded-[10px] top-[214px] w-[209.7px]">
        <div aria-hidden="true" className="absolute border border-[#f2f2f2] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_2px_7px_0px_rgba(173,173,173,0.13)]" />
      </div>
      <div className="absolute left-[530px] size-[51px] top-[228px]">
        <img alt="" className="block max-w-none size-full" height="51" src={imgEllipse114} width="51" />
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[536px] not-italic text-[#4f4f4f] text-[16px] text-nowrap top-[298px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">Jake Paul</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[536px] not-italic text-[#4f4f4f] text-[12px] text-nowrap top-[322px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">paul@gmail.com</p>
      </div>
      
      {/* ALL Learners Section */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[291px] not-italic text-[20px] text-black text-nowrap top-[430px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">{`ALL Learners `}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[42px] justify-center leading-[0] left-[431px] not-italic text-[#4f4f4f] text-[14px] top-[433px] translate-y-[-50%] w-[56px]">
        <p className="leading-[42px]">(6)</p>
      </div>
      
      {/* Filter Tabs */}
      <div className="absolute contents left-[927px] top-[407px]">
        <div className="absolute bg-white h-[48px] left-[927px] rounded-[10px] top-[407px] w-[237px]" />
        <div className="absolute bg-[#f6f8fa] h-[34.909px] left-[934px] rounded-[10px] top-[413.55px] w-[46px]" />
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[15px] justify-center leading-[0] left-[947px] not-italic text-[#1f60d8] text-[14px] top-[433.5px] translate-y-[-50%] w-[20px]">
          <p className="leading-[42px]">All</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[16.364px] justify-center leading-[0] left-[1000px] not-italic text-[#828282] text-[14px] top-[430.45px] translate-y-[-50%] w-[51px]">
          <p className="leading-[42px]">Active</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[16.364px] justify-center leading-[0] left-[1076px] not-italic text-[#828282] text-[14px] top-[430.45px] translate-y-[-50%] w-[51px]">
          <p className="leading-[42px]">Offline</p>
        </div>
      </div>
      
      {/* Search Box */}
      <div className="absolute bg-[rgba(236,241,244,0.3)] bottom-[544px] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+572px)] pl-[17px] pr-[12px] py-[14px] rounded-[12px] top-[406px] translate-x-[-50%] w-[210px]" data-name="Buttons">
        <div aria-hidden="true" className="absolute border border-[rgba(22,22,23,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="relative shrink-0 size-[20px]" data-name="MagnifyingGlass">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="MagnifyingGlass">
              <g id="Vector"></g>
              <path d={svgPaths.p688b600} id="Vector_2" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
              <path d={svgPaths.p14f1df00} id="Vector_3" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3125" />
            </g>
          </svg>
        </div>
        <p className="font-['Poppins:Regular',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(26,26,37,0.4)] text-nowrap whitespace-pre">{`Search  for a leaner`}</p>
      </div>
      
      {/* Learners Table */}
      <div className="absolute bg-white h-[499px] left-[287px] top-[479px] w-[1113px]" />
      
      {/* Table Headers */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[42.239px] justify-center leading-[0] left-[354.09px] not-italic text-[#4f4f4f] text-[16px] top-[517.28px] translate-y-[-50%] w-[50.284px]">
        <p className="leading-[42px]">Name</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[42.239px] justify-center leading-[0] left-[581.38px] not-italic text-[#4f4f4f] text-[16px] top-[517.28px] translate-y-[-50%] w-[46.261px]">
        <p className="leading-[42px]">Email</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[42.239px] justify-center leading-[0] left-[925.32px] not-italic text-[#4f4f4f] text-[16px] top-[517.28px] translate-y-[-50%] w-[51.29px]">
        <p className="leading-[42px]">Group</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[42.239px] justify-center leading-[0] left-[1080.19px] not-italic text-[#4f4f4f] text-[16px] top-[517.28px] translate-y-[-50%] w-[53.301px]">
        <p className="leading-[42px]">Status</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[42.239px] justify-center leading-[0] left-[1256.19px] not-italic text-[#4f4f4f] text-[16px] top-[517.28px] translate-y-[-50%] w-[53.301px]">
        <p className="leading-[42px]">Action</p>
      </div>
      
      {/* Sample Learner Rows - Showing first two */}
      <div className="absolute left-[346.05px] size-[51.29px] top-[570.58px]">
        <img alt="" className="block max-w-none size-full" height="51.29" src={imgEllipse120} width="51.29" />
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[42.239px] justify-center leading-[0] left-[411.42px] not-italic text-[#0b0c0c] text-[16px] top-[585.67px] translate-y-[-50%] w-[93.528px]">
        <p className="leading-[42px]">Kate Brown</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[42.239px] justify-center leading-[0] left-[411.42px] not-italic text-[#aab0c6] text-[12px] top-[607.79px] translate-y-[-50%] w-[56.318px]">
        <p className="leading-[42px]">ID: GP239</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[42.239px] justify-center leading-[0] left-[587.41px] not-italic text-[#4f4f4f] text-[14px] top-[595.72px] translate-y-[-50%] w-[167.949px]">
        <p className="leading-[42px]">katebrown@gmail.com</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[42.239px] justify-center leading-[0] left-[931.35px] not-italic text-[#4f4f4f] text-[16px] top-[596.73px] translate-y-[-50%] w-[60.341px]">
        <p className="leading-[42px]">Group 1</p>
      </div>
      
      {/* Active Status Badge */}
      <div className="absolute bg-[rgba(39,174,96,0.2)] h-[24.136px] left-[1086.23px] rounded-[30px] top-[584.66px] w-[77.438px]" />
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[15.085px] justify-center leading-[0] left-[1108.35px] not-italic text-[#27ae60] text-[12px] top-[596.23px] translate-y-[-50%] w-[44.25px]">
        <p className="leading-[42px]">Active</p>
      </div>
      <div className="absolute left-[1095.04px] size-[7.052px] top-[593.48px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="3.52609" cy="3.52609" fill="var(--fill-0, #27AE60)" id="Ellipse 114" r="3.52609" />
        </svg>
      </div>
      
      {/* Action Icons */}
      <div className="absolute inset-[59.09%_10.6%_39.5%_88.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Group 11951">
            <path d={svgPaths.pdd9be00} fill="var(--fill-0, #4F4F4F)" id="Vector" />
            <path d={svgPaths.p2b325f00} fill="var(--fill-0, #4F4F4F)" id="Vector_2" />
            <path d={svgPaths.pe7fb600} fill="var(--fill-0, #4F4F4F)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}
