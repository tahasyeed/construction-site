// import React from 'react';
// import heroimg from '../assets/heroimg.png'
// import backgroundImg from '../assets/homeimg.webp'
// import {motion} from 'framer-motion'
// import { slideUpVariants , zoomInVariants } from './animation';
// import { Link } from 'react-router-dom';

// const Hero = () => { 
//     return (
//         <div id='hero' className='bg-black w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center' 
//         style={{backgroundImage: `url(${backgroundImg})` }}>
//            <motion.div 
//            initial ="hidden"
//            whileInView="visible"
//            variants={slideUpVariants}
//            className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'
//            >
//             <motion.h1
//                 variants={slideUpVariants}
//                 className='text-yellow-500 text-2xl'
//             >WE ARE BUILDERS 
//             </motion.h1>
//             <motion.h1
//                 variants={slideUpVariants}
//                 className='text-white uppercase text-[50px] font-bold'
//             >we will build your dream </motion.h1>
//             <div className='w-[120px] h-[6px] bg-yellow-500'></div>
//             <p className='text-white text-[20px]'>Whether you’re dreaming of a new structure or enhancing an existing space, Sumon Structures is here to make it happen. With unmatched expertise and dedication, we ensure a smooth building experience from start to finish.</p>

//             <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={zoomInVariants}
//                 className='flex justify-normal items-center gap-5'
//                 >
//                     <motion.button
//                     variants={zoomInVariants}
//                     className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold'
//                     >
//                         READ MORE

//                     </motion.button>

//                   <Link to="/contact">
//                     <motion.button

//                     variants={zoomInVariants}
//                     className='border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold'>
//                         REACH US
//                         </motion.button>
//                         </Link>

//             </motion.div>
//            </motion.div>
//            <div className='w-[40%] flex flex-col justify-end items-end'>
//             <motion.img
//             initial='hidden'
//             whileInView='visible'
//             variants={zoomInVariants}
//                 src={heroimg}
//                 alt='hero image'
//                 className='lg:h-[600px] h-[300px] lg:mb-[-100px]'
//                 />
//            </div>
//         </div>
//     );
// };

// export default Hero;












import React from 'react';
import heroimg from '../assets/heroimg.png';
import backgroundImg from '../assets/homeimg.webp';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div
      id="hero"
      className="w-full h-[600px] lg:h-[700px] flex flex-row items-center justify-between px-4 sm:px-6 lg:px-[150px] bg-black bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Text Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="flex-[0.6] flex flex-col justify-center items-start gap-4 lg:gap-8"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-lg sm:text-xl"
        >
          BUILDING YOUR FUTURE
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-3xl sm:text-4xl lg:text-[50px] font-bold"
        >
          We Turn Dreams Into <span className="block mt-2 text-yellow-500">Reality</span>
        </motion.h1>
        <div className="w-[100px] sm:w-[120px] h-[5px] bg-yellow-500"></div>
        <p className="text-white text-sm sm:text-[18px] lg:text-[20px] leading-relaxed">
          Naveed Wani Construction Pvt. Ltd. delivers high-quality construction
          projects with innovation, precision, and integrity. From residential
          to commercial spaces, we ensure your vision becomes a lasting reality.
        </p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex flex-wrap gap-4 mt-4"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-500 hover:bg-white hover:text-black px-8 sm:px-10 py-3 rounded-lg text-black font-bold"
          >
            READ MORE
          </motion.button>

          <Link to="/contact">
            <motion.button
              variants={zoomInVariants}
              className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-8 sm:px-10 py-3 rounded-lg text-white font-bold"
            >
              REACH US
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="flex-[0.4] flex justify-center lg:justify-end items-center"
      >
        <motion.img
          src={heroimg}
          alt="hero image"
          className="h-[250px] sm:h-[350px] lg:h-[600px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
