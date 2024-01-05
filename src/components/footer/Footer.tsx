import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import styles from './footer.module.css';

function scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optional: Use smooth scrolling animation
    });
}

const Footer = () => {
    return (
        <footer className={styles['footer-wrapper']}>
            <div className={styles['footer-top']}>
                <img className={styles['social-media']} src="src\assets\facebook.png" alt="facebook" />
                <ul className={styles.contacts}>
                    <li className={styles.tel}>Телефон за връзка: (800) 654-0269 or (206) 785-1695</li>
                    <li className={styles.address}>P O Box 77466, Seattle WA 98177-0466 USA - info@rentavilla.com</li>
                    <li className={styles.senzo}>2024 VillaSani<sup>®</sup></li>
                </ul>
            </div>

            <div className={styles['footer-bottom']}>
                <ArrowUpwardOutlinedIcon sx={{
                    cursor: 'pointer',
                    color: 'gray',
                    '&:hover': {
                        color: 'black',
                    },
                    }} onClick={scrollToTop} />
            </div>
        </footer>
    );
}

export default Footer;
