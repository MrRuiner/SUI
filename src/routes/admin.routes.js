import { Router } from "express"
import { adminPage } from "../controllers/admin.controller.js"

const router = Router()

router.get("/admin", adminPage)

export default router