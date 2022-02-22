import { useState } from 'react';
import Button from './Button';

function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        setCounter(counter - 1);
    };

    const resetCounter = () => {
        setCounter(0);
    };

    return (
        <div>
            <h1> Counter value: {counter} </h1>
            <Button onClick={decrementCounter}>-</Button>
            <Button onClick={resetCounter}>Reset</Button>
            <Button onClick={incrementCounter}>+</Button>
        </div>
    )
}

export default Counter;
