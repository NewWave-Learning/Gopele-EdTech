import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../hooks/useNavigation';
import svgPaths from "../../imports/svg-j2qlpwx0s8";
import imgLessonsCover from "figma:asset/e9c4b719c5368c2efb97d7a953d338d9807610b5.png";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { AdminTopBar, AdminSideBar } from '../shared/AdminNavigation';

type TeamDetailsProps = {
  onNavigate: (screen: Screen, data?: any) => void;
};

type TeamMember = {
  id: number;
  name: string;
  instituteName: string;
  role: 'Teacher' | 'Admin' | 'Coordinator';
  profileImage: string;
};

// Mock team member data
const MOCK_TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: 'John Doe', instituteName: 'New Thomas School for Gifted', role: 'Teacher', profileImage: imgLessonsCover },
  { id: 2, name: 'Jane Smith', instituteName: 'New Thomas School for Gifted', role: 'Teacher', profileImage: imgLessonsCover },
  { id: 3, name: 'Mike Johnson', instituteName: 'New Thomas School for Gifted', role: 'Admin', profileImage: imgLessonsCover },
  { id: 4, name: 'Sarah Williams', instituteName: 'New Thomas School for Gifted', role: 'Teacher', profileImage: imgLessonsCover },
  { id: 5, name: 'David Brown', instituteName: 'New Thomas School for Gifted', role: 'Coordinator', profileImage: imgLessonsCover },
  { id: 6, name: 'Emma Davis', instituteName: 'New Thomas School for Gifted', role: 'Teacher', profileImage: imgLessonsCover },
  { id: 7, name: 'Chris Wilson', instituteName: 'New Thomas School for Gifted', role: 'Teacher', profileImage: imgLessonsCover },
  { id: 8, name: 'Lisa Anderson', instituteName: 'New Thomas School for Gifted', role: 'Coordinator', profileImage: imgLessonsCover },
  { id: 9, name: 'Tom Martinez', instituteName: 'New Thomas School for Gifted', role: 'Teacher', profileImage: imgLessonsCover },
];

