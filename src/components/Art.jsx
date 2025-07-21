import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/all";

export default function Art() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline
        .to('.will-fade', {opacity: 0, stagger: 0.2, ease: 'power1.inOut'})
        .to('.masked-img', {scale: 1, maskPosition: 'center', maskSize: '250%', duration: 1, ease: 'power1.inOut'})
        .to('.will-show', {opacity: 1, ease: 'power1.inOut'})
    }, []);

    return (
        <section id="art">
            <h2 className="will-fade">The Orchard Whispers with Labor</h2>
            <img src="/imgs/man-collecting-apples.jpg" alt="A man collecting apples" className="abs-center masked-img rounded-4xl"/>
            <div>
                <h2 className="will-show">This isn’t just about apples — it’s about the people</h2>
            </div>
        </section>
    )
}