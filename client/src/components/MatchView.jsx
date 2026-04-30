import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeftRight, Star, MapPin, CheckCircle2 } from 'lucide-react';

const MOCK_MATCHES = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    teaching: ['UI Design', 'Figma'],
    learning: ['React', 'Node.js'],
    bio: 'Looking to bridge the gap between design and code! I have 4 years of Figma experience and can help you with auto-layouts and design systems.',
    location: 'Remote',
    lastMessage: 'Hey! I saw you know React. Would you be down for a 1-hour swap this weekend?',
    isOnline: true
  },
  {
    id: 2,
    name: 'Marcus Miller',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    teaching: ['Python', 'Data Science'],
    learning: ['Piano', 'Music Theory'],
    bio: 'Data scientist by day, aspiring musician by night. Can teach you anything from Pandas to Neural Networks. Just help me understand sheet music!',
    location: 'Austin, TX',
    lastMessage: 'That random forest explanation was great, thanks again!',
    isOnline: false
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    teaching: ['Spanish', 'Cooking'],
    learning: ['Digital Marketing', 'SEO'],
    bio: 'Native Spanish speaker and a chef. I want to grow my food blog but SEO is a nightmare. Let\'s trade!',
    location: 'Barcelona',
    lastMessage: 'I can show you how to make the perfect Paella 🥘',
    isOnline: true
  }
];

const MatchView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
      {MOCK_MATCHES.map((match, idx) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="glass-card flex flex-col md:flex-row gap-8 hover:translate-y-[-4px] transition-all relative overflow-hidden group border-white/[0.05]"
        >
          {/* Match Score Badge */}
          <div className="absolute top-0 right-0 bg-accent-electric px-4 py-1.5 rounded-bl-2xl text-[10px] font-black tracking-widest uppercase shadow-lg z-10">
            98% MATCH
          </div>

          <div className="flex-shrink-0 relative">
            <img 
              src={match.avatar} 
              alt={match.name} 
              className="w-32 h-32 rounded-3xl border-2 border-white/10 object-cover"
            />
            {match.isOnline && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
            )}
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-3xl font-black text-white">{match.name}</h3>
              <CheckCircle2 size={18} className="text-blue-400" />
            </div>
            
            <div className="flex items-center text-slate-500 text-xs mb-4 gap-4 font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-accent-purple" /> {match.location}</span>
              <span className="text-accent-electric">Top Tier Mentor</span>
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed italic">
              "{match.bio}"
            </p>

            {/* Skill Swap Logic Visual */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">They Teach</span>
                <div className="flex flex-wrap gap-2">
                  {match.teaching.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-white/5 border border-white/10 text-white rounded-lg text-[10px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2 text-right">
                <span className="text-[10px] text-slate-600 uppercase font-black tracking-widest">You Teach</span>
                <div className="flex flex-wrap gap-2 justify-end">
                  {['React', 'Node.js'].map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-accent-purple/20 border border-accent-purple/30 text-accent-purple rounded-lg text-[10px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl mb-6 relative group-hover:bg-white/[0.05] transition-colors">
              <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 flex items-center gap-2">
                <MessageCircle size={12} /> Recent Activity
              </div>
              <p className="text-sm text-slate-300 line-clamp-1 italic">
                "{match.lastMessage}"
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex-grow bg-white text-black py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-accent-electric hover:text-white transition-all shadow-xl">
                <MessageCircle size={18} />
                Open Conversation
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MatchView;
