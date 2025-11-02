import svgPaths from "./svg-2dnbiahxic";
import imgLessonsCover from "figma:asset/e74c30507da5f1e7b7f9f5b45041829f1db03fa9.png";
import img from "figma:asset/e12f534198175966d657f7407655f59cc0dcdccc.png";
import img1 from "figma:asset/57a12861c7fbae08e612aa3579445788a979c8de.png";
import img2 from "figma:asset/d2939bee28d7846c5bf1ee96be695d3f120827fb.png";
import img3 from "figma:asset/499b67bcf3496dbfc4b48e9db79662f6dd875256.png";
import img4 from "figma:asset/0664871b1e255ceadaf7196563af51ab3f8e7478.png";
import img5 from "figma:asset/2a6e8c954bc26f98f7449245c689b435ede3842f.png";
import imgLessonCover from "figma:asset/c27129e7e83db334f52d648439e03067aee2ebbd.png";
import imgImage1 from "figma:asset/0ee158329f6dc281292ae5982f96926aedd61c1c.png";
import imgUnsplash0OGEzyargo from "figma:asset/4b7738a9f5e7722cac899518a1624d44c9ca1363.png";
import img23 from "figma:asset/7a89186b3f01cb8b0e6d642bef5df8fb695f8088.png";
import imgWalle from "figma:asset/5659bb0a661292d84ce5d5861c0faa55bc7dd773.png";
import imgAsset22X1 from "figma:asset/36e81eae8e19c0bef954442fd77e1fc1acd52b8e.png";
import imgImage2 from "figma:asset/5f903bfe134f0da1dae546fc6d15153372ccfd39.png";
import imgImage3 from "figma:asset/d06ba5f33cfacea98850a8138b56026b583c1320.png";
import imgImage4 from "figma:asset/b1716d9057bd1e76cf49ab71ddb4ba906c369068.png";
import imgLaptop1 from "figma:asset/7cca158ae07b4705c72ffea5507003723362bbef.png";
import { imgCross, imgOval, imgOval1 } from "./svg-yoo6y";

