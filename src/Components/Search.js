import {useState} from 'react'
import ImageView from './ImageView'
import axios from "axios"


function Search() {
  const [images, setImages] = useState('')
  const [result, SetResult] = useState([])
  const url = 'https://api.unsplash.com/search/collections'
  const accessKey = 'AjZEWDDK9030ODt0W-Lypidefagu_EVUzRTapbkcnlM';

  const handleSubmitvalue = (e) => {
    e.preventDefault()
    if (navigator.onLine) {
      // Fetching images from unSplash with axios
      axios
        .get(url, {
          params: {
            client_id: accessKey,
            query: images,
          },
        })
        .then((response) => {
          SetResult(response.data.results)
        })
        .catch((error) => {
          alert(error);
        })
    } else {
      // Get data from localstorage 
      let resp = localStorage.getItem(images)
      SetResult(JSON.parse(resp))
    }
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