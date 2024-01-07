import styles from './villaInfo.module.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const VillaInfo = () => {
    return (
        <section className={styles['first-section']}>
            <h2>Вила Сани</h2>

            <div className={styles['main-info-container']}>
                <div className={styles['inner']}>
                    <div className={styles.align}>
                        <HomeOutlinedIcon />
                        200kw
                    </div>
                    <div className={styles.align}>
                        <BedOutlinedIcon />
                        3 bedrooms for 8-10 people
                    </div>
                    <div className={styles.align}>
                        <CheckCircleOutlineOutlinedIcon />
                        Ideal for couples, families & groups
                        Children welcome
                    </div>
                </div>
                
                <div className={styles['inner']}>
                    <div className={styles.align}>
                        <RestaurantOutlinedIcon />
                        Grocery shopping on request
                        Self-catering
                        All meals on request
                        Kitchen
                    </div>
                    <div className={styles.align}>
                        <LocationOnOutlinedIcon />
                        Location: Countryside
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VillaInfo;