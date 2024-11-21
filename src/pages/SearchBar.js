// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchProducts } from './productsSlice';
// import { TextField, Button } from '@mui/material';

// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();


//   const handleSearch = () => {
//     navigate(`?search=${query}`);
//     dispatch(fetchProducts(null, query));
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
//       <TextField
//         label="Search products"
//         variant="outlined"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         style={{ marginRight: '10px' }}
//       />
//       <Button variant="contained" color="primary" onClick={handleSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;
