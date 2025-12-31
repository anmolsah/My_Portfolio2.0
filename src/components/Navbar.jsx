import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#"
            className={`text-xl md:text-2xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <span style={{ color: "#3B9797" }}>{"<"}</span>
            AS
            <span style={{ color: "#BF092F" }}>{"/>"}</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 ${
                  isDark
                    ? "text-gray-400 hover:text-white hover:bg-white/5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button
              onClick={toggleTheme}
              className={`ml-2 p-2.5 rounded-lg transition-all duration-300 ${
                isDark
                  ? "text-gray-400 hover:text-white hover:bg-white/5"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.a
              href="#contact"
              className="ml-2 px-5 py-2.5 text-sm font-medium text-white rounded-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #BF092F, #16476A)",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              className={`p-2 ${
                isDark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b ${
              isDark
                ? "bg-[#0a0a0a]/95 border-white/5"
                : "bg-white/95 border-gray-200/50"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isDark
                      ? "text-gray-400 hover:text-white hover:bg-white/5"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="block px-4 py-3 mt-2 text-center font-medium text-white rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #BF092F, #16476A)",
                }}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
