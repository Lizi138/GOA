import { useState } from "react";
import {Navigate} from "react-router";

const Home = () => {
    const [count, setCount] = useState(0);

    if (count === 1) {
        return (
            <Navigate to="/Contact" />
        )
    }

    return (
        <div>
            <button onClick={() => setCount(count)}>Click here</button>
        </div>
    )
}

export default Home;