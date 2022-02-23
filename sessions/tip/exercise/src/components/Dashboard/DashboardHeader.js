import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

import './DashboardHeader.css';

function DashboardHeader(props) {
    let dashboardHeaderClassName = 'dashboard-header';
    if (props.open) {
        dashboardHeaderClassName += ' dashboard-header--open';
    }

    return (
        <AppBar className={dashboardHeaderClassName} open={props.open}>
            <Toolbar className="dashboard-header__toolbar">
                <IconButton
                    edge="start"
                    aria-label="open drawer"
                    onClick={props.toggleOpen}
                    className="dashboard-header__menu-button"
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    noWrap
                    className="dashboard-header__title"
                >
                    {props.section}
                </Typography>
                <IconButton
                    className="dashboard-header__notification-button"
                >
                    <Badge color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default DashboardHeader;
