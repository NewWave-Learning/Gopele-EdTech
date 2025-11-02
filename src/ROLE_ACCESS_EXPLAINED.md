# Role-Based Access Control Explained

Understanding how navigation and permissions work in the Gopele EdTech app.

---

## 🔐 How It Works

The app has **role-based access control** built into the navigation system. Each screen is restricted to specific user roles.

### Key Concepts

1. **Auto-Login**: When you click a screen in the navigation menu, it automatically logs you in with the correct role
2. **Access Control**: The `useNavigation` hook checks permissions before allowing navigation
3. **Role Override**: Navigation passes the target role to bypass access checks during login

---

## 👥 User Roles

The app supports 5 user roles:

| Role | Description | Access Level |
|------|-------------|--------------|
| `null` (Guest) | Not logged in | Landing, login screens only |
| `student` | Student user | Learning features |
| `teacher` | Teacher user | Institute management, student tracking |
| `admin` | School/Organization Admin | Full school/org management |
| `gopeleAdmin` | Gopele Master Admin | Content creation, course management |

---

## 🎯 Screen Access Matrix

### 🏠 Public Screens (No Login Required)
```
✅ landing          - All roles + guests
✅ login            - All roles + guests  
✅ adminLogin       - All roles + guests
✅ organizationLogin - All roles + guests
```

### 🎓 Student Screens
```
👨‍🎓 Requires: student role

✅ home             - Student home dashboard
✅ dashboard        - Student progress dashboard
✅ subject          - Subject view
✅ lesson           - Lesson view
✅ feedback         - Lesson feedback
✅ aiMentor         - AI mentor assistant
```

### 👩‍🏫 Teacher Screens
```
👩‍🏫 Requires: teacher role (admin can also access)

✅ teacherDashboard  - Teacher main dashboard
✅ createInstitute   - Create new institute
✅ addStudents       - Add students to institute
```

### 🔧 School Admin Screens
```
🔧 Requires: admin role

✅ adminDashboard    - Admin analytics dashboard
✅ institutesPage    - List of institutions
✅ instituteDetails  - Institute details
✅ activateSubjects  - Activate subjects for institute
✅ teamDetails       - Team management
✅ addMember         - Add team member
✅ accountReady      - Account setup success
✅ addInstitute      - Add new institute (also gopeleAdmin)
✅ addStudents       - Add students (shared with teacher)
✅ teacherDashboard  - Can access teacher features
```

### 🏢 Organization Screens
```
🏢 Requires: admin role (organization admin)

Onboarding (null or admin):
✅ organizationSetPassword
✅ organizationSize
✅ organizationIndustry
✅ organizationCongratulations

Dashboard (admin only):
✅ organizationDashboardLanding
✅ organizationDashboard
✅ organizationCourses
✅ organizationInstructors
✅ organizationLearners
✅ organizationAddLearner
```

### 📚 Gopele Admin Screens
```
📚 Requires: gopeleAdmin role

✅ courses              - Courses list (empty)
✅ coursesPopulated     - Courses list (with data)
✅ createNewSubject     - Create new subject
✅ emptySubject         - Empty subject view
✅ subjectWithLessons   - Subject with lessons
✅ topicDetails         - Topic configuration
✅ updateSubject        - Update subject
✅ createLessonDetails  - Create lesson details
✅ lessonContent        - Lesson content editor
✅ quizCreator          - Quiz creator
✅ quizCreated          - Quiz created success
✅ addInstitute         - Add institute (shared with admin)
```

---

## 🚀 How Navigation Menu Works

### Step-by-Step Process

When you click a screen in the navigation menu:

```
1. User clicks "Student → Home"
   ↓
2. quickNavigate('home', 'student', 'John Doe')
   ↓
3. Check: Is current role different?
   ↓
4. YES: Login as 'student' with skipNavigation=true
   ↓
5. Wait for state update (setTimeout)
   ↓
6. navigateTo('home', data, roleOverride='student')
   ↓
7. Access check: Does 'student' have access to 'home'?
   ↓
8. YES: Navigate successfully ✅
```

### Why setTimeout?

React state updates are asynchronous. The `setTimeout` ensures:
- Login completes
- Role state updates
- Access check uses new role
- Navigation succeeds

---

## 🔄 Role Override Feature

The navigation system supports role override:

```typescript
navigateTo(screen, data, overrideRole)
```

This allows:
1. Pre-checking access with target role
2. Preventing access denied errors
3. Smooth role switching during navigation

---

## 🐛 Common Errors & Solutions

### Error: "Access denied: guest cannot access home"

