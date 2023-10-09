import Home from './components/Home';
import Navbar from './components/Navbar'
import SocialLinks from './components/SocialLinks';
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      <SocialLinks/> 
    </div>
  );
}

export default App;
