import React, { useCallback, useRef, useState } from "react";
import useBookSearch from "./useBookSearch";

const InfiniteScroll = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState("");

  const observer = useRef();

  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log("entetet", entries);
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log("dndndnnd", node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <input value={query} type="text" onChange={handleSearch}></input>
      {books?.map((book, i) => {
        if (books.length === i + 1) {
          return (
            <div ref={lastBookElementRef} key={i}>
              {" "}
              {book}
            </div>
          );
        } else {
          return <div key={i}> {book}</div>;
        }
      })}
      <div>{loading && "loading............"}</div>
      <div>{error && "errror......."}</div>
    </>
  );
};

export default InfiniteScroll;
