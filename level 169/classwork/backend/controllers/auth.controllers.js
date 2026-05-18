import User from "../models/user.model.js";
import catchAsync from "../utils/catchAsync.js";

export const signUp = catchAsync(async (req, res) => {
    const { fullname, email, password } = req.body;
    const newUser = await User.create({ fullname, email, password });
    res.status(201).json(newUser);
});