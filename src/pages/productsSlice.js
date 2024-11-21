// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Fetch products with category and pagination
// export const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async (category) => {
//     const response = await fetch(
//       category ? `https://dummyjson.com/products/category/${category}` : 'https://dummyjson.com/products'
//     );
//     const data = await response.json();
    
//     // Return the products array directly
//     return data.products; // Assuming data.products is the array of products
//   }
// );


// const initialState = {
//   products: [],  // Make sure this is an empty array
//   status: 'idle',
// };

// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     resetProducts(state) {
//       state.products = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       console.log(action.payload); // Add this log to inspect the payload
      
//       if (!state.products) {
//         state.products = [];
//       }
  
//       if (Array.isArray(action.payload)) {
//         state.products.push(...action.payload);
//       } else {
//         console.error('action.payload is not an array:', action.payload);
//       }
  
//       state.status = 'success';
//     });
//   }
  
  


// });

// export const { resetProducts } = productsSlice.actions;

// export default productsSlice.reducer;