import './RouterComponent.css';
import login_icon from './login_icon.png';
import logout_icon from './logout_icon.png';
import {Link} from 'react-router-dom';
import React from 'react';
import MainMenu from './MainMenu';
import { Button } from 'react-bootstrap';

function RouterComponent(){

  //  let [toggle,setToggle]=React.useState('No'); //

  //  console.log('u_name : ',sessionStorage.getItem('u_name'));

    let logout =()=>{
        let userChoice = window.confirm('Are you sure you want to log-out ?');
        console.log('userChoice',userChoice);
        if(userChoice===true){
            sessionStorage.removeItem('u_name');
            window.location.href="http://localhost:3000/";
            console.log('logout complete.');
        }
    }
    return (
        <div>   
            {/* <div id="upper_row">
                  <div style={{borderRadius:"45px",border:"6px solid black"}} >
                    <Link to="login">
                          <img  src={login_icon} alt="login_icon" />
                     </Link> 
                  </div> 
                  <br/>
                  <div style={{borderRadius:"45px",border:"6px solid black"}}>
                  <Link to="/">
                        <img src={logout_icon} alt="logout_icon" onClick={logout}/>
                   </Link>
                  </div>
            
            <br/><br/><br/><br/>
            <h2 id="valid_user">Hi {sessionStorage.getItem('u_name')===null ? "":sessionStorage.getItem('u_name')} !! Welcome to Hindustan Times.</h2> 
            </div> 
                                         */}
            {/* <h3 id="valid_user" style={{color:"whitesmoke"}}>Hi {sessionStorage.getItem('u_name')===null ? "":sessionStorage.getItem('u_name')} !! Welcome to Hindustan Times.</h3>  */}
            <nav style={{display:"inline-flex"}}>
                {/* <div >
                    <button onClick={showMenu} style={{backgroundColor:"#F2EBE9" , borderRadius:"10px" ,height:"35px",width:"85px"}}>Menu</button>
                </div> */}
                <div>
                <ul>
                    <li>
                       <MainMenu/>
                    </li>
                    <li id="li_e">
                      <Link to="/">Home</Link>
                    </li>
                    <li id="li_e">
                        <Link to="/technology">Technology</Link>
                    </li>
                    <li id="li_e">
                         <Link to="/sports">Sports</Link>
                    </li>
                    <li id="li_e">
                         <Link to="/entertainment">Entertainment</Link>  
                    </li>
                    <li id="li_e">
                          <Link to="/world">World</Link>
                    </li>
                </ul>
                </div>
            </nav>

        {/* <Slider/>trying slider component */}
        </div>
    );
}

export default RouterComponent;