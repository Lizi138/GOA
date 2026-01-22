import { createContext, useState } from "react";

export const MainContext = createContext();

const Provider1 = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const Thm = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    return (
        <MainContext.Provider value={{ theme, Thm }}>
            {children}
        </MainContext.Provider>
    );
};

export default Provider1;
