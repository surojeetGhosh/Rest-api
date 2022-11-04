const router = require("express").Router();
const controller = require("../controller");

router.route("/").get(controller.isApiWorking);
router.route("/add").post(controller.add);
router.get("/getBook/:BookId").get(controller.getBook);

module.exports = router;