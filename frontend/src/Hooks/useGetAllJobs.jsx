import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {JOB_API_END_POINT} from "../utils/constant";

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log("Error fetching jobs:", error);
            }
        };

        // Call the fetch function
        fetchAllJobs();
    }, [dispatch]); // Include dispatch in dependency array to avoid warnings
};

export default useGetAllJobs;
