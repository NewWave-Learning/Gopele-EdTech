import svgPaths from "../../imports/svg-8ccelt5091";
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import imgTh1 from "figma:asset/734ec9c764fdb84549a64fdd6b55ac0b3116e7e0.png";
import { imgGroup11828, imgGroup11829 } from "../../imports/svg-gkaig";

interface OrganizationAddLearnerProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  onClose: () => void;
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

function Group11840() {
  return (
    <div className="absolute contents left-[748px] top-[266px]">
      <MaskGroup />
    </div>
  );
}

function Group11855() {
  return (
    <div className="absolute contents left-[748px] top-[266px]">
      <Group11840 />
    </div>
  );
}

function Group11942() {
  return (
    <div className="absolute contents left-[606px] top-[266px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[806px] not-italic text-[#1f60d8] text-[16px] text-center top-[516px] translate-x-[-50%] translate-y-[-50%] w-[222px]">
        <p className="leading-[normal]">Get started</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[806px] not-italic text-[#232323] text-[16px] text-center top-[464px] translate-x-[-50%] translate-y-[-50%] w-[400px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Welcome to Gopele. Lorem ipsum dolor sit amet, consectetur amet  elit.`}</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[805.5px] not-italic text-[#232323] text-[35px] text-center top-[409px] translate-x-[-50%] translate-y-[-50%] w-[369px]">
        <p className="leading-[30px]">Enroll Learners</p>
      </div>
      <Group11855 />
    </div>
  );
}

function Frame6961() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[920px] p-[10px] top-[24px]">
      <p className="font-['Poppins:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Add a Learner</p>
    </div>
  );
}

function Group11974() {
  return (
    <div className="absolute contents left-[894px] top-0">
      <div className="absolute h-[890px] left-[894px] top-0 w-[545px]">
        <div className="absolute inset-[-2.58%_-3.67%_-2.81%_-5.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 593 938">
            <g filter="url(#filter0_d_2038_3638)" id="Rectangle 18375">
              <path d={svgPaths.p12934b1} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="938" id="filter0_d_2038_3638" width="593" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="-4" dy="1" />
                <feGaussianBlur stdDeviation="12" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2038_3638" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2038_3638" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Frame6961 />
    </div>
  );
}

function X() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
      <g id="X">
        <g id="Vector"></g>
        <path d="M21.875 6.125L6.125 21.875" id="Vector_2" stroke="var(--stroke-0, #091E42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6875" />
        <path d="M21.875 21.875L6.125 6.125" id="Vector_3" stroke="var(--stroke-0, #091E42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6875" />
      </g>
    </svg>
  );
}

function X1({ onClose }: { onClose: () => void }) {
  return (
    <button onClick={onClose} className="absolute left-[1378px] size-[28px] top-[32px] cursor-pointer" data-name="X">
      <X />
    </button>
  );
}

