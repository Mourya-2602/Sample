import express from "express";
const router = express.Router();
import Name from "../models/Name.js";

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      error: 'Name field is required'
    });
  }
  next();
};

router.post('/name', validateName, async (req, res) => {
  try {
    const nameDoc = new Name(req.body);
    await nameDoc.save();
    res.status(201).json({ 
      success: true, 
      message: 'Name saved successfully',
      data: {
        id: nameDoc._id,
        name: nameDoc.name,
        createdAt: nameDoc.createdAt
      }
    });
  } catch (error) {
    console.error('Error saving name:', error);
    res.status(400).json({ 
      success: false, 
      error: 'Failed to save name. Please try again.' 
    });
  }
});

export default router;