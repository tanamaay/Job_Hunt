import { setAllJobs, setSingleJob } from "@/redux/jobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {JOB_API_END_POINT} from "../utils/constant";

const useGetSingleJob = (JobId) => {
    const dispatch = useDispatch();
    
    
};

export default useGetSingleJob;
