import express from "express"
const router = express.Router()
import { mailControllerFunction } from "../controllers/mailController.js"

router.route("/").post(mailControllerFunction)

export default router
