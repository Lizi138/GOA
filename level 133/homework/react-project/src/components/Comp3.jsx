import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Comp3 = () => {
    const { Thm } = useContext(MainContext);

    return (
        <button onClick={Thm}>
            Theme
        </button>
    );
};

export default Comp3;
