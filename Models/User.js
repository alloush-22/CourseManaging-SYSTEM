const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      
    },lastName: {
        type: String,
        required: true,
        trim: true,
        
      },userName: {
        type: String,
        required: true,
        trim: true,
        unique:true,
        
      },email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    imageURL: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
