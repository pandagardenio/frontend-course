import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function DashboardSidebarItem(props) {
    const handleOnClick = () => {
        props.onClick(props.section);
    };

    const selected = props.activeSection === props.section;
    return (
        <ListItemButton selected={selected} onClick={handleOnClick}>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
            <ListItemText primary={props.section} />
        </ListItemButton>
    )
}

export default DashboardSidebarItem;
