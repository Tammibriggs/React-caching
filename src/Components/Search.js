import {useState} from 'react'
import ImageView from './ImageView'
import axios from "axios"


function Search() {
  const [images, setImages] = useState('')
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
          query: images,
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
          onChange={(e) => setImages(e.target.value)}
          placeholder='Enter image name'
        />
        <button type="submit">Search</button>
      </form>
      <ImageView result={result} photos={images} />
    </>  
  )
}

export default Search