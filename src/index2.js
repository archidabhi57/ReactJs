import { createRoot } from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Header from "./Header";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  
);