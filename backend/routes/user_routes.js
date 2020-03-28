const router = require("express").Router();

const { userCreation } = require("../controllers/user_controller");

router.route("/user").post(userCreation);

module.exports = router;
