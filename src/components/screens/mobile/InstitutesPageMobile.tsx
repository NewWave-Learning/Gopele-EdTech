import { Info, Menu } from 'lucide-react';
import { Screen } from '../../../hooks/useNavigation';
import svgPaths from "../../../imports/svg-dweaq6vybo";
import { ImageWithFallback } from '../../figma/ImageWithFallback';

type InstitutesPageMobileProps = {
  onNavigate: (screen: Screen) => void;
};

// Mock data for institutes
const MOCK_INSTITUTES = [
  {
    id: 1,
    name: 'New Thomas School for Gifted',
    location: 'Johannesburg',
    category: 'ART SCHOOL',
    students: '2.4k',
    subjects: '07',
    lessonsCompleted: '1.7k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Springfield Science Academy',
    location: 'Cape Town',
    category: 'SCIENCE SCHOOL',
    students: '3.1k',
    subjects: '09',
    lessonsCompleted: '2.2k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Riverside Primary School',
    location: 'Pretoria',
    category: 'GENERAL SCHOOL',
    students: '1.8k',
    subjects: '06',
    lessonsCompleted: '1.3k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Tech Innovation High',
    location: 'Johannesburg',
    category: 'TECHNOLOGY SCHOOL',
    students: '2.9k',
    subjects: '08',
    lessonsCompleted: '1.9k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Business Leaders Academy',
    location: 'Durban',
    category: 'BUSINESS SCHOOL',
    students: '2.6k',
    subjects: '07',
    lessonsCompleted: '1.6k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Harmony Arts College',
    location: 'Port Elizabeth',
    category: 'ART SCHOOL',
    students: '2.1k',
    subjects: '06',
    lessonsCompleted: '1.4k',
    logo: 'https://images.unsplash.com/photo-1728206415817-edd426280277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGxvZ298ZW58MXx8fHwxNzYxMDM1MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function InstitutesPageMobile({ onNavigate }: InstitutesPageMobileProps) {
  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Institutes Page Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] h-[60px] w-full flex items-center justify-between px-4">
        <button 
          onClick={() => onNavigate('adminDashboard')}
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
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-black">Your Institutes</h1>
        <button className="p-2">
          <Menu className="size-6 text-[#232323]" />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-4 pt-6">
        {/* Institute List */}
        <div className="flex flex-col gap-[12px]">
          {MOCK_INSTITUTES.map((institute) => (
            <div
              key={institute.id}
              className="rounded-[8px] w-full border border-[#9b9b9b] p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3 mb-3">
                {/* Institute Logo */}
                <div className="rounded-[10px] size-[50px] shrink-0 overflow-hidden">
                  <ImageWithFallback
                    alt={institute.name}
                    className="w-full h-full object-cover"
                    src={institute.logo}
                  />
                </div>

                {/* Institute Info */}
                <div className="flex-1 min-w-0">
                  {/* Institute Name */}
                  <p className="font-['Poppins:Medium',_sans-serif] text-[14px] text-[#232323] leading-[20px] mb-1 truncate">
                    {institute.name}
                  </p>

                  {/* Location and Category */}
                  <div className="flex gap-2 items-center flex-wrap">
                    {/* Location */}
                    <div className="flex gap-1 items-center">
                      <div className="size-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path d={svgPaths.p31037700} fill="#FACE55" />
                            <path clipRule="evenodd" d={svgPaths.p11473a80} fill="#FACE55" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Poppins:Medium',_sans-serif] text-[8px] text-[#232323] tracking-[1.2px] uppercase">
                        {institute.location}
                      </p>
                    </div>

                    {/* Category */}
                    <div className="flex gap-1 items-center">
                      <div className="size-[12px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <g>
                            <path clipRule="evenodd" d={svgPaths.p15e77dc0} fill="#FACE55" fillRule="evenodd" />
                          </g>
                        </svg>
                      </div>
                      <p className="font-['Poppins:Medium',_sans-serif] text-[8px] text-[#232323] tracking-[1.2px] uppercase">
                        {institute.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex items-center justify-between pt-3 border-t border-dashed border-[#9b9b9b]">
                {/* Students */}
                <div className="flex flex-col items-center font-['Poppins:SemiBold',_sans-serif]">
                  <p className="text-[14px] text-[#232323] leading-[18px]">{institute.students}</p>
                  <p className="text-[9px] text-[#232323] leading-[12px]">Students</p>
                </div>

                {/* Divider */}
                <div className="h-[30px] w-px border-l border-dashed border-black" />

                {/* Subjects */}
                <div className="flex flex-col items-center font-['Poppins:SemiBold',_sans-serif]">
                  <p className="text-[14px] text-[#232323] leading-[18px]">{institute.subjects}</p>
                  <p className="text-[9px] text-[#232323] leading-[12px]">Subjects</p>
                </div>

                {/* Divider */}
                <div className="h-[30px] w-px border-l border-dashed border-black" />

                {/* Lessons Completed */}
                <div className="flex flex-col items-center font-['Poppins:SemiBold',_sans-serif]">
                  <p className="text-[14px] text-[#232323] leading-[18px]">{institute.lessonsCompleted}</p>
                  <p className="text-[9px] text-[#232323] leading-[12px] text-center">Lessons<br />Completed</p>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => onNavigate('instituteDetails', institute)}
                className="mt-3 w-full bg-[#1f60d8] flex gap-2 h-[40px] items-center justify-center rounded-[6px] hover:bg-[#1850b8] transition-colors"
              >
                <Info className="size-[18px] text-white" />
                <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-white">
                  View Details
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
