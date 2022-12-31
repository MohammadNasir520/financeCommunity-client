import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./features/Students/studentSlice";

const store = configureStore({
    reducer: {
        students: studentSlice,
    }
});
export default store;