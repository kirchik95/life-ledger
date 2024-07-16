import { Variants } from 'framer-motion';

export const backdropVariants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const modalVariants: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
