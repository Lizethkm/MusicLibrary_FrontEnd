import React, { useState } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';



function App() {

  const [entries, setEntries] = useState([{title:'Help', artist: 'The Beatles', album: 'HELP!',  release_date: 'May 24, 1968', genre: 'Folk Rock'}])


  return (
    <div>
      < DisplayMusic parentEntries= {entries}/>
    </div>
  );
}

export default App;
