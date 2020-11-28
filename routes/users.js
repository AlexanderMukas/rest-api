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
    // console.log(users);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    // const userId = uuidv4();

    const userWithId = { id: uuidv4(), ...user};
    
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the DATABASE`);
});


export default router;