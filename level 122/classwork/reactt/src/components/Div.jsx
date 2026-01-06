import { useState } from "react"

const Div = () => {
    const [col, setCol] = useState("");

    const handleChange = event => {
        setCol(event.target.value)
    }

    return (
        <div style={{"height" : "100vh", "width" : "100vw", "display" : "flex", "alignItems" : "center", "justifyContent" : "center", "backgroundColor" : `${col}`}}>
            <form>
                <input type="text" onChange={handleChange} />
            </form>
        </div>
    )
};

export default Div;