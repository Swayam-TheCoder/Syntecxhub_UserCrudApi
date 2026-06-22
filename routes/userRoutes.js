const express = require('express');
const router = express.Router();

const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/usercontrollers');

// create a new user
router.post('/', createUser);

// get all users
router.get('/', getUsers);

// get a single user by ID
router.get('/:id', getUserById);

// update a user by ID
router.put('/:id', updateUser);

// delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;  