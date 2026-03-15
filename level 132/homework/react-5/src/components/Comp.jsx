import { useContext } from "react"
import { MyContext } from "../context/MyContext"

const Comp = () => {
    const cont = useContext(MyContext)
    console.log(cont)

    return (
        <div>
            <p>{cont}</p>
        </div>
    )
}

export default Comp;