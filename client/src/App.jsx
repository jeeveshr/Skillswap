import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Zap, Users, BookOpen, Brain, Settings, Bell, LogOut, MessageSquare } from 'lucide-react';
import DiscoverView from './components/DiscoverView';
import MatchView from './components/MatchView';

function App() {
  const [activeTab, setActiveTab] = useState('discover');

  return (
    <div className="min-h-screen bg-background text-slate-200 p-4 md:p-8">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto mb-12 flex justify-between items-center glass px-6 py-4 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent-purple rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">SKILLSWAP</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={() => setActiveTab('discover')}
            className={`transition-colors ${activeTab === 'discover' ? 'text-accent-electric' : 'hover:text-white'}`}
          >
            Discover
          </button>
          <button 
            onClick={() => setActiveTab('matches')}
            className={`transition-colors ${activeTab === 'matches' ? 'text-accent-electric' : 'hover:text-white'}`}
          >
            Matches
          </button>
          <a href="#" className="hover:text-white">Community</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent-electric rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full border border-white/10 overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent"
          >
            {activeTab === 'discover' ? 'Explore New Skills' : 'Your Perfect Matches'}
          </motion.h1>
          <p className="text-slate-400 text-lg">
            {activeTab === 'discover' 
              ? 'Connect with mentors and learners in our global decentralized network.' 
              : 'Collaborate with people who have exactly what you need.'}
          </p>
        </header>

        {/* Tab Content with Framer Motion */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'discover' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'discover' ? 20 : -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {activeTab === 'discover' ? <DiscoverView /> : <MatchView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-accent-purple rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
        <MessageSquare className="text-white group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
}

export default App;
