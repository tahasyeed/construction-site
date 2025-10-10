// import React from "react";
// import mdImg from "../assets/mdPic.jpg";      // 👈 replace with actual image
// // import directorImg from "../assets/director.jpg"; // 👈 replace with actual image

// const Leadership = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen pt-28 pb-16">
//       {/* Heading */}
//       <div className="text-center mb-12 px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 font-rubik">
//           Our Leadership
//         </h1>
//         <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
//           Visionary minds who have built the foundation of Naveed Wani Construction Pvt. Ltd.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

//         {/* Managing Director */}
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
//           <img
//             src={mdImg}
//             alt="Managing Director"
//             className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 mb-4"
//           />
//           <h2 className="text-2xl font-semibold text-gray-800">Mr. Mukhtar Ahmad Wani</h2>
//           <h3 className="text-yellow-600 font-medium mb-3">Managing Director</h3>
//           <p className="text-gray-600 leading-relaxed">
//             With a vision to redefine construction excellence, Mr. Naveed Wani
//             has led the company from humble beginnings to one of the region’s most
//             respected firms. His dedication to quality, innovation, and integrity
//             continues to guide every project we undertake.
//           </p>
//         </div>

//         {/* Director */}
//         <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
//           <img
//             // src={directorImg}
//             alt="Director"
//             className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 mb-4"
//           />
//           <h2 className="text-2xl font-semibold text-gray-800">Mr. Naveed Mukhtar Wani</h2>
//           <h3 className="text-yellow-600 font-medium mb-3">Director</h3>
//           <p className="text-gray-600 leading-relaxed">
//             A true visionary with a deep commitment to excellence and legacy.
//             Under his guidance, the company has expanded its reach, maintained
//             the highest standards of craftsmanship, and built trust that stands
//             as strong as our structures.
//           </p>
//         </div>
//       </div>

//       {/* Legacy Section */}
//       <div className="max-w-5xl mx-auto mt-16 px-6 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Legacy</h2>
//         <p className="text-gray-600 leading-relaxed text-lg">
//           Naveed Wani Construction Pvt. Ltd. was founded on the principles of hard
//           work, precision, and commitment to client satisfaction. Over the years,
//           we’ve completed landmark projects that reflect not only our expertise
//           but also our deep respect for trust and tradition. Our leaders continue
//           to inspire innovation while staying rooted in values that define our legacy.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Leadership;



















import React from "react";
import mdImg from "../assets/mdPic.jpg";      // 👈 replace with actual image
import directorImg from "../assets/naveed.jpg"; // 👈 replace with actual image
import { FaBuilding, FaUserTie, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa';

const Leadership = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16">

      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-600 font-rubik">
          Our Leadership
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
          Visionary minds who have built the foundation of <strong className="font-bold text-yellow-600 underline decoration-red-500">Naveed Wani Construction Pvt. Ltd.</strong> 
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* Managing Director */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <img
            src={mdImg}
            alt="Managing Director"
            className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 font-mono">Mr. Mukhtar Ahmad Wani</h2>
          <h3 className="text-yellow-600 font-medium mb-3 underline decoration-red-500">Managing Director</h3>
          <p className="text-gray-600 leading-relaxed">
            With a vision to redefine construction excellence, <strong className="text-yellow-700">Mr. Mukhtar Ahmad Wani </strong> 
            has led the company from humble beginnings to one of the region’s most
            respected firms. His dedication to quality, innovation, and integrity
            continues to guide every project we undertake.
          </p>
        </div>

        {/* Director */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center">
          <img
            src={directorImg}
            alt="Director"
            className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 mb-4"
          />
          <h2 className="text-2xl font-semibold text-grey-800 font-mono">Mr. Naveed Mukhtar Wani</h2>
          <h3 className="text-yellow-600 font-medium mb-3 underline decoration-red-500">Director</h3>
          <p className="text-gray-600 leading-relaxed">
            A true visionary with a deep commitment to excellence and legacy.
            Under his guidance, the company has expanded its reach, maintained
            the highest standards of craftsmanship, and built trust that stands
            as strong as our structures.
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="max-w-5xl mx-auto mt-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Legacy</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
         <strong className="text-yellow-700">Naveed Wani Construction Pvt. Ltd.</strong> Naveed Wani Construction Pvt. Ltd. was founded on the principles of hard
          work, precision, and commitment to client satisfaction. Over the years,
          we’ve completed landmark projects that reflect not only our expertise
          but also our deep respect for trust and tradition. Our leaders continue
          to inspire innovation while staying rooted in values that define our legacy.
        </p>
      </div>

      {/* Company Details Section */}
      <section className="max-w-6xl mx-auto mt-16 px-6 sm:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Company Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Company Overview */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <FaBuilding className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 underline decoration-red-500">Overview</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Naveed Wani Constructions Private Limited, an active private limited company,
                was established on 09 May 2024 in Pampore, Jammu & Kashmir, India. It holds
                CIN: <span className="font-bold">U46630JK2024PTC016018</span>. Registered
                under ROC Jammu. Bearing Registration Number <span className="font-bold">016018</span>
              </p>
            </div>
          </div>

          {/* Capital Details */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <FaFileAlt className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 underline decoration-red-500">Capital</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Authorized Capital: <span className="font-semibold">₹1.00 M</span> <br />
                Paid-up Capital: <span className="font-semibold">₹1.00 M</span>
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <FaUserTie className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 underline decoration-red-500">Leadership</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Managing Director: <span className="font-semibold">Mukthar Ahmed Wani</span> <br />
                Director: <span className="font-semibold">Naveed Mukhtar</span>
              </p>
            </div>
          </div>

          {/* Registered Address */}
          <div className="flex items-start gap-4 p-6 bg-white shadow-lg rounded-lg">
            <FaMapMarkerAlt className="text-yellow-500 text-3xl mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 underline decoration-red-500">Address</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                C/O Mukthar Ahmad Wani, Umer Colony, Namlebal, Pampore, Jammu & Kashmir, 192121
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Leadership;
