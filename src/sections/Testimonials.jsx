// import React from 'react';
// import {motion} from 'framer-motion'
// import { slideUpVariants , zoomInVariants } from './animation';
// import {clients } from '../export';

// const Testmonials = () => {
//     return (
//         <div id='clients' className='w-full'>
//             <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={slideUpVariants}
//             className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'

//             >
//                 <motion.h3
//                 variants={slideUpVariants}
//                 className='text-yellow-500 text-2xl uppercase'
//                 >Testimonials
//                 </motion.h3>
//                 <motion.h2
//                 variants={slideUpVariants}
//                 className='uppercase text-white text-5xl font-bold text-center'
//                 >WHAT THEY SAY ABOUT US</motion.h2>
//                 <motion.div
//                 variants={zoomInVariants}
//                 className='w-[120px] h-[6px] bg-yellow-500'
//                 >
//                 </motion.div>

//                 <motion.div
//                 initial='hidden'
//                 whileInView='visible'
//                 variants={zoomInVariants}
//                 className='lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center
//                 gap-8 items-start mt-[30px]'
//                 >
//                     {
//                         clients.map((client, index) => (
//                             <div key={index} className='flex flex-col justify-center items-center'>
//                                 <div className='border-2 border-white hover:bg-yellow-500 pb-[100px] p-[30px]'>
//                                     <p className='text-white text-lg text-center italic'>{client.about}</p>
//                                 </div>
//                                 <div className='flex flex-col justify-center items-center gap-[5px]'>
//                                     <img src={client.image} alt={client.name} className='mt-[-50px]'/>
//                                     <h3 className='uppercase text-2xl font-bold text-white'>{client.name}</h3>
//                                     <h4 className='text-xl text-yellow-500'>{client.post}</h4>

//                                 </div>
//                             </div>
//                         ))  
//                     }

//                 </motion.div>

//             </motion.div>
//         </div>
//     );
// };

// export default Testmonials;









import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const clients = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex Parker",
    post: "Constructor",
    about:
      "Alex ensures every project meets quality standards with meticulous planning.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Drew James",
    post: "Architect",
    about:
      "Drew blends modern design with sustainable practices to create innovative buildings.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Sam Peterson",
    post: "Builder",
    about:
      "Sam brings architectural designs to life with precision and attention to detail.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Lisa Wong",
    post: "Engineer",
    about:
      "Lisa ensures projects are executed efficiently and safely to high standards.",
  },
];

const Testimonials = () => {
  return (
    <section id="clients" className="bg-black py-16 w-full overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="max-w-7xl mx-auto flex flex-col items-center gap-6 px-4 sm:px-6"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl uppercase"
        >
          Testimonials
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-4xl sm:text-5xl font-bold text-center"
        >
          Hear From Our Clients
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-24 h-1 bg-yellow-500 my-4 rounded-full"
        />

        {/* Sliding Row */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-slide">
            {clients.concat(clients).map((client, index) => (
              <div
                key={index}
                className="flex flex-col justify-between bg-gray-900 rounded-2xl shadow-lg p-3 w-52 flex-shrink-0"
              >
                <p className="text-white text-sm text-center italic mb-3 break-words">
                  "{client.about}"
                </p>

                <div className="flex flex-col items-center mt-2">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-yellow-500"
                  />
                  <h3 className="uppercase text-white font-bold text-base sm:text-lg mt-1 text-center">
                    {client.name}
                  </h3>
                  <h4 className="text-yellow-500 text-sm text-center">
                    {client.post}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
