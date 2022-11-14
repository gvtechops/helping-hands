import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.css";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
