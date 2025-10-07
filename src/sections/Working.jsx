// import React from 'react';
// import {motion} from 'framer-motion'
// import { slideUpVariants , zoomInVariants } from './animation';
// import { allservices, planning } from '../export';
// const Working = () => {
//     return (
//         <div id='working' className='w-full bg-white'>
//             <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={slideUpVariants}
//             className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'

//             >
//                 <motion.h3
//                 variants={slideUpVariants}
//                 className='text-yellow-500 text-2xl uppercase'
//                 >
//                     Step by Step
//                 </motion.h3>
//                 <motion.h2
//                 variants={slideUpVariants}
//                 className='uppercase text-black text-5xl font-bold text-center'
//                 >How It's Working</motion.h2>
//                 <motion.div
//                 variants={zoomInVariants}
//                 className='w-[120px] h-[6px] bg-yellow-500'
//                 >
//                 </motion.div>

//                 <motion.div
//                 initial='hidden'
//                 whileInView='visible'
//                 variants={zoomInVariants}
//                 className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center
//                 gap-[20px] items-start mt-[30px]'
//                 >
//                     {
//                         planning.map((item,index) =>(
//                             <div key={index} className='flex flex-col justify-center items-center gap-5 border-2 border-yellow-500 rounded-md p-6'>
//                                 <div>
//                                 <item.icon className='size-[80px] bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer'/>
//                                 </div>
//                                 <h1 className='text-2xl font-bold uppercase'>{item.title}</h1>
//                                 <p className='text-[20px] text-center text-gray-600'>{item.about}</p>
//                                 </div>
//                         ))
//                     }

//                 </motion.div>

//             </motion.div>
//         </div>
//     );
// };

// export default Working;




// import React from 'react';
// import { motion } from 'framer-motion';
// import { slideUpVariants, zoomInVariants } from './animation';
// import { planning } from '../export';

// const Working = () => {
//   return (
//     <div id="working" className="w-full bg-white">
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         variants={slideUpVariants}
//         className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
//       >
//         <motion.h3
//           variants={slideUpVariants}
//           className="text-yellow-500 text-2xl uppercase"
//         >
//           Step by Step
//         </motion.h3>
//         <motion.h2
//           variants={slideUpVariants}
//           className="uppercase text-black text-5xl font-bold text-center"
//         >
//           How It's Working
//         </motion.h2>
//         <motion.div
//           variants={zoomInVariants}
//           className="w-[120px] h-[6px] bg-yellow-500"
//         ></motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={zoomInVariants}
//           className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-5 items-start mt-[30px]"
//         >
//           {planning.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col justify-between items-center gap-5 border-2 border-yellow-500 rounded-md p-6 h-full min-h-[350px] transition-transform duration-300 hover:scale-105"
//             >
//               <div>
//                 <item.icon className="w-20 h-20 bg-yellow-500 hover:bg-black hover:fill-white p-4 rounded-full cursor-pointer" />
//               </div>
//               <h1 className="text-2xl font-bold uppercase text-center">{item.title}</h1>
//               <p className="text-[18px] text-center text-gray-600">{item.about}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Working;








import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { planning } from '../export';
import { FaArrowRight } from 'react-icons/fa';

const Working = () => {
  return (
    <div id='working' className='w-full bg-white'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-6'
      >
        <motion.h3
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl uppercase'
        >
          Step by Step
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className='uppercase text-black text-4xl md:text-5xl font-bold text-center'
        >
          How It's Working
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className='w-[120px] h-[6px] bg-yellow-500'
        />

        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          className='w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4 mt-6'
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className='relative flex flex-col justify-start items-center border-2 border-yellow-500 rounded-md p-4 bg-white hover:scale-105 transition-transform duration-300'
            >
              {/* Icon */}
              <div>
                <item.icon className='w-10 h-10 bg-yellow-500 hover:bg-black hover:fill-white p-2 rounded-full cursor-pointer' />
              </div>

              {/* Title */}
              <h1 className='text-base md:text-lg font-bold uppercase text-center mt-2'>
                {item.title}
              </h1>

              {/* Description */}
              <p className='text-xs md:text-sm text-center text-gray-600 mt-1 leading-snug'>
                {item.about}
              </p>

              {/* Arrow (visible for all but last card) */}
              {index !== planning.length - 1 && (
                <FaArrowRight
                  className='absolute text-yellow-500 text-lg top-1/2 -translate-y-1/2 right-[-12px] lg:block md:block sm:block'
                />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Working;
