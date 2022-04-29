import { useState } from "react";
import './SearchBar.css'





const SearchBar = (props) => {

    const [searchSongs, setSearchSongs] = useState ('')

    let handleSearch = (event) => {
        let searchedSong = event.target.value.toLowerCase()
        setSearchSongs(searchedSong)
        props.foundSongs(searchedSong)
    }


    return ( 
        <form className='Filter'> 
            <h6>Filter</h6>
            <div><input type='text' value= {searchSongs} onChange= {handleSearch} placeholder='Ex:"mariposa traicionera"' /></div>
            <button type="submit">Submit</button> 
        </form>
     );
}
 
export default SearchBar;