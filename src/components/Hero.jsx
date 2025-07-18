import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";


export default function Hero() {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const splitTitle = new SplitText('#title', {
            type: "chars, words",
        });

        const paragraphSplit = new SplitText("#subtitle", {
            type: "lines",
        });

        gsap.from(splitTitle.chars, {
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: 'expo.out',
        })

        gsap.from(paragraphSplit.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.8,
            stagger: 0.05,
            ease: 'expo.out',
            delay: 1,
        })

        // const startValue = isMobile ? "top 50%" : "center 60%";
        // const endValue = isMobile ? "120% top" : "bottom top";

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: 'video',
                start: 'top top',
                end: '+=100%',
                scrub: true,
                pin: true,
            }
        })

        // videoRef.current.onloadedmetadata = () => {
        //     timeline.to(videoRef.current, {
        //         currentTime: videoRef.current.duration,
        //     });
        // };

        setTimeout(() => {
            videoRef.current.play();
        }, 1000);
    }, []);

    return (
        <>
            <section className="z-10 relative min-h-dvh w-full">
                <h1 id="title" className="text-5xl md:text-9xl font-extrabold font-clash tracking-wider mt-40 text-center leading-none  ">Bite into Sweetness</h1>

                <div className="body">
                    <p id="subtitle">
                        Oh Apple, crisp king of the orchard, you crunch with the confidence of a thousand grapes.
                    </p>

                    <p id="subtitle">
                        You’re not just a fruit. You’re a lifestyle. A symbol. A snack that slaps.
                    </p>

                    <p id="subtitle">
                        Red, green, or golden — you wear your colors like a royal robe. Bow down, banana.
                    </p>
                </div>
            </section>

            <div className="absolute inset-0 video z-0 overflow-hidden">
                <video
                    ref={videoRef}
                    src="/video/result.mp4"
                    muted
                    preload="auto"
                    playsInline
                    loop
                />
            </div>
        </>
    )
}