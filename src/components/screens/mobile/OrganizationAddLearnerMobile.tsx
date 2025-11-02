import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import svgPaths from '../../../imports/svg-rm3h8ylet9';

interface OrganizationAddLearnerMobileProps {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  onClose: () => void;
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[38px] w-[38px] relative">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
          <g id="Frame 2">
            <path d={svgPaths.pcde7b00} fill="var(--fill-0, #1F60D8)" id="Vector" />
          </g>
        </svg>
        <div className="absolute inset-[11.05%_27.7%_11.05%_21.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 33">
            <g id="Group 12">
              <g id="svgg">
                <path clipRule="evenodd" d={svgPaths.p3af46480} fill="var(--fill-0, white)" fillRule="evenodd" id="path0" />
              </g>
              <rect fill="var(--fill-0, #1F60D8)" height="22.9377" id="Rectangle 1" width="24.4307" x="4.77496" y="4.39174" />
              <path d={svgPaths.p16456600} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Bold',_sans-serif] leading-[17px] not-italic text-[#232323] text-[18px]">Gopele</p>
    </div>
  );
}

export default function OrganizationAddLearnerMobile({ onNavigate, onClose }: OrganizationAddLearnerMobileProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  const handleAddLearner = () => {
    if (!firstName || !lastName || !email || !course) {
      toast.error('Please fill in all fields');
      return;
    }

    toast.success('Learner added successfully!');
    onClose();
    onNavigate('organizationLearners', { hasLearners: true });
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <Logo />
        <button onClick={onClose} className="p-2">
          <X size={24} color="#232323" />
        </button>
      </div>
      
      {/* Content */}
      <div className="px-6 py-6">
        <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] justify-center leading-[0] not-italic text-[24px] text-black mb-6">
          <p className="leading-[32px]">Add a Learner</p>
        </div>
        
        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[24px] not-italic text-[#1b1616] text-[14px] mb-2">First Name</p>
              <div className="bg-white h-[48px] rounded-[8px] w-full relative">
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="font-['Poppins:Regular',_sans-serif] h-full leading-[22px] px-4 not-italic text-[#0b0c0c] placeholder:text-[#c6d5de] text-[14px] w-full bg-transparent border-none outline-none"
                />
              </div>
            </div>
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[24px] not-italic text-[#1b1616] text-[14px] mb-2">Last Name</p>
              <div className="bg-white h-[48px] rounded-[8px] w-full relative">
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="font-['Poppins:Regular',_sans-serif] h-full leading-[22px] px-4 not-italic text-[#0b0c0c] placeholder:text-[#c6d5de] text-[14px] w-full bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>
          
          {/* Email */}
          <div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[24px] not-italic text-[#1b1616] text-[14px] mb-2">Email</p>
            <div className="bg-white h-[48px] rounded-[8px] w-full relative">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@example.com"
                className="font-['Poppins:Regular',_sans-serif] h-full leading-[22px] px-4 not-italic text-[#0b0c0c] placeholder:text-[#c6d5de] text-[14px] w-full bg-transparent border-none outline-none"
              />
            </div>
          </div>
          
          {/* Course Selection */}
          <div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[24px] not-italic text-[#1b1616] text-[14px] mb-2">Select Course</p>
            <div className="bg-white h-[48px] rounded-[8px] w-full relative">
              <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="font-['Poppins:Regular',_sans-serif] h-full leading-[22px] px-4 not-italic text-[#0b0c0c] text-[14px] w-full bg-transparent border-none outline-none appearance-none"
              >
                <option value="">Choose a course</option>
                <option value="Public Speaking">Public Speaking</option>
                <option value="Practical Leadership">Practical Leadership</option>
                <option value="How to Learn">How to Learn</option>
                <option value="Time Management">Time Management</option>
                <option value="Creative Writing">Creative Writing</option>
                <option value="Deep Learning">Deep Learning</option>
                <option value="Business Foundations">Business Foundations</option>
                <option value="IELTS Preparation">IELTS Preparation</option>
                <option value="Introduction to Law">Introduction to Law</option>
              </select>
            </div>
          </div>
          
          {/* Invite Message */}
          <div className="bg-[#f6f8fa] rounded-[8px] p-4 mt-2">
            <p className="font-['Poppins:Regular',_sans-serif] leading-[20px] not-italic text-[#666666] text-[12px]">
              An invitation email will be sent to the learner with login instructions and course details.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-white border border-gray-300 text-[#232323] px-4 py-3 rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[14px] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddLearner}
              className="flex-1 bg-[#1f60d8] text-white px-4 py-3 rounded-[8px] font-['Poppins:SemiBold',_sans-serif] text-[14px] hover:bg-[#1850b8] transition-colors"
            >
              Add Learner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
