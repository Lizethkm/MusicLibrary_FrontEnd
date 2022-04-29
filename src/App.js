import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import CreateNewSong from './Components/CreateNewSong/CreateNewSong';
import background from './Assests/UX-HTML-CSS/small-background.jpg'
import './App.css'



function App() {

  const [entries, setEntries] = useState([])
  const [newSongs, setNewSongs] = useState ([])

  useEffect(()=> {
    getAllSongs()
  },[])
  
  
  async function getAllSongs (){
    let allSongs = await axios.get('http://127.0.0.1:8000/api/song/')
    setEntries(allSongs.data)
    setNewSongs (allSongs.data)
  }

  async function createNewSong(props){
    let newSong = await axios.post('http://127.0.0.1:8000/api/song/', props)
    getAllSongs()

  }

  function filterSongs(props){
    const filteredSongs = entries.filter((el) => {
      if(el.title.toLowerCase().includes(props)){
        return true
      }
      else if(el.artist.toLowerCase().includes(props)){
        return true
      }
      else if(el.album.toLowerCase().includes(props)){
        return true
      }
      else if(el.release_date.toLowerCase().includes(props)){
        return true
      }
      else if(el.genre.toLowerCase().includes(props)){
        return true
      }

    })
    setNewSongs(filteredSongs)
  }




  return (
    <div className='container-fluid'>
      <div  className='background'  ></div>   
      <div className='row'> 
        
        <div className='border-boxSearchBar'>
          < SearchBar foundSongs= {filterSongs}/>
        </div> 
      

        <div className='col-sm-12'>
          <div className='border-box'>
            < DisplayMusic parentEntries= {newSongs}/>
          </div>
        </div> 

        <div className='col-sm-3'>
          <div className='border-boxCreateNewSong'>
            <CreateNewSong createNewSong = {createNewSong} />
          </div>
        </div>  
      
      </div>
    
    </div>
  );
}

export default App;
