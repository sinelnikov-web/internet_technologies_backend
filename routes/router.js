import {Router} from "express";
import {getMe} from "../controllers/getMeController";
const router = Router()

router.get('/api/me', getMe)

export default router