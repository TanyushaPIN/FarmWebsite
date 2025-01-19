import React  from 'react';
import Header from './components/header/header';
import Futter from './components/futter/futter';
import { Route, Routes } from "react-router-dom"; 
import Home     from "./pages/home/Home"; 
import Galery  from "./pages/galery/Galery";
import Vacancy  from "./pages/vacancy/Vacancy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div> 
      <Routes>
        <Route path ="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path ="/Galery" element={<Galery />} />
        <Route path ="/Vacancy" element={<Vacancy />} />
        <Route path ="*" element={<NotFound />} />
        </Route>b
      </Routes>
      <Futter />
    </div>
  );
}

export default App;
