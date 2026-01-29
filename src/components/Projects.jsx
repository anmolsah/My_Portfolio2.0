import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useRef, useEffect, useState, memo } from "react";

const LazyVideo = memo(({ src, isVisible }) => {
  const videoRef = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      if (!hasLoaded) {
        video.src = src;
        setHasLoaded(true);
      }
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible, src, hasLoaded]);

  return (
    <video
      ref={videoRef}
      className="w-full aspect-video object-cover"
      loop
      muted
      playsInline
      preload="none"
    />
  );
});

LazyVideo.displayName = "LazyVideo";

const ProjectCard = memo(({ project, index, isDark }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "100px" },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center`}
    >
      <motion.div
        className="w-full lg:w-3/5 relative group"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative overflow-hidden rounded-2xl">
          <LazyVideo src={project.video} isVisible={isVisible} />

          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
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

        <div
          className="absolute -inset-1 rounded-2xl -z-10 opacity-30 blur-sm"
          style={{
            background: "linear-gradient(135deg, #BF092F, #16476A, #3B9797)",
          }}
        />
      </motion.div>

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

        <div className="flex items-center gap-4 pt-2">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
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
  );
});

ProjectCard.displayName = "ProjectCard";

const projects = [
  {
    title: "NexoraAI",
    description:
      "NexoraAI is a comprehensive AI-powered content creation platform that provides users with a suite of intelligent tools to generate articles, create images, edit photos, and review resumes. Built with modern web technologies, it offers both free and premium tiers to cater to different user needs.",
    video:
      "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1766993378/nexora_vid_fevuzg.mp4",
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
    title: "THUMBGEN",
    description: "AI-Powered Thumbnail Generator for Content Creators.",
    video:
      "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1767188529/thumgen_vid_mxaktz.mp4",
    tags: [
      "React",
      "Mongodb",
      "Expressjs",
      "Nodejs",
      "Typescript",
      "Imagen 4.0 & Gemini",
      "Cashfree Payemnt",
      "Cloudinary",
      "Brevo",
    ],
    github: "https://github.com/anmolsah/ThumbGen.ai",
    live: "https://thumb-gen-ai-pink.vercel.app/",
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
      "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1766994325/movieco_vid_pwelj5.mp4",
    tags: ["React", "Supabase", "TMDB API", "OpenRoueter API"],
    github: "https://github.com/anmolsah/movieco",
    live: "https://movieco-ubb9.vercel.app/",
    featured: true,
  },
  {
    title: "Firstissue.dev",
    description:
      "A platform designed to help developers discover beginner-friendly open source issues and track their contribution journey.",
    video:
      "https://res.cloudinary.com/dl3czd3ib/video/upload/f_auto,q_auto/v1769696366/firstissue.dev_project_je6zyn.mp4",
    tags: ["React", "Supabase", "Kiro IDE", "Github API"],
    github: "https://github.com/anmolsah/firstissue.dev",
    live: "https://www.firstissue.dev/",
    featured: true,
  },
];

const Projects = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="projects"
      className="section-snap relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[60px] opacity-20"
          style={{ backgroundColor: "rgba(22, 71, 106, 0.4)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full blur-[50px] opacity-15"
          style={{ backgroundColor: "rgba(191, 9, 47, 0.3)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm text-sm mb-6 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-gray-100 border border-gray-200"
              }`}
              style={{ color: "#3B9797" }}
            >
              <Folder className="w-4 h-4" />
              Featured Work
            </div>
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

          <div className="space-y-20 md:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isDark={isDark}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-20"
          >
            <motion.a
              href="https://github.com/anmolsah"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:border-[#3B9797]/50 hover:bg-[#3B9797]/10 ${
                isDark
                  ? "text-white border-white/20"
                  : "text-gray-900 border-gray-300"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View All Projects</span>
              <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
