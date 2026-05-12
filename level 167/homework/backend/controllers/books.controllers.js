import AppError from "../utils/AppError.js";
import Readfile from "../utils/Readfile.js";
import Writefile from "../utils/Writefile.js";
import catchAsync from "../utils/catchAsync.js"

export const getAllBooks = catchAsync(async (req, res, next) => {
    const allBooks = await Readfile(process.env.DB);
    
    if (allBooks.length === 0) {
        return next(new AppError("No books are available!", 400))
    };

    res.status(200).json(allBooks)
});

export const getSingleBook = catchAsync(async (req, res, next) => {
    const allBooks = await Readfile(process.env.DB);
    const book = allBooks.find(book => book.id === req.params.id);

    if (book.length === 0) {
        return next(new AppError("Book not found!", 404))
    };

    res.status(200).json(book)
});

export const addBook = catchAsync(async (req, res, next) => {
    const allBooks = await Readfile(process.env.DB);
    const newBook = {
        id: `${Date.now()}`,
        ...req.body
    };

    allBooks.push(newBook);
    await Writefile(process.env.DB, allBooks);

    res.status(201).json(newBook)
});

export const deleteBook = catchAsync(async (req, res, next) => {
    const {id} = req.params;
    let allBooks = await Readfile(process.env.DB);

    const boolToDelete = allBooks.some(book => book.id === id);

    if (!boolToDelete) {
        return next(new AppError(`Book with id ${id} does not exist`, 404))
    }

    allBooks = allBooks.filter(book => book.id !== id);
    await Writefile(process.env.DB, allBooks);

    return res.status(204).json()
});