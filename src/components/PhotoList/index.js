import React, {useState} from 'react';


const PhotoList = ({category}) => {

    const [photos] = useState([
      {
        name: 'Nerd-Words',
        category: 'Nerd-Words',
        description: 'Nerd Words Homepage',
      },
      {
        name: 'Tech-Blog',
        category: 'Tech-Blog',
        description: 'Tech Blog Homepage',
      },
      {
        name: 'Rate-Your-Bootcamp',
        category: 'Rate-Your-Bootcamp',
        description: 'Rate Your Bootcamp Homepage',
      },
    ])

    const currentPhoto = photos.filter((photo) => photo.category === category)

    return (
      <div>
      <div className="flex-row">
        {currentPhoto.map((image, i) => {
          return <a href={'https://github.com/mlemke24'} ><img
            src={require(`../../assets/projects/${category}/${i}.jpg`).default}
            alt={image.name}
           
            className="img-thumbnail mx-1"
            key={image.name}
          />
          </a> 
        }
        )}
      </div>
    </div>
    )
}

export default PhotoList;