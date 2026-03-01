import { createContext, useState } from "react";

export const MainContext = createContext();

const Provider1 = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const Thm = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <MainContext.Provider value={{ theme, Thm }}>
            <div className={theme === "light" ? "bg-white text-black min-h-screen" : "bg-gray-900 text-white min-h-screen"}>
                {children}
            </div>
        </MainContext.Provider>
    );
};

export default Provider1;
