import { useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import { scrollTopByElem } from "../../utility/scrollTop";
import Error from "../error/Error";
import Loading from "../Loading";

function Region() {
  const { continent } = useParams();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch(`https://restcountries.com/v3.1/region/${continent}`)
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [continent])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null)
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${continent}`
        );
        if(!response.ok) throw new Error(`Response status: ${response.status}`)
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    };
    fetchData();
  }, [continent]);


  if(isLoading) return <Loading />;
  if(error) return <Error />;

  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 bg-gray-100 dark:text-gray-100 text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div id="content" className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">
            Welcome to{" "}
            {continent ? continent[0].toUpperCase() + continent.slice(1) : ""}
          </h2>
          <p className="font-serif text-sm text-gray-400 dark:text-gray-600">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {data.slice(count - 12, count).map((item) => (
            <Card key={item.cca3} {...item} />
          ))}
        </div>
        <Pagination
          pageSize={12}
          onChange={(page, pagesize) => {
            setCount(page * pagesize);
            scrollTopByElem("content");
          }}
          align="center"
          defaultCurrent={1}
          total={data.length}
        />
      </div>
    </section>
  );
}

export default Region;
