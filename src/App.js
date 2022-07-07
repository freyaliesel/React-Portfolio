import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Contact from "./components/Contact";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<About />}/>
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Skills" element={<Skills />}/>
                    <Route path="/Contact" element={<Contact />}/>
                    

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
