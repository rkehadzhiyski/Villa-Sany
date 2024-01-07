import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation"
import Questions from "./components/questions/Questions";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import './css/embla.css';
import styles from './main.module.css';

import { Route, Router, Routes } from "react-router-dom"

function App() {
    return (
        <div className={styles['main-container']}>
            <Navigation />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/questions-and-answers" element={<Questions />} />
                </Routes>
            <Footer />
        </div>
    )
}

export default App
