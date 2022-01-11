import express from 'express';
import mongoose from 'mongoose';
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
//mongoose.connect('mongodb://localhost/CHTQ');

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin:test123@rest-shoping-cart.ibse1.mongodb.net/CHTQ_SHOPPING'
);

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 4000;
app.listen(4000,() => {
    console.log(`Server at http://localhost:${port}`);
});


/*
import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb+srv://admin:test123@rest-shoping-cart.ibse1.mongodb.net/CHTQ');

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.use('/api/users', userRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

 */