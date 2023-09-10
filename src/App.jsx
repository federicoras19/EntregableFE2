import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Detail from "./routes/Detail";
import Favs from "./routes/Favs";
import Home from "./routes/Home";
import NoPage from "./routes/NoPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;