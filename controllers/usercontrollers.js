const user = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
  try{
    const { name, email, password } = req.body;

    if(!name || !email || !password){
      return res.status(400).json({message: 'please provide all the required fields'});
    }

    const newUser = new user({ name, email, password });
    await newUser.save();
    res.status(201).json({message: 'User created successfully', user: newUser});

  } catch(error){
    res.status(500).json({message: error.message});
  }
};

// get users
exports.getUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch(error) {
    res.status(500).json({message: error.message});
  }
};

// get user by id / single user

exports.getUserById = async (req, res) => {
  try {
    const users = await user.findById(req.params.id);
    if(!users){
      return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json(users);
  } catch(error){
    res.status(500).json({message: error.message});
  }
}

// update user by id

exports.updateUser = async (req, res) => {
  try {
    const updateduser = await user.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' }); // { returnDocument: 'after' } in newer version is same as new: true, it returns the updated document instead of the original document before the update
    if(!updateduser){
      return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json({message: 'User updated successfully', user: updateduser});
  } catch(error){
    res.status(500).json({message: error.message});
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await user.findByIdAndDelete(req.params.id);
    if(!deletedUser){
      return res.status(404).json({message: 'User not found'});
    }
    res.status(200).json({message: 'User deleted successfully', user: deletedUser});
  } catch(error){
    res.status(500).json({message: error.message});
  }
}