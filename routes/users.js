import express from 'express';
import { v4 as uuidv4 } from 'uuid';

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
const users = [];

// all routes in here are starting with /users

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;
    const userWithId = { id: uuidv4(), ...user};
    
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the DATABASE`);
});


// /users/2 => req.params { id: 2}

router.get('/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;

    const foundUser = users.find( user => user.id === id);

    res.send(foundUser);

});

export default router;