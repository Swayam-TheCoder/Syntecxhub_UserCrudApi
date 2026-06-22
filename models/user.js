const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // Each email should be unique in the database
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"] // email validation
  },
  age: {
    type: Number,
    required: true
  },
},{
  timestamps: true // Automatically adds createdAt and updatedAt fields, its mandantory to add
})

const User = mongoose.model('User', userSchema);
module.exports = User;