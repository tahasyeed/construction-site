// import React from 'react';
// import project1 from '../assets/project1.jpg'
// import project2 from '../assets/project2.jpg'
// import project3 from '../assets/project3.jpg'
// import project4 from '../assets/project4.jpg'
// import project5 from '../assets/project5.jpg'
// import project6 from '../assets/project6.jpg'
// import project7 from '../assets/project7.jpg'
// import project8 from '../assets/project8.jpg'

// import {motion} from 'framer-motion'
// import { slideUpVariants , zoomInVariants } from './animation';

// const Portfolio = () => {
//     return (
//         <div id='projects' className='w-full'>
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
//                     portfolio
//                 </motion.h3>
//                 <motion.h2
//                 variants={slideUpVariants}
//                 className='uppercase text-white text-5xl font-bold text-center'
//                 >Our Best Projects</motion.h2>
//                 <motion.div
//                 variants={zoomInVariants}
//                 className='w-[120px] h-[6px] bg-yellow-500'
//                 >
//                 </motion.div>
//                 <motion.div
//                 initial='hidden'
//                 whileInView='visible'
//                 variants={zoomInVariants}
//                 className='w-full m-auto grid lg:grid-cols-4 grid-cols-1'
//                 >
//                     <img src={project1} alt="" className='h-[250px] w-full'/>
//                     <img src={project2} alt="" className='h-[250px] w-full'/>
//                     <img src={project3} alt="" className='h-[250px] w-full'/>
//                     <img src={project4} alt="" className='h-[250px] w-full'/>
//                     <img src={project5} alt="" className='h-[250px] w-full'/>
//                     <img src={project6} alt="" className='h-[250px] w-full'/>
//                     <img src={project7} alt="" className='h-[250px] w-full'/>
//                     <img src={project8} alt="" className='h-[250px] w-full'/>
//                 </motion.div>

//             </motion.div>
            
//         </div>
//     );
// };

// export default Portfolio;








import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';

import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';

const Portfolio = () => {
  const projects = [
    project1, project2, project3, project4,
    project5, project6, project7, project8
  ];

  return (
    <div id="projects" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl uppercase"
        >
          portfolio
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-5xl font-bold text-center"
        >
          Our Best Projects
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full aspect-[4/3] overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
