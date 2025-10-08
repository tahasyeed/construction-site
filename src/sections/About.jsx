// import React from 'react';
// import {motion} from 'framer-motion'
// import { slideUpVariants , zoomInVariants } from './animation';

// const About = () => {
//     return (
//         <div id='about' className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]'>
//             <motion.div
//             initial='hidden'
//             whileInView='visible'
//             variants={slideUpVariants}
//             className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
//             >
//                 <motion.h1
//                 variants={slideUpVariants}
//                 className='uppercase text-yellow-500 text-2xl'
//                 >
//                     Welcome to
//                 </motion.h1>
//                 <motion.h1
//                 variants={slideUpVariants}
//                 className='text-5xl font-bold text-white uppercase'
//                 >
//                     <span className='text-yellow-400'>Naveed Wani</span> <br />Construction Pvt. Ltd.
//                 </motion.h1>
//                 <div className='w-[120px] h-[6px] bg-yellow-500'></div>
//                 <p className='text-3xl italic text-gray-50 mt-[50px]'>At <strong className='text-yellow-400'>Naveed Wani Construction Pvt. Ltd.</strong>, we turn your visions into reality with precision and quality.
// We specialize in crafting spaces that inspire, endure, and reflect your dreams.</p>

//             </motion.div>
            
//             <motion.div
//             initial='hidden'
//             whileInView='visible'
//             variants={slideUpVariants}
//             className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
//             >
//                 <p className='text-white text-lg text-justify'>With years of experience in the construction industry, Naveed Wani Construction Pvt. Ltd. is committed to transforming visions into reality. We specialize in delivering high-quality residential and commercial projects with precision, innovation, and integrity. Our dedicated team ensures that every project meets the highest standards of safety, durability, and design excellence, making us a trusted partner for clients who value reliability and professionalism.</p>
//                 <p className='text-white text-lg text-justify'>Explore our extensive portfolio and discover why we are the go-to builders for projects across the region.</p>
//                 <motion.button
//                 variants={zoomInVariants}
//                 className='bg-yellow-500 hover:bg-white  text-white hover:text-black py-3 px-10 rounded-md hover:bg-yellow
//                 -600 transition duration-300 font-bold'
//                 >
                
                
                
//                     Learn More
//                 </motion.button>
//             </motion.div>

//         </div>
//     );
// };

// export default About;













import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

// Helper component to animate letters
const AnimatedLetters = ({ text, className }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]"
    >
      {/* Left Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify-center items-start gap-6"
      >
        <motion.h1
          variants={slideUpVariants}
          className="uppercase text-yellow-500 text-2xl"
        >
          Welcome to
        </motion.h1>

        <motion.h1 className="text-5xl font-bold text-white uppercase">
          <span className="text-yellow-400">
            <AnimatedLetters text="Naveed Wani" />
          </span>
          <br />
          <AnimatedLetters text="Construction Pvt. Ltd." />
        </motion.h1>

        <div className="w-[120px] h-[6px] bg-yellow-500"></div>

        <p className="text-3xl italic text-gray-50 mt-[50px]">
          At <strong className="text-yellow-400">Naveed Wani Construction Pvt. Ltd.</strong>, we turn your visions into reality with precision and quality. We specialize in crafting spaces that inspire, endure, and reflect your dreams.
        </p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[40%] w-full flex flex-col justify-center items-start gap-6"
      >
        <p className="text-white text-lg text-justify">
          With years of experience in the construction industry, Naveed Wani Construction Pvt. Ltd. is committed to transforming visions into reality. We specialize in delivering high-quality residential and commercial projects with precision, innovation, and integrity. Our dedicated team ensures that every project meets the highest standards of safety, durability, and design excellence, making us a trusted partner for clients who value reliability and professionalism.
        </p>
        <p className="text-white text-lg text-justify">
          Explore our extensive portfolio and discover why we are the go-to builders for projects across the region.
        </p>
        <motion.button
          variants={zoomInVariants}
          className="bg-yellow-500 hover:bg-white text-white hover:text-black py-3 px-10 rounded-md transition duration-300 font-bold"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
