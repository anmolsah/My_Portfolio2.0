import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/anmolsah", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anmol-sah-551083238/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "annifind010@gamil.com", label: "Email" },
  ];

  return (
    <section className="section-snap relative min-h-screen flex items-center justify-center overflow-hidden grid-bg noise-overlay">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(191, 9, 47, 0.2)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(22, 71, 106, 0.25)" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ backgroundColor: "rgba(59, 151, 151, 0.15)" }}
          animate={{
            x: [-20, 20, -20],
            y: [20, -20, 20],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 md:right-40"
        variants={floatingVariants}
        animate="animate"
      >
        <div
          className="w-20 h-20 md:w-32 md:h-32 rounded-2xl backdrop-blur-sm border border-white/10 rotate-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(191, 9, 47, 0.2), rgba(22, 71, 106, 0.2))",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 md:left-32"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <div
          className="w-16 h-16 md:w-24 md:h-24 rounded-full backdrop-blur-sm border border-white/10"
          style={{
            background:
              "linear-gradient(135deg, rgba(22, 71, 106, 0.2), rgba(59, 151, 151, 0.2))",
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 md:mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text text-glow">Anmol Sah</span>
          </h1>
        </motion.div>

        {/* Role/Title */}
        <motion.div variants={itemVariants} className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-3">
            <Sparkles
              className="w-5 h-5 md:w-6 md:h-6"
              style={{ color: "#BF092F" }}
            />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-200">
              Full Stack Developer
            </h2>
            <Sparkles
              className="w-5 h-5 md:w-6 md:h-6"
              style={{ color: "#3B9797" }}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
        >
          I craft exceptional digital experiences with clean code and creative
          design. Passionate about building products that make a difference and
          contributing to open source projects.
        </motion.p>

        {/* CTA Buttons */}
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
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #16476A, #3B9797)",
              }}
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-center hover:border-[#3B9797]/50 hover:bg-[#3B9797]/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:text-[#3B9797] hover:bg-[#3B9797]/10 hover:border-[#3B9797]/30"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#3B9797] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
