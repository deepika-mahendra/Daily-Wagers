import express from 'express';
import { userRouter } from './resources/users/user.router';
export const restRouter = express.Router();
restRouter.use('/user',userRouter);