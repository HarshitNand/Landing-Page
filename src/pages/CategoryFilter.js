// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCategories, selectCategory } from "./categoriesSlice";
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

// const CategoryFilter = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state.categories.items);
//   const selectedCategory = useSelector((state) => state.categories.selectedCategory);

//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   const handleCategoryChange = (event) => {
//     dispatch(selectCategory(event.target.value));
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel>Category</InputLabel>
//       <Select
//         value={selectedCategory || ''}
//         onChange={handleCategoryChange}
//         label="Category"
//       >
//         <MenuItem value="">
//           <em>All</em>
//         </MenuItem>
//         {categories.map((category) => (
//           <MenuItem key={category} value={category}>
//             {category}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default CategoryFilter;
