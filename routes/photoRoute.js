import express from "express";
import * as photoController from "../controllers/photoContoller.js"

const router=express.Router();

router.route("/").post(photoController.createPhoto);

export default router;   