import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/businessapp" element={ <Home /> }></Route>
                <Route path="about" element={ <About /> }></Route>
                <Route path="contact" element={ <Contact /> }></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
    </>
  )
}

export default App
