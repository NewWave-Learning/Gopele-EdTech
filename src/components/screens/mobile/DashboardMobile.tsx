import { useState } from 'react';
import { Trophy, Star, Flame, TrendingUp, Brain, MessageCircle, Download, Wifi, WifiOff, ChevronRight, Home, BarChart3, Users, User } from 'lucide-react';
import { Card } from '../../ui/card';
import { Progress } from '../../ui/progress';
import { Badge } from '../../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';

interface DashboardMobileProps {
  onNavigate: (screen: string, data?: any) => void;
}

type Language = 'en' | 'vn' | 'sp' | 'nd' | 'ss';

const translations = {
  en: {
    dashboard: 'Dashboard',
    streak: 'Day Streak',
    weeklyGoal: 'Weekly Goal',
    stars: 'Stars',
    nextLesson: 'Next Best Lesson',
    progress: 'Progress',
    achievements: 'Achievements',
    leaderboard: 'Leaderboard',
    support: 'Support',
    offline: 'Offline',
    online: 'Online',
    class: 'Class',
    school: 'School',
    region: 'Region',
    askTutor: 'Ask AI Tutor',
    moodCheck: 'How are you feeling?',
    continueLesson: 'Continue',
    startLesson: 'Start',
    lessons: 'Lessons',
    overview: 'Overview',
    myProgress: 'My Progress',
    profile: 'Profile',
  },
  vn: {
    dashboard: 'Dashboard',
    streak: 'Masiku',
    weeklyGoal: 'Ndivho',
    stars: 'Nyaluwo',
    nextLesson: 'Lessono',
    progress: 'Mbveledziso',
    achievements: 'Zwikovhiwa',
    leaderboard: 'Mukovhe',
    support: 'Thuso',
    offline: 'Offline',
    online: 'Online',
    class: 'Tshigwada',
    school: 'Tshikolo',
    region: 'Vhundu',
    askTutor: 'Vhudzisa AI',
    moodCheck: 'U zwivha hani?',
    continueLesson: 'Tshimbila',
    startLesson: 'Thoma',
    lessons: 'Dzillessono',
    overview: 'Vhonele',
    myProgress: 'Mbveledziso',
    profile: 'Profile',
  },
  sp: {
    dashboard: 'Dashboard',
    streak: 'Matšatši',
    weeklyGoal: 'Nepo',
    stars: 'Dinaledi',
    nextLesson: 'Thuto',
    progress: 'Tšwelopele',
    achievements: 'Diphihlelelo',
    leaderboard: 'Lenanethoto',
    support: 'Thušo',
    offline: 'Offline',
    online: 'Online',
    class: 'Phapošing',
    school: 'Sekolong',
    region: 'Lefelo',
    askTutor: 'Botša AI',
    moodCheck: 'O ikwa bjang?',
    continueLesson: 'Tšwela pele',
    startLesson: 'Thoma',
    lessons: 'Dithuto',
    overview: 'Kakaretšo',
    myProgress: 'Tšwelopele',
    profile: 'Profile',
  },
  nd: {
    dashboard: 'Dashboard',
    streak: 'Amalanga',
    weeklyGoal: 'Inhloso',
    stars: 'Izinkanyezi',
    nextLesson: 'Isifundo',
    progress: 'Inqubekela',
    achievements: 'Impumelelo',
    leaderboard: 'Abaholi',
    support: 'Usizo',
    offline: 'Offline',
    online: 'Online',
    class: 'Ikilasi',
    school: 'Isikolo',
    region: 'Isifunda',
    askTutor: 'Buza AI',
    moodCheck: 'Uzizwa kanjani?',
    continueLesson: 'Qhubeka',
    startLesson: 'Qalisa',
    lessons: 'Izifundo',
    overview: 'Ukubuka',
    myProgress: 'Inqubekela',
    profile: 'Profile',
  },
  ss: {
    dashboard: 'Dashboard',
    streak: 'Emalanga',
    weeklyGoal: 'Inhloso',
    stars: 'Tinkanyeti',
    nextLesson: 'Sifundvo',
    progress: 'Kuchubeka',
    achievements: 'Timphumelelo',
    leaderboard: 'Etiholi',
    support: 'Lusito',
    offline: 'Offline',
    online: 'Online',
    class: 'Ikilasi',
    school: 'Sikolo',
    region: 'Sifundza',
    askTutor: 'Butsa AI',
    moodCheck: 'Utiva kanjani?',
    continueLesson: 'Chubeka',
    startLesson: 'Cala',
    lessons: 'Tifundvo',
    overview: 'Kubuka',
    myProgress: 'Kuchubeka',
    profile: 'Profile',
  },
};

