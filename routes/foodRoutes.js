const {Router} = require("express")
const {createFood,getMenu} = require("../controllers/foodController")
const {protect} =require("../middlewares/authMiddlewares")

const router =Router()

router.route("/foods").post(protect, createFood).get(protect, getMenu)


module.exports=router