# Organization Mobile Screens Documentation

## Overview
This document describes the mobile versions of all organization screens that have been created for the Gopele EdTech platform. These screens provide a responsive mobile experience for the organization onboarding flow and dashboard features.

## Created Mobile Screens

### 1. OrganizationLoginMobile
**Path:** `/components/screens/mobile/OrganizationLoginMobile.tsx`
**Purpose:** Mobile login screen for organization administrators
**Features:**
- Email and password input fields
- Password visibility toggle
- Email validation
- Password validation
- "Forgot password" functionality
- First-time login detection
- Responsive layout optimized for mobile (375px width)

### 2. OrganizationSetPasswordMobile
**Path:** `/components/screens/mobile/OrganizationSetPasswordMobile.tsx`
**Purpose:** Mobile screen for setting organization password on first login
**Features:**
- Password and confirm password fields
- Password visibility toggles for both fields
- Password strength validation (min 8 chars, uppercase, lowercase, number)
- Password match validation
- Organization name display
- Responsive form layout

### 3. OrganizationSizeMobile
**Path:** `/components/screens/mobile/OrganizationSizeMobile.tsx`
**Purpose:** Mobile screen for selecting organization size
**Features:**
- 8 size options displayed in a 4-column grid
- Just me, 2-5, 6-10, 11-30, 30-50, 50-200, 200-500, 500+
- Visual selection feedback
- Disabled continue button until selection is made
- Touch-friendly buttons

### 4. OrganizationIndustryMobile
**Path:** `/components/screens/mobile/OrganizationIndustryMobile.tsx`
**Purpose:** Mobile screen for selecting organization industry
**Features:**
- Industry options: Education, Technology, Finance, Agriculture, See More
- Full-width button layout optimized for mobile
- Visual selection feedback
- Completion message
- Auto-login on completion

### 5. OrganizationCongratulationsMobile
**Path:** `/components/screens/mobile/OrganizationCongratulationsMobile.tsx`
**Purpose:** Mobile congratulations screen after onboarding completion
**Features:**
- Success illustration
- Personalized congratulations message
- Organization name display
- "Launch Gopele" button
- Centered layout optimized for mobile

### 6. OrganizationDashboardLandingMobile
**Path:** `/components/screens/mobile/OrganizationDashboardLandingMobile.tsx`
**Purpose:** Mobile dashboard landing page with setup actions
**Features:**
- Hamburger menu navigation
- Mobile-friendly sidebar menu
- Three action cards:
  - Activate a Course
  - Enroll Learners
  - Team Members
- Responsive card layout
- Touch-optimized buttons
- Welcome illustration and messaging

### 7. OrganizationLearnersMobile
**Path:** `/components/screens/mobile/OrganizationLearnersMobile.tsx`
**Purpose:** Mobile learner management screen
**Features:**
- Empty state with call-to-action
- Populated state with learner list
- Search functionality
- Progress bars for each learner
- Add learner button
- Toggle between empty and populated views
- Mobile-optimized list layout

### 8. OrganizationAddLearnerMobile
**Path:** `/components/screens/mobile/OrganizationAddLearnerMobile.tsx`
**Purpose:** Mobile modal/screen for adding new learners
**Features:**
- First name and last name fields (side-by-side)
- Email input
- Course selection dropdown
- Invitation message info
- Cancel and Add buttons
- Full-screen overlay on mobile
- Form validation

### 9. OrganizationCoursesMobile
**Path:** `/components/screens/mobile/OrganizationCoursesMobile.tsx`
**Purpose:** Mobile course catalog and activation screen
**Features:**
- Search functionality
- Course cards with images
- Course details (topics, duration)
- Activate/Deactivate toggle per course
- Mobile-optimized card layout
- Scroll-friendly list
- 9 pre-populated courses

### 10. OrganizationInstructorsMobile
**Path:** `/components/screens/mobile/OrganizationInstructorsMobile.tsx`
**Purpose:** Mobile instructor management screen
**Features:**
- Search functionality
- Instructor cards with details
- Course assignment display
- Student count per instructor
- Add instructor button
- Mobile-optimized list layout
- 5 pre-populated instructors

## Mobile Navigation Pattern

All mobile organization screens follow a consistent navigation pattern:

1. **Header Bar:**
   - Left: Hamburger menu icon
   - Center: Gopele logo
   - Right: Empty spacer (for balance)

2. **Sidebar Menu:**
   - Slides in from the left when hamburger is clicked
   - Full-screen overlay
   - Menu items: Dashboard, Courses, Instructors, Learners, Settings, Logout
   - Active state highlighting
   - Close button (X icon)

3. **Main Content:**
   - Scrollable content area
   - Consistent padding (24px)
   - Touch-optimized buttons and inputs
   - Responsive layouts

## Integration with App.tsx

All mobile screens are properly integrated into `/App.tsx` with the following routing pattern:

```typescript
case 'organizationLogin-mobile':
  return <OrganizationLoginMobile onNavigate={navigateTo} onLogin={login} />;
```

The routing automatically selects mobile versions when the viewport is mobile-sized, using the pattern:
`${currentScreen}${isMobile ? '-mobile' : ''}`

## Design Consistency

All mobile screens maintain:
- **Width:** 375px (standard mobile width)
- **Height:** 844px (standard mobile height)
- **Colors:** Gopele blue (#1f60d8) and yellow (#face55)
- **Typography:** Poppins font family
- **Spacing:** Consistent 24px padding
- **Touch Targets:** Minimum 48px height for buttons
- **Icons:** Lucide React for consistent iconography

## State Management

Mobile screens properly handle:
- Form validation states
- Empty vs populated states
- Loading states
- Error states
- Navigation data passing
- User authentication state

## Toast Notifications

All mobile screens use Sonner toast notifications for:
- Success messages
- Error messages
- Info messages
- Validation feedback

## Accessibility Features

Mobile screens include:
- Proper ARIA labels
- Semantic HTML
- Keyboard navigation support
- Touch-friendly targets
- Clear visual feedback
- Error message display

## Testing Recommendations

To test these screens:
1. Use browser dev tools to emulate mobile viewport (375x844)
2. Test the complete onboarding flow
3. Test navigation between screens
4. Test form validation
5. Test search functionality
6. Test state toggling (empty/populated)
7. Test hamburger menu navigation

## Debug Panel Usage

Use the debug panel to quickly navigate to organization screens:
- Click "Organization Login" to start the flow
- The panel shows current screen and viewport mode
- All navigation data is preserved across screens
