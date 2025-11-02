# Navigation Guide for Figma Make

Quick guide for navigating the Gopele EdTech app within Figma Make.

---

## 🎯 Quick Navigation

### Floating Menu Button

Look for the **blue circular button** in the bottom-right corner of the screen:

```
🔵 [Menu Icon]
```

**Click it to open the navigation menu!**

---

## 📱 How to Use

### 1. Open Navigation Menu
- Click the **blue floating button** (bottom-right corner)
- Navigation menu slides up from the bottom

### 2. Select a Screen
- Browse screens organized by user role:
  - **Landing & Auth** - Login screens
  - **Student** - Student experience
  - **Teacher** - Teacher dashboard
  - **Organization** - Org onboarding & dashboard
  - **School Admin** - Admin features
  - **Gopele Admin** - Content creation

### 3. Navigate
- Click any screen name
- Menu automatically closes
- Screen loads instantly
- Auto-login happens if needed

### 4. Close Menu
- Click the **X** button on the floating button
- Or click outside the menu (on the dark overlay)

---

## 🎨 Visual Guide

```
┌─────────────────────────────────────┐
│                                     │
│         [Your Screen Here]          │
│                                     │
│                                     │
│                              ╔════╗ │
│                              ║ 🔵 ║ │ ← Click this!
│                              ╚════╝ │
└─────────────────────────────────────┘
```

When opened:

```
┌─────────────────────────────────────┐
│         [Your Screen Here]          │
│                                     │
│  ┌─────────────────┐         ╔════╗│
│  │ Quick Navigation│         ║ ✕  ║│
│  ├─────────────────┤         ╚════╝│
│  │ 📍 Landing & Auth        │      │
│  │ → Landing Page           │      │
│  │ → Student Login          │      │
│  │                          │      │
│  │ 🎓 Student               │      │
│  │ → Home                   │      │
│  │ → Dashboard              │      │
│  │ → Subject (Space)        │      │
│  │ → AI Mentor              │      │
│  │                          │      │
│  │ 👩‍🏫 Teacher              │      │
│  │ → Dashboard              │      │
│  │ → Create Institute       │      │
│  └──────────────────────────┘      │
└─────────────────────────────────────┘
```

---

## 🚀 Popular Screens (Quick Access)

### Student Experience
1. Click floating button
2. Find **Student** section
3. Click **Home** → Auto-login as "John Doe"

### Teacher Dashboard
1. Click floating button
2. Find **Teacher** section
3. Click **Dashboard** → Auto-login as "Ms. Smith"

### Organization Dashboard
1. Click floating button
2. Find **Organization** section
3. Click **Dashboard** → Auto-login as "Seev Admin"

### Gopele Admin (Content Creation)
1. Click floating button
2. Find **Gopele Admin** section
3. Click **Courses** → Auto-login as "Master Admin"

### School Admin
1. Click floating button
2. Find **School Admin** section
3. Click **Dashboard** → Auto-login as "Administrator"

---

## 🎭 Role Switching & Permissions

The navigation menu automatically handles login and permissions:

- **Student screens** → Auto-login as "John Doe" (student)
- **Teacher screens** → Auto-login as "Ms. Smith" (teacher)
- **Organization screens** → Auto-login as "Seev Admin" (admin)
- **School Admin screens** → Auto-login as "Administrator" (admin)
- **Gopele Admin screens** → Auto-login as "Master Admin" (gopeleAdmin)

**No need to manually login!** Just click the screen you want.

### 🔒 Built-in Security

Each screen has role-based access control:
- Students can only access student screens
- Teachers can only access teacher screens
- Admins can only access admin screens
- Gopele Admins can only access content creation screens

The navigation menu handles all permissions automatically, so you'll never see "Access Denied" errors!

---

## 📱 Mobile Testing

### Switch to Mobile View
1. Use Figma Make's device selector (top toolbar)
2. Select **iPhone**, **Galaxy**, or **Mobile (375px)**
3. Or manually resize the preview to < 768px width

### Mobile Features
- App automatically detects screen width
- Routes to mobile-optimized screens
- Touch-friendly interface
- All 48+ mobile screens available

