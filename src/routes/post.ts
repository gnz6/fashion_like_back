import express from "express"
const router = express.Router()

router.get("/", (req,res)=>{})
router.get("/:post_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:post_id", (req,res)=>{})
router.delete("/:post_id", (req,res)=>{})

export default router