import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import CreateNewSong from './Components/CreateNewSong/CreateNewSong';



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
    <div>
    
      < SearchBar foundSongs= {filterSongs}/>
      <CreateNewSong createNewSong = {createNewSong} />
      < DisplayMusic parentEntries= {newSongs}/>
    </div>
  );
}

export default App;
