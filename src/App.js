import React,{useEffect} from 'react';
import './App.css';
import searchIcon from './search.svg';


const API_URL ='http://www.omdbapi.com/?i=tt3896198&apikey=c3d2f9e5'


const movie1={
    
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    
}


const App = () => {
const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}`);
    const data = await response.json();
    console.log(data.Search);
}

    useEffect(() => {
        searchMovies('batman');


    }, []);





  return (
    <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input placeholder='Search for movies'
            value='Superman'
            onChange={(e) => searchMovies(e.target.value)}
            />
            <img src={searchIcon} 
            alt="search"
            onClick={() => searchMovies('batman')}
            />
            </div>
        </div>
  );
}

export default App;


//http://www.omdbapi.com/?i=tt3896198&apikey=c3d2f9e5