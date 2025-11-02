# Gopele EdTech - URL Routing Guide

The Gopele EdTech application uses hash-based URL routing for easy navigation during development and production.

---

## 🚀 Quick Start

Simply append `#screenName` to your URL to navigate to any screen:

```
http://localhost:3000/#landing
http://localhost:3000/#login
http://localhost:3000/#home
```

---

## 📱 URL Format

### Basic Format
```
#screenName
```

### With Parameters
```
#screenName?param1=value1&param2=value2
```

### With Authentication
```
#screenName?role=student&userName=John%20Doe
```

### Complete Example
```
#subject?role=student&userName=John%20Doe&subjectName=Space
```

---

## 🔐 Authentication via URL

### Login as Different Roles

**Student:**
```
#home?role=student&userName=John%20Doe
```

**Teacher:**
```
#teacherDashboard?role=teacher&userName=Ms.%20Smith
```

**Admin (School):**
```
#adminDashboard?role=admin&userName=Administrator
```

**Gopele Admin:**
```
#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin
```

**Organization Admin:**
```
#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
```

---

## 📋 Complete Route List

### 🏠 Landing & Login Screens

| Screen | URL |
|--------|-----|
| Landing Page | `#landing` |
| Student Login | `#login` |
| Admin Login | `#adminLogin` |
| Organization Login | `#organizationLogin` |

---

### 🎓 Student Screens

**Login as student first:**
```
#home?role=student&userName=John%20Doe
```

| Screen | URL |
|--------|-----|
| Home | `#home?role=student&userName=John%20Doe` |
| Dashboard | `#dashboard?role=student&userName=John%20Doe` |
| AI Mentor | `#aiMentor?role=student&userName=John%20Doe` |
| Subject (Space) | `#subject?role=student&userName=John%20Doe&subjectName=Space` |
| Lesson | `#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1` |
| Feedback | `#feedback?role=student&userName=John%20Doe` |

---

### 👩‍🏫 Teacher Screens

**Login as teacher first:**
```
#teacherDashboard?role=teacher&userName=Ms.%20Smith
```

| Screen | URL |
|--------|-----|
| Teacher Dashboard | `#teacherDashboard?role=teacher&userName=Ms.%20Smith` |
| Create Institute | `#createInstitute?role=teacher&userName=Ms.%20Smith` |
| Add Students (Success) | `#addStudents?role=teacher&userName=Ms.%20Smith&instituteName=Demo%20School&instituteCode=INST-DEMO` |

---

### 🏢 Organization Onboarding Flow

| Step | Screen | URL |
|------|--------|-----|
| 1 | Organization Login | `#organizationLogin` |
| 2 | Set Password | `#organizationSetPassword?organizationName=Seev` |
| 3 | Organization Size | `#organizationSize?organizationName=Seev` |
| 4 | Select Industry | `#organizationIndustry?organizationName=Seev&organizationSize=11-30` |
| 5 | Congratulations | `#organizationCongratulations?role=admin&userName=Seev%20Admin&organizationName=Seev&organizationSize=11-30&organizationIndustry=Education` |
| 6 | Dashboard Landing | `#organizationDashboardLanding?role=admin&userName=Seev%20Admin&organizationName=Seev` |

---

### 🏢 Organization Dashboard Screens

**Login as organization admin:**
```
#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
```

| Screen | URL |
|--------|-----|
| Dashboard (Setup) | `#organizationDashboardLanding?role=admin&userName=Seev%20Admin&organizationName=Seev` |
| Dashboard (Data) | `#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev` |
| Courses | `#organizationCourses?role=admin&userName=Seev%20Admin&organizationName=Seev` |
| Instructors | `#organizationInstructors?role=admin&userName=Seev%20Admin&organizationName=Seev` |
| Learners (Empty) | `#organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev` |
| Learners (With Data) | `#organizationLearners?role=admin&userName=Seev%20Admin&organizationName=Seev&hasLearners=true` |
| Add Learner | `#organizationAddLearner?role=admin&userName=Seev%20Admin&organizationName=Seev` |

---

### 🔧 Admin (School) Screens

**Login as admin:**
```
#adminDashboard?role=admin&userName=Administrator
```

