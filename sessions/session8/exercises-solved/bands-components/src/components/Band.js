import './Band.css';
import BandMembers from './BandMembers';

function Band(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <BandMembers instruments={props.instruments}/>
        </div>
    )
}

export default Band;
