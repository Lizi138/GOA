import { useEffect, useState } from "react";

const IntervalTimer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
        console.log("Interval running");
        }, 1000);

    return () => {
        clearInterval(intervalId);
        console.log("Interval cleared");
    };
    }, []);

    return <h2>Count: {count}</h2>;
};

export default IntervalTimer;
