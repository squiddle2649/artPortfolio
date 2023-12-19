import Header from './../../components/header'
import Gallery from './gallery'
import './galleryStyling.css'
const MainPage = () =>{
    document.body.style.backgroundColor="#e3cfb6"
    return <div>
        
        <TitleContainer></TitleContainer>
        <Gallery></Gallery>
    </div>

}

const TitleContainer = () =>{
    return <div className='titleContainer'>
    <img className="painting" style={{
        width:"100vw",
        margin:"0"
    }} src={require('../../images/IMG_8313.jpg')}>
    </img>
    <h1 className='heading'>Ana Cristina Avelar</h1>
    <h2 className='description'>Engineer turned artist</h2>
        <Header current="work"></Header>
    </div>
}
export default MainPage