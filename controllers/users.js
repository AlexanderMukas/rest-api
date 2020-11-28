import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    const userWithId = { id: uuidv4(), ...user};
    
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the DATABASE`);
}

export const getUser = (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;

    const foundUser = users.find( user => user.id === id);

    res.send(foundUser);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    // from client form
    const { firstName, lastName, age } = req.body;

    const user = users.find( user => user.id === id);

    if(firstName){
        user.firstName = firstName;
    } else if(lastName){
        user.lastName = lastName;
    } else if(age){
        user.age = age;
    }
    
    res.send(`User with id ${id} has been updated from the DATABASE`);

}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter( user => user.id !== id);
    res.send(`User with id ${id} deleted from the DATABASE`);
}

// export default { getUsers, createUser, getUser, updateUser, deleteUser };