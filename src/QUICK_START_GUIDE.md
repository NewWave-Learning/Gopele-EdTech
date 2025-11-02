# Quick Start Guide - Role-Based Navigation

## For Developers

### 🚀 Getting Started

1. **Open the app** - You'll see the Landing Page
2. **Enable Debug Panel** (if not visible):
   - Open `/App.tsx`
   - Set `SHOW_DEBUG_PANEL = true`
3. **Quick Test**:
   - Click "Login as Student" in debug panel → Student Home
   - Click "Login as Teacher" in debug panel → Teacher Dashboard

---

## Common Tasks

### ✅ Test Student Experience

**Method 1: Through UI**
1. Start at Landing Page
2. Click login button
3. Select "Student" role
4. Enter any email (e.g., "john@school.com")
5. Click "Sign In as Student"
6. You're now in Student Home with student navigation

**Method 2: Debug Panel**
1. Click "Login as Student" button
2. Instantly logged in as student

**What you'll see**:
- App Header with: Home | Dashboard | AI Mentor
- Access to all student screens
- Cannot access Teacher Dashboard

---

### ✅ Test Teacher Experience

**Method 1: Through UI**
1. Start at Landing Page
2. Click login button
3. Select "Teacher" role
4. Enter any email (e.g., "teacher@school.com")
5. Click "Sign In as Teacher"
6. You're now in Teacher Dashboard

**Method 2: Debug Panel**
1. Click "Login as Teacher" button
2. Instantly logged in as teacher

**What you'll see**:
- App Header with: Dashboard | Create Institute
- Access to teacher features
- Cannot access student screens

**Test Institute Creation Flow**:
1. Login as Teacher
2. Click "Create New Institute" button (in dashboard or header)
3. Fill in: School Email, Password, Institute Name
4. Click "Create Your Institute"
5. See success screen with generated institute code
6. Copy institute code to clipboard
7. Navigate back to dashboard or create another institute

---

### ✅ Test Access Control

1. Login as Student (debug panel)
2. Try to click "Teacher Dashboard" in debug panel
3. Notice: Button is disabled (grayed out)
4. Console will show: "Access denied" message
5. Logout
6. Login as Teacher
7. Student navigation buttons now disabled

---

### ✅ Switch Between Roles

```typescript
// In debug panel, simply click:
1. "Login as Student" → Becomes student
2. "Login as Teacher" → Becomes teacher
3. "Logout" → Returns to landing page
```

---

### ✅ Add a New Student Screen

**Step 1**: Add screen to type definition
```typescript
// In /hooks/useNavigation.ts
export type Screen = 
  | 'landing'
  | 'login' 
  | 'home'
  // ... existing screens
  | 'myNewScreen';  // ADD THIS
```

**Step 2**: Define who can access it
```typescript
// In /hooks/useNavigation.ts
const ROLE_ACCESS: Record<Screen, UserRole[]> = {
  // ... existing access rules
  myNewScreen: ['student'],  // Only students can access
};
```

**Step 3**: Create the component
```typescript
// Create /components/screens/MyNewScreen.tsx
import { Screen, NavigationData } from '../../hooks/useNavigation';

type MyNewScreenProps = {
  onNavigate: (screen: Screen, data?: NavigationData) => void;
};

export function MyNewScreen({ onNavigate }: MyNewScreenProps) {
  return (
    <div>
      <h1>My New Screen</h1>
      <button onClick={() => onNavigate('home')}>
        Back to Home
      </button>
    </div>
  );
}
```

**Step 4**: Add to App.tsx
```typescript
// Import at top
import { MyNewScreen } from './components/screens/MyNewScreen';

// Add to renderScreen() switch statement
case 'myNewScreen':
  return <MyNewScreen onNavigate={navigateTo} />;
```

**Step 5**: Add to App Header (optional)
```typescript
// In /components/shared/AppHeader.tsx
const studentNavItems = [
  { screen: 'home' as Screen, label: 'Home', icon: Home },
  { screen: 'myNewScreen' as Screen, label: 'New Feature', icon: Star },
];
```

