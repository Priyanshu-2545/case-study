const express = require('express');
const app = express();

app.use(express.json());

// Routes
const alertRoutes = require('./routes/alerts');
app.use('/api/companies/:company_id/alerts', alertRoutes);

app.get('/', (req, res) => {
  res.send("Backend Case Study Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});