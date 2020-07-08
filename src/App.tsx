import React from "react";

// routing
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