function SolidInterfaceTrashAlt({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Interface/Trash-alt">
      <div className="absolute inset-[9.38%_17.71%_7.32%_17.71%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <g id="Icon">
            <path d={svgPaths.p2b37a780} fill="white" />
            <path clipRule="evenodd" d={svgPaths.p1c16b000} fill="white" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolidCommunicationUserPlus({ className }: { className?: string }) {
  return (
    <div className={className} data-name="Solid/Communication/User-plus">
      <div className="absolute inset-[15.63%_5.21%_15.71%_13.54%]" data-name="Icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
          <g id="Icon">
            <path d={svgPaths.p2a0a9e00} fill="black" />
            <path d={svgPaths.p9cb8df0} fill="black" />
            <path d={svgPaths.p7871a00} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolidGeneralChartPieAlt() {
  return (
    <div className="relative shrink-0 size-[33.246px]" data-name="Solid/General/Chart-pie-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Solid/General/Chart-pie-alt">
          <g id="Icon">
            <path d={svgPaths.p231f5500} fill="black" />
            <path d={svgPaths.p342b0e00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SolidGeneralBank() {
  return (
    <div className="absolute left-[28px] size-[33.246px] top-[13px]" data-name="Solid/General/Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="Solid/General/Bank">
          <g id="Icon">
            <path d={svgPaths.p1cd8c500} fill="black" />
            <path d={svgPaths.p32698d80} fill="black" />
            <path d={svgPaths.p33655670} fill="black" />
            <path d={svgPaths.p235c0500} fill="black" />
            <path d={svgPaths.p230e6f00} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SolidCommunicationUser() {
  return (
    <div className="relative shrink-0 size-[33px]" data-name="Solid/Communication/User">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="Solid/Communication/User">
          <g id="Icon">
            <path d={svgPaths.p4fd7600} fill="black" />
            <path d={svgPaths.p1411f480} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function OutlineGeneralBank() {
  return (
    <div className="relative shrink-0 size-[20.585px]" data-name="Outline/General/Bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Outline/General/Bank">
          <g id="Icon">
            <path clipRule="evenodd" d={svgPaths.p32a89900} fill="black" fillRule="evenodd" />
            <path d={svgPaths.p389c8700} fill="black" />
            <path d={svgPaths.p1d1d7c00} fill="black" />
            <path d={svgPaths.p35407680} fill="black" />
            <path d={svgPaths.p1607c900} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TeamMemberCard({ 
  member, 
  onRemove,
  onRoleChange 
}: { 
  member: TeamMember; 
  onRemove: (id: number) => void;
  onRoleChange: (id: number, newRole: TeamMember['role']) => void;
}) {
  return (
    <div className="h-[76px] rounded-[8px] w-[986px]">
      <div className="h-[76px] overflow-clip relative rounded-[inherit] w-[986px]">
        <div className="absolute left-[35px] pointer-events-none rounded-[82.333px] size-[39px] top-[19px]" data-name="Lessons Cover">
          <div aria-hidden="true" className="absolute inset-0 rounded-[82.333px]">
            <div className="absolute bg-[#c4c4c4] inset-0 rounded-[82.333px]" />
            <div className="absolute inset-0 overflow-hidden rounded-[82.333px]">
              <ImageWithFallback alt={member.name} className="absolute h-[211.03%] left-[-22.25%] max-w-none top-[-29.03%] w-[145.56%] object-cover" src={member.profileImage} />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[#face55] border-[2.208px] border-solid inset-[-2.208px] rounded-[84.5405px]" />
        </div>
        <div className="absolute bottom-[37.5px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center leading-[0] left-[464px] not-italic text-[#9b9b9b] text-[14px] text-nowrap translate-y-[50%]">
          <p className="leading-[28.199px] whitespace-pre">Membership:</p>
        </div>
        <div className="absolute box-border content-stretch flex gap-[10px] h-[34px] items-center justify-end px-[10px] py-[8px] right-[233px] rounded-[10px] top-[21px]">
          <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[10px]" />
          <select
            value={member.role}
            onChange={(e) => onRoleChange(member.id, e.target.value as TeamMember['role'])}
            className="font-['Inter:Medium',_sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#333333] text-[12px] w-[149px] bg-transparent border-none outline-none cursor-pointer appearance-none"
          >
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
            <option value="Coordinator">Coordinator</option>
          </select>
          <div className="h-[7px] relative shrink-0 w-[11px] pointer-events-none">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
              <g id="Frame 36">
                <path d={svgPaths.p3eb042f2} fill="#333333" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        <button
          onClick={() => onRemove(member.id)}
          className="absolute bg-[#eb5757] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[781px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[20px] hover:bg-[#d94545] transition-colors cursor-pointer"
          data-name="Button"
        >
          <SolidInterfaceTrashAlt className="relative shrink-0 size-[24px]" />
          <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[13.709px] text-nowrap text-white whitespace-pre">Remove Member</p>
        </button>
        <div className="absolute contents leading-[0] left-[90px] not-italic text-nowrap top-[14px]">
          <div className="absolute bottom-[47.5px] flex flex-col font-['Poppins:Medium',_sans-serif] justify-center left-[90px] text-[#232323] text-[16px] translate-y-[50%]">
            <p className="leading-[28.199px] text-nowrap whitespace-pre">{member.name}</p>
          </div>
          <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center left-[90px] text-[#1f60d8] text-[12.337px] top-[48.5px] tracking-[2.2031px] translate-y-[-50%] uppercase">
            <p className="leading-[28.199px] text-nowrap whitespace-pre">{member.instituteName}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export function TeamDetails({ onNavigate }: TeamDetailsProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(MOCK_TEAM_MEMBERS);
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 7;

  const totalPages = Math.ceil(teamMembers.length / membersPerPage);
  const currentMembers = teamMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  const handleAddMember = () => {
    onNavigate('addMember');
  };

  const handleRemoveMember = (memberId: number) => {
    const member = teamMembers.find(m => m.id === memberId);
    setTeamMembers(prev => prev.filter(m => m.id !== memberId));
    toast.success(`${member?.name} has been removed from the team`);
  };

  const handleRoleChange = (memberId: number, newRole: TeamMember['role']) => {
    setTeamMembers(prev => prev.map(m => 
      m.id === memberId ? { ...m, role: newRole } : m
    ));
    const member = teamMembers.find(m => m.id === memberId);
    toast.success(`${member?.name}'s role updated to ${newRole}`);
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <div className="bg-white relative w-[1440px] min-h-screen" data-name="Team Details">
      <AdminTopBar onNavigate={onNavigate} />
      <AdminSideBar onNavigate={onNavigate} activeScreen="team" />

      {/* Add Member Button */}
      <button
        onClick={handleAddMember}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1215px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[127px] hover:bg-[#face55] transition-colors cursor-pointer"
        data-name="Button"
      >
        <SolidCommunicationUserPlus className="relative shrink-0 size-[24px]" />
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Member</p>
      </button>

      {/* Your Team Title */}
      <div className="absolute bottom-[890px] flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] left-[378px] not-italic text-[#232323] text-[24px] text-nowrap translate-y-[50%]">
        <p className="leading-[32px] whitespace-pre">Your Team</p>
      </div>

      {/* Add Member Button */}
      <button
        onClick={handleAddMember}
        className="absolute bg-[#f4d35e] box-border content-stretch flex gap-[5.331px] h-[36.556px] items-center left-[1215px] pl-[14.47px] pr-[13.709px] py-[5.331px] rounded-[6.093px] top-[127px] hover:bg-[#face55] transition-colors cursor-pointer"
        data-name="Button"
      >
        <SolidCommunicationUserPlus className="relative shrink-0 size-[24px]" />
        <p className="font-['Poppins:SemiBold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#232323] text-[13.709px] text-nowrap whitespace-pre">Add Member</p>
      </button>

      {/* Team Members List */}
      <div className="absolute left-[378px] top-[225px] flex flex-col gap-[2px]">
        {currentMembers.map((member) => (
          <TeamMemberCard 
            key={member.id} 
            member={member} 
            onRemove={handleRemoveMember}
            onRoleChange={handleRoleChange}
          />
        ))}
      </div>

      {/* Arrow Buttons */}
      {totalPages > 1 && (
        <div className="absolute contents left-[821px] top-[858px]" data-name="Arrow Buttons">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="absolute left-[821px] size-[37.779px] top-[858px] cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            data-name="Arrow Slider Left"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Arrow Slider Left">
                <circle cx="18.8893" cy="18.8893" fill="#FACE55" id="Ellipse 2" r="18.8893" />
                <g id="Solid/Interface/Arrow left">
                  <path d={svgPaths.p29279300} fill="#232323" id="Icon" />
                </g>
              </g>
            </svg>
          </button>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            className="absolute left-[884.22px] size-[37.779px] top-[858px] cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            data-name="Arrow Slider Right"
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
              <g id="Arrow Slider Right">
                <circle cx="18.8893" cy="18.8893" fill="#FACE55" id="Ellipse 2" r="18.8893" />
                <g id="Solid/Interface/Arrow left">
                  <path d={svgPaths.p12f85d00} fill="#232323" id="Icon" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
