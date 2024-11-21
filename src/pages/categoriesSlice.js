// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Fetch categories
// export const fetchCategories = createAsyncThunk(
//   'categories/fetchCategories',
//   async () => {
//     const response = await fetch('https://dummyjson.com/products/categories');
//     const data = await response.json();
//     return data;
//   }
// );

// const categorySlice = createSlice({
//   name: 'categories',
//   initialState: {
//     items: [],
//     selectedCategory: '',
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     selectCategory: (state, action) => {
//       state.selectedCategory = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.items = action.payload;
//         state.status = 'succeeded';
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { selectCategory } = categorySlice.actions;

// export default categorySlice.reducer;
