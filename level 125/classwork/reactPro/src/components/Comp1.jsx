import { useEffect, useState } from "react";

const Comp1 = () => {
    // const [name,  setName] = useState("Lizi");
    // const [lastName, setLastName] = useState("Mchedlidze");
    // const [academy, setAcademy] = useState("GOA");


    // return (
    //     <section>
    //         <p>{name}</p>
    //         <p>{lastName}</p>
    //         <p>{academy}</p>
    //     </section>
    // )

    const [count, setCount] = useState(0);
    useEffect(() => {
        alert(count)
    });

    return (
        <div>
            <button onClick={() => setCount(p => p + 1)}>Click</button>
        </div>
    )
}

export default Comp1;