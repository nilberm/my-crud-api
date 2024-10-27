import { Request, Response } from 'express';
import UserService from '../services/userService';
import { validateUserData } from '../utils/validator';
import User from '../models/User';

let nextId = 1;

export const createUser = async (req: Request, res: Response) => {
  try {
    validateUserData(req.body);
    const user = new User(nextId++, req.body.name, req.body.email);
    const newUser = await UserService.createUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    validateUserData(req.body);
    const updatedUser = await UserService.updateUser(parseInt(req.params.id), req.body);
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const isDeleted = await UserService.deleteUser(parseInt(req.params.id));
  if (!isDeleted) return res.status(404).json({ message: 'User not found' });
  res.status(204).send();
};
