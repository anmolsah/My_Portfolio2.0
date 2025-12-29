import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();
  const projects = [
    {
      title: "NexoraAI",
      description:
        "NexoraAI is a comprehensive AI-powered content creation platform that provides users with a suite of intelligent tools to generate articles, create images, edit photos, and review resumes. Built with modern web technologies, it offers both free and premium tiers to cater to different user needs.",
      video:
        "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1766993378/nexora_vid_fevuzg.mp4", // Replace with your Cloudinary video URL
      tags: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Clerk",
        "Cloudinary",
        "Neon Database",
        "OpenRouter",
      ],
      github: "https://github.com/anmolsah/NexoraAI",
      live: "https://nexora-ai-frontend-nine.vercel.app/",
      featured: true,
    },
    {
      title: "RAHI",
      description:
        "RAHi is an intelligent travel planning application that uses AI to create personalized itineraries based on your preferences. Plan your perfect trip with comprehensive features including hotel recommendations, weather information, budget tracking, and much more!",
      video:
        "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1766993211/rahi_vid_ufg4qf.mp4",
      tags: [
        "React",
        "OpenWeatherAPI",
        "GeminiAPI",
        "Firebase",
        "Google Auth",
        "Google Places API",
      ],
      github: "https://github.com/anmolsah/Traveler",
      live: "https://traveler-chi.vercel.app/",
      featured: true,
    },
    {
      title: "MOVIECO",
      description:
        "Movieco is a cutting-edge movie and TV show discovery platform that leverages artificial intelligence to provide personalized recommendations. Built with modern web technologies, it offers an intuitive and engaging experience for movie enthusiasts to discover, track, and manage their entertainment preferences.",
      video:
        "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1766994325/movieco_vid_pwelj5.mp4", // Replace with your Cloudinary video URL
      tags: ["React", "Supabase", "TMDB API", "OpenRoueter API"],
      github: "https://github.com/anmolsah/movieco",
      live: "https://movieco-ubb9.vercel.app/",
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
      id="projects"
      className="section-snap relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ backgroundColor: "rgba(22, 71, 106, 0.15)" }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(191, 9, 47, 0.1)" }}
          animate={{
            scale: [1.1, 1, 1.1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16 md:mb-20"
          >
            <motion.div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm mb-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
              }`}
              style={{ color: "#3B9797" }}
            >
              <Folder className="w-4 h-4" />
              Featured Work
            </motion.div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Projects I've <span className="gradient-text">Built</span>
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A selection of projects that showcase my passion for creating
              impactful digital experiences.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="space-y-20 md:space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Project video */}
                <motion.div
                  className="w-full lg:w-3/5 relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    {/* Video */}
                    <video
                      src={project.video}
                      className="w-full aspect-video object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />

                    {/* Hover overlay with links */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <motion.a
                        href={project.github}
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View GitHub"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-4 rounded-full backdrop-blur-md border border-white/20 text-white transition-colors"
                        style={{ backgroundColor: "rgba(191, 9, 47, 0.8)" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View Live"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative border */}
                  <div
                    className="absolute -inset-1 rounded-2xl -z-10 opacity-50 blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg, #BF092F, #16476A, #3B9797)",
                    }}
                  />
                </motion.div>

                {/* Project info */}
                <div className="w-full lg:w-2/5 space-y-6">
                  <div>
                    <p
                      className="text-sm font-medium mb-2 uppercase tracking-wider"
                      style={{ color: "#3B9797" }}
                    >
                      Featured Project
                    </p>
                    <h3
                      className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <div
                    className={`p-6 rounded-xl backdrop-blur-sm border ${
                      isDark ? "border-white/10" : "border-gray-200 shadow-lg"
                    }`}
                    style={{
                      backgroundColor: isDark
                        ? "rgba(19, 36, 64, 0.5)"
                        : "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full border ${
                          isDark
                            ? "bg-white/5 border-white/10 text-gray-300"
                            : "bg-gray-100 border-gray-200 text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2">
                    <motion.a
                      href={project.github}
                      className={`flex items-center gap-2 transition-colors ${
                        isDark
                          ? "text-gray-400 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">Source Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="flex items-center gap-2 transition-colors"
                      style={{ color: "#3B9797" }}
                      whileHover={{ x: 4 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all projects button */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <motion.a
              href="#"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:border-[#3B9797]/50 hover:bg-[#3B9797]/10 ${
                isDark
                  ? "text-white border-white/20"
                  : "text-gray-900 border-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Projects</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
