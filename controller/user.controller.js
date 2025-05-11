import User from "../Models/user.model.js";

// GET all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

// GET single user by ID
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // ❌ Fixed: invalid argument syntax

    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
