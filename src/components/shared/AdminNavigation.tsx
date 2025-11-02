import svgPaths from "../../imports/svg-2vhln8eiwy";
import imgProfile from "figma:asset/d3ae7c3e575ebff9b63a9d0ee0f77e65f162b4ae.png";
import { Screen } from '../../hooks/useNavigation';

type AdminNavigationProps = {
  onNavigate: (screen: Screen) => void;
  activeScreen: 'analytics' | 'institutions' | 'team';
};

export function AdminTopBar({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="absolute contents left-[-2px] top-0 z-20" data-name="TopBar">
      <div className="absolute bg-white h-[80px] left-[-2px] top-0 w-[1440px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] z-20" />
      
      {/* FOR TEACHERS Label */}
      <p className="absolute font-['Poppins:Regular',_sans-serif] left-[320px] top-[31px] leading-[normal] not-italic text-[#555555] text-[14.22px] text-nowrap tracking-[0.79px] whitespace-pre z-20">FOR TEACHERS</p>

      {/* Add Institute Button */}
      <button
        onClick={() => onNavigate('addInstitute')}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1073px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[21.99px] hover:bg-[#face55] transition-colors cursor-pointer z-20"
      >
        <div className="relative shrink-0 size-[20.585px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
            <g>
              <path clipRule="evenodd" d={svgPaths.p2bd52b00} fill="var(--fill-0, black)" fillRule="evenodd" />
              <path d={svgPaths.p1e022080} fill="var(--fill-0, black)" />
              <path d={svgPaths.p17822a00} fill="var(--fill-0, black)" />
              <path d={svgPaths.p2fae7100} fill="var(--fill-0, black)" />
              <path d={svgPaths.p1930bdf0} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Institute</p>
      </button>

      {/* Help Button */}
      <button
        onClick={() => console.log('Help clicked')}
        className="absolute bg-[#face55] left-[1237px] overflow-clip rounded-[176px] size-[34px] top-[22px] z-20 cursor-pointer hover:bg-[#f4d35e] transition-colors flex items-center justify-center"
      >
        <p className="font-['Poppins:Medium',_sans-serif] text-[13.709px] text-black">?</p>
      </button>

      {/* Profile */}
      <button
        onClick={() => console.log('Profile clicked')}
        className="absolute left-[1294px] size-[48px] top-[16px] z-20 cursor-pointer hover:opacity-80 transition-opacity rounded-full overflow-hidden"
      >
        <img alt="Admin Profile" className="block max-w-none size-full rounded-full object-cover" src={imgProfile} />
      </button>
    </div>
  );
}

export function AdminSideBar({ onNavigate, activeScreen }: AdminNavigationProps) {
  return (
    <div className="absolute contents left-0 top-[80px] z-10" data-name="Sidebar">
      <div className="absolute flex h-[1075px] items-center justify-center left-0 top-[80px] w-[306px] z-10">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white h-[1075px] w-[306px] shadow-[2px_0px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
      </div>

      {/* Analytics Tab */}
      <button
        onClick={() => onNavigate('adminDashboard')}
        className={`${
          activeScreen === 'analytics' ? 'bg-[#face55]' : 'bg-white hover:bg-[#face55]/50'
        } absolute left-0 top-[112px] h-[59px] w-[306px] cursor-pointer transition-colors flex items-center gap-[22px] px-[28px] z-20`}
      >
        <div className="relative shrink-0 size-[33.246px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
            <g>
              <path d={svgPaths.p442d280} fill="var(--fill-0, black)" />
              <path d={svgPaths.p3f10a000} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
        <p className="font-['Poppins:SemiBold',_sans-serif] text-[13.709px] text-black">Analytics</p>
      </button>

      {/* Your Institutions Tab */}
      <button
        onClick={() => onNavigate('institutesPage')}
        className={`${
          activeScreen === 'institutions' ? 'bg-[#face55]' : 'bg-white hover:bg-[#face55]/50'
        } absolute left-0 top-[171px] h-[59px] w-[306px] cursor-pointer transition-colors flex items-center gap-[22px] px-[28px] z-20`}
      >
        <div className="relative shrink-0 size-[33.246px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 27">
            <g>
              <path d={svgPaths.p3f3c0c0} fill="var(--fill-0, black)" />
              <path d={svgPaths.p4e44b30} fill="var(--fill-0, black)" />
              <path d={svgPaths.p3baf6300} fill="var(--fill-0, black)" />
              <path d={svgPaths.pe8ef900} fill="var(--fill-0, black)" />
              <path d={svgPaths.p358adf0} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
        <p className="font-['Poppins:SemiBold',_sans-serif] text-[13.709px] text-black">Your Institutions</p>
      </button>

      {/* Team Tab */}
      <button
        onClick={() => onNavigate('teamDetails')}
        className={`${
          activeScreen === 'team' ? 'bg-[#face55]' : 'bg-white hover:bg-[#face55]/50'
        } absolute left-0 top-[230px] h-[59px] w-[306px] cursor-pointer transition-colors flex items-center gap-[22px] px-[28px] z-20`}
      >
        <div className="relative shrink-0 size-[33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23">
            <g>
              <path d={svgPaths.p2073b200} fill="var(--fill-0, black)" />
              <path d={svgPaths.p23744b00} fill="var(--fill-0, black)" />
            </g>
          </svg>
        </div>
        <p className="font-['Poppins:SemiBold',_sans-serif] text-[13.709px] text-black">Team</p>
      </button>
    </div>
  );
}
