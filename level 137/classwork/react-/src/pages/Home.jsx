import { useEffect } from "react";
import { Navigate } from "react-router"

const Home = () => {
    useEffect(() => {
        <Navigate to="/Info" />
    }, [])

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo nostrum beatae?</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni?</h3>
        </div>        
    )
}

export default Home;