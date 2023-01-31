import express from "express"
const router = express.Router()

router.get("/", (req,res)=>{})
router.get("/:user_id", (req,res)=>{})
router.post("/", (req,res)=>{})
router.put("/:user_id", (req,res)=>{})
router.delete("/:user_id", (req,res)=>{})

export default router