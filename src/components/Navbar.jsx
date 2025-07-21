import { NAV_LINKS } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                toggleActions: 'play none none reverse',
            }
        })

        timeline.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })

    }, []);

    return (
        <nav>
            <div>
                <a href="#home">
                    <h1>Apples</h1>
                </a>

                <ul>
                    {NAV_LINKS.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}