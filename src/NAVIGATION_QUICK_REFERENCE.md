# Quick Navigation Reference

Visual guide for navigating the Gopele EdTech app.

---

## 🎯 In Figma Make

### Look for This Button (Bottom-Right Corner):

```
                                    ╔═══════╗
                                    ║       ║
                                    ║  🔵   ║  ← Blue floating button
                                    ║       ║
                                    ╚═══════╝
                                      MENU
```

### Click It to See This:

```
┌──────────────────┐
│ Quick Navigation │
├──────────────────┤
│ Current: home    │
│ Role: student    │
├──────────────────┤
│                  │
│ 🏠 Landing & Auth│
│   → Landing      │
│   → Login        │
│                  │
│ 🎓 Student       │
│   → Home         │
│   → Dashboard    │
│   → Subject      │
│   → AI Mentor    │
│                  │
│ 👩‍🏫 Teacher      │
│   → Dashboard    │
│   → Create Inst. │
│                  │
│ 🏢 Organization  │
│   → Dashboard    │
│   → Learners     │
│                  │
│ 🔧 School Admin  │
│   → Dashboard    │
│   → Institutions │
│                  │
│ 📚 Gopele Admin  │
│   → Courses      │
│   → Create       │
│   → Editor       │
│                  │
│ [Logout]         │
└──────────────────┘
```

---

## 🚀 Most Used Screens

### Student Experience

**Home Dashboard**
```
Menu → Student → Home
Auto-login: John Doe (student)
```

**Learn a Subject**
```
Menu → Student → Subject (Space)
Auto-login: John Doe (student)
```

**Take a Lesson**
```
Menu → Student → Lesson 1
Auto-login: John Doe (student)
```

**Get AI Help**
```
Menu → Student → AI Mentor
Auto-login: John Doe (student)
```

---

### Teacher Experience

**Teacher Dashboard**
```
Menu → Teacher → Dashboard
Auto-login: Ms. Smith (teacher)
```

**Create Institute**
```
Menu → Teacher → Create Institute
Auto-login: Ms. Smith (teacher)
```

**Add Students**
```
Menu → Teacher → Add Students
Auto-login: Ms. Smith (teacher)
```

---

### Organization Experience

**Organization Dashboard**
```
Menu → Organization → Dashboard
Auto-login: Seev Admin (admin)
```

**Manage Learners**
```
Menu → Organization → Learners
Auto-login: Seev Admin (admin)
```

**Set Password (Onboarding)**
```
Menu → Organization → Set Password
```

**Organization Size (Onboarding)**
```
Menu → Organization → Org Size
```

---

### School Admin Experience

**Admin Dashboard**
```
Menu → School Admin → Dashboard
Auto-login: Administrator (admin)
```

**Manage Institutions**
```
Menu → School Admin → Institutions
Auto-login: Administrator (admin)
```

**Team Management**
```
Menu → School Admin → Team
Auto-login: Administrator (admin)
```

---

### Gopele Admin (Content Creation)

**Courses Dashboard**
```
Menu → Gopele Admin → Courses
Auto-login: Master Admin (gopeleAdmin)
```

**Create New Subject**
```
Menu → Gopele Admin → Create Subject
Auto-login: Master Admin (gopeleAdmin)
```

**Subject with Lessons**
```
Menu → Gopele Admin → Subject Details
Auto-login: Master Admin (gopeleAdmin)
```

**Content Editor**
```
Menu → Gopele Admin → Content Editor
Auto-login: Master Admin (gopeleAdmin)
```

**Quiz Creator**
```
Menu → Gopele Admin → Quiz Creator
Auto-login: Master Admin (gopeleAdmin)
```

---

## 🎨 Color-Coded Menu

When you open the menu, screens are color-highlighted by role:

```
Landing & Auth   → Gray/White (no auth needed)
Student         → Blue highlight (student role)
Teacher         → Purple highlight (teacher role)
Organization    → Red/Pink highlight (org admin)
School Admin    → Yellow highlight (school admin)
Gopele Admin    → Green highlight (gopele admin)
```

---

## 🔄 Complete User Journeys

### 1️⃣ Student Learning Journey

