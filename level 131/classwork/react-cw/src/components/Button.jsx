import { useEffect, useState } from "react"

const Button = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
    }, [count])

    handleClick(() => {
        setCount(prev => prev + 1)
    })


    return (
        <div>
            <button onClick={handleClick}>Click here</button>
            <p>{count}</p>
        </div>
    )
}

export default Button;