import React from 'react';
import { motion } from 'framer-motion';
import { Search, Brain, BookOpen, Users, Star, ArrowRight, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const DiscoverView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12">
      {/* Featured Card - Large */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="md:col-span-2 md:row-span-2 glass-card flex flex-col justify-between overflow-hidden relative group bg-gradient-to-br from-accent-purple/10 to-transparent border-white/10"
      >
        <div className="absolute -top-12 -right-12 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
          <Zap size={300} className="text-white" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block px-3 py-1 bg-accent-electric text-white text-[10px] font-black rounded-lg tracking-widest uppercase shadow-lg">
              HOT SWAP
            </span>
            <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">32 people currently browsing</span>
          </div>
          <h2 className="text-5xl font-black mb-6 leading-[0.9] text-white">
            Master <br />The MERN <br />Stack.
          </h2>
          <p className="text-slate-400 max-w-sm mb-8 font-medium leading-relaxed">
            Collaborate with developers from top startups. Share your frontend expertise and learn scalable backend architecture.
          </p>
        </div>

        <div className="flex items-center gap-6 relative z-10 bg-black/20 p-4 rounded-2xl backdrop-blur-md border border-white/5">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-12 h-12 rounded-2xl border-4 border-[#030303] overflow-hidden bg-surface shadow-2xl">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=dev${i}`} alt="user" />
              </div>
            ))}
          </div>
          <div>
            <span className="block text-sm font-black text-white">Join 12+ Mentors</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Active in the last 10 mins</span>
          </div>
        </div>
      </motion.div>

      {/* Skill Search - Medium */}
      <div className="md:col-span-2 glass-card flex flex-col justify-center border-white/5 bg-white/[0.01]">
        <h3 className="text-2xl font-black mb-6 text-white tracking-tight">What knowledge are you trading today?</h3>
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-accent-electric transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="I want to learn... (e.g. Italian, Solidity, Figma)" 
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-4 focus:outline-none focus:border-accent-electric focus:bg-white/[0.08] transition-all text-white placeholder:text-slate-700"
          />
        </div>
      </div>

      {/* Trust Stats - Small */}
      <div className="glass-card flex items-center gap-5 border-white/5">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shadow-inner">
          <ShieldCheck className="text-blue-400" size={28} />
        </div>
        <div>
          <div className="text-3xl font-black text-white">99%</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-tight">Safety <br />Rating</div>
        </div>
      </div>

      {/* Trending - Small */}
      <div className="glass-card flex items-center gap-5 border-accent-electric/30 bg-accent-electric/5">
        <div className="w-14 h-14 bg-accent-electric/10 rounded-2xl flex items-center justify-center shadow-inner">
          <TrendingUp className="text-accent-electric" size={28} />
        </div>
        <div>
          <div className="text-xl font-black text-white leading-none mb-1">Web3 Dev</div>
          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Trending Category</div>
        </div>
      </div>

      {/* Real Category List - Vertical */}
      <div className="md:row-span-2 glass-card border-white/5">
        <div className="w-12 h-12 bg-accent-purple/20 rounded-2xl flex items-center justify-center mb-6">
          <BookOpen className="text-accent-purple" size={24} />
        </div>
        <h3 className="text-xl font-black mb-6 text-white uppercase tracking-tighter">Top Categories</h3>
        <ul className="space-y-5">
          {[
            { label: 'Growth Hacking', count: '128' },
            { label: 'Blockchain', count: '94' },
            { label: 'UI/UX Design', count: '256' },
            { label: 'Jazz Theory', count: '42' },
            { label: 'Digital Art', count: '183' }
          ].map(item => (
            <li key={item.label} className="flex items-center justify-between group cursor-pointer">
              <div>
                <span className="block text-slate-400 group-hover:text-white transition-colors font-bold text-sm">{item.label}</span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">{item.count} swappers</span>
              </div>
              <ArrowRight size={14} className="text-slate-700 group-hover:text-accent-electric transition-all" />
            </li>
          ))}
        </ul>
      </div>

      {/* Engagement Card - Horizontal */}
      <div className="md:col-span-3 glass-card flex flex-col md:flex-row items-center justify-between gap-8 border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent">
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-orange-500/20 flex items-center justify-center shadow-2xl">
            <Star className="text-yellow-400 fill-yellow-400" size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white leading-none mb-2">The Weekend Sprint</h3>
            <p className="text-slate-500 text-sm font-medium">Join 400+ people swapping skills in a 48h intensive marathon. <br />Starting this Friday at 6:00 PM.</p>
          </div>
        </div>
        <button className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
          Secure My Spot
        </button>
      </div>
    </div>
  );
};

export default DiscoverView;
