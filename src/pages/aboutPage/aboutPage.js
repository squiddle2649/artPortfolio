import Header from './../../components/header'

const AboutPage = () =>{
    const imgStyling = {
        width:"40%",
        marginRight:"10px"
    }
    const containerStyling = {
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"50px"

    }
    const infoStyling = {
        width:"60%",
        display:"flex",
        justifyContent:"center",
        alignItems:"start"
    }
    const socialsStyling = {
        marginTop:"50px"
    }
    const textStyling={
        fontSize:"larger"
    }
    
    return <div>
        <Header current="about"></Header>
        <div className="infoContainer" style={containerStyling}>
            <div className="info" style={infoStyling}>
                <img style={imgStyling} src={require('../../images/IMG_4900.jpg')}></img>
                <div>
                    <h2 style={{marginTop:"0"}}>Ana Cristina Avelar</h2>
                    <p style={textStyling}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime

                    </p>
                    <div style={socialsStyling}className="socials">
                        <a href="whitehouse.gov">
                        <h3>Instagram</h3>
                        
                        </a>
                        <a href="nasa.gov">
                        <h3>LinkedIn</h3>
                        
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}
export default AboutPage