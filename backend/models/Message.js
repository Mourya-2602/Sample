import mongoose from "mongoose";

const messageSchema=new Schema({
    name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
 const Message =mongoose.model("Message",messageSchema);
export default Message;