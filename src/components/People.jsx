import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";
import Person from "./Person";

const People = () => {
  const fetchPeople = async () => {
    const res = await fetch("http://swapi.dev/api/people/");
    return res.json();
  };

  const { data, status } = useQuery("planets", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>Planets</h2>
      {status === "error" && <div>error 입니다</div>}
      {status === "success" && (
        <div>
          {data.results.map((v, i) => {
            return <Person key={v.name} person={v} />;
          })}
        </div>
      )}
    </div>
  );
};

export default People;
