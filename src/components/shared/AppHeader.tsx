import { UserRole, Screen } from '../../hooks/useNavigation';
import { LogOut, Home, LayoutDashboard, BookOpen, MessageSquare, GraduationCap, Building2, BarChart3, Users } from 'lucide-react';

type AppHeaderProps = {
  userRole: UserRole;
  userName: string;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onLogout: () => void;
};

export function AppHeader({ userRole, userName, currentScreen, onNavigate, onLogout }: AppHeaderProps) {
  // Don't show header on landing, login pages, or screens with their own navigation
  if (!userRole || currentScreen === 'landing' || currentScreen === 'login' || currentScreen === 'adminLogin') {
    return null;
  }
  
  // Hide header on admin dashboard and gopele admin screens that have their own navigation
  if (currentScreen === 'adminDashboard' || 
      (userRole === 'gopeleAdmin' && [
        'courses', 'coursesPopulated', 'createNewSubject', 'emptySubject', 
        'subjectWithLessons', 'topicDetails', 'updateSubject', 'createLessonDetails',
        'lessonContent', 'quizCreator', 'quizCreated', 'institutesPage'
      ].includes(currentScreen))) {
    return null;
  }

  // Student navigation items
  const studentNavItems = [
    { screen: 'home' as Screen, label: 'Home', icon: Home },
    { screen: 'dashboard' as Screen, label: 'Dashboard', icon: LayoutDashboard },
    { screen: 'aiMentor' as Screen, label: 'AI Mentor', icon: MessageSquare },
  ];

  // Teacher navigation items
  const teacherNavItems = [
    { screen: 'teacherDashboard' as Screen, label: 'Dashboard', icon: GraduationCap },
    { screen: 'createInstitute' as Screen, label: 'Create Institute', icon: Building2 },
  ];

  // Admin navigation items
  const adminNavItems = [
    { screen: 'adminDashboard' as Screen, label: 'Analytics', icon: BarChart3 },
    { screen: 'institutesPage' as Screen, label: 'Your Institutions', icon: Building2 },
    { screen: 'addInstitute' as Screen, label: 'Add Institute', icon: Building2 },
  ];

  // Gopele Admin navigation items
  const gopeleAdminNavItems = [
    { screen: 'courses' as Screen, label: 'Courses', icon: BookOpen },
    { screen: 'institutesPage' as Screen, label: 'Institutes', icon: Building2 },
  ];

  const navItems = 
    userRole === 'student' ? studentNavItems :
    userRole === 'admin' ? adminNavItems :
    userRole === 'gopeleAdmin' ? gopeleAdminNavItems :
    teacherNavItems;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
                <path d="M27.134 0C12.156 0 0 12.156 0 27.134c0 14.978 12.156 27.18 27.134 27.18 14.978 0 27.134-12.202 27.134-27.18C54.268 12.156 42.112 0 27.134 0z" fill="#1F60D8" />
              </svg>
              <div className="absolute inset-[30.09%_8.31%_32.43%_7.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 46">
                  <rect fill="#1F60D8" height="32.8124" width="34.9312" x="6.83105" y="6.27734" />
                  <path d="M20.8672 38.0898C26.1875 38.0898 30.6055 36.6523 34.1211 33.7773C37.6367 30.8633 39.3945 27.2695 39.3945 23.0039C39.3945 18.7383 37.6367 15.1641 34.1211 12.2891C30.6055 9.37402 26.1875 7.91992 20.8672 7.91992C15.5469 7.91992 11.1289 9.37402 7.61328 12.2891C4.09766 15.1641 2.33984 18.7383 2.33984 23.0039C2.33984 27.2695 4.09766 30.8633 7.61328 33.7773C11.1289 36.6523 15.5469 38.0898 20.8672 38.0898ZM20.8672 34.5938C16.7188 34.5938 13.2617 33.4688 10.5 31.2188C7.73828 28.9688 6.35742 26.2773 6.35742 23.1523C6.35742 20.0273 7.73828 17.3555 10.5 15.1445C13.2617 12.8945 16.7188 11.7695 20.8672 11.7695C25.0156 11.7695 28.4727 12.8945 31.2344 15.1445C33.9961 17.3555 35.377 20.0273 35.377 23.1523C35.377 26.2773 33.9961 28.9688 31.2344 31.2188C28.4727 33.4688 25.0156 34.5938 20.8672 34.5938Z" fill="white" />
                </svg>
              </div>
            </div>
            <span className="font-['Poppins',_sans-serif] text-[24px] text-[#232323]">
              Gopele
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.screen;
              
              return (
                <button
                  key={item.screen}
                  onClick={() => onNavigate(item.screen)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#1f60d8] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline text-[14px]">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Info & Logout */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[14px] text-gray-900">{userName || 'User'}</span>
              <span className="text-[12px] text-gray-500 capitalize">{userRole}</span>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline text-[14px]">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
