// import React, { useState } from 'react';
// import { FaXmark, FaBars } from 'react-icons/fa6';
// import { Link } from 'react-scroll';
// import logo from '../assets/logo.png'; // 👈 your logo path here

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };

//     const navItem = [
//         { link: 'Home', path: 'home' },
//         { link: 'About', path: 'about' },
//         { link: 'Services', path: 'services' },
//         { link: 'Project', path: 'projects' },
//         { link: 'Contact', path: 'contact' },
//     ];

//     return (
//         <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 top-0 z-50'>

//             {/* Logo and Company Name */}
//             <a href="/" className="flex items-center gap-3">
//                 <img 
//                     src={logo} 
//                     alt="Naveed Wani Construction Logo" 
//                     className="w-16 h-16 object-contain"
//                 />
//                 <h1 className='text-black md:text-4xl text-3xl font-bold font-rubik'>
//                     Naveed Wani <span className='text-yellow-500 italic'>Construction Pvt. Ltd.</span>
//                 </h1>
//             </a>

//             {/* Desktop Menu */}
//             <ul className='lg:flex justify-normal items-center gap-6 hidden'>
//                 {navItem.map((item, index) => (
//                     <li key={index}>
//                         <Link
//                             to={item.path}
//                             className='text-black uppercase font-bold cursor-pointer p-3 rounded-md hover:bg-yellow-500 hover:text-black text-[16px]'
//                             spy={true}
//                             offset={-100}
//                             smooth={true}
//                         >
//                             {item.link}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>

//             {/* Mobile Menu Toggle Icon */}
//             <div className='flex justify-between items-center lg:hidden mt-3' onClick={toggleMenu}>
//                 {isMenuOpen ? (
//                     <FaXmark className='text-yellow-500 text-3xl cursor-pointer' />
//                 ) : (
//                     <FaBars className='text-yellow-500 text-3xl cursor-pointer' />
//                 )}
//             </div>

//             {/* Mobile Menu */}
//             <div
//                 className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 p-4 absolute top-[72px] left-0`}
//                 onClick={closeMenu}
//             >
//                 <ul className='flex flex-col justify-center items-center gap-2 w-full'>
//                     {navItem.map((item, index) => (
//                         <li key={index}>
//                             <Link
//                                 to={item.path}
//                                 className='text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center'
//                                 spy={true}
//                                 offset={-100}
//                                 smooth={true}
//                             >
//                                 {item.link}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Header;








// import React, { useState } from 'react';
// import { FaXmark, FaBars } from 'react-icons/fa6';
// import { Link } from 'react-scroll';
// import logo from '../assets/logo.png'; // 👈 update path if needed

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);

//   const navItem = [
//     { link: 'Home', path: 'home' },
//     { link: 'About', path: 'about' },
//     { link: 'Services', path: 'services' },
//     { link: 'Project', path: 'projects' },
//     { link: 'Contact', path: 'contact' },
//   ];

//   return (
//     <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
//       <div className="max-w-[1300px] mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-10">

//         {/* Logo + Company Name */}
//         <a href="/" className="flex items-center gap-2 sm:gap-3">
//           <img
//             src={logo}
//             alt="Naveed Wani Construction Logo"
//             className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
//           />
//           <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-rubik leading-tight">
//             Naveed Wani{" "}
//             <span className="text-yellow-500 italic block sm:inline">
//               Construction Pvt. Ltd.
//             </span>
//           </h1>
//         </a>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex justify-normal items-center gap-6">
//           {navItem.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.path}
//                 className="text-black uppercase font-bold cursor-pointer p-3 rounded-md hover:bg-yellow-500 hover:text-black text-[15px]"
//                 spy={true}
//                 offset={-100}
//                 smooth={true}
//               >
//                 {item.link}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div
//           className="flex justify-center items-center lg:hidden cursor-pointer"
//           onClick={toggleMenu}
//         >
//           {isMenuOpen ? (
//             <FaXmark className="text-yellow-500 text-3xl" />
//           ) : (
//             <FaBars className="text-yellow-500 text-3xl" />
//           )}
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`${
//           isMenuOpen ? "flex" : "hidden"
//         } flex-col items-center bg-yellow-500 w-full py-4 transition-all duration-300 lg:hidden`}
//       >
//         <ul className="flex flex-col justify-center items-center gap-3 w-full">
//           {navItem.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.path}
//                 className="text-black uppercase font-semibold cursor-pointer p-2 rounded-md hover:bg-black hover:text-white w-full text-center"
//                 spy={true}
//                 offset={-80}
//                 smooth={true}
//                 onClick={closeMenu}
//               >
//                 {item.link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItem = [
    { link: 'Home', path: '/' },
    { link: 'About', path: '/leadership' },
    { link: 'Services', path: '/services' },
    { link: 'Projects', path: '/projects' },
    { link: 'Career', path: '/Career' },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-10">

        {/* Logo + Company Name */}
        <NavLink to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMenu}>
          <img
            src={logo}
            alt="Naveed Wani Construction Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
          />
          <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold font-rubik leading-tight">
            Naveed Wani{" "}
            <span className="text-yellow-500 italic block sm:inline">
              Construction Pvt. Ltd.
            </span>
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-normal items-center gap-6">
          {navItem.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `uppercase font-bold cursor-pointer p-3 rounded-md text-[15px] ${
                    isActive
                      ? "bg-yellow-500 text-black"
                      : "text-black hover:bg-yellow-500 hover:text-black"
                  }`
                }
                onClick={closeMenu}
              >
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="flex justify-center items-center lg:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaXmark className="text-yellow-500 text-3xl" />
          ) : (
            <FaBars className="text-yellow-500 text-3xl" />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center bg-yellow-500 w-full py-4 transition-all duration-300 lg:hidden`}
      >
        <ul className="flex flex-col justify-center items-center gap-3 w-full">
          {navItem.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `uppercase font-semibold cursor-pointer p-2 rounded-md w-full text-center ${
                    isActive ? "bg-black text-white" : "text-black hover:bg-black hover:text-white"
                  }`
                }
                onClick={closeMenu}
              >
                {item.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
