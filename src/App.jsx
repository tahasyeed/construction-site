// import './App.css'

// import Header from './sections/Header';
// import Hero from './sections/Hero';
// import About from './sections/About';
// import Services from './sections/Services';
// import Portfolio from './sections/Portfolio';
// import Contact from './sections/Contact';
// import Footer from './sections/Footer';
// import Working from './sections/Working';
// import Testimonials from './sections/Testimonials';
// import ShowProjects from './sections/ShowProjects';
// import Leadership from './sections/Leadership';


// function App() {


//   return (
//     <>
//       <Header/>
//       <Hero />
//       <ShowProjects/>
//       <About/>
//       <Services/>
//       <Portfolio/>
//       <Working/>
//       <Testimonials />
//       <Leadership/>
      
//       <Contact/>
//       <Footer/>
    
//     </>
//   )
// }

// // https://www.youtube.com/watch?v=IB9jFCs8SFA

// export default App












import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Working from './sections/Working';
import Testimonials from './sections/Testimonials';
import ShowProjects from './sections/ShowProjects';
import Leadership from './sections/Leadership';
import Career from './sections/Career';
import ApplyForm from './sections/ApplyForm';

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20"> {/* Padding to prevent content hiding under fixed navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ShowProjects />
                <About />
                <Services />
                <Portfolio />
                <Working />
                <Testimonials />
                {/* <Career/> */}
                {/* <Leadership /> */}
                <Contact />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<ShowProjects />} />
          <Route path="/leadership" element={<Leadership />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/career" element={<Career />} />
         
          <Route path="/apply/:position" element={<ApplyForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
