import { useState } from "react";





const SearchBar = (props) => {

    const [searchSongs, setSearchSongs] = useState ('')

    let handleSearch = (event) => {
        let searchedSong = event.target.value.toLowerCase()
        setSearchSongs(searchedSong)
        props.foundSongs(searchedSong)
    }


    return ( 
        <form>
            <h2>Search Bar</h2>
            <div><input type='text' value= {searchSongs} onChange= {handleSearch} placeholder='Search Songs' /></div>
            <button type="submit">Submit</button> 
        </form>
     );
}
 
export default SearchBar;