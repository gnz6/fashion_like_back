import express from "express"
const router = express.Router()

router.get("/", (req,res)=>{})
router.get("/:product_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:product_id", (req,res)=>{})
router.delete("/:product_id", (req,res)=>{})

export default router