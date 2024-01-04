/*
 * Page/Route Transition Wrapper.
 * These animations happen on every route/path change, on both Client pages and Server pages.
 * ------------------------------------------------------------------------------
 *
 */

"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ type: "spring", damping: 16, stiffness: 160 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
