import { useEffect, useState } from "react";
import Graphic from "./Graphic";
import GraphicControls from "./GraphicControls";

function UserDashboard(props){
    const [data, setData] = useState(null);
    const [controlValues, setControlValues] = useState({
        'hot dog': true,
        'burger': true,
        'sandwich': true,
        'kebab': true,
        'fries': true,
        'donut': true
    });

    const onControlValuesChange = (controlValues) => {
        setControlValues(controlValues);
    };

    const getGraphicData = () => {
        return data.map(dataChunk => {
            // With this we create a copy of the data object
            const newDataChunk = { ...dataChunk };
            // With this we remove the data we don't want to show;
            Object.keys(controlValues).forEach(controlValueKey => {
                const controlValue = controlValues[controlValueKey];
                if (controlValue === false) {
                    delete newDataChunk[controlValueKey];
                }
            });
            return newDataChunk;
        });
    };

    const getGraphicKeys = () => {
        // First we take the keys of the control values and then we get only the ones that are set to true
        return Object.keys(controlValues).filter(controlValueKey => {
            return controlValues[controlValueKey] === true;
        });
    }

    useEffect(() => {
        fetch('http://mscbt-luis-grande.herokuapp.com/tip/data/bar-chart')
            .then(response => response.json())
            .then(json => {
                setData(json);
            })
    }, []);

    return (
        <div>
            <h1>Your username is: {props.user.username}</h1>
            {data && <GraphicControls controlValues={controlValues} onControlValuesChange={onControlValuesChange}/>}
            {data && <Graphic data={getGraphicData()} keys={getGraphicKeys()}/>}
        </div>
    )
}

export default UserDashboard;