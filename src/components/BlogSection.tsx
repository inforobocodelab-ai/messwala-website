import React, { useState } from 'react';
import { X, ArrowRight, BookOpen, Clock, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  emoji: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'partner-guide',
    emoji: '🤝',
    category: 'Guides',
    title: 'How to become a Messwala partner: list your tiffin service or PG in one day',
    summary: "A step-by-step guide for Nagpur's home cooks, mess owners and PG operators: what you need, how verification works, and how payouts land in your bank.",
    date: '11 Jun 2026',
    readTime: '6 min read',
    author: 'Messwala Onboarding Team',
    content: [
      'Messwala helps home chefs and mess operators connect directly with thousands of college students and working professionals in Nagpur, Pune, and surrounding hubs.',
      'Step 1: Simple Registration - Share basic kitchen details, FSSAI registration (or apply for FSSAI guidance through our partner desk), and your daily thali menu.',
      'Step 2: Verification Visit - Our local field team conducts a quick 15-minute hygiene inspection to award your kitchen the "FSSAI Verified & Hygienic" badge.',
      'Step 3: Receive Daily Orders - Students discover your tiffin service on the Messwala app, book weekly or monthly plans, and payments land automatically in your registered bank account every Monday.'
    ]
  },
  {
    id: 'partner-stories',
    emoji: '🍲',
    category: 'Partner stories',
    title: '100+ partners and counting: the kitchens and homes behind Messwala',
    summary: "From a two-burner kitchen in Hingna to a 40-bed hostel near Medical Square, the people who power Nagpur's home-food and stay network.",
    date: '11 Jun 2026',
    readTime: '5 min read',
    author: 'Priya Kulkarni',
    content: [
      'Behind every delicious daily meal is a passionate home chef. Sunita Aunty started cooking for 4 hostellers near VNIT in 2024.',
      'With Messwala, her kitchen now delivers 60+ fresh thalis every lunch and dinner while maintaining 100% home-style taste.',
      '"Messwala took away the hassle of finding customers and collecting cash every month. Now I just focus on making good food," says Sunita Aunty.'
    ]
  },

  {
    id: 'budget-savings',
    emoji: '💡',
    category: 'Student tips',
    title: 'How students save ₹3,000+ per month by switching from food delivery apps',
    summary: 'A detailed breakdown of monthly food costs for hostellers in Nagpur: Swiggy/Zomato vs subscribing to authentic local home kitchens.',
    date: '10 Jun 2026',
    readTime: '4 min read',
    author: 'Financial Health Team',
    content: [
      'Ordering restaurant meals daily averages ₹220 to ₹350 per meal with surge fees and packaging charges.',
      'Over 30 days, students spend upwards of ₹7,500 just on food delivery!',
      'By switching to a Messwala monthly subscription (averaging ₹65-₹75 per meal), monthly spending drops to ₹2,400–₹2,800—saving students over ₹4,500 every single month.'
    ]
  },
  {
    id: 'food-trail',
    emoji: '🎓',
    category: 'City guides',
    title: 'Top college food hubs in Nagpur: VNIT, RCOEM & GMC student picks',
    summary: 'Exploring the best student dining spots and daily thalis across Dharampeth, Ram Nagar, and Medical Square.',
    date: '08 Jun 2026',
    readTime: '5 min read',
    author: 'Rahul Deshmukh',
    content: [
      'Dharampeth & Bajaj Nagar: Known for authentic Maharashtrian Pithla Bhakri and North Indian thalis.',
      'Chhaoni Road: Famous for budget-friendly student messes offering unlimited chapatis and rice.',
      'Messwala partners across these hubs deliver hot meals directly to your hostel gate.'
    ]
  },
  {
    id: 'nutrition-guide',
    emoji: '🥗',
    category: 'Food & Health',
    title: 'Why home-cooked thalis beat commercial restaurant food for daily energy',
    summary: 'How balanced oil levels, low soda, and rotational home-style vegetables protect student health during exam months.',
    date: '04 Jun 2026',
    readTime: '4 min read',
    author: 'Dr. Ananya Sharma',
    content: [
      'Commercial restaurant food uses heavy palm oil, artificial colors, and baking soda for fast preparation.',
      'Consuming this daily causes lethargy, acidity, and digestive issues.',
      'Messwala home cooks use pure sunflower oil or ghee in minimal quantities with home-ground spices, keeping daily meals light, energetic, and healthy.'
    ]
  }
];

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog-section" className="py-20 bg-[#FAF6F0] border-t border-orange-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading matching the exact design screenshot */}
        <div className="mb-14 text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-sans max-w-3xl">
            Stories from every kitchen,<br className="hidden sm:block" />
            guides for every move.
          </h1>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-red-200 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Emoji Icon */}
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {post.emoji}
                </div>

                {/* Category Badge Pill */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100/70 text-red-600 text-xs font-bold tracking-wide">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-slate-900 leading-snug group-hover:text-red-500 transition-colors mb-3 font-sans">
                  {post.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6 line-clamp-4">
                  {post.summary}
                </p>
              </div>

              {/* Date & Read Time Footer */}
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 font-medium flex items-center justify-between">
                <span>{post.date} · {post.readTime}</span>
                <span className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity font-bold flex items-center gap-0.5">
                  Read →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 p-6 sm:p-10 relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-4xl mb-3">{selectedPost.emoji}</div>

            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-extrabold mb-3">
              {selectedPost.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
              {selectedPost.title}
            </h2>

            <div className="flex items-center space-x-4 text-xs font-semibold text-slate-400 mb-6 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-red-500" /> {selectedPost.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-red-500" /> {selectedPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-red-500" /> {selectedPost.readTime}
              </span>
            </div>

            <div className="space-y-4 text-sm text-slate-700 font-medium leading-relaxed">
              {selectedPost.content.map((paragraph, index) => (
                <p key={index} className="bg-slate-50/60 p-3.5 rounded-xl border border-slate-100">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-bold transition-all shadow-md"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
