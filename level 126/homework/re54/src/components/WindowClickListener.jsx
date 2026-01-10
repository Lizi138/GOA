import { useEffect } from "react";

const WindowClickListener = () => {
    useEffect(() => {
        const handleWindowClick = () => {
        console.log("Window was clicked");
        };

    window.addEventListener("click", handleWindowClick);

    return () => {
        window.removeEventListener("click", handleWindowClick);
        console.log("Event listener removed");
    };
    }, []);

    return <button>Click anywhere</button>;
};

export default WindowClickListener;
