// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from './productsSlice'; // Import fetchProducts thunk

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const { products, status } = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts()); // Fetch products when component mounts
//   }, [dispatch]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {products.length > 0 ? (
//         products.map((product) => (
//           <div key={product.id}>
//             <h2>{product.title}</h2>
//             <p>{product.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>No products available</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;
