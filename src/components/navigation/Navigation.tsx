import Button from '@mui/material/Button';

import styles from './navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <div className={styles['left-section']}>
                <Link to={'/'}>
                    <img className={styles.logo} src="src\assets\logo.png" alt="Villa-Sani-logo" />
                </Link>
                <h2>Вила Сани</h2>
            </div>

            <div className={styles['right-section']}>
                <Button sx={{
                    color: '#3f3f43'
                }} >Contact us</Button>
                <Button sx={{
                    color: '#3f3f43'
                }} >About us</Button>
                <Link to="/questions-and-answers">
                    <Button sx={{ color: '#3f3f43' }}>Въпроси</Button>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;