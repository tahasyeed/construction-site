import React from 'react';
import {motion} from 'framer-motion'
import { slideUpVariants , zoomInVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
    return (
        <div id='services' className='w-full bg-white'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'

            >
                <motion.h3
                variants={slideUpVariants}
                className='text-yellow-500 text-2xl uppercase'
                >
                    {/* Special Offer */}
                </motion.h3>
                <motion.h2
                variants={slideUpVariants}
                className='uppercase text-black text-5xl font-bold text-center'
                >Our Best Services</motion.h2>
                <motion.div
                variants={zoomInVariants}
                className='w-[120px] h-[6px] bg-yellow-500'
                >
                </motion.div>
                <motion.div
                initial='hidden'
                whileInView='visible'
                variants={zoomInVariants}
                className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center
                gap-[20px] items-start mt-[30px]'
                >
                    {
                        allservices.map((service, index) => (
                            <motion.div
                            key={index}
                            variants={zoomInVariants}
                            className='flex justify-center items-start gap-5 p-8'
                            >
                                    <img src={service.icon} alt='icon' className='w-[70px] border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2'/>
                                    <div className='flex flex-col justify-center items-start gap-3'>
                                        <h3 className='text-xl font-bold text-black'>{service.title}</h3>
                                        <p className='text-[18px]'>{service.about}</p>
                                    </div>

                            </motion.div>
                        ))
                    }

                </motion.div>
            </motion.div>

        </div>
    );
};

export default Services;





















// import React from 'react';
// import {motion} from 'framer-motion'
// import { slideUpVariants , zoomInVariants } from './animation';
// import { allservices } from '../export';

// const Services = () => {
//     return (
//         <div id='services' className='w-full bg-white overflow-hidden'>
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
//                     {/* Special Offer */}
//                 </motion.h3>
//                 <motion.h2
//                 variants={slideUpVariants}
//                 className='uppercase text-black text-4xl sm:text-5xl font-bold text-center'
//                 >Our Best Services</motion.h2>
//                 <motion.div
//                 variants={zoomInVariants}
//                 className='w-24 h-1 bg-yellow-500 my-4 rounded-full'
//                 />

//                 <motion.div
//                 initial='hidden'
//                 whileInView='visible'
//                 variants={zoomInVariants}
//                 className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-6 justify-center items-start mt-[30px]'
//                 >
//                     {
//                         allservices.map((service, index) => (
//                             <motion.div
//                             key={index}
//                             variants={zoomInVariants}
//                             className='flex justify-start items-start gap-4 p-4 lg:p-8 h-full bg-white rounded-xl shadow-md overflow-hidden'
//                             >
//                                 <img 
//                                     src={service.icon} 
//                                     alt='icon' 
//                                     className='w-12 lg:w-16 border-2 border-yellow-500 hover:bg-yellow-500 rounded-lg p-2 flex-shrink-0'
//                                 />
//                                 <div className='flex flex-col justify-center items-start gap-1 overflow-hidden'>
//                                     <h3 className='text-sm sm:text-lg lg:text-xl font-bold text-black truncate'>{service.title}</h3>
//                                     <p className='text-[12px] sm:text-[14px] lg:text-[16px] text-gray-700 overflow-hidden'>
//                                         {service.about}
//                                     </p>
//                                 </div>
//                             </motion.div>
//                         ))
//                     }
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Services;
