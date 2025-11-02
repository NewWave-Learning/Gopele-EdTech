# Role-Based Navigation System

## Overview

The Gopele EdTech application now implements a production-ready role-based navigation system that separates student and teacher experiences while maintaining your existing screen-based navigation architecture.

## Architecture

### 1. User Roles

Two distinct user roles are supported:
- **Student**: Access to learning content, dashboard, and AI Mentor
- **Teacher**: Access to teacher dashboard and student management

### 2. Key Components

#### Enhanced Navigation Hook (`/hooks/useNavigation.ts`)
- **New Features**:
  - `userRole`: Tracks current user's role (`'student' | 'teacher' | null`)
  - `userName`: Stores user's name for personalization
  - `login(role, name)`: Authenticates user and navigates to appropriate home screen
  - `logout()`: Clears user session and returns to landing page
  - `canAccess(screen)`: Checks if user has permission to access a screen
  - **Role-based access control**: Automatically prevents unauthorized navigation

#### App Header Component (`/components/shared/AppHeader.tsx`)
- **Features**:
  - Persistent navigation bar (replaces debug panel in production)
  - Role-specific navigation items
  - User info display
  - Logout functionality
  - Responsive design
  - Automatically hidden on landing/login pages

#### Updated Login Screens
- **Desktop** (`/components/screens/Login.tsx`)
- **Mobile** (`/components/screens/mobile/LoginMobile.tsx`)

**New Features**:
- Role selection (Student/Teacher) before login
- Dynamic placeholder text based on selected role
- Calls `login()` function with selected role
- Visual feedback for selected role

## User Flow

### Student Flow
1. User lands on **Landing Page**
2. Clicks "Get Started" → navigates to **Login**
3. Selects "Student" role
4. Enters credentials and clicks "Sign In as Student"
5. Automatically navigated to **Home** screen
6. App Header appears with: Home | Dashboard | AI Mentor
7. Can navigate through student-specific screens
8. Click "Logout" returns to Landing Page

### Teacher Flow
1. User lands on **Landing Page**
2. Clicks "Get Started" → navigates to **Login**
3. Selects "Teacher" role
4. Enters credentials and clicks "Sign In as Teacher"
5. Automatically navigated to **Teacher Dashboard**
6. App Header appears with: Teacher Dashboard
7. Can access teacher-specific features
8. Click "Logout" returns to Landing Page

## Access Control

### Screen Permissions

```typescript
const ROLE_ACCESS = {
  landing: [null, 'student', 'teacher'],      // Public
  login: [null, 'student', 'teacher'],        // Public
  home: ['student'],                          // Student only
  dashboard: ['student'],                     // Student only
  subject: ['student'],                       // Student only
  lesson: ['student'],                        // Student only
  feedback: ['student'],                      // Student only
  aiMentor: ['student'],                      // Student only
  teacherDashboard: ['teacher'],              // Teacher only
};
```

### Navigation Guards

When `navigateTo()` is called, the hook automatically:
1. Checks if the user has permission to access the target screen
2. If unauthorized, logs a warning and prevents navigation
3. If authorized, proceeds with navigation

## Development vs Production

### Debug Panel

The debug panel can be toggled via the `SHOW_DEBUG_PANEL` constant in `/App.tsx`:

```typescript
const SHOW_DEBUG_PANEL = true;  // Set to false for production
```

**Debug Panel Features** (Development Only):
- Quick login as Student or Teacher
- Direct navigation to any screen
- Display current screen, role, and navigation data
- Role permission testing

**Production**: Set `SHOW_DEBUG_PANEL = false` to hide the debug panel entirely.

## Integration with Existing Code

### Minimal Changes Required

The system was designed to work with your existing screens with minimal modifications:

1. **No changes needed to most screen components** - They continue to receive `onNavigate` prop
2. **Navigation data still works** - Subject, lesson, and feedback data flow remains unchanged
3. **Mobile/Desktop responsive** - Existing mobile detection continues to work
4. **Screen switching intact** - All existing navigation patterns preserved

### Updated Prop Types

Only the Login screens needed updates:

```typescript
type LoginProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
  onLogin: (role: UserRole, name: string) => void;  // NEW
};
```

## Best Practices

### 1. Adding New Screens

When adding a new screen:

1. **Define role access** in `useNavigation.ts`:
```typescript
const ROLE_ACCESS: Record<Screen, UserRole[]> = {
  // ... existing screens
  newScreen: ['student'],  // or ['teacher'] or ['student', 'teacher']
};
```

2. **Add to Screen type**:
```typescript
export type Screen = 
  | 'landing'
  // ... existing screens
  | 'newScreen';
```

3. **Add to App.tsx switch statement**:
```typescript
case 'newScreen':
  return <NewScreen onNavigate={navigateTo} />;
```

### 2. Adding to App Header

To add a new navigation item to the header, edit `/components/shared/AppHeader.tsx`:

```typescript
const studentNavItems = [
  { screen: 'home' as Screen, label: 'Home', icon: Home },
  { screen: 'newScreen' as Screen, label: 'New Feature', icon: Star }, // NEW
];
```

### 3. Role Switching (Future Enhancement)

If you need users to have multiple roles (e.g., teacher who is also a student):

```typescript
// Add to useNavigation.ts
const switchRole = (newRole: UserRole) => {
  setUserRole(newRole);
  // Navigate to appropriate home for new role
  if (newRole === 'student') setCurrentScreen('home');
  if (newRole === 'teacher') setCurrentScreen('teacherDashboard');
};
```

## Security Notes

⚠️ **Important**: This is frontend-only authentication!

- **Current implementation**: Client-side role checking (development/demo)
- **Production needs**: 
  - Backend authentication with JWT tokens
  - Server-side role verification
  - Protected API endpoints
  - Secure session management

The current system is perfect for:
- ✅ Development and testing
- ✅ Demos and prototypes
- ✅ UI/UX validation
- ❌ Production without backend security

## Testing

### Manual Testing Checklist

- [ ] Student can login and access student screens
- [ ] Teacher can login and access teacher dashboard
- [ ] Student cannot access teacher dashboard
- [ ] Teacher cannot access student-specific screens
- [ ] Logout returns user to landing page
- [ ] App Header shows correct navigation for each role
- [ ] App Header hidden on landing/login pages
- [ ] Mobile and desktop versions work correctly
- [ ] Navigation data (subjects, lessons) still flows correctly
- [ ] Debug panel quick-login works (development mode)

### Debug Panel Testing

Use the debug panel to:
1. Test both roles quickly
2. Verify access control (disabled buttons show restricted screens)
3. Test navigation flows
4. Verify role transitions

## Future Enhancements

Potential improvements:

1. **Backend Integration**
   - Real authentication with Supabase
   - JWT token management
   - Secure API calls

2. **Additional Roles**
   - Parent role (view child progress)
   - Admin role (manage teachers and students)
   - Content creator role

3. **Persistent Sessions**
   - Remember user login
   - Auto-logout after inactivity
   - Session storage

4. **User Profile**
   - Profile page for each role
   - Avatar upload
   - Settings management

5. **Advanced Permissions**
   - Feature-level permissions
   - Conditional UI based on permissions
   - Role-based content filtering

## Support

For questions or issues with the role-based navigation system:
1. Check this documentation
2. Review `/hooks/useNavigation.ts` for role logic
3. Test with debug panel in development mode
4. Verify screen permissions in `ROLE_ACCESS` object