export function DashboardMobile({ onNavigate }: DashboardMobileProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState('overview');
  const [isOffline, setIsOffline] = useState(false);
  
  const t = translations[language];

  // Mock data
  const userData = {
    name: 'Thabo',
    streak: 12,
    weeklyGoal: 75,
    starsEarned: 245,
    level: 8,
  };

  const subjects = [
    { id: '1', name: 'Space', progress: 75, color: '#1f60d8', lessons: 8, completed: 6 },
    { id: '2', name: 'Animals', progress: 45, color: '#22c55e', lessons: 10, completed: 4 },
    { id: '3', name: 'Weather', progress: 90, color: '#f4d35e', lessons: 6, completed: 5 },
    { id: '4', name: 'Plants', progress: 30, color: '#10b981', lessons: 8, completed: 2 },
  ];

  const nextLesson = {
    subject: 'Space',
    title: 'The Solar System',
    lessonNumber: 7,
    difficulty: 'Medium',
    duration: '15 min',
  };

  const achievements = [
    { id: '1', name: 'Week Warrior', icon: '🔥', earned: true },
    { id: '2', name: 'Star Collector', icon: '⭐', earned: true },
    { id: '3', name: 'Perfect Score', icon: '💯', earned: true },
    { id: '4', name: 'Fast Learner', icon: '⚡', earned: false },
    { id: '5', name: 'Curious Mind', icon: '🧠', earned: false },
    { id: '6', name: 'Marathon', icon: '🏃', earned: false },
  ];

  const leaderboardData = {
    class: [
      { rank: 1, name: 'Amara K.', points: 1250, avatar: '👧' },
      { rank: 2, name: 'You', points: 1180, avatar: '👦', isCurrentUser: true },
      { rank: 3, name: 'Kagiso M.', points: 1050, avatar: '🧑' },
    ],
    school: [
      { rank: 15, name: 'You', points: 1180, avatar: '👦', isCurrentUser: true },
      { rank: 16, name: 'Sipho N.', points: 1175, avatar: '🧑' },
    ],
    region: [
      { rank: 142, name: 'You', points: 1180, avatar: '👦', isCurrentUser: true },
      { rank: 143, name: 'Zanele T.', points: 1178, avatar: '👧' },
    ],
  };

  return (
    <div className="bg-white min-h-screen w-full max-w-[430px] relative pb-20">
      {/* Header */}
      <div className="bg-[#1f60d8] px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-white text-[24px] font-['Poppins:SemiBold',_sans-serif]">
              {t.dashboard}
            </h1>
            <p className="text-white/80 text-[14px]">Hi, {userData.name}! 👋</p>
          </div>
          
          <button
            onClick={() => setIsOffline(!isOffline)}
            className="p-2 bg-white/20 rounded-lg"
          >
            {isOffline ? <WifiOff className="size-5 text-white" /> : <Wifi className="size-5 text-white" />}
          </button>
        </div>

        {/* Language Selector */}
        <div className="flex gap-1.5 mb-4 overflow-x-auto">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
              language === 'en' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('vn')}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
              language === 'vn' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white'
            }`}
          >
            VN
          </button>
          <button
            onClick={() => setLanguage('sp')}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
              language === 'sp' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white'
            }`}
          >
            SP
          </button>
          <button
            onClick={() => setLanguage('nd')}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
              language === 'nd' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white'
            }`}
          >
            ND
          </button>
          <button
            onClick={() => setLanguage('ss')}
            className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-colors whitespace-nowrap ${
              language === 'ss' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white'
            }`}
          >
            SS
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <Flame className="size-5 text-[#f59e0b] mb-1" />
            <p className="text-white text-[18px] font-['Poppins:SemiBold',_sans-serif]">
              {userData.streak}
            </p>
            <p className="text-white/80 text-[10px]">{t.streak}</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <TrendingUp className="size-5 text-[#22c55e] mb-1" />
            <p className="text-white text-[18px] font-['Poppins:SemiBold',_sans-serif]">
              {userData.weeklyGoal}%
            </p>
            <p className="text-white/80 text-[10px]">{t.weeklyGoal}</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <Star className="size-5 text-[#f4d35e] mb-1" />
            <p className="text-white text-[18px] font-['Poppins:SemiBold',_sans-serif]">
              {userData.starsEarned}
            </p>
            <p className="text-white/80 text-[10px]">{t.stars}</p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full grid grid-cols-4 sticky top-0 z-10 bg-white border-b">
          <TabsTrigger value="overview" className="flex flex-col gap-1 py-3">
            <Home className="size-4" />
            <span className="text-[10px]">{t.overview}</span>
          </TabsTrigger>
          <TabsTrigger value="progress" className="flex flex-col gap-1 py-3">
            <BarChart3 className="size-4" />
            <span className="text-[10px]">{t.myProgress}</span>
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="flex flex-col gap-1 py-3">
            <Users className="size-4" />
            <span className="text-[10px]">{t.leaderboard}</span>
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex flex-col gap-1 py-3">
            <User className="size-4" />
            <span className="text-[10px]">{t.profile}</span>
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="p-4 space-y-4 mt-0">
          {/* AI Recommended Lesson */}
          <Card className="p-4 border-2 border-[#1f60d8]">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="size-4 text-[#1f60d8]" />
              <h3 className="text-[14px] font-['Poppins:SemiBold',_sans-serif]">
                {t.nextLesson}
              </h3>
              <Badge className="bg-[#1f60d8] text-white text-[10px] ml-auto">AI</Badge>
            </div>

            <div className="bg-gradient-to-br from-[#f8f9ff] to-[#f0f1ff] p-4 rounded-lg">
              <p className="text-[12px] text-[#717182] mb-1">
                {nextLesson.subject} • Lesson {nextLesson.lessonNumber}
              </p>
              <h4 className="text-[16px] font-['Poppins:SemiBold',_sans-serif] mb-2">
                {nextLesson.title}
              </h4>
              <div className="flex items-center gap-3 text-[12px] text-[#717182] mb-3">
                <span>⏱ {nextLesson.duration}</span>
                <span>📊 {nextLesson.difficulty}</span>
              </div>
              <button
                onClick={() => onNavigate('lesson', { 
                  subjectName: nextLesson.subject,
                  lessonNumber: nextLesson.lessonNumber,
                  lessonName: nextLesson.title 
                })}
                className="w-full bg-[#1f60d8] hover:bg-[#1850b8] text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-['Poppins:SemiBold',_sans-serif]"
              >
                {t.continueLesson}
                <ChevronRight className="size-4" />
              </button>
            </div>
          </Card>

          {/* Continue Learning */}
          <div>
            <h3 className="text-[16px] font-['Poppins:SemiBold',_sans-serif] mb-3">
              Continue Learning
            </h3>
            <div className="space-y-3">
              {subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="border-2 border-[#e9ebef] rounded-lg p-4 hover:border-[#1f60d8] transition-colors"
                  onClick={() => onNavigate('subject', { subjectName: subject.name })}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-['Poppins:SemiBold',_sans-serif]">{subject.name}</h4>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`size-3 ${i < Math.floor(subject.progress / 33) ? 'text-[#f4d35e] fill-[#f4d35e]' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <Progress value={subject.progress} className="h-2 mb-2" />
                  <p className="text-[12px] text-[#717182]">
                    {subject.completed}/{subject.lessons} {t.lessons} • {subject.progress}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <Card className="p-4">
            <h3 className="text-[16px] font-['Poppins:SemiBold',_sans-serif] mb-3">
              {t.achievements}
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`p-3 rounded-lg text-center ${
                    achievement.earned
                      ? 'bg-gradient-to-br from-[#f4d35e] to-[#f9d977]'
                      : 'bg-gray-100 opacity-50'
                  }`}
                >
                  <div className="text-[24px] mb-1">{achievement.icon}</div>
                  <p className="text-[10px] font-['Poppins:Medium',_sans-serif]">
                    {achievement.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Support */}
          <Card className="p-4">
            <h3 className="text-[16px] font-['Poppins:SemiBold',_sans-serif] mb-3">
              {t.support}
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => onNavigate('aiMentor')}
                className="w-full bg-[#1f60d8] hover:bg-[#1850b8] text-white p-3 rounded-lg flex items-center gap-2"
              >
                <Brain className="size-4" />
                <span className="text-[14px] font-['Poppins:Medium',_sans-serif]">{t.askTutor}</span>
                <ChevronRight className="size-4 ml-auto" />
              </button>

              <div>
                <p className="text-[14px] font-['Poppins:Medium',_sans-serif] mb-2">
                  {t.moodCheck}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-[24px]">
                    😊
                  </button>
                  <button className="flex-1 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-[24px]">
                    😐
                  </button>
                  <button className="flex-1 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-[24px]">
                    😔
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Progress Tab */}
        <TabsContent value="progress" className="p-4 space-y-4 mt-0">
          <Card className="p-4">
            <h3 className="text-[16px] font-['Poppins:SemiBold',_sans-serif] mb-4">
              Subject Progress
            </h3>
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div key={subject.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: subject.color }}
                      />
                      <span className="font-['Poppins:Medium',_sans-serif] text-[14px]">
                        {subject.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-[#717182]">
                      <span>{subject.completed}/{subject.lessons}</span>
                      <span className="font-['Poppins:SemiBold',_sans-serif] text-[#232323]">
                        {subject.progress}%
                      </span>
                    </div>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {isOffline ? (
            <Card className="p-4 bg-[#fef8e8]">
              <div className="flex items-center gap-3 mb-2">
                <WifiOff className="size-5 text-[#1f60d8]" />
                <p className="font-['Poppins:SemiBold',_sans-serif]">Offline Mode Active</p>
              </div>
              <p className="text-[12px] text-[#717182]">
                You can access downloaded lessons without internet
              </p>
            </Card>
          ) : (
            <Card className="p-4 bg-[#fef8e8]">
              <div className="flex items-center gap-3 mb-2">
                <Download className="size-5 text-[#1f60d8]" />
                <div className="flex-1">
                  <p className="font-['Poppins:SemiBold',_sans-serif] text-[14px]">
                    Download for offline
                  </p>
                  <p className="text-[12px] text-[#717182]">Learn without internet</p>
                </div>
              </div>
              <button className="w-full bg-[#1f60d8] hover:bg-[#1850b8] text-white px-4 py-2 rounded-lg text-[14px] mt-2">
                Download All
              </button>
            </Card>
          )}
        </TabsContent>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="p-4 mt-0">
          <Card className="p-4">
            <h3 className="text-[16px] font-['Poppins:SemiBold',_sans-serif] mb-3">
              {t.leaderboard}
            </h3>
            <Tabs defaultValue="class" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-4">
                <TabsTrigger value="class" className="text-[12px]">{t.class}</TabsTrigger>
                <TabsTrigger value="school" className="text-[12px]">{t.school}</TabsTrigger>
                <TabsTrigger value="region" className="text-[12px]">{t.region}</TabsTrigger>
              </TabsList>
              
              <TabsContent value="class" className="space-y-2 mt-0">
                {leaderboardData.class.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      entry.isCurrentUser ? 'bg-[#f4d35e]/20 border-2 border-[#f4d35e]' : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-['Poppins:SemiBold',_sans-serif] ${
                      entry.rank === 1 ? 'bg-[#f4d35e] text-white' :
                      entry.rank === 2 ? 'bg-gray-300 text-white' :
                      entry.rank === 3 ? 'bg-[#cd7f32] text-white' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {entry.rank}
                    </div>
                    <span className="text-[18px]">{entry.avatar}</span>
                    <div className="flex-1">
                      <p className="font-['Poppins:Medium',_sans-serif] text-[14px]">{entry.name}</p>
                      <p className="text-[11px] text-[#717182]">{entry.points} pts</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="school" className="space-y-2 mt-0">
                {leaderboardData.school.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      entry.isCurrentUser ? 'bg-[#f4d35e]/20 border-2 border-[#f4d35e]' : 'bg-gray-50'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[12px] font-['Poppins:SemiBold',_sans-serif] text-gray-600">
                      {entry.rank}
                    </div>
                    <span className="text-[18px]">{entry.avatar}</span>
                    <div className="flex-1">
                      <p className="font-['Poppins:Medium',_sans-serif] text-[14px]">{entry.name}</p>
                      <p className="text-[11px] text-[#717182]">{entry.points} pts</p>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="region" className="space-y-2 mt-0">
                {leaderboardData.region.map((entry) => (
                  <div
                    key={entry.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      entry.isCurrentUser ? 'bg-[#f4d35e]/20 border-2 border-[#f4d35e]' : 'bg-gray-50'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-[12px] font-['Poppins:SemiBold',_sans-serif] text-gray-600">
                      {entry.rank}
                    </div>
                    <span className="text-[18px]">{entry.avatar}</span>
                    <div className="flex-1">
                      <p className="font-['Poppins:Medium',_sans-serif] text-[14px]">{entry.name}</p>
                      <p className="text-[11px] text-[#717182]">{entry.points} pts</p>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </Card>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile" className="p-4 space-y-4 mt-0">
          <Card className="p-4">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-[#1f60d8] flex items-center justify-center text-[40px] mb-3">
                👦
              </div>
              <h2 className="text-[20px] font-['Poppins:SemiBold',_sans-serif]">{userData.name}</h2>
              <p className="text-[14px] text-[#717182]">Level {userData.level} Learner</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-[#e8f1fd] p-3 rounded-lg text-center">
                <p className="text-[20px] font-['Poppins:SemiBold',_sans-serif] text-[#1f60d8]">
                  {userData.streak}
                </p>
                <p className="text-[11px] text-[#717182]">Day Streak</p>
              </div>
              <div className="bg-[#fef8e8] p-3 rounded-lg text-center">
                <p className="text-[20px] font-['Poppins:SemiBold',_sans-serif] text-[#d4a017]">
                  {userData.starsEarned}
                </p>
                <p className="text-[11px] text-[#717182]">Total Stars</p>
              </div>
              <div className="bg-[#e8f1fd] p-3 rounded-lg text-center">
                <p className="text-[20px] font-['Poppins:SemiBold',_sans-serif] text-[#1f60d8]">
                  {achievements.filter(a => a.earned).length}
                </p>
                <p className="text-[11px] text-[#717182]">Badges</p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('home')}
              className="w-full bg-white border-2 border-[#e9ebef] hover:border-[#1f60d8] p-3 rounded-lg transition-colors"
            >
              <span className="font-['Poppins:Medium',_sans-serif]">Back to Home</span>
            </button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
