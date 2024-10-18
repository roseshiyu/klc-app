// components/AnimatedList.tsx
"use client";
// components/AnimatedList.tsx
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

// Define animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2, // Delay for each item animation
    },
  }),
};

// Define the component props interface
interface AnimatedListProps {
  children: ReactNode[];
}

const AnimatedList: React.FC<AnimatedListProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Automatically set visibility to true on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {children.map((child, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={itemVariants}
          className="mb-4"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedList;
