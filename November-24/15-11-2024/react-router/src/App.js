import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  // const [page,setPage] = useState('home');
  return (
    // <div>
    //   <nav>
    //     <button onClick={()=>setPage("home")}>Home</button>
    //     <button onClick={()=>setPage("about")}>About</button>
    //   </nav>
    //   <main>
    //     {page==="home" && <Home/>}
    //     {page==="about" && <About/>}
    //   </main>
    // </div>
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
