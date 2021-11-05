import {useState} from 'react'
import ImageView from './ImageView'
import axios from "axios"


function Search() {
  const [image, setImage] = useState('')
  const [result, SetResult] = useState([])
  const url = 'https://api.unsplash.com/search/collections'
  const clientid = 'AjZEWDDK9030ODt0W-Lypidefagu_EVUzRTapbkcnlM';

  const handleSubmitvalue = (e) => {
    e.preventDefault()
    // Fetching images from unSplash with axios
    axios
      .get(url, {
        params: {
          client_id: clientid,
          query: image,
        },
      })
      .then((response) => {
        SetResult(response.data.results)
      })
      .catch((error) => {
        alert(error);
      })
  }

  return (
    <>    
      <form 
        className='search' 
        onSubmit={handleSubmitvalue}>
        <input
          type="search"
          onChange={(e) => setImage(e.target.value)}
          placeholder='Enter image name'
        />
        <button type="submit">Search</button>
      </form>
      <ImageView result={result}/>
    </>  
  )
}

export default Search