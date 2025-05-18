const express = require('express');
const router = express.Router();
const {
  createNotification,
  getAllNotifications,
  updateNotification
} = require('../controllers/notificationController');

router.post('/', createNotification);
router.get('/', getAllNotifications);
router.put('/:id', updateNotification);

module.exports = router;
