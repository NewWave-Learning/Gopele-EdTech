import { useState, useEffect } from 'react';

export type UserRole = 'student' | 'teacher' | 'admin' | 'gopeleAdmin' | null;

export type Screen = 
  | 'landing'
  | 'login'
  | 'adminLogin'
  | 'organizationLogin'
  | 'organizationSetPassword'
  | 'organizationSize'
  | 'organizationIndustry'
  | 'organizationCongratulations'
  | 'organizationDashboardLanding'
  | 'organizationDashboard'
  | 'organizationCourses'
  | 'organizationInstructors'
  | 'organizationLearners'
  | 'organizationAddLearner'
  | 'home'
  | 'dashboard'
  | 'teacherDashboard'
  | 'adminDashboard'
  | 'courses'
  | 'coursesPopulated'
  | 'createNewSubject'
  | 'emptySubject'
  | 'subjectWithLessons'
  | 'topicDetails'
  | 'updateSubject'
  | 'createLessonDetails'
  | 'lessonContent'
  | 'quizCreator'
  | 'quizCreated'
  | 'institutesPage'
  | 'instituteDetails'
  | 'activateSubjects'
  | 'teamDetails'
  | 'addMember'
  | 'accountReady'
  | 'createInstitute'
  | 'addInstitute'
  | 'addStudents'
  | 'subject'
  | 'lessonIntro'
  | 'lesson'
  | 'feedback'
  | 'aiMentor';

export type NavigationData = {
  subjectId?: string;
  subjectName?: string;
  subjectDescription?: string;
  lessonId?: string;
  lessonName?: string;
  lessonNumber?: number; // 1-8 for Space course lessons
  totalLessons?: number; // Total lessons in the course (default 8)
  instituteName?: string; // For institute creation flow
  instituteCode?: string; // For institute creation flow
  organizationName?: string; // For organization onboarding flow
  organizationSize?: string; // For organization onboarding flow
  organizationIndustry?: string; // For organization onboarding flow
  hasLearners?: boolean; // For organization learners screen state
  topicName?: string; // For gopele admin content creation
  chapterName?: string; // For gopele admin content creation
  lessonTitle?: string; // For gopele admin content creation
  pageNumber?: number; // For gopele admin content creation
};

