import { configureStore } from "@reduxjs/toolkit";
import setBatchSlice from "./features/setBatch/setBatchSlice";
import studentSlice from "./features/Students/studentSlice";

const store = configureStore({
    reducer: {
        students: studentSlice,
        setBatch: setBatchSlice,
    }
});
export default store;