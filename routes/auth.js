const express = require("express");
const router = express.Router();

const { register, login, getMe, logout, UserPhotoUpload } = require("../controllers/auth");
//const { updateStudent } = require("../controllers/student");

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/user/:id/photo", UserPhotoUpload)
// router.post("/forgotpassword", forgotPassword);
// router.put("/resetpassword/:resettoken", resetPassword);
router.get("/logout", logout)
//router.put("/update", updateStudent)

module.exports = router;
