import React from "react";

import NewsCard from "../newsBlock";
import NavigationLink from "../NavigationLink";

const newsContainer = ({
  newsArray, nextPageQuery, subUrl, indexStart, isNextPage,
}) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => (
      <NewsCard
        index={indexStart + (index + 1)}
        key={index}
        subUrl={`${subUrl}/${item}.json`}
      />
    ));

  return (
    <table className="cards-container-wrapper">
      <tbody>
        <tr style={{ height: 10 }} />
        {renderNews}
        {isNextPage && (
          <tr>
            <td align="right">
              <NavigationLink
                textcolor="gray"
                element="div"
                link={nextPageQuery}
                label="More"
              />
            </td>
          </tr>
        )}
        <tr style={{ height: 10 }} />
      </tbody>
    </table>
  );
};

export default newsContainer;
