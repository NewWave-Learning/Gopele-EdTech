import { useState } from 'react';
import { Trophy, Star, Flame, TrendingUp, Brain, MessageCircle, Download, Wifi, WifiOff, ChevronRight, Lock } from 'lucide-react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar } from '../ui/avatar';

interface DashboardProps {
  onNavigate: (screen: string, data?: any) => void;
}

type Language = 'en' | 'vn' | 'sp' | 'nd' | 'ss';

const translations = {
  en: {
    dashboard: 'My Dashboard',
    streak: 'Day Streak',
    weeklyGoal: 'Weekly Goal',
    stars: 'Stars Earned',
    nextLesson: 'Next Best Lesson',
    progress: 'My Progress',
    achievements: 'Achievements',
    leaderboard: 'Leaderboard',
    support: 'Support',
    offline: 'Offline Mode',
    online: 'Online',
    synced: 'All synced',
    class: 'Class',
    school: 'School',
    region: 'Region',
    askTutor: 'Ask AI Tutor',
    moodCheck: 'How are you feeling?',
    continueLesson: 'Continue',
    startLesson: 'Start Lesson',
    lessons: 'Lessons',
    completed: 'Completed',
    inProgress: 'In Progress',
    difficulty: 'Difficulty',
  },
  vn: {
    dashboard: 'Dashboard yanga',
    streak: 'Masiku',
    weeklyGoal: 'Ndivho ya Vhege',
    stars: 'Nyaluwo',
    nextLesson: 'Lessono yo tevhelaho',
    progress: 'Mbveledziso yanga',
    achievements: 'Zwikovhiwa',
    leaderboard: 'Mukovhe',
    support: 'Thuso',
    offline: 'Offline',
    online: 'Online',
    synced: 'Zwo swikelela',
    class: 'Tshigwada',
    school: 'Tshikolo',
    region: 'Vhundu',
    askTutor: 'Vhudzisa Mugudi wa AI',
    moodCheck: 'U zwivha hani?',
    continueLesson: 'Tshimbila phanḓa',
    startLesson: 'Thoma Lessono',
    lessons: 'Dzillessono',
    completed: 'Zwo Fhedziswa',
    inProgress: 'Kha u Bveledzisa',
    difficulty: 'Vhusukumedzi',
  },
  sp: {
    dashboard: 'Dashboard ya ka',
    streak: 'Matšatši',
    weeklyGoal: 'Nepo ya Beke',
    stars: 'Dinaledi',
    nextLesson: 'Thuto e latelago',
    progress: 'Tšwelopele ya ka',
    achievements: 'Diphihlelelo',
    leaderboard: 'Lenanethoto',
    support: 'Thušo',
    offline: 'Offline',
    online: 'Online',
    synced: 'Tše nyalantšwago',
    class: 'Phapošing',
    school: 'Sekolong',
    region: 'Lefelo',
    askTutor: 'Botša Morutiši wa AI',
    moodCheck: 'O ikwa bjang?',
    continueLesson: 'Tšwela pele',
    startLesson: 'Thoma Thuto',
    lessons: 'Dithuto',
    completed: 'Tše Phethagetšego',
    inProgress: 'E tšwela pele',
    difficulty: 'Bothata',
  },
  nd: {
    dashboard: 'Dashboard yami',
    streak: 'Amalanga',
    weeklyGoal: 'Inhloso yeviki',
    stars: 'Izinkanyezi',
    nextLesson: 'Isifundo esilandelako',
    progress: 'Inqubekela phambili yami',
    achievements: 'Impumelelo',
    leaderboard: 'Uhlu lwabaholi',
    support: 'Usizo',
    offline: 'Offline',
    online: 'Online',
    synced: 'Kuvumelanisiwe',
    class: 'Ekilasini',
    school: 'Esikolo',
    region: 'Isifunda',
    askTutor: 'Buza umfundisi we-AI',
    moodCheck: 'Uzizwa kanjani?',
    continueLesson: 'Qhubeka',
    startLesson: 'Qalisa isifundo',
    lessons: 'Izifundo',
    completed: 'Okuphelele',
    inProgress: 'Okusaqhubeka',
    difficulty: 'Ubunzima',
  },
  ss: {
    dashboard: 'Dashboard yami',
    streak: 'Emalanga',
    weeklyGoal: 'Inhloso yeviki',
    stars: 'Tinkanyeti',
    nextLesson: 'Sifundvo lesilatelako',
    progress: 'Kuchubeka kwami',
    achievements: 'Timphumelelo',
    leaderboard: 'Luhla lwetiholi',
    support: 'Lusito',
    offline: 'Offline',
    online: 'Online',
    synced: 'Kuvumelanisiwe',
    class: 'Ekilasini',
    school: 'Esikolweni',
    region: 'Sifundza',
    askTutor: 'Butsa umfundzisi we-AI',
    moodCheck: 'Utiva kanjani?',
    continueLesson: 'Chubeka',
    startLesson: 'Cala sifundvo',
    lessons: 'Tifundvo',
    completed: 'Kuphelelile',
    inProgress: 'Kusachubeka',
    difficulty: 'Bulukhuni',
  },
};