```
Step 1: Menu → Student → Home
        ↓
Step 2: Menu → Student → Subject (Space)
        ↓
Step 3: Menu → Student → Lesson 1
        ↓
Step 4: Menu → Student → AI Mentor
        ↓
Step 5: Menu → Student → Feedback
```

### 2️⃣ Teacher Setup Journey

```
Step 1: Menu → Teacher → Dashboard
        ↓
Step 2: Menu → Teacher → Create Institute
        ↓
Step 3: Menu → Teacher → Add Students
```

### 3️⃣ Organization Onboarding Journey

```
Step 1: Menu → Landing & Auth → Organization Login
        ↓
Step 2: Menu → Organization → Set Password
        ↓
Step 3: Menu → Organization → Org Size
        ↓
Step 4: Menu → Organization → Dashboard
        ↓
Step 5: Menu → Organization → Learners
```

### 4️⃣ Content Creation Journey

```
Step 1: Menu → Gopele Admin → Courses
        ↓
Step 2: Menu → Gopele Admin → Subject Details
        ↓
Step 3: Menu → Gopele Admin → Content Editor
        ↓
Step 4: Menu → Gopele Admin → Quiz Creator
```

---

## 📱 Mobile Testing

### How to View Mobile Screens

**In Figma Make:**
1. Use device selector in top toolbar
2. Select: iPhone 12, Galaxy S21, or Mobile
3. Or resize preview to < 768px width

**App automatically shows mobile version:**
- Home → HomeMobile
- Courses → CoursesMobile
- Dashboard → DashboardMobile
- etc.

### Verify Mobile Mode

Open menu and check header:
```
Quick Navigation
Current: home (Mobile)  ← Shows "(Mobile)"
Role: student
```

---

## 🎯 Quick Reference Table

| What I Want | Where to Click |
|-------------|---------------|
| Student home | Menu → Student → Home |
| Teacher dashboard | Menu → Teacher → Dashboard |
| Organization dashboard | Menu → Organization → Dashboard |
| Create content | Menu → Gopele Admin → Courses |
| Manage schools | Menu → School Admin → Institutions |
| Login screens | Menu → Landing & Auth → [pick one] |
| Learn Space subject | Menu → Student → Subject (Space) |
| Take a lesson | Menu → Student → Lesson 1 |
| Get AI help | Menu → Student → AI Mentor |
| Add learners | Menu → Organization → Learners |
| Create institute | Menu → Teacher → Create Institute |
| Build quiz | Menu → Gopele Admin → Quiz Creator |

---

## 💡 Pro Tips

### Tip #1: Menu Position
The menu button is always in the **bottom-right corner**.
Never moves, always accessible.

### Tip #2: Auto-Close
Click any screen and the menu automatically closes.
No need to manually close it!

### Tip #3: Auto-Login
Each section automatically logs you in:
- Student screens → John Doe
- Teacher screens → Ms. Smith
- Organization → Seev Admin
- School Admin → Administrator
- Gopele Admin → Master Admin

### Tip #4: Reset State
Need a fresh start?
Click **Logout** at the bottom of the menu.

### Tip #5: Current Info
Menu header shows:
- Where you are
- Mobile/Desktop mode
- Current role

---

## 🚨 Common Questions

**Q: Where's the menu button?**
A: Bottom-right corner, blue floating button with menu icon.

**Q: How do I switch roles?**
A: Just click a screen in a different category. Auto-login happens!

**Q: Can I test mobile?**
A: Yes! Use Figma Make's device selector or resize < 768px.

**Q: How do I close the menu?**
A: Click X on button, click outside menu, or click any screen.

**Q: I'm on the wrong screen, help!**
A: Open menu, click any screen to navigate. It's that easy!

**Q: Do I need to manually login?**
A: Nope! Navigation menu handles all login automatically.

---

## 🎉 You're Ready!

**Right Now:**
1. Look bottom-right corner → See blue button
2. Click it → See menu
3. Pick any screen → Start exploring!

**Recommended First Steps:**
- Try: **Student → Home** (most common)
- Or: **Gopele Admin → Courses** (content creation)
- Or: **Teacher → Dashboard** (teacher experience)

---

**Happy Navigating! 🚀**

Quick tip: Keep this file open while testing!

---

**Created:** November 1, 2025
**For:** Figma Make Environment
**Status:** ✅ Ready to Use
