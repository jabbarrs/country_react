function Card({ flags, name, cca3, capital, region, borders, area }) {
    // const item = elems.item
    // const { item } = elem
    // const {image, description, title} = item;
    return (
        <>
            <article className="flex flex-col overflow-hidden rounded-2xl shadow-lg bg-gray-900 dark:bg-gray-50 transition-transform hover:scale-[1.02]">
                <a rel="noopener noreferrer" href="#">
                    <img
                        alt={flags.alt}
                        src={flags.svg}
                        className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-300"
                    />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <span className="text-xs font-semibold uppercase text-violet-400 dark:text-violet-600 tracking-wide mb-1">{region}</span>
                    <h3 className="text-xl font-bold text-white dark:text-gray-900 mb-1">{name.common}</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-600 mb-4">Capital: {capital}</p>
                    <div className="mb-auto text-xs text-gray-400 dark:text-gray-600 italic">
                        {flags.alt ? flags.alt.slice(0, 150) + '...' : `P.S: There's no any description here. `}
                    </div>
                </div>
            </article>

        </>
    )
}

export default Card
