
import { Link } from 'react-router-dom';
import './headerStyling.css'
const Header = (props) => {
    const containerStyling = {
        
        display:"flex",
        justifyContent:"space-evenly",
        width:"100%",
        position: props.current==="work"?"absolute":null,
        top:"0%",
        textDecoration:"none"
    }
    const textStyling = {
        color:props.current==="work"?"#f2ed84":"black"

    }

    return <div className = "headerContainer" style={containerStyling}>
        <Link to="/artPortfolio" style={{textDecoration:"none"}}>
            <h3 style={textStyling} className={props.current==="work" ? "currentItem" : "headerItem"}>Work</h3>
        </Link>
        <Link to="/artPortfolio/about" style={{textDecoration:"none"}}>
            <h3 style={textStyling} className={props.current==="about" ? "currentItem" : "headerItem"}>About</h3>
        </Link>
    </div>
}
export default Header