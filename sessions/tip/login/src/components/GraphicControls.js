import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function GraphicControls(props) {
    const handleControlChange = (controlName, checked) => {
        props.onControlValuesChange({
            // With this we create a copy of controlValues
            ...props.controlValues,
            // With this we assign the controlValue that has changed
            [controlName]: checked
        });
    };

    // https://mui.com/components/switches/
    // https://mui.com/components/switches/#controlled
    return (
        <FormGroup>
            <FormControlLabel control={<Switch checked={props.controlValues['hot dog']} onChange={(event) => handleControlChange('hot dog', event.target.checked)}/>} label="Hot dog"/>
            <FormControlLabel control={<Switch checked={props.controlValues['burger']} onChange={(event) => handleControlChange('burger', event.target.checked)}/>} label="Burger"/>
            <FormControlLabel control={<Switch checked={props.controlValues['sandwich']} onChange={(event) => handleControlChange('sandwich', event.target.checked)}/>} label="Sandwich"/>
            <FormControlLabel control={<Switch checked={props.controlValues['kebab']} onChange={(event) => handleControlChange('kebab', event.target.checked)}/>} label="Kebab"/>
            <FormControlLabel control={<Switch checked={props.controlValues['donut']} onChange={(event) => handleControlChange('donut', event.target.checked)}/>} label="Donut"/>
        </FormGroup>
      );
}

export default GraphicControls;