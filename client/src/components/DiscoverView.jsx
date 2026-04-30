import React from 'react';
import { motion } from 'framer-motion';
import { Search, Brain, BookOpen, Users, Star, ArrowRight, Zap } from 'lucide-react';

const DiscoverView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Featured Card - Large */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:col-span-2 md:row-span-2 glass-card flex flex-col justify-between overflow-hidden relative group"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <Zap size={120} className="text-accent-electric" />
        </div>
        
        <div>
          <span className="inline-block px-3 py-1 bg-accent-purple/20 text-accent-purple text-xs font-bold rounded-full mb-6">
            FEATURED MENTOR
          </span>
          <h2 className="text-3xl font-black mb-4 leading-none">
            Master Advanced <br /> React Patterns
          </h2>
          <p className="text-slate-400 max-w-xs mb-8">
            Learn from industry experts how to build scalable architecture with modern tools.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-surface">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
              </div>
            ))}
          </div>
          <span className="text-sm font-medium">+12 others teaching this</span>
        </div>
      </motion.div>

      {/* Skill Search - Medium */}
      <div className="md:col-span-2 glass-card flex flex-col justify-center">
        <h3 className="text-xl font-bold mb-4">What do you want to learn?</h3>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Search skills (e.g. Piano, Rust, UI Design)..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent-purple transition-colors"
          />
        </div>
      </div>

      {/* Quick Stats - Small */}
      <div className="glass-card flex items-center gap-4">
        <div className="p-3 bg-blue-500/20 rounded-2xl">
          <Users className="text-blue-400" size={24} />
        </div>
        <div>
          <div className="text-2xl font-black">2.4k</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Active Swappers</div>
        </div>
      </div>

      {/* Trending Skill - Small */}
      <div className="glass-card flex items-center gap-4 border-l-4 border-accent-electric">
        <div className="p-3 bg-accent-electric/20 rounded-2xl">
          <Brain className="text-accent-electric" size={24} />
        </div>
        <div>
          <div className="text-xl font-black">Deep Learning</div>
          <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Trending Now</div>
        </div>
      </div>

      {/* Category Card - Vertical */}
      <div className="md:row-span-2 glass-card bg-gradient-to-b from-white/[0.05] to-transparent">
        <BookOpen className="text-accent-purple mb-6" size={32} />
        <h3 className="text-xl font-bold mb-4">Creative Arts</h3>
        <ul className="space-y-4">
          {['Digital Illustration', 'Photography', 'Music Theory', 'Video Editing'].map(item => (
            <li key={item} className="flex items-center justify-between group cursor-pointer hover:text-white transition-colors">
              <span className="text-slate-400 group-hover:text-white">{item}</span>
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </li>
          ))}
        </ul>
      </div>

      {/* Community Choice - Horizontal */}
      <div className="md:col-span-3 glass-card flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center">
            <Star className="text-yellow-400 fill-yellow-400" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Join the "Build a Startup" Sprint</h3>
            <p className="text-slate-500 text-sm">A 2-week intensive swap program starting in 3 days.</p>
          </div>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default DiscoverView;
