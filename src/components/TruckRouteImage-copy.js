import { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./styles.css";

// const transition = { duration: 4, repeat: 2, ease: "linear" };

// const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

function TruckRouteImage() {

  const pathRefForeground = useRef(null);

  const progressLength = useMotionValue(0);
  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);


  const progress = 100;


  useEffect(() => {
    const pathElementForeground = pathRefForeground.current;
    const totalPathLength = pathElementForeground.getTotalLength();
    const initialProgress = progressLength.get();

    const initialCoords = pathElementForeground.getPointAtLength(
      initialProgress * totalPathLength
    );

    progressX.set(initialCoords.x);
    progressY.set(initialCoords.y);

    const unsubscribe = progressLength.onChange((latestPercent) => {
      const latestPathProgress = pathElementForeground.getPointAtLength(
        latestPercent * totalPathLength
      );

      progressX.set(latestPathProgress.x);
      progressY.set(latestPathProgress.y);
    });

    return unsubscribe;
  }, []);


  const transition = {
    repeat: 0,
    bounce: 0.75,
    // type: "spring",
    duration: 5
  };

  return (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={835.036}
    height={614.905}
    viewBox="-163.174 643.313 318.109 234.25"
  >
    <title>{"Untitled"}</title>
    <path fill="#FFF" d="M-163.174 643.313h318.109v234.25h-318.109z" />
    <path
      fill="none"
      stroke="#746d9b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.155}
      d="M-151.238 647.01h90.743v60.495h-90.743V647.01M-30.248 647.01v105.866h90.743V647.01h-90.743 0M-151.238 737.752h90.743v45.372H0v30.247h-151.238v-75.619M30.248 783.124h105.866v45.371H120.99v30.248H30.248v-75.619h0"
    />
    <path
      fill="none"
      stroke="#746d9b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.155}
      d="M-151.238 722.629h105.867V768h196.609M151.238 768v75.619h-15.124v30.248H15.124v-30.248h-30.248 0"
    />
    <motion.path
  
    fill="none"
    stroke="#746d9b"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.155}
    d="M-151.238 722.629h105.867V768h196.609M151.238 768v75.619h-15.124v30.248H15.124v-30.248h-30.248 0"
    ref={pathRefForeground}
        pathLength={progressLength}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress / 100 }}
        transition={transition}
  />

<motion.circle cx={progressX} cy={progressY} r="15" fill="#1f88eb" />
      <motion.circle cx={progressX} cy={progressY} r="5" fill="white" />
  </motion.svg>


      
  )
}

export default TruckRouteImage