---

## 💡 Tips & Tricks

### Tip 1: Current Screen Info
The navigation menu header shows:
- Current screen name
- Mobile/Desktop mode
- Current user role

```
Quick Navigation
Current: home (Mobile)
Role: student
```

### Tip 2: Fast Navigation
Common patterns for quick testing:

**Test Student Journey:**
```
Home → Subject (Space) → Lesson 1 → AI Mentor → Feedback
```

**Test Organization Onboarding:**
```
Organization Login → Set Password → Org Size → Dashboard → Learners
```

**Test Content Creation:**
```
Courses → Subject Details → Content Editor → Quiz Creator
```

### Tip 3: Logout
Need to reset? Click **Logout** at the bottom of the menu.

### Tip 4: Close Menu Quickly
- Click outside the menu
- Click the X button
- Click any screen (auto-closes)

---

## 🎯 Screen Categories Explained

### Landing & Auth
- Initial screens
- Login options
- No authentication required

### Student (Blue highlights)
- Student learning experience
- Auto-login as student
- Subjects, lessons, AI mentor

### Teacher (Purple highlights)
- Teacher management
- Auto-login as teacher
- Institute creation, student tracking

### Organization (Red highlights)
- Organization onboarding
- Organization dashboard
- Auto-login as org admin
- Learners, courses, instructors

### School Admin (Yellow highlights)
- School management
- Auto-login as admin
- Institutions, team management

### Gopele Admin (Green highlights)
- Content creation
- Auto-login as Gopele admin
- Course management, lesson creation

---

## 🔄 Complete Workflows

### Student Learning Flow
```
1. Click menu button
2. Student → Home
3. Student → Subject (Space)
4. Student → Lesson 1
5. Student → AI Mentor
6. Student → Feedback
```

### Organization Setup Flow
```
1. Click menu button
2. Landing & Auth → Organization Login
3. Organization → Set Password
4. Organization → Org Size
5. Organization → Dashboard
6. Organization → Learners
```

### Content Creation Flow
```
1. Click menu button
2. Gopele Admin → Courses
3. Gopele Admin → Subject Details
4. Gopele Admin → Content Editor
5. Gopele Admin → Quiz Creator
```

---

## 🐛 Troubleshooting

### Menu Button Not Visible?
- Check bottom-right corner of screen
- Blue circular button with menu icon
- If missing, check `SHOW_NAV_MENU` in App.tsx

### Screen Not Loading?
- Try clicking another screen first
- Use Logout then try again
- Check Figma Make console for errors

### Menu Won't Close?
- Click the X button on floating button
- Click outside menu (dark overlay)
- Clicking any screen also closes it

### Role Not Switching?
- Navigation automatically handles login
- Each category uses different role
- Use Logout to reset if needed

---

## ⚙️ For Development

### Disable Navigation Menu
In `App.tsx`:
```typescript
const SHOW_NAV_MENU = false; // Set to false
```

### Enable for Figma Make Only
```typescript
const SHOW_NAV_MENU = true; // Keep true for Figma Make
```

### For Production Build
```typescript
const SHOW_NAV_MENU = false; // Disable for production
```

---

## 📚 Additional Resources

- **ROUTING_GUIDE.md** - Complete URL routing reference
- **LOCAL_SETUP_GUIDE.md** - Local development setup
- **README.md** - Project overview
- **navigation.html** - Browser navigation helper

---

## 🎉 Quick Start

**Right now, in Figma Make:**

1. ✅ Look at bottom-right corner
2. ✅ See the blue floating button
3. ✅ Click it
4. ✅ Choose any screen
5. ✅ Start exploring!

**Most Popular Starting Points:**
- **Student → Home** (Student dashboard)
- **Teacher → Dashboard** (Teacher view)
- **Organization → Dashboard** (Org admin view)
- **Gopele Admin → Courses** (Content creation)

---

**Happy Navigating! 🎯**

---

**Created for:** Figma Make Environment
**Last Updated:** November 1, 2025
**Status:** ✅ Ready to Use
