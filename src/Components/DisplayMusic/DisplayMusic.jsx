import axios from 'axios';
import React, { useEffect, useState } from 'react';



const DisplayMusic = (props) => {

    // working on delete delete- this below did not work
    // const [eraseSong, setEraseSong] = useState([])
    // const [songlist, setSongList] = useState([])

    // useEffect(() => {
    //     getSongById()
    // }, [])


    //  async function getSongById(event){
    //     let removedSong = await axios.delete('http://127.0.0.1:8000/api/song/9/')
    //     setEraseSong(removedSong.data)
    //     setSongList(removedSong.data)
    //     alert('HTTP 204 NO CONTENT')
    // }

    return ( 
        <div>
        {/* <button onClick={getSongById} value={eraseSong} onChange={(event) => setEraseSong(event.target.value)} ></button> */}
        <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry) => {
              return (
                <tr>
                  <td>{entry.title}</td>
                  <td>{entry.artist}</td>
                  <td>{entry.album}</td>
                  <td>{entry.release_date}</td>
                  <td>{entry.genre}</td>
                </tr>
              
              );
            })}

        </tbody>
      </table>
      </div>
     );
}
 
export default DisplayMusic;