import svgPaths from '../../../imports/svg-mpjh24u71k';
import img23 from "figma:asset/7a89186b3f01cb8b0e6d642bef5df8fb695f8088.png";

interface OrganizationCongratulationsMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
    organizationSize?: string;
    organizationIndustry?: string;
  };
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[24px] top-[24px] w-[37.966px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
        <g id="Frame 2">
          <path d={svgPaths.pcde7b00} fill="var(--fill-0, #1F60D8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[2.84%_91.2%_94.43%_5.87%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
        <g id="Group 12">
          <g id="svgg">
            <path clipRule="evenodd" d={svgPaths.p3af46480} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
          </g>
          <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.77496" y="4.39174" />
          <path d={svgPaths.p16456600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[24px] top-[24px]" data-name="Logo">
      <Frame2 />
      <Group12 />
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[2.84%_79.47%_94.43%_15.73%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
    </div>
  );
}

export function OrganizationCongratulationsMobile({ onNavigate, data }: OrganizationCongratulationsMobileProps) {
  const handleLaunch = () => {
    onNavigate('organizationDashboardLanding', data);
  };

  return (
    <div className="bg-white h-[844px] overflow-clip relative w-[375px]" data-name="Organization Congratulations - Mobile">
      <Logo />
      
      {/* Celebration Image */}
      <div className="absolute h-[180px] left-[97px] top-[200px] w-[180px]" data-name="2 3">
        <img alt="Celebration robot with stars" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img23} />
      </div>
      
      {/* Congratulation Message */}
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[36px] left-[24px] not-italic text-[24px] text-center top-[420px] w-[327px]">
        <p>
          <span className="text-[#0b0c0c]">Congratulation</span>,<span className="text-[#1f60d8]">{` ${data?.organizationName || 'Admin'}`}</span>
        </p>
      </div>
      
      {/* Success Message */}
      <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[24px] left-[24px] not-italic text-[#232323] text-[14px] text-center top-[490px] w-[327px]">
        <p>Your account have been setup sucessfully, you can start using Gopele</p>
      </div>
      
      {/* Launch Button */}
      <button
        onClick={handleLaunch}
        className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[48px] items-center justify-center left-[24px] px-3 py-2 rounded-[8px] top-[580px] w-[327px] hover:bg-[#1850b8] transition-all cursor-pointer"
      >
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Launch Gopele</p>
      </button>
    </div>
  );
}
