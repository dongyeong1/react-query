import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";

const List = styled.li`
  list-style: none;
  cursor: pointer;
  border: 1px solid black;
`;
const ListWrapper = styled.div`
  display: flex;
  gap: 5px;
  .click {
    background-color: red;
  }
`;

const Pagenate = () => {
  const [array, setArray] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setMaxpageNumberLimit] = useState(5);
  const [minpageNumberLimit, setMinpageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(array?.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const renderPagesNumbers = pages.map((n) => {
    if (n < maxpageNumberLimit + 1 && n > minpageNumberLimit) {
      return (
        <List
          className={currentPage === n && "click"}
          key={n}
          id={n}
          onClick={() => setCurrentPage(n)}
        >
          {n}
        </List>
      );
    } else {
      return null;
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = array?.slice(indexOfFirstItem, indexOfLastItem);

  const fetchPaginate = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");

    return res.json();
  };
  const { data, status } = useQuery("page", fetchPaginate);

  useEffect(() => {
    console.log(data);
    setArray(data);
  }, [data]);

  const nextButton = () => {
    if (currentPage === array.length / itemsPerPage) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
    if (currentPage % 5 == 0) {
      setMaxpageNumberLimit((prev) => prev + 5);
      setMinpageNumberLimit((prev) => prev + 5);
    }
  };
  const prevButton = () => {
    if (currentPage === 1) {
      return;
    }
    // setCurrentPage((prev) => prev - 1);

    setCurrentPage((prev) => prev - 1);
    if (currentPage % 5 == 0) {
      setMaxpageNumberLimit((prev) => prev - 5);
      setMinpageNumberLimit((prev) => prev - 5);
    }

    // setMaxpageNumberLimit((prev) => prev - 1);
    // setMinpageNumberLimit((prev) => prev - 1);
  };

  return (
    <div>
      <ListWrapper>
        <div onClick={prevButton}> prev </div>
        {renderPagesNumbers} <div onClick={nextButton}>next</div>
      </ListWrapper>
      <ul>
        {currentItems?.map((todo, index) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagenate;
