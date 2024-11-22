
import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postjob } from "../controllers/job.contoller.js";


const router = express.Router();

router.route("/post").post(isAuthenticated,postjob);
router.route("/get").get (isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);


export default router;