---

### ✅ Add a New Teacher Screen

Same steps as above, but change access:

```typescript
const ROLE_ACCESS: Record<Screen, UserRole[]> = {
  myTeacherScreen: ['teacher'],  // Only teachers
};
```

---

### ✅ Make a Screen Accessible to Both Roles

```typescript
const ROLE_ACCESS: Record<Screen, UserRole[]> = {
  sharedScreen: ['student', 'teacher'],  // Both can access
};
```

---

### ✅ Prepare for Production

**Before deploying**:

1. **Disable Debug Panel**
```typescript
// In /App.tsx
const SHOW_DEBUG_PANEL = false;  // Change to false
```

2. **Add Real Authentication**
   - Integrate with backend API
   - Add JWT token handling
   - Implement secure login validation

3. **Add Error Handling**
   - Handle failed login attempts
   - Show user-friendly error messages
   - Add loading states

4. **Test All Flows**
   - Student registration → login → access
   - Teacher registration → login → access
   - Logout → re-login
   - Session expiration

---

## Navigation Patterns

### Pattern 1: Simple Navigation
```typescript
// Navigate to a screen
onNavigate('dashboard');
```

### Pattern 2: Navigation with Data
```typescript
// Navigate with additional data
onNavigate('subject', { 
  subjectName: 'Space',
  subjectId: '123' 
});
```

### Pattern 3: Conditional Navigation
```typescript
// In your component
const handleClick = () => {
  if (userRole === 'student') {
    onNavigate('dashboard');
  } else {
    onNavigate('teacherDashboard');
  }
};
```

### Pattern 4: Check Access Before Showing UI
```typescript
// In your component (if you add canAccess to props)
{canAccess('aiMentor') && (
  <button onClick={() => onNavigate('aiMentor')}>
    AI Mentor
  </button>
)}
```

---

## Debugging Tips

### Problem: Navigation doesn't work
**Solution**: Check browser console for "Access denied" message

### Problem: Debug panel not showing
**Solution**: Check `SHOW_DEBUG_PANEL = true` in App.tsx

### Problem: Wrong screens accessible
**Solution**: Review `ROLE_ACCESS` object in useNavigation.ts

### Problem: Header shows wrong navigation
**Solution**: Check `studentNavItems` and `teacherNavItems` in AppHeader.tsx

### Problem: Screen is blank
**Solution**: Check console for errors, verify screen is in switch statement

---

## Code Reference

### Get Current User Role (in a component)
```typescript
// Not directly accessible in components by default
// Access via navigation hook if needed

// Option 1: Pass as prop from App.tsx
type MyComponentProps = {
  userRole: UserRole;
  onNavigate: (screen: Screen) => void;
};

// Option 2: Use context (future enhancement)
```

### Logout Programmatically
```typescript
// From debug panel or App Header
logout();  // Clears role and returns to landing
```

### Login Programmatically
```typescript
// From Login component
onLogin('student', 'John Doe');  // Role + name
```

---

## File Structure Reference

```
Key Files:
├── /App.tsx                              # Main app with routing
├── /hooks/useNavigation.ts               # Navigation logic + roles
├── /components/shared/AppHeader.tsx      # Persistent navigation
├── /components/screens/Login.tsx         # Desktop login
├── /components/screens/mobile/LoginMobile.tsx  # Mobile login
└── All other screen components (unchanged)

Documentation:
├── /ROLE_BASED_NAVIGATION.md   # Complete system documentation
└── /QUICK_START_GUIDE.md       # This file
```

---

## Next Steps

1. ✅ Test both student and teacher flows
2. ✅ Customize navigation items in AppHeader
3. ✅ Add more screens as needed
4. ✅ Style the App Header to match your brand
5. ⚠️ Plan backend integration for production
6. ⚠️ Add proper error handling
7. ⚠️ Implement real authentication

---

## Support

**Having Issues?**
1. Check this guide
2. Review `/ROLE_BASED_NAVIGATION.md`
3. Use debug panel to test
4. Check browser console for errors
