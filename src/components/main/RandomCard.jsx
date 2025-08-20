import { Link } from "react-router-dom"

function RandomCard({flags, name, cca3, capital, region, borders, area}) {
    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 transition-transform hover:scale-[1.02]">
            <Link to={`/country/${name.common}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12">
                <img src={flags.svg} alt={flags.alt} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                <div className="my-auto p-6 space-y-2 lg:col-span-5">
                    <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{name.common}</h3>
                    <span className="text-xs dark:text-gray-600">Capital: {capital}</span>
                    <p className="italic">{flags.alt ? flags.alt.slice(0, 150) + '...' : `P.S: There's no any description here. `}</p>
                </div>
            </Link>
        </div>
    )
}

export default RandomCard
