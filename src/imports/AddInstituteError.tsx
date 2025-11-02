import svgPaths from "./svg-or09pn6sc1";

function Group() {
  return (
    <div className="absolute inset-[8.64%_9.24%_9.24%_8.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 108">
        <g id="Group">
          <path d={svgPaths.p11ec6000} fill="var(--fill-0, #EB5757)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[8.64%_9.24%_9.24%_8.64%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[50.32%_34.31%_38.81%_34.3%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 15">
        <g id="Group">
          <path d={svgPaths.p36440c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[50.32%_34.31%_38.81%_34.3%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
        <g id="Group">
          <path d={svgPaths.p3e26b080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[35.97%_59.03%_54.7%_31.64%]" data-name="Group">
      <div className="absolute flex inset-[35.97%_59.03%_54.7%_31.64%] items-center justify-center">
        <div className="flex-none h-[9.03px] rotate-[45deg] w-[8.264px]">
          <Group4 />
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
        <g id="Group">
          <path d={svgPaths.p3e26b080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[35.8%_32.86%_54.87%_57.81%]" data-name="Group">
      <div className="absolute flex inset-[35.8%_32.86%_54.87%_57.81%] items-center justify-center">
        <div className="flex-none h-[9.03px] rotate-[135deg] w-[8.264px]">
          <Group6 />
        </div>
      </div>
    </div>
  );
}

function ComponentLottieHttpsAssets2LottiefilesComPackagesLf20Ddxv3RxwJson() {
  return (
    <div className="absolute contents inset-[8.64%_9.24%_9.24%_8.64%]" data-name="[component:lottie:https://assets2.lottiefiles.com/packages/lf20_ddxv3rxw.json]">
      <Group1 />
      <Group3 />
      <Group5 />
      <Group7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[140px] overflow-clip size-[131px] top-[180px]" data-name="Frame">
      <ComponentLottieHttpsAssets2LottiefilesComPackagesLf20Ddxv3RxwJson />
    </div>
  );
}

export default function AddInstituteError() {
  return (
    <div className="bg-white relative size-full" data-name="Add Institute  - error">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[58px] justify-center leading-[0] left-[206px] not-italic text-[32px] text-black text-center top-[57px] translate-x-[-50%] translate-y-[-50%] w-[302px]">
        <p className="leading-[42px]">Whoops :(</p>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.5] left-[206px] not-italic text-[#9b9b9b] text-[15px] text-center top-[86px] translate-x-[-50%] w-[258px]">Something is wrong from our end, plz try again later</p>
      <Frame />
    </div>
  );
}