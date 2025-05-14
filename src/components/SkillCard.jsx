"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SkillCard = ({ name, level, color }) => {
  const c = useAnimation();
  const r = useRef(null);
  const i = useInView(r, { once: true, margin: "-50px" });
  const b = color.replace("text", "bg");

  const g = {
    "text-cyber-green": "rgba(74, 222, 128, 0.7)",
    "text-electric-blue": "rgba(59, 130, 246, 0.7)",
    "text-accent-pink": "rgba(236, 72, 153, 0.7)",
    "text-yellow-400": "rgba(250, 204, 21, 0.7)",
    "text-purple-500": "rgba(168, 85, 247, 0.7)"
  };

  const gc = g[color] || "rgba(59, 130, 246, 0.7)";

  useEffect(() => {
    if (i) {
      c.start({ width: `${level}%`, transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 } });
    }
  }, [level, c, i]);

  useEffect(() => {
    const k = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
        alert("Inspection disabled.");
      }
    };
    const rClick = (e) => {
      e.preventDefault();
      alert("Right-click disabled.");
    };

    document.addEventListener("keydown", k);
    document.addEventListener("contextmenu", rClick);

    return () => {
      document.removeEventListener("keydown", k);
      document.removeEventListener("contextmenu", rClick);
    };
  }, []);

  const cr = (e) => {
    const t = e.currentTarget;
    const s = document.createElement("span");
    const d = Math.max(t.clientWidth, t.clientHeight);
    const rad = d / 2;
    s.style.width = s.style.height = `${d}px`;
    s.style.left = `${e.clientX - t.getBoundingClientRect().left - rad}px`;
    s.style.top = `${e.clientY - t.getBoundingClientRect().top - rad}px`;
    s.classList.add("ripple");
    const ex = t.getElementsByClassName("ripple")[0];
    if (ex) ex.remove();
    t.appendChild(s);
  };

  return (
    <motion.div
      ref={r}
      className="group bg-navy-light/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden border border-navy-dark/20 hover:border-electric-blue/30"
      initial={{ opacity: 0, y: 40 }}
      animate={i ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 0 20px -5px ${gc}` }}
      onClick={cr}
    >
      <motion.div
        className={`absolute -top-10 -left-10 w-20 h-20 rounded-full ${b} opacity-10 blur-xl`}
        animate={{ x: [0, 15, 0], y: [0, 15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      <motion.div
        className={`absolute -bottom-5 -right-5 w-16 h-16 rounded-full ${b} opacity-10 blur-xl`}
        animate={{ x: [0, -10, 0], y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-3">
          <motion.h3
            className={`text-lg font-bold font-rajdhani ${color} transition-colors duration-300 group-hover:text-electric-blue relative inline-block`}
            whileHover={{ scale: 1.05 }}
          >
            {name}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric-blue"
              initial={{ width: 0 }}
              whileHover={{ width: "100%", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            />
          </motion.h3>

          <motion.span
            className="text-text-light font-fira transition-colors duration-300 group-hover:text-white relative"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1, scale: 1.2, textShadow: `0 0 8px ${gc}` }}
          >
            {level}%
            <motion.span
              className="absolute -right-3 top-0 text-xs"
              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ▴
            </motion.span>
          </motion.span>
        </div>

        <div className="w-full bg-navy-dark/50 rounded-full h-2.5 overflow-hidden relative backdrop-blur-sm">
          <motion.div
            className={`h-full rounded-full ${b} relative`}
            style={{ width: `${level}%`, boxShadow: `0 0 10px ${gc}` }}
            initial={{ width: 0 }}
            animate={c}
          >
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />

            {[0, 1, 2, 3].map((x) => (
              <motion.div
                key={x}
                className={`absolute top-0 w-1.5 h-1.5 rounded-full ${b}`}
                style={{ left: `${10 + Math.random() * 80}%`, boxShadow: `0 0 8px 2px ${gc}` }}
                animate={{ y: [0, -4, 0], opacity: [0.8, 1, 0] }}
                transition={{ duration: 1.5 + Math.random(), repeat: Infinity, repeatDelay: Math.random() * 3, delay: x * 0.3 }}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          className={`text-xs font-fira mt-1 ${color} flex justify-end items-center`}
          initial={{ opacity: 0, x: -10 }}
          animate={i ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            animate={{ textShadow: [`0 0 0px ${gc}`, `0 0 8px ${gc}`, `0 0 0px ${gc}`] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-1"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              ▴
            </motion.span>
            Skill Proficiency
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1, background: `radial-gradient(circle at center, ${gc} 0%, transparent 70%)` }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default SkillCard;
