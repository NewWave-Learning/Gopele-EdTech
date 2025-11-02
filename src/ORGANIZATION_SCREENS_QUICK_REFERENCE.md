# Organization Screens Quick Reference

## Screen Flow Diagram

```
OrganizationLogin
    ↓
OrganizationSetPassword (first-time only)
    ↓
OrganizationSize
    ↓
OrganizationIndustry
    ↓
OrganizationCongratulations
    ↓
OrganizationDashboardLanding
    ├── OrganizationCourses
    ├── OrganizationLearners → OrganizationAddLearner
    └── OrganizationInstructors
```

## All Organization Screens

| Desktop Screen | Mobile Screen | Status |
|---------------|---------------|--------|
| OrganizationLogin | OrganizationLoginMobile | ✅ Complete |
| OrganizationSetPassword | OrganizationSetPasswordMobile | ✅ Complete |
| OrganizationSize | OrganizationSizeMobile | ✅ Complete |
| OrganizationIndustry | OrganizationIndustryMobile | ✅ Complete |
| OrganizationCongratulations | OrganizationCongratulationsMobile | ✅ Complete |
| OrganizationDashboardLanding | OrganizationDashboardLandingMobile | ✅ Complete |
| OrganizationDashboard | - | Desktop only |
| OrganizationCourses | OrganizationCoursesMobile | ✅ Complete |
| OrganizationInstructors | OrganizationInstructorsMobile | ✅ Complete |
| OrganizationLearners | OrganizationLearnersMobile | ✅ Complete |
| OrganizationLearnersWithData | (integrated in mobile) | ✅ Complete |
| OrganizationAddLearner | OrganizationAddLearnerMobile | ✅ Complete |

## File Locations

### Desktop Screens
All located in: `/components/screens/`
- OrganizationLogin.tsx
- OrganizationSetPassword.tsx
- OrganizationSize.tsx
- OrganizationIndustry.tsx
- OrganizationCongratulations.tsx
- OrganizationDashboardLanding.tsx
- OrganizationDashboard.tsx
- OrganizationCourses.tsx
- OrganizationInstructors.tsx
- OrganizationLearners.tsx
- OrganizationLearnersWithData.tsx
- OrganizationAddLearner.tsx

### Mobile Screens
All located in: `/components/screens/mobile/`
- OrganizationLoginMobile.tsx
- OrganizationSetPasswordMobile.tsx
- OrganizationSizeMobile.tsx
- OrganizationIndustryMobile.tsx
- OrganizationCongratulationsMobile.tsx
- OrganizationDashboardLandingMobile.tsx
- OrganizationLearnersMobile.tsx
- OrganizationAddLearnerMobile.tsx
- OrganizationCoursesMobile.tsx
- OrganizationInstructorsMobile.tsx

## Key Features by Screen

### Login Flow
- **Login:** Email/password validation, first-time detection
- **SetPassword:** Password strength validation, confirm password
- **Size:** 8 size options, grid layout
- **Industry:** 5 industry options, vertical list
- **Congratulations:** Success message, launch button

### Dashboard Features
- **DashboardLanding:** 3 action cards, setup guidance
- **Courses:** 9 courses, activate/deactivate, search
- **Instructors:** Instructor list, add functionality, search
- **Learners:** Empty/populated states, progress tracking, add learner

## Navigation Props

All screens receive:
```typescript
interface Props {
  onNavigate: (screen: string, data?: Record<string, unknown>) => void;
  data?: {
    organizationName?: string;
    organizationSize?: string;
    organizationIndustry?: string;
    hasLearners?: boolean;
    [key: string]: any;
  };
  onLogin?: (role: UserRole, name: string) => void;
  onClose?: () => void;
}
```

## Common Components Used

- **Lucide Icons:** Menu, X, Search, Plus, Eye, EyeOff
- **Toast:** sonner@2.0.3
- **SVG Paths:** Various imports from `/imports/svg-*.ts`
- **Images:** Figma assets imported via `figma:asset/...`

## Responsive Breakpoint

Mobile screens activate when:
- Viewport width ≤ 768px (handled by useNavigation hook)
- Explicit mobile routing: `screenName-mobile`

## Common UI Patterns

### Mobile Header
```tsx
<div className="bg-white h-[70px] border-b">
  <Menu /> (left)
  <Logo /> (center)
  <Spacer /> (right)
</div>
```

### Mobile Menu
```tsx
<MobileMenu 
  isOpen={menuOpen} 
  onClose={() => setMenuOpen(false)} 
  onNavigate={onNavigate} 
/>
```

### Search Bar
```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2" />
  <input className="pl-10" />
</div>
```

## Debug Panel Quick Links

Navigate to screens using debug panel:
1. Organization Login → Start flow
2. Set Password → Password setup
3. Organization Size → Size selection
4. Organization Industry → Industry selection
5. Dashboard Landing → Main dashboard
6. Learners (Empty) → Empty state
7. Learners (With Data) → Populated state

## Testing Checklist

- [ ] Login validation works
- [ ] Password validation works
- [ ] Size selection works
- [ ] Industry selection works
- [ ] Navigation between screens works
- [ ] Mobile menu opens/closes
- [ ] Search functionality works
- [ ] Add learner form works
- [ ] Course activation works
- [ ] State persistence works
- [ ] Toast notifications appear
- [ ] Responsive layout correct

## Color Palette

- **Primary Blue:** #1f60d8
- **Hover Blue:** #1850b8
- **Yellow:** #face55 / #f4d35e
- **Text Primary:** #0b0c0c / #232323
- **Text Secondary:** #9b9b9b / #666666
- **Border:** #e0e0e0 / rgba(0,0,0,0.05)
- **Background:** #fafcfe

## Common Issues & Solutions

**Issue:** Mobile screen not showing
**Solution:** Check viewport size is ≤ 768px

**Issue:** Navigation not working
**Solution:** Check screen name matches case in App.tsx

**Issue:** Data not persisting
**Solution:** Check navigationData is passed correctly

**Issue:** Menu not closing
**Solution:** Check onClose callback is called

**Issue:** Styling inconsistent
**Solution:** Verify Tailwind classes match Gopele design system
