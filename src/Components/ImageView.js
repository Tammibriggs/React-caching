function ImageView({ result }) {

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