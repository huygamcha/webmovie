import "./App.css";
import GlobalStyles from "./components/Globalstyles";
import DefaultLayout from "./components/layouts/Defaultlayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Nowplaying from "./pages/Nowplaying";
import TopRate from "./pages/TopRate";
import PopularFilm from "./pages/PopularFilm";
import SearchFilm from "./components/Search";

function App() {
  return (
    <GlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/nowplaying" element={<Nowplaying />} />
          <Route path="/toprate" element={<TopRate />} />
          <Route path="/popularfilm" element={<PopularFilm />} />
          <Route path="/search" element={<SearchFilm />} />
        </Routes>
      </Router>
    </GlobalStyles>
  );
}

export default App;
