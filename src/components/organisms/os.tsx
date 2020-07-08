import * as React from "react";

import { storiesOf } from "@storybook/react";

import StoryRouter from "storybook-react-router";

import "../../index.scss";

import Header from "./Header";
import CardsContainer from "./CardsContainer";
import CommentsContainer from "./CommentsContainer";
import Footer from "./footer";

storiesOf("Organisms", module)
  .addDecorator(StoryRouter())
  .add("Header", () => <Header />)
  .add("Footer", () => <Footer />)
  .add("CardsContainer", () => (
    <CardsContainer
      subUrl="https://hacker-news.firebaseio.com/v0/item"
      newsArray={[23734093, 23737266, 23730629]}
      indexStart={0}
      nextPageQuery="/news"
      isNextPage={false}
    />
  ))
  .add("CommentsContainer", () => (
    <CommentsContainer
      subUrl="https://hacker-news.firebaseio.com/v0/item"
      commentsIdObj={{
        by: "jesseduffield",
        id: 23735991,
        kids: [
          23737592,
          23739099,
          23738469,
          23737746,
          23736508,
          23738062,
          23736459,
          23736692,
          23736423,
          23737919,
          23738931,
          23736308,
          23736434,
          23737752,
          23737928,
          23737813,
          23737991,
          23737735,
          23737041,
          23736159,
          23739307,
          23739328,
          23737021,
        ],
        score: 204,
        time: 1593911560,
        title: "Beginner's Guide to Abstraction",
        url: "https://jesseduffield.com/beginners-guide-to-abstraction/",
      }}
    />
  ));
