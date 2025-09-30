import express from "express";
const router =express.Router();
import Message from "../models/Message.js";

const validateMessage = (req, res, next) => {
  const { name} = req.body;
  
  if (!name) {
    return res.status(400).json({
      success: false,
      error: 'Name field is required'
    });
  }
  next();
};

router.post('/name', validateMessage, async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      data: {
        id: message._id,
        name: message.name,
        createdAt: message.createdAt
      }
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(400).json({ 
      success: false, 
      error: 'Failed to save message. Please try again.' 
    });
  }
});
export default router;