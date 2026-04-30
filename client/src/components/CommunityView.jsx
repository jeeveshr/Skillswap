import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquare, Share2, MoreHorizontal, Zap } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    author: 'Jeeveshr',
    role: 'Fullstack Dev',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jeevesh',
    content: "Just finished my first React-Python swap with @Sarah! I taught her hooks and she helped me debug my Flask middleware. Honestly, this is 100x better than watching YouTube tutorials. Highly recommend her if you need UI help! 🚀",
    timestamp: '2h ago',
    likes: 24,
    comments: 5
  },
  {
    id: 2,
    author: 'Liam Styles',
    role: 'Music Producer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam',
    content: "Is anyone here good at Blender? I'm trying to make some 3D visuals for my next track. Can swap for Ableton Live lessons or sound design secrets. Let me know!",
    timestamp: '5h ago',
    likes: 12,
    comments: 8
  },
  {
    id: 3,
    author: 'Priya K.',
    role: 'Product Manager',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    content: "Huge thanks to @Marcus for the Data Science 101 session today. I finally understand what a 'random forest' actually is lol. Swapping knowledge is the future.",
    timestamp: 'Yesterday',
    likes: 45,
    comments: 2
  }
];

const CommunityView = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Create Post Placeholder */}
      <div className="glass p-6 rounded-3xl flex gap-4 items-center border-white/5 bg-white/[0.02]">
        <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
        </div>
        <div className="flex-grow">
          <input 
            type="text" 
            placeholder="Share a win or ask for a swap..." 
            className="w-full bg-transparent border-none focus:ring-0 text-lg placeholder:text-slate-600"
          />
        </div>
        <button className="bg-accent-purple p-3 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <Zap size={20} className="fill-white text-white" />
        </button>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {POSTS.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card bg-white/[0.03] border-white/5"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-2xl border border-white/10" />
                <div>
                  <h4 className="font-bold text-white leading-tight">{post.author}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{post.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-600 font-medium">{post.timestamp}</span>
                <button className="text-slate-600 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              {post.content}
            </p>

            <div className="flex items-center gap-8 pt-4 border-t border-white/5">
              <button className="flex items-center gap-2 text-slate-500 hover:text-accent-electric transition-colors group">
                <Heart size={18} className="group-hover:fill-accent-electric" />
                <span className="text-sm font-bold">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                <MessageSquare size={18} />
                <span className="text-sm font-bold">{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CommunityView;
