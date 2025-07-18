import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";

export default function Hero() {
    const videoRef = useRef();

    // const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const splitTitle = new SplitText('#title', {
            type: "chars, words",
        });

        // const paragraphSplit = new SplitText("#subtitle", {
        //     type: "lines",
        // });

        gsap.from(splitTitle.chars, {
            yPercent: 100,
            duration: 1.8,
            stagger: 0.06,
            ease: 'expo.out',
        })

        gsap.from('#subtitle', {
            yPercent: 70,
            opacity: 0,
            duration: 1.5,
            stagger: 0.06,
            ease: 'expo.out',
            delay: 1,
        })

        // const startValue = isMobile ? "top 50%" : "center 60%";
        // const endValue = isMobile ? "120% top" : "bottom top";
        
        gsap.to('video', {
            scrollTrigger: {
                trigger: 'video',
                start: 'top top',
                end: 'bottom top',
            }
        })



        // videoRef.current.onloadedmetadata = () => {
        //     tl.to(videoRef.current, {
        //         currentTime: videoRef.current.duration,
        //     });
        // };
    }, []);

    return (
        <>
            <section  className="z-10 relative min-h-dvh w-full">
                <h1 id="title" className="text-5xl md:text-9xl font-extrabold font-clash tracking-wider mt-40 text-center leading-none  ">Bite into Sweetness</h1>

                <div className="body">
                    <Card
                        id='subtitle' 
                        title='First'
                        text='Oh Apple, crisp king of the orchard, you crunch with the confidence of a thousand grapes.'
                    />
                    <Card
                        id='subtitle' 
                        title='Second'
                        text='You’re not just a fruit. You’re a lifestyle. A symbol. A snack that slaps.'
                    />
                    <Card
                        id='subtitle' 
                        title='Third'
                        text='Red, green, or golden — you wear your colors like a royal robe. Bow down, banana.'
                    />
                </div>
            </section>

            <div className="absolute inset-0 video h-[120vh]">
                <video
                    ref={videoRef}
                    src="/video/result.mp4"
                    muted
                    preload="auto"
                    playsInline
                    autoPlay
                    loop
                />
            </div>
        </>
    )
}