import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, Send, User, X, Loader2, Utensils } from 'lucide-react';
import { TIFFIN_PROVIDERS, CITIES } from '../data/mockData';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

interface QuickPrompt {
  label: string;
  query: string;
}

const QUICK_PROMPTS: QuickPrompt[] = [
  { label: "🍱 Today's Menu", query: "Today's Menu" },
  { label: "📅 Weekly Menu", query: "Weekly Menu" },
  { label: "📍 Nearby Mess", query: "Nearby Mess" },
  { label: "💰 Prices", query: "Tiffin Prices" },
  { label: "⏸️ Pause Meal", query: "How to pause meal?" },
  { label: "📦 My Orders", query: "My Orders" },
  { label: "⭐ Reviews", query: "Customer Reviews" },
  { label: "🚚 Delivery", query: "Delivery timings" },
  { label: "🆘 Help", query: "Help & Support" },
];

export const MesswalaAiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Namaste! I am Messwala AI Assistant. Ask me anything about home tiffins, prices, pause rules, or menus!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  const generateReply = (userQuery: string): string => {
    const q = userQuery.toLowerCase();

    if (q.includes("today's menu") || q.includes("today menu") || q.includes("lunch menu")) {
      return "🍱 **Today's Homemade Specials:**\n\n• **Lunch (11:30 AM - 2:00 PM):** Paneer Butter Masala, 4 soft whole-wheat phulkas with cow ghee, Dal Tadka, Jeera Rice & fresh salad.\n• **Dinner (7:30 PM - 10:00 PM):** Dal Makhani, Aloo Methi, 4 Phulkas, Steamed Rice & Gulab Jamun!";
    }
    
    if (q.includes("weekly menu") || q.includes("week menu")) {
      return "📅 **Weekly Menu Rotation:**\n\n• **Mon - Wed:** Dal Tadka, Paneer Bhurji, Sev Tamatar, Rajma Chawal.\n• **Thu - Fri:** Chole Masala, Baingan Bharta, Veg Pulao, Kadhi Pakora.\n• **Sat:** Rajasthani Dal Baati / Gujarati Khichdi Kadhi.\n• **Sunday:** Special Shahi Thali with Paneer Pasanda & Sweet Lassi!";
    }
    
    if (q.includes("nearby mess") || q.includes("nearby") || q.includes("near") || q.includes("vnit") || q.includes("nagpur") || q.includes("ram nagar")) {
      return "📍 **Top Verified Messes Nearby:**\n\n1. **The Tiffin Adda** (Ram Nagar / 0.6 km from VNIT) - ⭐ 4.8\n2. **Annapurna Rasoi** (Dharampeth) - ⭐ 4.9\n3. **Maa Ki Rasoi** (Sadar & Chhaoni) - ⭐ 4.7\n\nAll verified for 100% home hygiene, zero soda & light oil!";
    }
    
    if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("charge")) {
      return "💰 **Affordable Student & Office Plans:**\n\n• **1-Day Trial Meal:** ₹65 - ₹79\n• **Weekly Plan (6 Days):** ₹720 (~₹60/meal)\n• **Monthly Plan (Lunch + Dinner):** From ₹2,600/month\n• Free doorstep delivery & zero hidden packaging fees!";
    }
    
    if (q.includes("pause") || q.includes("holiday") || q.includes("skip")) {
      return "⏸️ **Flexible Pause Policy:**\n\nGoing home or having weekend plans? You can pause your meal anytime:\n• **Lunch:** Pause before 8:00 AM\n• **Dinner:** Pause before 4:00 PM\n• Unserved meals are never wasted — your plan validity is automatically extended!";
    }
    
    if (q.includes("order") || q.includes("my orders") || q.includes("booking") || q.includes("status")) {
      return "📦 **Your Orders & Subscriptions:**\n\n• **Active Plan:** The Tiffin Adda (Monthly Veg Plan • 22 Days Remaining)\n• **Today's Status:** Lunch on the way • ETA 1:15 PM\n• You can track live delivery or pause meals in the **Bookings** tab of the app!";
    }
    
    if (q.includes("review") || q.includes("rating") || q.includes("feedback") || q.includes("star")) {
      return "⭐ **Student & Customer Reviews (4.8/5 Avg):**\n\n• *\"Authentic ghar jaisa swad. Phulkas are super soft and veggies are fresh!\"* – Rahul, VNIT\n• *\"Saves so much money and never gives acidity or stomach issues.\"* – Sneha, Ram Nagar\n• Rated 4.8★ by 4,500+ happy customers across the city!";
    }
    
    if (q.includes("delivery") || q.includes("time") || q.includes("rider") || q.includes("reach")) {
      return "🚚 **Delivery Coverage & Timings:**\n\n• **Lunch Delivery:** 11:30 AM to 2:00 PM\n• **Dinner Delivery:** 7:30 PM to 10:00 PM\n• Delivered in insulated hot-cases straight to your hostel gate, PG room, or office desk!";
    }
    
    if (q.includes("help") || q.includes("support") || q.includes("contact") || q.includes("care") || q.includes("number")) {
      return "🆘 **Messwala Support Desk (8 AM - 10:30 PM):**\n\n• **WhatsApp Support:** +91 98231 45678\n• **Helpline:** 1800-MESSWALA\n• **Email:** support@messwala.in\n• Need immediate delivery assistance? Reach out on WhatsApp for a response in < 5 minutes!";
    }
    
    return "Messwala connects you with over 450+ verified home cooks and mess owners in Nagpur, Pune, Kota, Indore, and Bengaluru. You can order a 1-day trial meal for just ₹65-₹75!";
  };

  const handleSendQuery = (userQuery: string) => {
    if (!userQuery.trim() || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userQuery }]);
    setLoading(true);

    setTimeout(() => {
      const reply = generateReply(userQuery);
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setLoading(false);
    }, 600);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    handleSendQuery(input.trim());
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold p-4 rounded-full shadow-2xl flex items-center space-x-2 transform hover:scale-105 transition-all group"
          aria-label="Open AI Meal Assistant"
        >
          <Bot className="w-6 h-6 animate-bounce" />
          <span className="text-xs font-extrabold pr-1 hidden sm:inline">Ask Messwala AI</span>
        </button>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 w-[340px] sm:w-[390px] h-[520px] max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-black">Messwala AI Food Assistant</h4>
                <p className="text-[10px] text-orange-100">Instant answers for meals, menus & plans</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full text-xs transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF6F0] text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">
                    AI
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed whitespace-pre-line ${
                    m.sender === 'user'
                      ? 'bg-red-500 text-white rounded-tr-none font-medium shadow-xs'
                      : 'bg-white text-slate-800 rounded-tl-none border border-orange-100 shadow-xs font-medium'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center space-x-2 text-slate-400 text-xs">
                <Loader2 className="w-4 h-4 animate-spin text-red-500" />
                <span>Finding meal details...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Grid (3 rows x 3 columns) */}
          <div className="p-2.5 bg-slate-50 border-t border-slate-100">
            <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-0.5">
              Quick Suggestions
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-[10px]">
              {QUICK_PROMPTS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuery(item.query)}
                  className="px-1.5 py-1.5 bg-white hover:bg-orange-50 hover:border-orange-300 border border-slate-200/80 text-slate-700 hover:text-red-600 rounded-xl font-semibold text-center truncate transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
                  title={item.label}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask about tiffins, prices, or menus..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-100 border-none text-xs rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-400"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
