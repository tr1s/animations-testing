/*
 * Page/Route Transition Wrapper.
 * These animations happen on every route/path change, on both Client pages and Server pages.
 * ------------------------------------------------------------------------------
 *
 */

"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionWrapper({ children }) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait" layoutId={path}>
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
