import Carousel from "./components/carousel/Carousel"
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage/HomePage";
import Navigation from "./components/navigation/Navigation"

import './css/embla.css';
import styles from './main.module.css';

function App() {
  return (
    <div className={styles['main-container']}>
      <Navigation />
      <Carousel />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