| Screen | URL |
|--------|-----|
| Admin Login Screen | `#adminLogin` |
| Admin Dashboard | `#adminDashboard?role=admin&userName=Administrator` |
| Institutions List | `#institutesPage?role=admin&userName=Administrator` |
| Add Institute | `#addInstitute?role=admin&userName=Administrator` |
| Team Management | `#teamDetails?role=admin&userName=Administrator` |
| Institute Details | `#instituteDetails?role=admin&userName=Administrator&instituteName=New%20Horizon%20High` |
| Activate Subjects | `#activateSubjects?role=admin&userName=Administrator&instituteName=New%20Horizon%20High` |

---

### 📚 Gopele Admin - Course Management

**Login as Gopele Admin:**
```
#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin
```

| Screen | URL |
|--------|-----|
| Courses (Empty) | `#courses?role=gopeleAdmin&userName=Master%20Admin` |
| Courses (Populated) | `#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin` |
| Create New Subject | `#createNewSubject?role=gopeleAdmin&userName=Master%20Admin` |
| Empty Subject | `#emptySubject?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&subjectDescription=Test%20subject%20description` |
| Subject With Lessons | `#subjectWithLessons?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology` |
| Update Subject | `#updateSubject?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology` |

---

### 📝 Gopele Admin - Content Creation Flow

Complete lesson creation workflow:

| Step | Screen | URL |
|------|--------|-----|
| 1 | Topic Details | `#topicDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology` |
| 2 | Create Lesson Details | `#createLessonDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space` |
| 3 | Lesson Content Editor | `#lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space&lessonTitle=What%20is%20Space&pageNumber=1` |
| 4 | Quiz Creator | `#quizCreator?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space&lessonTitle=What%20is%20Space` |
| 5 | Quiz Created (Success) | `#quizCreated?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space&lessonTitle=What%20is%20Space` |

---

## 📱 Mobile vs Desktop

The app automatically detects screen width and shows mobile versions when width < 768px.

### Force Mobile View
- Resize browser window to < 768px width
- Use browser DevTools device emulation (F12 → Toggle Device Toolbar)
- Set to iPhone, Galaxy, or custom 375px width

### Mobile Routes
Mobile routes automatically have `-mobile` suffix added:
- `#home` → renders `HomeMobile` on mobile devices
- `#coursesPopulated` → renders `CoursesPopulatedMobile` on mobile devices

You can also directly navigate to mobile routes:
```
#home-mobile
#coursesPopulated-mobile
```

---

## 🎯 Common Development URLs

### Quick Access Links

**Student Dashboard:**
```
#dashboard?role=student&userName=John%20Doe
```

**Teacher Dashboard:**
```
#teacherDashboard?role=teacher&userName=Ms.%20Smith
```

**Organization Dashboard:**
```
#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
```

**Gopele Admin Courses:**
```
#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin
```

**School Admin Dashboard:**
```
#adminDashboard?role=admin&userName=Administrator
```

---

## 🔍 URL Parameters Reference

### Common Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `role` | User role (student, teacher, admin, gopeleAdmin) | `role=student` |
| `userName` | Display name of user | `userName=John%20Doe` |
| `subjectName` | Name of subject | `subjectName=Science` |
| `topicName` | Name of topic | `topicName=Molecular%20Biology` |
| `lessonName` | Name of lesson | `lessonName=What%20is%20Space` |
| `lessonNumber` | Lesson number | `lessonNumber=1` |
| `organizationName` | Organization name | `organizationName=Seev` |
| `organizationSize` | Organization size | `organizationSize=11-30` |
| `organizationIndustry` | Organization industry | `organizationIndustry=Education` |
| `instituteName` | Institution name | `instituteName=New%20Horizon%20High` |
| `instituteCode` | Institution code | `instituteCode=NHS2024-EDU` |
| `hasLearners` | Boolean flag | `hasLearners=true` |
| `chapterName` | Chapter name | `chapterName=Introduction%20to%20Space` |
| `lessonTitle` | Lesson title | `lessonTitle=What%20is%20Space` |
| `pageNumber` | Page number | `pageNumber=1` |

---

## 🎨 Testing Flows

### Test Student Journey
```bash
# 1. Landing Page
#landing

# 2. Login
#login

# 3. Home (auto-login as student)
#home?role=student&userName=John%20Doe

# 4. View Subject
#subject?role=student&userName=John%20Doe&subjectName=Space

# 5. Start Lesson
#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1

# 6. Get Feedback
#feedback?role=student&userName=John%20Doe
```

