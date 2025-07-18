import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh w-full'></div>
    </main>
  )
}

export default App
