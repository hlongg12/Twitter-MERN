const jwt = require('jsonwebtoken');

exports.checkCurrentUser = async (req, res, next) => {
  // Access Authorization from header
  const Authorization = req.header('authorization');

  if(!Authorization) {
    req.user = null;
    next();
  } else {
    // Get token from Authorization
    const token = Authorization.replace('Bearer ', '');

    // Verify token
    try {
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      req.user = { userId };
      next();
    } catch (error) {
      req.user = null;
      next();
    }
  }
}