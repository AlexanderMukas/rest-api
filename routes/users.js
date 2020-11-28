import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// only array like 'database query'
// const users = [
//     {
//         firstName: "John",
//         lastName: "Doe",
//         age: 25
//     },
//     {
//         firstName: "Alex",
//         lastName: "Dogson",
//         age: 22
//     }
// ];
// let users = [];

// all routes in here are starting with /users

// const getUsers = (req, res) => {
//     res.send(users);
// };

router.get('/', getUsers);

// const createUser = (req, res) => {
//     const user = req.body;
//     const userWithId = { id: uuidv4(), ...user};
    
//     users.push(userWithId);

//     res.send(`User with the name ${user.firstName} added to the DATABASE`);
// }


// CREATE (CRUD)
router.post('/', createUser);


// READ (CRUD)
// /users/2 => req.params { id: 2}


// const getUser = (req, res) => {
//     // const id = req.params.id;
//     const { id } = req.params;

//     const foundUser = users.find( user => user.id === id);

//     res.send(foundUser);
// }



router.get('/:id', getUser);

// UPDATE (CRUD)


// const updateUser = (req, res) => {
//     const { id } = req.params;
//     // from client form
//     const { firstName, lastName, age } = req.body;

//     const user = users.find( user => user.id === id);

//     if(firstName){
//         user.firstName = firstName;
//     } else if(lastName){
//         user.lastName = lastName;
//     } else if(age){
//         user.age = age;
//     }
    
//     res.send(`User with id ${id} has been updated from the DATABASE`);

// }

router.patch('/:id', updateUser);

// DELETE (CRUD)

// const deleteUser = (req, res) => {
//     const { id } = req.params;

//     users = users.filter( user => user.id !== id);
//     res.send(`User with id ${id} deleted from the DATABASE`);
// }

router.delete('/:id', deleteUser);

export default router;