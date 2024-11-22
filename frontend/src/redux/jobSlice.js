import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singlJob :null,
        searchJobByText:"",
        // loading:false,
    },

    reducers:{
        setAllJobs:(state,action) =>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action) =>{
            state.singlJob = action.payload;
        },
        setAllAdminJobs:(state,action) =>{
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText = action.payload;
        },

    }
})

export const {setAllJobs,setSingleJob,setAllAdminJobs,setSearchJobByText} =jobSlice.actions;
export default jobSlice.reducer;