# Complete Routes List for Browser Testing

All routes available in the Gopele EdTech app with exact URLs for browser testing.

**Base URL Pattern:** `#[screen]?role=[role]&userName=[name]&[params]`

---

## 🏠 Public Routes (No Login Required)

### Landing Page
```
#landing
```

### Login Screens
```
#login
#adminLogin
#organizationLogin
```

---

## 🎓 Student Routes

**Auto-login:** `role=student&userName=John%20Doe`

### Home & Dashboard
```
#home?role=student&userName=John%20Doe

#dashboard?role=student&userName=John%20Doe
```

### Subject & Lessons
```
#subject?role=student&userName=John%20Doe&subjectName=Space

#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1

#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=The%20Solar%20System&lessonNumber=2

#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Stars%20and%20Galaxies&lessonNumber=3
```

### Learning Tools
```
#aiMentor?role=student&userName=John%20Doe

#feedback?role=student&userName=John%20Doe
```

---

## 👩‍🏫 Teacher Routes

**Auto-login:** `role=teacher&userName=Ms.%20Smith`

### Dashboard
```
#teacherDashboard?role=teacher&userName=Ms.%20Smith
```

### Institute Management
```
#createInstitute?role=teacher&userName=Ms.%20Smith

#addStudents?role=teacher&userName=Ms.%20Smith&instituteName=Demo%20School&instituteCode=INST-DEMO
```

---

## 🔧 School Admin Routes

**Auto-login:** `role=admin&userName=Administrator`

### Dashboard
```
#adminDashboard?role=admin&userName=Administrator
```

### Institutes Management
```
#institutesPage?role=admin&userName=Administrator

#instituteDetails?role=admin&userName=Administrator&instituteName=Springfield%20High

#activateSubjects?role=admin&userName=Administrator&instituteName=Springfield%20High
```

### Team Management
```
#teamDetails?role=admin&userName=Administrator

#addMember?role=admin&userName=Administrator

#accountReady?role=admin&userName=Administrator
```

### Institute Operations
```
#addInstitute?role=admin&userName=Administrator
```

---

## 🏢 Organization Routes

**Auto-login:** `role=admin&userName=Seev%20Admin` (Organization Admin uses 'admin' role)

### Onboarding Flow
```
#organizationLogin

#organizationSetPassword?organizationName=Seev

#organizationSize?organizationName=Seev&organizationSize=50-200

#organizationIndustry?organizationName=Seev&organizationSize=50-200&organizationIndustry=Technology

#organizationCongratulations?organizationName=Seev
```

### Dashboard & Landing
```
#organizationDashboardLanding?role=admin&userName=Seev%20Admin&organizationName=Seev

#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
```

### Organization Management
```
#organizationCourses?role=admin&userName=Seev%20Admin&organizationName=Seev

#organizationInstructors?role=admin&userName=Seev%20Admin&organizationName=Seev

#organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev&hasLearners=true

#organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev&hasLearners=false

#organizationAddLearner?role=admin&userName=Seev%20Admin&organizationName=Seev
```

---

## 📚 Gopele Admin Routes (Content Creation)

**Auto-login:** `role=gopeleAdmin&userName=Master%20Admin`

### Courses Dashboard
```
#courses?role=gopeleAdmin&userName=Master%20Admin

#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin
```

### Subject Management
```
#createNewSubject?role=gopeleAdmin&userName=Master%20Admin

#emptySubject?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology

#subjectWithLessons?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology

#topicDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology

#updateSubject?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science
```

### Lesson Creation
```
#createLessonDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Introduction

#lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space

#lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space&pageNumber=1
```

### Quiz Creation
```
#quizCreator?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space

#quizCreated?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space
```

### Institute Management (Gopele Admin)
```
#addInstitute?role=gopeleAdmin&userName=Master%20Admin
```

---

## 📋 Complete Routes by Category

### Category 1: Public Access (No Login)
1. `#landing`
2. `#login`
3. `#adminLogin`
4. `#organizationLogin`

### Category 2: Student (19 routes)
5. `#home?role=student&userName=John%20Doe`
6. `#dashboard?role=student&userName=John%20Doe`
7. `#subject?role=student&userName=John%20Doe&subjectName=Space`
8. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1`
9. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=The%20Solar%20System&lessonNumber=2`
10. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Stars%20and%20Galaxies&lessonNumber=3`
11. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Planets&lessonNumber=4`
12. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Moons&lessonNumber=5`
13. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Asteroids&lessonNumber=6`
14. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Comets&lessonNumber=7`
15. `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=Space%20Exploration&lessonNumber=8`
16. `#aiMentor?role=student&userName=John%20Doe`
17. `#feedback?role=student&userName=John%20Doe`

### Category 3: Teacher (3 routes)
18. `#teacherDashboard?role=teacher&userName=Ms.%20Smith`
19. `#createInstitute?role=teacher&userName=Ms.%20Smith`
20. `#addStudents?role=teacher&userName=Ms.%20Smith&instituteName=Demo%20School&instituteCode=INST-DEMO`

