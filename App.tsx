import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA } from './data';
import { ItineraryItem, ActivityType } from './types';
import { 
  CheckCircle, 
  Circle, 
  MapPin, 
  Euro, 
  Info, 
  Utensils, 
  Camera, 
  ShoppingBag, 
  Train, 
  Music,
  Trash2
} from 'lucide-react';

const STORAGE_KEY = 'sevilla_trip_progress_v1';

// --- Icons Helper ---
const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.FOOD: return <Utensils className="w-4 h-4 text-orange-600" />;
    case ActivityType.SIGHTSEEING: return <Camera className="w-4 h-4 text-blue-600" />;
    case ActivityType.SHOPPING: return <ShoppingBag className="w-4 h-4 text-pink-600" />;
    case ActivityType.TRANSPORT: return <Train className="w-4 h-4 text-slate-600" />;
    case ActivityType.ENTERTAINMENT: return <Music className="w-4 h-4 text-purple-600" />;
    default: return <Info className="w-4 h-4 text-gray-600" />;
  }
};

const getBadgeColor = (type: ActivityType) => {
  switch (type) {
    case ActivityType.FOOD: return 'bg-orange-100 text-orange-800 border-orange-200';
    case ActivityType.SIGHTSEEING: return 'bg-blue-100 text-blue-800 border-blue-200';
    case ActivityType.SHOPPING: return 'bg-pink-100 text-pink-800 border-pink-200';
    case ActivityType.TRANSPORT: return 'bg-slate-100 text-slate-800 border-slate-200';
    case ActivityType.ENTERTAINMENT: return 'bg-purple-100 text-purple-800 border-purple-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

const App: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [activeTabId, setActiveTabId] = useState<string>(ITINERARY_DATA[0].id);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItem = (id: string) => {
    setCompletedItems(prev => {
      const isCompleted = prev.includes(id);
      if (!isCompleted) {
        // Trigger simple confetti effect visual via state
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
        return [...prev, id];
      } else {
        return prev.filter(itemId => itemId !== id);
      }
    });
  };

  const resetProgress = () => {
    if(window.confirm("Tüm işaretlemeleri sıfırlamak istediğine emin misin?")) {
      setCompletedItems([]);
    }
  };

  // Calculate overall progress
  const totalItems = ITINERARY_DATA.flatMap(d => d.items).length;
  const completedCount = completedItems.length;
  const progressPercentage = Math.round((completedCount / totalItems) * 100);

  const activeDay = ITINERARY_DATA.find(d => d.id === activeTabId);

  return (
    <div className="min-h-screen bg-slate-50 pb-20 relative overflow-x-hidden">
      {/* Confetti Overlay (Simple CSS animation placeholder) */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🎉</div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Sevilla Gezisi</h1>
              <p className="text-xs text-slate-500 font-medium">16 - 20 Aralık</p>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-seville-600">
                %{progressPercentage} Tamamlandı
              </div>
              <p className="text-xs text-slate-400">{completedCount}/{totalItems} Aktivite</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-seville-500 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Day Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-t border-slate-100">
          {ITINERARY_DATA.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTabId(day.id)}
              className={`flex-1 whitespace-nowrap px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTabId === day.id
                  ? 'border-seville-500 text-seville-700 bg-orange-50/50'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              {day.date.split(' ')[0]} {day.date.split(' ')[1]}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        
        {/* Day Header Info */}
        {activeDay && (
          <div className="mb-6 animate-fade-in">
            <h2 className="text-xl font-bold text-slate-800 mb-1">{activeDay.date}</h2>
            <p className="text-slate-600 text-sm">{activeDay.title}</p>
          </div>
        )}

        <div className="space-y-4">
          {activeDay?.items.map((item) => {
            const isCompleted = completedItems.includes(item.id);

            return (
              <div 
                key={item.id}
                className={`group relative bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isCompleted 
                    ? 'border-slate-200 opacity-75 shadow-none' 
                    : 'border-slate-200 shadow-sm hover:shadow-md hover:border-seville-300'
                } ${item.isBonus ? 'border-dashed border-slate-300 bg-slate-50/50' : ''}`}
                onClick={() => toggleItem(item.id)}
              >
                {/* Visual "Strikethrough" effect overlay */}
                {isCompleted && (
                  <div className="absolute inset-0 bg-slate-50/40 z-10 pointer-events-none" />
                )}

                <div className="p-5 flex gap-4">
                  {/* Checkbox Column */}
                  <div className="flex-shrink-0 pt-1 z-20">
                    <button 
                      className={`rounded-full transition-colors duration-200 focus:outline-none ${
                        isCompleted ? 'text-seville-500' : 'text-slate-300 hover:text-seville-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-7 h-7 fill-seville-50" />
                      ) : (
                        <Circle className="w-7 h-7" />
                      )}
                    </button>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow min-w-0 space-y-2">
                    {/* Header: Type Badge & Time */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getBadgeColor(item.type)}`}>
                        {getActivityIcon(item.type)}
                        <span className="ml-1.5">{item.type}</span>
                      </span>
                      {item.time && (
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {item.time}
                        </span>
                      )}
                      {item.isBonus && (
                         <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                         Bonus
                       </span>
                      )}
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h3 className={`font-bold text-lg leading-tight ${isCompleted ? 'text-slate-500 line-through decoration-slate-400' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`mt-1 text-sm ${isCompleted ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.description}
                      </p>
                    </div>

                    {/* Metadata: Price & Location */}
                    {(item.price || item.location) && (
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mt-2">
                        {item.price && (
                          <div className="flex items-center text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">
                            <Euro className="w-3.5 h-3.5 mr-1" />
                            {item.price}
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center">
                            <MapPin className="w-3.5 h-3.5 mr-1" />
                            {item.location}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tips Section */}
                    {item.tips && item.tips.length > 0 && !isCompleted && (
                      <div className="mt-3 bg-amber-50 rounded-md p-3 border border-amber-100">
                        <p className="text-xs font-bold text-amber-800 mb-1 flex items-center">
                          <Info className="w-3 h-3 mr-1" /> İpuçları
                        </p>
                        <ul className="list-disc list-inside text-xs text-amber-900 space-y-1">
                          {item.tips.map((tip, idx) => (
                            <li key={idx} className="leading-snug opacity-90">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State / End of List */}
        <div className="mt-12 text-center pb-8">
           <p className="text-slate-400 text-sm">Günün sonu. İyi dinlenmeler! 🌙</p>
        </div>
      </main>

      {/* Floating Reset Action (Hidden mainly, strictly for debugging/user reset) */}
      {completedCount > 0 && (
        <div className="fixed bottom-6 right-6 z-30">
          <button 
            onClick={resetProgress}
            className="bg-white text-slate-400 p-3 rounded-full shadow-lg border border-slate-200 hover:text-red-500 hover:bg-red-50 transition-colors"
            title="Sıfırla"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;