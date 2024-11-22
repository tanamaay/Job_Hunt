import { setAllAdminJobs } from "@/redux/jobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {JOB_API_END_POINT} from "../utils/constant";

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log("Error fetching jobs:", error);
            }
        };

        // Call the fetch function
        fetchAllAdminJobs();
    }, [dispatch]); // Include dispatch in dependency array to avoid warnings
};

export default useGetAllAdminJobs;
