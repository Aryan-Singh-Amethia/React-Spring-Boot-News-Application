import Slider from "../Components/Slider/Slider";
// import {useLocation} from 'react-router-dom';
import SubHome from "./SubHome";


function Home(){

    return (
        <div style={{paddingTop:"160px"}}>
           <Slider/>
           <marquee behavior="scroll" direction="right" style={{color:"10px solid-black"}}><h3>Welcome !! ..... Check Out the latest headlines..</h3></marquee>
           <SubHome/>
        </div>
    );
}

export default Home;