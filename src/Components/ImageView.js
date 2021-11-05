import {useEffect} from 'react'

function ImageView({ result, photos }) {
  const namesArr = [];
  useEffect(() => {
    if (photos !== "") {
      result.forEach((photo) => {
      const parseURI = async (d) => {
        let reader = new FileReader()
        reader.readAsDataURL(d)
        return new Promise((res, rej) => {
          reader.onload = (e) => {
            res(e.target.result)
          }
        })
      }

      const getDataBlob =  async (url) => {
        const res = await fetch(url)
        const blob = await res.blob()
        const uri = await parseURI(blob)
        namesArr.splice(namesArr.length, 0, uri)
        localStorage.setItem(photos, JSON.stringify(namesArr))
      }
        getDataBlob(photo.cover_photo.urls.small)
      })
    }
  }, [result])
  

  return (
    <div className='images'>
      {result.map((photos, index) => (
        <img
          key={index}
          src={photos.cover_photo.urls.small}
          alt=''
        />
      ))}
    </div>
  )
}

export default ImageView