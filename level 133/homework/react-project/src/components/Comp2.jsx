import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import Comp3 from "./Comp3";

const Content = () => {
    const { theme } = useContext(MainContext);

    return (
        <div>
            <p>{theme}</p>
            <Comp3 />
    </div>
    );
};

export default Content;
