import './galleryStyling.css'
import {useState} from "react"
const Gallery = () =>{

    const viewing = false
    const paths = [require('../../images/IMG_5556.jpg'),require('../../images/6470D5CD-277C-4F97-BCF0-94BC4201DAB8.JPG'),
    require('../../images/IMG_4881.jpg'),require('../../images/IMG_3469.jpg'),require('../../images/IMG_2920.jpg'),require('../../images/B2373920-0881-48F0-929B-9BE33E708BD5.JPG'),
    require('../../images/IMG_6425.jpg'),require('../../images/IMG_5506.jpg'),require('../../images/IMG_3535.jpg'),
    require('../../images/IMG_0888.jpg'),require('../../images/IMG_2139_2 (1).jpg'),require('../../images/IMG_7389.jpg'),
    require('../../images/IMG_0890.jpg'),require('../../images/IMG_9511_2 (1).jpg'),require('../../images/IMG_7268.jpg'),
    require('../../images/IMG_3735.jpg')
]
const normalImageStyling = {
    margin:"10px",
    width:"100%"
}

    return <div className ="galleryContainer">
        
        
        <div className="galleryGrid">
            {paths.map((pathToImage,index)=>(
                <img 
                    key={index}
                    style={normalImageStyling}
                    src={pathToImage}
                ></img>
            ))}

        </div>
    </div>
}


export default Gallery