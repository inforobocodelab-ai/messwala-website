import React, { useState } from 'react';
import { Bot, Sparkles, Send, User, X, Loader2, Utensils } from 'lucide-react';
import { TIFFIN_PROVIDERS, CITIES } from '../data/mockData';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

export const MesswalaAiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Namaste! I am Messwala AI Assistant. Ask me anything about home tiffins or daily menus near your college!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      // Intelligent match based on mock database
      setTimeout(() => {
        let reply = "I can definitely help with that! ";
        const query = userMsg.toLowerCase();

        if (query.includes('vnit') || query.includes('ram nagar') || query.includes('nagpur')) {
          reply = `For Nagpur (Ram Nagar / VNIT area), **The Tiffin Adda** (Sunita Aunty) and **Ashirvad Mess** are highly recommended! They offer soft wheat phulkas, zero soda, and monthly plans from ₹2,600/mo.`;
        } else if (query.includes('pause') || query.includes('holiday') || query.includes('home')) {
          reply = `With Messwala, you can **PAUSE** your meal anytime before 8:00 AM (for Lunch) or 4:00 PM (for Dinner). Your validity is automatically extended by the paused days!`;
        } else if (query.includes('veg') || query.includes('pure veg')) {
          reply = `We have 100% Pure Veg kitchens like **The Tiffin Adda** and **Ghar Jaisa Swad**. They use pure cow ghee for phulkas and fresh farm vegetables.`;
        } else if (query.includes('sunday') || query.includes('menu')) {
          reply = `On Sundays, Messwala kitchens serve Special Shahi Thalis including Paneer Pasanda / Paneer Butter Masala, Veg Biryani, Gulab Jamun, and Sweet Lassi!`;
        } else {
          reply = `Messwala connects you with over 450+ verified home cooks and mess owners in Nagpur, Pune, Kota, Indore, and Bengaluru. You can order a 1-day trial meal for just ₹65-₹75!`;
        }

        setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
        setLoading(false);
      }, 700);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: "I'm here to help you discover the best home-cooked meals near your area!" },
      ]);
      setLoading(false);
    }
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
        <div className="bg-white rounded-3xl shadow-2xl border border-orange-100 w-[340px] sm:w-[380px] h-[480px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-black">Messwala AI Food Assistant</h4>
                <p className="text-[10px] text-orange-100">Powered by Gemini AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full text-xs"
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
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-red-500 text-white rounded-tr-none font-medium'
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
                <span>Searching kitchens...</span>
              </div>
            )}
          </div>

          {/* Quick Prompt Pills */}
          <div className="p-2 bg-white border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto text-[10px]">
            <button
              onClick={() => setInput('Tiffins near VNIT Nagpur')}
              className="px-2.5 py-1 bg-orange-50 hover:bg-orange-100 text-slate-700 rounded-full font-semibold flex-shrink-0"
            >
              📍 VNIT Nagpur
            </button>
            <button
              onClick={() => setInput('How to pause meal?')}
              className="px-2.5 py-1 bg-orange-50 hover:bg-orange-100 text-slate-700 rounded-full font-semibold flex-shrink-0"
            >
              ⏸ Pause Rule
            </button>
            <button
              onClick={() => setInput('Sunday Special Menu')}
              className="px-2.5 py-1 bg-orange-50 hover:bg-orange-100 text-slate-700 rounded-full font-semibold flex-shrink-0"
            >
              🍛 Sunday Menu
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Ask about tiffins, prices, or menus..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-100 border-none text-xs rounded-xl px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-red-400"
            />
            <button
              type="submit"
              className="p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
