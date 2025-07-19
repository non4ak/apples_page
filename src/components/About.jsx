export default function About() {
    return (
        <section className="container mx-auto mt-24 space-y-12">
            <div>
                <div className="flex-center flex-col gap-4">
                    <h2 className="text-6xl font-clash tracking-wider font-semibold">The Magic of Apples</h2>
                    <p className="text-lg md:text-xl font-mono text-center w-[80%]">
                        More than just food, apples are symbols of wisdom, health, and simplicity. Their impact goes far beyond the orchard.
                        From the classroom to the kitchen, they play a meaningful role in daily life. Apples bring people together — in tradition, taste, and time.
                    </p>
                </div>
            </div>
            <div className="content w-[80%] mx-auto">
                <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[520px]">
                    <div className="col-span-2 rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/green-basket.jpg"
                            alt="basket of green apples"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="row-span-2 rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/apples-on-tree.jpg"
                            alt="apples on tree"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/apple-picking.jpg"
                            alt="apple picking"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src="/imgs/apples-basket.jpg"
                            alt="basket of red apples"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}