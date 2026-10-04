"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function Intro() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("nebo-intro");
    if (reduce || seen) return;
    setVisible(true);
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("nebo-intro", "1");
      setVisible(false);
    }, 2700);
    return () => clearTimeout(timer);
  }, [reduce]);

  const skip = () => {
    sessionStorage.setItem("nebo-intro", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .55 }}>
          <button onClick={skip} className="introSkip">SKIP</button>
          <div className="introCenter">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>КРАСНОДАР</motion.p>
            <motion.div className="liftLine" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.35, ease: [0.76,0,0.24,1] }} />
            <motion.h1 initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .8, duration: .8 }}>НЕБЕСНЫЙ<br/>САД</motion.h1>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.45 }}>ВЫШЕ ГОРОДА ↑</motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
