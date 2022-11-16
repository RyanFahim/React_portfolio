import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import About from './components/About/About';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import GoToTop from './components/GoToTop/GoToTop';



function App() {
  return (
    <>
    <Header />
    

    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <GoToTop/>
      <Footer/>
    </main>
    </>
  );
}

export default App;
