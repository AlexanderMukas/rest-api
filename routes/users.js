import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// CRUD
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;