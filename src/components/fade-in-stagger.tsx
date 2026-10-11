'use client';
import { useRef, type ReactNode } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'motion/react';

// Expo-out style curve: fast start, long soft landing.
const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER = 0.1;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const noMotion: Variants = { hidden: {}, visible: {} };

type Props = { children: ReactNode; className?: string; margin?: string };

/** Starts its FadeInItem children once the block scrolls into view, 0.1s apart. */
export function FadeInStagger({ children, className, margin = '0px 0px -12% 0px' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as never });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={reduce ? noMotion : container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

const tags = { div: motion.div, address: motion.address } as const;

/** A child of FadeInStagger: slides up slightly and fades in with a decelerating ease. */
export function FadeInItem({
  as = 'div',
  children,
  className,
}: {
  as?: keyof typeof tags;
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const Tag = tags[as];
  return (
    <Tag className={className} variants={reduce ? noMotion : item}>
      {children}
    </Tag>
  );
}
