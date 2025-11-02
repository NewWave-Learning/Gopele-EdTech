import svgPaths from '../../imports/svg-mpjh24u71k';
import img23 from "figma:asset/7a89186b3f01cb8b0e6d642bef5df8fb695f8088.png";

interface OrganizationCongratulationsProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
    organizationSize?: string;
    organizationIndustry?: string;
  };
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[68px] top-[30px] w-[37.966px]">
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
    <div className="absolute inset-[3.59%_92.84%_92.62%_5.13%]">
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

function Group13() {
  return (
    <div className="absolute contents left-[68px] top-[30px]">
      <Frame2 />
      <Group12 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute contents left-[68px] top-[30px]" data-name="Logo 3">
      <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[4.62%_84.01%_93.27%_7.98%] justify-center leading-[0] not-italic text-[#232323] text-[30px]">
        <p className="leading-[18px]">Gopele</p>
      </div>
      <Group13 />
    </div>
  );
}

function Group11709() {
  return (
    <div className="absolute contents left-[68px] top-[30px]">
      <Logo3 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[68px] top-[30px]" data-name="Logo">
      <Group11709 />
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[524px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[559px] w-[393px] hover:bg-[#1850b8] transition-all cursor-pointer"
      data-name="Button"
    >
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Launch Gopele</p>
    </button>
  );
}

function Group11720({ organizationName }: { organizationName?: string }) {
  return (
    <div className="absolute contents left-[532px] top-[388px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[720px] not-italic text-[35px] text-black text-center text-nowrap top-[412px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[48px] whitespace-pre">
          <span className="text-[#0b0c0c]">Congratulation</span>,<span className="text-[#1f60d8]">{` ${organizationName || 'Admin'}`}</span>
        </p>
      </div>
    </div>
  );
}

function Group11735({ organizationName }: { organizationName?: string }) {
  return (
    <div className="absolute contents left-[532px] top-[157px]">
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[52px] leading-[25px] left-[720px] not-italic text-[#232323] text-[16px] text-center top-[446px] translate-x-[-50%] w-[348px]">Your account have been setup sucessfully, you can start using Gopele</p>
      <Group11720 organizationName={organizationName} />
      <div className="absolute h-[221px] left-[604px] top-[157px] w-[233px]" data-name="2 3">
        <img alt="Celebration robot with stars" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img23} />
      </div>
    </div>
  );
}

function Group11736({ organizationName, onClick }: { organizationName?: string; onClick: () => void }) {
  return (
    <div className="absolute contents left-[524px] top-[157px]">
      <Button onClick={onClick} />
      <Group11735 organizationName={organizationName} />
    </div>
  );
}

export function OrganizationCongratulations({ onNavigate, data }: OrganizationCongratulationsProps) {
  const handleLaunch = () => {
    // User is already logged in as admin from the previous step
    // Navigate to Organization Dashboard Landing to start using the app
    onNavigate('organizationDashboardLanding', data);
  };

  return (
    <div className="bg-white relative size-full" data-name="Organization Congratulations">
      <Logo />
      <Group11736 organizationName={data?.organizationName} onClick={handleLaunch} />
    </div>
  );
}
