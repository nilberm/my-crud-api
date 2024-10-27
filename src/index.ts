import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from './controllers/userController';

const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/users', createUser);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
