import { Route, Routes } from "react-router";
import ScrollToTop from "./components/ui/ScrollToTop";

import Header from "./components/header";
import Home from "./routes/home";
import Page_404 from "./components/page-404";
import CountryDetails from "./routes/country-details";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countries/:country' element={<CountryDetails />} />
        <Route path='*' element={<Page_404 />} />
      </Routes>
    </>
  );
}

export default App;
