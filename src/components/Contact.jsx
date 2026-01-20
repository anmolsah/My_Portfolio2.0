import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState, useRef, memo, useMemo, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  { icon: Github, href: "https://github.com/anmolsah", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anmol-sah-551083238/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/anni_i29", label: "Twitter" },
];

const SocialLink = memo(({ social, isDark }) => (
  <motion.a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${
      isDark
        ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20"
        : "bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200 hover:border-gray-300"
    }`}
    whileHover={{ y: -4 }}
    aria-label={social.label}
  >
    <social.icon className="w-5 h-5" />
  </motion.a>
));

SocialLink.displayName = 'SocialLink';

const Contact = () => {
  const { isDark } = useTheme();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  }, []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }), []);

  const inputClasses = useMemo(() => 
    `w-full px-5 py-4 rounded-xl border transition-all duration-300 ${
      isDark
        ? "bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-[#3B9797]/50 focus:bg-white/[0.07]"
        : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#3B9797]/50 focus:bg-gray-50 shadow-sm"
    } focus:outline-none`
  , [isDark]);

  return (
    <section
      id="contact"
      className="section-snap relative min-h-screen flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[60px] opacity-15"
          style={{ backgroundColor: "rgba(22, 71, 106, 0.4)" }}
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p
              className={`text-lg max-w-lg mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have something in mind? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="mailto:annifind010@gmail.com"
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 mb-12 ${
              isDark
                ? "bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-[#3B9797]/30"
                : "bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200 hover:border-[#3B9797]/30"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <Mail className="w-5 h-5" style={{ color: "#3B9797" }} />
            <span>annifind010@gmail.com</span>
          </motion.a>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 px-4 py-3 rounded-xl flex items-center justify-center gap-2 ${
                status.type === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              {status.message}
            </motion.div>
          )}

          <motion.form
            ref={formRef}
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-5 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className={inputClasses}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className={inputClasses}
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message..."
              className={`${inputClasses} resize-none`}
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 rounded-xl font-semibold text-white disabled:opacity-70 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #BF092F, #16476A)",
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </span>
            </motion.button>
          </motion.form>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center gap-4"
          >
            {socialLinks.map((social) => (
              <SocialLink key={social.label} social={social} isDark={isDark} />
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`mt-16 text-sm ${
              isDark ? "text-gray-600" : "text-gray-400"
            }`}
          >
            © {new Date().getFullYear()} Anmol Sah
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
