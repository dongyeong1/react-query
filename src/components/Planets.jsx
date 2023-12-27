import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const Planets = () => {
  const fetchPlanets = async (a, b, page) => {
    console.log(a);
    const res = await fetch(
      `http://swapi.dev/api/planets/?page=${a.queryKey[2]}`
    );
    return res.json();
  };

  const [page, setPage] = useState(1);

  const { data, status } = useQuery(["planets", "aa", page], fetchPlanets);
  return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => setPage(1)}>1page</button>
      <button onClick={() => setPage(2)}>2page</button>
      <button onClick={() => setPage(3)}>3page</button>

      {status === "error" && <div>error 입니다</div>}
      {status === "success" && (
        <div>
          {data?.results?.map((v, i) => {
            return <Planet key={v.name} planet={v} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Planets;
