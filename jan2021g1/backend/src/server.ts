import express, { RequestHandler } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.router';
import proizvodRouter from './routes/proizvod.router';

const app = express();

app.use(cors());
app.use(bodyParser.json() as RequestHandler);

mongoose.connect('mongodb://root:example@127.0.0.1:27017/palacinkarnica2021?authSource=admin')

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('db ok')
});

const router = express.Router();

router.use('/users', userRouter);
router.use('/proizvodi', proizvodRouter);

app.use('/', router);

app.listen(4000, () => console.log('Express running on http://localhost:4000'));
