import { Home } from './components/screens/Home';
import { Dashboard } from './components/screens/Dashboard';
import { TeacherDashboard } from './components/screens/TeacherDashboard';
import { AdminLogin } from './components/screens/AdminLogin';
import { OrganizationLogin } from './components/screens/OrganizationLogin';
import { OrganizationSetPassword } from './components/screens/OrganizationSetPassword';
import { OrganizationSize } from './components/screens/OrganizationSize';
import { OrganizationIndustry } from './components/screens/OrganizationIndustry';
import { OrganizationCongratulations } from './components/screens/OrganizationCongratulations';
import { OrganizationDashboardLanding } from './components/screens/OrganizationDashboardLanding';
import { OrganizationDashboard } from './components/screens/OrganizationDashboard';
import { OrganizationCourses } from './components/screens/OrganizationCourses';
import { OrganizationInstructors } from './components/screens/OrganizationInstructors';
import { OrganizationLearners } from './components/screens/OrganizationLearners';
import { AdminDashboard } from './components/screens/AdminDashboard';
import { Courses } from './components/screens/Courses';
import { CoursesPopulated } from './components/screens/CoursesPopulated';
import { CreateNewSubject } from './components/screens/CreateNewSubject';
import { EmptySubject } from './components/screens/EmptySubject';
import { TopicDetails } from './components/screens/TopicDetails';
import { UpdateSubject } from './components/screens/UpdateSubject';
import { CreateLessonDetails } from './components/screens/CreateLessonDetails';
import { LessonContent } from './components/screens/LessonContent';
import { QuizCreator } from './components/screens/QuizCreator';
import { QuizCreated } from './components/screens/QuizCreated';
import { InstitutesPage } from './components/screens/InstitutesPage';
import { InstituteDetails } from './components/screens/InstituteDetails';
import { ActivateSubjects } from './components/screens/ActivateSubjects';
import { TeamDetails } from './components/screens/TeamDetails';
import { AddMember } from './components/screens/AddMember';
import { AccountReady } from './components/screens/AccountReady';
import { CreateInstitute } from './components/screens/CreateInstitute';
import { AddInstitute } from './components/screens/AddInstitute';
import { AddStudents } from './components/screens/AddStudents';
import { Subject } from './components/screens/Subject';
import { SubjectWithLessons } from './components/screens/SubjectWithLessons';
import { Lesson } from './components/screens/Lesson';
import { Feedback } from './components/screens/Feedback';
import { AIMentor } from './components/screens/AIMentor';
import { LandingPage } from './components/screens/LandingPage';
import { Login } from './components/screens/Login';
import { HomeMobile } from './components/screens/mobile/HomeMobile';
import { DashboardMobile } from './components/screens/mobile/DashboardMobile';
import { TeacherDashboardMobile } from './components/screens/mobile/TeacherDashboardMobile';
import { CreateInstituteMobile } from './components/screens/mobile/CreateInstituteMobile';
import { AddStudentsMobile } from './components/screens/mobile/AddStudentsMobile';
import { SubjectMobile } from './components/screens/mobile/SubjectMobile';
import { LessonMobile } from './components/screens/mobile/LessonMobile';
import { FeedbackMobile } from './components/screens/mobile/FeedbackMobile';
import { AIMentorMobile } from './components/screens/mobile/AIMentorMobile';
import { LandingPageMobile } from './components/screens/mobile/LandingPageMobile';
import { LoginMobile } from './components/screens/mobile/LoginMobile';
import { OrganizationLoginMobile } from './components/screens/mobile/OrganizationLoginMobile';
import { OrganizationSetPasswordMobile } from './components/screens/mobile/OrganizationSetPasswordMobile';
import { OrganizationSizeMobile } from './components/screens/mobile/OrganizationSizeMobile';
import { OrganizationIndustryMobile } from './components/screens/mobile/OrganizationIndustryMobile';
import { OrganizationCongratulationsMobile } from './components/screens/mobile/OrganizationCongratulationsMobile';
import { OrganizationDashboardLandingMobile } from './components/screens/mobile/OrganizationDashboardLandingMobile';
import { OrganizationDashboardMobile } from './components/screens/mobile/OrganizationDashboardMobile';
import { OrganizationLearnersMobile } from './components/screens/mobile/OrganizationLearnersMobile';
import OrganizationAddLearnerMobile from './components/screens/mobile/OrganizationAddLearnerMobile';
import { OrganizationCoursesMobile } from './components/screens/mobile/OrganizationCoursesMobile';
import { OrganizationInstructorsMobile } from './components/screens/mobile/OrganizationInstructorsMobile';
import { AdminLoginMobile } from './components/screens/mobile/AdminLoginMobile';
import { AdminDashboardMobile } from './components/screens/mobile/AdminDashboardMobile';
import { InstitutesPageMobile } from './components/screens/mobile/InstitutesPageMobile';
import { AddInstituteMobile } from './components/screens/mobile/AddInstituteMobile';
import { TeamDetailsMobile } from './components/screens/mobile/TeamDetailsMobile';
import { CoursesMobile } from './components/screens/mobile/CoursesMobile';
import { CoursesPopulatedMobile } from './components/screens/mobile/CoursesPopulatedMobile';
import { CreateNewSubjectMobile } from './components/screens/mobile/CreateNewSubjectMobile';
import { EmptySubjectMobile } from './components/screens/mobile/EmptySubjectMobile';
import { SubjectWithLessonsMobile } from './components/screens/mobile/SubjectWithLessonsMobile';
import { InstituteDetailsMobile } from './components/screens/mobile/InstituteDetailsMobile';
import { ActivateSubjectsMobile } from './components/screens/mobile/ActivateSubjectsMobile';
import { TopicDetailsMobile } from './components/screens/mobile/TopicDetailsMobile';
import { UpdateSubjectMobile } from './components/screens/mobile/UpdateSubjectMobile';
import { CreateLessonDetailsMobile } from './components/screens/mobile/CreateLessonDetailsMobile';
import { LessonContentMobile } from './components/screens/mobile/LessonContentMobile';
import { QuizCreatorMobile } from './components/screens/mobile/QuizCreatorMobile';
import { QuizCreatedMobile } from './components/screens/mobile/QuizCreatedMobile';
import { useNavigation } from './hooks/useNavigation';
import { AppHeader } from './components/shared/AppHeader';
import { Toaster } from './components/ui/sonner';
import { useEffect, useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

// Set to true for Figma Make development, false for production
const SHOW_NAV_MENU = true;

export default function App() {
  const { currentScreen, navigationData, isMobile, userRole, userName, navigateTo, login, logout } = useNavigation();
  const [showNavMenu, setShowNavMenu] = useState(false);
  
  // URL-based routing
  useEffect(() => {
    const handleURLChange = () => {
      const hash = window.location.hash.slice(1); // Remove the '#'
      if (!hash) return;
      
      const [route, paramsString] = hash.split('?');
      const params = new URLSearchParams(paramsString);
      
      // Parse role and login if needed
      const urlRole = params.get('role') as 'student' | 'teacher' | 'admin' | 'gopeleAdmin' | null;
      const urlUserName = params.get('userName');
      
      if (urlRole && urlUserName && userRole !== urlRole) {
        login(urlRole, urlUserName);
      }
      
      // Parse navigation data
      const navData: any = {};
      params.forEach((value, key) => {
        if (key !== 'role' && key !== 'userName') {
          navData[key] = value;
        }
      });
      
      // Navigate to the route
      if (route && route !== currentScreen) {
        navigateTo(route as any, Object.keys(navData).length > 0 ? navData : undefined);
      }
    };
    
    // Handle initial load
    handleURLChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleURLChange);
    return () => window.removeEventListener('hashchange', handleURLChange);
  }, []); // Only run on mount
  
  // Update URL when navigation changes
  useEffect(() => {
    const params = new URLSearchParams();
    
    // Add role and userName if logged in
    if (userRole) {
      params.set('role', userRole);
      if (userName) params.set('userName', userName);
    }
    
    // Add navigation data
    if (navigationData) {
      Object.entries(navigationData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.set(key, String(value));
        }
      });
    }
    
    const paramString = params.toString();
    const newHash = paramString ? `#${currentScreen}?${paramString}` : `#${currentScreen}`;
    
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  }, [currentScreen, navigationData, userRole, userName]);
  
  // Navigation helper functions
  const quickNavigate = (screen: string, role?: string, roleUserName?: string, data?: any) => {
    setShowNavMenu(false);
    
    // If role is specified and different from current, login first with skipNavigation, then navigate
    if (role && roleUserName && role !== userRole) {
      login(role as any, roleUserName, true);
      // Use setTimeout to ensure state update completes
      setTimeout(() => {
        navigateTo(screen as any, data, role as any);
      }, 0);
    } else {
      navigateTo(screen as any, data);
    }
  };

  // Render appropriate screen based on viewport and current screen
  const renderScreen = () => {
    const screenKey = `${currentScreen}${isMobile ? '-mobile' : ''}`;
    
    switch (screenKey) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'landing-mobile':
        return <LandingPageMobile onNavigate={navigateTo} />;
      case 'login':
        return <Login onNavigate={navigateTo} onLogin={login} />;
      case 'login-mobile':
        return <LoginMobile onNavigate={navigateTo} onLogin={login} />;
      case 'adminLogin':
        return <AdminLogin onNavigate={navigateTo} onLogin={login} />;
      case 'adminLogin-mobile':
        return <AdminLoginMobile onNavigate={navigateTo} onLogin={login} />;
      case 'organizationLogin':
        return <OrganizationLogin onNavigate={navigateTo} onLogin={login} />;
      case 'organizationLogin-mobile':
        return <OrganizationLoginMobile onNavigate={navigateTo} onLogin={login} />;
      case 'organizationSetPassword':
        return <OrganizationSetPassword onNavigate={navigateTo} data={navigationData} />;
      case 'organizationSetPassword-mobile':
        return <OrganizationSetPasswordMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationSize':
        return <OrganizationSize onNavigate={navigateTo} data={navigationData} />;
      case 'organizationSize-mobile':
        return <OrganizationSizeMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationIndustry':
        return <OrganizationIndustry onNavigate={navigateTo} onLogin={login} data={navigationData} />;
      case 'organizationIndustry-mobile':
        return <OrganizationIndustryMobile onNavigate={navigateTo} onLogin={login} data={navigationData} />;
      case 'organizationCongratulations':
        return <OrganizationCongratulations onNavigate={navigateTo} data={navigationData} />;
      case 'organizationCongratulations-mobile':
        return <OrganizationCongratulationsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationDashboardLanding':
        return <OrganizationDashboardLanding onNavigate={navigateTo} data={navigationData} />;
      case 'organizationDashboardLanding-mobile':
        return <OrganizationDashboardLandingMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationDashboard':
        return <OrganizationDashboard onNavigate={navigateTo} data={navigationData} />;
      case 'organizationDashboard-mobile':
        return <OrganizationDashboardMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationCourses':
        return <OrganizationCourses onNavigate={navigateTo} data={navigationData} />;
      case 'organizationCourses-mobile':
        return <OrganizationCoursesMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationInstructors':
        return <OrganizationInstructors onNavigate={navigateTo} data={navigationData} />;
      case 'organizationInstructors-mobile':
        return <OrganizationInstructorsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationLearners':
        return <OrganizationLearners key={navigationData.hasLearners ? 'with-data' : 'empty'} onNavigate={navigateTo} data={navigationData} />;
      case 'organizationLearners-mobile':
        return <OrganizationLearnersMobile onNavigate={navigateTo} data={navigationData} />;
      case 'organizationAddLearner':
        return <OrganizationAddLearnerMobile onNavigate={navigateTo} onClose={() => navigateTo('organizationLearners')} />;
      case 'organizationAddLearner-mobile':
        return <OrganizationAddLearnerMobile onNavigate={navigateTo} onClose={() => navigateTo('organizationLearners')} />;
      case 'adminDashboard':
        return <AdminDashboard onNavigate={navigateTo} />;
      case 'adminDashboard-mobile':
        return <AdminDashboardMobile onNavigate={navigateTo} />;
      case 'courses':
        return <Courses onNavigate={navigateTo} />;
      case 'courses-mobile':
        return <CoursesMobile onNavigate={navigateTo} />;
      case 'coursesPopulated':
        return <CoursesPopulated onNavigate={navigateTo} />;
      case 'coursesPopulated-mobile':
        return <CoursesPopulatedMobile onNavigate={navigateTo} />;
      case 'createNewSubject':
        return <CreateNewSubject onNavigate={navigateTo} />;
      case 'createNewSubject-mobile':
        return <CreateNewSubjectMobile onNavigate={navigateTo} />;
      case 'emptySubject':
        return <EmptySubject onNavigate={navigateTo} data={navigationData} />;
      case 'emptySubject-mobile':
        return <EmptySubjectMobile onNavigate={navigateTo} data={navigationData} />;
      case 'topicDetails':
        return <TopicDetails onNavigate={navigateTo} data={navigationData} />;
      case 'topicDetails-mobile':
        return <TopicDetailsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'updateSubject':
        return <UpdateSubject onNavigate={navigateTo} data={navigationData} />;
      case 'updateSubject-mobile':
        return <UpdateSubjectMobile onNavigate={navigateTo} data={navigationData} />;
      case 'createLessonDetails':
        return <CreateLessonDetails onNavigate={navigateTo} data={navigationData} />;
      case 'createLessonDetails-mobile':
        return <CreateLessonDetailsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'lessonContent':
        return <LessonContent onNavigate={navigateTo} data={navigationData} />;
      case 'lessonContent-mobile':
        return <LessonContentMobile onNavigate={navigateTo} data={navigationData} />;
      case 'quizCreator':
        return <QuizCreator onNavigate={navigateTo} data={navigationData} />;
      case 'quizCreator-mobile':
        return <QuizCreatorMobile onNavigate={navigateTo} data={navigationData} />;
      case 'quizCreated':
        return <QuizCreated onNavigate={navigateTo} data={navigationData} />;
      case 'quizCreated-mobile':
        return <QuizCreatedMobile onNavigate={navigateTo} data={navigationData} />;
      case 'institutesPage':
        return <InstitutesPage onNavigate={navigateTo} />;
      case 'institutesPage-mobile':
        return <InstitutesPageMobile onNavigate={navigateTo} />;
      case 'instituteDetails':
        return <InstituteDetails onNavigate={navigateTo} data={navigationData} />;
      case 'instituteDetails-mobile':
        return <InstituteDetailsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'activateSubjects':
        return <ActivateSubjects onNavigate={navigateTo} data={navigationData} />;
      case 'activateSubjects-mobile':
        return <ActivateSubjectsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'teamDetails':
        return <TeamDetails onNavigate={navigateTo} />;
      case 'teamDetails-mobile':
        return <TeamDetailsMobile onNavigate={navigateTo} />;
      case 'addMember':
        return <AddMember onNavigate={navigateTo} onClose={() => navigateTo('teamDetails')} />;
      case 'accountReady':
        return <AccountReady onNavigate={navigateTo} data={navigationData} />;
      case 'addInstitute':
        return <AddInstitute onNavigate={navigateTo} />;
      case 'addInstitute-mobile':
        return <AddInstituteMobile onNavigate={navigateTo} />;
      case 'home':
        return <Home onNavigate={navigateTo} />;
      case 'home-mobile':
        return <HomeMobile onNavigate={navigateTo} />;
      case 'dashboard':
        return <Dashboard onNavigate={navigateTo} />;
      case 'dashboard-mobile':
        return <DashboardMobile onNavigate={navigateTo} />;
      case 'teacherDashboard':
        return <TeacherDashboard onNavigate={navigateTo} />;
      case 'teacherDashboard-mobile':
        return <TeacherDashboardMobile onNavigate={navigateTo} />;
      case 'createInstitute':
        return <CreateInstitute onNavigate={navigateTo} />;
      case 'createInstitute-mobile':
        return <CreateInstituteMobile onNavigate={navigateTo} />;
      case 'addStudents':
        return <AddStudents onNavigate={navigateTo} data={navigationData} />;
      case 'addStudents-mobile':
        return <AddStudentsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'subject':
        return <Subject onNavigate={navigateTo} data={navigationData} />;
      case 'subject-mobile':
        return <SubjectMobile onNavigate={navigateTo} data={navigationData} />;
      case 'subjectWithLessons':
        return <SubjectWithLessons onNavigate={navigateTo} data={navigationData} />;
      case 'subjectWithLessons-mobile':
        return <SubjectWithLessonsMobile onNavigate={navigateTo} data={navigationData} />;
      case 'lesson':
        return <Lesson onNavigate={navigateTo} data={navigationData} />;
      case 'lesson-mobile':
        return <LessonMobile onNavigate={navigateTo} data={navigationData} />;
      case 'feedback':
        return <Feedback onNavigate={navigateTo} data={navigationData} />;
      case 'feedback-mobile':
        return <FeedbackMobile onNavigate={navigateTo} data={navigationData} />;
      case 'aiMentor':
        return <AIMentor onNavigate={navigateTo} data={navigationData} />;
      case 'aiMentor-mobile':
        return <AIMentorMobile onNavigate={navigateTo} data={navigationData} />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="size-full overflow-auto bg-gray-100">
      {/* App Header - Role-based navigation */}
      <AppHeader 
        userRole={userRole}
        userName={userName}
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        onLogout={logout}
      />

      {/* Figma Make Navigation Menu - Toggle Button */}
      {SHOW_NAV_MENU && (
        <>
          <button
            onClick={() => setShowNavMenu(!showNavMenu)}
            className="fixed bottom-6 right-6 z-50 bg-[#1f60d8] hover:bg-[#1850b8] text-white size-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
            aria-label="Toggle Navigation Menu"
          >
            {showNavMenu ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          {/* Navigation Menu Overlay */}
          {showNavMenu && (
            <>
              <div 
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setShowNavMenu(false)}
              />
              <div className="fixed right-6 bottom-24 z-50 bg-white rounded-lg shadow-2xl w-80 max-h-[70vh] overflow-hidden flex flex-col">
                <div className="bg-[#1f60d8] text-white p-4">
                  <h3 className="font-['Poppins:SemiBold',_sans-serif] text-[16px]">Quick Navigation</h3>
                  <p className="text-[11px] opacity-90 mt-1">Current: {currentScreen} {isMobile && '(Mobile)'}</p>
                  {userRole && <p className="text-[11px] opacity-90">Role: {userRole}</p>}
                </div>
                
                <div className="overflow-y-auto p-3 space-y-2">
                  {/* Landing & Auth */}
                  <div className="pb-2 border-b">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wide">Landing & Auth</p>
                    <button onClick={() => quickNavigate('landing')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-gray-100 flex items-center justify-between">
                      Landing Page <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('login')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-gray-100 flex items-center justify-between">
                      Student Login <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('organizationLogin')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-gray-100 flex items-center justify-between">
                      Organization Login <ChevronRight className="size-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Student Screens */}
                  <div className="pb-2 border-b">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wide">Student</p>
                    <button onClick={() => quickNavigate('home', 'student', 'John Doe')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-blue-50 flex items-center justify-between">
                      Home <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('dashboard', 'student', 'John Doe')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-blue-50 flex items-center justify-between">
                      Dashboard <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('subject', 'student', 'John Doe', { subjectName: 'Space' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-blue-50 flex items-center justify-between">
                      Subject (Space) <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('lesson', 'student', 'John Doe', { subjectName: 'Space', lessonName: 'What is Space', lessonNumber: 1 })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-blue-50 flex items-center justify-between">
                      Lesson 1 <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('aiMentor', 'student', 'John Doe')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-blue-50 flex items-center justify-between">
                      AI Mentor <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('feedback', 'student', 'John Doe')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-blue-50 flex items-center justify-between">
                      Feedback <ChevronRight className="size-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Teacher Screens */}
                  <div className="pb-2 border-b">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wide">Teacher</p>
                    <button onClick={() => quickNavigate('teacherDashboard', 'teacher', 'Ms. Smith')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-purple-50 flex items-center justify-between">
                      Dashboard <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('createInstitute', 'teacher', 'Ms. Smith')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-purple-50 flex items-center justify-between">
                      Create Institute <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('addStudents', 'teacher', 'Ms. Smith', { instituteName: 'Demo School', instituteCode: 'INST-DEMO' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-purple-50 flex items-center justify-between">
                      Add Students <ChevronRight className="size-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Organization */}
                  <div className="pb-2 border-b">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wide">Organization</p>
                    <button onClick={() => quickNavigate('organizationSetPassword', undefined, undefined, { organizationName: 'Seev' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-red-50 flex items-center justify-between">
                      Set Password <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('organizationSize', undefined, undefined, { organizationName: 'Seev' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-red-50 flex items-center justify-between">
                      Org Size <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('organizationDashboard', 'admin', 'Seev Admin', { organizationName: 'Seev' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-red-50 flex items-center justify-between">
                      Dashboard <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('organizationLearners', 'admin', 'Seev Admin', { organizationName: 'Seev', hasLearners: true })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-red-50 flex items-center justify-between">
                      Learners <ChevronRight className="size-4 text-gray-400" />
                    </button>
                  </div>

                  {/* School Admin */}
                  <div className="pb-2 border-b">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wide">School Admin</p>
                    <button onClick={() => quickNavigate('adminDashboard', 'admin', 'Administrator')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-yellow-50 flex items-center justify-between">
                      Dashboard <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('institutesPage', 'admin', 'Administrator')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-yellow-50 flex items-center justify-between">
                      Institutions <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('teamDetails', 'admin', 'Administrator')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-yellow-50 flex items-center justify-between">
                      Team <ChevronRight className="size-4 text-gray-400" />
                    </button>
                  </div>

                  {/* Gopele Admin */}
                  <div className="pb-2">
                    <p className="text-[10px] text-gray-500 mb-2 font-semibold uppercase tracking-wide">Gopele Admin</p>
                    <button onClick={() => quickNavigate('coursesPopulated', 'gopeleAdmin', 'Master Admin')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-green-50 flex items-center justify-between">
                      Courses <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('createNewSubject', 'gopeleAdmin', 'Master Admin')} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-green-50 flex items-center justify-between">
                      Create Subject <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('subjectWithLessons', 'gopeleAdmin', 'Master Admin', { subjectName: 'Science', topicName: 'Molecular Biology' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-green-50 flex items-center justify-between">
                      Subject Details <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('lessonContent', 'gopeleAdmin', 'Master Admin', { subjectName: 'Science', topicName: 'Biology', chapterName: 'Intro', lessonTitle: 'What is Space' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-green-50 flex items-center justify-between">
                      Content Editor <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    <button onClick={() => quickNavigate('quizCreator', 'gopeleAdmin', 'Master Admin', { subjectName: 'Science', topicName: 'Biology', chapterName: 'Intro', lessonTitle: 'What is Space' })} className="w-full text-left px-3 py-2 text-[13px] rounded hover:bg-green-50 flex items-center justify-between">
                      Quiz Creator <ChevronRight className="size-4 text-gray-400" />
                    </button>
                  </div>

                  {userRole && (
                    <div className="pt-2 border-t">
                      <button 
                        onClick={() => { logout(); setShowNavMenu(false); }}
                        className="w-full text-left px-3 py-2 text-[13px] rounded bg-red-50 hover:bg-red-100 text-red-600"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* Debug Navigation Panel - Disabled for production */}
      {false && (
        <div 
          ref={debugPanelRef}
          className="fixed z-50 bg-white shadow-lg rounded-lg max-w-xs select-none"
          style={{
            left: `${debugPosition.x}px`,
            top: `${debugPosition.y}px`,
            maxHeight: '500px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div 
            className="flex items-center justify-between p-4 pb-2"
            onMouseDown={handleMouseDown}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <h3 className="font-semibold text-sm">Debug Panel</h3>
            <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">DEV</span>
          </div>
          <div className="px-4 pb-2">
            <p className="text-xs text-gray-600 mb-2">
              {currentScreen} ({isMobile ? 'Mobile' : 'Desktop'})
            </p>
            <p className="text-xs text-gray-600 mb-2">
              Role: {userRole || 'Guest'}
            </p>
            {navigationData.subjectName && (
              <p className="text-xs text-gray-600 mb-2">
                Subject: {navigationData.subjectName}
              </p>
            )}
            {navigationData.lessonName && (
              <p className="text-xs text-gray-600 mb-2">
                Lesson {navigationData.lessonNumber || '?'}: {navigationData.lessonName}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 px-4 pb-4 overflow-y-auto" style={{ flex: 1, minHeight: 0 }}>
            <div className="flex flex-col gap-1 pt-3 border-t">
            <button
              onClick={() => navigateTo('landing')}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Landing Page
            </button>
            <button
              onClick={() => navigateTo('login')}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Login (Student)
            </button>
            <button
              onClick={() => navigateTo('organizationLogin')}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Organization Login
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin' && userRole !== null) {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationSetPassword', { organizationName: 'Seev' }, userRole === null ? null : 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Set Password (Org)
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin' && userRole !== null) {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationSize', { organizationName: 'Seev' }, userRole === null ? null : 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Organization Size
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin' && userRole !== null) {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationIndustry', { organizationName: 'Seev', organizationSize: '11-30' }, userRole === null ? null : 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Organization Industry
            </button>
            <button
              onClick={() => {
                login('admin', 'Seev Admin', true);
                navigateTo('organizationCongratulations', { organizationName: 'Seev', organizationSize: '11-30', organizationIndustry: 'Education' }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left"
            >
              Organization Success
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin') {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationDashboardLanding', { organizationName: 'Seev' }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
            >
              Org Dashboard (Setup)
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin') {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationDashboard', { organizationName: 'Seev' }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
            >
              Org Dashboard (Data)
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin') {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationCourses', { organizationName: 'Seev' }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
            >
              Org Courses
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin') {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationInstructors', { organizationName: 'Seev' }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
            >
              Org Instructors
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin') {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationLearners', { organizationName: 'Seev' }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
            >
              Org Learners (Empty)
            </button>
            <button
              onClick={() => {
                if (userRole !== 'admin') {
                  login('admin', 'Seev Admin', true);
                }
                navigateTo('organizationLearners', { organizationName: 'Seev', hasLearners: true }, 'admin');
              }}
              className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
            >
              Org Learners (With Data)
            </button>
            <div className="pt-2 border-t">
              <p className="text-[10px] text-gray-500 mb-1">Student Screens:</p>
              <button
                onClick={() => login('student', 'John Doe')}
                className="px-3 py-1 text-xs rounded bg-blue-50 hover:bg-blue-100 text-left w-full mb-1"
              >
                Login as Student
              </button>
              <button
                onClick={() => {
                  if (userRole === 'student') {
                    navigateTo('home');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'student'}
              >
                Home
              </button>
              <button
                onClick={() => {
                  if (userRole === 'student') {
                    navigateTo('dashboard');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'student'}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  if (userRole === 'student') {
                    navigateTo('aiMentor');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'student'}
              >
                AI Mentor
              </button>
              <button
                onClick={() => {
                  if (userRole === 'student') {
                    navigateTo('subject', { subjectName: 'Space' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-gray-100 hover:bg-gray-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'student'}
              >
                Learn (Space)
              </button>
            </div>
            <div className="pt-2 border-t">
              <p className="text-[10px] text-gray-500 mb-1">Teacher Screens:</p>
              <button
                onClick={() => login('teacher', 'Ms. Smith')}
                className="px-3 py-1 text-xs rounded bg-purple-50 hover:bg-purple-100 text-left w-full mb-1"
              >
                Login as Teacher
              </button>
              <button
                onClick={() => {
                  if (userRole === 'teacher') {
                    navigateTo('teacherDashboard');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-purple-100 hover:bg-purple-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'teacher'}
              >
                Teacher Dashboard
              </button>
              <button
                onClick={() => {
                  if (userRole === 'teacher') {
                    navigateTo('createInstitute');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-purple-100 hover:bg-purple-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'teacher'}
              >
                Create Institute
              </button>
              <button
                onClick={() => {
                  if (userRole === 'teacher') {
                    navigateTo('addStudents', { instituteName: 'Demo School', instituteCode: 'INST-DEMO' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-purple-100 hover:bg-purple-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'teacher'}
              >
                Add Students (Success)
              </button>
            </div>
            <div className="pt-2 border-t">
              <p className="text-[10px] text-gray-500 mb-1">Admin Screens:</p>
              <button
                onClick={() => login('admin', 'Administrator')}
                className="px-3 py-1 text-xs rounded bg-yellow-50 hover:bg-yellow-100 text-left w-full mb-1"
              >
                Login as Admin
              </button>
              <button
                onClick={() => navigateTo('adminLogin')}
                className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left"
              >
                Admin Login Screen
              </button>
              <button
                onClick={() => {
                  if (userRole === 'admin') {
                    navigateTo('adminDashboard');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'admin'}
              >
                Admin Dashboard (Analytics)
              </button>
              <button
                onClick={() => {
                  if (userRole === 'admin') {
                    navigateTo('institutesPage');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'admin'}
              >
                Your Institutions
              </button>
              <button
                onClick={() => {
                  if (userRole === 'admin') {
                    navigateTo('addInstitute');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'admin'}
              >
                Add Institute
              </button>
              <button
                onClick={() => {
                  if (userRole === 'admin') {
                    navigateTo('teamDetails');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-yellow-100 hover:bg-yellow-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'admin'}
              >
                Team Management
              </button>
            </div>
            <div className="pt-2 border-t">
              <p className="text-[10px] text-gray-500 mb-1">Gopele Admin Screens:</p>
              <button
                onClick={() => login('gopeleAdmin', 'Master Admin')}
                className="px-3 py-1 text-xs rounded bg-green-50 hover:bg-green-100 text-left w-full mb-1"
              >
                Login as Gopele Admin
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('courses');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Courses Dashboard (Empty)
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('coursesPopulated');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Courses Populated
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('createNewSubject');
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Create New Subject
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('emptySubject', { subjectName: 'Science', subjectDescription: 'Test subject description' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Empty Subject (Science)
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('subjectWithLessons', { subjectName: 'Science', subjectDescription: 'In this lesson, you\'ll solve delightful geometry puzzles and build a solid foundation of skills for problem-solving with angles, triangles, and polygons.', topicName: 'Molecular Biology' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Subject With Lessons
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('topicDetails', { subjectName: 'Science', topicName: 'Molecular Biology' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Topic Details (Empty)
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('updateSubject', { subjectName: 'Science', topicName: 'Molecular Biology' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Update Subject
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('createLessonDetails', { subjectName: 'Science', topicName: 'Molecular Biology', chapterName: 'Introduction to Space' });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Create Lesson Details
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('lessonContent', { subjectName: 'Science', topicName: 'Molecular Biology', chapterName: 'Introduction to Space', lessonTitle: 'What is Space?', pageNumber: 1 });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Lesson Content Editor
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('quizCreator', { subjectName: 'Science', topicName: 'Molecular Biology', chapterName: 'Introduction to Space', lessonTitle: 'What is Space?', pageNumber: 1 });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Quiz Creator
              </button>
              <button
                onClick={() => {
                  if (userRole === 'gopeleAdmin') {
                    navigateTo('quizCreated', { subjectName: 'Science', topicName: 'Molecular Biology', chapterName: 'Introduction to Space', lessonTitle: 'What is Space?', pageNumber: 1 });
                  }
                }}
                className="px-3 py-1 text-xs rounded bg-green-100 hover:bg-green-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={userRole !== 'gopeleAdmin'}
              >
                Quiz Created (Success)
              </button>
            </div>
              {userRole && (
                <button
                  onClick={logout}
                  className="px-3 py-1 text-xs rounded bg-red-100 hover:bg-red-200 text-left mt-2"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Current Screen */}
      <div className="flex items-start justify-center min-h-screen p-8">
        {renderScreen()}
      </div>
      
      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
