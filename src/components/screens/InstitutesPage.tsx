import { Info } from 'lucide-react';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-dweaq6vybo";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AdminTopBar, AdminSideBar } from '../shared/AdminNavigation';

type InstitutesPageProps = {
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

export function InstitutesPage({ onNavigate }: InstitutesPageProps) {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="Institutes Page">
      <AdminTopBar onNavigate={onNavigate} />
      <AdminSideBar onNavigate={onNavigate} activeScreen="institutions" />

      {/* Main Content */}
      <div className="ml-[306px] pt-[80px] px-[40px] pb-[40px]">
        {/* Page Title */}
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[24px] mb-[50px] mt-[67px]">
          <p className="leading-[32px]">Your Institutes</p>
        </div>

        {/* Institute List */}
        <div className="flex flex-col gap-[12px]">
          {MOCK_INSTITUTES.map((institute) => (
            <div
              key={institute.id}
              className="h-[77px] rounded-[8px] w-full max-w-[939px] border border-[#9b9b9b] hover:shadow-md transition-shadow"
            >
              <div className="h-[77px] overflow-clip relative rounded-[inherit] w-full">
                {/* Institute Logo */}
                <div className="absolute left-[12px] rounded-[10px] size-[50px] top-[14px] overflow-hidden">
                  <ImageWithFallback
                    alt={institute.name}
                    className="w-full h-full object-cover"
                    src={institute.logo}
                  />
                </div>

                {/* Institute Name */}
                <div className="absolute bottom-[34px] left-[103px]">
                  <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[16px]">
                    <p className="leading-[28.199px]">{institute.name}</p>
                  </div>
                </div>

                {/* Location and Category */}
                <div className="absolute content-stretch flex gap-[12.425px] items-center left-[103px] top-[43px]">
                  {/* Location */}
                  <div className="content-stretch flex gap-[5.257px] items-center">
                    <div className="relative shrink-0 size-[15.292px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path d={svgPaths.p31037700} fill="#FACE55" />
                          <path clipRule="evenodd" d={svgPaths.p11473a80} fill="#FACE55" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[7.941px] tracking-[1.4181px] uppercase">
                      <p className="leading-[18.152px]">{institute.location}</p>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="content-stretch flex gap-[5.257px] items-center">
                    <div className="relative shrink-0 size-[15.292px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path clipRule="evenodd" d={svgPaths.p15e77dc0} fill="#FACE55" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] not-italic text-[#232323] text-[7.941px] tracking-[1.4181px] uppercase">
                      <p className="leading-[18.152px]">{institute.category}</p>
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="absolute contents left-[477px] top-[15px]">
                  {/* Vertical Dividers */}
                  <div className="absolute flex items-center justify-center left-[545px] top-[15px] rotate-90">
                    <div className="h-0 w-[47px] border-t border-dashed border-black" />
                  </div>
                  <div className="absolute flex items-center justify-center left-[634px] top-[15px] rotate-90">
                    <div className="h-0 w-[47px] border-t border-dashed border-black" />
                  </div>

                  {/* Students */}
                  <div className="absolute bottom-[18px] font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[477px] not-italic text-[#232323]">
                    <div className="absolute bottom-[48.5px] flex flex-col justify-center left-[6px] text-[15.62px] translate-y-[50%]">
                      <p className="leading-[19px]">{institute.students}</p>
                    </div>
                    <div className="absolute bottom-[24px] flex flex-col justify-center left-0 text-[9.762px] translate-y-[50%]">
                      <p className="leading-[11.875px]">Students</p>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="absolute bottom-[20px] font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[568px] not-italic text-[#232323]">
                    <div className="absolute bottom-[26px] flex flex-col justify-center left-0 text-[9.762px] translate-y-[50%]">
                      <p className="leading-[11.875px]">Subjects</p>
                    </div>
                    <div className="absolute bottom-[47.5px] flex flex-col justify-center left-[12px] text-[15.62px] translate-y-[50%]">
                      <p className="leading-[19px]">{institute.subjects}</p>
                    </div>
                  </div>

                  {/* Lessons Completed */}
                  <div className="absolute bottom-[17px] font-['Poppins:SemiBold',_sans-serif] leading-[0] left-[657px] not-italic text-[#232323]">
                    <div className="absolute bottom-[29px] flex flex-col justify-center leading-[11.875px] left-[33.5px] text-[9.762px] text-center translate-x-[-50%] translate-y-[50%] w-[67px]">
                      <p>Lessons Completed</p>
                    </div>
                    <div className="absolute bottom-[50.5px] flex flex-col justify-center left-[20px] text-[15.62px] translate-y-[50%]">
                      <p className="leading-[19px]">{institute.lessonsCompleted}</p>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => onNavigate('instituteDetails', institute)}
                  className="absolute bg-[#1f60d8] box-border content-stretch flex gap-[4.727px] h-[32.414px] items-center left-[786px] pl-[12.831px] pr-[12.155px] py-[4.727px] rounded-[5.402px] top-[23px] hover:bg-[#1850b8] transition-colors"
                >
                  <Info className="size-[20px] text-white" />
                  <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic text-[12.155px] text-white">
                    View Details
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
