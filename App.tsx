import React, { useState, useEffect } from "react";
import { ITINERARY_DATA, TICKETS } from "./data";
import { ItineraryItem, ActivityType, DaySchedule } from "./types";
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
  Trash2,
  Ticket as TicketIcon,
  ExternalLink,
  Heart,
  ArrowUp,
  ArrowDown,
  Settings2,
  RotateCcw,
} from "lucide-react";

const STORAGE_KEY = "sevilla_trip_progress_v1";

// --- Icons Helper ---
const getActivityIcon = (type: ActivityType) => {
  switch (type) {
    case ActivityType.FOOD:
      return <Utensils className="w-4 h-4 text-orange-600" />;
    case ActivityType.SIGHTSEEING:
      return <Camera className="w-4 h-4 text-blue-600" />;
    case ActivityType.SHOPPING:
      return <ShoppingBag className="w-4 h-4 text-pink-600" />;
    case ActivityType.TRANSPORT:
      return <Train className="w-4 h-4 text-slate-600" />;
    case ActivityType.ENTERTAINMENT:
      return <Music className="w-4 h-4 text-purple-600" />;
    case ActivityType.CHRISTMAS_MARKET:
      return <span className="text-base">🎄</span>;
    default:
      return <Info className="w-4 h-4 text-gray-600" />;
  }
};

