import { useState } from "react";
import { APPLES_MENU } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalApples = APPLES_MENU.length;


    useGSAP(() => {
        gsap.fromTo('#current-apple', {
            xPercent: -100,
            opacity: 0,
        }, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
        });

        gsap.fromTo('#details', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1, duration: 0.7, ease: 'power1.inOut'})
    }, [currentIndex])


    const goToIndex = (index) => {
        const newIndex = (index + totalApples) % totalApples;
        
        setCurrentIndex(newIndex);
    }

    return (
        <section className="container mx-auto mt-16 py-16 radial-gradient h-screen">
            <h2 className="text-center font-clash text-5xl font-semibold tracking-wide">Choose your Apple</h2>

            <div className="flex justify-center gap-12 py-4">
                {APPLES_MENU.map((item, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button
                            className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'} tracking-wide text-base md:text-lg border-b font-arial py-2 w-64 z-100 cursor-pointer hover:text-amber-100/70`}
                            onClick={() => goToIndex(index)}
                        >
                            {item.title}
                        </button>
                    )
                })}
            </div>

            <div className="w-full flex relative justify-center">
                <div className="justify-between w-full flex px-18 absolute top-1/2 -translate-y-1/2">
                    <button onClick={() => goToIndex(currentIndex - 1)} className="cursor-pointer select-none">
                        <img src="/imgs/right-arrow.png"/>
                    </button>
                    <button onClick={() => goToIndex(currentIndex + 1)} className="cursor-pointer select-none">
                        <img src="/imgs/left-arrow.png"/>
                    </button>
                </div>

                <div className="flex-center flex-col md:flex-row gap-8 ">
                    <img
                        src={APPLES_MENU[currentIndex].img}
                        alt="currently shown apple from menu"
                        className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-contain"
                        id="current-apple"
                    />
                    <div id="details" className="w-[450px] space-y-4 ">
                        <h3 className="text-4xl tracking-wide font-clash font-semibold text-amber-100">{APPLES_MENU[currentIndex].title}</h3>
                        <p className="text-base md:text-lg text-gray-300">{APPLES_MENU[currentIndex].description}</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}