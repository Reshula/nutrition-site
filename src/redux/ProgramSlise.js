import { createSlice } from '@reduxjs/toolkit'

export const ProgramSlice = createSlice ({
   name:" programs ",
   initialState :{
    selectedCategory: ""
},
reducers: {
    filterCategory: (state, action) =>{
        state.selectedCategory = action.payload
    }

},
})
export const getSelectedCategory = state =>state.programs.selectedCategory;
export const { filterCategory } = ProgramSlice.reducer;
export default ProgramSlice.reducer;



