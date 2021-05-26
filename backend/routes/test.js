import express from "express"
const router = express.Router()
import { testControllerFunction } from "../controllers/testController.js"

router.route("/").get(testControllerFunction)

export default router
