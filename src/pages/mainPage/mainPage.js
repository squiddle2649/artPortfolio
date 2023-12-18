import Header from './../../components/header'
import Gallery from './gallery'

const MainPage = () =>{
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
    <h1 style={{
        position:"absolute",
        top:"2%",
        color:"#f2ed84",
        fontSize:"8vw"
        
    }}
    className='heading'>Ana Cristina Avelar</h1>
    <h2 style={{
        position:"absolute",
        top:"19%",
        color:"#f2ed84",
        fontSize:"3vw",
}}
        className='heading'>Engineer turned artist</h2>
        <Header current="work"></Header>
    </div>
}
export default MainPage