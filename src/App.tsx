import Carousel from "./components/carousel/Carousel"
import Navigation from "./components/navigation/Navigation"

import './css/embla.css';
import styles from './main.module.css';

function App() {
  return (
    <div className={styles['main-container']}>
      <Navigation/>
      <Carousel/>
    </div>
  )
}

export default App
