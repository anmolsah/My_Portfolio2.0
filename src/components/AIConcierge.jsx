import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const AIConcierge = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey! I'm Anmol's AI assistant. Ask me anything about his work, projects, or skills. I can be helpful... or hilariously honest. Your choice!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

      if (!apiKey) {
        throw new Error("API key not found");
      }

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": window.location.origin,
            "X-Title": "Anmol's Portfolio",
          },
          body: JSON.stringify({
            model: "liquid/lfm-2.5-1.2b-instruct:free", //arcee-ai/trinity-large-preview:free
            messages: [
              {
                role: "system",
                content: `You are Anmol's AI Portfolio Concierge - a witty, helpful, and slightly sarcastic assistant embedded in his portfolio website.

ABOUT ANMOL:
- Full-stack developer passionate about AI, web development, and open source
- Built NexoraAI: AI-powered content creation platform (React, Node.js, PostgreSQL, Clerk, OpenRouter)
- Built ThumbGen: AI thumbnail generator for creators (MERN stack, Imagen 4.0, Gemini, Cashfree payments)
- Built RAHi: AI travel planner with personalized itineraries (React, Firebase, Gemini API, Google Places)
- Built Movieco: AI-powered movie discovery platform (React, Supabase, TMDB API)
- Built firstissue.dev: Platform for developers to find beginner-friendly open source issues
- Skills: React, Node.js, TypeScript, PostgreSQL, MongoDB, AI/ML integration, Payment systems
- GitHub: @anmolsah
- Active in open source and loves building practical AI applications

YOUR PERSONALITY:
- Friendly but with a dash of sass
- Honest and direct - you don't sugarcoat
- Enthusiastic about Anmol's work but not overly promotional
- Can be funny but professional
- Give detailed technical answers when asked
- If someone asks something silly, playfully roast them (gently!)
- Keep responses concise but informative (2-4 sentences usually)
- DO NOT use emojis in your responses

RESPONSE GUIDELINES:
- Answer questions about Anmol's projects, skills, and experience
- Explain technical decisions and architecture
- Give career advice from Anmol's perspective
- Compare projects or recommend which one to check out
- Be helpful for recruiters looking to understand his capabilities
- If asked about something not related to Anmol or his work, politely redirect

Remember: You're here to showcase Anmol's skills while being entertaining and helpful!`,
              },
              ...messages.map((msg) => ({
                role: msg.role,
                content: msg.content,
              })),
              { role: "user", content: userMessage },
            ],
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", response.status, errorData);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiMessage },
      ]);
    } catch (error) {
      console.error("Error:", error);

      let errorMessage = "Oops! Something went wrong. ";

      if (error.message.includes("API key not found")) {
        errorMessage =
          "API key missing! Please add VITE_OPENROUTER_API_KEY to .env and restart the server.";
      } else if (error.message.includes("401")) {
        errorMessage =
          "Invalid API key. Please check your OpenRouter API key and restart the dev server.";
      } else if (error.message.includes("429")) {
        errorMessage =
          "Rate limit reached. Please wait a moment and try again.";
      } else {
        errorMessage += "Try asking again?";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickQuestions = [
    "Tell me about NexoraAI",
    "What's your best project?",
    "Compare your AI projects",
    "Why should I hire Anmol?",
    "Roast this portfolio 😈",
  ];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 bottom-0 sm:bottom-20 sm:right-4 sm:left-auto sm:inset-x-auto w-full sm:w-[420px] h-[85vh] sm:h-[650px] sm:rounded-2xl rounded-t-3xl shadow-2xl border-t sm:border z-50 flex flex-col ${
              isDark
                ? "bg-[#0a0a0a]/98 border-white/10 backdrop-blur-xl"
                : "bg-white/98 border-gray-200 backdrop-blur-xl"
            }`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between p-4 sm:p-4 pt-6 sm:pt-4 border-b ${
                isDark ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div>
                  <h3
                    className={`font-semibold text-base sm:text-lg ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    AI Concierge
                  </h3>
                  <p className="text-xs text-gray-500">Powered by Liquid AI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg transition-colors active:scale-95 ${
                  isDark
                    ? "hover:bg-white/10 active:bg-white/20"
                    : "hover:bg-gray-100 active:bg-gray-200"
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 overscroll-contain">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : isDark
                          ? "bg-white/10 text-gray-100"
                          : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                      {msg.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      isDark ? "bg-white/10" : "bg-gray-100"
                    }`}
                  >
                    <Loader2 className="w-5 h-5 animate-spin text-purple-500" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-3 sm:px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {quickQuestions.slice(0, 5).map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(q)}
                      className={`text-xs px-2.5 py-1.5 sm:px-3 rounded-full border transition-colors active:scale-95 ${
                        isDark
                          ? "border-white/20 hover:bg-white/10 active:bg-white/20 text-gray-300"
                          : "border-gray-300 hover:bg-gray-100 active:bg-gray-200 text-gray-700"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className={`p-3 sm:p-4 pb-4 sm:pb-4 border-t ${isDark ? "border-white/10" : "border-gray-200"}`}
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className={`flex-1 px-3 py-2.5 sm:px-4 sm:py-2.5 text-sm sm:text-base rounded-xl border outline-none transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-purple-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500"
                  }`}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 sm:p-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl z-50 flex items-center justify-center touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </motion.button>
      )}
    </>
  );
};

export default AIConcierge;
