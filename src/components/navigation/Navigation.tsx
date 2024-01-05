import Button from '@mui/material/Button';

import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <div className={styles['left-section']}>
                <h2>Villa Sani</h2>
            </div>
            
            <div className={styles['right-section']}>
                <Button sx={{
                    color: '#3f3f43'
                }} >Contact us</Button>
                <Button sx={{
                    color: '#3f3f43'
                }} >About us</Button>
                <Button sx={{
                    color: '#3f3f43'
                }} >Въпроси</Button>
            </div>
        </nav>
    );
}

export default Navigation;