function Group11979({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute contents left-[1371px] top-[24px]">
      <div className="absolute flex items-center justify-center left-[1371px] size-[42px] top-[24px]">
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-[42px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
              <path d={svgPaths.p119662a} fill="var(--fill-0, #F6F8FA)" id="Ellipse 73" />
            </svg>
          </div>
        </div>
      </div>
      <X1 onClose={onClose} />
    </div>
  );
}

function Group11977() {
  return (
    <div className="absolute contents left-[920px] top-[253px]">
      <div className="absolute bg-white h-[54px] left-[920px] rounded-[8px] top-[253px] w-[228.034px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
      <div className="absolute bg-white h-[54px] left-[1162.97px] rounded-[8px] top-[253px] w-[229.03px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}

function Group11982() {
  return (
    <div className="absolute contents left-[920px] top-[219px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[920px] not-italic text-[#091e42] text-[16px] top-[219px] w-[229px]">First Name</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[1165px] not-italic text-[#091e42] text-[16px] top-[219px] w-[229px]">Last Name</p>
      <Group11977 />
    </div>
  );
}

function Group11978() {
  return (
    <div className="absolute contents left-[920px] top-[149px]">
      <div className="absolute bg-white h-[54px] left-[920px] rounded-[8px] top-[149px] w-[473px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}

function Group11983() {
  return (
    <div className="absolute contents left-[920px] top-[115px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[920px] not-italic text-[#091e42] text-[16px] top-[115px] w-[229px]">Email</p>
      <Group11978 />
    </div>
  );
}

function Group11986() {
  return (
    <div className="absolute contents left-[920px] top-[115px]">
      <Group11983 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[36px] leading-[31px] left-[940px] not-italic text-[#c6d5de] text-[16px] top-[159px] w-[205px]">Katebrown@seve.com</p>
    </div>
  );
}

function Group11980() {
  return (
    <div className="absolute contents left-[920px] top-[623px]">
      <div className="absolute bg-white h-[54px] left-[920px] rounded-[8px] top-[623px] w-[473px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}

function Group11985() {
  return (
    <div className="absolute contents left-[920px] top-[589px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[920px] not-italic text-[#091e42] text-[16px] top-[589px] w-[229px]">Country</p>
      <Group11980 />
    </div>
  );
}

function Group11988() {
  return (
    <div className="absolute contents left-[920px] top-[589px]">
      <Group11985 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[36px] leading-[31px] left-[984px] not-italic text-[#c6d5de] text-[16px] top-[635px] w-[205px]">South Africa</p>
    </div>
  );
}

function Group11984() {
  return (
    <div className="absolute contents left-[920px] top-[115px]">
      <Group11986 />
      <Group11988 />
    </div>
  );
}

function Group11990() {
  return (
    <div className="absolute contents left-[920px] top-[337px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[920px] not-italic text-[#091e42] text-[16px] top-[337px] w-[229px]">Gender</p>
    </div>
  );
}

function Group11995() {
  return (
    <div className="absolute contents left-[920px] top-[337px]">
      <Group11990 />
    </div>
  );
}

function Group11989() {
  return (
    <div className="absolute contents left-[920px] top-[337px]">
      <Group11995 />
    </div>
  );
}

function Check() {
  return (
    <div className="absolute left-[920px] size-[16px] top-[370px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check"></g>
      </svg>
    </div>
  );
}

function Group11991() {
  return (
    <div className="absolute contents left-[920px] top-[378px]">
      <div className="absolute bg-white h-[57px] left-[1048px] rounded-[10px] top-[378px] w-[116px]">
        <div aria-hidden="true" className="absolute border border-[rgba(198,213,222,0.5)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <div className="absolute bg-white h-[57px] left-[920px] rounded-[10px] top-[378px] w-[116px]">
        <div aria-hidden="true" className="absolute border-2 border-[#1f60d8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] h-[18px] leading-[25px] left-[1106px] not-italic text-[#828282] text-[16px] text-center top-[394px] translate-x-[-50%] w-[90px]">Male</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] h-[18px] leading-[25px] left-[978px] not-italic text-[#0b0c0c] text-[16px] text-center top-[394px] translate-x-[-50%] w-[90px]">Female</p>
    </div>
  );
}

function Group11981() {
  return (
    <div className="absolute contents left-[920px] top-[507px]">
      <div className="absolute bg-white h-[54px] left-[920px] rounded-[8px] top-[507px] w-[473px]">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      </div>
    </div>
  );
}

function Group11996() {
  return (
    <div className="absolute contents left-[920px] top-[473px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[920px] not-italic text-[#091e42] text-[16px] top-[473px] w-[229px]">Phone Number</p>
      <Group11981 />
    </div>
  );
}

function Group11987() {
  return (
    <div className="absolute contents left-[920px] top-[473px]">
      <Group11996 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[36px] leading-[31px] left-[984px] not-italic text-[#c6d5de] text-[16px] top-[519px] w-[205px]">(+27) 49 000 000</p>
    </div>
  );
}

function PhoneNumber() {
  return (
    <div className="absolute contents left-[920px] top-[473px]" data-name="Phone Number">
      <Group11987 />
      <div className="absolute h-[19px] left-[941px] top-[524px] w-[27px]" data-name="th 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTh1} />
      </div>
      <div className="absolute h-[19px] left-[941px] top-[640px] w-[27px]" data-name="th 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTh1} />
      </div>
    </div>
  );
}

function Button1() {
  return <div className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[1181px] opacity-50 pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[726px] w-[212px]" data-name="Button" />;
}

function Group12002() {
  return (
    <div className="absolute contents left-[1181px] top-[726px]">
      <Button1 />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[normal] left-[87.68%] not-italic opacity-50 right-[8.22%] text-[16px] text-nowrap text-white top-[calc(50%+293.5px)] whitespace-pre">Submit</p>
    </div>
  );
}

function Group11993() {
  return (
    <div className="absolute contents left-[1181px] top-[726px]">
      <Group12002 />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative size-full" data-name="CaretLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="CaretLeft">
          <g id="Vector"></g>
          <path d="M10 13L5 8L10 3" id="Vector_2" stroke="var(--stroke-0, #213353)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group11992() {
  return (
    <div className="absolute contents left-[920px] top-[115px]">
      <Group11982 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[21px] leading-[31px] left-[1182px] not-italic text-[#c6d5de] text-[16px] top-[265px] w-[215px]">Brown</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] h-[21px] leading-[31px] left-[934px] not-italic text-[#c6d5de] text-[16px] top-[265px] w-[215px]">Kate</p>
      <Group11984 />
      <Group11989 />
      <Check />
      <Group11991 />
      <PhoneNumber />
      <Group11993 />
      <div className="absolute flex inset-[72.14%_4.24%_26.07%_94.65%] items-center justify-center">
        <div className="flex-none rotate-[270deg] scale-y-[-100%] size-[16px]">
          <CaretLeft />
        </div>
      </div>
    </div>
  );
}

function Group11994() {
  return (
    <div className="absolute contents left-[920px] top-[115px]">
      <Group11992 />
    </div>
  );
}

function AddModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute contents left-[894px] top-0" data-name="Add Modal">
      <Group11974 />
      <Group11979 onClose={onClose} />
      <Group11994 />
    </div>
  );
}

export default function OrganizationAddLearner({ onNavigate, onClose }: OrganizationAddLearnerProps) {
  return (
    <div className="bg-white relative size-full" data-name="Organization Add Learner">
      <div className="absolute bg-[#fafcfe] h-[890px] left-[252px] top-0 w-[1193px]" />
      <Group11942 />
      <AddModal onClose={onClose} />
    </div>
  );
}
