import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Info from './components/Info.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Form from './components/Form.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Info /> */}
      <Menu />
      <Art />
      <Form />
    </main>

  )
}

export default App
