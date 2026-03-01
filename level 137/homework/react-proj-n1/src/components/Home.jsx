import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigte = useNavigate();

    return(
        <div>
            <h2>Home</h2>
            <button onClick={() => navigte("/profile")}>go to profile in website</button>
        </div>
    )
}

export default Home;