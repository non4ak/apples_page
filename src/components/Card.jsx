export default function Card({title, text, id}) {
    return (
        <div id={id} className="bg-card w-128 flex flex-col gap-4 p-12 rounded-xl">
            <h3 className="text-3xl font-clash font-semibold">{title}</h3>

            <p className="flex text-sm sm:text-base md:text-xl lg:text-2xl font-semibold">
                {text}
            </p>
        </div>
    )
}