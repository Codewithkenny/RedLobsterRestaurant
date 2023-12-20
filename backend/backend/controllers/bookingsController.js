const Booking = require("../models/booking");

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;
    const newBooking = new Booking({ name, email, date, time });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
