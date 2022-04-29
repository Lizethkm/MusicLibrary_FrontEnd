import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';



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




  return (
    <div>
      < DisplayMusic parentEntries= {entries}/>
    </div>
  );
}

export default App;
