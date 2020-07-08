import React, { useState, useEffect } from "react";

import { defer } from "rxjs";
import { useLocation } from "react-router-dom";

import CardsContainer from "../components/organisms/CardsContainer";
import { spliceArray } from "../utils";
import { subURL, getNews } from "../requests";

interface ParamTypes {
  search?: {
    p?: number;
  };
}

const Home = () => {
  const location = useLocation<ParamTypes>();
  const searchQuery = new URLSearchParams(location.search);

  const [pageLoader, setPageLoader] = useState<boolean>(true);
  const [newsIdArray, setNewsIdArray] = useState<number[]>([]);
  const [newsIdArrayComp, setNewsIdArrayComp] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState(0);

  let startSplice = (currentPage - 1) * 30;

  useEffect(() => {
    const subscription = defer(() =>
      getNews().then((res) => res.json())
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
      {!pageLoader && (
        <CardsContainer
          subUrl={subURL}
          newsArray={newsIdArrayComp}
          indexStart={startSplice}
          nextPageQuery={`/news?p=${currentPage ? currentPage + 1 : 2}`}
          isNextPage={currentPage < total}
        />
      )}
    </>
  );
};

export default Home;
