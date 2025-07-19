import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Info from './components/Info.jsx';
import Menu from './components/Menu.jsx';
import About from './components/About.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* <Info /> */}
      <Menu />
      <div className='h-dvh w-full'></div>
    </main>
  )
}

export default App
