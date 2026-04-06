const express = require('express');
const router = express.Router();

router.get('/low-stock', (req, res) => {
  const { company_id } = req.params;

  const alerts = [
    {
      product_id: 1,
      product_name: "Widget A",
      current_stock: 5,
      threshold: 20,
      warehouse_name: "Main Warehouse",
      company_id: company_id
    }
  ];

  res.json({
    alerts,
    total_alerts: alerts.length
  });
});

module.exports = router;