function InputDefaultOff({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Input/Default/Off">
      <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Student ID</p>
      <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
        <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
          <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">student@school.com</p>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

interface ButtonProps {
  className?: string;
  size?: "Small";
  type?: "Primary" | "Secondary";
  state?: "Pressed" | "Standard";
  subState?: "Normal" | "Hover";
}

function Button({ className, size = "", type = "", state = "", subState = "" }: ButtonProps) {
  /* WARNING: Some variants had the same property values applied, and were skipped */
  if (size === "Small" && type === "Secondary" && state === "Standard") {
    return (
      <div className={className} data-name="Size=Small, Type=Secondary, State=Standard">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[12px] py-[7px] relative size-full">
            <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
              <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                    <path d={svgPaths.p2ab17800} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Save</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && state === "Pressed" && subState === "Normal") {
    return (
      <div className={className} data-name="Size=Small, Type=Secondary, State=Pressed, Sub State=Normal">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[12px] py-[7px] relative size-full">
            <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
              <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--fill-0": "rgba(35, 35, 35, 1)", "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                    <path d={svgPaths.p2ab17800} fill="var(--fill-0, #232323)" id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Saved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && type === "Primary" && state === "Standard") {
    return (
      <div className={className} data-name="Size=Small, Type=Primary, State=Standard">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[7px] items-center justify-center px-[12px] py-[7px] relative size-full">
            <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
              <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                  <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                </svg>
              </div>
            </div>
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
          </div>
        </div>
      </div>
    );
  }
  if (size === "Small" && type === "Secondary" && state === "Pressed" && subState === "Hover") {
    return (
      <div className={className} data-name="Size=Small, Type=Secondary, State=Pressed, Sub State=Hover">
        <div aria-hidden="true" className="absolute border border-[#f4d35e] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[7px] relative size-full">
            <div className="relative shrink-0 size-[15px]" data-name="Cross">
              <div className="absolute inset-[-10%]">
                <img alt="" className="block max-w-none size-full" src={imgCross} />
              </div>
            </div>
            <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f4d35e] text-[18px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Remove</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={className} data-name="Button / Large / Primary / Standard">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center px-[12px] py-[7px] relative size-full">
          <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
            <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
              </svg>
            </div>
          </div>
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start Topic</p>
        </div>
      </div>
    </div>
  );
}

function SolidMediaPlay({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Media/Play">
      <div className="absolute inset-[19.44%_12.21%_19.86%_27.78%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPaths.p1fe3ad80} fill="var(--fill-0, #1F60D8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function NavBarMobile({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Nav Bar - Mobile">
      <div className="absolute contents inset-[26.25%_61.25%_26.25%_4.8%]">
        <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.6%_61.25%_38.67%_17.25%] justify-center leading-[0] not-italic text-[#232323] text-[22.395px]">
          <p className="leading-[18.187px]">Gopele</p>
        </div>
        <div className="absolute contents inset-[26.25%_85.08%_26.25%_4.8%]">
          <div className="absolute inset-[26.25%_85.08%_26.25%_4.8%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Frame 2">
                <path d={svgPaths.p23915500} fill="var(--fill-0, #1F60D8)" id="Vector" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[27.27%_85.83%_32.13%_6.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
              <g id="Group 12">
                <g id="svgg">
                  <path clipRule="evenodd" d={svgPaths.p27fdb840} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
                </g>
                <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.7753" y="4.39156" />
                <path d={svgPaths.p3f429c00} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[22.5%_2.4%_22.5%_85.87%]" data-name="Solid/Interface/Menu">
        <div className="absolute inset-[26.04%_17.71%]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 22">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p1d223200} fill="#1F60D8" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2b8b7100} fill="#1F60D8" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2dbd0c00} fill="#1F60D8" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SolidGeneralHome({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/General/Home">
      <div className="absolute inset-[14.06%_18.34%_10.42%_18.34%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25">
          <path d={svgPaths.p1f1c6a00} fill="var(--fill-0, #232323)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidStatusStar({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/Star">
      <div className="absolute inset-[10.41%_6.62%_10.25%_6.62%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 64">
          <path d={svgPaths.p11b0e500} fill="var(--fill-0, #F4D35E)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidStatusPin({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/Pin">
      <div className="absolute inset-[15.47%_13.49%_11.57%_13.54%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p1c68cc00} fill="var(--fill-0, #F4D35E)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidStatusCheckedBox({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/Checked-box">
      <div className="absolute inset-[14.63%_14.68%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.p2ff68140} fill="var(--fill-0, #232323)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidStatusLightbulb({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/Lightbulb">
      <div className="absolute inset-[10.42%_18.75%_6.25%_18.75%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 25">
          <g id="Icon">
            <path d={svgPaths.p137c2f00} fill="#232323" />
            <path d={svgPaths.p1f336480} fill="#232323" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolidInterfaceArrowLeft({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Interface/Arrow left">
      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 18">
          <path d={svgPaths.p3e075900} fill="var(--fill-0, #232323)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidStatusUniversity({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/University">
      <div className="absolute inset-[12.5%_6.67%_12.25%_5.18%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 28">
          <path clipRule="evenodd" d={svgPaths.p1803d900} fill="var(--fill-0, #F4D35E)" fillRule="evenodd" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SolidStatusFire({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/Fire">
      <div className="absolute inset-[8.36%_21.88%_12.2%_21.88%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 28">
          <path d={svgPaths.p187cb800} fill="var(--fill-0, #F4D35E)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function LessonCard({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Lesson Card">
      <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
            <p className="leading-[32px] whitespace-pre">Geometry</p>
          </div>
          <div className="relative shrink-0 size-[6px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
            </svg>
          </div>
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
            <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
            <p className="leading-[32px]">Composite Polygons </p>
          </div>
          <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
        </div>
        <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
          <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
          <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
        </div>
      </div>
      <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}

function SolidStatusLightbulb1({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Status/Lightbulb">
      <div className="absolute inset-[10.42%_18.75%_6.25%_18.75%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
          <g id="Icon">
            <path d={svgPaths.p15ceea00} fill="#232323" />
            <path d={svgPaths.p5eb8e80} fill="#232323" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LessonCardWithoutHeader({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Lesson Card - Without header">
      <div className="absolute h-[150px] left-[15px] top-[273px] w-[329px]" data-name="Lesson Details">
        <div className="absolute content-stretch flex flex-col gap-[10px] h-[160px] items-start left-0 not-italic text-white top-[-10px] w-[329px]" data-name="Card Copy">
          <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[25px] w-[328px]">
            <p className="leading-[32px]">Composite Polygons </p>
          </div>
          <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
        </div>
      </div>
      <div className="absolute bottom-[19px] content-stretch flex gap-[18px] items-center left-[15px] w-[328px]" data-name="Buttons">
        <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
        <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
      </div>
      <div className="absolute h-[248px] left-0 top-0 w-[358px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#c4c4c4] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
        </div>
      </div>
    </div>
  );
}

function LessonCardFullWidth({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Lesson Card - Full Width">
      <div className="absolute h-[309px] left-[784px] rounded-[8px] top-[16px] w-[320px]" data-name="Lessons Cover">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[8px]">
            <img alt="" className="absolute h-[155.72%] left-0 max-w-none top-[-27.86%] w-full" src={imgLessonsCover} />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[38px] top-[257px]" data-name="Buttons">
        <Button className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[218px] px-[12px] py-[7px] rounded-[8px] top-[257px]" />
        <Button className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] items-center left-[38px] px-[12px] py-[7px] rounded-[8px] top-[257px]" />
      </div>
      <div className="absolute contents leading-[0] left-[38px] not-italic text-white top-[64px]" data-name="Lesson Details">
        <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[82px] justify-center left-[38px] text-[16px] top-[174px] translate-y-[-50%] w-[582.576px]">
          <p className="leading-[26px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
        </div>
        <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center left-[38px] text-[40px] top-[101px] translate-y-[-50%] w-[609px]">
          <p className="leading-[32px]">Composite Polygons</p>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[38px] top-[20px]" data-name="Subject Lesson Header">
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[2.5px] uppercase">
          <p className="leading-[32px] whitespace-pre">Geometry</p>
        </div>
        <div className="relative shrink-0 size-[6px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
          </svg>
        </div>
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white tracking-[2.5px] uppercase">
          <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
        </div>
      </div>
    </div>
  );
}

function ReadyForDevelopment({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Ready for Development">
      <div className="absolute box-border content-stretch flex gap-[300px] inset-[-1.29%_3.87%_16.53%_4.46%] items-start p-[400px] rounded-[200px]" data-name="Ready for Development">
        <div aria-hidden="true" className="absolute border-[#6483f6] border-[25px] border-dashed inset-0 pointer-events-none rounded-[200px]" />
        <div className="bg-white h-[2337px] overflow-clip relative shrink-0 w-[1440px]" data-name="Home">
          <div className="absolute bg-[#1f60d8] h-[320px] left-0 overflow-clip rounded-[8px] top-[80px] w-[1440px]" data-name="Daily Streak">
            <div className="absolute contents left-[710px] top-[110px]" data-name="Zap Meter">
              <div className="absolute contents left-[710px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[740px] not-italic text-[#face55] text-[20px] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">M</p>
                </div>
                <div className="absolute left-[710px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, #FACE55)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[797px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[827px] not-italic text-[#face55] text-[20px] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">T</p>
                </div>
                <div className="absolute left-[797px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, #FACE55)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[884px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[914px] not-italic text-[#face55] text-[20px] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">w</p>
                </div>
                <div className="absolute left-[884px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, #FACE55)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[971px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1001px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">T</p>
                </div>
                <div className="absolute left-[971px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[1058px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1088px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">F</p>
                </div>
                <div className="absolute left-[1058px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[1145px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1175px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">S</p>
                </div>
                <div className="absolute left-[1145px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[1232px] top-[110px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[1262px] not-italic text-[20px] text-[rgba(255,255,255,0.6)] text-nowrap top-[208px] translate-y-[-50%]">
                  <p className="leading-[32px] whitespace-pre">S</p>
                </div>
                <div className="absolute left-[1232px] size-[78px] top-[110px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 62">
                      <path d={svgPaths.p25fa8c00} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[161px] top-[63px]" data-name="Streak Info">
              <div className="absolute contents left-[161px] top-[174px]" data-name="Weekly Stats">
                <div className="absolute contents left-[161px] top-[220px]" data-name="Longest Streak">
                  <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[205px] not-italic text-[18px] text-nowrap text-white top-[236px] translate-y-[-50%]">
                    <p className="leading-[32px] whitespace-pre">
                      <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-white">Longest Streak:</span> 4 Days
                    </p>
                  </div>
                  <SolidStatusFire className="absolute left-[161px] size-[35px] top-[221px]" />
                </div>
                <div className="absolute contents left-[161px] top-[174px]">
                  <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[206.99px] not-italic text-[18px] text-nowrap text-white top-[194px] translate-y-[-50%]">
                    <p className="leading-[32px] whitespace-pre">
                      <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-white">Lessons Completed:</span> 80
                    </p>
                  </div>
                  <SolidStatusUniversity className="absolute inset-[54.38%_86.39%_34.28%_11.18%]" />
                </div>
              </div>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[19.69%_71.88%_70.31%_11.18%] justify-center leading-[0] not-italic text-[40px] text-nowrap text-white">
                <p className="leading-[32px] whitespace-pre">Daily Streak</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.13%_59.1%_53.75%_11.32%] justify-center leading-[0] not-italic text-[18px] text-nowrap text-white">
                <p className="leading-[26px] whitespace-pre">Well done! You completed 5 lessons this week!</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
            <div className="absolute bg-white inset-0" data-name="Background" />
            <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
              <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
                <p className="leading-[21.568px]">Gopele</p>
              </div>
              <div className="absolute contents left-[78px] top-[19px]">
                <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                    <g id="Frame 2">
                      <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
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
            <div className="absolute inset-[15%_5.21%_15%_90.9%]" data-name="Profile">
              <img alt="" className="block max-w-none size-full" height="56" src={img} width="56" />
            </div>
            <div className="absolute contents inset-[30.05%_14.44%_27.55%_58.47%]" data-name="Nav Links">
              <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_36.6%_32.85%_58.47%] rounded-[8.478px]" />
              <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_36.82%_27.55%_58.69%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center">Home</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_26.96%_27.55%_69%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">Learn</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_14.44%_27.55%_78.64%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">AI Mentor</p>
            </div>
          </div>
          <div className="absolute contents left-[161px] top-[1076px]" data-name="Continue Learning">
            <LessonCardFullWidth className="absolute bg-[#1f60d8] h-[341px] left-[161px] overflow-clip rounded-[8px] top-[1150px] w-[1120px]" />
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[161px] not-italic text-[32px] text-black top-[1113px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">Continue Learning</p>
            </div>
          </div>
          <div className="absolute contents left-[159px] top-[1571px]" data-name="Recommend Topics">
            <div className="absolute contents left-[161px] top-[1655px]" data-name="Card Group">
              <LessonCard className="absolute bg-[#1f60d8] h-[543px] left-[161px] overflow-clip rounded-[8px] top-[1655px] w-[358px]" />
              <div className="absolute bg-[#1f60d8] h-[543px] left-[543px] overflow-clip rounded-[8px] top-[1655px] w-[358px]" data-name="Lesson Card">
                <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">Science</p>
                    </div>
                    <div className="relative shrink-0 size-[6px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">lesson 13 / 22</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
                      <p className="leading-[32px]">Atoms & Charges</p>
                    </div>
                    <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">This course was written in collaboration with Danielle Scarano.</p>
                  </div>
                  <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
                    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                        <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                            <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
                        <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                          <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--fill-0": "rgba(35, 35, 35, 1)", "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                              <path d={svgPaths.p2ab17800} fill="var(--fill-0, #232323)" id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                        <p className="leading-[normal] whitespace-pre">Saved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:DYHx6h3lMdY">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={img1} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#1f60d8] h-[543px] left-[925px] overflow-clip rounded-[8px] top-[1655px] w-[358px]" data-name="Lesson Card">
                <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">Physics</p>
                    </div>
                    <div className="relative shrink-0 size-[6px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">lesson 25 / 26</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
                      <p className="leading-[32px]">Electro Magnetic Radiation</p>
                    </div>
                    <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">Learn the key ideas of computer science with this interactive course – no coding required!</p>
                  </div>
                  <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
                    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                        <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                            <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
                        <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                          <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                              <path d={svgPaths.p2ab17800} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                        <p className="leading-[normal] whitespace-pre">Save</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:xVptEZzgVfo">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={img2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[1152px] top-[1584px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[1152px] top-[1584px]" data-name="Arrow Slider Left">
                <div className="absolute right-[239px] size-[49px] top-[1584px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                    <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="24.5" />
                  </svg>
                </div>
                <SolidInterfaceArrowLeft className="absolute left-[1154px] size-[45px] top-[1586px]" />
              </div>
              <div className="absolute contents left-[1234px] top-[1584px]" data-name="Arrow Slider Right">
                <div className="absolute right-[157px] size-[49px] top-[1584px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                    <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="24.5" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[1236px] size-[45px] top-[1586px]">
                  <div className="flex-none rotate-[180deg]">
                    <SolidInterfaceArrowLeft className="relative size-[45px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[159px] not-italic text-[32px] text-black top-[1608px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">Recommended Topics</p>
            </div>
          </div>
          <div className="absolute contents left-[159px] top-[480px]" data-name="Recommend Topics">
            <div className="absolute contents left-[161px] top-[564px]" data-name="Card Group">
              <div className="absolute bg-[#1f60d8] h-[432px] left-[161px] overflow-clip rounded-[8px] top-[564px] w-[358px]" data-name="Subject Card">
                <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
                  <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">Stretch your analytic muscles with truth-tellers, logical robots, and more!</p>
                  <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
                    <p className="leading-[32px]">Science</p>
                  </div>
                </div>
                <div className="absolute h-[296px] left-0 top-0 w-[358px]" data-name="unsplash:Lvy_S3ELzIs">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img3} />
                </div>
              </div>
              <div className="absolute bg-[#1f60d8] h-[432px] left-[543px] overflow-clip rounded-[8px] top-[564px] w-[358px]" data-name="Subject Card">
                <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
                  <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">Start your algebra journey here with an introduction to variables and equations.</p>
                  <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
                    <p className="leading-[32px]">English</p>
                  </div>
                </div>
                <div className="absolute h-[296px] left-0 top-0 w-[358px]" data-name="unsplash:dvHkp6FzfIM">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img4} />
                </div>
              </div>
              <div className="absolute bg-[#face55] box-border content-stretch flex gap-[17.673px] h-[36px] items-center justify-center left-[703.85px] px-[8.247px] py-[2.356px] rounded-[7.069px] top-[577px] w-[181.385px]">
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17.673px] text-black text-center text-nowrap tracking-[2.3564px] uppercase">
                  <p className="leading-[normal] whitespace-pre">Coming soon</p>
                </div>
              </div>
              <div className="absolute bg-[#1f60d8] h-[432px] left-[925px] overflow-clip rounded-[8px] top-[564px] w-[358px]" data-name="Subject Card">
                <div className="absolute h-[108px] left-[15px] not-italic text-white top-[309px] w-[329px]" data-name="Card Copy">
                  <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[26px] left-0 text-[16px] top-[49px] w-[329px]">Build a foundation for geometry with angles, triangles, and polygons.</p>
                  <div className="absolute bottom-[88px] flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-0 text-[30px] translate-y-[50%] w-[328px]">
                    <p className="leading-[32px]">Mathematics</p>
                  </div>
                </div>
                <div className="absolute h-[296px] left-0 top-0 w-[358px]" data-name="unsplash:NA72e-F7dRc">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img5} />
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[159px] not-italic text-[32px] text-black top-[517px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">Pick a Subject</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[3438px] overflow-clip relative shrink-0 w-[1440px]" data-name="Subject">
          <div className="absolute bg-[#1f60d8] h-[684px] left-0 overflow-clip top-[80px] w-[1440px]" data-name="Subject Details">
            <div className="absolute contents left-[800px] top-[55px]" data-name="Cover & Progress">
              <div className="absolute contents left-[800px] top-[562px]" data-name="Subject Progress">
                <div className="absolute h-[24px] left-[800px] top-[605px] w-[480px]" data-name="Progress Bar">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 480 24">
                    <g id="Progress Bar">
                      <g id="Rectangle 2">
                        <path d={svgPaths.p64be900} fill="white" fillOpacity="0.6" />
                      </g>
                      <rect fill="var(--fill-0, #FACE55)" height="24" id="Rectangle 1" rx="8" width="358" />
                    </g>
                  </svg>
                </div>
                <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[800px] top-[562px]" data-name="Progress Info">
                  <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.5px] uppercase">
                    <p className="leading-[32px] whitespace-pre">Learning progress</p>
                  </div>
                  <div className="relative shrink-0 size-[6px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                      <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.5px] uppercase">
                    <p className="leading-[32px] whitespace-pre">75%</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="Lesson Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonCover} />
                </div>
              </div>
              <div className="absolute left-[800px] rounded-[8px] size-[480px] top-[55px]" data-name="unsplash:Lvy_S3ELzIs">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                  <img alt="" className="absolute h-full left-[-13.23%] max-w-none top-[0.42%] w-[133.33%]" src={img3} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[160px] top-[139px]" data-name="Subject Info">
              <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[160px] not-italic text-[20px] text-white top-[225px] w-[572px]">
                <p className="mb-0">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">Use diagrams and words to explore the very start of algebra, with puzzles and intuition guiding the way. </p>
                <p className="mb-0"> </p>
                <p>By the end of the course, you'll be able to simplify expressions and solve equations using methods that impart deep understanding rather than just procedures. </p>
              </div>
              <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[160px] px-[12px] py-[7px] rounded-[8px] top-[581px]" data-name="Button">
                <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                  <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                      <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Continue Learning</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[160px] not-italic text-[60px] text-white top-[155px] translate-y-[-50%] w-[484px]">
                <p className="leading-[32px]">Science</p>
              </div>
            </div>
            <div className="absolute contents left-[160px] top-[45px]" data-name="Back Nav">
              <div className="absolute contents left-[160px] top-[45px]" data-name="Arrow Slider Left">
                <div className="absolute right-[1238px] size-[42px] top-[45px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                  </svg>
                </div>
                <div className="absolute left-[161.71px] size-[38.571px] top-[46.71px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[224px] not-italic text-[20px] text-white top-[66px] translate-y-[-50%] w-[243px]">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to All Subjects</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
            <div className="absolute bg-white inset-0" data-name="Background" />
            <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
              <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
                <p className="leading-[21.568px]">Gopele</p>
              </div>
              <div className="absolute contents left-[78px] top-[19px]">
                <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                    <g id="Frame 2">
                      <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
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
            <div className="absolute inset-[15%_5.21%_15%_90.9%]" data-name="Profile">
              <img alt="" className="block max-w-none size-full" height="56" src={img} width="56" />
            </div>
            <div className="absolute contents inset-[30.05%_14.44%_27.55%_58.47%]" data-name="Nav Links">
              <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_36.6%_32.85%_58.47%] rounded-[8.478px]" />
              <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_36.82%_27.55%_58.69%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center">Home</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_26.96%_27.55%_69%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">Learn</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_14.44%_27.55%_78.64%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">AI Mentor</p>
            </div>
          </div>
          <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
            <div className="absolute bg-white inset-0" data-name="Background" />
            <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
              <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
                <p className="leading-[21.568px]">Gopele</p>
              </div>
              <div className="absolute contents left-[78px] top-[19px]">
                <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                    <g id="Frame 2">
                      <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
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
            <div className="absolute inset-[15%_5.21%_15%_90.9%]" data-name="Profile">
              <img alt="" className="block max-w-none size-full" height="56" src={img} width="56" />
            </div>
            <div className="absolute contents inset-[30.05%_14.44%_27.55%_58.47%]" data-name="Nav Links">
              <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_36.6%_32.85%_58.47%] rounded-[8.478px]" />
              <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_36.82%_27.55%_58.69%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center">Home</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_26.96%_27.55%_69%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">Learn</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_14.44%_27.55%_78.64%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">AI Mentor</p>
            </div>
          </div>
          <div className="absolute contents left-[162px] top-[844px]" data-name="Recommend Topics">
            <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[928px] w-[1120px]" data-name="Card Group">
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[162px] not-italic text-[32px] text-black top-[881px] translate-y-[-50%] w-[484px]">
              <ol className="list-decimal" start="1">
                <li className="ms-[48px]">
                  <span className="leading-[42px]">Space</span>
                </li>
              </ol>
            </div>
          </div>
          <div className="absolute contents left-[162px] top-[1520px]" data-name="Recommend Topics">
            <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[1604px] w-[1120px]" data-name="Card Group">
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[162px] not-italic text-[32px] text-black top-[1557px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">2. Beyond Space</p>
            </div>
          </div>
          <div className="absolute contents left-[162px] top-[2196px]" data-name="Recommend Topics">
            <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[2827px] w-[1120px]" data-name="Card Group">
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
            </div>
            <div className="absolute content-stretch flex gap-[23px] items-start left-[164px] top-[2280px] w-[1120px]" data-name="Card Group">
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
              <LessonCardWithoutHeader className="bg-[#1f60d8] h-[512px] overflow-clip relative rounded-[8px] shrink-0 w-[358px]" />
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[162px] not-italic text-[32px] text-black top-[2233px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">3. Beyond Universe</p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[3830px] overflow-clip relative shrink-0 w-[1440px]" data-name="Lesson">
          <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Lesson Nav & Progress">
            <div className="absolute bg-white inset-0" data-name="Background" />
            <div className="absolute contents inset-[40%_27.78%_40%_26.74%]" data-name="Pill Lesson Progress">
              <div className="absolute bg-[#f4d35e] inset-[40%_69.1%_40%_26.74%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_63.19%_40%_32.64%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_57.29%_40%_38.54%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_51.39%_40%_44.44%] rounded-[12px]" />
              <div className="absolute bg-[#1f60d8] inset-[40%_45.49%_40%_50.35%] rounded-[12px]" />
              <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_39.58%_40%_56.25%] rounded-[12px]" />
              <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_33.68%_40%_62.15%] rounded-[12px]" />
              <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_27.78%_40%_68.06%] rounded-[12px]" />
            </div>
            <div className="absolute contents left-[72px] top-[19px]" data-name="Previous">
              <div className="absolute contents left-[72px] top-[19px]" data-name="Arrow Slider Left">
                <div className="absolute right-[1326px] size-[42px] top-[19px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                  </svg>
                </div>
                <div className="absolute left-[73.71px] size-[38.571px] top-[20.71px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[136px] not-italic text-[20px] text-black text-nowrap top-[40px] translate-y-[-50%]">
                <p className="leading-[26px] whitespace-pre">Previous</p>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[22px] items-center leading-[0] left-[1243px] top-[19px]" data-name="Next">
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center not-italic relative shrink-0 text-[20px] text-black text-nowrap">
                <p className="leading-[26px] whitespace-pre">Next</p>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Arrow Slider Left">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[42px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                        <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                      </svg>
                    </div>
                    <div className="[grid-area:1_/_1] ml-[1.714px] mt-[1.714px] relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                          <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[360px] not-italic text-[#232323] text-[20px] top-[229px] w-[720px]">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Ultrices ut sit sagittis, nulla id tortor, morbi et. Velit tempus quam ac nec et suscipit nam sed lacus. Dolor eu etiam mattis eget. </p>
            <p className="mb-0">&nbsp;</p>
            <p>Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et. Ultrices ut sit sagittis, nulla id tortor, morbi et. Velit tempus quam ac nec et suscipit nam sed lacus. Dolor eu etiam mattis eget. </p>
          </div>
          <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[32px] left-[359px] not-italic text-[#232323] text-[40px] top-[160px] w-[572px]">What is Space?</p>
          <div className="absolute bg-[#1f60d8] h-[401px] left-[360px] overflow-clip rounded-[8px] top-[809px] w-[720px]" data-name="Activity: MCQ">
            <div className="absolute contents left-[35px] top-[21px]" data-name="MCQ Logo">
              <div className="absolute right-[636px] size-[49px] top-[21px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <circle cx="24.5" cy="24.5" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="24.5" />
                </svg>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[34px] justify-center leading-[0] left-[59.5px] not-italic text-[#232323] text-[28px] text-center top-[46px] translate-x-[-50%] translate-y-[-50%] w-[23px]">
                <p className="leading-[32px]">?</p>
              </div>
            </div>
            <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">What is Space?</p>
            <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[104px]" data-name="Radio button group">
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-[#face55] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Unoccupid space beyond earth</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Fames varius semper est vestibulum</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Fusce donec orci semper cras</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Velit tempus quam ac nec</p>
              </div>
            </div>
            <div className="absolute contents left-[35px] top-[325px]" data-name="Buttons">
              <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[259px] px-[12px] py-[7px] rounded-[8px] top-[325px]" data-name="Button">
                <SolidStatusLightbulb className="relative shrink-0 size-[30px]" />
                <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">Show Hint</p>
                </div>
              </div>
              <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[35px] px-[12px] py-[7px] rounded-[8px] top-[325px]" data-name="Button">
                <SolidStatusCheckedBox className="relative shrink-0 size-[30px]" />
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#1f60d8] h-[217px] left-[360px] overflow-clip rounded-[8px] top-[1839px] w-[720px]" data-name="Activity: MCQ">
            <div className="absolute contents left-[35px] top-[40px]" data-name="MCQ Logo">
              <div className="absolute right-[636px] size-[49px] top-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
                </svg>
              </div>
              <SolidStatusLightbulb1 className="absolute left-[48px] size-[24px] top-[52px]" />
            </div>
            <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[38px] left-[110px] not-italic text-[28px] text-white top-[26px] w-[572px]">How many stars there might be in the universe?</p>
            <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[110px] not-italic text-[20px] text-white top-[125px] w-[572px]">Take your time to think about how many stars there might be in the sky. It doesnt has to be accurate.</p>
          </div>
          <div className="absolute bg-[#1f60d8] h-[549px] left-[360px] overflow-clip rounded-[8px] top-[1250px] w-[720px]" data-name="Activity: MCQ - Answered">
            <div className="absolute contents left-[35px] top-[21px]" data-name="MCQ Logo">
              <div className="absolute right-[636px] size-[49px] top-[21px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
                </svg>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[34px] justify-center leading-[0] left-[59.5px] not-italic text-[#232323] text-[28px] text-center top-[46px] translate-x-[-50%] translate-y-[-50%] w-[23px]">
                <p className="leading-[32px]">?</p>
              </div>
            </div>
            <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">What is Universe?</p>
            <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[104px]" data-name="Radio button group">
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Everything</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">I dont know</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">None of the above</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">All of the above</p>
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[54px] justify-center leading-[0] left-[41px] not-italic text-[#f4d35e] text-[24px] top-[332px] translate-y-[-50%] w-[329px]">
              <p className="leading-[30px] whitespace-pre-wrap">Correct Answer 🎉🎉🎉</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[100px] not-italic text-[#f4d35e] text-[20px] text-nowrap top-[406px] translate-y-[-50%]">
              <p className="leading-[30px] whitespace-pre">Explaination</p>
            </div>
            <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[24px] left-[100px] not-italic text-[16px] text-white top-[423px] w-[558px] whitespace-pre-wrap">Because universe is everything & everything is universe expecept you are a Marvel fan where they usually have a lot of universes regularly colliding with each other.</p>
            <div className="absolute h-[131px] left-[35px] rounded-[8px] top-[379px] w-[650px]">
              <div aria-hidden="true" className="absolute border border-[#f4d35e] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <SolidStatusPin className="absolute left-[56px] size-[32px] top-[391px]" />
          </div>
          <div className="absolute bg-[#1f60d8] h-[567px] left-[360px] overflow-clip rounded-[8px] top-[2096px] w-[720px]" data-name="Activity: MCQ">
            <div className="absolute contents left-[35px] top-[21px]" data-name="MCQ Logo">
              <div className="absolute right-[636px] size-[49px] top-[21px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                  <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
                </svg>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[34px] justify-center leading-[0] left-[59.5px] not-italic text-[#232323] text-[28px] text-center top-[46px] translate-x-[-50%] translate-y-[-50%] w-[23px]">
                <p className="leading-[32px]">?</p>
              </div>
            </div>
            <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[110px] not-italic text-[28px] text-nowrap text-white top-[31px] whitespace-pre">Calculate Frequency pattern</p>
            <div className="absolute h-[123px] left-[110px] rounded-[8px] top-[88px] w-[545px]" data-name="image 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage1} />
            </div>
            <div className="absolute bottom-[28px] contents left-[35px]" data-name="Buttons">
              <div className="absolute bg-white bottom-[28px] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[259px] px-[12px] py-[7px] rounded-[8px]" data-name="Button">
                <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Lightbulb">
                  <div className="absolute inset-[10.42%_18.75%_6.25%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 25">
                      <g id="Icon">
                        <path d={svgPaths.p137c2f00} fill="#232323" />
                        <path d={svgPaths.p1f336480} fill="#232323" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">Show Hint</p>
                </div>
              </div>
              <div className="absolute bg-[#f4d35e] bottom-[28px] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[35px] px-[12px] py-[7px] rounded-[8px]" data-name="Button">
                <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Checked-box">
                  <div className="absolute inset-[14.63%_14.68%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.p2ff68140} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[48px] overflow-clip top-[269px]" data-name="Radio button group">
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">2+2</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">I am bad at maths</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">85*7+4-8/51+95+95*5+2+2+</p>
              </div>
              <div className="content-stretch flex gap-[36px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[30px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Medium',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">All of the above</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-[1320px_1121px_2238px_47px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_8px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" data-name="Sticky">
            <div className="absolute flex inset-[-11.336px] items-center justify-center">
              <div className="flex-none rotate-[355deg] size-[272px]">
                <div className="bg-[#ffd600] box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full" data-name="Sticky">
                  <p className="basis-0 font-['Comic_Sans_MS:Regular',_sans-serif] grow h-full leading-[28px] min-h-px min-w-px not-italic opacity-90 relative shrink-0 text-[24px] text-black">Alex, over here I’ve designed multiple activity components to cover major layout use cases.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[357px] top-[2703px]" data-name="Image with Caption">
            <div className="absolute h-[457px] left-[357px] rounded-[8px] top-[2703px] w-[723px]" data-name="unsplash:0o_GEzyargo">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplash0OGEzyargo} />
              </div>
            </div>
            <p className="absolute font-['Poppins:Medium',_sans-serif] h-[24px] leading-[26px] left-[718.5px] not-italic text-[#9b9b9b] text-[14px] text-center top-[3165px] translate-x-[-50%] w-[251px]">A cluster of stars. Source: Unsplash</p>
          </div>
          <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[30px] left-[335px] not-italic text-[#232323] text-[20px] top-[3298px] w-[720px]">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. </p>
            <p className="mb-0">&nbsp;</p>
            <p>Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et</p>
          </div>
          <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[32px] left-[357px] not-italic text-[#232323] text-[40px] top-[3256px] w-[572px]">What Space is not?</p>
          <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[569px] top-[3676px]" data-name="Buttons">
            <div className="bg-white box-border content-stretch flex gap-[7px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="relative shrink-0 size-[32px]" data-name="Solid/General/Home">
                <div className="absolute inset-[14.06%_18.34%_10.42%_18.34%]" data-name="Icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25">
                    <path d={svgPaths.p1f1c6a00} fill="var(--fill-0, #232323)" id="Icon" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Exit to Home</p>
              </div>
            </div>
            <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Next</p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                    <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                        <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[253px_32px_3279px_1124px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_2px_8px_0px_rgba(0,0,0,0.04),0px_8px_16px_0px_rgba(0,0,0,0.08)]" data-name="Sticky">
            <div className="absolute flex inset-[-11.336px] items-center justify-center">
              <div className="flex-none rotate-[355deg] size-[272px]">
                <div className="bg-[#ff634e] box-border content-stretch flex gap-[10px] items-start p-[24px] relative size-full" data-name="Sticky">
                  <p className="basis-0 font-['Comic_Sans_MS:Regular',_sans-serif] grow h-full leading-[28px] min-h-px min-w-px not-italic opacity-90 relative shrink-0 text-[24px] text-black">Folks I had a few suggestions like what if we add some accessibility controls like text size, multiple fonts, text to speech, dark mode, etc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[1454px] overflow-clip relative shrink-0 w-[1440px]" data-name="Feedback">
          <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Lesson Nav & Progress">
            <div className="absolute bg-[#fdf0e9] inset-0" data-name="Background" />
            <div className="absolute contents inset-[40%_27.78%_40%_26.74%]" data-name="Pill Lesson Progress">
              <div className="absolute bg-[#f4d35e] inset-[40%_69.1%_40%_26.74%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_63.19%_40%_32.64%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_57.29%_40%_38.54%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_51.39%_40%_44.44%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_45.49%_40%_50.35%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_39.58%_40%_56.25%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_33.68%_40%_62.15%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_27.78%_40%_68.06%] rounded-[12px]" />
            </div>
            <div className="absolute contents left-[72px] top-[19px]" data-name="Previous">
              <div className="absolute contents left-[72px] top-[19px]" data-name="Arrow Slider Left">
                <div className="absolute right-[1326px] size-[42px] top-[19px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                  </svg>
                </div>
                <div className="absolute left-[73.71px] size-[38.571px] top-[20.71px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[136px] not-italic text-[20px] text-black text-nowrap top-[40px] translate-y-[-50%]">
                <p className="leading-[26px] whitespace-pre">Previous</p>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[72px] justify-center leading-[0] left-[720px] not-italic text-[40px] text-black text-center top-[196px] translate-x-[-50%] translate-y-[-50%] w-[878px]">
            <p className="leading-[32px]">You did it! Congratulations 🎉🔥🌈</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[72px] justify-center leading-[0] left-[720px] not-italic text-[32px] text-black text-center top-[834px] translate-x-[-50%] translate-y-[-50%] w-[878px]">
            <p className="leading-[42px]">Rate your experience</p>
          </div>
          <div className="absolute contents left-[420px] top-[882px]" data-name="Stars">
            <SolidStatusStar className="absolute left-[420px] size-[80px] top-[882px]" />
            <SolidStatusStar className="absolute left-[550px] size-[80px] top-[882px]" />
            <SolidStatusStar className="absolute left-[680px] size-[80px] top-[882px]" />
            <div className="absolute left-[810px] size-[80px] top-[882px]" data-name="Solid/Status/Star">
              <div className="absolute inset-[10.41%_6.62%_10.25%_6.62%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 64">
                  <path d={svgPaths.p11b0e500} fill="var(--fill-0, #F4D35E)" id="Icon" />
                </svg>
              </div>
            </div>
            <div className="absolute left-[940px] size-[80px] top-[882px]" data-name="Solid/Status/Star">
              <div className="absolute inset-[10.41%_6.62%_10.25%_6.62%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 64">
                  <path d={svgPaths.p11b0e500} fill="var(--fill-0, #232323)" fillOpacity="0.2" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute h-[447px] left-[484px] top-[289px] w-[471px]" data-name="2 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img23} />
          </div>
          <div className="absolute contents left-[383px] top-[1024px]" data-name="Text Area">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[385px] not-italic text-[20px] text-nowrap text-white top-[1039px] translate-y-[-50%]">
              <p className="leading-[30px] whitespace-pre">Additional Feedback (optional)</p>
            </div>
            <div className="absolute bg-white h-[121px] left-[383px] rounded-[8px] top-[1060px] w-[675px]" data-name="Text field">
              <div className="h-[121px] overflow-clip relative rounded-[inherit] w-[675px]">
                <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[19px] not-italic text-[20px] text-[rgba(35,35,35,0.6)] text-nowrap top-[30px] translate-y-[-50%]">
                  <p className="leading-[30px] whitespace-pre">Type here...</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[514px] top-[1268px]" data-name="Buttons">
            <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <SolidGeneralHome className="relative shrink-0 size-[32px]" />
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Exit to Home</p>
              </div>
            </div>
            <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start next lesson</p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                    <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                        <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[1779px] overflow-clip relative shrink-0 w-[1440px]" data-name="AI Mentor">
          <div className="absolute bg-[#1f60d8] h-[365px] left-0 overflow-clip rounded-[8px] top-[80px] w-[1440px]" data-name="Meet Wall-E">
            <div className="absolute h-[273px] left-[911px] top-[50px] w-[317px]" data-name="Walle">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWalle} />
            </div>
            <div className="absolute contents left-[163px] top-[79px]" data-name="Walle Intro">
              <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[163px] px-[12px] py-[7px] rounded-[8px] top-[238px]" data-name="Button">
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">See Recommedations</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[21.64%_67.99%_69.59%_11.32%] justify-center leading-[0] not-italic text-[40px] text-nowrap text-white">
                <p className="leading-[32px] whitespace-pre">Meet, Wall-E ;)</p>
              </div>
              <p className="absolute font-['Poppins:Medium',_sans-serif] inset-[35.62%_58.33%_43.01%_11.46%] leading-[26px] not-italic text-[16px] text-white">Wall-E is your personal teacher to help you become better by evaluating your weak areas & revision suggestions. </p>
            </div>
          </div>
          <div className="absolute h-[80px] left-0 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[1440px]" data-name="Nav Bar">
            <div className="absolute bg-white inset-0" data-name="Background" />
            <div className="absolute contents left-[78px] top-[19px]" data-name="Logo 2">
              <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.39%_84.1%_34.65%_9.26%] justify-center leading-[0] not-italic text-[#232323] text-[26.558px]">
                <p className="leading-[21.568px]">Gopele</p>
              </div>
              <div className="absolute contents left-[78px] top-[19px]">
                <div className="absolute h-[45.065px] left-[78px] top-[19px] w-[45.024px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                    <g id="Frame 2">
                      <path d={svgPaths.p186aa800} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[24.96%_91.69%_26.9%_5.91%]">
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
            <div className="absolute inset-[15%_5.21%_15%_90.9%]" data-name="Profile">
              <img alt="" className="block max-w-none size-full" height="56" src={img} width="56" />
            </div>
            <div className="absolute contents inset-[30.05%_14.44%_27.55%_58.47%]" data-name="Nav Links">
              <div className="absolute bg-[rgba(31,96,216,0.4)] inset-[56.55%_36.6%_32.85%_58.47%] rounded-[8.478px]" />
              <p className="absolute font-['Poppins:SemiBold',_sans-serif] inset-[30.05%_36.82%_27.55%_58.69%] leading-[33.913px] not-italic text-[#333333] text-[21.196px] text-center">Home</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_26.96%_27.55%_69%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">Learn</p>
              <p className="absolute font-['Poppins:Regular',_sans-serif] inset-[30.05%_14.44%_27.55%_78.64%] leading-[33.913px] not-italic text-[#555555] text-[21.196px] text-center">AI Mentor</p>
            </div>
          </div>
          <div className="absolute contents left-[160px] top-[1026px]" data-name="Recommend Topics">
            <div className="absolute contents left-[162px] top-[1110px]" data-name="Card Group">
              <LessonCard className="absolute bg-[#1f60d8] h-[543px] left-[162px] overflow-clip rounded-[8px] top-[1110px] w-[358px]" />
              <div className="absolute bg-[#1f60d8] h-[543px] left-[544px] overflow-clip rounded-[8px] top-[1110px] w-[358px]" data-name="Lesson Card">
                <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">Science</p>
                    </div>
                    <div className="relative shrink-0 size-[6px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">lesson 13 / 22</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
                      <p className="leading-[32px]">Atoms & Charges</p>
                    </div>
                    <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">This course was written in collaboration with Danielle Scarano.</p>
                  </div>
                  <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
                    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                        <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                            <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
                        <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                          <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--fill-0": "rgba(35, 35, 35, 1)", "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                              <path d={svgPaths.p2ab17800} fill="var(--fill-0, #232323)" id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                        <p className="leading-[normal] whitespace-pre">Saved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:DYHx6h3lMdY">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={img1} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#1f60d8] h-[543px] left-[926px] overflow-clip rounded-[8px] top-[1110px] w-[358px]" data-name="Lesson Card">
                <div className="absolute content-stretch flex flex-col gap-[12px] h-[264px] items-start left-[15px] top-[260px] w-[329px]" data-name="Lesson Details">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Subject Lesson Header">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">Physics</p>
                    </div>
                    <div className="relative shrink-0 size-[6px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                        <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                      <p className="leading-[32px] whitespace-pre">lesson 25 / 26</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[9px] h-[160px] items-start not-italic relative shrink-0 text-white w-[329px]" data-name="Card Copy">
                    <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] relative shrink-0 text-[26px] w-[328px]">
                      <p className="leading-[32px]">Electro Magnetic Radiation</p>
                    </div>
                    <p className="basis-0 font-['Poppins:Medium',_sans-serif] grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px] w-[329px]">Learn the key ideas of computer science with this interactive course – no coding required!</p>
                  </div>
                  <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[328px]" data-name="Buttons">
                    <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                        <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                            <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                          </svg>
                        </div>
                      </div>
                      <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
                    </div>
                    <div className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" data-name="Button">
                      <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
                        <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                          <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--stroke-0": "rgba(35, 35, 35, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                              <path d={svgPaths.p2ab17800} id="Icon" stroke="var(--stroke-0, #232323)" strokeWidth="3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                        <p className="leading-[normal] whitespace-pre">Save</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[228px] left-[14px] rounded-[8px] top-[15px] w-[330px]" data-name="unsplash:xVptEZzgVfo">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                    <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                    <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={img2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents left-[1153px] top-[1039px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[1153px] top-[1039px]" data-name="Arrow Slider Left">
                <div className="absolute right-[238px] size-[49px] top-[1039px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                    <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
                  </svg>
                </div>
                <SolidInterfaceArrowLeft className="absolute left-[1155px] size-[45px] top-[1041px]" />
              </div>
              <div className="absolute contents left-[1235px] top-[1039px]" data-name="Arrow Slider Right">
                <div className="absolute right-[156px] size-[49px] top-[1039px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
                    <circle cx="24.5" cy="24.5" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="24.5" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[1237px] size-[45px] top-[1041px]">
                  <div className="flex-none rotate-[180deg]">
                    <SolidInterfaceArrowLeft className="relative size-[45px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[160px] not-italic text-[32px] text-black top-[1063px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">Recommended Revision</p>
            </div>
          </div>
          <div className="absolute contents left-[160px] top-[525px]" data-name="Spaced Repetition">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[160px] not-italic text-[32px] text-black top-[562px] translate-y-[-50%] w-[484px]">
              <p className="leading-[42px]">Spaced Repetition</p>
            </div>
            <div className="absolute bg-[#1f60d8] h-[361px] left-[160px] overflow-clip rounded-[8px] top-[605px] w-[1120px]" data-name="Spaced Repetition">
              <div className="absolute contents leading-[0] left-[40px] not-italic text-white top-[104px]" data-name="Lesson Details">
                <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[82px] justify-center left-[40px] text-[16px] top-[214px] translate-y-[-50%] w-[463px]">
                  <p className="leading-[26px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                </div>
                <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center left-[40px] text-[40px] top-[141px] translate-y-[-50%] w-[484px]">
                  <p className="leading-[32px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute contents left-[54px] top-[20px]" data-name="Repetion Chain">
                <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.005305095110088587)+(var(--transform-inner-height)*0.999985933303833)))] items-center justify-center left-[54px] top-[43.89px] w-[calc(1px*((var(--transform-inner-height)*0.005305095110088587)+(var(--transform-inner-width)*0.999985933303833)))]" style={{ "--transform-inner-width": "562.921875", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="flex-none rotate-[359.696deg]">
                    <div className="h-0 relative w-[562.932px]">
                      <div className="absolute bottom-0 left-0 right-0 top-[-5px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 563 5">
                          <line id="Line 1" stroke="var(--stroke-0, #F4D35E)" strokeWidth="5" x2="562.932" y1="2.5" y2="2.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[50.021px] left-[54px] top-[20px] w-[601px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 601 51">
                    <g id="Group 10">
                      <circle cx="25.0106" cy="25.0106" fill="var(--fill-0, #F4D35E)" id="Ellipse 3" r="25.0106" />
                      <circle cx="116.84" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 4" r="25.0106" />
                      <circle cx="208.67" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 5" r="25.0106" />
                      <circle cx="300.5" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 6" r="25.0106" />
                      <circle cx="392.33" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 7" r="25.0106" />
                      <circle cx="484.16" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 8" r="25.0106" />
                      <circle cx="575.989" cy="25.0105" fill="var(--fill-0, white)" id="Ellipse 9" r="25.0106" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-[157.03px] size-[26.877px] top-[31.95px]" data-name="Solid/Media/Play">
                  <div className="absolute inset-[19.44%_12.21%_19.86%_27.78%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                      <path d={svgPaths.p1fe3ad80} fill="var(--fill-0, #1F60D8)" id="Icon" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-[621.4px] size-[17.918px] top-[36.42px]" data-name="bx:bxs-lock-alt">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="bx:bxs-lock-alt">
                      <path d={svgPaths.p25253b80} fill="var(--fill-0, #151A21)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-[345.17px] size-[17.918px] top-[36.42px]" data-name="bx:bxs-lock-alt">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="bx:bxs-lock-alt">
                      <path d={svgPaths.p25253b80} fill="var(--fill-0, #151A21)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-[253.34px] size-[17.918px] top-[36.42px]" data-name="bx:bxs-lock-alt">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="bx:bxs-lock-alt">
                      <path d={svgPaths.p25253b80} fill="var(--fill-0, #151A21)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-[529.57px] size-[17.918px] top-[36.42px]" data-name="bx:bxs-lock-alt">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="bx:bxs-lock-alt">
                      <path d={svgPaths.p25253b80} fill="var(--fill-0, #151A21)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-[437.74px] size-[17.918px] top-[34.93px]" data-name="bx:bxs-lock-alt">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="bx:bxs-lock-alt">
                      <path d={svgPaths.p25253b80} fill="var(--fill-0, #151A21)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute left-[61.47px] size-[34.343px] top-[26.72px]" data-name="bx:bx-check">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                    <g id="bx:bx-check">
                      <path d={svgPaths.p51e2540} fill="var(--fill-0, #232323)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[18px] items-center left-[36px] top-[289px] w-[328px]" data-name="Buttons">
                <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
                <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[155px]" />
              </div>
              <div className="absolute h-[330px] left-[762px] rounded-[8px] top-[16px] w-[342px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[8px]">
                    <img alt="" className="absolute h-[155.72%] left-0 max-w-none top-[-27.86%] w-full" src={imgLessonsCover} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[1955px] overflow-clip relative shrink-0 w-[375px]" data-name="Home - Mobile">
          <div className="absolute bg-[#1f60d8] h-[411px] left-0 overflow-clip top-[80px] w-[375px]" data-name="Daily Streak">
            <div className="absolute contents left-[17px] top-[38px]" data-name="Streak Info">
              <div className="absolute contents left-[17px] top-[176px]" data-name="Weekly Stats">
                <div className="absolute contents left-[17px] top-[222px]" data-name="Longest Streak">
                  <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[61px] not-italic text-[18px] text-nowrap text-white top-[238px] translate-y-[-50%]">
                    <p className="leading-[32px] whitespace-pre">
                      <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-white">Longest Streak:</span> 4 Days
                    </p>
                  </div>
                  <SolidStatusFire className="absolute left-[17px] size-[35px] top-[223px]" />
                </div>
                <div className="absolute contents left-[17px] top-[176px]">
                  <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] left-[62.99px] not-italic text-[18px] text-nowrap text-white top-[196px] translate-y-[-50%]">
                    <p className="leading-[32px] whitespace-pre">
                      <span className="font-['Poppins:SemiBold',_sans-serif] not-italic text-white">Lessons Completed:</span> 80
                    </p>
                  </div>
                  <SolidStatusUniversity className="absolute inset-[42.82%_86.13%_48.35%_4.53%]" />
                </div>
              </div>
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[9.25%_37.07%_82.97%_4.53%] justify-center leading-[0] not-italic text-[36px] text-nowrap text-white">
                <p className="leading-[32px] whitespace-pre">Daily Streak</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] inset-[23.6%_4.8%_63.75%_5.07%] justify-center leading-[0] not-italic text-[18px] text-white">
                <p className="leading-[26px]">Well done! You completed 5 lessons this week!</p>
              </div>
            </div>
            <div className="absolute contents left-[10px] top-[299.37px]" data-name="Zap Meter">
              <div className="absolute contents left-[10px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[27.7px] not-italic text-[#face55] text-[16px] top-[357.19px] translate-y-[-50%] w-[11.21px]">
                  <p className="leading-[32px]">M</p>
                </div>
                <div className="absolute left-[10px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, #FACE55)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[61.33px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[79.03px] not-italic text-[#face55] text-[16px] top-[357.19px] translate-y-[-50%] w-[7.08px]">
                  <p className="leading-[32px]">T</p>
                </div>
                <div className="absolute left-[61.33px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, #FACE55)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[112.66px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[130.36px] not-italic text-[#face55] text-[16px] top-[357.19px] translate-y-[-50%] w-[10.62px]">
                  <p className="leading-[32px]">w</p>
                </div>
                <div className="absolute left-[112.66px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, #FACE55)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[163.99px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[181.69px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[357.19px] translate-y-[-50%] w-[7.08px]">
                  <p className="leading-[32px]">T</p>
                </div>
                <div className="absolute left-[163.99px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[215.32px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[233.02px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[357.19px] translate-y-[-50%] w-[6.49px]">
                  <p className="leading-[32px]">F</p>
                </div>
                <div className="absolute left-[215.32px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[266.65px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[284.35px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[357.19px] translate-y-[-50%] w-[7.67px]">
                  <p className="leading-[32px]">S</p>
                </div>
                <div className="absolute left-[266.65px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[317.98px] top-[299.37px]">
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[18.88px] justify-center leading-[0] left-[335.68px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] top-[357.19px] translate-y-[-50%] w-[7.67px]">
                  <p className="leading-[32px]">S</p>
                </div>
                <div className="absolute left-[317.98px] size-[46.02px] top-[299.37px]" data-name="Solid/Status/Lightning-alt">
                  <div className="absolute inset-[10.42%_22.92%_10.42%_18.75%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 37">
                      <path d={svgPaths.p262a5580} fill="var(--fill-0, white)" fillOpacity="0.6" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavBarMobile className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" />
          <div className="absolute contents left-[17px] top-[571px]" data-name="Continue Learning - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[608px] translate-y-[-50%] w-[340px]">
              <p className="leading-[36px]">Continue Learning</p>
            </div>
            <div className="absolute bg-[#1f60d8] h-[444px] left-[19px] overflow-clip rounded-[8px] top-[645px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute contents left-[16px] top-[310px]" data-name="Buttons">
                <Button className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[16px] px-[12px] py-[7px] rounded-[8px] top-[370px]" />
                <Button className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[16px] px-[12px] py-[7px] rounded-[8px] top-[310px]" />
              </div>
              <div className="absolute contents left-[16px] not-italic text-white top-[72px]" data-name="Lesson Details">
                <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[16px] text-[16px] top-[170px] w-[299px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[74px] justify-center leading-[0] left-[16px] text-[36px] top-[109px] translate-y-[-50%] w-[319px]">
                  <p className="leading-[48px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[16px] top-[16px]" data-name="Subject Lesson Header">
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">Geometry</p>
                </div>
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[17px] top-[1169px]" data-name="Continue Learning - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[1206px] translate-y-[-50%] w-[228px]">
              <p className="leading-[36px]">Recommended Topics</p>
            </div>
            <div className="absolute bg-[#1f60d8] h-[622px] left-[19px] overflow-clip rounded-[8px] top-[1263px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute contents left-[10px] not-italic text-white top-[314px]" data-name="Lesson Details">
                <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[10px] text-[16px] top-[412px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[74px] justify-center leading-[0] left-[10px] text-[36px] top-[351px] translate-y-[-50%] w-[319px]">
                  <p className="leading-[48px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[10px] top-[256px]" data-name="Subject Lesson Header">
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">Geometry</p>
                </div>
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[14px] items-center left-[10px] top-[552px] w-[319px]" data-name="Buttons">
                <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
                <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
              </div>
              <div className="absolute h-[228px] left-[13px] rounded-[8px] top-[13px] w-[312px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[273px] top-[1190px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[273px] top-[1190px]" data-name="Arrow Slider Left">
                <div className="absolute right-[70px] size-[32px] top-[1190px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <SolidInterfaceArrowLeft className="absolute left-[274.31px] size-[29.388px] top-[1191.31px]" />
              </div>
              <div className="absolute contents left-[325px] top-[1190px]" data-name="Arrow Slider Right">
                <div className="absolute right-[18px] size-[32px] top-[1190px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[326.31px] size-[29.388px] top-[1191.31px]">
                  <div className="flex-none rotate-[180deg]">
                    <SolidInterfaceArrowLeft className="relative size-[29.388px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[1697px] overflow-clip relative shrink-0 w-[375px]" data-name="Learn - Mobile">
          <NavBarMobile className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" />
          <div className="absolute contents left-[17px] top-[136px]" data-name="Pick a Subject - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[173px] translate-y-[-50%] w-[340px]">
              <p className="leading-[36px]">Pick a Subject</p>
            </div>
            <div className="absolute bg-[#1f60d8] h-[444px] left-[19px] overflow-clip rounded-[8px] top-[210px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[10px] not-italic text-white top-[264px]" data-name="Lesson Details">
                <p className="font-['Poppins:Bold',_sans-serif] leading-[32px] relative shrink-0 text-[30px] w-[306px]">Geometry</p>
                <p className="font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] relative shrink-0 text-[16px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
              </div>
              <div className="absolute h-[235px] left-0 top-0 w-[339px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#c4c4c4] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
                </div>
              </div>
              <div className="absolute h-[235px] left-0 top-0 w-[339px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#c4c4c4] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#1f60d8] h-[444px] left-[19px] overflow-clip rounded-[8px] top-[690px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[10px] not-italic text-white top-[264px]" data-name="Lesson Details">
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[32px] relative shrink-0 text-[30px] w-[306px]">Geometry</p>
                <p className="font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] relative shrink-0 text-[16px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
              </div>
              <div className="absolute h-[235px] left-0 top-0 w-[339px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#c4c4c4] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
                </div>
              </div>
              <div className="absolute h-[235px] left-0 top-0 w-[339px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#c4c4c4] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
            <div className="absolute bg-[#1f60d8] h-[444px] left-[19px] overflow-clip rounded-[8px] top-[1170px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[10px] not-italic text-white top-[264px]" data-name="Lesson Details">
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[32px] relative shrink-0 text-[30px] w-[306px]">Geometry</p>
                <p className="font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] relative shrink-0 text-[16px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
              </div>
              <div className="absolute h-[235px] left-0 top-0 w-[339px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#c4c4c4] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
                </div>
              </div>
              <div className="absolute h-[235px] left-0 top-0 w-[339px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <div className="absolute bg-[#c4c4c4] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[2871px] overflow-clip relative shrink-0 w-[375px]" data-name="Subject - Mobile">
          <div className="absolute contents left-[17px] top-[767px]" data-name="Continue Learning - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[73px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[803.5px] translate-y-[-50%] w-[164px]">
              <ol className="list-decimal" start="1">
                <li className="ms-[36px]">
                  <span className="leading-[36px]">Space</span>
                </li>
              </ol>
            </div>
            <div className="absolute contents left-[273px] top-[788px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[273px] top-[788px]" data-name="Arrow Slider Left">
                <div className="absolute right-[70px] size-[32px] top-[788px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #1F60D8)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute left-[274.31px] size-[29.388px] top-[789.31px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                      <path d={svgPaths.p1a05bc00} fill="var(--fill-0, white)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[325px] top-[788px]" data-name="Arrow Slider Right">
                <div className="absolute right-[18px] size-[32px] top-[788px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #1F60D8)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[326.31px] size-[29.388px] top-[789.31px]">
                  <div className="flex-none rotate-[180deg]">
                    <div className="relative size-[29.388px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                          <path d={svgPaths.p1a05bc00} fill="var(--fill-0, white)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#1f60d8] h-[558.041px] left-[19px] overflow-clip rounded-[8px] top-[839.96px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute contents left-[10px] not-italic text-white top-[265.04px]" data-name="Lesson Details">
                <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[10px] text-[16px] top-[363.04px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[10px] text-[36px] top-[302.04px] translate-y-[-50%] w-[319px]">
                  <p className="leading-[48px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[14px] items-center left-[10px] top-[492.04px] w-[319px]" data-name="Buttons">
                <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
                <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
              </div>
              <div className="absolute h-[228px] left-[13px] rounded-[8px] top-[13.04px] w-[312px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[17px] top-[1478px]" data-name="Continue Learning - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[73px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[1514.5px] translate-y-[-50%] w-[164px]">
              <ol className="list-decimal" start="1">
                <li className="ms-[36px]">
                  <span className="leading-[36px]">Space</span>
                </li>
              </ol>
            </div>
            <div className="absolute contents left-[273px] top-[1499px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[273px] top-[1499px]" data-name="Arrow Slider Left">
                <div className="absolute right-[70px] size-[32px] top-[1499px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #1F60D8)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute left-[274.31px] size-[29.388px] top-[1500.31px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                      <path d={svgPaths.p1a05bc00} fill="var(--fill-0, white)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[325px] top-[1499px]" data-name="Arrow Slider Right">
                <div className="absolute right-[18px] size-[32px] top-[1499px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #1F60D8)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[326.31px] size-[29.388px] top-[1500.31px]">
                  <div className="flex-none rotate-[180deg]">
                    <div className="relative size-[29.388px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                          <path d={svgPaths.p1a05bc00} fill="var(--fill-0, white)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#1f60d8] h-[558.041px] left-[19px] overflow-clip rounded-[8px] top-[1550.96px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute contents left-[10px] not-italic text-white top-[265.04px]" data-name="Lesson Details">
                <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[10px] text-[16px] top-[363.04px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[10px] text-[36px] top-[302.04px] translate-y-[-50%] w-[319px]">
                  <p className="leading-[48px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[14px] items-center left-[10px] top-[492.04px] w-[319px]" data-name="Buttons">
                <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
                <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
              </div>
              <div className="absolute h-[228px] left-[13px] rounded-[8px] top-[13.04px] w-[312px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[17px] top-[2189px]" data-name="Continue Learning - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[73px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[2225.5px] translate-y-[-50%] w-[164px]">
              <ol className="list-decimal" start="1">
                <li className="ms-[36px]">
                  <span className="leading-[36px]">Space</span>
                </li>
              </ol>
            </div>
            <div className="absolute contents left-[273px] top-[2210px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[273px] top-[2210px]" data-name="Arrow Slider Left">
                <div className="absolute right-[70px] size-[32px] top-[2210px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #1F60D8)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute left-[274.31px] size-[29.388px] top-[2211.31px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                      <path d={svgPaths.p1a05bc00} fill="var(--fill-0, white)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[325px] top-[2210px]" data-name="Arrow Slider Right">
                <div className="absolute right-[18px] size-[32px] top-[2210px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #1F60D8)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[326.31px] size-[29.388px] top-[2211.31px]">
                  <div className="flex-none rotate-[180deg]">
                    <div className="relative size-[29.388px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                          <path d={svgPaths.p1a05bc00} fill="var(--fill-0, white)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#1f60d8] h-[558.041px] left-[19px] overflow-clip rounded-[8px] top-[2261.96px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute contents left-[10px] not-italic text-white top-[265.04px]" data-name="Lesson Details">
                <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[10px] text-[16px] top-[363.04px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[10px] text-[36px] top-[302.04px] translate-y-[-50%] w-[319px]">
                  <p className="leading-[48px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[14px] items-center left-[10px] top-[492.04px] w-[319px]" data-name="Buttons">
                <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
                <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
              </div>
              <div className="absolute h-[228px] left-[13px] rounded-[8px] top-[13.04px] w-[312px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#1f60d8] h-[607px] left-0 overflow-clip top-[80px] w-[375px]" data-name="Subject Details">
            <div className="absolute contents left-[17px] top-[126px]" data-name="Streak Info">
              <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] inset-[20.76%_40.27%_73.97%_4.53%] justify-center leading-[0] not-italic text-[40px] text-nowrap text-white">
                <p className="leading-[32px] whitespace-pre">Geometry</p>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] inset-[30.31%_5.33%_18.95%_4.53%] justify-center leading-[22px] not-italic text-[16px] text-white">
                <p className="mb-0">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">Use diagrams and words to explore the very start of algebra, with puzzles and intuition guiding the way. </p>
                <p className="mb-0"> </p>
                <p>By the end of the course, you'll be able to simplify expressions and solve equations using methods that impart deep understanding rather than just procedures. </p>
              </div>
              <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[17px] px-[12px] py-[7px] rounded-[8px] top-[534px]" data-name="Button">
                <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                  <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                      <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Continue Topic</p>
              </div>
            </div>
            <div className="absolute contents left-[17px] top-[37px]" data-name="Back Nav">
              <div className="absolute contents left-[17px] top-[37px]" data-name="Arrow Slider Left">
                <div className="absolute right-[322px] size-[36px] top-[37px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="18" />
                  </svg>
                </div>
                <div className="absolute left-[18.47px] size-[33.061px] top-[38.47px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                      <path d={svgPaths.p2b857900} fill="var(--fill-0, white)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[30px] justify-center leading-[0] left-[69px] not-italic text-[18px] text-white top-[55px] translate-y-[-50%] w-[243px]">
                <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[26px] underline">Back to All Subjects</p>
              </div>
            </div>
          </div>
          <NavBarMobile className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" />
        </div>
        <div className="bg-white h-[2647px] overflow-clip relative shrink-0 w-[375px]" data-name="Lesson - Mobile">
          <div className="absolute bg-[#1f60d8] h-[479px] left-[19px] overflow-clip rounded-[8px] top-[1120px] w-[339px]" data-name="Activity: MCQ">
            <div className="absolute contents left-[11px] top-[11px]" data-name="MCQ Logo">
              <div className="absolute right-[288px] size-[40px] top-[11px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="20" />
                </svg>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[27.755px] justify-center leading-[0] left-[31px] not-italic text-[#232323] text-[28px] text-center top-[31.41px] translate-x-[-50%] translate-y-[-50%] w-[18.776px]">
                <p className="leading-[32px]">?</p>
              </div>
            </div>
            <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[68px] not-italic text-[24px] text-nowrap text-white top-[18px] whitespace-pre">What is Space?</p>
            <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[21px] overflow-clip top-[75px]" data-name="Radio button group">
              <div className="content-stretch flex gap-[20px] h-[53px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[267px]">
                  <p className="leading-[30px]">Unoccupid space beyond earth</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] h-[45px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[263px]">Fames varius semper est vestibulum</p>
              </div>
              <div className="content-stretch flex gap-[20px] h-[51px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[264px]">Fusce donec orci semper cras</p>
              </div>
              <div className="content-stretch flex gap-[20px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Velit tempus quam ac nec</p>
              </div>
            </div>
            <div className="absolute contents left-[11px] top-[360px]" data-name="Buttons">
              <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[11px] px-[12px] py-[7px] rounded-[8px] top-[417px]" data-name="Button">
                <SolidStatusLightbulb className="relative shrink-0 size-[30px]" />
                <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">Show Hint</p>
                </div>
              </div>
              <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[11px] px-[12px] py-[7px] rounded-[8px] top-[360px]" data-name="Button">
                <SolidStatusCheckedBox className="relative shrink-0 size-[30px]" />
                <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Submit Answer</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#1f60d8] h-[566px] left-[19px] overflow-clip rounded-[8px] top-[1646px] w-[339px]" data-name="Activity: MCQ">
            <div className="absolute contents left-[11px] top-[11px]" data-name="MCQ Logo">
              <div className="absolute right-[288px] size-[40px] top-[11px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" fill="var(--fill-0, #FACE55)" id="Ellipse 2" r="20" />
                </svg>
              </div>
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[27.755px] justify-center leading-[0] left-[31px] not-italic text-[#232323] text-[28px] text-center top-[31.41px] translate-x-[-50%] translate-y-[-50%] w-[18.776px]">
                <p className="leading-[32px]">?</p>
              </div>
            </div>
            <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[30px] left-[68px] not-italic text-[24px] text-nowrap text-white top-[18px] whitespace-pre">What is Universe?</p>
            <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[19px] overflow-clip top-[80px]" data-name="Radio button group">
              <div className="content-stretch flex gap-[20px] h-[53px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-[#f4d35e] border-[6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[267px]">
                  <p className="leading-[30px]">Unoccupid space beyond earth</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] h-[45px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[263px]">Fames varius semper est vestibulum</p>
              </div>
              <div className="content-stretch flex gap-[20px] h-[51px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-white w-[264px]">Fusce donec orci semper cras</p>
              </div>
              <div className="content-stretch flex gap-[20px] h-[30px] items-center overflow-clip relative shrink-0" data-name="Radio with label">
                <div className="bg-white relative rounded-[100px] shrink-0 size-[25px]" data-name="Radio">
                  <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[100px]" />
                </div>
                <p className="font-['Poppins:Regular',_sans-serif] leading-[30px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Velit tempus quam ac nec</p>
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[54px] justify-center leading-[0] left-[22px] not-italic text-[#f4d35e] text-[20px] top-[374px] translate-y-[-50%] w-[329px]">
              <p className="leading-[30px] whitespace-pre-wrap">Correct Answer 🎉🎉🎉</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[56px] not-italic text-[#f4d35e] text-[18px] text-nowrap top-[439px] translate-y-[-50%]">
              <p className="leading-[30px] whitespace-pre">Explaination</p>
            </div>
            <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[20px] left-[24px] not-italic text-[12px] text-white top-[460px] w-[303px] whitespace-pre-wrap">Because universe is everything & everything is universe expecept you are a Marvel fan where they usually have a lot of universes regularly colliding with each other.</p>
            <div className="absolute h-[131px] left-[11px] rounded-[8px] top-[417px] w-[318px]">
              <div aria-hidden="true" className="absolute border border-[#f4d35e] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <SolidStatusPin className="absolute left-[20px] size-[27px] top-[425px]" />
          </div>
          <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[36px] left-[16px] not-italic text-[#232323] text-[28px] top-[137px] w-[340px]">What is Space?</p>
          <div className="absolute font-['Poppins:Regular',_sans-serif] leading-[30px] left-[19px] not-italic text-[#232323] text-[18px] top-[203px] w-[340px]">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac nisi arcu ultrices sem viverra tincidunt nisl. Dapibus gravida est, et ultricies eget consequat. </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Ultrices ut sit sagittis, nulla id tortor, morbi et. Velit tempus quam ac nec et suscipit nam sed lacus. Dolor eu etiam mattis eget. </p>
            <p className="mb-0">&nbsp;</p>
            <p>Fames varius semper est vestibulum. Ut facilisis quam id bibendum scelerisque nulla nulla ornare. Viverra dolor tempus gravida cursus ultricies eget pulvinar. Fusce donec orci semper cras. Lorem at pellentesque lectus euismod nulla et. Ultrices ut sit sagittis, nulla id tortor, morbi et. Velit tempus quam ac nec et suscipit nam sed lacus. Dolor eu etiam mattis eget. </p>
          </div>
          <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
            <div className="absolute contents left-[17px] top-[19px]" data-name="Previous">
              <div className="absolute contents left-[17px] top-[19px]" data-name="Arrow Slider Left">
                <div className="absolute right-[316px] size-[42px] top-[19px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                  </svg>
                </div>
                <div className="absolute left-[18.71px] size-[38.571px] top-[20.71px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[22px] items-center left-[316px] top-[19px]" data-name="Next">
              <div className="flex items-center justify-center leading-[0] relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Arrow Slider Left">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[42px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                        <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                      </svg>
                    </div>
                    <div className="[grid-area:1_/_1] ml-[1.714px] mt-[1.714px] relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                          <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents inset-[40%_21.6%_40%_21.87%]" data-name="Pill Lesson Progress">
              <div className="absolute bg-[#f4d35e] inset-[40%_73.87%_40%_21.87%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_66.4%_40%_29.33%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_58.93%_40%_36.8%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_51.47%_40%_44.27%] rounded-[12px]" />
              <div className="absolute bg-[#1f60d8] inset-[40%_44%_40%_51.73%] rounded-[12px]" />
              <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_36.53%_40%_59.2%] rounded-[12px]" />
              <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_29.07%_40%_66.67%] rounded-[12px]" />
              <div className="absolute bg-[rgba(35,35,35,0.2)] inset-[40%_21.6%_40%_74.13%] rounded-[12px]" />
            </div>
          </div>
          <div className="absolute contents left-[18px] top-[2251px]" data-name="Image with Caption">
            <div className="absolute h-[214.91px] left-[18px] rounded-[8px] top-[2251px] w-[340px]" data-name="unsplash:0o_GEzyargo">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgUnsplash0OGEzyargo} />
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] h-[22px] justify-center leading-[0] left-[188px] not-italic text-[#9b9b9b] text-[12px] text-center top-[2477px] translate-x-[-50%] translate-y-[-50%] w-[272px]">
              <p className="leading-[26px]">A cluster of stars. Source: Unsplash</p>
            </div>
          </div>
          <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[36px] top-[2550px]" data-name="Buttons">
            <div className="box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <SolidGeneralHome className="relative shrink-0 size-[32px]" />
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Exit to Home</p>
              </div>
            </div>
            <div className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Next</p>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                    <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                        <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[1165px] overflow-clip relative shrink-0 w-[375px]" data-name="Feedback - Mobile">
          <div className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[36px] left-[188px] not-italic text-[#232323] text-[28px] text-center top-[137px] translate-x-[-50%] w-[340px]">
            <p className="mb-0">You did it!</p>
            <p>Congratulations 🎉🔥🌈</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[46px] justify-center leading-[0] left-[188px] not-italic text-[24px] text-black text-center top-[631px] translate-x-[-50%] translate-y-[-50%] w-[340px]">
            <p className="leading-[36px]">Rate your experience</p>
          </div>
          <div className="absolute contents left-[16px] top-[669px]" data-name="Stars">
            <SolidStatusStar className="absolute left-[16px] size-[52px] top-[669px]" />
            <SolidStatusStar className="absolute left-[88.66px] size-[52px] top-[669px]" />
            <SolidStatusStar className="absolute left-[161.32px] size-[52px] top-[669px]" />
            <SolidStatusStar className="absolute left-[233.99px] size-[52px] top-[669px]" />
            <div className="absolute left-[306.65px] size-[52px] top-[669px]" data-name="Solid/Status/Star">
              <div className="absolute inset-[10.41%_6.62%_10.25%_6.62%]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 42">
                  <path d={svgPaths.p1e7a2e00} fill="var(--fill-0, #232323)" fillOpacity="0.2" id="Icon" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute h-[289px] left-[36px] top-[268px] w-[303px]" data-name="2 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img23} />
          </div>
          <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
            <div className="absolute contents left-[17px] top-[19px]" data-name="Previous">
              <div className="absolute contents left-[17px] top-[19px]" data-name="Arrow Slider Left">
                <div className="absolute right-[316px] size-[42px] top-[19px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                    <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                  </svg>
                </div>
                <div className="absolute left-[18.71px] size-[38.571px] top-[20.71px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[22px] items-center left-[316px] top-[19px]" data-name="Next">
              <div className="flex items-center justify-center leading-[0] relative shrink-0">
                <div className="flex-none rotate-[180deg]">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="Arrow Slider Left">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[42px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                        <circle cx="21" cy="21" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="21" />
                      </svg>
                    </div>
                    <div className="[grid-area:1_/_1] ml-[1.714px] mt-[1.714px] relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                          <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute contents inset-[40%_21.6%_40%_21.87%]" data-name="Pill Lesson Progress">
              <div className="absolute bg-[#f4d35e] inset-[40%_73.87%_40%_21.87%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_66.4%_40%_29.33%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_58.93%_40%_36.8%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_51.47%_40%_44.27%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_44%_40%_51.73%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_36.53%_40%_59.2%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_29.07%_40%_66.67%] rounded-[12px]" />
              <div className="absolute bg-[#f4d35e] inset-[40%_21.6%_40%_74.13%] rounded-[12px]" />
            </div>
          </div>
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[16px] not-italic text-[18px] text-nowrap text-white top-[798px] translate-y-[-50%]">
            <p className="leading-[30px] whitespace-pre">Additional Feedback (optional)</p>
          </div>
          <div className="absolute bg-white h-[121px] left-[16px] rounded-[8px] top-[819px] w-[343px]" data-name="Text field">
            <div className="h-[121px] overflow-clip relative rounded-[inherit] w-[343px]">
              <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[13px] not-italic text-[20px] text-[rgba(35,35,35,0.6)] text-nowrap top-[28px] translate-y-[-50%]">
                <p className="leading-[30px] whitespace-pre">Type here...</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[100px] top-[991px]" data-name="Buttons">
            <div className="box-border content-stretch flex gap-[7px] h-[48px] items-center px-[12px] py-[7px] relative rounded-[8px] shrink-0" data-name="Button">
              <div aria-hidden="true" className="absolute border border-[#232323] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <SolidGeneralHome className="relative shrink-0 size-[32px]" />
              <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Exit to Home</p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[77px] px-[12px] py-[7px] rounded-[8px] top-[1057px]" data-name="Button">
            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start next lesson</p>
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg]">
                <div className="relative size-[38.571px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                      <path d={svgPaths.p2152e700} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-[2120px] overflow-clip relative shrink-0 w-[375px]" data-name="AI Mentor - Mobile">
          <div className="absolute bg-[#1f60d8] h-[591px] left-0 overflow-clip top-[80px] w-[375px]" data-name="Daily Streak">
            <div className="absolute h-[254px] left-[40px] top-[50px] w-[295px]" data-name="Walle">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgWalle} />
            </div>
          </div>
          <NavBarMobile className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" />
          <div className="absolute h-[518px] left-[17px] top-[751px] w-[340px]">
            <div className="absolute contents left-0 top-0" data-name="Continue Learning - Mobile">
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-0 not-italic text-[24px] text-black top-[37px] translate-y-[-50%] w-[340px]">
                <p className="leading-[36px]">Continue Learning</p>
              </div>
              <div className="absolute bg-[#1f60d8] h-[444px] left-[2px] overflow-clip rounded-[8px] top-[74px] w-[338px]" data-name="Lesson Card - Mobile">
                <div className="absolute contents left-[11px] top-[371px]" data-name="Buttons">
                  <div className="absolute bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center left-[183px] px-[12px] py-[7px] rounded-[8px] top-[371px] w-[144px]" data-name="Button">
                    <div className="relative shrink-0 size-[30px]" data-name="Solid/Status/Bookmark">
                      <div className="absolute inset-[11.84%_21.46%_10.96%_21.46%]" data-name="Icon">
                        <div className="absolute inset-[-6.48%_-8.76%]" style={{ "--stroke-0": "rgba(51, 51, 51, 1)" } as React.CSSProperties}>
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 27">
                            <path d={svgPaths.p2ab17800} id="Icon" stroke="var(--stroke-0, #333333)" strokeWidth="3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] text-nowrap">
                      <p className="leading-[normal] whitespace-pre">Save </p>
                    </div>
                  </div>
                  <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[11px] px-[12px] py-[7px] rounded-[8px] top-[371px] w-[149px]" data-name="Button">
                    <div className="relative shrink-0 size-[34px]" data-name="Solid/Media/Play">
                      <div className="absolute inset-[19.65%_16.63%_19.65%_23.36%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                          <path d={svgPaths.pc052600} fill="var(--fill-0, #232323)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                    <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Start</p>
                  </div>
                </div>
                <div className="absolute contents left-[11px] not-italic text-white top-[129px]" data-name="Lesson Details">
                  <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[11px] text-[16px] top-[233px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                  <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[74px] justify-center leading-[0] left-[11px] text-[36px] top-[166px] translate-y-[-50%] w-[319px]">
                    <p className="leading-[48px]">Composite Polygons</p>
                  </div>
                </div>
                <div className="absolute contents left-[11px] top-[29.96px]" data-name="Repetion Chain">
                  <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.005305095110088587)+(var(--transform-inner-height)*0.999985933303833)))] items-center justify-center left-[11px] top-[55.8px] w-[calc(1px*((var(--transform-inner-height)*0.005305095110088587)+(var(--transform-inner-width)*0.999985933303833)))]" style={{ "--transform-inner-width": "608.828125", "--transform-inner-height": "0" } as React.CSSProperties}>
                    <div className="flex-none rotate-[359.696deg]">
                      <div className="h-0 relative w-[608.829px]">
                        <div className="absolute bottom-0 left-0 right-0 top-[-5px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 609 5">
                            <line id="Line 1" stroke="var(--stroke-0, #F4D35E)" strokeWidth="5" x2="608.829" y1="2.5" y2="2.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-[54.099px] left-[11px] top-[29.96px] w-[650px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 650 55">
                      <g id="Group 10">
                        <circle cx="27.0497" cy="27.0497" fill="var(--fill-0, #F4D35E)" id="Ellipse 3" r="27.0497" />
                        <circle cx="126.367" cy="27.0497" fill="var(--fill-0, white)" id="Ellipse 4" r="27.0497" />
                        <circle cx="225.683" cy="27.0497" fill="var(--fill-0, white)" id="Ellipse 5" r="27.0497" />
                        <circle cx="325.001" cy="27.0497" fill="var(--fill-0, white)" id="Ellipse 6" r="27.0497" />
                        <circle cx="424.317" cy="27.0497" fill="var(--fill-0, #C4C4C4)" id="Ellipse 7" r="27.0497" />
                        <circle cx="523.635" cy="27.0497" fill="var(--fill-0, #C4C4C4)" id="Ellipse 8" r="27.0497" />
                        <circle cx="622.95" cy="27.0497" fill="var(--fill-0, #C4C4C4)" id="Ellipse 9" r="27.0497" />
                      </g>
                    </svg>
                  </div>
                  <SolidMediaPlay className="absolute left-[122.43px] size-[29.068px] top-[42.88px]" />
                  <div className="absolute left-[624.66px] size-[19.379px] top-[47.73px]" data-name="bx:bxs-lock-alt">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="bx:bxs-lock-alt">
                        <path d={svgPaths.p1fefb200} fill="var(--fill-0, #151A21)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute left-[325.91px] size-[19.379px] top-[47.73px]" data-name="bx:bxs-lock-alt">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="bx:bxs-lock-alt">
                        <path d={svgPaths.p1fefb200} fill="var(--fill-0, #151A21)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute left-[226.59px] size-[19.379px] top-[47.73px]" data-name="bx:bxs-lock-alt">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="bx:bxs-lock-alt">
                        <path d={svgPaths.p1fefb200} fill="var(--fill-0, #151A21)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute left-[525.35px] size-[19.379px] top-[47.73px]" data-name="bx:bxs-lock-alt">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="bx:bxs-lock-alt">
                        <path d={svgPaths.p1fefb200} fill="var(--fill-0, #151A21)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute left-[426.03px] size-[19.379px] top-[46.11px]" data-name="bx:bxs-lock-alt">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="bx:bxs-lock-alt">
                        <path d={svgPaths.p1fefb200} fill="var(--fill-0, #151A21)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute left-[19.07px] size-[37.143px] top-[37.23px]" data-name="bx:bx-check">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
                      <g id="bx:bx-check">
                        <path d={svgPaths.p21ff580} fill="var(--fill-0, #232323)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[17px] top-[1349px]" data-name="Continue Learning - Mobile">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[74px] justify-center leading-[0] left-[17px] not-italic text-[24px] text-black top-[1386px] translate-y-[-50%] w-[228px]">
              <p className="leading-[36px]">Recommended Revision</p>
            </div>
            <div className="absolute bg-[#1f60d8] h-[622px] left-[19px] overflow-clip rounded-[8px] top-[1443px] w-[338px]" data-name="Lesson Card - Mobile">
              <div className="absolute contents left-[10px] not-italic text-white top-[314px]" data-name="Lesson Details">
                <p className="absolute font-['Poppins:Medium',_sans-serif] h-[106px] leading-[26px] left-[10px] text-[16px] top-[412px] w-[319px]">In this lesson, you'll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.</p>
                <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] h-[74px] justify-center leading-[0] left-[10px] text-[36px] top-[351px] translate-y-[-50%] w-[319px]">
                  <p className="leading-[48px]">Composite Polygons</p>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[14px] items-center left-[10px] top-[552px] w-[319px]" data-name="Buttons">
                <Button size="Small" type="Primary" state="Standard" className="bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
                <Button size="Small" type="Secondary" state="Standard" className="bg-white box-border content-stretch flex gap-[7px] h-[48px] items-center justify-center px-[12px] py-[7px] relative rounded-[8px] shrink-0 w-[152px]" />
              </div>
              <div className="absolute content-stretch flex gap-[12px] items-center justify-center left-[10px] top-[256px]" data-name="Subject Lesson Header">
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">Geometry</p>
                </div>
                <div className="relative shrink-0 size-[6px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #F4D35E)" id="Ellipse 1" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[2.5px] uppercase">
                  <p className="leading-[32px] whitespace-pre">lesson 07 / 25</p>
                </div>
              </div>
              <div className="absolute h-[228px] left-[13px] rounded-[8px] top-[13px] w-[312px]" data-name="Lessons Cover">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
                  <div className="absolute bg-[#c4c4c4] inset-0 rounded-[8px]" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgLessonsCover} />
                </div>
              </div>
            </div>
            <div className="absolute contents left-[273px] top-[1370px]" data-name="Arrow Buttons">
              <div className="absolute contents left-[273px] top-[1370px]" data-name="Arrow Slider Left">
                <div className="absolute right-[70px] size-[32px] top-[1370px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute left-[274.31px] size-[29.388px] top-[1371.31px]" data-name="Solid/Interface/Arrow left">
                  <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                      <path d={svgPaths.p1a05bc00} fill="var(--fill-0, #232323)" id="Icon" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[325px] top-[1370px]" data-name="Arrow Slider Right">
                <div className="absolute right-[18px] size-[32px] top-[1370px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <circle cx="16" cy="16" fill="var(--fill-0, #F4D35E)" id="Ellipse 2" r="16" />
                  </svg>
                </div>
                <div className="absolute flex items-center justify-center left-[326.31px] size-[29.388px] top-[1371.31px]">
                  <div className="flex-none rotate-[180deg]">
                    <div className="relative size-[29.388px]" data-name="Solid/Interface/Arrow left">
                      <div className="absolute inset-[30.21%_21.88%_30.21%_23.96%]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
                          <path d={svgPaths.p1a05bc00} fill="var(--fill-0, #232323)" id="Icon" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[16px] top-[437px]" data-name="Walle Intro">
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[16px] px-[12px] py-[7px] rounded-[8px] top-[596px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">See Recommedations</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[20.61%_16.27%_77.88%_4.27%] justify-center leading-[0] not-italic text-[40px] text-nowrap text-white">
              <p className="leading-[32px] whitespace-pre">Meet, Wall-E ;)</p>
            </div>
            <p className="absolute font-['Poppins:Medium',_sans-serif] inset-[23.07%_6.67%_73.25%_4.8%] leading-[26px] not-italic text-[16px] text-white">Wall-E is your personal teacher to help you become better by evaluating your weak areas & revision suggestions. </p>
          </div>
        </div>
        <div className="bg-white h-[6473px] overflow-clip relative shrink-0 w-[1440px]" data-name="Landing Page">
          <div className="absolute bg-[#1f60d8] h-[841px] left-0 overflow-clip rounded-[8px] top-[80px] w-[1440px]" data-name="Daily Streak">
            <div className="absolute h-[676px] left-[699px] top-[64px] w-[741px]" data-name="Asset 2@2x 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[118.26%] left-[-65.56%] max-w-none top-[-9.13%] w-[165.56%]" src={imgAsset22X1} />
              </div>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[98px] not-italic text-[72px] text-white top-[372px] translate-y-[-50%] w-[546px]">
              <p className="leading-[80px]">Improve your students’ results with A.I</p>
            </div>
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[62.9%_75.97%_29.84%_6.81%] items-center justify-center px-[12px] py-[7px] rounded-[8px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[22px] text-nowrap whitespace-pre">Get Started</p>
            </div>
          </div>
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
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[20%_6.74%_20%_82.5%] items-center justify-center px-[12px] py-[7px] rounded-[8px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
            </div>
          </div>
          <div className="absolute h-[768px] left-0 overflow-clip top-[921px] w-[1440px]">
            <div className="absolute contents left-[39px] top-[99px]">
              <div className="absolute h-[569px] left-[39px] top-[99px] w-[771.251px]" data-name="image 2">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
              </div>
              <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[64px] left-[810px] not-italic text-[#333333] text-[50px] top-[270px] w-[488px]">Help Your Learners' Achieve Mastery</p>
            </div>
            <p className="absolute font-['Poppins:Regular',_sans-serif] h-[80px] leading-[32px] left-[810px] not-italic text-[#333333] text-[20px] top-[416px] w-[560px]">GoPele's AI system sends alerts of learners' problem areas so facilitators can assist learners swiftly.</p>
          </div>
          <div className="absolute contents left-0 top-[5817px]">
            <div className="absolute bg-[#232323] h-[656px] left-0 top-[5817px] w-[1440px]" data-name="Rectangle" />
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[134px] text-[40px] text-nowrap text-white top-[5875px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Learning Now!
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[134px] text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap top-[5940px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              By the same illusion which lifts the horizon of the sea to the level of the spectator.
            </p>
            <div className="absolute contents left-[935px] top-[5897px]">
              <div className="absolute h-[48px] left-[935px] top-[5897px] w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Get Started
                </p>
              </div>
              <div className="absolute h-[48px] left-[1135px] top-[5897px] w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Contact
                </p>
              </div>
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
          <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[808px] not-italic text-[#333333] top-[4481px]">
            <p className="absolute leading-[64px] left-[808px] text-[50px] top-[4481px] w-[529px]">Content Recommendation System</p>
            <p className="absolute h-[71px] leading-[32px] left-[808px] text-[20px] top-[4687px] w-[470px]">Using GoBOT’s A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
          </div>
          <div className="absolute contents left-[162px] top-[1769px]">
            <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[162px] not-italic text-[#333333] top-[1930px]">
              <div className="absolute leading-[64px] left-[162px] text-[50px] top-[1930px] w-[415px]">
                <p className="mb-0">By Teachers, </p>
                <p>For Teachers</p>
              </div>
              <p className="absolute h-[110px] leading-[32px] left-[162px] text-[20px] top-[2076px] w-[520px]">GoPele's curriculum is designed holistically, by teachers, to cater to all learners; from students to employees</p>
            </div>
            <div className="absolute h-[577.643px] left-[632px] top-[1769px] w-[750.328px]" data-name="image 3">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
            </div>
          </div>
          <div className="absolute contents left-[80px] top-[2632px]">
            <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[810px] not-italic text-[#333333] top-[2769px]">
              <p className="absolute leading-[64px] left-[810px] text-[50px] top-[2769px] w-[415px]">Gamification at the Core</p>
              <p className="absolute h-[105px] leading-[32px] left-[810px] text-[20px] top-[2915px] w-[517px]">A fun, bite-sized approach to delivering learning material, with daily streaks to enhance the learning experience</p>
            </div>
            <div className="absolute h-[525.664px] left-[80px] top-[2632px] w-[689px]" data-name="image 4">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
            </div>
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
          <div className="absolute contents left-[162px] top-[3494px]">
            <div className="absolute contents font-['Poppins:Regular',_sans-serif] left-[162px] not-italic text-[#333333] top-[3588px]">
              <p className="absolute leading-[64px] left-[162px] text-[50px] top-[3588px] w-[415px]">Team Up with GoBOT!</p>
              <p className="absolute h-[123px] leading-[32px] left-[162px] text-[20px] top-[3734px] w-[519px]">GoBOT! is your learners' education buddy, ensuring content is delivered to learners using spaced repetition for improved knowledge mastery.</p>
            </div>
            <div className="absolute h-[494px] left-[778px] top-[3494px] w-[502px]" data-name="Laptop 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptop1} />
            </div>
          </div>
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
          <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[64px] left-[720px] not-italic text-[56px] text-center text-nowrap text-white top-[5447px] translate-x-[-50%] whitespace-pre">Ready to improve your student’s results?</p>
          <p className="absolute font-['Poppins:Regular',_sans-serif] h-[69px] leading-[32px] left-[720px] not-italic text-[16px] text-center text-white top-[5541px] translate-x-[-50%] w-[838px]">
            Click <span className="font-['Poppins:Bold',_sans-serif]">Get Started</span> if you already have a student account. If not, click Contact, and we will set you up!
          </p>
          <div className="absolute h-[48px] left-[535px] top-[5642px] w-[170px]" data-name="Dark/Button/Primary/Text">
            <div className="absolute bg-[#face55] inset-0 rounded-[8px]" data-name="Rectangle" />
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[#232323] text-[18px] text-center text-nowrap top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Get Started
            </p>
          </div>
          <div className="absolute h-[48px] left-[735px] top-[5642px] w-[170px]" data-name="Dark/Button/Primary/Text">
            <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Contact
            </p>
          </div>
        </div>
        <div className="bg-white h-[6102px] overflow-clip relative shrink-0 w-[375px]" data-name="Landing Page - Mobile">
          <div className="absolute bg-[#1f60d8] h-[628px] left-0 top-[80px] w-[375px]" data-name="Daily Streak" />
          <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
            <div className="absolute contents inset-[26.25%_61.25%_26.25%_4.8%]">
              <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.6%_61.25%_38.67%_17.25%] justify-center leading-[0] not-italic text-[#232323] text-[22.395px]">
                <p className="leading-[18.187px]">Gopele</p>
              </div>
              <div className="absolute contents inset-[26.25%_85.08%_26.25%_4.8%]">
                <div className="absolute inset-[26.25%_85.08%_26.25%_4.8%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
                    <g id="Frame 2">
                      <path d={svgPaths.p23915500} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
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
              </div>
            </div>
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[20%_3.73%_20%_54.93%] items-center justify-center px-[12px] py-[7px] rounded-[8px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
            </div>
          </div>
          <div className="absolute contents left-[21px] top-[115px]" data-name="Walle Intro">
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[21px] px-[12px] py-[7px] rounded-[8px] top-[283px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] inset-[1.89%_10.4%_95.71%_5.6%] justify-center leading-[0] not-italic text-[40px] text-white">
              <p className="leading-[1.215]">Improve your students’ results with A.I</p>
            </div>
          </div>
          <div className="absolute h-[318px] left-[13px] top-[357px] w-[348.577px]" data-name="Asset 2@2x 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[118.26%] left-[-65.56%] max-w-none top-[-9.13%] w-[165.56%]" src={imgAsset22X1} />
            </div>
          </div>
          <div className="absolute h-[320.927px] left-[-30px] top-[732px] w-[435px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[1101px]">
            <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[336px]">Identify Areas for Improvement</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Gopele enables teachers to identify areas where individual students require assistance—helping teachers cater to their student’s individual needs. Our A.I. identifies and reports each student’s problem areas so teachers can swiftly respond and assist their students</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[1716px]">
            <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[282px]">By Teachers, For Teachers</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Gopele’s curriculum is designed by teachers and curriculum development experts with years of experience. The content design has taken a holistic approach to cater to various education industry stakeholders—from students to district managers.</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[2330px]">
            <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[282px]">Gamification at the Core</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Gopele’s curriculum considers how students learn. It takes a fun, bite-sized approach to deliver learning material to students. Additionally, many other gamified components, like daily streaks, are incorporated to improve students learning experiences.</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[3027px]">
            <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[282px]">Team Up with GoBOT!</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">GoBOT is Gopele’s personalized learning buddy for students. GoBOT ensures that content is delivered to students using spaced repetition to improve the intake of information over a period—instilling mastery over information cramming.</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-start left-[13px] not-italic text-[#333333] top-[3878px]">
            <p className="leading-[65.6667%] relative shrink-0 text-[38.5px] w-[351px]">Content Recommendation System</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Using GoBOT’s A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
          </div>
          <div className="absolute h-[294px] left-[-3px] top-[1422px] w-[382px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
          <div className="absolute h-[281px] left-[4px] top-[2049px] w-[368px]" data-name="image 4">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
          <div className="absolute h-[326px] left-[22px] top-[2673px] w-[332px]" data-name="Laptop 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptop1} />
          </div>
          <div className="absolute contents left-[-26px] top-[3472px]">
            <div className="absolute h-[426px] left-[-26px] top-[3472px] w-[331.773px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 426">
                <g id="Group 20">
                  <path d={svgPaths.p2f238700} fill="var(--fill-0, #333333)" id="Combined Shape" />
                  <g id="Combined Shape + Combined Shape Mask">
                    <g id="Mask"></g>
                    <mask height="138" id="mask0_1_3193" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="138" x="0" y="288">
                      <path d={svgPaths.p2d27cf80} fill="var(--fill-0, white)" id="Mask_2" />
                    </mask>
                    <g mask="url(#mask0_1_3193)">
                      <path d={svgPaths.p661bf00} fill="var(--fill-0, #333333)" id="Combined Shape_2" />
                      <path d={svgPaths.p20995380} fill="var(--fill-0, #333333)" id="Combined Shape_3" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3490.06px] w-[321.616px]" data-name="features">
              <div className="absolute bg-[#fdf0e9] inset-0 rounded-[4.514px]" data-name="Rectangle" />
              <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 17">
                    <path d={svgPaths.p1842e100} fill="var(--fill-0, #6483F6)" id="Oval" />
                    <path d={svgPaths.p18eb1100} fill="var(--fill-0, white)" id="Combined Shape" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[35.86%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.083px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Sapced Repetition
              </p>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.
              </p>
            </div>
            <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3598.39px] w-[321.616px]" data-name="features">
              <div className="absolute bg-[#face55] inset-0 rounded-[4.514px]" data-name="Rectangle" />
              <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 18">
                    <path d={svgPaths.p1842e100} fill="var(--fill-0, #F07867)" id="Oval" />
                    <path clipRule="evenodd" d={svgPaths.p2f2d7a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[28.4%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.084px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Recommended Topics
              </p>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Some distant orb has power to raise and purify our thoughts like a strain of sacred music.
              </p>
            </div>
            <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3706.72px] w-[321.616px]" data-name="features">
              <div className="absolute bg-[#fdf0e9] inset-0 rounded-[4.514px]" data-name="Rectangle" />
              <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 19">
                    <path d={svgPaths.p1842e100} fill="var(--fill-0, #EEA1E2)" id="Oval" />
                    <path clipRule="evenodd" d={svgPaths.p285019f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[24.05%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.084px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Analytics (Coming Soon)
              </p>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Distant orb has power to raise and purify our thoughts like a strain of sacred music.
              </p>
            </div>
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
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 31">
                  <path d={svgPaths.p6ce9100} id="Polygon" stroke="var(--stroke-0, #6380F2)" strokeLinejoin="round" strokeWidth="3.38543" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute h-[581px] left-0 overflow-clip top-[4326px] w-[375px]">
            <div className="absolute contents left-[-510px] top-0" data-name="bg">
              <div className="absolute bg-[#1f60d8] h-[494.622px] left-[-510px] top-0 w-[1436px]" data-name="Rectangle" />
              <div className="absolute left-[-734.38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.375px_272.241px] mask-size-[1436px_494.622px] size-[447.753px] top-[-272.24px]" data-name="Oval" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
                  <path d={svgPaths.p2f3177b0} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="78.4049" />
                </svg>
              </div>
              <div className="absolute left-[702.62px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1212.62px_-350.025px] mask-size-[1436px_494.622px] size-[447.753px] top-[350.02px]" data-name="Oval" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
                  <path d={svgPaths.p87e5d00} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="39.2025" />
                </svg>
              </div>
              <div className="absolute h-[202.436px] left-[-180.92px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-329.082px_-292.186px] mask-size-[1436px_494.622px] top-[292.19px] w-[106.704px]" data-name="Plant Left" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 203">
                  <g id="Plant Left" opacity="0.499558">
                    <path clipRule="evenodd" d={svgPaths.p270e2800} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf" opacity="0.254767" />
                    <path clipRule="evenodd" d={svgPaths.p313daf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_2" opacity="0.248489" />
                    <path clipRule="evenodd" d={svgPaths.p1f0472c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_3" opacity="0.251628" />
                    <path clipRule="evenodd" d={svgPaths.p26a39a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_4" opacity="0.498396" />
                    <path clipRule="evenodd" d={svgPaths.p3780a072} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_5" opacity="0.497396" />
                    <path clipRule="evenodd" d={svgPaths.pc2af780} fill="var(--fill-0, white)" fillRule="evenodd" id="Base" />
                  </g>
                </svg>
              </div>
              <div className="absolute h-[102.714px] left-[476.25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-986.252px_0px] mask-size-[1436px_494.622px] opacity-[0.251] overflow-clip top-0 w-[73.794px]" data-name="Hanging Lamp" style={{ maskImage: `url('${imgOval1}')` }}>
                <div className="absolute bottom-[-0.23px] h-[52.923px] left-[calc(50%+0.366px)] translate-x-[-50%] w-[72.525px]" data-name="Light">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 53">
                    <g id="Light">
                      <path clipRule="evenodd" d={svgPaths.p3c1f4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp Light" opacity="0.504999" />
                      <path clipRule="evenodd" d={svgPaths.p362f6080} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp" />
                    </g>
                  </svg>
                </div>
                <div className="absolute bg-white bottom-[30.15px] left-[calc(50%+0.856px)] top-0 translate-x-[-50%] w-[4.9px]" data-name="Wire" />
              </div>
              <div className="absolute left-[103.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-613.293px_-406.866px] mask-size-[1436px_494.622px] size-[243.322px] top-[406.87px]" data-name="Combined Shape + Combined Shape Mask" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 244">
                  <g id="Combined Shape + Combined Shape Mask" opacity="0.501907">
                    <g id="Mask"></g>
                    <mask height="244" id="mask0_1_3044" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="244" x="0" y="0">
                      <path d={svgPaths.p2bc58380} fill="var(--fill-0, white)" id="Mask_2" />
                    </mask>
                    <g mask="url(#mask0_1_3044)">
                      <path d={svgPaths.p28798600} fill="var(--fill-0, white)" id="Combined Shape" />
                      <path d={svgPaths.p323a9af0} fill="var(--fill-0, white)" id="Combined Shape_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="absolute h-[249.305px] left-[-258.7px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-251.301px_-100.719px] mask-size-[1436px_494.622px] top-[100.72px] w-[961.324px]" data-name="objects" style={{ maskImage: `url('${imgOval1}')` }}>
                <div className="absolute bottom-0 left-0 right-[-0.33%] top-[-2.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 256">
                    <g id="objects">
                      <path d={svgPaths.pff2c980} id="Oval" stroke="var(--stroke-0, #F07867)" strokeWidth="3.92025" />
                      <path d={svgPaths.p10275a00} fill="var(--fill-0, #FACE55)" id="Oval_2" />
                      <path d={svgPaths.p29d0e680} id="Polygon" stroke="var(--stroke-0, #79E6F8)" strokeLinejoin="round" strokeWidth="5.88037" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.24] left-[189px] not-italic text-[36px] text-center text-white top-[23px] translate-x-[-50%] w-[360px]">Ready to improve your student’s results?</p>
            <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[164px] justify-center leading-[0] left-[188px] not-italic text-[14px] text-center text-white top-[221px] translate-x-[-50%] translate-y-[-50%] w-[320px]">
              <p className="leading-[normal]">Using GoBOT’s A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[103px] top-[400px]">
              <div className="h-[48px] relative shrink-0 w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Contact
                </p>
              </div>
            </div>
            <div className="absolute h-[383px] left-[46px] overflow-clip top-[6px] w-[255px]">
              <div className="absolute h-[48px] left-[57px] top-[314px] w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute bg-[#face55] inset-0 rounded-[8px]" data-name="Rectangle" />
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[#232323] text-[18px] text-center text-nowrap top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Get Started
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#232323] h-[1195px] left-0 overflow-clip top-[4907px] w-[375px]">
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[40px] text-[40px] text-nowrap text-white top-[26px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Learning Now!
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[40px] text-[16px] text-[rgba(255,255,255,0.5)] top-[91px] w-[279px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              By the same illusion which lifts the horizon of the sea to the level of the spectator.
            </p>
            <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[103px] top-[246px]">
              <div className="h-[48px] relative shrink-0 w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Get Started
                </p>
              </div>
              <div className="h-[48px] relative shrink-0 w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Contact
                </p>
              </div>
            </div>
            <div className="absolute bg-white h-px left-[18px] opacity-[0.195] top-[434px] w-[339px]" data-name="Rectangle" />
            <div className="absolute bg-white h-px left-[18px] opacity-[0.195] top-[999px] w-[339px]" data-name="Rectangle" />
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[40px] text-[40px] text-nowrap text-white top-[478px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Gopele
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal h-[63px] leading-[26px] left-[41px] text-[16px] text-[rgba(255,255,255,0.5)] top-[559px] w-[270px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] left-[41px] text-[#f4d35e] text-[16px] text-nowrap top-[655px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Contact
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[41px] text-[16px] text-nowrap text-white top-[719px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Email: education@edu.com
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[41px] text-[16px] text-nowrap text-white top-[767px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Phone: +1 (234) 567-89-00
            </p>
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] left-[42px] text-[#f4d35e] text-[16px] text-nowrap top-[842px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Subscribe
            </p>
            <div className="absolute h-[76px] left-[42px] top-[883px] w-[201px]" data-name="Dark/Field/Default">
              <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-0 text-[12px] text-nowrap text-white top-0 uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Label
              </p>
              <div className="absolute bg-white bottom-0 left-0 right-0 rounded-[8px] top-[28px]" data-name="Rectangle" />
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[16px] text-[16px] text-[rgba(51,51,51,0.5)] text-nowrap top-[37px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Placeholder
              </p>
            </div>
            <div className="absolute h-[48px] left-[253px] top-[911px] w-[100px]" data-name="Dark/Button/Primary/Text">
              <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
              <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Submit
              </p>
            </div>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[20px] text-[16px] text-nowrap text-white top-[1046px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Privacy Policy Terms & Conditions
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[139px] text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap text-right top-[1089px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              © 2022 Gopele
            </p>
          </div>
        </div>
        <div className="bg-white h-[6016px] overflow-clip relative shrink-0 w-[375px]" data-name="Landing Page - Mobile">
          <div className="absolute bg-[#1f60d8] h-[628px] left-0 top-[80px] w-[375px]" data-name="Daily Streak" />
          <div className="absolute bg-white h-[80px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[375px]" data-name="Nav Bar - Mobile">
            <div className="absolute contents inset-[26.25%_61.25%_26.25%_4.8%]">
              <div className="absolute capitalize flex flex-col font-['Poppins:SemiBold',_sans-serif] inset-[38.6%_61.25%_38.67%_17.25%] justify-center leading-[0] not-italic text-[#232323] text-[22.395px]">
                <p className="leading-[18.187px]">Gopele</p>
              </div>
              <div className="absolute contents inset-[26.25%_85.08%_26.25%_4.8%]">
                <div className="absolute inset-[26.25%_85.08%_26.25%_4.8%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
                    <g id="Frame 2">
                      <path d={svgPaths.p23915500} fill="var(--fill-0, #1F60D8)" id="Vector" />
                    </g>
                  </svg>
                </div>
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
              </div>
            </div>
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] inset-[20%_3.73%_20%_54.93%] items-center justify-center px-[12px] py-[7px] rounded-[8px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
            </div>
          </div>
          <div className="absolute contents left-[21px] top-[113.38px]" data-name="Walle Intro">
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[21px] px-[12px] py-[7px] rounded-[8px] top-[283px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-nowrap whitespace-pre">Get Started</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',_sans-serif] inset-[1.89%_10.4%_95.71%_5.6%] justify-center leading-[0] not-italic text-[40px] text-white">
              <p className="leading-[1.215]">Improve your students’ results with A.I</p>
            </div>
          </div>
          <div className="absolute h-[318px] left-[13px] top-[357px] w-[348.577px]" data-name="Asset 2@2x 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[118.26%] left-[-65.56%] max-w-none top-[-9.13%] w-[165.56%]" src={imgAsset22X1} />
            </div>
          </div>
          <div className="absolute h-[321.927px] left-[-30px] top-[737px] w-[435px]" data-name="image 2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[10px] items-start left-[calc(50%+1px)] not-italic text-[#333333] text-center top-[calc(50%-1863.5px)] translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[0.985] relative shrink-0 text-[36px] w-[336px]">Help Your Learners' Achieve Mastery</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">GoPele's AI system sends alerts of learners' problem areas so facilitators can assist learners swiftly.</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[10px] items-start left-[calc(50%+1px)] not-italic text-[#333333] text-center top-[calc(50%-1212px)] translate-x-[-50%] translate-y-[-50%]">
            <div className="leading-[0.985] min-w-full relative shrink-0 text-[36px] w-[min-content]">
              <p className="mb-0">By Teachers, </p>
              <p>For Teachers</p>
            </div>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">GoPele's curriculum is designed holistically, by teachers, to cater to all learners; from students to employees</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[10px] items-center justify-center left-[13px] not-italic text-[#333333] text-center top-[2330px]">
            <p className="leading-[0.985] relative shrink-0 text-[36px] w-[282px]">Gamification at the Core</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">A fun, bite-sized approach to delivering learning material, with daily streaks to enhance the learning experience</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[10px] items-center justify-center left-[13px] not-italic text-[#333333] text-center top-[3027px]">
            <p className="leading-[0.985] relative shrink-0 text-[36px] w-[282px]">Team Up with GoBOT!</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">GoBOT! is your learners' education buddy, ensuring content is delivered to learners using spaced repetition for improved knowledge mastery.</p>
          </div>
          <div className="absolute content-stretch flex flex-col font-['Poppins:Regular',_sans-serif] gap-[8px] items-center justify-center left-[13px] not-italic text-[#333333] text-center top-[3878px]">
            <p className="leading-[0.985] relative shrink-0 text-[36px] w-[351px]">Content Recommendation System</p>
            <p className="h-[76px] leading-[1.545] relative shrink-0 text-[16px] w-[351px]">Using GoBOT’s A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
          </div>
          <div className="absolute h-[294px] left-[-3px] top-[1422px] w-[382px]" data-name="image 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
          </div>
          <div className="absolute h-[281px] left-[4px] top-[2049px] w-[368px]" data-name="image 4">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
          </div>
          <div className="absolute h-[326px] left-[22px] top-[2673px] w-[332px]" data-name="Laptop 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLaptop1} />
          </div>
          <div className="absolute contents left-[-26px] top-[3472px]">
            <div className="absolute h-[426px] left-[-26px] top-[3472px] w-[331.773px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 426">
                <g id="Group 20">
                  <path d={svgPaths.p2f238700} fill="var(--fill-0, #333333)" id="Combined Shape" />
                  <g id="Combined Shape + Combined Shape Mask">
                    <g id="Mask"></g>
                    <mask height="138" id="mask0_1_3193" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="138" x="0" y="288">
                      <path d={svgPaths.p2d27cf80} fill="var(--fill-0, white)" id="Mask_2" />
                    </mask>
                    <g mask="url(#mask0_1_3193)">
                      <path d={svgPaths.p661bf00} fill="var(--fill-0, #333333)" id="Combined Shape_2" />
                      <path d={svgPaths.p20995380} fill="var(--fill-0, #333333)" id="Combined Shape_3" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3490.06px] w-[321.616px]" data-name="features">
              <div className="absolute bg-[#fdf0e9] inset-0 rounded-[4.514px]" data-name="Rectangle" />
              <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 17">
                    <path d={svgPaths.p1842e100} fill="var(--fill-0, #6483F6)" id="Oval" />
                    <path d={svgPaths.p18eb1100} fill="var(--fill-0, white)" id="Combined Shape" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[35.86%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.083px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Sapced Repetition
              </p>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music.
              </p>
            </div>
            <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3598.39px] w-[321.616px]" data-name="features">
              <div className="absolute bg-[#face55] inset-0 rounded-[4.514px]" data-name="Rectangle" />
              <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 18">
                    <path d={svgPaths.p1842e100} fill="var(--fill-0, #F07867)" id="Oval" />
                    <path clipRule="evenodd" d={svgPaths.p2f2d7a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[28.4%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.084px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Recommended Topics
              </p>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Some distant orb has power to raise and purify our thoughts like a strain of sacred music.
              </p>
            </div>
            <div className="absolute h-[99.306px] left-[23.65px] overflow-clip top-[3706.72px] w-[321.616px]" data-name="features">
              <div className="absolute bg-[#fdf0e9] inset-0 rounded-[4.514px]" data-name="Rectangle" />
              <div className="absolute inset-[18.18%_74.74%_18.18%_5.61%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 19">
                    <path d={svgPaths.p1842e100} fill="var(--fill-0, #EEA1E2)" id="Oval" />
                    <path clipRule="evenodd" d={svgPaths.p285019f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
                  </g>
                </svg>
              </div>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[18.056px] left-[28.07%] right-[24.05%] text-[#333333] text-[13.542px] text-nowrap top-[calc(50%-27.084px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Analytics (Coming Soon)
              </p>
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal inset-[42.61%_5.61%_17.05%_28.07%] leading-[18.056px] text-[9.028px] text-[rgba(51,51,51,0.5)]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Distant orb has power to raise and purify our thoughts like a strain of sacred music.
              </p>
            </div>
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
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 31">
                  <path d={svgPaths.p6ce9100} id="Polygon" stroke="var(--stroke-0, #6380F2)" strokeLinejoin="round" strokeWidth="3.38543" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute h-[581px] left-0 overflow-clip top-[4326px] w-[375px]">
            <div className="absolute contents left-[-510px] top-0" data-name="bg">
              <div className="absolute bg-[#1f60d8] h-[494.622px] left-[-510px] top-0 w-[1436px]" data-name="Rectangle" />
              <div className="absolute left-[-734.38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[224.375px_272.241px] mask-size-[1436px_494.622px] size-[447.753px] top-[-272.24px]" data-name="Oval" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
                  <path d={svgPaths.p2f3177b0} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="78.4049" />
                </svg>
              </div>
              <div className="absolute left-[702.62px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1212.62px_-350.025px] mask-size-[1436px_494.622px] size-[447.753px] top-[350.02px]" data-name="Oval" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 448 448">
                  <path d={svgPaths.p87e5d00} id="Oval" opacity="0.247745" stroke="var(--stroke-0, #7BE8FB)" strokeWidth="39.2025" />
                </svg>
              </div>
              <div className="absolute h-[202.436px] left-[-180.92px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-329.082px_-292.186px] mask-size-[1436px_494.622px] top-[292.19px] w-[106.704px]" data-name="Plant Left" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 203">
                  <g id="Plant Left" opacity="0.499558">
                    <path clipRule="evenodd" d={svgPaths.p270e2800} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf" opacity="0.254767" />
                    <path clipRule="evenodd" d={svgPaths.p313daf00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_2" opacity="0.248489" />
                    <path clipRule="evenodd" d={svgPaths.p1f0472c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_3" opacity="0.251628" />
                    <path clipRule="evenodd" d={svgPaths.p26a39a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_4" opacity="0.498396" />
                    <path clipRule="evenodd" d={svgPaths.p3780a072} fill="var(--fill-0, white)" fillRule="evenodd" id="Leaf_5" opacity="0.497396" />
                    <path clipRule="evenodd" d={svgPaths.pc2af780} fill="var(--fill-0, white)" fillRule="evenodd" id="Base" />
                  </g>
                </svg>
              </div>
              <div className="absolute h-[102.714px] left-[476.25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-986.252px_0px] mask-size-[1436px_494.622px] opacity-[0.251] overflow-clip top-0 w-[73.794px]" data-name="Hanging Lamp" style={{ maskImage: `url('${imgOval1}')` }}>
                <div className="absolute bottom-[-0.23px] h-[52.923px] left-[calc(50%+0.366px)] translate-x-[-50%] w-[72.525px]" data-name="Light">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 53">
                    <g id="Light">
                      <path clipRule="evenodd" d={svgPaths.p3c1f4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp Light" opacity="0.504999" />
                      <path clipRule="evenodd" d={svgPaths.p362f6080} fill="var(--fill-0, white)" fillRule="evenodd" id="Hanging Lamp" />
                    </g>
                  </svg>
                </div>
                <div className="absolute bg-white bottom-[30.15px] left-[calc(50%+0.856px)] top-0 translate-x-[-50%] w-[4.9px]" data-name="Wire" />
              </div>
              <div className="absolute left-[103.29px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-613.293px_-406.866px] mask-size-[1436px_494.622px] size-[243.322px] top-[406.87px]" data-name="Combined Shape + Combined Shape Mask" style={{ maskImage: `url('${imgOval1}')` }}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 244">
                  <g id="Combined Shape + Combined Shape Mask" opacity="0.501907">
                    <g id="Mask"></g>
                    <mask height="244" id="mask0_1_3044" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="244" x="0" y="0">
                      <path d={svgPaths.p2bc58380} fill="var(--fill-0, white)" id="Mask_2" />
                    </mask>
                    <g mask="url(#mask0_1_3044)">
                      <path d={svgPaths.p28798600} fill="var(--fill-0, white)" id="Combined Shape" />
                      <path d={svgPaths.p323a9af0} fill="var(--fill-0, white)" id="Combined Shape_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="absolute h-[249.305px] left-[-258.7px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-251.301px_-100.719px] mask-size-[1436px_494.622px] top-[100.72px] w-[961.324px]" data-name="objects" style={{ maskImage: `url('${imgOval1}')` }}>
                <div className="absolute bottom-0 left-0 right-[-0.33%] top-[-2.36%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 965 256">
                    <g id="objects">
                      <path d={svgPaths.pff2c980} id="Oval" stroke="var(--stroke-0, #F07867)" strokeWidth="3.92025" />
                      <path d={svgPaths.p10275a00} fill="var(--fill-0, #FACE55)" id="Oval_2" />
                      <path d={svgPaths.p29d0e680} id="Polygon" stroke="var(--stroke-0, #79E6F8)" strokeLinejoin="round" strokeWidth="5.88037" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.24] left-[189px] not-italic text-[36px] text-center text-white top-[23px] translate-x-[-50%] w-[360px]">Ready to improve your student’s results?</p>
            <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[164px] justify-center leading-[0] left-[188px] not-italic text-[14px] text-center text-white top-[221px] translate-x-[-50%] translate-y-[-50%] w-[320px]">
              <p className="leading-[normal]">Using GoBOT’s A.I. capabilities, students are delivered relevant material to improve areas in which they struggle. This is done through a list of compiled quizzes that test students in various ways.</p>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[103px] top-[400px]">
              <div className="h-[48px] relative shrink-0 w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Contact
                </p>
              </div>
            </div>
            <div className="absolute h-[383px] left-[46px] overflow-clip top-[6px] w-[255px]">
              <div className="absolute h-[48px] left-[57px] top-[314px] w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute bg-[#face55] inset-0 rounded-[8px]" data-name="Rectangle" />
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[#232323] text-[18px] text-center text-nowrap top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Get Started
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#232323] h-[1195px] left-0 overflow-clip top-[4821px] w-[375px]">
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[40px] text-[40px] text-nowrap text-white top-[26px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Learning Now!
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[40px] text-[16px] text-[rgba(255,255,255,0.5)] top-[91px] w-[279px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              By the same illusion which lifts the horizon of the sea to the level of the spectator.
            </p>
            <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[103px] top-[246px]">
              <div className="h-[48px] relative shrink-0 w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Get Started
                </p>
              </div>
              <div className="h-[48px] relative shrink-0 w-[170px]" data-name="Dark/Button/Primary/Text">
                <div className="absolute inset-0 rounded-[8px]" data-name="Rectangle">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Contact
                </p>
              </div>
            </div>
            <div className="absolute bg-white h-px left-[18px] opacity-[0.195] top-[434px] w-[339px]" data-name="Rectangle" />
            <div className="absolute bg-white h-px left-[18px] opacity-[0.195] top-[999px] w-[339px]" data-name="Rectangle" />
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[48px] left-[40px] text-[40px] text-nowrap text-white top-[478px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Gopele
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal h-[63px] leading-[26px] left-[41px] text-[16px] text-[rgba(255,255,255,0.5)] top-[559px] w-[270px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] left-[41px] text-[#f4d35e] text-[16px] text-nowrap top-[655px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Contact
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[41px] text-[16px] text-nowrap text-white top-[719px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Email: lesego@gopele.com
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[41px] text-[16px] text-nowrap text-white top-[767px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Phone: +27 (082) 076-53-59
            </p>
            <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[32px] left-[42px] text-[#f4d35e] text-[16px] text-nowrap top-[842px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Subscribe
            </p>
            <div className="absolute h-[76px] left-[42px] top-[883px] w-[201px]" data-name="Dark/Field/Default">
              <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-0 text-[12px] text-nowrap text-white top-0 uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Label
              </p>
              <div className="absolute bg-white bottom-0 left-0 right-0 rounded-[8px] top-[28px]" data-name="Rectangle" />
              <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[16px] text-[16px] text-[rgba(51,51,51,0.5)] text-nowrap top-[37px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Placeholder
              </p>
            </div>
            <div className="absolute h-[48px] left-[253px] top-[911px] w-[100px]" data-name="Dark/Button/Primary/Text">
              <div className="absolute bg-[#1f60d8] inset-0 rounded-[8px]" data-name="Rectangle" />
              <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[normal] left-[32.35%] right-[32.35%] text-[18px] text-center text-nowrap text-white top-[calc(50%-12px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Submit
              </p>
            </div>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[20px] text-[16px] text-nowrap text-white top-[1046px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Privacy Policy Terms & Conditions
            </p>
            <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[32px] left-[139px] text-[16px] text-[rgba(255,255,255,0.5)] text-nowrap text-right top-[1089px] translate-x-[-100%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              © 2022 Gopele
            </p>
          </div>
        </div>
        <div className="bg-white h-[664px] overflow-clip relative shrink-0 w-[1186px]" data-name="Log In">
          <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[98px] justify-center leading-[0] left-[593px] not-italic text-[32px] text-black text-center top-[104px] translate-x-[-50%] translate-y-[-50%] w-[588px]">
            <p className="leading-[42px]">Login using your Studnet ID</p>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[21px] items-start left-[379px] top-[160px]">
            <InputDefaultOff className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
              <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Institute Code</p>
              <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
                  <p className="font-['Poppins:Regular',_sans-serif] leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">XXXX-XXXX</p>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[428px]" data-name="Input/Default/Off">
              <p className="font-['Poppins:Regular',_sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#232323] text-[15px] w-[min-content]">Password</p>
              <div className="bg-white relative rounded-[8px] shrink-0 w-[428px]" data-name="Text field">
                <div className="box-border content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[428px]">
                  <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic opacity-50 relative shrink-0 text-[15px] text-black text-nowrap whitespace-pre">***********</p>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[299px] top-[469px]">
            <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] h-[98px] justify-center leading-[0] left-[593px] not-italic text-[14px] text-black text-center top-[555px] translate-x-[-50%] translate-y-[-50%] w-[588px]">
              <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[42px] underline">Forget Password? Ask your Teacher to reset it</p>
            </div>
            <div className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[7px] h-[48px] items-center left-[379px] px-[12px] py-[7px] rounded-[8px] top-[469px] w-[428px]" data-name="Button">
              <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[18px] text-center w-[403px]">Log In</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#6483f6] bottom-[97.54%] box-border content-stretch flex gap-[10px] items-center left-[0.05%] px-[45px] py-[68px] right-[93.19%] rounded-[32px] top-0" data-name="Labels">
        <div aria-hidden="true" className="absolute border border-[#6483f6] border-solid inset-0 pointer-events-none rounded-[32px]" />
        <div className="flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[100px] text-nowrap text-white">
          <p className="leading-[26px] whitespace-pre">Ready For Development</p>
        </div>
      </div>
    </div>
  );
}

export default function ReadyForDevelopment2() {
  return <ReadyForDevelopment className="relative size-full" />;
}