// components/ScrollAnimation.tsx
"use client"
import React , {useState, useEffect, useRef} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [scrollingDown, setScrollingDown] = useState(true);
  const scrollYRef = useRef<number | null>(null);

  React.useEffect(() => {
    if (inView && scrollingDown) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView, scrollingDown]);

  const variants = {
    // visible: { opacity: 1, y: 10 ,transition: { duration: 2 } },
    // hidden: { opacity: 0, y: 60,transition: { duration: 2 }  },
    visible: { y: 0 , transition : {duration:0.5}},
    hidden: { y: 50 ,transition : {duration:0.5}},
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollingDown(scrollY > (scrollYRef.current || 0));
      scrollYRef.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
