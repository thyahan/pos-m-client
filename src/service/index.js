import { GET, POST, DELETE, PUT } from './api';
import {
  USER,
} from './apiList';

export const getUser = () => GET(USER);
export const createUser = (data) => POST(USER, data);
export const updateUser = (id, data) => PUT(`${USER}/${id}`, data);
export const deleteUser = (id) => DELETE(`${USER}/${id}`);
