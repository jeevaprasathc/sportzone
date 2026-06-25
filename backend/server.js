const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let products = [
  {
    id: 1,
    name: "Football Jersey",
    category: "Football",
    price: 999,
    stock: 25
  },
  {
    id: 2,
    name: "Cricket Bat",
    category: "Cricket",
    price: 2499,
    stock: 15
  },
  {
    id: 3,
    name: "Basketball Kit",
    category: "Basketball",
    price: 1799,
    stock: 20
  },
  {
    id: 4,
    name: "Sports Shoes",
    category: "Running",
    price: 2999,
    stock: 10
  },
  {
    id: 5,
    name: "Badminton Racket",
    category: "Badminton",
    price: 1599,
    stock: 18
  }
];

let orders = [];

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to SportZone API",
    status: "Running"
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.json(product);
});

app.post("/api/products", (req, res) => {
  const { name, category, price, stock } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price,
    stock
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product added successfully",
    product: newProduct
  });
});

app.put("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(
    p => p.id === productId
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.name = req.body.name || product.name;
  product.category = req.body.category || product.category;
  product.price = req.body.price || product.price;
  product.stock = req.body.stock || product.stock;

  res.json({
    message: "Product updated successfully",
    product
  });
});

app.delete("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  products = products.filter(
    p => p.id !== productId
  );

  res.json({
    message: "Product deleted successfully"
  });
});

app.post("/api/orders", (req, res) => {
  const { customerName, productId, quantity } = req.body;

  const product = products.find(
    p => p.id === productId
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  const order = {
    orderId: orders.length + 1,
    customerName,
    productName: product.name,
    quantity,
    totalAmount: quantity * product.price,
    status: "Pending"
  };

  orders.push(order);

  res.status(201).json({
    message: "Order placed successfully",
    order
  });
});

app.get("/api/orders", (req, res) => {
  res.json(orders);
});

app.put("/api/orders/:id/status", (req, res) => {
  const order = orders.find(
    o => o.orderId === parseInt(req.params.id)
  );

  if (!order) {
    return res.status(404).json({
      message: "Order not found"
    });
  }

  order.status = req.body.status;

  res.json({
    message: "Order status updated",
    order
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SportZone Server Running on Port ${PORT}`);
});
