import { motion } from "framer-motion";
import { asset } from "../assets/assets";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section
      id="about"
      className="section-snap relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ backgroundColor: "rgba(59, 151, 151, 0.12)" }}
          animate={{
            scale: [1, 1.2, 1],
            x: [-20, 20, -20],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(191, 9, 47, 0.1)" }}
          animate={{
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm mb-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
              }`}
              style={{ color: "#3B9797" }}
            >
              Get to know me
            </motion.div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto lg:mx-0"
            >
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #BF092F, #16476A, #3B9797)",
                    padding: "3px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
                </motion.div>

                <div
                  className={`absolute inset-4 rounded-full overflow-hidden border-2 ${
                    isDark ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  <img
                    src={asset.photo}
                    alt="Your Name"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full items-center justify-center text-6xl hidden"
                    style={{
                      background: "linear-gradient(135deg, #132440, #16476A)",
                      display: "none",
                    }}
                  >
                    👨‍💻
                  </div>
                </div>

                <motion.div
                  className="absolute -top-2 -right-2 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10"
                  style={{ backgroundColor: "rgba(191, 9, 47, 0.9)" }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-white font-semibold text-sm">
                    Open to Work
                  </span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10"
                  style={{ backgroundColor: "rgba(59, 151, 151, 0.9)" }}
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <span className="text-white font-semibold text-sm">
                    Fresher 2025
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3
                  className={`text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  A passionate developer ready to make an impact
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Hello! I'm a recent graduate with a deep passion for web
                  development and creating meaningful digital experiences. My
                  journey in tech started with curiosity and has grown into a
                  full-fledged commitment to building innovative solutions.
                </p>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  During my academic journey, I've worked on various projects
                  that helped me develop strong problem-solving skills and a
                  keen eye for detail. I'm excited to bring my fresh
                  perspective, enthusiasm, and dedication to a team where I can
                  contribute and grow.
                </p>
                <p
                  className={`leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or
                  learning about the latest industry trends.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: "15+", label: "Projects" },
                  { value: "10+", label: "Technologies" },
                  { value: "100%", label: "Dedication" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`text-center p-4 rounded-xl border ${
                      isDark
                        ? "bg-white/5 border-white/10"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: "#3B9797" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`text-sm mt-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
