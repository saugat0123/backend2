const express = require("express");
const  router = express.Router();
const { protect } = require("../middleware/auth");

const {
   addItem,
   itemUpdate,
   getItems,
   getAllDrinks,
   getAllVege,
   getAllNonVege,
   ItemPhotoUpload
  } = require("../controllers/item");

  router.post("/add/item", protect, addItem);
  router.get("/item/all",protect, getItems)
  router.get("/item/drink",getAllDrinks)
  router.get("/item/vege",getAllVege)
  router.get("/item/non-vege",getAllNonVege)
  router.put("/item/update", protect, itemUpdate)
  
  router.put("/item/:id/photo",protect, ItemPhotoUpload);
  
  

  module.exports = router