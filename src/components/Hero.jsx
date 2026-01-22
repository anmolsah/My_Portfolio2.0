import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { memo, useMemo, useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/anmolsah", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anmol-sah-551083238/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:annifind010@gmail.com", label: "Email" },
];

const SocialLink = memo(({ social, isDark, index }) => (
  <motion.a
    href={social.href}
    target={social.label !== "Email" ? "_blank" : undefined}
    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
    className={`p-3 rounded-xl border transition-all duration-300 hover:text-[#3B9797] hover:bg-[#3B9797]/10 hover:border-[#3B9797]/30 ${
      isDark
        ? "bg-white/5 border-white/10 text-gray-400"
        : "bg-gray-100 border-gray-200 text-gray-600"
    }`}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 + index * 0.1 }}
    aria-label={social.label}
  >
    <social.icon className="w-5 h-5" />
  </motion.a>
));

SocialLink.displayName = 'SocialLink';

const Hero = () => {
  const { isDark } = useTheme();
  
  // Typewriter state
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = useMemo(() => ["Full Stack Developer", "Frontend Developer", "Backend Developer"], []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Typing speed adjustment
      if (isDeleting) {
        setTypingSpeed(50); // Faster deleting
      } else {
        setTypingSpeed(150); // Normal typing
      }

      // Check boundaries
      if (!isDeleting && text === fullText) {
        // Finished typing word, pause then delete
        setTypingSpeed(2000); 
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, titles, typingSpeed]);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }), []);

  return (
    <section className="section-snap relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-overlay">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[50px] opacity-25"
          style={{ backgroundColor: "rgba(191, 9, 47, 0.4)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[45px] opacity-30"
          style={{ backgroundColor: "rgba(22, 71, 106, 0.5)" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-[250px] h-[250px] rounded-full blur-[40px] opacity-20"
          style={{ backgroundColor: "rgba(59, 151, 151, 0.3)" }}
        />
      </div>

      <div
        className="absolute top-20 right-20 md:right-40 w-20 h-20 md:w-32 md:h-32 rounded-2xl backdrop-blur-sm border border-white/10 rotate-12 animate-float"
        style={{
          background:
            "linear-gradient(135deg, rgba(191, 9, 47, 0.2), rgba(22, 71, 106, 0.2))",
        }}
      />

      <div
        className="absolute bottom-32 left-10 md:left-32 w-16 h-16 md:w-24 md:h-24 rounded-full backdrop-blur-sm border border-white/10 animate-float"
        style={{
          background:
            "linear-gradient(135deg, rgba(22, 71, 106, 0.2), rgba(59, 151, 151, 0.2))",
          animationDelay: "2s",
        }}
      />

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6">
            <span className={isDark ? "text-white" : "text-gray-900"}>
              Hi, I'm{" "}
            </span>
            <span className="gradient-text text-glow">Anmol Sah</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-3">
            {/* <Sparkles
              className="w-5 h-5 md:w-6 md:h-6"
              style={{ color: "#BF092F" }}
            /> */}
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium min-h-[1.5em] ${
                isDark ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {text}
              <span className="animate-pulse border-r-2 border-[#3B9797] ml-1">&nbsp;</span>
            </h2>
            {/* <Sparkles
              className="w-5 h-5 md:w-6 md:h-6"
              style={{ color: "#3B9797" }}
            /> */}
          </div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          I craft exceptional digital experiences with clean code and creative
          design. Passionate about building products that make a difference and
          contributing to open source projects.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden w-full sm:w-auto"
            style={{ background: "linear-gradient(135deg, #BF092F, #16476A)" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <span>→</span>
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #16476A, #3B9797)",
              }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className={`px-8 py-4 rounded-xl font-semibold border backdrop-blur-sm w-full sm:w-auto text-center transition-all duration-300 ${
              isDark
                ? "text-white border-white/20 hover:border-[#3B9797]/50 hover:bg-[#3B9797]/10"
                : "text-gray-900 border-gray-300 hover:border-[#16476A]/50 hover:bg-[#16476A]/10"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <SocialLink
              key={social.label}
              social={social}
              isDark={isDark}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div
          className={`flex flex-col items-center gap-2 hover:text-[#3B9797] transition-colors animate-bounce ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}
          style={{ animationDuration: "2s" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
