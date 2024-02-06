import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://images.pexels.com/photos/19422490/pexels-photo-19422490/free-photo-of-beautiful-young-brunette-leaning-out-from-behind-a-tree-trunk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
