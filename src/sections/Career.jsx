// // src/pages/Career.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { slideUpVariants } from "../sections/animation";
// import { useNavigate } from "react-router-dom";

// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Developer",
//     location: "Srinagar, India",
//     experience: "0-2 years",
//     description:
//       "We’re looking for a creative Frontend Developer with solid skills in React.js, Tailwind CSS, and modern JavaScript. You’ll collaborate with our design and backend teams to deliver stunning, responsive interfaces ijlWe’re looking for a creative Frontend Developer with solid skills in React.js, Tailwind CSS, and modern JavaScript. You’ll collaborate with our design and backend teams to deliver stunning, responsive interfaces.We’re looking for a creative Frontend Developer with solid skills in React.js, Tailwind CSS, and modern JavaScript. You’ll collaborate with our design and backend teams to deliver stunning, responsive interfaces.We’re looking for a creative Frontend Developer with solid skills in React.js, Tailwind CSS, and modern JavaScript. You’ll collaborate with our design and backend teams to deliver stunning, responsive interfaces. ",
//   },
//   {
//     id: 2,
//     title: "Site Engineer",
//     location: "Srinagar, India",
//     experience: "1-3 years",
//     description:
//       "Responsible for on-site supervision, quality control, and project execution. You’ll coordinate between clients, architects, and contractors to ensure smooth progress.",
//   },
//   {
//     id: 3,
//     title: "Project Manager",
//     location: "Remote/On-site",
//     experience: "3-5 years",
//     description:
//       "Oversee multiple construction projects from start to finish. Excellent leadership, scheduling, and budgeting skills are required.",
//   },
// ];

// const Career = () => {
//   const [openJob, setOpenJob] = useState(null);
//   const navigate = useNavigate();

//   const toggleJob = (id) => {
//     setOpenJob(openJob === id ? null : id);
//   };

//   return (
//     <div
//       id="career"
//       className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-center items-start text-white"
//     >
//       <motion.h1
//         initial="hidden"
//         whileInView="visible"
//         variants={slideUpVariants}
//         className="text-4xl font-bold text-yellow-400 uppercase mb-10"
//       >
//         Careers at Naveed Wani Construction
//       </motion.h1>

//       <div className="w-full flex flex-col gap-6">
//         {jobs.map((job) => (
//           <motion.div
//             key={job.id}
//             variants={slideUpVariants}
//             initial="hidden"
//             whileInView="visible"
//             className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-700"
//           >
//             <div
//               onClick={() => toggleJob(job.id)}
//               className="flex justify-between items-center cursor-pointer"
//             >
//               <h2 className="text-2xl font-semibold text-yellow-400 hover:text-yellow-300 transition">
//                 {job.title}
//               </h2>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate(`/apply/${encodeURIComponent(job.title)}`);
//                 }}
//                 className="bg-yellow-500 hover:bg-white hover:text-black text-black font-bold px-5 py-2 rounded-md transition"
//               >
//                 Apply Now
//               </button>
//             </div>
//             <p className="text-sm text-gray-400 mt-2">
//               📍 {job.location} | 💼 {job.experience}
//             </p>

//             {openJob === job.id && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className="mt-4 text-gray-300"
//               >
//                 <p>{job.description}</p>
//               </motion.div>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Career;



















import React from "react";
import { Briefcase, Clock } from "lucide-react";

const Career = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 text-center px-6">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl w-full border">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Briefcase className="text-yellow-500 w-16 h-16 animate-bounce" />
            <Clock className="absolute -top-2 -right-2 w-6 h-6 text-gray-400 animate-spin-slow" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          No Open Positions Right Now
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We currently don’t have any job openings.  
          But don’t worry — exciting opportunities are on the way!  
          Stay tuned and check back soon for upcoming roles at{" "}
          <span className="font-semibold text-yellow-600">
            Naveed Wani Construction
          </span>.
        </p>
        {/* <div className="mt-8">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all duration-200">
            Notify Me
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Career;
