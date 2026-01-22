import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Comp1 = () => {
    const { theme } = useContext(MainContext);

    return (
        <h2>
            {theme}
        </h2>
    );
};

export default Comp1;