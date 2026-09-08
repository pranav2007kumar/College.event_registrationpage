
import React, { useState, useEffect } from 'react';
import { Event, Registration, EventCategory } from './types';
import { EVENTS } from './constants';
import EventSection from './components/EventSection';
import RegistrationForm from './components/RegistrationForm';
import RegistrationsList from './components/RegistrationsList';
import EventDetailModal from './components/EventDetailModal';

const App: React.FC = () => {
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [activeFilter, setActiveFilter] = useState<EventCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingEvent, setViewingEvent] = useState<Event | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('anokha_2026_registrations');
    if (saved) {
      try {
        setRegistrations(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse registrations", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('anokha_2026_registrations', JSON.stringify(registrations));
  }, [registrations]);

  const handleRegister = (regBase: Omit<Registration, 'id' | 'timestamp' | 'eventId' | 'eventName' | 'category'>) => {
    if (selectedEvents.length === 0) return;

    const newRegistrations: Registration[] = selectedEvents.map(event => ({
      ...regBase,
      eventId: event.id,
      eventName: event.name,
      category: event.category,
      id: `reg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
    }));

    setRegistrations(prev => [...prev, ...newRegistrations]);
    setSelectedEvents([]);
    
    setTimeout(() => {
        const listElement = document.getElementById('registrations-list');
        listElement?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const toggleEventSelection = (event: Event) => {
    setSelectedEvents(prev => {
      const isSelected = prev.some(e => e.id === event.id);
      if (isSelected) {
        return prev.filter(e => e.id !== event.id);
      } else {
        return [...prev, event];
      }
    });
  };

  const getFilteredEventsForCategory = (category: EventCategory) => {
    return EVENTS.filter(e => {
      const matchesCategory = e.category === category;
      const matchesSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            e.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const categories: EventCategory[] = ['Technical', 'Cultural', 'Sports'];

  const scrollToEvents = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('events-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalVisibleEvents = categories.reduce((acc, cat) => {
    if (activeFilter === 'All' || activeFilter === cat) {
      return acc + getFilteredEventsForCategory(cat).length;
    }
    return acc;
  }, 0);

  // Get unique recent participants for the header avatars
  const recentParticipants = Array.from(new Set(registrations.slice().reverse().map(r => r.fullName)))
    .slice(0, 3);

  const getAvatarColor = (name: string) => {
    const colors = ['bg-emerald-500', 'bg-amber-500', 'bg-indigo-500', 'bg-rose-500', 'bg-sky-500'];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="min-h-screen pb-20 selection:bg-emerald-100 selection:text-emerald-900 bg-slate-50">
      <header className="relative bg-emerald-950 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-900/50 backdrop-blur-sm border border-emerald-700 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase">Anokha 2026 Official Registration</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter italic uppercase">
            ANOKHA <span className="text-emerald-400">2026</span>
          </h1>
          <p className="text-emerald-100/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-medium">
            India's most unique student-run multi-disciplinary fest. 
            Select multiple events and secure your spot in Tech, Culture, and Sports.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
             <a 
               href="#events-list" 
               onClick={scrollToEvents}
               className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/20"
             >
                Browse Events
             </a>
             
             {registrations.length > 0 && (
               <div className="flex -space-x-3 items-center ml-2">
                  {recentParticipants.map((name, i) => (
                    <div 
                      key={i} 
                      className={`w-12 h-12 rounded-full border-4 border-emerald-950 flex items-center justify-center text-white font-black text-lg shadow-xl ${getAvatarColor(name)}`}
                    >
                      {name.charAt(0).toUpperCase()}
                    </div>
                  ))}
                  <span className="pl-6 text-emerald-100/60 text-sm font-bold tracking-wide uppercase">
                    {registrations.length} Registration{registrations.length !== 1 ? 's' : ''}
                  </span>
               </div>
             )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div id="events-list" className="lg:col-span-8 space-y-8">
             {/* Discovery Bar: Filters + Search */}
             <div className="flex flex-col gap-6 p-6 bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/40">
                <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1">
                  <button 
                    onClick={() => setActiveFilter('All')}
                    className={`px-8 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${activeFilter === 'All' ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'hover:bg-slate-100 text-slate-600'}`}
                  >
                    All Events
                  </button>
                  {categories.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`px-8 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all ${activeFilter === cat ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' : 'hover:bg-slate-100 text-slate-600'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for events"
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all font-semibold text-slate-800 placeholder:text-slate-400 placeholder:font-medium"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
             </div>

             <div className="space-y-12">
                {totalVisibleEvents > 0 ? (
                  categories.map((cat) => {
                    const filtered = getFilteredEventsForCategory(cat);
                    if ((activeFilter === 'All' || activeFilter === cat) && filtered.length > 0) {
                      return (
                        <EventSection 
                          key={cat}
                          category={cat} 
                          events={filtered} 
                          onSelect={toggleEventSelection} 
                          onViewDetails={(e) => setViewingEvent(e)}
                          selectedEventIds={selectedEvents.map(e => e.id)} 
                        />
                      );
                    }
                    return null;
                  })
                ) : (
                  <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-xl">
                    <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                       <svg className="w-12 h-12 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter mb-2">No matching events</h3>
                    <p className="text-slate-400 font-medium">Try searching for something else or browse categories.</p>
                    <button 
                      onClick={() => {setSearchQuery(''); setActiveFilter('All');}}
                      className="mt-8 text-emerald-600 font-black uppercase text-sm tracking-widest hover:underline"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
             </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-8">
                <RegistrationForm 
                  selectedEvents={selectedEvents} 
                  onSubmit={handleRegister} 
                />
            </div>
          </div>
        </div>

        <div id="registrations-list">
          <RegistrationsList registrations={registrations} />
        </div>
      </main>

      {/* Modal for viewing event details */}
      {viewingEvent && (
        <EventDetailModal 
          event={viewingEvent} 
          onClose={() => setViewingEvent(null)}
          onJoin={toggleEventSelection}
          isJoined={selectedEvents.some(e => e.id === viewingEvent.id)}
        />
      )}

      <footer className="container mx-auto px-6 mt-20 pt-10 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-black text-xl rotate-3">A</div>
            <span className="font-black text-emerald-950 tracking-tighter text-2xl italic">ANOKHA</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">© 2026 Anokha Multi-disciplinary Festival. Amrita University, Coimbatore.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
