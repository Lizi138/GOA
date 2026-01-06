import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleClic1 = () => setCount(count +2 )
    const handleClick2 = () => setCount(0)
    const handleCkick3 = () => setCount(count -2)

    const dis = count > 10
    const dis2 = count < -10

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClic1} disabled={dis}>Inc</button>
            <button onClick={handleCkick3} disabled={dis2}>Plius</button>
            <button onClick={handleClick2}></button>
        </div>

    )
};

export default Counter;