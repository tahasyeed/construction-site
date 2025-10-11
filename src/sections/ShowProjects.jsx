// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";



// const ShowProjects = () => {
//   const [ref, inView] = useInView({ threshold: 0.3 });
//   const [startAnimation, setStartAnimation] = useState(false);

//   // All counters will finish in 3 seconds
//   const totalDuration = 3000; // 3 seconds

//   const stats = [
//     { label: "Completed Projects", value: 30, suffix: "+" },
//     { label: "Ongoing Projects", value: 5, suffix: "+" },
//     { label: "On-Time Delivery", value: 100, suffix: "%" },
//     { label: "Sqft Built", value: 100000, suffix: "+" },
//   ];

//   useEffect(() => {
//     if (inView) setStartAnimation(true);
//   }, [inView]);

//   return (
//     <div
//       ref={ref}
//       id="projects"
//       className="w-full bg-black text-white py-[80px] flex flex-col justify-center items-center gap-[40px]"
//     >
//       <motion.h3
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-yellow-500 text-2xl uppercase"
//       >
//         Projects
//       </motion.h3>

//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="uppercase text-white text-5xl font-bold text-center"
//       >
//         Our Achievements
//       </motion.h2>

//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="w-[120px] h-[6px] bg-yellow-500"
//       />

//       <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 mt-[40px]">
//         {stats.map((stat, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.2 }}
//             className="flex flex-col justify-center items-center border-2 border-yellow-500 rounded-2xl p-10 hover:bg-yellow-500 hover:text-black transition duration-300"
//           >
//             <h3 className="text-5xl font-bold text-yellow-500">
//               {startAnimation ? (
//                 <Counter value={stat.value} totalDuration={totalDuration} />
//               ) : (
//                 0
//               )}
//               {stat.suffix}
//             </h3>
//             <p className="text-xl mt-3 text-center">{stat.label}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Counter that finishes at the same time for all
// const Counter = ({ value, totalDuration }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const end = value;
//     const stepTime = 30; // ms per update
//     const steps = totalDuration / stepTime;
//     const increment = Math.ceil(end / steps);

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [value, totalDuration]);

//   return <span>{count.toLocaleString()}</span>;
// };

// export default ShowProjects;










import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OngoingProjects from './OngoingProjects';

const ShowProjects = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [startAnimation, setStartAnimation] = useState(false);

  const totalDuration = 3000; // All counters finish in 3s

  const stats = [
    { label: "Completed Projects", value: 30, suffix: "+" },
    { label: "Ongoing Projects", value: 5, suffix: "+" },
    { label: "On-Time Delivery", value: 100, suffix: "%" },
    { label: "Sqft Built", value: 100000, suffix: "+" },
  ];

  useEffect(() => {
    if (inView) setStartAnimation(true);
  }, [inView]);

  return (
    <>
    <div
      ref={ref}
      id="projects"
      className="w-full bg-black text-white py-[80px] flex flex-col justify-center items-center gap-[40px]"
    >
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-yellow-500 text-2xl uppercase"
      >
        Projects
      </motion.h3>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="uppercase text-white text-5xl md:text-5xl text-center font-bold"
      >
        Our Achievements
      </motion.h2>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[120px] h-[6px] bg-yellow-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-[40px] w-[90%] max-w-6xl">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex flex-col justify-center items-center border-2 border-yellow-500 rounded-2xl p-6 sm:p-8 hover:bg-emerald-900 hover:text-yellow-500 transition duration-300"
          >
            <h3 className="text-yellow-500 font-bold text-center text-4xl sm:text-5xl md:text-5xl break-words">
              {startAnimation ? (
                <Counter value={stat.value} totalDuration={totalDuration} />
              ) : (
                0
              )}
              {stat.suffix}
            </h3>
            <p className="text-xl mt-3 text-center">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
   <OngoingProjects/>
    </>
  );
  
};

// Counter that finishes at the same time for all
const Counter = ({ value, totalDuration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const stepTime = 30; // ms per update
    const steps = totalDuration / stepTime;
    const increment = Math.ceil(end / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, totalDuration]);

  return <span>{count.toLocaleString()}</span>;
};

export default ShowProjects;

































