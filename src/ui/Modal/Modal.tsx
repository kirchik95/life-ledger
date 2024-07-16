import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

import { backdropVariants, modalVariants } from './constants';

import s from './Modal.module.css';

interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({ showModal, setShowModal, children, className }: ModalProps) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {showModal && (
        <motion.div
          className={cn(s.backdrop, className)}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className={s.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root') as HTMLElement,
  );
};
