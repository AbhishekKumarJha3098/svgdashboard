import { useRef, useEffect } from "react";

import { motion, useMotionValue } from "framer-motion";

// const transition = { duration: 4, repeat: 2, ease: "linear" };

// const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" }

function TruckRouteImage(props) {

  const pathRefForeground = useRef(null);

  const progressLength = useMotionValue(0);
  const progressX = useMotionValue(0);
  const progressY = useMotionValue(0);

  console.log("Hello",props.truckLocation.tag1)
  // const progress = props.truckLocation.tag1;

  let progress = 100

  if (props.truckLocation.tag1 === 100){
  progress = 100
  } if (props.truckLocation.tag1 === 0) {
  progress = 0
  } if (props.truckLocation.tag1 === 10){
    progress = -100
  }


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
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={3557}
    height={1488}
    fill="none"
    
  >
    <path fill="url(#a)" d="M0 0h2476v1488H0z" />
    <path fill="url(#b)" d="M2472 1h1085v1487H2472z" />
    <path fill="#E5E6E7" d="M2487 24h36v1368h-36zM2200 438h28v890h-28z" />
    <path
      fill="#E5E6E7"
      d="M2980 60V24H31v36zM2687 757v-23h-78v23zM2687 467v-23h-78v23zM3188 24h350v36h-350zM3209 1085V108h24v977zM3528 1327V108h25v1219zM3358 207h44v20h-44z"
    />



    <path 
    stroke="#ED1C23" 
    strokeWidth={2} 
    d="M2503 1381V743h342" 
    />
    
    <motion.path
    stroke="#ED1C23" 
    strokeWidth={2} 
    d="M2503 1381V743h342" 
    ref={pathRefForeground}
        pathLength={progressLength}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: progress / 100 }}
        transition={transition}
    />


      <motion.circle cx={progressX} cy={progressY} r="15" fill="#1f88eb" />
      <motion.circle cx={progressX} cy={progressY} r="5" fill="white" />



    <path fill="#E5E6E7" d="M2593 1272h322v22h-322zM3053 1272h104v22h-104z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="matrix(.0004 0 0 .00067 -.187 -.308)" />
      </pattern>
      <pattern
        id="b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#c" transform="matrix(.00092 0 0 .00067 -2.705 -.31)" />
      </pattern>
      <image
        id="c"
        width={4096}
        height={2048}
        data-name="Layout.png"
      />
    </defs>
  </motion.svg>


      
  )
}

export default TruckRouteImage