import { Router } from "express";

import authorized from "../middleware/auth.middleware.js";
import { getUsers,getUser } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.get('/',getUsers);

userRouter.get('/:id',authorized,getUser);

userRouter.post('/',(req,res)=> res.send({title:'create new users'}));

userRouter.put('/:id',(req,res)=> res.send({title:'update all users'}));

userRouter.delete('/:id',(req,res)=> res.send({title:'get all users'}));


export default userRouter;

//jrcIcDuQcVw3tq8W