import svgPaths from "../../imports/svg-rtrc0xe1hb";
import { imgCross } from "../../imports/svg-wo5f8";

interface ButtonProps {
  className?: string;
  size?: "Small";
  type?: "Primary" | "Secondary";
  state?: "Pressed" | "Standard";
  subState?: "Normal" | "Hover";
}

export function Button({ className, size = "", type = "", state = "", subState = "" }: ButtonProps) {
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