// Define which screens are accessible by which roles
// Admins have access to all teacher screens plus their own admin screens
// Gopele Admins (master admins) have access to course management
const ROLE_ACCESS: Record<Screen, UserRole[]> = {
  landing: [null, 'student', 'teacher', 'admin', 'gopeleAdmin'],
  login: [null, 'student', 'teacher', 'admin', 'gopeleAdmin'],
  adminLogin: [null, 'student', 'teacher', 'admin', 'gopeleAdmin'],
  organizationLogin: [null, 'student', 'teacher', 'admin', 'gopeleAdmin'],
  organizationSetPassword: [null, 'admin', 'gopeleAdmin'], // Allow guest, admin and gopeleAdmin to set password during onboarding
  organizationSize: [null, 'admin', 'gopeleAdmin'], // Allow guest, admin and gopeleAdmin to set organization size during onboarding
  organizationIndustry: [null, 'admin', 'gopeleAdmin'], // Allow guest, admin and gopeleAdmin to set organization industry during onboarding
  organizationCongratulations: [null, 'admin', 'gopeleAdmin'], // Allow guest, admin and gopeleAdmin to view success screen during onboarding
  organizationDashboardLanding: ['admin', 'gopeleAdmin'], // Organization admin dashboard landing page (accessible by admin and gopeleAdmin)
  organizationDashboard: ['admin', 'gopeleAdmin'], // Organization admin main dashboard with data (accessible by admin and gopeleAdmin)
  organizationCourses: ['admin', 'gopeleAdmin'], // Organization admin courses management (accessible by admin and gopeleAdmin)
  organizationInstructors: ['admin', 'gopeleAdmin'], // Organization admin instructors management (accessible by admin and gopeleAdmin)
  organizationLearners: ['admin', 'gopeleAdmin'], // Organization admin learners management (accessible by admin and gopeleAdmin)
  organizationAddLearner: ['admin', 'gopeleAdmin'], // Organization admin add learner modal/screen (accessible by admin and gopeleAdmin)
  home: ['student'],
  dashboard: ['student'],
  subject: ['student'],
  lessonIntro: ['student'],
  lesson: ['student'],
  feedback: ['student'],
  aiMentor: ['student'],
  teacherDashboard: ['teacher', 'admin'], // Admins can access teacher dashboard
  adminDashboard: ['admin'],
  courses: ['gopeleAdmin'], // Gopele Admin-specific courses management
  coursesPopulated: ['gopeleAdmin'], // Gopele Admin-specific courses populated view
  createNewSubject: ['gopeleAdmin'], // Gopele Admin-specific subject creation
  emptySubject: ['gopeleAdmin'], // Gopele Admin-specific empty subject view
  subjectWithLessons: ['gopeleAdmin'], // Gopele Admin-specific subject with lessons view
  topicDetails: ['gopeleAdmin'], // Gopele Admin-specific topic details view
  updateSubject: ['gopeleAdmin'], // Gopele Admin-specific subject update
  createLessonDetails: ['gopeleAdmin'], // Gopele Admin-specific lesson creation
  lessonContent: ['gopeleAdmin'], // Gopele Admin-specific lesson content editor
  quizCreator: ['gopeleAdmin'], // Gopele Admin-specific quiz creator
  quizCreated: ['gopeleAdmin'], // Gopele Admin-specific quiz created success page
  institutesPage: ['admin'], // Admin-specific institutes list
  instituteDetails: ['admin'], // Admin-specific institute details
  activateSubjects: ['admin'], // Admin-specific subject activation
  teamDetails: ['admin'], // Admin-specific team management
  addMember: ['admin'], // Admin-specific member addition
  accountReady: ['admin'], // Admin-specific account ready screen
  createInstitute: ['teacher'], // Teacher-specific institute creation
  addInstitute: ['admin', 'gopeleAdmin'], // Admin and Gopele Admin can add institutes
  addStudents: ['teacher', 'admin'],
};

export function useNavigation() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [navigationData, setNavigationData] = useState<NavigationData>({});
  const [isMobile, setIsMobile] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState<string>('');

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Navigate with role checking
  const navigateTo = (screen: Screen, data?: NavigationData, overrideRole?: UserRole) => {
    // Check if user has permission to access this screen
    const allowedRoles = ROLE_ACCESS[screen];
    const roleToCheck = overrideRole !== undefined ? overrideRole : userRole;
    if (!allowedRoles.includes(roleToCheck)) {
      console.warn(`Access denied: ${roleToCheck || 'guest'} cannot access ${screen}`);
      return;
    }

    setCurrentScreen(screen);
    if (data) {
      setNavigationData({ ...navigationData, ...data });
    }
  };

  // Login function that sets role and navigates to appropriate home
  const login = (role: UserRole, name: string = '', skipNavigation: boolean = false) => {
    setUserRole(role);
    setUserName(name);
    
    // Navigate to role-appropriate home screen (unless skipNavigation is true)
    if (!skipNavigation) {
      if (role === 'student') {
        setCurrentScreen('home');
      } else if (role === 'teacher') {
        setCurrentScreen('teacherDashboard');
      } else if (role === 'admin') {
        setCurrentScreen('adminDashboard');
      } else if (role === 'gopeleAdmin') {
        setCurrentScreen('organizationLogin');
      }
      
      // Clear any previous navigation data
      setNavigationData({});
    }
  };

  // Logout function
  const logout = () => {
    setUserRole(null);
    setUserName('');
    setCurrentScreen('landing');
    setNavigationData({});
  };

  // Check if user can access a screen
  const canAccess = (screen: Screen): boolean => {
    const allowedRoles = ROLE_ACCESS[screen];
    return allowedRoles.includes(userRole);
  };

  return {
    currentScreen,
    navigationData,
    isMobile,
    userRole,
    userName,
    navigateTo,
    login,
    logout,
    canAccess,
  };
}
