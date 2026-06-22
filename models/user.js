const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Each email should be unique in the database
  },
  age: {
    type: Number,
    required: true
  },
},{
  timestamps: true // Automatically adds createdAt and updatedAt fields, its mandantory to add
})