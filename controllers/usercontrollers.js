const user = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
  try{
    const { name, email, age } = req.body;

    if(!name || !email || !age){
      return res.status(400).json({message: 'please provide all the required fields'});
    }

    const newUser = new user({ name, email, age });
    await newUser.save();
    res.status(201).json({message: 'User created successfully', user: newUser});

  } catch(error){
    res.status(500).json({message: error.message});
  }
}

