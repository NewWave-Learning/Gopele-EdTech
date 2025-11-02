import svgPaths from "./svg-vj9lkq47mt";
import imgRectangle18391 from "figma:asset/1634068e9d88fb0d93578a09cee3797f774409eb.png";
import { imgGroup11828, imgGroup11829 } from "./svg-oeryh";

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

function Group11830() {
  return (
    <div className="absolute contents leading-[0] left-[1348px] not-italic text-nowrap top-[23px]">
      <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center left-[1348px] text-[20px] text-black top-[32px] translate-y-[-50%]">
        <p className="leading-[17.039px] text-nowrap whitespace-pre">Seev</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center left-[1348px] text-[#a8a8a8] text-[12px] top-[52px] tracking-[-0.192px] translate-y-[-50%]">
        <p className="leading-[20px] text-nowrap whitespace-pre">#10532</p>
      </div>
    </div>
  );
}

function Group11831() {
  return (
    <div className="absolute contents left-[1293px] top-[19px]">
      <div className="absolute left-[1293px] rounded-[10px] size-[46px] top-[19px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle18391} />
      </div>
      <Group11830 />
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

function IconlyBulkNotification() {
  return (
    <div className="absolute inset-[3.71%_12.5%_93.6%_85.83%]" data-name="Iconly/Bulk/Notification">
      <Notification />
    </div>
  );
}

function Group11825() {
  return (
    <div className="absolute contents left-[1228px] top-[25px]">
      <div className="absolute bg-gray-100 left-[1228px] rounded-[15px] size-[40px] top-[25px]" />
      <IconlyBulkNotification />
    </div>
  );
}

function Group11824() {
  return (
    <div className="absolute contents left-[1259px] top-[16px]">
      <div className="absolute left-[1259px] size-[18px] top-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #D81F1F)" id="Ellipse 110" r="9" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[1265px] not-italic text-[10px] text-nowrap text-white top-[25.5px] tracking-[-0.16px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Notification1() {
  return (
    <div className="absolute contents left-[1228px] top-[16px]" data-name="Notification">
      <Group11825 />
      <Group11824 />
    </div>
  );
}

function Group11826() {
  return (
    <div className="absolute contents left-[1167px] top-[16px]">
      <div className="absolute bg-gray-100 left-[1167px] rounded-[15px] size-[40px] top-[25px]" />
      <Notification1 />
      <div className="absolute inset-[4.04%_17.01%_94.05%_81.81%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1160ca00} fill="var(--fill-0, #0B0C0C)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group11832() {
  return (
    <div className="absolute contents left-[1167px] top-[16px]">
      <Group11831 />
      <Group11826 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute contents left-[252px] top-0" data-name="nav">
      <div className="absolute bg-white h-[86px] left-[252px] top-0 w-[1188px]" />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[322px] not-italic text-[32px] text-black text-nowrap top-[43px] translate-y-[-50%]">
        <p className="leading-[42px] whitespace-pre">Learners</p>
      </div>
      <Group11832 />
    </div>
  );
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

function IconlyBulkHome() {
  return <div className="absolute inset-[22.7%_95.69%_74.61%_2.64%]" data-name="Iconly/Bulk/Home" />;
}

function Group11828() {
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

function Group11827() {
  return (
    <div className="absolute contents inset-[16.29%_95.76%_81.46%_2.85%]">
      <Group11828 />
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[39px] top-[143px]" data-name="Mask group">
      <Group11827 />
    </div>
  );
}

function Group11848() {
  return (
    <div className="absolute contents left-[39px] top-[143px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[#a1a5b3] text-[14px] text-nowrap top-[154.5px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Dashboard</p>
      </div>
      <MaskGroup1 />
    </div>
  );
}

function Group11849() {
  return (
    <div className="absolute contents left-[21px] top-[143px]">
      <div className="absolute h-[49px] left-[21px] top-[313px] w-[192px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 49">
          <path d={svgPaths.p27347a00} fill="var(--fill-0, #1F60D8)" id="Rectangle 18394" />
        </svg>
      </div>
      <Group11848 />
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

function Group11844() {
  return (
    <div className="absolute contents left-[39px] top-[387px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[#a1a5b3] text-[14px] text-nowrap top-[398.5px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Settings</p>
      </div>
      <MaskGroup2 />
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

function Group11847() {
  return (
    <div className="absolute contents left-[39px] top-[204px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[83px] not-italic text-[#a1a5b3] text-[14px] text-nowrap top-[215.5px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Courses</p>
      </div>
      <Document1 />
    </div>
  );
}

function Group11829() {
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

function MaskGroup3() {
  return (
    <div className="absolute contents left-[39px] top-[265px]" data-name="Mask group">
      <Group11829 />
    </div>
  );
}

function Group11846() {
  return (
    <div className="absolute contents left-[39px] top-[265px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[#a1a5b3] text-[14px] text-nowrap top-[276.5px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Instructors</p>
      </div>
      <MaskGroup3 />
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

function Group11845() {
  return (
    <div className="absolute contents left-[39px] top-[326px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[14px] text-nowrap text-white top-[337.5px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Learners</p>
      </div>
      <MaskGroup4 />
    </div>
  );
}

function Group11850() {
  return (
    <div className="absolute contents left-[21px] top-[143px]">
      <Group11849 />
      <Group11844 />
      <Group11847 />
      <Group11846 />
      <Group11845 />
    </div>
  );
}

function Group11854() {
  return (
    <div className="absolute contents left-[81px] top-[695px]">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[81px] not-italic text-[#a1a5b3] text-[14px] text-nowrap top-[705.5px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Logout</p>
      </div>
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

function Group11852() {
  return (
    <div className="absolute contents inset-[78.2%_95.76%_19.51%_2.85%]">
      <Group11851 />
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents left-[39px] top-[694px]" data-name="Mask group">
      <Group11852 />
    </div>
  );
}

function Group11853() {
  return (
    <div className="absolute contents left-[39px] top-[694px]">
      <MaskGroup5 />
    </div>
  );
}

function Group11857() {
  return (
    <div className="absolute contents left-[39px] top-[694px]">
      <Group11854 />
      <Group11853 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#0b0c0c] box-border content-stretch flex gap-[5.331px] h-[49px] items-center justify-center left-[37px] pl-[9px] pr-[13.709px] py-[5.331px] rounded-[10px] top-[759px] w-[172px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">{`Help & Resources`}</p>
    </div>
  );
}

function SideBar() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Side Bar">
      <div className="absolute flex h-[858px] items-center justify-center left-0 top-0 w-[247px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white h-[858px] w-[247px]" />
        </div>
      </div>
      <Logo3 />
      <IconlyBulkHome />
      <Group11850 />
      <Group11857 />
      <Button />
    </div>
  );
}

export default function OrganizationalCoursesAllCourseLearnersNoEnrolment() {
  return (
    <div className="bg-white relative size-full" data-name="Organizational -Courses  -  All Course Learners- No Enrolment">
      <Nav />
      <SideBar />
      <div className="absolute bg-[#fafcfe] h-[890px] left-[252px] top-0 w-[1193px]" />
      <Group11942 />
    </div>
  );
}