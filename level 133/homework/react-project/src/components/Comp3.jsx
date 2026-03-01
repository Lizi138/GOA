import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Comp3 = () => {
    const { Thm } = useContext(MainContext);

    return (
        <button onClick={Thm} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Theme
        </button>
    );
};

export default Comp3;
