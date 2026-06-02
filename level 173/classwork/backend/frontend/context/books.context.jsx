import { createContext } from "react";

const booksContext = createContext();

const books = ({children}) => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/books`);

        if(!response.ok) {
            throw new Error("Failed to fetch books");
        }

    }
}