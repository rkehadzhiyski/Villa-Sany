import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation"
import Questions from "./components/questions/Questions";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import VillaInfo from "./components/villaInfo/VilaInfo";

import './css/embla.css';
import './main.css';

import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <div className='main-container'>
            <Navigation />
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/questions-and-answers' element={<Questions />} />
                <Route path='/villa-info' element={<VillaInfo />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
