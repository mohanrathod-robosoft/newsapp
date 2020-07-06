import News from "../components/organisms/news";
import Comments from "../components/organisms/comment";


const ROUTES = [
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
];

export default ROUTES;
