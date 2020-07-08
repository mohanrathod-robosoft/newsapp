import React from "react";

// pages
import News from "../pages/News";
import Comments from "../pages/Comments";
import Newest from "../pages/Newest";
import Ask from "../pages/Ask";
import Show from "../pages/Show";
import Jobs from "../pages/Jobs";
import Guidelines from "../pages/Guidelines";
import FAQ from "../pages/FAQ";
import Security from "../pages/Security";
import Bookmarklet from "../pages/Bookmarklet";

export interface ROUTE {
  path: string;
  exact: boolean;
  component: React.FunctionComponent;
}

const ROUTES: ROUTE[] = [
  {
    path: "/",
    exact: true,
    component: News,
  },
  {
    path: "/news",
    exact: true,
    component: News,
  },
  {
    path: "/item",
    exact: true,
    component: Comments,
  },
  {
    path: "/newest",
    exact: true,
    component: Newest,
  },
  {
    path: "/ask",
    exact: true,
    component: Ask,
  },
  {
    path: "/show",
    exact: true,
    component: Show,
  },
  {
    path: "/jobs",
    exact: true,
    component: Jobs,
  },
  {
    path: "/guidelines",
    exact: true,
    component: Guidelines,
  },
  {
    path: "/faq",
    exact: true,
    component: FAQ,
  },
  {
    path: "/security",
    exact: true,
    component: Security,
  },
  {
    path: "/bookmarklet",
    exact: true,
    component: Bookmarklet,
  },
];

export default ROUTES;
