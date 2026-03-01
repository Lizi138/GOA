import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const Comp1 = () => {
    const { theme } = useContext(MainContext);

    return (
        <div className="w-full max-w-md flex justify-between items-center border p-4 rounded-xl">
            <h2 className="text-xl font-bold">
                {theme}
            </h2>
        </div>
    );
};

export default Comp1;