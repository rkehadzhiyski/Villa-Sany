import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navigation = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Villa Sani
                </Typography>

                <Button color="inherit">Contact us</Button>
                <Button color="inherit">About us</Button>
                <Button color="inherit">Въпроси</Button>

            </Toolbar>
        </AppBar>
    );
}

export default Navigation;