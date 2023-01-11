import express from "express"
import {addRemoveFriend,getUserFriends , getUSer} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js"
const router = express.Router()
router.get("/:id",verifyToken,getUSer)
router.get("/:id/friens",verifyToken,getUserFriends)
router.patch("/:id/:friendId",verifyToken,addRemoveFriend)


export default router


