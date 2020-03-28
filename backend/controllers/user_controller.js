const User = require("../models/user");

const userCreation = (req, res, next) => {
  const props = req.body;

  User.CREATE_ACTION(props)
    .then(user =>
      res.json({
        ok: true,
        message: "User created!!",
        user
      })
    )
    .catch(next);
};

module.exports = {
  userCreation
};
