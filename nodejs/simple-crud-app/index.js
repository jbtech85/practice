import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/productModel.js";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Howdy from the Node API")
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});

app.get('/api/product/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.status(200).json(product);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
})

app.post('/api/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});


app.put('/api/products/:id', async (req, res) => {
  try {
    const {id} = req.params;
    await Product.findByIdAndUpdate(id, req.body);

    if(!product){
      return res.status(404).json({message: "Product not found"});
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

  } catch (err) {
    res.status(500).json({message: error.message});
  }
})


mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@simplecrudnem.ls6b3mg.mongodb.net/?appName=SimpleCrudNEM`)
  .then(() => {
    app.listen(2077, () => {
      console.log(`You are now tuned in to Port 2077`);
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });