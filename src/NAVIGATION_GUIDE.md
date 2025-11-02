# Navigation Guide

## Overview
Interactive navigation has been added to all screens in the Gopele language learning application. Users can now navigate between screens by clicking buttons and navigation elements.

## Features Implemented

### 1. **Responsive Navigation System**
- Automatic detection of viewport size (mobile vs desktop)
- Switches between mobile and desktop screens based on screen width (768px breakpoint)
- State management for current screen and navigation data

### 2. **Navigation Hook** (`/hooks/useNavigation.ts`)
- Central navigation state management
- Stores current screen, navigation data (subject/lesson info), and viewport detection
- Single source of truth for navigation state

### 3. **Interactive Elements**

#### Landing Page
- ✅ "Get Started" buttons → Navigate to Login screen
- ✅ "Contact Us" buttons → Placeholder (ready for implementation)
- ✅ Responsive for both desktop and mobile

#### Login Screen
- ✅ "Sign In" button → Navigate to Home screen
- ✅ "Sign Up" link → Placeholder (ready for implementation)
- ✅ Responsive for both desktop and mobile

#### Home Screen
- ✅ **Navigation Bar Links:**
  - "Home" → Navigate to Home (active state shown)
  - "Learn" → Ready for implementation
  - "AI Mentor" → Ready for implementation
- ✅ **Subject Cards:**
  - Science card → Navigate to Subject screen (Science)
  - English card → Navigate to Subject screen (English)
  - Mathematics card → Navigate to Subject screen (Mathematics)
- ✅ **Continue Learning Card:**
  - Click to navigate to Lesson screen
- ✅ Hover effects on all clickable elements
- ✅ Responsive for both desktop and mobile

#### Subject Screen
- ✅ **Back Navigation:**
  - "Back to All Subjects" → Navigate to Home screen
- ✅ **Navigation Bar Links:**
  - Same as Home screen
- ✅ **Continue Learning Button:**
  - Navigate to Lesson screen
- ✅ **Dynamic subject name** display from navigation data
- ✅ Hover effects and transitions
- ✅ Responsive for both desktop and mobile

#### Lesson Screen
- ✅ **Navigation Bar Links:**
  - "Home" → Navigate to Home screen
  - "Learn" → Active state shown
  - "AI Mentor" → Ready for implementation
- ✅ **Start Lesson Button:**
  - Ready for lesson content implementation
- ✅ **Save Button:**
  - Ready for save functionality
- ✅ **Dynamic lesson name** display from navigation data
- ✅ Hover effects and transitions
- ✅ Responsive for both desktop and mobile

### 4. **Navigation Data Passing**
When navigating between screens, contextual data is passed:
```typescript
// Example: Clicking Science subject card
onNavigate('subject', { 
  subjectId: 'science', 
  subjectName: 'Science' 
})

// Example: Clicking Continue Learning
onNavigate('lesson', { 
  lessonId: 'geometry-07', 
  lessonName: 'Composite Polygons' 
})
```

### 5. **Visual Feedback**
- ✅ Hover effects on all buttons (opacity changes, background color transitions)
- ✅ Cursor changes to pointer on interactive elements
- ✅ Smooth transitions (200-300ms)
- ✅ Active state indicators in navigation bars

## Screen Flow

```
Landing Page
    ↓ (Get Started)
Login Screen
    ↓ (Sign In)
Home Screen
    ↓ (Subject Cards)
Subject Screen
    ↓ (Continue Learning / Lesson Cards)
Lesson Screen
    ↑ (Back Navigation)
    ← (Nav Bar: Home link)
```

## Debug Panel
A debug panel appears in the top-right corner showing:
- Current screen name
- Viewport type (Desktop/Mobile)
- Subject name (if applicable)
- Lesson name (if applicable)
- Quick navigation buttons for testing

## Next Steps for Implementation

### Ready to Add:
1. **AI Mentor Screen** - Navigation links already in place
2. **Learn/Browse Screen** - Navigation links ready
3. **User Profile** - Click on profile picture
4. **Saved Lessons** - Save button functionality
5. **Lesson Content** - Start Lesson button implementation
6. **Sign Up Flow** - Sign Up link ready
7. **Contact Form** - Contact Us button ready

### Future Enhancements:
- Browser history integration (back/forward buttons)
- URL routing for shareable links
- Transition animations between screens
- Loading states during navigation
- Authentication state management
- Progress tracking across sessions

## Technical Details

### Dependencies
- React hooks (`useState`, `useEffect`)
- TypeScript for type safety
- Tailwind CSS for styling

### File Structure
```
/hooks/useNavigation.ts          # Navigation hook
/App.tsx                          # Main app with navigation
/components/screens/             # Desktop screens
/components/screens/mobile/      # Mobile screens
```

### Type Definitions
```typescript
type Screen = 'landing' | 'login' | 'home' | 'subject' | 'lesson';

type NavigationData = {
  subjectId?: string;
  subjectName?: string;
  lessonId?: string;
  lessonName?: string;
};
```

## Usage Example

```typescript
// In any screen component
function MyScreen({ onNavigate }: ScreenProps) {
  return (
    <button onClick={() => onNavigate('home')}>
      Go Home
    </button>
  );
}
```

## Notes
- All screens now accept `onNavigate` prop
- Screens that receive data also accept `data` prop
- Responsive design automatically switches between mobile/desktop versions
- All navigation is client-side (no page reloads)
