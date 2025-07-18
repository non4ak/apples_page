import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export default function Info() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".info",
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.left-apple', {y: -50, scale: 0.8, ease: 'expo.out', duration: 0.5}, 0);

        gsap.timeline({
            scrollTrigger: {
                trigger: ".subtitle",
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.subtitle', {y: -100, opacity: 0, ease: 'expo', duration: 0.5});
    }, [])

    return (
        <>
            <section className="info">
                <h2 className="text-5xl font-clash text-center">How it started</h2>

                <img src="/imgs/apple.png" alt="side apple" className="middle-apple"/>

                <div>
                    <p>
                        An apple fell — not from a tree, but into an idea.
                        A simple snack became a spark, a taste that stirred something deeper.
                        What began as a moment turned into a journey — crisp, vibrant, and full of flavor.
                    </p>

                    <p className="subtitle">
                        First we bought apples. Then we bit them. Then we couldn’t stop talking about them.
                        Turns out, there’s more to an apple than meets the core.
                        That’s how it started — with a crunch, a grin, and a dream.
                    </p>
                </div>

            </section>
        </>
    )
}