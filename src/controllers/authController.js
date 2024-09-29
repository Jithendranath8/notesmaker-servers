const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
