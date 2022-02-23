import { Typography } from '@mui/material';
import './Chart.css';

function Chart(props) {
    return (
        <div className="chart">
            <Typography className="chart__title" variant="h3" component="h3">
                {props.title}
            </Typography>
            <div className="chart__container">
                {props.children}
            </div>
        </div>
    )
}

export default Chart;
