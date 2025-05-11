import Subscription from "../Models/subscription.model.js"; // ✅ Import the model, not the route

export const createsubscription = async (req, res, next) => {
  try {
    const newSubscription = await Subscription.create({
      ...req.body,
      user: req.user._id, // ✅ Make sure `authorized` middleware is used before this
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: newSubscription,
    });
  } catch (e) {
    next(e);
  }
};
