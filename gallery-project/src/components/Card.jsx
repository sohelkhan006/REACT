

const Card = ({images}) => {
  return (
    <div >
      <a href={images.url} target="_blank" >
          <div>
            <div className=" h-64 w-70 flex flex-wrap overflow-hidden bg-white rounded-xl">
              <img
                src={images.download_url}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="font-bold text-lg text-center">{images.author}</h2>
          </div>
        </a>
    </div>
  )
}

export default Card
