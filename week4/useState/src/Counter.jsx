//useState/src/Counter.jsx
import { useState } from 'react';

const Counter = () => {
    // 1. Memoria
    const [count, setCount] = useState(0);

    // 2. Acción 
    const handleClick = () => {setCount(count + 1);}; 
    // 3. Vista
    return (
            <button onClick={handleClick}> Estos son mis clicks: {count} </button>
        );
};

export default Counter;