### Category 4: School Admin (9 routes)
21. `#adminDashboard?role=admin&userName=Administrator`
22. `#institutesPage?role=admin&userName=Administrator`
23. `#instituteDetails?role=admin&userName=Administrator&instituteName=Springfield%20High`
24. `#activateSubjects?role=admin&userName=Administrator&instituteName=Springfield%20High`
25. `#teamDetails?role=admin&userName=Administrator`
26. `#addMember?role=admin&userName=Administrator`
27. `#accountReady?role=admin&userName=Administrator`
28. `#addInstitute?role=admin&userName=Administrator`

### Category 5: Organization Admin (10 routes)
29. `#organizationSetPassword?organizationName=Seev`
30. `#organizationSize?organizationName=Seev`
31. `#organizationIndustry?organizationName=Seev`
32. `#organizationCongratulations?organizationName=Seev`
33. `#organizationDashboardLanding?role=admin&userName=Seev%20Admin&organizationName=Seev`
34. `#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev`
35. `#organizationCourses?role=admin&userName=Seev%20Admin&organizationName=Seev`
36. `#organizationInstructors?role=admin&userName=Seev%20Admin&organizationName=Seev`
37. `#organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev&hasLearners=true`
38. `#organizationAddLearner?role=admin&userName=Seev%20Admin&organizationName=Seev`

### Category 6: Gopele Admin (15 routes)
39. `#courses?role=gopeleAdmin&userName=Master%20Admin`
40. `#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin`
41. `#createNewSubject?role=gopeleAdmin&userName=Master%20Admin`
42. `#emptySubject?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology`
43. `#subjectWithLessons?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology`
44. `#topicDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology`
45. `#updateSubject?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science`
46. `#createLessonDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Introduction`
47. `#lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space`
48. `#quizCreator?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space`
49. `#quizCreated?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space`
50. `#addInstitute?role=gopeleAdmin&userName=Master%20Admin`

---

## 🧪 Quick Test URLs (Copy & Paste)

### Test Student Experience
```
http://localhost:5173/#home?role=student&userName=John%20Doe
http://localhost:5173/#dashboard?role=student&userName=John%20Doe
http://localhost:5173/#subject?role=student&userName=John%20Doe&subjectName=Space
http://localhost:5173/#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1
http://localhost:5173/#aiMentor?role=student&userName=John%20Doe
http://localhost:5173/#feedback?role=student&userName=John%20Doe
```

### Test Teacher Experience
```
http://localhost:5173/#teacherDashboard?role=teacher&userName=Ms.%20Smith
http://localhost:5173/#createInstitute?role=teacher&userName=Ms.%20Smith
http://localhost:5173/#addStudents?role=teacher&userName=Ms.%20Smith&instituteName=Demo%20School&instituteCode=INST-DEMO
```

### Test Organization Experience
```
http://localhost:5173/#organizationLogin
http://localhost:5173/#organizationSetPassword?organizationName=Seev
http://localhost:5173/#organizationSize?organizationName=Seev
http://localhost:5173/#organizationIndustry?organizationName=Seev
http://localhost:5173/#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
http://localhost:5173/#organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev&hasLearners=true
```

### Test School Admin Experience
```
http://localhost:5173/#adminDashboard?role=admin&userName=Administrator
http://localhost:5173/#institutesPage?role=admin&userName=Administrator
http://localhost:5173/#instituteDetails?role=admin&userName=Administrator&instituteName=Springfield%20High
http://localhost:5173/#teamDetails?role=admin&userName=Administrator
```

### Test Gopele Admin Experience
```
http://localhost:5173/#courses?role=gopeleAdmin&userName=Master%20Admin
http://localhost:5173/#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin
http://localhost:5173/#createNewSubject?role=gopeleAdmin&userName=Master%20Admin
http://localhost:5173/#subjectWithLessons?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology
http://localhost:5173/#lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space
http://localhost:5173/#quizCreator?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space
```

---

## 📱 Mobile Testing

Add `&mobile=true` to any route to test mobile version, or resize browser to < 768px width.

### Mobile Examples
```
http://localhost:5173/#home?role=student&userName=John%20Doe&mobile=true
http://localhost:5173/#teacherDashboard?role=teacher&userName=Ms.%20Smith&mobile=true
http://localhost:5173/#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev&mobile=true
```

---

## 🔍 URL Parameters Reference

