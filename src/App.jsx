import './index.css';
import Header from "./components/Header.jsx";
import Masthead from "./components/masthead.jsx";
import Projets from "./components/Projets.jsx";
/*import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';*/

function App() {
  return (
    <div>
      <Header />
      <Masthead />
      <Projets />
      {/*<About />
      
      <Contact />
      <Footer />*/}
    </div>
  );
}

export default App;
