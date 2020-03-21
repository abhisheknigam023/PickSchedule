const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
  {
    meetingRoom: {
      type: String,
      required: true
    },
    meetingAgenda: {
      type: String,
      required: true
    },
    meetingDate: {
      type: Date,
      required: true
    },
    timeFrom: {
      type: Date,
      required: true
    },
    timeTo: {
      type: Date,
      required: true
    }
  },
  {
    collection: "Booking",
    versionKey: false
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
