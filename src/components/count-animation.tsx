import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function CountAnimation({
  number,
  className,
}: {
  number: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, number, { duration: 2 });
    return () => controls.stop();
  }, []);

  return <motion.div className={className}>{rounded}</motion.div>;
}
