import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const GitHubGraph = () => {
  const { isDark } = useTheme();
  const username = "anmolsah";
  
  const darkThemeUrl = `https://ghchart.rshah.org/3B9797/${username}`;
  const lightThemeUrl = `https://ghchart.rshah.org/16476A/${username}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div
        className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm ${
          isDark
            ? "bg-white/5 border-white/10"
            : "bg-white border-gray-200 shadow-lg"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`p-2 rounded-lg ${
              isDark ? "bg-white/10" : "bg-gray-100"
            }`}
          >
            <Github
              className="w-5 h-5"
              style={{ color: isDark ? "#3B9797" : "#16476A" }}
            />
          </div>
          <div>
            <h3
              className={`text-lg sm:text-xl font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              GitHub Contributions
            </h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              @{username}
            </p>
          </div>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="min-w-[750px]">
            <img
              src={isDark ? darkThemeUrl : lightThemeUrl}
              alt="GitHub Contribution Graph"
              className="w-full h-auto"
              style={{
                filter: isDark ? "brightness(1)" : "brightness(0.95)",
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              Less
            </span>
            <div className="flex gap-1">
              {[0.1, 0.3, 0.5, 0.7, 1].map((opacity, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor: isDark
                      ? `rgba(59, 151, 151, ${opacity})`
                      : `rgba(22, 71, 106, ${opacity})`,
                  }}
                />
              ))}
            </div>
            <span className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              More
            </span>
          </div>

          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              isDark
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            View Profile
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubGraph;
