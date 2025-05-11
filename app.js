import express from 'express';
import {port} from './config/env.js'; 

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.rotes.js';
import subscription from './routes/subscription.route.js';
import connectToDatabase from './Database/mongodb.js';
import errorMiddleware from './middleware/error.js';
import cookieParser from 'cookie-parser';
const app = express();


app.use (express.json());
 app.use(express.urlencoded({extended:false}));
 //app.use(cookieParser);

 app.use('/api/v1/auth',authRouter);
app.use('/api/v1/user',userRouter);
 app.use('/api/v1/sub',subscription);

 app.use(errorMiddleware);

app.get('/', (req, res) => {
    res.send('Welcome to my new subscription');
});

app.listen(port, async () => {
    console.log(`Subscription Tracker API is running on http://localhost:${port}`);
    
   await connectToDatabase();

});

export default app;