### Common Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `role` | string | User role | `student`, `teacher`, `admin`, `gopeleAdmin` |
| `userName` | string | User display name | `John%20Doe`, `Ms.%20Smith` |
| `subjectName` | string | Subject name | `Space`, `Science` |
| `subjectDescription` | string | Subject description | `Learn%20about%20space` |
| `lessonName` | string | Lesson name | `What%20is%20Space` |
| `lessonNumber` | number | Lesson number (1-8) | `1`, `2`, `3` |
| `totalLessons` | number | Total lessons in course | `8` |
| `instituteName` | string | Institute name | `Demo%20School` |
| `instituteCode` | string | Institute code | `INST-DEMO` |
| `organizationName` | string | Organization name | `Seev` |
| `organizationSize` | string | Organization size | `50-200` |
| `organizationIndustry` | string | Organization industry | `Technology` |
| `hasLearners` | boolean | Has learners flag | `true`, `false` |
| `topicName` | string | Topic name | `Biology` |
| `chapterName` | string | Chapter name | `Introduction` |
| `lessonTitle` | string | Lesson title | `What%20is%20Space` |
| `pageNumber` | number | Page number | `1`, `2` |

### URL Encoding

Use `%20` for spaces in URLs:
- `John Doe` → `John%20Doe`
- `What is Space` → `What%20is%20Space`
- `Springfield High` → `Springfield%20High`

---

## 🎯 Testing Workflows

### 1. Student Learning Journey
```
1. #landing
2. #login
3. #home?role=student&userName=John%20Doe
4. #subject?role=student&userName=John%20Doe&subjectName=Space
5. #lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1
6. #aiMentor?role=student&userName=John%20Doe
7. #feedback?role=student&userName=John%20Doe
```

### 2. Teacher Institute Setup
```
1. #landing
2. #login
3. #teacherDashboard?role=teacher&userName=Ms.%20Smith
4. #createInstitute?role=teacher&userName=Ms.%20Smith
5. #addStudents?role=teacher&userName=Ms.%20Smith&instituteName=Demo%20School&instituteCode=INST-DEMO
```

### 3. Organization Onboarding
```
1. #organizationLogin
2. #organizationSetPassword?organizationName=Seev
3. #organizationSize?organizationName=Seev
4. #organizationIndustry?organizationName=Seev
5. #organizationCongratulations?organizationName=Seev
6. #organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
7. #organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev&hasLearners=false
8. #organizationAddLearner?role=admin&userName=Seev%20Admin&organizationName=Seev
```

### 4. Content Creation Journey
```
1. #courses?role=gopeleAdmin&userName=Master%20Admin
2. #coursesPopulated?role=gopeleAdmin&userName=Master%20Admin
3. #createNewSubject?role=gopeleAdmin&userName=Master%20Admin
4. #subjectWithLessons?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology
5. #lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space
6. #quizCreator?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space
7. #quizCreated?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Biology&chapterName=Intro&lessonTitle=What%20is%20Space
```

### 5. School Admin Management
```
1. #adminDashboard?role=admin&userName=Administrator
2. #institutesPage?role=admin&userName=Administrator
3. #instituteDetails?role=admin&userName=Administrator&instituteName=Springfield%20High
4. #activateSubjects?role=admin&userName=Administrator&instituteName=Springfield%20High
5. #teamDetails?role=admin&userName=Administrator
6. #addMember?role=admin&userName=Administrator
```

---

## 📊 Route Statistics

| Category | Count | Example Screen |
|----------|-------|----------------|
| Public | 4 | Landing, Login |
| Student | 10+ | Home, Lesson, AI Mentor |
| Teacher | 3 | Dashboard, Create Institute |
| School Admin | 8 | Admin Dashboard, Institutes |
| Organization | 10 | Dashboard, Learners |
| Gopele Admin | 12 | Courses, Content Editor, Quiz |
| **Total** | **50+** | All screens |

---

## 🚀 Quick Start Testing

### For Local Development
1. Run `npm run dev`
2. Open `http://localhost:5173`
3. Copy any URL from this guide
4. Paste into browser address bar
5. Test the screen!

### For Production
Replace `http://localhost:5173` with your production domain.

---

## 💡 Pro Tips

### Tip 1: Bookmark Common Routes
Save frequently used routes as browser bookmarks:
- Student Home
- Teacher Dashboard
- Organization Dashboard
- Content Editor

### Tip 2: Use Browser DevTools
- Open DevTools (F12)
- Check Console for navigation logs
- Monitor state changes
- Debug access issues

### Tip 3: Test Mobile
- Resize browser window < 768px
- Use DevTools Device Mode
- Test touch interactions
- Verify responsive design

### Tip 4: Share Routes
Copy full URLs to share exact states with team members:
```
http://localhost:5173/#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1
```

### Tip 5: Use navigation.html
Open `navigation.html` in browser for visual navigation helper with all routes.

---

## 🔗 Related Documentation

- **ROUTING_GUIDE.md** - Complete routing system documentation
- **LOCAL_SETUP_GUIDE.md** - Local development setup
- **FIGMA_MAKE_NAVIGATION.md** - Figma Make navigation guide
- **ROLE_ACCESS_EXPLAINED.md** - Role-based access control
- **navigation.html** - Visual navigation helper

---

**Created:** November 1, 2025
**Last Updated:** November 1, 2025
**Status:** ✅ Complete & Ready for Testing
**Total Routes:** 50+

---

**Happy Testing! 🎉**
