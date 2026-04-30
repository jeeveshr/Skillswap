import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeftRight, Star, MapPin } from 'lucide-react';

const MOCK_MATCHES = [
  {
    id: 1,
    name: 'Sarah Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    teaching: ['UI Design', 'Figma'],
    learning: ['React', 'Node.js'],
    bio: 'Looking to bridge the gap between design and code!',
    location: 'Remote'
  },
  {
    id: 2,
    name: 'Marcus Miller',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    teaching: ['Python', 'Data Science'],
    learning: ['Piano', 'Music Theory'],
    bio: 'Data scientist by day, aspiring musician by night.',
    location: 'Austin, TX'
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    teaching: ['Spanish', 'Cooking'],
    learning: ['Digital Marketing'],
    bio: 'Passionate about sharing my culture and learning growth hacks.',
    location: 'Barcelona'
  }
];

const MatchView = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {MOCK_MATCHES.map((match, idx) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="glass-card flex flex-col md:flex-row gap-6 hover:translate-y-[-4px] transition-all relative overflow-hidden"
        >
          {/* Match Score Badge */}
          <div className="absolute top-4 right-4 bg-accent-electric/20 text-accent-electric px-3 py-1 rounded-full text-xs font-black">
            98% MATCH
          </div>

          <div className="flex-shrink-0">
            <img 
              src={match.avatar} 
              alt={match.name} 
              className="w-24 h-24 rounded-2xl border-2 border-white/10"
            />
          </div>

          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-2xl font-black">{match.name}</h3>
              <div className="flex items-center text-yellow-500 text-sm">
                <Star size={14} className="fill-yellow-500" />
                <span className="ml-1 font-bold">4.9</span>
              </div>
            </div>
            
            <div className="flex items-center text-slate-500 text-sm mb-4 gap-4">
              <span className="flex items-center gap-1"><MapPin size={14} /> {match.location}</span>
              <span className="flex items-center gap-1 font-bold text-accent-purple uppercase tracking-widest text-[10px]">VERIFIED SWAPPER</span>
            </div>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              "{match.bio}"
            </p>

            {/* Skill Swap Logic Visual */}
            <div className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 uppercase font-bold tracking-tighter">THEY TEACH</span>
                <ArrowLeftRight size={16} className="text-accent-electric rotate-90 md:rotate-0" />
                <span className="text-slate-500 uppercase font-bold tracking-tighter text-right">YOU TEACH</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2 max-w-[40%]">
                  {match.teaching.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-accent-purple/10 text-accent-purple rounded-md text-[10px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 max-w-[40%] justify-end">
                  {['React', 'Node.js'].map(skill => ( // Mocking user's skills
                    <span key={skill} className="px-2 py-1 bg-white/10 text-white rounded-md text-[10px] font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-grow bg-white text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors">
                <MessageCircle size={18} />
                Start Chat
              </button>
              <button className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                <Star size={20} className="text-slate-400" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MatchView;
