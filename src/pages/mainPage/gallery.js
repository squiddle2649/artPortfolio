import './galleryStyling.css'

const Gallery = () =>{
    
    const viewing = false
    return <div className ="galleryContainer">
                <div className="galleryGrid">
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_5556.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/6470D5CD-277C-4F97-BCF0-94BC4201DAB8.JPG')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_4881.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_3469.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_2920.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/B2373920-0881-48F0-929B-9BE33E708BD5.JPG')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_6425.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_5506.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_3535.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_0888.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_2139_2 (1).jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_7389.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_0890.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_9511_2 (1).jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_7268.jpg')}></img>
                    <img onClick={(e)=>{
                        if(viewing)return
                        e.target.style={opacity:"0"}
                    }} className="painting" src={require('../../images/IMG_3735.jpg')}></img>
        
                </div>
            </div>
}
export default Gallery