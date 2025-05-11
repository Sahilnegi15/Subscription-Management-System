import { Router } from "express";
import { createsubscription } from "../controller/subscription.controller.js";
import authorized from "../middleware/auth.middleware.js";
const subscription = Router();

subscription.get('/',(req,res)=> res.send({title:'get all subscription'}));

subscription.get('/',(req,res)=> res.send({title:'get all subscription'}));

subscription.post('/',authorized,createsubscription);

subscription.put('/:id',(req,res)=> res.send({title:'update subscription'}));

subscription.delete('/:id',(req,res)=> res.send({title:'Delete subscription'}));

subscription.get('/user/:id',(req,res)=> res.send({title:'get all  user subscription'}));

subscription.put('/:id/cancel',(req,res)=> res.send({title:'get all subscription'}));

subscription.get('/upcoming-renewal',(req,res)=> res.send({title:'get all subscription'}));


export default subscription;