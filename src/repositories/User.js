const User = require('../models/User');

exports.findByUsername = async (username) => {
  return await User.findOne({ where: { username } });
};
