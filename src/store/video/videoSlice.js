import axios from 'axios';
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

export const getVideoList = createAsyncThunk(
    "GET_VIDEO_LIST",
    async (url) => {
        try{
            const res = await axios.get(url);
            return res.data.items
        }catch(err){
            console.log(err)
        }
    }
)

export const getChannelInfo = createAsyncThunk(
    "GET_CHANNEL_INFO",
    async (url) => {
        try{
            const res = await axios.get(url);
            return res.data.items
        }catch(err){
            console.log(err)
        }
    }
)




const videoSlice =  createSlice({
    name:'video',
    initialState:{
        data:[],
        listLayout:'grid',
        loading:true,
        channel:'',
    },
    reducers: {  
        videoListLayout:(state,action) => {
            state.listLayout=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getVideoList.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(getVideoList.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        })
        builder.addCase(getVideoList.rejected,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(getChannelInfo.fulfilled,(state,action)=>{
            console.log('비디오채널 정보',action.payload)
            state.channel=action.payload;
        })
    }
})

export const { videoListLayout } = videoSlice.actions
export default videoSlice.reducer