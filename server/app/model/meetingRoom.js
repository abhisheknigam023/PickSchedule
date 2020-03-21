const mongoose = require("mongoose");

const MeetingRoomSchema = mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true
    }
  },
  {
    collection: "MeetingRoom",
    versionKey: false
  }
);

module.exports = mongoose.model("MeetingRoom", MeetingRoomSchema);
