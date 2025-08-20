import { Link } from "react-router-dom";

function Card({ flags, name, cca3, capital, region, borders, area }) {
  // const item = elems.item
  // const { item } = elem
  // const {image, description, title} = item;
  return (
    <>
      <article className="flex flex-col overflow-hidden rounded-2xl shadow-lg dark:bg-gray-800 bg-gray-100 dark:text-gray-100 text-gray-800 transition-transform hover:scale-[1.02]">
        <Link to={`/country/${name.common}`}>
          <img
            alt={flags.alt}
            src={flags.svg}
            className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-300"
          />
        </Link>
        <div className="flex flex-col flex-1 p-6">
          <span className="text-xs font-semibold uppercase text-violet-400 dark:text-violet-600 tracking-wide mb-1">
            {region}
          </span>
          <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1">
            {name.common}
          </h3>
          <p className="text-sm dark:text-gray-400 text-gray-600 mb-4">
            Capital: {capital}
          </p>
          <div className="mb-auto text-xs dark:text-gray-400 text-gray-600 italic">
            {flags.alt
              ? flags.alt.slice(0, 150) + "..."
              : `P.S: There's no any description here. `}
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
