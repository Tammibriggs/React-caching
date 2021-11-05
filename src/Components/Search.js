import {useState} from 'react'
import ImageView from './ImageView'

function Search() {
  const [image, setImage] = useState('')

  return (
    <>
      <form className='search'>
        <input
          type="search"
          onChange={(e) => setImage(e.target.value)}
          placeholder='Enter image name'
        />
        <button type="submit">Search</button>
      </form>
      <ImageView />
    </>  
  )
}

export default Search