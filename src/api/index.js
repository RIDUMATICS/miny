import express from 'express';

const router = express.Router();

router.post('/url', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

export default router;
