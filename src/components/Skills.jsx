import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();
  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      color: "#00599C",
    },
    {
      name: "Supabase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      color: "#3ECF8E",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#ffffff",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#4169E1",
    },
    {
      name: "Tailwind",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      color: "#06B6D4",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
    },

    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "#FFCA28",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "#764ABC",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#ffffff",
    },
    {
      name: "Postman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      color: "#FF6C37",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="section-snap relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(22, 71, 106, 0.15)" }}
          animate={{ scale: [1, 1.15, 1], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(59, 151, 151, 0.12)" }}
          animate={{ scale: [1.1, 1, 1.1], x: [-20, 20, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm mb-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
              }`}
              style={{ color: "#3B9797" }}
            >
              <Layers className="w-4 h-4" />
              My Expertise
            </motion.div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Technologies I've been working with and continuously improving
            </p>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="group relative"
                whileHover={{ scale: 1.08, y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div
                  className={`relative p-4 md:p-6 rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                    isDark
                      ? "bg-white/5 border-white/10 group-hover:border-white/25 group-hover:bg-white/[0.08]"
                      : "bg-white border-gray-200 shadow-sm group-hover:border-gray-300 group-hover:shadow-md"
                  }`}
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`,
                    }}
                  />

                  {/* Logo */}
                  <div className="relative flex flex-col items-center gap-3">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                      whileHover={{ rotateY: 360 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                        loading="lazy"
                      />
                    </motion.div>
                    <span
                      className={`text-xs md:text-sm transition-colors duration-300 text-center font-medium ${
                        isDark
                          ? "text-gray-400 group-hover:text-white"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>

                  {/* Bottom glow line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Currently learning */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div
              className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border ${
                isDark ? "border-white/10" : "border-gray-200"
              }`}
              style={{
                backgroundColor: isDark
                  ? "rgba(19, 36, 64, 0.5)"
                  : "rgba(248, 250, 252, 0.9)",
              }}
            >
              <div className="relative flex h-3 w-3">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: "#3B9797" }}
                />
                <span
                  className="relative inline-flex rounded-full h-3 w-3"
                  style={{ backgroundColor: "#3B9797" }}
                />
              </div>
              <span className={isDark ? "text-gray-300" : "text-gray-600"}>
                Currently learning:{" "}
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Typescript, GCP, System Design
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
