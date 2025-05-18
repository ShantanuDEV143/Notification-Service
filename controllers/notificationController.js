const Notification = require('../models/Notification');
const sendEmail = require('../services/emailService');

exports.createNotification = async (req, res) => {
  const { title, message, recipient } = req.body;
  const notification = await Notification.create({ title, message, recipient });

  try {
    await sendEmail({ title, message, recipient });
  } catch (e) {
    console.error('Email error:', e);
  }

  res.json(notification);
};

exports.getAllNotifications = async (req, res) => {
  const notifications = await Notification.find().sort({ createdAt: -1 });
  res.json(notifications);
};

exports.updateNotification = async (req, res) => {
  const { id } = req.params;
  const { read } = req.body;
  const updated = await Notification.findByIdAndUpdate(id, { read }, { new: true });
  res.json(updated);
};
