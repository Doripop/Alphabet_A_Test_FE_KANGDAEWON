import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    ImageList :[]

}




const ImageSlice = createSlice({
    name: "ImageSlice",
    initialState,
    reducers: {
        ImageListAdd: (state, action) => {
            console.log(action.payload, "왔나?")
            state.ImageList = action.payload
        },
        
    },
    extraReducers: {

      
       
    }
}
)




export const { ImageListAdd} = ImageSlice.actions
export default ImageSlice.reducer