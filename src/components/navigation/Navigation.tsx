// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={styles['navigation']}>
            <div className={styles['left-section']}>
                <h2>Villa Sani</h2>
            </div>

            <div className={styles['right-section']}>
                <button>Button 1</button>
                <button>Button 2</button>
                <button>Button 3</button>
            </div>
        </nav>
        // <AppBar position="static">
        //     <Toolbar className={styles['nav-container']}>
        //         <Typography color='secondary' variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //             Villa Sani
        //         </Typography>

        //         <Button color='secondary'>Contact us</Button>
        //         <Button color='secondary'>About us</Button>
        //         <Button color='secondary'>Въпроси</Button>

        //     </Toolbar>
        // </AppBar>
    );
}

export default Navigation;