### Test Organization Onboarding
```bash
# 1. Organization Login
#organizationLogin

# 2. Set Password
#organizationSetPassword?organizationName=Seev

# 3. Organization Size
#organizationSize?organizationName=Seev

# 4. Select Industry
#organizationIndustry?organizationName=Seev&organizationSize=11-30

# 5. Congratulations
#organizationCongratulations?role=admin&userName=Seev%20Admin&organizationName=Seev&organizationSize=11-30&organizationIndustry=Education

# 6. Dashboard
#organizationDashboard?role=admin&userName=Seev%20Admin&organizationName=Seev
```

### Test Content Creation Flow
```bash
# 1. Courses Dashboard
#coursesPopulated?role=gopeleAdmin&userName=Master%20Admin

# 2. Select Subject
#subjectWithLessons?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology

# 3. Add Topic
#topicDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology

# 4. Create Lesson
#createLessonDetails?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space

# 5. Add Content
#lessonContent?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space&lessonTitle=What%20is%20Space

# 6. Create Quiz
#quizCreator?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space&lessonTitle=What%20is%20Space

# 7. Success
#quizCreated?role=gopeleAdmin&userName=Master%20Admin&subjectName=Science&topicName=Molecular%20Biology&chapterName=Introduction%20to%20Space&lessonTitle=What%20is%20Space
```

---

## 🛠️ Development Tips

### Using Browser DevTools

1. **Open Console** (F12)
2. **Navigate with JavaScript:**
   ```javascript
   window.location.hash = '#home?role=student&userName=John%20Doe';
   ```

### Bookmark Common Routes

Create browser bookmarks for frequently used routes:
- Student Dashboard
- Teacher Dashboard
- Gopele Admin Courses
- Organization Dashboard
- Admin Dashboard

### URL Encoding

Special characters in URLs must be encoded:
- Space: `%20`
- Quotes: `%22`
- Ampersand: `%26`
- Plus: `%2B`

Example:
```
"John Doe" → John%20Doe
"Ms. Smith's Class" → Ms.%20Smith's%20Class
```

### Share URLs

You can share exact states via URL:
```
http://localhost:3000/#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1
```

Anyone opening this URL will:
1. Auto-login as "John Doe" (student)
2. Navigate to Space subject
3. Open "What is Space?" lesson

---

## 🚨 Troubleshooting

### Screen Not Loading?
- Check URL encoding (spaces should be `%20`)
- Ensure role parameter is included if screen requires authentication
- Verify screen name spelling

### Auto-Login Not Working?
- Include both `role` and `userName` parameters
- Check capitalization of role value

### Parameters Not Passing?
- Use `&` to separate multiple parameters
- Encode special characters
- Check parameter names match expected values

### Mobile View Not Showing?
- Resize browser to < 768px width
- Use DevTools device toolbar (F12 → Toggle Device Toolbar)
- Check that mobile component exists for that route

---

## 📚 Additional Resources

- **NAVIGATION_GUIDE.md** - Component navigation patterns
- **ROLE_BASED_NAVIGATION.md** - Role-based routing details
- **QUICK_START_GUIDE.md** - Getting started guide
- **COMPLETE_MOBILE_SCREENS_SUMMARY.md** - All mobile screens
- **CONTENT_CREATION_FLOW.md** - Content creation workflow

---

## 🎉 Example: Full Student Experience

Copy and paste these URLs in sequence to test the full student flow:

1. **Landing Page**
   ```
   http://localhost:3000/#landing
   ```

2. **Login Screen**
   ```
   http://localhost:3000/#login
   ```

3. **Home Dashboard**
   ```
   http://localhost:3000/#home?role=student&userName=John%20Doe
   ```

4. **View Dashboard**
   ```
   http://localhost:3000/#dashboard?role=student&userName=John%20Doe
   ```

5. **Select Subject (Space)**
   ```
   http://localhost:3000/#subject?role=student&userName=John%20Doe&subjectName=Space
   ```

6. **Start Lesson 1**
   ```
   http://localhost:3000/#lesson?role=student&userName=John%20Doe&subjectName=Space&lessonName=What%20is%20Space&lessonNumber=1
   ```

7. **AI Mentor Help**
   ```
   http://localhost:3000/#aiMentor?role=student&userName=John%20Doe
   ```

8. **View Feedback**
   ```
   http://localhost:3000/#feedback?role=student&userName=John%20Doe
   ```

---

**Last Updated:** November 1, 2025
**Version:** 2.0 - URL-Based Routing
**Status:** ✅ Production Ready
