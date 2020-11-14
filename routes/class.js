const express = require("express");
const router = express.Router();
const classController = require("../controllers/class");

<<<<<<< Billy
router.get("/showClass/:name", classController.showClass);
=======
router.get("api/class/showclass/:name", classController.showClass);
>>>>>>> Changes
router.get("/", classController.index);
router.get("/id/:id", classController.getById);
router.get("/name/:name", classController.getByName);
router.post("/", classController.create);
router.put("/:name", classController.edit);
router.delete("/:name", classController.delete);

module.exports = router;
