import express from 'express';

const router = express.Router();

const users = [
    {
    firstName: "John",
    lastName: "Doe",
    age: 25
    },
    {
        firstName: "Alex",
        lastName: "Dogson",
        age: 22
    }
];


// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    
});


export default router;