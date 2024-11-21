// import React, { useState } from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Barcode from 'react-barcode';
// import Motion from './pages/Motion'
// import Internet from './pages/Internet'
// import Latency from './pages/Latency'
// import Battery from './pages/Battery'
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { fetchProducts } from './pages/productsSlice';
// import CategoryFilter from './pages/CategoryFilter';
// import SearchBar from './pages/SearchBar';
// import ProductList from './pages/ProductList';
// import { Container } from '@mui/material';
import Nav from "./navbar/Nav"
import HeroSection from './Page/HeroSection';
import PagesSection from './Page/PagesSection';
import Image1 from './Page/Image1';
import Image2 from './Page/Image2';
import Image3 from './Page/Image3';
import Discription from './Page/Discription';
import MainFeatures from './Page/MainFeatures';
import Footer from './Page/Footer';
import Comment from './Page/Comment';


// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#f0f0f0',
//     },
//   },
// });

function App() {



  return (
  <>

<Nav/>
  
 <HeroSection/>
<Image2/>
<Image3/>
 <PagesSection/>
 <Image1/>
 <Discription/>
 <MainFeatures/>
 <Comment/>
 <Footer/>
  </>
  );
}

export default App;




















  // const dispatch = useDispatch();
  // const location = useLocation();
  // const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  // const searchQuery = new URLSearchParams(location.search).get('search');

  // useEffect(() => {
  //   dispatch(fetchProducts(selectedCategory, searchQuery));
  // }, [dispatch, selectedCategory, searchQuery]);







{/* <Container>
<SearchBar />
<CategoryFilter />
<ProductList />
</Container> */}
 // State to store the input and barcode value
  // const [inputValue, setInputValue] = useState('');
  // const [barcodeValue, setBarcodeValue] = useState('barcode-example');

  // // Function to handle input change
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // // Function to generate barcode on button click
  // const handleGenerateBarcode = () => {
  //   setBarcodeValue(inputValue);
  // };

{/* <Box
display="flex"
flexDirection="column"
alignItems="center"
justifyContent="center"
minHeight="100vh"
>
{/* Heading 
<h1 style={{ textAlign: 'center' }}>Barcode Generator</h1>     */}

{/* Input field for barcode value 
<TextField
  label="Enter Barcode Value"
  variant="outlined"
  value={inputValue}
  onChange={handleInputChange}
  margin="normal"
/>
*/}
{/* Button to generate barcode 
<Button 
  variant="contained" 
  color="primary" 
  onClick={handleGenerateBarcode}
  style={{ marginTop: '16px' }}
>
  Generate Barcode
</Button>
*/}
{/* Barcode display */}
  {/*  <Box mt={4}>
  <Barcode value={barcodeValue} />
</Box>
</Box>
 
*/}




{/*-----------------------------------------------------------------------------------------------------------------------*/}

// <Box display="flex" flexDirection="column" gap={2}>

// <Box>
//   <Motion />
// </Box>


// <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
//   <Box flex={1}>
//     <Internet />
//   </Box>
//   <Box flex={1}>
//     <Latency />
//   </Box>
// </Box>


// <Box>
//   <Battery />
// </Box>
// </Box>