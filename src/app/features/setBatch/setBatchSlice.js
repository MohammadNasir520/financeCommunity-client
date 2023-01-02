import { createSlice } from "@reduxjs/toolkit"

const initialBatch = {
    batch: 2020,
}


export const setBatchSlice = createSlice({
    name: 'batch',
    initialState: initialBatch,
    reducers: {
        showBatch: (state) => state
    }
})


export const { showBatch } = setBatchSlice.actions;
export default setBatchSlice.reducer;













// export const setBatch = () => {
//     return {
//         type: 'setBatch'
//     }
// }

// const initialBatch = { batch: 0 };

// export const setBatchReducer = (state, action) => {

//     switch (action.type) {
//         case 'setBatch':

//             return {
//                 ...state,
//                 batch: state.batch
//             }

//         default:
//             break;
//     }

// }