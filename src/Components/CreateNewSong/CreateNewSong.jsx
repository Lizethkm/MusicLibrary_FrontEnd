import React, { useState } from 'react';
import './CreateNewSong.css'




const CreateNewSong = (props) => {

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [release_date, setRelease_Date] = useState('')
    const [genre, setGenre] = useState('')


    function handleCreate(event){
        event.preventDefault()
        let createdSong = {
            title:title,
            artist:artist,
            album:album,
            release_date:release_date,
            genre:genre
        }
        props.createNewSong(createdSong)
    }








    return (  
        <form onSubmit= {handleCreate}>
            <h2>Add Song</h2>
            <hr/>
            <div className='form-grid'>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' value={title} placeholder='Title' onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Artist</label>
                    <input type='text' value={artist} placeholder='Artist' onChange={(event) => setArtist(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Album</label>
                    <input type='text' value={album} placeholder='Album' onChange={(event) => setAlbum(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Release Date</label>
                    <input type='date' value={release_date} placeholder='Release Date' onChange={(event) => setRelease_Date(event.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Genre</label>
                    <input type='text' value={genre} placeholder='Genre' onChange={(event) => setGenre(event.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </div>

        </form>
    );
}
 
export default CreateNewSong;
