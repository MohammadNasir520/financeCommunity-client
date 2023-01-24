import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStudents = createAsyncThunk("posts/fetchUsers", async () => {
    const students = await fetch(`http://localhost:5000/students`)
    const res = await students.json()
    return res;
})


const studentSlice = createSlice({
    name: 'students',
    initialState: {
        isLoading: false,
        students: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state) => {
            state.isLoading = true;
        })


        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.isLoading = false;
            state.students = action.payload;
            state.error = null;
        })


        builder.addCase(fetchStudents.rejected, (state, action) => {
            state.isLoading = false;
            state.students = [];
            state.error = action.error.message;
        })
    }
})
export default studentSlice.reducer;