export function Dashboard({ onNavigate }: DashboardProps) {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState('overview');
  const [isOffline, setIsOffline] = useState(false);
  
  const t = translations[language];

  // Mock data
  const userData = {
    name: 'Thabo',
    streak: 12,
    weeklyGoal: 75, // percentage
    starsEarned: 245,
    level: 8,
    totalLessons: 24,
    completedLessons: 18,
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
    stars: 3,
  };

  const achievements = [
    { id: '1', name: 'Week Warrior', icon: '🔥', earned: true, description: '7-day streak' },
    { id: '2', name: 'Star Collector', icon: '⭐', earned: true, description: '100 stars' },
    { id: '3', name: 'Perfect Score', icon: '💯', earned: true, description: '100% on 5 lessons' },
    { id: '4', name: 'Fast Learner', icon: '⚡', earned: false, description: 'Complete in under 10 min' },
    { id: '5', name: 'Curious Mind', icon: '🧠', earned: false, description: 'Ask 50 questions' },
    { id: '6', name: 'Marathon', icon: '🏃', earned: false, description: '30-day streak' },
  ];

  const leaderboardData = {
    class: [
      { rank: 1, name: 'Amara K.', points: 1250, avatar: '👧' },
      { rank: 2, name: 'You (Thabo)', points: 1180, avatar: '👦', isCurrentUser: true },
      { rank: 3, name: 'Kagiso M.', points: 1050, avatar: '🧑' },
      { rank: 4, name: 'Lerato S.', points: 980, avatar: '👧' },
      { rank: 5, name: 'Neo P.', points: 875, avatar: '👦' },
    ],
    school: [
      { rank: 15, name: 'You (Thabo)', points: 1180, avatar: '👦', isCurrentUser: true },
      { rank: 16, name: 'Sipho N.', points: 1175, avatar: '🧑' },
    ],
    region: [
      { rank: 142, name: 'You (Thabo)', points: 1180, avatar: '👦', isCurrentUser: true },
      { rank: 143, name: 'Zanele T.', points: 1178, avatar: '👧' },
    ],
  };

  return (
    <div className="bg-white min-h-screen w-full max-w-[1440px] relative">
      {/* Header */}
      <div className="bg-[#1f60d8] px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-[32px] font-['Poppins:SemiBold',_sans-serif]">
              {t.dashboard}
            </h1>
            <p className="text-white/80 text-[16px]">Welcome back, {userData.name}! 👋</p>
          </div>
          
          {/* Language Selector */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-2 rounded-lg text-[14px] transition-colors ${
                language === 'en' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('vn')}
              className={`px-3 py-2 rounded-lg text-[14px] transition-colors ${
                language === 'vn' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Tshivenda
            </button>
            <button
              onClick={() => setLanguage('sp')}
              className={`px-3 py-2 rounded-lg text-[14px] transition-colors ${
                language === 'sp' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Sepedi
            </button>
            <button
              onClick={() => setLanguage('nd')}
              className={`px-3 py-2 rounded-lg text-[14px] transition-colors ${
                language === 'nd' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              isiNdebele
            </button>
            <button
              onClick={() => setLanguage('ss')}
              className={`px-3 py-2 rounded-lg text-[14px] transition-colors ${
                language === 'ss' ? 'bg-[#f4d35e] text-[#232323]' : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              siSwati
            </button>
          </div>

          {/* Offline/Online Status */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOffline(!isOffline)}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-white transition-colors"
            >
              {isOffline ? <WifiOff className="size-5" /> : <Wifi className="size-5" />}
              <span>{isOffline ? t.offline : t.online}</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/30 p-3 rounded-full">
                <Flame className="size-6 text-[#f59e0b]" />
              </div>
              <div>
                <p className="text-white/80 text-[14px]">{t.streak}</p>
                <p className="text-white text-[24px] font-['Poppins:SemiBold',_sans-serif]">
                  {userData.streak}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/30 p-3 rounded-full">
                <TrendingUp className="size-6 text-[#22c55e]" />
              </div>
              <div className="flex-1">
                <p className="text-white/80 text-[14px] mb-1">{t.weeklyGoal}</p>
                <Progress value={userData.weeklyGoal} className="h-2 bg-white/30" />
                <p className="text-white text-[14px] mt-1">{userData.weeklyGoal}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/30 p-3 rounded-full">
                <Star className="size-6 text-[#f4d35e]" />
              </div>
              <div>
                <p className="text-white/80 text-[14px]">{t.stars}</p>
                <p className="text-white text-[24px] font-['Poppins:SemiBold',_sans-serif]">
                  {userData.starsEarned}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Next Lesson & Progress */}
          <div className="col-span-2 space-y-6">
            {/* AI Recommended Next Lesson */}
            <Card className="p-6 border-2 border-[#1f60d8] shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="size-5 text-[#1f60d8]" />
                    <h3 className="text-[20px] font-['Poppins:SemiBold',_sans-serif]">
                      {t.nextLesson}
                    </h3>
                  </div>
                  <p className="text-[#717182] text-[14px]">AI-powered recommendation based on your progress</p>
                </div>
                <Badge className="bg-[#1f60d8] text-white">Recommended</Badge>
              </div>

              <div className="bg-gradient-to-br from-[#f8f9ff] to-[#f0f1ff] p-6 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-[#717182] text-[14px] mb-1">{nextLesson.subject} • Lesson {nextLesson.lessonNumber}</p>
                    <h4 className="text-[24px] font-['Poppins:SemiBold',_sans-serif] mb-3">
                      {nextLesson.title}
                    </h4>
                    <div className="flex items-center gap-4 text-[14px] text-[#717182]">
                      <span>⏱ {nextLesson.duration}</span>
                      <span>📊 {nextLesson.difficulty}</span>
                      <span>⭐ {nextLesson.stars} stars possible</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('lesson', { 
                      subjectName: nextLesson.subject,
                      lessonNumber: nextLesson.lessonNumber,
                      lessonName: nextLesson.title 
                    })}
                    className="bg-[#1f60d8] hover:bg-[#1850b8] text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-colors font-['Poppins:SemiBold',_sans-serif]"
                  >
                    {t.continueLesson}
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </Card>

            {/* Subject Progress */}
            <Card className="p-6">
              <h3 className="text-[20px] font-['Poppins:SemiBold',_sans-serif] mb-4">
                {t.progress}
              </h3>
              <div className="space-y-4">
                {subjects.map((subject) => (
                  <div key={subject.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: subject.color }}
                        />
                        <span className="font-['Poppins:Medium',_sans-serif]">{subject.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-[#717182]">
                        <span>{subject.completed}/{subject.lessons} {t.lessons}</span>
                        <span className="font-['Poppins:SemiBold',_sans-serif] text-[#232323]">
                          {subject.progress}%
                        </span>
                      </div>
                    </div>
                    <Progress 
                      value={subject.progress} 
                      className="h-2"
                      style={{ 
                        ['--progress-background' as any]: subject.color 
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Download for Offline */}
              {!isOffline && (
                <div className="mt-6 p-4 bg-[#fef8e8] rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Download className="size-5 text-[#1f60d8]" />
                    <div>
                      <p className="font-['Poppins:Medium',_sans-serif]">Download for offline learning</p>
                      <p className="text-[14px] text-[#717182]">Access your lessons without internet</p>
                    </div>
                  </div>
                  <button className="bg-[#1f60d8] hover:bg-[#1850b8] text-white px-4 py-2 rounded-lg transition-colors">
                    Download All
                  </button>
                </div>
              )}
            </Card>

            {/* Lessons Grid */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[20px] font-['Poppins:SemiBold',_sans-serif]">
                  Continue Learning
                </h3>
                <Tabs defaultValue="all" className="w-auto">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="progress">{t.inProgress}</TabsTrigger>
                    <TabsTrigger value="completed">{t.completed}</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {subjects.slice(0, 4).map((subject) => (
                  <div 
                    key={subject.id}
                    className="border-2 border-[#e9ebef] rounded-xl p-4 hover:border-[#1f60d8] transition-colors cursor-pointer"
                    onClick={() => onNavigate('subject', { subjectName: subject.name })}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-['Poppins:SemiBold',_sans-serif]">{subject.name}</h4>
                      {subject.progress === 100 ? (
                        <Trophy className="size-5 text-[#f4d35e]" />
                      ) : (
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`size-4 ${i < Math.floor(subject.progress / 33) ? 'text-[#f4d35e] fill-[#f4d35e]' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <Progress value={subject.progress} className="h-2 mb-2" />
                    <p className="text-[14px] text-[#717182]">
                      {subject.completed} of {subject.lessons} lessons
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Achievements, Leaderboard, Support */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-[20px] font-['Poppins:SemiBold',_sans-serif] mb-4">
                {t.achievements}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-xl text-center transition-all ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-[#f4d35e] to-[#f9d977] shadow-lg'
                        : 'bg-gray-100 opacity-50'
                    }`}
                  >
                    <div className="text-[32px] mb-2">{achievement.icon}</div>
                    <p className="text-[12px] font-['Poppins:Medium',_sans-serif]">
                      {achievement.name}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Leaderboard */}
            <Card className="p-6">
              <h3 className="text-[20px] font-['Poppins:SemiBold',_sans-serif] mb-4">
                {t.leaderboard}
              </h3>
              <Tabs defaultValue="class" className="w-full">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="class">{t.class}</TabsTrigger>
                  <TabsTrigger value="school">{t.school}</TabsTrigger>
                  <TabsTrigger value="region">{t.region}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="class" className="mt-4">
                  <div className="space-y-2">
                    {leaderboardData.class.map((entry) => (
                      <div
                        key={entry.rank}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          entry.isCurrentUser ? 'bg-[#f4d35e]/20 border-2 border-[#f4d35e]' : 'bg-gray-50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-['Poppins:SemiBold',_sans-serif] ${
                          entry.rank === 1 ? 'bg-[#f4d35e] text-white' :
                          entry.rank === 2 ? 'bg-gray-300 text-white' :
                          entry.rank === 3 ? 'bg-[#cd7f32] text-white' :
                          'bg-gray-200 text-gray-600'
                        }`}>
                          {entry.rank}
                        </div>
                        <span className="text-[20px]">{entry.avatar}</span>
                        <div className="flex-1">
                          <p className="font-['Poppins:Medium',_sans-serif]">{entry.name}</p>
                          <p className="text-[12px] text-[#717182]">{entry.points} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="school" className="mt-4">
                  <div className="space-y-2">
                    {leaderboardData.school.map((entry) => (
                      <div
                        key={entry.rank}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          entry.isCurrentUser ? 'bg-[#f4d35e]/20 border-2 border-[#f4d35e]' : 'bg-gray-50'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-['Poppins:SemiBold',_sans-serif] text-gray-600">
                          {entry.rank}
                        </div>
                        <span className="text-[20px]">{entry.avatar}</span>
                        <div className="flex-1">
                          <p className="font-['Poppins:Medium',_sans-serif]">{entry.name}</p>
                          <p className="text-[12px] text-[#717182]">{entry.points} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="region" className="mt-4">
                  <div className="space-y-2">
                    {leaderboardData.region.map((entry) => (
                      <div
                        key={entry.rank}
                        className={`flex items-center gap-3 p-3 rounded-lg ${
                          entry.isCurrentUser ? 'bg-[#f4d35e]/20 border-2 border-[#f4d35e]' : 'bg-gray-50'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-['Poppins:SemiBold',_sans-serif] text-gray-600">
                          {entry.rank}
                        </div>
                        <span className="text-[20px]">{entry.avatar}</span>
                        <div className="flex-1">
                          <p className="font-['Poppins:Medium',_sans-serif]">{entry.name}</p>
                          <p className="text-[12px] text-[#717182]">{entry.points} pts</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* Support & Quick Actions */}
            <Card className="p-6">
              <h3 className="text-[20px] font-['Poppins:SemiBold',_sans-serif] mb-4">
                {t.support}
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('aiMentor')}
                  className="w-full bg-[#1f60d8] hover:bg-[#1850b8] text-white p-4 rounded-xl flex items-center gap-3 transition-colors"
                >
                  <Brain className="size-5" />
                  <span className="font-['Poppins:Medium',_sans-serif]">{t.askTutor}</span>
                  <ChevronRight className="size-5 ml-auto" />
                </button>

                <button className="w-full bg-[#fef8e8] hover:bg-[#fef4d6] p-4 rounded-xl flex items-center gap-3 transition-colors">
                  <MessageCircle className="size-5 text-[#1f60d8]" />
                  <div className="flex-1 text-left">
                    <p className="font-['Poppins:Medium',_sans-serif]">{t.moodCheck}</p>
                    <p className="text-[12px] text-[#717182]">Help us personalize your learning</p>
                  </div>
                </button>

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
            </Card>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 left-8">
        <button
          onClick={() => onNavigate('home')}
          className="bg-white shadow-lg hover:shadow-xl px-6 py-3 rounded-xl flex items-center gap-2 transition-all border-2 border-[#e9ebef]"
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-['Poppins:Medium',_sans-serif]">Back to Home</span>
        </button>
      </div>
    </div>
  );
}
