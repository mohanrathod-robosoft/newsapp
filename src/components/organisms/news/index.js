import React, { useState, useEffect } from "react";

import { defer } from "rxjs";

import { useLocation } from "react-router-dom";

import Header from "../Header";
import NewsContainer from "../../molecules/newsContainer";
import { spliceArray } from "../../../util/spliceArray";

const News = (props) => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search);

  const [pageLoader, setPageLoader] = useState(true);
  const [newsIdArray, setNewsIdArray] = useState([]);
  const [newsIdArrayComp, setNewsIdArrayComp] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  let startSplice = (currentPage - 1) * 30;

  useEffect(() => {
    const subscription = defer(() =>
      fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      ).then((res) => res.json())
    ).subscribe((resp) => {
      setNewsIdArray(resp);
      setPageLoader(false);
      setTotal(Math.ceil(resp.length / 30));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setPageLoader(true);
    let query = Number(searchQuery.get("p")) ? Number(searchQuery.get("p")) : 1;
    let newArr = spliceArray(newsIdArray, (query - 1) * 30, query * 30);

    setCurrentPage(query);
    newArr.length > 0 && setNewsIdArrayComp(newArr);

    setTimeout(() => {
      setPageLoader(false);
    }, 0);
  }, [newsIdArray, searchQuery.get("p")]);

  return (
    <>
      <Header />
      {!pageLoader && (
        <NewsContainer
          subUrl="https://hacker-news.firebaseio.com/v0/item"
          newsArray={newsIdArrayComp}
          indexStart={startSplice}
          nextPageQuery={`/news?p=${currentPage ? currentPage + 1 : 2}`}
          isNextPage={currentPage < total}
        />
      )}
    </>
  );
};

export default News;
