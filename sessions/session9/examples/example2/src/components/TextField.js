import { useState } from 'react';

function TextField() {
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (event) => {
        setInputValue(event.currentTarget.value);
    };

    return (
        <div>
            <h1> Text field value: {inputValue} </h1>
            <input type="text" onChange={handleOnChange}/>
        </div>
    )
}

export default TextField;
