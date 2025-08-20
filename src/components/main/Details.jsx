import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";
import Error from "../error/Error";
import { scrollTopByElem } from "../../utility/scrollTop";

const Details = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountry();
  }, [name]);
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl min-h-[80vh] p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12">
          <img
            src={data[0]?.flags.svg}
            alt={data[0]?.flags.alt}
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 transition-transform hover:scale-[1.02]"
          />
          <div className="my-auto p-4 sm:p-6 space-y-4 lg:col-span-5">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-gray-100">
              {data[0]?.name.common}
            </h3>
            <h4 className="text-md sm:text-lg dark:text-gray-400">
              Capital: {data[0]?.capital[0]}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  Population:
                </span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {data[0]?.population}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  Region:
                </span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {data[0]?.region}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  Sub Region:
                </span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {data[0]?.subregion}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  Capital:
                </span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {data[0]?.capital[0]}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  Currency:
                </span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {data[0]?.currencies
                    ? Object.values(data[0].currencies).map(
                        (currency) => currency.name
                      )
                    : "N/A"}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <span className="font-semibold text-gray-700 dark:text-gray-200">
                  Language:
                </span>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {data[0]?.languages
                    ? Object.values(data[0].languages)
                    : "N/A"}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold dark:text-gray-100 mb-2">
                  Border Countries:
                </h4>
                <div id="content" onClick={scrollTopByElem("content")} className="flex flex-wrap gap-2">
                  {data[0]?.borders?.length > 0 ? (
                    data[0]?.borders?.map((item) => (
                      <Link
                        to={`/country/${item}`}
                        key={item}
                        className="px-3 py-1 border rounded shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                      >
                        {item ? item : "N/A"}
                      </Link>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
