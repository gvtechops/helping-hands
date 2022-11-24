import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./global.css";
import Footer from "./components/Footer";
import Childcare from "./pages/childcare";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Legal from "./pages/legal";
import School from "./pages/school";


function App() {
  return (
    <>
      <Router>
      <Header/>
        <Navbar />
        <Routes>
          <Route path="/childcare" element={<Childcare />} />
          <Route path="/home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/school" element={<School />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
