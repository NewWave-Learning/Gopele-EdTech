import { useState } from 'react';
import svgPaths from "../../imports/svg-2vhln8eiwy";
import { Screen } from '../../hooks/useNavigation';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { AdminTopBar, AdminSideBar } from '../shared/AdminNavigation';

type AdminDashboardProps = {
  onNavigate: (screen: Screen) => void;
};

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const [selectedYear, setSelectedYear] = useState('Year');

  return (
    <div className="bg-white relative w-[1440px] min-h-screen" data-name="Analytics">
      <AdminTopBar onNavigate={onNavigate} />
      <AdminSideBar onNavigate={onNavigate} activeScreen="analytics" />

      {/* Main Content Area - Stat Cards */}
      {/* Total No of Institutes */}
          <div className="absolute h-[146px] left-[349px] rounded-[10px] top-[112px] w-[324px]">
            <div className="font-['Poppins:SemiBold',_sans-serif] not-italic overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex flex-col h-[43px] justify-center leading-[0] left-[19px] text-[17.863px] text-black top-[24.5px] translate-y-[-50%] w-[204px]">
                <p className="leading-[normal]">Total No of Institutes</p>
              </div>
              <p className="absolute h-[43px] leading-[normal] left-[19px] text-[#9b9b9b] text-[14px] top-[38px] w-[204px]">All Institutes that you handle</p>
              <div className="absolute flex flex-col h-[78px] justify-center leading-[0] left-[310px] text-[#face55] text-[58.92px] text-right top-[107px] translate-x-[-100%] translate-y-[-50%] w-[161px]">
                <p className="leading-[normal]">02</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Subjects */}
          <div className="absolute h-[146px] left-[695px] rounded-[10px] top-[112px] w-[324px]">
            <div className="font-['Poppins:SemiBold',_sans-serif] h-[146px] not-italic overflow-clip relative rounded-[inherit] w-[324px]">
              <div className="absolute flex flex-col h-[43px] justify-center leading-[0] left-[19px] text-[17.863px] text-black top-[24.5px] translate-y-[-50%] w-[204px]">
                <p className="leading-[normal]">Subjects</p>
              </div>
              <p className="absolute h-[43px] leading-[normal] left-[19px] text-[#9b9b9b] text-[14px] top-[38px] w-[204px]">All the subjects offered by your institutes</p>
              <div className="absolute flex flex-col h-[78px] justify-center leading-[0] left-[310px] text-[#face55] text-[58.92px] text-right top-[107px] translate-x-[-100%] translate-y-[-50%] w-[161px]">
                <p className="leading-[normal]">16</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* No. of Students */}
          <div className="absolute h-[146px] left-[1041px] rounded-[10px] top-[112px] w-[324px]">
            <div className="font-['Poppins:SemiBold',_sans-serif] h-[146px] not-italic overflow-clip relative rounded-[inherit] w-[324px]">
              <div className="absolute flex flex-col h-[43px] justify-center leading-[0] left-[19px] text-[17.863px] text-black top-[24.5px] translate-y-[-50%] w-[204px]">
                <p className="leading-[normal]">No. of Students</p>
              </div>
              <p className="absolute h-[43px] leading-[normal] left-[19px] text-[#9b9b9b] text-[14px] top-[38px] w-[204px]">All the Students enrolled</p>
              <div className="absolute flex flex-col h-[78px] justify-center leading-[0] left-[310px] text-[#face55] text-[58.92px] text-right top-[107px] translate-x-[-100%] translate-y-[-50%] w-[161px]">
                <p className="leading-[normal]">1542</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>

          {/* Growth Chart */}
          <div className="absolute h-[474px] left-[349px] rounded-[10px] top-[287px] w-[1016px]">
            <div className="h-[474px] overflow-clip relative rounded-[inherit] w-[1016px]">
              {/* Chart Title */}
              <div className="absolute flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[43px] justify-center leading-[0] left-[26px] not-italic text-[17.863px] text-black top-[37.5px] translate-y-[-50%] w-[259px]">
                <p className="leading-[normal]">No. of Students Growth</p>
              </div>

              {/* Y-axis Label */}
              <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[32px] top-[261px] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "204.109375", "--transform-inner-height": "14" } as React.CSSProperties}>
                <div className="flex-none rotate-[270deg]">
                  <div className="flex flex-col font-['Poppins:Regular',_sans-serif] justify-center leading-[0] not-italic relative text-[#9b9b9b] text-[12px] text-nowrap">
                    <p className="leading-[normal] whitespace-pre">No. of Students Growth (in thousands)</p>
                  </div>
                </div>
              </div>

              {/* Chart Controls */}
              <div className="absolute content-stretch flex gap-[10px] items-center justify-end right-[23px] top-[20px]">
                {/* Year Selector */}
                <div className="box-border content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[8px] relative rounded-[10px] shrink-0 w-[98px] cursor-pointer hover:bg-gray-50 transition-colors">
                  <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <Calendar className="size-[18px]" />
                  <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] text-center w-[37px]">{selectedYear}</p>
                  <div className="h-[7px] relative shrink-0 w-[11px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
                      <path d={svgPaths.p3eb042f2} fill="var(--fill-0, #333333)" />
                    </svg>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="content-stretch flex gap-[5px] items-start relative shrink-0">
                  <button className="bg-[#f5f6fa] box-border content-stretch flex gap-[10px] items-center justify-center p-[5px] relative rounded-[5px] shrink-0 size-[33px] hover:bg-[#e5e6ea] transition-colors cursor-pointer">
                    <ChevronLeft className="size-[24px]" color="#333333" />
                  </button>
                  <button className="bg-[#f5f6fa] box-border content-stretch flex gap-[10px] items-center justify-center p-[5px] relative rounded-[5px] shrink-0 size-[33px] hover:bg-[#e5e6ea] transition-colors cursor-pointer">
                    <ChevronRight className="size-[24px]" color="#333333" />
                  </button>
                </div>
              </div>

              {/* Chart Visualization Placeholder */}
              <div className="absolute left-[110px] top-[150px] w-[850px] h-[270px]">
                {/* Y-axis values */}
                <div className="absolute left-[-30px] top-0 flex flex-col justify-between h-full font-['Poppins:Medium',_sans-serif] text-[#333333] text-[17.319px] text-right">
                  <p>5</p>
                  <p>4</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>
                  <p>0</p>
                </div>

                {/* Grid lines */}
                <div className="absolute inset-0">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="absolute left-0 right-0 border-t border-[#F7F8FA]" style={{ top: `${i * 20}%` }} />
                  ))}
                </div>

                {/* Chart curve placeholder */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 850 270">
                    <path
                      d={svgPaths.p11f01280}
                      stroke="#FFA600"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.8"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle cx="680" cy="42" r="10" fill="#242730" stroke="white" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Tooltip */}
                <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-center left-[640px] px-[24.741px] py-[6.185px] rounded-[12.371px] top-[-37px] w-[98.965px] border border-[#cccccc]">
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[17.319px] text-nowrap whitespace-pre">4.5k</p>
                  <p className="font-['Poppins:Regular',_sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#333333] text-[14.845px] text-nowrap whitespace-pre">Students</p>
                </div>
              </div>

              {/* X-axis labels (months) */}
              <div className="absolute content-stretch flex font-['Poppins:Medium',_sans-serif] items-center justify-between leading-[normal] left-[110px] not-italic text-[#333333] text-[12px] text-center text-nowrap top-[423px] w-[850px] whitespace-pre">
                <p className="relative shrink-0">Jan</p>
                <p className="relative shrink-0">Feb</p>
                <p className="relative shrink-0">Mar</p>
                <p className="relative shrink-0">Apr</p>
                <p className="relative shrink-0">May</p>
                <p className="relative shrink-0">Jun</p>
                <p className="relative shrink-0">July</p>
                <p className="relative shrink-0">Aug</p>
                <p className="relative shrink-0">Sep</p>
                <p className="relative shrink-0">Oct</p>
                <p className="relative shrink-0">Nov</p>
                <p className="relative shrink-0">Dec</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
    </div>
  );
}
