import React from "react";

import NavigationLink from "../../molecule/NavigationLink";
import * as cardsFactory from './cardsFactory';

interface Props {
  newsArray: number[];
  subUrl: string;
  indexStart: number;
  nextPageQuery: string;
  isNextPage: boolean;
  type?: "news" | "newest" | "ask" | "show" | "jobs";
}

const CardsContainer = ({
  newsArray,
  nextPageQuery,
  subUrl,
  indexStart,
  isNextPage,
  type = "news",
}: Props) => {
  let renderNews =
    Array.isArray(newsArray) &&
    newsArray.map((item, index) => {
        return (
          cardsFactory.createCard(indexStart + (index + 1), index, `${subUrl}/${item}.json`, type).renderData()
        )
    });

  return (
    <table>
      <tbody>
        <tr style={{ height: 10 }} />
        {renderNews}
        {isNextPage && (
          <tr>
            <td align="right">
              <NavigationLink
                fontColor="gray"
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

export default CardsContainer;
