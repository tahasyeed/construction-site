import React from "react";
import { motion } from "framer-motion";

// Sample data
const ongoingProjects = [
  {
    title: "Skyline Apartments",
    img: "https://media.istockphoto.com/id/465390164/photo/construction-of-office-building-on-purple-sunset-with-two-cranes.jpg?s=612x612&w=0&k=20&c=GgqquH9Psplcmumy_0do7Iu_C9l0YC8LyFC5EIYs3dE=",
    description:
      "High-rise residential project with modern amenities and eco-friendly design.. ",
  },
  {
    title: "Riverside Commercial Complex",
    img: "https://www.shutterstock.com/image-photo/crane-building-under-construction-against-600nw-2383392667.jpg",
    description:
      "A state-of-the-art commercial complex designed for efficiency and elegance.",
  },
  {
    title: "Greenfield Villas",
    img: "https://media.istockphoto.com/id/507122313/photo/crane-and-construction-site.jpg?s=612x612&w=0&k=20&c=6xB2DdDsShSYAnZvTs3jzfZRTpon4py-ZYmiWtLyBHA=",
    description:
      "Luxury villas with spacious layouts, landscaped gardens, and premium finishes.",
  },
];

const OngoingProjects = () => {
  return (
    <div
      id="ongoing-projects"
      className="w-full bg-black text-white py-[80px] flex flex-col gap-[60px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h3 className="text-yellow-500 text-2xl uppercase">Ongoing Projects</h3>
        <h2 className="uppercase text-white text-5xl font-bold mt-2">
          What We're Building
        </h2>
        <div className="w-[120px] h-[6px] bg-yellow-500 mx-auto mt-4"></div>
      </motion.div>

      <div className="flex flex-col gap-[60px] w-[90%] max-w-6xl mx-auto">
        {ongoingProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            <div className="md:w-1/2 w-full overflow-hidden rounded-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[250px] sm:h-[350px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4">
              <h3 className="text-yellow-500 text-3xl font-bold">{project.title}</h3>
              <p className="text-white text-lg leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OngoingProjects;
