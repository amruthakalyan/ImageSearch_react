import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'; 
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const onSearchSubmit = async (term) => {
    console.log('API Key:', process.env.REACT_APP_UNSPLASH_ACCESS_KEY); 

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      });
      console.log(response.data); // Log response data
      if (response.data && response.data.results) {
        setImages(response.data.results);
      } else {
        setError('Unexpected response structure');
      }
    } catch (error) {
      console.error('API Request Error:', error.response ? error.response.data : error.message);
      setError('An error occurred while fetching data: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="ui container">
      <Navbar /> 
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {error && <div className="ui red message">{error}</div>}
      <ImageList images={images} />
      <Footer/>
    </div>
  );
};

export default App;
