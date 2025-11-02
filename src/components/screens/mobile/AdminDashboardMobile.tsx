import { useState } from 'react';
import svgPaths from "../../../imports/svg-2vhln8eiwy";
import { Screen } from '../../../hooks/useNavigation';
import { ChevronLeft, ChevronRight, Calendar, Menu } from 'lucide-react';

type AdminDashboardMobileProps = {
  onNavigate: (screen: Screen) => void;
};

export function AdminDashboardMobile({ onNavigate }: AdminDashboardMobileProps) {
  const [selectedYear, setSelectedYear] = useState('Year');

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Admin Dashboard Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] h-[60px] w-full flex items-center justify-between px-4">
        <button 
          onClick={() => onNavigate('institutesPage')}
          className="flex items-center gap-2"
        >
          <div className="size-[32px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
              <g id="Frame 2">
                <circle cx="23" cy="23" fill="var(--fill-0, #1F60D8)" id="Ellipse 1" r="23" />
                <path d="M 15.333 23 L 30.667 23 M 30.667 23 L 25.778 18.111 M 30.667 23 L 25.778 27.889" id="Vector 1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </button>
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-black">Analytics</h1>
        <button className="p-2">
          <Menu className="size-6 text-[#232323]" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6 space-y-4">
        {/* Stat Cards */}
        <div className="flex flex-col gap-4">
          {/* Total No of Institutes */}
          <div className="h-[120px] rounded-[10px] border-2 border-[#9b9b9b] p-4">
            <div className="font-['Poppins:SemiBold',_sans-serif]">
              <p className="text-[16px] text-black leading-[normal]">Total No of Institutes</p>
              <p className="text-[12px] text-[#9b9b9b] leading-[normal] mt-1">All Institutes that you handle</p>
              <p className="text-[48px] text-[#face55] leading-[normal] text-right mt-2">02</p>
            </div>
          </div>

          {/* Subjects */}
          <div className="h-[120px] rounded-[10px] border-2 border-[#9b9b9b] p-4">
            <div className="font-['Poppins:SemiBold',_sans-serif]">
              <p className="text-[16px] text-black leading-[normal]">Subjects</p>
              <p className="text-[12px] text-[#9b9b9b] leading-[normal] mt-1">All the subjects offered by your institutes</p>
              <p className="text-[48px] text-[#face55] leading-[normal] text-right mt-2">16</p>
            </div>
          </div>

          {/* No. of Students */}
          <div className="h-[120px] rounded-[10px] border-2 border-[#9b9b9b] p-4">
            <div className="font-['Poppins:SemiBold',_sans-serif]">
              <p className="text-[16px] text-black leading-[normal]">No. of Students</p>
              <p className="text-[12px] text-[#9b9b9b] leading-[normal] mt-1">All the Students enrolled</p>
              <p className="text-[48px] text-[#face55] leading-[normal] text-right mt-2">1542</p>
            </div>
          </div>
        </div>

        {/* Growth Chart */}
        <div className="rounded-[10px] border-2 border-[#9b9b9b] p-4 mt-6">
          {/* Chart Title */}
          <div className="flex items-center justify-between mb-4">
            <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-black leading-[normal]">
              No. of Students Growth
            </p>
          </div>

          {/* Chart Controls */}
          <div className="flex gap-2 items-center justify-end mb-4">
            {/* Year Selector */}
            <div className="box-border flex gap-[6px] items-center justify-end px-[10px] py-[8px] rounded-[10px] border border-[#cccccc] cursor-pointer">
              <Calendar className="size-[16px]" />
              <p className="font-['Inter:Medium',_sans-serif] text-[12px] text-[#333333]">{selectedYear}</p>
              <div className="h-[7px] w-[11px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
                  <path d={svgPaths.p3eb042f2} fill="var(--fill-0, #333333)" />
                </svg>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-[5px]">
              <button className="bg-[#f5f6fa] p-[5px] rounded-[5px] size-[33px] flex items-center justify-center">
                <ChevronLeft className="size-[20px]" color="#333333" />
              </button>
              <button className="bg-[#f5f6fa] p-[5px] rounded-[5px] size-[33px] flex items-center justify-center">
                <ChevronRight className="size-[20px]" color="#333333" />
              </button>
            </div>
          </div>

          {/* Chart Visualization */}
          <div className="relative w-full h-[220px] mt-4">
            {/* Y-axis values */}
            <div className="absolute left-[-5px] top-0 flex flex-col justify-between h-full font-['Poppins:Medium',_sans-serif] text-[#333333] text-[12px] text-right pr-2">
              <p>5</p>
              <p>4</p>
              <p>3</p>
              <p>2</p>
              <p>1</p>
              <p>0</p>
            </div>

            {/* Chart area */}
            <div className="absolute left-[25px] right-0 top-0 bottom-[30px]">
              {/* Grid lines */}
              <div className="absolute inset-0">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="absolute left-0 right-0 border-t border-[#F7F8FA]" style={{ top: `${i * 20}%` }} />
                ))}
              </div>

              {/* Chart curve */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 190">
                  <path
                    d={svgPaths.p11f01280}
                    stroke="#FFA600"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.8"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="240" cy="30" r="6" fill="#242730" stroke="white" strokeWidth="2" />
                </svg>
              </div>

              {/* Tooltip */}
              <div className="absolute bg-white box-border flex flex-col items-center justify-center left-[220px] px-[12px] py-[4px] rounded-[8px] top-[-25px] border border-[#cccccc]">
                <p className="font-['Poppins:Medium',_sans-serif] text-[12px] text-[#333333]">4.5k</p>
                <p className="font-['Poppins:Regular',_sans-serif] text-[10px] text-[#333333]">Students</p>
              </div>
            </div>

            {/* X-axis labels */}
            <div className="absolute left-[25px] right-0 bottom-0 flex items-center justify-between font-['Poppins:Medium',_sans-serif] text-[#333333] text-[9px] text-center">
              <p>Jan</p>
              <p>Feb</p>
              <p>Mar</p>
              <p>Apr</p>
              <p>May</p>
              <p>Jun</p>
              <p>Jul</p>
              <p>Aug</p>
              <p>Sep</p>
              <p>Oct</p>
              <p>Nov</p>
              <p>Dec</p>
            </div>
          </div>

          {/* Y-axis Label */}
          <div className="mt-4">
            <p className="font-['Poppins:Regular',_sans-serif] text-[10px] text-[#9b9b9b] text-center">
              No. of Students Growth (in thousands)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
