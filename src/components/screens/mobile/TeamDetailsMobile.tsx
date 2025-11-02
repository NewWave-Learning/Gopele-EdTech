import { useState } from 'react';
import { toast } from 'sonner@2.0.3';
import { Screen } from '../../../hooks/useNavigation';
import svgPaths from "../../../imports/svg-j2qlpwx0s8";
import imgLessonsCover from "figma:asset/e9c4b719c5368c2efb97d7a953d338d9807610b5.png";
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Menu, Trash2, UserPlus, ChevronDown } from 'lucide-react';

type TeamDetailsMobileProps = {
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

export function TeamDetailsMobile({ onNavigate }: TeamDetailsMobileProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(MOCK_TEAM_MEMBERS);

  const handleRemoveMember = (id: number) => {
    const member = teamMembers.find(m => m.id === id);
    setTeamMembers(prev => prev.filter(m => m.id !== id));
    toast.success(`${member?.name} has been removed from the team`);
  };

  const handleRoleChange = (id: number, newRole: TeamMember['role']) => {
    setTeamMembers(prev => prev.map(m => m.id === id ? { ...m, role: newRole } : m));
    toast.success('Role updated successfully');
  };

  const handleAddMember = () => {
    onNavigate('addMember');
  };

  return (
    <div className="bg-white relative w-[375px] min-h-screen pb-8" data-name="Team Details Mobile">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] h-[60px] w-full flex items-center justify-between px-4">
        <button 
          onClick={() => onNavigate('instituteDetails')}
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
        <h1 className="font-['Poppins:SemiBold',_sans-serif] text-[18px] text-black">Team Members</h1>
        <button className="p-2">
          <Menu className="size-6 text-[#232323]" />
        </button>
      </div>

      {/* Add Member Button */}
      <div className="px-4 pt-4 pb-2">
        <button
          onClick={handleAddMember}
          className="w-full bg-[#f4d35e] h-[48px] rounded-[8px] flex items-center justify-center gap-2 hover:bg-[#face55] transition-colors"
        >
          <UserPlus className="size-5 text-[#232323]" />
          <p className="font-['Poppins:SemiBold',_sans-serif] text-[16px] text-[#232323]">Add Member</p>
        </button>
      </div>

      {/* Team Members List */}
      <div className="px-4 pt-2 space-y-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="rounded-[8px] border border-[#9b9b9b] p-4"
          >
            {/* Member Header */}
            <div className="flex gap-3 mb-3">
              {/* Profile Image */}
              <div className="rounded-full size-[50px] shrink-0 overflow-hidden border-2 border-[#face55]">
                <ImageWithFallback
                  alt={member.name}
                  className="w-full h-full object-cover"
                  src={member.profileImage}
                />
              </div>

              {/* Member Info */}
              <div className="flex-1 min-w-0">
                <p className="font-['Poppins:Medium',_sans-serif] text-[16px] text-[#232323] leading-[24px] truncate">
                  {member.name}
                </p>
                <p className="font-['Poppins:Bold',_sans-serif] text-[10px] text-[#1f60d8] leading-[16px] tracking-[1.5px] uppercase truncate">
                  {member.instituteName}
                </p>
              </div>
            </div>

            {/* Role Selector */}
            <div className="mb-3">
              <label className="font-['Poppins:Medium',_sans-serif] text-[12px] text-[#9b9b9b] block mb-1">
                Membership:
              </label>
              <div className="relative">
                <select
                  value={member.role}
                  onChange={(e) => handleRoleChange(member.id, e.target.value as TeamMember['role'])}
                  className="w-full px-3 py-2 border border-[#cccccc] rounded-[8px] font-['Inter:Medium',_sans-serif] text-[14px] text-[#333333] bg-white appearance-none cursor-pointer outline-none focus:border-[#1f60d8] transition-colors"
                >
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                  <option value="Coordinator">Coordinator</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#333333] pointer-events-none" />
              </div>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemoveMember(member.id)}
              className="w-full bg-[#eb5757] h-[40px] rounded-[6px] flex items-center justify-center gap-2 hover:bg-[#d94545] transition-colors"
            >
              <Trash2 className="size-5 text-white" />
              <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px] text-white">Remove Member</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