**Problem:** Trying to navigate to student screen without logging in

**Solution:** Login as student first
```typescript
login('student', 'John Doe', true);
navigateTo('home', {}, 'student');
```

### Error: "Access denied: student cannot access teacherDashboard"

**Problem:** Student trying to access teacher screen

**Solution:** Login as teacher first
```typescript
login('teacher', 'Ms. Smith', true);
navigateTo('teacherDashboard', {}, 'teacher');
```

### Error: "Access denied: teacher cannot access subject"

**Problem:** Teacher trying to access student screen

**Solution:** Login as student first
```typescript
login('student', 'John Doe', true);
navigateTo('subject', { subjectName: 'Space' }, 'student');
```

---

## 💡 Navigation Menu Implementation

The navigation menu automatically handles all this:

```typescript
const quickNavigate = (screen: string, role?: string, roleUserName?: string, data?: any) => {
  setShowNavMenu(false);
  
  if (role && roleUserName && role !== userRole) {
    // Different role needed - login first
    login(role as any, roleUserName, true);
    
    // Wait for state update, then navigate with role override
    setTimeout(() => {
      navigateTo(screen as any, data, role as any);
    }, 0);
  } else {
    // Same role - navigate directly
    navigateTo(screen as any, data);
  }
};
```

---

## 🎯 Menu Categories → Roles

| Menu Category | Auto-Login Role | Auto-Login Name |
|--------------|-----------------|-----------------|
| Landing & Auth | none | - |
| Student | `student` | John Doe |
| Teacher | `teacher` | Ms. Smith |
| Organization | `admin` | Seev Admin |
| School Admin | `admin` | Administrator |
| Gopele Admin | `gopeleAdmin` | Master Admin |

---

## 🔒 Security Notes

### Access Control is Enforced

The `useNavigation` hook enforces access control:

```typescript
const navigateTo = (screen: Screen, data?: NavigationData, overrideRole?: UserRole) => {
  const allowedRoles = ROLE_ACCESS[screen];
  const roleToCheck = overrideRole !== undefined ? overrideRole : userRole;
  
  if (!allowedRoles.includes(roleToCheck)) {
    console.warn(`Access denied: ${roleToCheck || 'guest'} cannot access ${screen}`);
    return; // Navigation blocked!
  }
  
  // Navigation allowed
  setCurrentScreen(screen);
  setNavigationData({ ...navigationData, ...data });
};
```

### Role Cannot Be Bypassed

You cannot navigate to a restricted screen without the correct role:
- ❌ Student cannot access teacher screens
- ❌ Teacher cannot access student screens
- ❌ Admin cannot access gopele admin screens
- ❌ Gopele admin cannot access teacher screens
- ✅ Must login with correct role first

---

## 🎨 Visual Guide

```
Navigation Menu Click
        ↓
   ┌─────────┐
   │ Is role │ ────NO───→ Navigate directly
   │different?│
   └─────────┘
        │ YES
        ↓
   ┌─────────┐
   │  Login  │
   │ as new  │
   │  role   │
   └─────────┘
        ↓
   ┌─────────┐
   │  Wait   │
   │  state  │
   │ update  │
   └─────────┘
        ↓
   ┌─────────┐
   │Navigate │
   │  with   │
   │override │
   └─────────┘
        ↓
   ┌─────────┐
   │ Access  │ ────YES───→ Success! ✅
   │ check   │
   └─────────┘
        │ NO
        ↓
    Access denied ❌
```

---

## 📚 Code Reference

### Check Access Before Navigation

```typescript
const { canAccess } = useNavigation();

if (canAccess('teacherDashboard')) {
  navigateTo('teacherDashboard');
} else {
  console.log('Access denied');
}
```

### Login with Skip Navigation

```typescript
// Login without auto-navigating to default screen
login('student', 'John Doe', true);

// Then navigate to specific screen
navigateTo('subject', { subjectName: 'Space' });
```

### Navigate with Role Override

```typescript
// Pre-check access with target role
navigateTo('home', {}, 'student');
```

---

## 🎉 Summary

**The navigation system:**
1. ✅ Automatically logs you in with the correct role
2. ✅ Checks permissions before navigation
3. ✅ Prevents unauthorized access
4. ✅ Handles role switching seamlessly
5. ✅ Shows appropriate errors in console

**You don't need to worry about:**
- ❌ Manual login before navigation
- ❌ Role permissions
- ❌ Access denied errors

**The menu handles everything automatically!**

---

**Created:** November 1, 2025
**Status:** ✅ Role-based access working
**Version:** 2.0 with Auto-Login
