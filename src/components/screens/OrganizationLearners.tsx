import svgPaths from '../../imports/svg-vj9lkq47mt';
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { imgGroup11828, imgGroup11829 } from "../../imports/svg-oeryh";
import { useState, useEffect } from "react";
import OrganizationAddLearner from "./OrganizationAddLearner";
import { OrganizationLearnersWithData } from "./OrganizationLearnersWithData";

interface OrganizationLearnersProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
    hasLearners?: boolean;
  };
}

function Frame2() {
  return (
    <div className="absolute h-[47.154px] left-[62px] top-[19px] w-[47.111px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Frame 2">
          <path d={svgPaths.pdcf71c0} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[2.25%_92.67%_93.22%_4.82%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 41">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p154f6800} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="28.4631" id="Rectangle 1" width="30.3157" x="5.92534" y="5.44934" />
          <path d={svgPaths.p9362e00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[62px] top-[19px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute contents left-[62px] top-[19px]" data-name="Logo 3">
      <div className="absolute capitalize flex flex-col font-['Poppins:Bold',_sans-serif] inset-[3.51%_84.72%_93.95%_8.33%] justify-center leading-[0] not-italic text-[#232323] text-[20.981px]">
        <p className="leading-[17.039px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Document1() {
  return (
    <div className="absolute left-[39px] size-[24px] top-[204px]" data-name="document 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="document 1">
          <path d={svgPaths.p1c9cfef0} fill="var(--fill-0, #A1A5B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11833() {
  return (
    <div className="absolute inset-[30%_95.76%_67.75%_2.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgGroup11829}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 11829">
          <path d={svgPaths.p1a938800} fill="var(--fill-0, #A1A5B3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute left-[39px] size-[24px] top-[387px]" data-name="Mask group">
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
  );
}

function Group11828Component() {
  return (
    <div className="absolute inset-[16.29%_95.76%_81.46%_2.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgGroup11828}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 11828">
          <path d={svgPaths.p15ef7400} fill="var(--fill-0, #A1A5B3)" id="Vector" />
          <path d={svgPaths.p30e6c380} fill="var(--fill-0, #A1A5B3)" id="Vector_2" />
          <path d={svgPaths.p4663400} fill="var(--fill-0, #A1A5B3)" id="Vector_3" />
          <path d={svgPaths.p12687700} fill="var(--fill-0, #A1A5B3)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute left-[39px] size-[24px] top-[326px]" data-name="Mask group">
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
  );
}

function Group11851() {
  return (
    <div className="absolute inset-[78.2%_95.76%_19.51%_2.85%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgGroup11828}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
        <g id="Group 11851">
          <path d={svgPaths.p9368b00} fill="var(--fill-0, #A1A5B3)" id="Vector" />
          <path d={svgPaths.p218dd800} fill="var(--fill-0, #A1A5B3)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
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

function Notification() {
  return (
    <div className="absolute inset-[8.33%_14.58%]" data-name="Notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
        <g id="Notification">
          <path d={svgPaths.p2c0b1d00} fill="var(--fill-0, #0B0C0C)" id="Fill 1" />
          <path d={svgPaths.p14e42c00} fill="var(--fill-0, #0B0C0C)" id="Fill 4" opacity="0.4" />
        </g>
      </svg>
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

function MaskGroup() {
  return (
    <div className="absolute left-[748px] opacity-50 size-[116px] top-[266px]" data-name="Mask group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 116">
        <g id="Mask group">
          <mask height="116" id="mask0_2038_2715" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="116" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="116" id="Rectangle 18398" width="116" />
          </mask>
          <g mask="url(#mask0_2038_2715)">
            <path d={svgPaths.p19b788e0} fill="var(--fill-0, #232323)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function EmptyStateContent({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="absolute contents left-[606px] top-[266px]">
      {/* Icon */}
      <MaskGroup />
      
      {/* Heading */}
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[805.5px] not-italic text-[#232323] text-[35px] text-center top-[409px] translate-x-[-50%] translate-y-[-50%] w-[369px]">
        <p className="leading-[30px]">Enroll Learners</p>
      </div>
      
      {/* Description */}
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[806px] not-italic text-[#232323] text-[16px] text-center top-[464px] translate-x-[-50%] translate-y-[-50%] w-[400px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Welcome to Gopele. Lorem ipsum dolor sit amet, consectetur amet  elit.`}</p>
      </div>
      
      {/* Get started link */}
      <button onClick={onGetStarted} className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[806px] not-italic text-[#1f60d8] hover:text-[#1850b8] text-[16px] text-center top-[516px] translate-x-[-50%] translate-y-[-50%] w-[222px] cursor-pointer transition-colors">
        <p className="leading-[normal]">Get started</p>
      </button>
    </div>
  );
}

export function OrganizationLearners({ onNavigate, data }: OrganizationLearnersProps) {
  const [showAddLearner, setShowAddLearner] = useState(false);
  const [hasLearners, setHasLearners] = useState(data?.hasLearners || false);

  // Sync hasLearners state with navigation data - reset to empty when navigating without the flag
  useEffect(() => {
    setHasLearners(data?.hasLearners || false);
  }, [data?.hasLearners]);

  // If showing the add learner modal
  if (showAddLearner) {
    return <OrganizationAddLearner onNavigate={onNavigate} onClose={() => {
      setShowAddLearner(false);
      // When closing the add learner modal, show the populated view
      setHasLearners(true);
    }} />;
  }

  // If learners have been added, show the populated view
  if (hasLearners) {
    return <OrganizationLearnersWithData onNavigate={onNavigate} data={data} />;
  }

  // Otherwise show the empty state
  return (
    <div className="bg-white relative size-full" data-name="Organizational -Courses  -  All Course Learners- No Enrolment">
      <div className="absolute bg-[#fafcfe] h-[890px] left-[252px] top-0 w-[1193px]" />
      <TopBar organizationName={data?.organizationName} />
      <EmptyStateContent onGetStarted={() => setShowAddLearner(true)} />
      <SideBar onNavigate={onNavigate} />
    </div>
  );
}
