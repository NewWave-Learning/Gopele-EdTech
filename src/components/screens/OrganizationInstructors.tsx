import svgPaths from '../../imports/svg-gpwc6h2mrb';
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { imgGroup11828, imgGroup11829 } from "../../imports/svg-s8jux";

interface OrganizationInstructorsProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
  };
}

function SideBar({ onNavigate }: { onNavigate: (screen: string) => void }) {
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
      
      {/* Instructors - Active */}
      <div className="absolute contents left-[21px] top-[265px] z-20">
        <div className="absolute bg-[#1f60d8] h-[49px] left-[21px] rounded-[10px] top-[265px] w-[192px] z-20" />
        <div className="absolute contents left-[39px] top-[265px] z-20">
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[60px] not-italic text-[14px] text-nowrap text-white top-[276.5px] tracking-[-0.28px] translate-y-[-50%] z-20">
            <p className="leading-[21px] whitespace-pre">Instructors</p>
          </div>
          <div className="absolute left-[18px] size-[24px] top-[276.5px] translate-y-[-50%] z-20">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <g id="Group 11829">
                <path d={svgPaths.p1a938800} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      
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
      
      {/* Help & Resources */}
      <button
        onClick={() => console.log('Help & Resources clicked')}
        className="absolute bg-[#0b0c0c] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[37px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[759px] w-[172px] z-20 cursor-pointer hover:bg-[#2b2c2c] transition-colors" data-name="Button"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{`Help & Resources`}</p>
      </button>
    </div>
  );
}

function Nav({ organizationName }: { organizationName?: string }) {
  return (
    <div className="absolute contents left-[-2px] top-0 z-20" data-name="nav">
      <div className="absolute bg-white h-[86px] left-[-2px] top-0 w-[1440px] z-20" />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[320px] not-italic text-[32px] text-black text-nowrap top-[43px] translate-y-[-50%] z-20">
        <p className="leading-[42px] whitespace-pre">Instructors</p>
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

export function OrganizationInstructors({ onNavigate, data }: OrganizationInstructorsProps) {
  return (
    <div className="bg-white relative size-full" data-name="Organizational - Instructors - No Enrolment">
      <Nav organizationName={data?.organizationName} />
      <SideBar onNavigate={onNavigate} />
      
      {/* Main Content Background */}
      <div className="absolute bg-[#fafcfe] h-[890px] left-[252px] top-0 w-[1193px]" />
      
      {/* Empty State Content */}
      <div className="absolute contents leading-[0] left-[585px] not-italic text-center top-[394px]">
        {/* Yellow Icon */}
        <div className="absolute contents inset-[30.67%_40.53%_57.82%_52.36%]">
          <div className="absolute inset-[30.67%_40.53%_57.82%_52.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 103">
              <g id="Group 11829">
                <path d={svgPaths.p34828500} fill="var(--fill-0, #FACE55)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        
        {/* Heading */}
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center left-[805.5px] text-[#232323] text-[35px] top-[409px] translate-x-[-50%] translate-y-[-50%] w-[441px]">
          <p className="leading-[30px]">Enroll Team Members</p>
        </div>
        
        {/* Description */}
        <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center left-[806px] text-[#232323] text-[16px] top-[464px] translate-x-[-50%] translate-y-[-50%] w-[400px]">
          <p className="leading-[normal] whitespace-pre-wrap">{`Welcome to Gopele. Lorem ipsum dolor sit amet, consectetur amet  elit.`}</p>
        </div>
        
        {/* Get Started Link */}
        <button
          onClick={() => onNavigate('teamDetails')}
          className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center left-[806px] text-[#1f60d8] hover:underline text-[16px] top-[516px] translate-x-[-50%] translate-y-[-50%] w-[222px] cursor-pointer transition-all"
        >
          <p className="leading-[normal]">Get started</p>
        </button>
      </div>
    </div>
  );
}