const getBadgeColor = (type: ActivityType) => {
  switch (type) {
    case ActivityType.FOOD:
      return "bg-orange-100 text-orange-800 border-orange-200";
    case ActivityType.SIGHTSEEING:
      return "bg-blue-100 text-blue-800 border-blue-200";
    case ActivityType.SHOPPING:
      return "bg-pink-100 text-pink-800 border-pink-200";
    case ActivityType.TRANSPORT:
      return "bg-slate-100 text-slate-800 border-slate-200";
    case ActivityType.ENTERTAINMENT:
      return "bg-purple-100 text-purple-800 border-purple-200";
    case ActivityType.CHRISTMAS_MARKET:
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const App: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [activeTabId, setActiveTabId] = useState<string>(ITINERARY_DATA[0].id);
  const [showConfetti, setShowConfetti] = useState(false);

  // State for itinerary data to allow reordering
  const [itineraryData, setItineraryData] = useState<DaySchedule[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sevilla_itinerary_data_v1");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse saved itinerary", e);
        }
      }
    }
    return ITINERARY_DATA;
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem(
      "sevilla_itinerary_data_v1",
      JSON.stringify(itineraryData)
    );
  }, [itineraryData]);

  const moveItem = (
    dayId: string,
    itemId: string,
    direction: "up" | "down"
  ) => {
    setItineraryData((prev) => {
      const newData = [...prev];
      const dayIndex = newData.findIndex((d) => d.id === dayId);
      if (dayIndex === -1) return prev;

      const day = { ...newData[dayIndex] };
      const items = [...day.items];
      const itemIndex = items.findIndex((i) => i.id === itemId);
      if (itemIndex === -1) return prev;

      if (direction === "up" && itemIndex > 0) {
        [items[itemIndex], items[itemIndex - 1]] = [
          items[itemIndex - 1],
          items[itemIndex],
        ];
      } else if (direction === "down" && itemIndex < items.length - 1) {
        [items[itemIndex], items[itemIndex + 1]] = [
          items[itemIndex + 1],
          items[itemIndex],
        ];
      } else {
        return prev;
      }

      day.items = items;
      newData[dayIndex] = day;
      return newData;
    });
  };

  const resetOrder = () => {
    if (
      window.confirm(
        "Sıralamayı ve içerikleri varsayılana döndürmek istediğine emin misin?"
      )
    ) {
      setItineraryData(ITINERARY_DATA);
      localStorage.removeItem("sevilla_itinerary_data_v1");
      setIsEditMode(false);
    }
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItem = (id: string) => {
    setCompletedItems((prev) => {
      const isCompleted = prev.includes(id);
      if (!isCompleted) {
        // Trigger simple confetti effect visual via state
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
        return [...prev, id];
      } else {
        return prev.filter((itemId) => itemId !== id);
      }
    });
  };

  const resetProgress = () => {
    if (
      window.confirm("Tüm işaretlemeleri sıfırlamak istediğine emin misin?")
    ) {
      setCompletedItems([]);
    }
  };

  // Calculate overall progress
  const totalItems = itineraryData.flatMap((d) => d.items).length;
  const completedCount = completedItems.length;
  const progressPercentage = Math.round((completedCount / totalItems) * 100);

  // Calculate days left
  const daysLeft = Math.ceil(
    (new Date("2025-12-16").getTime() - new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const activeDay = itineraryData.find((d) => d.id === activeTabId);
  const isTicketsTab = activeTabId === "tickets";

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-rose-100 pb-20 relative overflow-x-hidden">
      {/* Confetti Overlay */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-6xl animate-bounce">🎉</div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm border-b border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-1">
                Sevilla Gezisi
              </h1>
              <div className="flex items-center gap-2 text-rose-500 mb-1">
                <span className="text-xl font-bold font-serif">
                  Burak & İdil
                </span>
                <Heart className="w-5 h-5 fill-rose-500 animate-pulse" />
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                <span>16 - 20 Aralık • Such A Lovely Day</span>
                {daysLeft > 0 && (
                  <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-[10px] font-bold border border-orange-200">
                    {daysLeft} Gün Kaldı! ⏳
                  </span>
                )}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 mb-2">
                <button
                  onClick={() => setIsEditMode(!isEditMode)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isEditMode
                      ? "bg-seville-100 text-seville-700 ring-2 ring-seville-200"
                      : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  }`}
                  title={
                    isEditMode ? "Düzenlemeyi Bitir" : "Sıralamayı Düzenle"
                  }
                >
                  <Settings2 className="w-4 h-4" />
                </button>
                {isEditMode && (
                  <button
                    onClick={resetOrder}
                    className="p-1.5 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                    title="Varsayılana Dön"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="text-sm font-semibold text-seville-600">
                %{progressPercentage} Tamamlandı
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                {completedCount}/{totalItems} Aktivite
              </p>
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
          {itineraryData.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveTabId(day.id)}
              className={`flex-1 whitespace-nowrap px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTabId === day.id
                  ? "border-seville-500 text-seville-700 bg-orange-50/50"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
              }`}
            >
              {day.date.split(" ")[0]} {day.date.split(" ")[1]}
            </button>
          ))}
          <button
            onClick={() => setActiveTabId("tickets")}
            className={`flex-1 whitespace-nowrap px-6 py-3 text-sm font-medium transition-colors border-b-2 flex items-center gap-2 ${
              activeTabId === "tickets"
                ? "border-seville-500 text-seville-700 bg-orange-50/50"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            }`}
          >
            <TicketIcon className="w-4 h-4" />
            Biletler
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Day Header Info */}
        {activeDay && (
          <div className="mb-6 animate-fade-in">
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              {activeDay.date}
            </h2>
            <p className="text-slate-600 text-sm">{activeDay.title}</p>
          </div>
        )}

        {isTicketsTab && (
          <div className="mb-6 animate-fade-in">
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              Bilet Özeti
            </h2>
            <p className="text-slate-600 text-sm">
              Şimdiden alınması gerekenler ve linkler.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {isTicketsTab
            ? // Tickets List
              TICKETS.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`bg-white rounded-xl border border-slate-200 shadow-sm p-5 ${
                    ticket.isUrgent ? "border-l-4 border-l-red-500" : ""
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                        {ticket.title}
                        {ticket.isUrgent && (
                          <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
                            Acil
                          </span>
                        )}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1">
                        {ticket.description}
                      </p>
                    </div>
                    <a
                      href={ticket.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-seville-600 hover:text-seville-700 bg-seville-50 px-3 py-2 rounded-lg transition-colors"
                    >
                      Satın Al <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))
            : // Itinerary Items
              activeDay?.items.map((item, index) => {
                const isCompleted = completedItems.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`group relative bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                      isCompleted
                        ? "border-slate-200 opacity-75 shadow-none"
                        : "border-slate-200 shadow-sm hover:shadow-md hover:border-seville-300"
                    } ${
                      item.isBonus
                        ? "border-dashed border-slate-300 bg-slate-50/50"
                        : ""
                    } ${
                      item.isOptional
                        ? "border-dashed border-slate-300 bg-slate-50/30"
                        : ""
                    } ${
                      item.isUrgent
                        ? "border-red-300 bg-red-50/50 shadow-md"
                        : ""
                    }`}
                    onClick={() => toggleItem(item.id)}
                  >
                    {/* Visual "Strikethrough" effect overlay */}
                    {isCompleted && (
                      <div className="absolute inset-0 bg-slate-50/40 z-10 pointer-events-none" />
                    )}

                    <div className="p-4 md:p-5 flex gap-3 md:gap-4">
                      {/* Checkbox Column */}
                      <div className="flex-shrink-0 pt-1 z-20">
                        <button
                          className={`rounded-full transition-colors duration-200 focus:outline-none ${
                            isCompleted
                              ? "text-seville-500"
                              : "text-slate-300 hover:text-seville-400"
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
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getBadgeColor(
                              item.type
                            )}`}
                          >
                            {getActivityIcon(item.type)}
                            <span className="ml-1.5">{item.type}</span>
                          </span>
                          {item.time && (
                            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                              {item.time}
                            </span>
                          )}
                          {(item.title.includes("Outlet") ||
                            item.title.includes("SEÇENEK")) && (
                            <span className="text-xs font-bold text-fuchsia-600 bg-fuchsia-50 px-2 py-0.5 rounded border border-fuchsia-100 flex items-center gap-1">
                              <ShoppingBag className="w-3 h-3" />
                              Fırsat
                            </span>
                          )}
                          {item.isBonus && (
                            <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                              Bonus
                            </span>
                          )}
                          {item.isOptional && (
                            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                              Opsiyonel
                            </span>
                          )}
                          {item.isUrgent && (
                            <span className="text-xs font-semibold text-red-700 bg-red-100 px-2 py-0.5 rounded border border-red-200 animate-pulse">
                              KRİTİK
                            </span>
                          )}
                        </div>

                        {/* Title & Desc */}
                        <div>
                          <h3
                            className={`font-bold text-lg leading-tight ${
                              isCompleted
                                ? "text-slate-500 line-through decoration-slate-400"
                                : "text-slate-900"
                            }`}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`mt-1 text-sm ${
                              isCompleted ? "text-slate-400" : "text-slate-600"
                            }`}
                          >
                            {item.description}
                          </p>
                        </div>

                        {/* Metadata: Price & Location */}
                        {(item.price || item.location) && (
                          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-500 mt-3">
                            {item.price && (
                              <div className="flex items-center text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 shadow-sm text-xs">
                                <Euro className="w-3.5 h-3.5 mr-1" />
                                {item.price}
                              </div>
                            )}
                            {item.location && (
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                  item.location
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-seville-600 transition-colors hover:underline decoration-seville-300 underline-offset-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MapPin className="w-3.5 h-3.5 mr-1" />
                                {item.location}
                              </a>
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
                                <li
                                  key={idx}
                                  className="leading-snug opacity-90"
                                >
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Reorder Controls */}
                      {isEditMode && activeDay && (
                        <div className="flex flex-col gap-1 justify-center border-l pl-3 ml-2 border-slate-100">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              moveItem(activeDay.id, item.id, "up");
                            }}
                            disabled={index === 0}
                            className="p-2 md:p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-seville-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors touch-manipulation"
                          >
                            <ArrowUp className="w-6 h-6 md:w-5 md:h-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              moveItem(activeDay.id, item.id, "down");
                            }}
                            disabled={index === activeDay.items.length - 1}
                            className="p-2 md:p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-seville-600 disabled:opacity-30 disabled:hover:bg-transparent transition-colors touch-manipulation"
                          >
                            <ArrowDown className="w-6 h-6 md:w-5 md:h-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>

        {/* Empty State / End of List */}
        {!isTicketsTab && (
          <div className="mt-12 text-center pb-8">
            <p className="text-slate-400 text-sm">
              Günün sonu. İyi dinlenmeler! 🌙
            </p>
          </div>
        )}
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
